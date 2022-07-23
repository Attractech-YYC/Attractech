package controllers

import (
	"fmt"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/rs/xid"
	"github.com/untold-titan/Attractech/backend/model"
	"github.com/untold-titan/Attractech/backend/util"
)

func CreateUserRoutes(r gin.IRouter) {
	r.POST("/user", CreateUser)
	r.GET("/user/:user_id", GetUser)
}

type CreateUserRequest struct {
	Name       string   `json:"name"`
	Prefrences []string `json:"prefrences"`
}

// CreateUser
func CreateUser(c *gin.Context) {
	req := &CreateUserRequest{}
	c.BindJSON(req)
	user := &model.User{
		PublicID:   xid.New().String(),
		Name:       req.Name,
		Prefrences: strings.Join(req.Prefrences, ","),
	}
	if err := user.Save(c, model.GetDB()); err != nil {
		fmt.Printf("save user error: %v", err)
		util.AbortInternalError(c)
		return
	}
	c.JSON(http.StatusOK, user.ToModelResponse())
}

// GetUser()
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
