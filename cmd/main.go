package main

import (
	route "drink-registry/cmd/api/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	server := gin.Default()

	route.DrinksRoutes(server)

	server.Run(":8081")
}
