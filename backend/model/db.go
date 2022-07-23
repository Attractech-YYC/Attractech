package model

import (
	"fmt"
	"log"
	"sync"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
)

var (
	db     *sqlx.DB
	dbInit sync.Once
)

func InitGlobal(user, password, host string, port int, database string) {
	dbInit.Do(func() {
		var err error
		db, err = MysqlConn(user, password, host, port, database)
		if err != nil {
			log.Fatalf("connect to db error: %v", err)
		}
	})
}

func GetDB() *sqlx.DB {
	return db
}

func MysqlConn(user, password, host string, port int, database string) (*sqlx.DB, error) {
	dsn := fmt.Sprintf("%s:%s@(%s:%d)/%s?charset=utf8mb4&parseTime=true&multiStatements=true&interpolateParams=true",
		user,
		password,
		host,
		port,
		database,
	)
	return sqlx.Connect("mysql", dsn)
}
