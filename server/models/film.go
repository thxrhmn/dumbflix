package models

type Films struct {
	Id            int      `json:"id" gorm:"primary_key:auto_increment"`
	Title         string   `json:"title" form:"title" gorm:"unique;not null"`
	Linkfilm      string   `json:"linkfilm" form:"linkfilm" gorm:"type: varchar(255)"`
	ThumbnailFilm string   `json:"thumbnailfilm" form:"thumbnailfilm" gorm:"type: varchar(255)"`
	Year          int      `json:"year" form:"year" gorm:"type: varchar(255)"`
	Category      Category `json:"category"`
	CategoryID    int      `json:"category_id"`
	Description   string   `json:"description" form:"description" gorm:"type: varchar(255)"`
}
