package transactiondto

import (
	"time"
	"week-02-task/models"
)

type CreateTransactionRequest struct {
	Id        int         `json:"id"`
	StartDate time.Time   `json:"startdate"`
	DueDate   time.Time   `json:"duedate"`
	User      models.User `json:"user"`
	UserID    int         `json:"user_id"`
	Status    string      `json:"status"`
	Price     int         `json:"price"`
	Days      int         `json:"days"`
}

type UpdateTransactionRequest struct {
	Id        int         `json:"id"`
	StartDate time.Time   `json:"startdate"`
	DueDate   time.Time   `json:"duedate"`
	User      models.User `json:"user"`
	UserID    int         `json:"user_id"`
	Status    string      `json:"status"`
}

// type TransactionRequestcreate struct {
// 	Price int `json:"price"`
// 	Days  int `json:"days"`
// }
