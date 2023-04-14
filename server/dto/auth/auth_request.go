package authdto

type AuthRequest struct {
	AvatarProfile string `json:"avatarprofile" form:"avatarprofile"`
	FullName      string `json:"fullname" form:"fullname" validate:"required"`
	Email         string `json:"email" form:"email" validate:"required"`
	Password      string `json:"password" form:"password" validate:"required"`
	Gender        string `json:"gender" form:"gender" validate:"required"`
	Role          string `json:"role" form:"role"`
	Phone         string `json:"phone" form:"phone" validate:"required"`
	Address       string `json:"address" form:"address" validate:"required"`
	Subscribe     bool   `json:"subscribe" form:"subscribe"`
}

type LoginRequest struct {
	Email    string `json:"email" form:"email" validate:"required"`
	Password string `json:"password" form:"password" validate:"required"`
}
