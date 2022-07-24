package controllers

import (
	"fmt"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/rs/xid"
	"github.com/untold-titan/Attractech/backend/model"
	"github.com/untold-titan/Attractech/backend/util"
)

func CreateCorporationRoutes(r gin.IRouter) {
	r.POST("/corporation", CreateCorporation)
	r.GET("/corporation/:corporation_name", GetCorporation)
	r.GET("/corporation/:corporation_name/activity", GetCorpActivity)
}

type CreateCorporationRequest struct {
	Name string `json:"name"`
}

func CreateCorporation(c *gin.Context) {
	req := &CreateCorporationRequest{}
	c.BindJSON(req)
	corp := &model.Corporation{
		PublicID:  xid.New().String(),
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
		Name:      req.Name,
	}
	if err := corp.Insert(c, model.GetDB()); err != nil {
		fmt.Printf("save corp error: %v", err)
		util.AbortInternalError(c)
		return
	}
	c.JSON(http.StatusOK, corp.ToModelResponse())
}

func GetCorporation(c *gin.Context) {
	corp, err := model.CorporationByName(c, model.GetDB(), c.Param("corporation_name"))
	if err != nil {
		if util.IsNotFound(err) {
			util.AbortNotFound(c)
			return
		}
		fmt.Printf("corporation by public id %s error: %v", c.Param("corporation_name"), err)
		util.AbortInternalError(c)
		return
	}
	c.JSON(http.StatusOK, corp.ToModelResponse())
}

func GetCorpActivity(c *gin.Context) {
	activities, err := model.ActivityByCorporationName(c, model.GetDB(), c.Param("corporation_name"))
	if err != nil {
		fmt.Printf("query all activities in %v : %v", c.Param("corporation_name"), err)
		util.AbortInternalError(c)
		return
	}
	c.JSON(http.StatusOK, model.BatchToActivityResponse(activities))
}
