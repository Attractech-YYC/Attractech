package model

import "strings"

type UserResponse struct {
	PublicID   string   `json:"public_id"`
	Name       string   `json:"name"`
	Prefrences []string `json:"Prefrences"`
}

func (u *User) ToModelResponse() *UserResponse {
	return &UserResponse{
		PublicID:   u.PublicID,
		Name:       u.Name,
		Prefrences: strings.Split(u.Prefrences, ","),
	}
}
