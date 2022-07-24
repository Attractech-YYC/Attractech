package controllers

import (
	"database/sql"
	"fmt"
	"net/http"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/untold-titan/Attractech/backend/model"
	"github.com/untold-titan/Attractech/backend/util"
)

func CreateActivitiesRoutes(r gin.IRouter) {
	r.POST("/activity", CreateActivity)
	r.GET("/activity/filter", GetFilterActivity)
	r.POST("/activity/:activity_id/like", LikeActivity)
	r.GET("/activity/:activity_id/like/list", GetLikeActivityList)
}

type CreateActivityRequest struct {
	CorporationName string     `json:"corporation_name"`
	Name            string     `json:"name"`
	Description     string     `json:"description"`
	Type            string     `json:"type"`
	Classify        string     `json:"classify"`
	StartAt         *time.Time `json:"start_at"`
	EndAt           *time.Time `json:"end_at"`
	GeoLat          float64    `json:"geo_lat"`
	GeoLng          float64    `json:"geo_lng"`

	Costs          string `json:"costs"`
	TimeCommitment string `json:"time_commitment"`
}

func CreateActivity(c *gin.Context) {
	req := &CreateActivityRequest{}
	c.BindJSON(req)

	corp, err := model.CorporationByName(c, model.GetDB(), req.CorporationName)
	if err != nil {
		if util.IsNotFound(err) {
			util.AbortNotFound(c)
			return
		}
		fmt.Printf("corporation by public id %s error: %v", c.Param("corporation_name"), err)
		util.AbortInternalError(c)
		return
	}

	// point, err := geom.NewPoint(geom.XY).SetCoords(geom.Coord{float64(req.GeoLng), float64(req.GeoLat)})
	// if err != nil {
	// fmt.Printf("create geo point error: %v", err)
	// util.AbortInvalidArgs(c)
	// return
	// }

	activity := &model.Activity{
		CreatedAt:       time.Now(),
		UpdatedAt:       time.Now(),
		Name:            req.Name,
		Description:     req.Description,
		Type:            req.Type,
		Classify:        req.Classify,
		CorporationName: corp.Name,
		CorporationID:   corp.ID,
		// GeoPoint: &wkb.Point{
		// Point: point,
		// },
		TimeCommitment: req.TimeCommitment,
		Costs:          req.Costs,
	}
	if activity.Type == model.ACTIVITY_TYPE_TEMPORARY {
		activity.StartAt = sql.NullTime{Time: *req.StartAt, Valid: true}
		activity.EndAt = sql.NullTime{Time: *req.EndAt, Valid: true}
	}
	if err := activity.Insert(c, model.GetDB()); err != nil {
		fmt.Printf("creagte corporation error: %v", err)
		util.AbortInternalError(c)
		return
	}
	c.Status(http.StatusNoContent)
}

func GetFilterActivity(c *gin.Context) {
	prefrences := strings.Split(c.Query("prefrences"), ",")
	costs := strings.Split(c.Query("costs"), ",")
	times := strings.Split(c.Query("times"), ",")
	activities, err := model.QueryAllActivitiesIn(c, model.GetDB(), prefrences, costs, times)
	if err != nil {
		fmt.Printf("query all activities in %v : %v", prefrences, err)
		util.AbortInternalError(c)
		return
	}
	c.JSON(http.StatusOK, model.BatchToActivityResponse(activities))
}

func LikeActivity(c *gin.Context) {
	util.AbortUnimplemented(c)
}

func GetLikeActivityList(c *gin.Context) {
	util.AbortUnimplemented(c)
}
