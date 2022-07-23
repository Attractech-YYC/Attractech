FROM golang:1.16-alphine
WORKDIR /app

COPY go.mod ./
COPY go.sum ./

RUN go mod download

COPY *.go  ./

RUN go build -o /ping

CMD ["/ping"]