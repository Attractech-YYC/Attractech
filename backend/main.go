package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/untold-titan/Attractech/backend/controllers"
	"github.com/untold-titan/Attractech/backend/model"
)

func main() {
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})

	model.InitGlobal("root", "dc", "3.96.135.171", 3306, "Attractech")

	api := r.Group("api")
	api.Use(func(c *gin.Context) {
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Credentials", "true")

		if c.Request.Method == "OPTIONS" {
			c.Header("Access-Control-Allow-Origin", "*")
			c.Header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS")
			c.Header(
				"Access-Control-Allow-Headers",
				"authorization, origin, content-type, accept, x-hf-app, x-hfmp-auth",
			)
			c.Header("Allow", "HEAD,GET,POST,PUT,PATCH,DELETE,OPTIONS")
			c.AbortWithStatus(http.StatusNoContent)
			return
		}
		c.Next()
	})
	controllers.CreateUserRoutes(api)
	controllers.CreateCorporationRoutes(api)
	controllers.CreateActivitiesRoutes(api)

	fmt.Printf("Server started at 0.0.0.0:8088")
	r.Run("0.0.0.0:8088") // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
