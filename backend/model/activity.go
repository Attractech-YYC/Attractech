package model

import (
	"context"
	"database/sql"
	"log"
	"strings"
	"time"

	"github.com/jmoiron/sqlx"
)

const (
	ACTIVITY_TYPE_PERMANENT = "permanent"
	ACTIVITY_TYPE_TEMPORARY = "temporary"
)

type ActivityResponse struct {
	ID              uint64       `json:"id"`               // id
	UpdatedAt       time.Time    `json:"updated_at"`       // updated_at
	CreatedAt       time.Time    `json:"created_at"`       // created_at
	CorporationID   uint64       `json:"corporation_id"`   // corporation_id
	CorporationName string       `json:"corporation_name"` // corporation_name
	Name            string       `json:"name"`             // name
	Description     string       `json:"description"`
	Type            string       `json:"type"`     // type
	Classify        string       `json:"classify"` // classify
	StartAt         sql.NullTime `json:"start_at"` // start_at
	EndAt           sql.NullTime `json:"end_at"`   // end_at
	// GeoLng          float64      `json:"geo_lng"`          // geo_lng
	// GeoLat          float64      `json:"geo_lat"`          // geo_lat
	Costs          string `json:"costs"`           // costs
	TimeCommitment string `json:"time_commitment"` // time_commitment
}

func (a *Activity) ToModelResponse() *ActivityResponse {
	return &ActivityResponse{
		ID:              a.ID,
		UpdatedAt:       a.UpdatedAt,
		CreatedAt:       a.CreatedAt,
		CorporationID:   a.CorporationID,
		CorporationName: a.CorporationName,
		Name:            a.Name,
		Description:     a.Description,
		Type:            a.Type,
		Classify:        a.Classify,
		StartAt:         a.StartAt,
		EndAt:           a.EndAt,
		// GeoLng:          a.GeoPoint.X(),
		// GeoLat:          a.GeoPoint.Y(),
		Costs:          a.Costs,
		TimeCommitment: a.TimeCommitment,
	}
}

func BatchToActivityResponse(activities []*Activity) []*ActivityResponse {
	rets := make([]*ActivityResponse, 0, len(activities))
	for _, v := range activities {
		rets = append(rets, v.ToModelResponse())
	}
	return rets

}
func QueryAllActivitiesIn(ctx context.Context, db *sqlx.DB, prefrences, costs, times []string) ([]*Activity, error) {
	var (
		wheres []string
		args   []interface{}
	)
	if len(prefrences) > 0 {
		wheres = append(wheres, "classify in (?)")
		args = append(args, prefrences)
	}
	if len(costs) > 0 {
		wheres = append(wheres, "costs in (?)")
		args = append(args, costs)
	}
	if len(times) > 0 {
		wheres = append(wheres, "time_commitment in (?)")
		args = append(args, times)
	}
	if len(wheres) == 0 {
		return nil, nil
	}

	sqlStr, args, err := sqlx.In(
		`select * from activity where `+strings.Join(wheres, " and "),
		args...,
	)
	if err != nil {
		return nil, err
	}
	log.Printf("%s ;;; %v\n", sqlStr, args)

	var rets []*Activity
	err = sqlx.Select(db, &rets, sqlStr, args...)
	if err != nil {
		return nil, err
	}
	return rets, nil
}
