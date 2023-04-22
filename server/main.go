package main

import (
	"fmt"
	"os"
	"week-02-task/database"
	"week-02-task/pkg/mysql"
	"week-02-task/routes"

	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {

	// env
	errEnv := godotenv.Load()
	if errEnv != nil {
		panic("Failed to load env file")
	}

	e := echo.New()

	mysql.DatabaseInit()
	database.RunMigration()

	// CORS agar bisa akses backend
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},                                                 // mengijinkan akses semuanya
		AllowMethods: []string{echo.GET, echo.POST, echo.PATCH, echo.DELETE},        // mengijinkan method apa aja yg bisa digunakan
		AllowHeaders: []string{"X-Requested-With", "Content-Type", "Authorization"}, // mengijinkan headers apa aja yg bisa digunakan
	}))

	routes.RouteInit(e.Group("/api/v1"))

	e.Static("/uploads", "./uploads")

	// fmt.Println("Server berjalan di port 5000")
	// e.Logger.Fatal(e.Start("localhost:5000"))

	var PORT = os.Getenv("PORT")

	fmt.Println("server running localhost:" + PORT)
	e.Logger.Fatal(e.Start(":" + PORT)) // delete localhost
}
