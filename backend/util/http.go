package util

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Abort(c *gin.Context, code int, msg string) {
	c.JSON(code, NewError(code, msg))
}

func AbortUnimplemented(c *gin.Context) {
	c.JSON(http.StatusServiceUnavailable, NewError(http.StatusServiceUnavailable, "Unimplemented API"))
}

func AbortInvalidArgs(c *gin.Context) {
	c.JSON(http.StatusBadRequest, NewError(http.StatusBadRequest, "invalid args"))
}

func AbortInternalError(c *gin.Context) {
	c.JSON(http.StatusInternalServerError, NewError(http.StatusInternalServerError, "internal error"))
}

func AbortNotFound(c *gin.Context) {
	c.JSON(http.StatusInternalServerError, NewError(http.StatusInternalServerError, "resource not found"))
}
