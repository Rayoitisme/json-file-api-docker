package route

import (
	"drink-registry/controller"
	"drink-registry/db"
	"drink-registry/model"
	"drink-registry/repository"
	"drink-registry/usecase"

	"github.com/gin-gonic/gin"
)

func DrinksRoutes(server *gin.Engine) {
	dbConnection, err := db.ConnectDB()
	if err != nil {
		panic(err)
	}
	dbConnection.AutoMigrate(&model.Drinks{})

	DrinksRepository := repository.NewDrinksRepository(dbConnection)

	DrinksUsecase := usecase.NewDrinksController(DrinksRepository)

	DrinksController := controller.NewDrinksController(DrinksUsecase)

	drinkGroup := server.Group("/v1")
	{
		drinkGroup.GET("/drinks", DrinksController.GetDrinksController)

		drinkGroup.GET("/drink/:id", DrinksController.GetDrinksByIdController)

		drinkGroup.POST("/createdrink", DrinksController.CreateDrinksController)

		drinkGroup.PUT("/updatedrink", DrinksController.UpdateDrinksController)

		drinkGroup.DELETE("/deletedrink", DrinksController.DeleteDrinksController)
	}

}
