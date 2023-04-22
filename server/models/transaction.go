package models

import "time"

type Transactions struct {
	ID        int       `json:"id" gorm:"primary_key:auto_increment"`
	StartDate time.Time `json:"-"`
	DueDate   time.Time `json:"-"`
	User      User      `json:"user"`
	UserID    int       `json:"user_id"`
	Status    string    `json:"status" gorm:"type: varchar(255)"`
	Price     int       `json:"price" gorm:"type: int"`
}
