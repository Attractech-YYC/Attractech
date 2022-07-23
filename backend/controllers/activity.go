package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/untold-titan/Attractech/backend/util"
)

func CreateActivitiesRoutes(r gin.IRouter) {
	r.POST("/activity", CreateActivity)
	r.GET("/activity/filter", GetFilterActivity)
	r.POST("/activity/:activity_id/like", LikeActivity)
	r.GET("/activity/:activity_id/like/list", GetLikeActivityList)
}

func CreateActivity(c *gin.Context) {
	util.AbortUnimplemented(c)
}

func GetFilterActivity(c *gin.Context) {
	util.AbortUnimplemented(c)
}

func LikeActivity(c *gin.Context) {
	util.AbortUnimplemented(c)
}

func GetLikeActivityList(c *gin.Context) {
	util.AbortUnimplemented(c)
}
