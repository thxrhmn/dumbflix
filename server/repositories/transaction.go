package repositories

import (
	"week-02-task/models"

	"gorm.io/gorm"
)

type TransactionRepository interface {
	FindTransactions() ([]models.Transactions, error) // memasukan kedalam slice
	GetTransaction(ID int) (models.Transactions, error)
	CreateTransaction(transaction models.Transactions) (models.Transactions, error)
	// UpdateTransaction(transaction models.Transactions) (models.Transactions, error)
	UpdateTransaction(status string, orderId int) (models.Transactions, error)
	DeleteTransaction(transaction models.Transactions, ID int) (models.Transactions, error)
}

func RepositoryTransaction(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindTransactions() ([]models.Transactions, error) {
	var transaction []models.Transactions
	err := r.db.Preload("User").Find(&transaction).Error // Using Find method ORM

	return transaction, err
}

func (r *repository) GetTransaction(ID int) (models.Transactions, error) {
	var transaction models.Transactions
	err := r.db.Preload("User").First(&transaction, ID).Error // Using First method ORM

	return transaction, err
}

func (r *repository) CreateTransaction(transaction models.Transactions) (models.Transactions, error) {
	err := r.db.Preload("User").Create(&transaction).Error // Using Create method ORM

	return transaction, err
}

func (r *repository) UpdateTransaction(status string, ID int) (models.Transactions, error) {
	var transaction models.Transactions
	r.db.Preload("User").First(&transaction, ID)

	if status != transaction.Status && status == "succes" {
		var user models.User
		r.db.First(&user, transaction.User.ID)
		user.Subscribe = true
		r.db.Save(&user)
	}

	var transactionData models.Transactions
	r.db.First(&transactionData, ID)
	transaction.Status = status

	err := r.db.Save(&transactionData).Error

	return transaction, err
}

func (r *repository) DeleteTransaction(transaction models.Transactions, ID int) (models.Transactions, error) {
	err := r.db.Delete(&transaction).Error // Using Delete method ORM

	return transaction, err
}

// func (r *repository) UpdateTransaction(transaction models.Transactions) (models.Transactions, error) {
// 	err := r.db.Save(&transaction).Error // Using Save method ORM

// 	return transaction, err
// }
