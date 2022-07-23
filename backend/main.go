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

	model.InitGlobal("root", "dc", "192.168.70.1", 3306, "Attractech")

	api := r.Group("api")
	controllers.CreateUserRoutes(api)

	fmt.Printf("Server started at 0.0.0.0:8088")
	r.Run("0.0.0.0:8088") // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
