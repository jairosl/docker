FROM golang:alpine as builder

WORKDIR /usr/app/golang

COPY . .

RUN go build -ldflags '-s -w' main.go

FROM scratch

WORKDIR /

COPY --from=builder /usr/app/golang / 

CMD ["./main"]

