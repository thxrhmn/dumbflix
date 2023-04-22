package models

import "time"

type User struct {
	ID            int       `json:"id"`
	AvatarProfile string    `json:"avatarprofile" gorm:"type: varchar(255)"`
	FullName      string    `json:"fullname" gorm:"type: varchar(255)"`
	Email         string    `json:"email" gorm:"unique;not null"`
	Password      string    `json:"password" gorm:"type: varchar(255)"`
	Gender        string    `json:"gender" gorm:"type: varchar(255)"`
	Role          string    `json:"role" gorm:"type: varchar(255)"`
	Phone         string    `json:"phone" gorm:"type: varchar(255)"`
	Address       string    `json:"address" gorm:"type: varchar(255)"`
	Subscribe     bool      `json:"subscribe" gorm:"type: varchar(255)"`
	CreatedAt     time.Time `json:"created_at"`
	UpdatedAt     time.Time `json:"updated_at"`
}

type UsersProfileResponse struct {
	ID            int    `json:"id"`
	AvatarProfile string `json:"avatarprofile"`
	Fullname      string `json:"fullname"`
	Email         string `json:"email"`
	Gender        string `json:"gender"`
	Role          string `json:"role"`
	Phone         string `json:"phone"`
	Address       string `json:"address"`
	Subscribe     string `json:"subscribe"`
}

func (UsersProfileResponse) TableName() string {
	return "users"
}
