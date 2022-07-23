package controllers

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/untold-titan/Attractech/backend/model"
	"github.com/untold-titan/Attractech/backend/util"
)

func CreateUserRoutes(r gin.IRouter) {
	r.POST("/user", CreateUser)
	r.GET("/user/:user_id", GetUser)
}

// CreateUser
func CreateUser(c *gin.Context) {
	util.AbortUnimplemented(c)
}

// CreateUser
func GetUser(c *gin.Context) {
	db := model.GetDB()
	user, err := model.UserByPublicID(c, db, c.Param("user_id"))
	if err != nil {
		if util.IsNotFound(err) {
			util.AbortNotFound(c)
			return
		}
		fmt.Printf("user by public id %s error: %v", c.Param("user_id"), err)
		util.AbortInternalError(c)
		return
	}
	c.JSON(http.StatusOK, user.ToModelResponse())
}
