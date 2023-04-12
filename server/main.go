package main

import (
	"fmt"
	"week-02-task/database"
	"week-02-task/pkg/mysql"
	"week-02-task/routes"

	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4/middleware"
	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	// CORS agar bisa akses backend
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"}, // mengijinkan akses semuanya 
		AllowMethods: []string{echo.GET, echo.POST, echo.PATCH, echo.DELETE}, // mengijinkan method apa aja yg bisa digunakan
		AllowHeaders: []string{"X-Requested-With", "Content-Type", "Authorization"}, // mengijinkan headers apa aja yg bisa digunakan
	}))

	// env
	errEnv := godotenv.Load()
	if errEnv != nil {
		panic("Failed to load env file")
	}

	mysql.DatabaseInit()
	database.RunMigration()

	routes.RouteInit(e.Group("/api/v1"))

	e.Static("/uploads", "./uploads")

	fmt.Println("Server berjalan di port 5000")
	e.Logger.Fatal(e.Start("localhost:5000"))
}
