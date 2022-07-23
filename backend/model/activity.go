package model

import (
	"context"
	"database/sql"
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
	Type            string       `json:"type"`             // type
	Classify        string       `json:"classify"`         // classify
	StartAt         sql.NullTime `json:"start_at"`         // start_at
	EndAt           sql.NullTime `json:"end_at"`           // end_at
	GeoLng          float64      `json:"geo_lng"`          // geo_lng
	GeoLat          float64      `json:"geo_lat"`          // geo_lat
	Costs           string       `json:"costs"`            // costs
	TimeCommitment  string       `json:"time_commitment"`  // time_commitment
}

func (a *Activity) ToModelResponse() *ActivityResponse {
	return &ActivityResponse{
		ID:              a.ID,
		UpdatedAt:       a.UpdatedAt,
		CreatedAt:       a.CreatedAt,
		CorporationID:   a.CorporationID,
		CorporationName: a.CorporationName,
		Name:            a.Name,
		Type:            a.Type,
		Classify:        a.Classify,
		StartAt:         a.StartAt,
		EndAt:           a.EndAt,
		GeoLng:          a.GeoPoint.X(),
		GeoLat:          a.GeoPoint.Y(),
		Costs:           a.Costs,
		TimeCommitment:  a.TimeCommitment,
	}
}

func BatchToActivityResponse(activities []*Activity) []*ActivityResponse {
	var rets []*ActivityResponse
	for _, v := range activities {
		rets = append(rets, v.ToModelResponse())
	}
	return rets

}

func QueryAllActivitiesIn(ctx context.Context, db *sqlx.DB, prefrences []string) ([]*Activity, error) {
	var rets []*Activity
	err := sqlx.Select(
		db,
		&rets,
		`select * from activity where classify in (?)`,
		prefrences,
	)
	if err != nil {
		return nil, err
	}
	return rets, nil
}
