package controllers

type Error struct {
	Code int    `json:"code"`
	Msg  string `json:"msg"`
}

func NewError(code int, msg string) Error {
	return Error{
		Code: code,
		Msg:  msg,
	}
}
