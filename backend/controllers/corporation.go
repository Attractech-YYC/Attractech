package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/untold-titan/Attractech/backend/util"
)

func CreateCorporationRoutes(r gin.IRouter) {
	r.POST("/corporation", CreateCorporation)
	r.GET("/corporation/:corporation_name", GetCorporation)
}

func CreateCorporation(c *gin.Context) {
	util.AbortUnimplemented(c)
}

func GetCorporation(c *gin.Context) {
	util.AbortUnimplemented(c)
}
