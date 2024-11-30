# Use a imagem oficial do Go 1.23.0 como base
FROM golang:1.23.0-alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o código da aplicação para o container
COPY . .

# Instale as dependências e compile a aplicação
RUN go mod tidy
RUN go build -o main cmd/main.go

# Exponha a porta onde a aplicação será executada
EXPOSE 8081

# Comando para rodar a aplicação
CMD ["./main"]
