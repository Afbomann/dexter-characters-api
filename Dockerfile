FROM golang:1.24

WORKDIR /app

COPY . .

EXPOSE 8000