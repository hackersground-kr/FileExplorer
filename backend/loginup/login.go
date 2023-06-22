package loginup

import (
	"database/sql"
	"fmt"

	"github.com/cumednag/fileexplorer/backend/utils"
	_ "github.com/go-sql-driver/mysql"
)

const (
	host     = "fileexplorer.mysql.database.azure.com"
	database = "hackerground"
	user     = "sanz"
	password = "@tyu22342234"
)

var (
	id string
	pw string
)
var a = 0

func Login(loginid, loginpw string) int {
	utils.SslTls()
	var connectionString = fmt.Sprintf("%s:%s@tcp(%s:3306)/%s?parseTime=true&tls=custom", user, password, host, database)
	db, err := sql.Open("mysql", connectionString)
	utils.HandelERror(err)
	defer db.Close()
	rows, err := db.Query("select id,password from user;")
	for rows.Next() {
		err = rows.Scan(&id, &pw)
		utils.HandelERror(err)
		if id == loginid {
			if pw == loginpw {
				a = 1
				return a
			}
		}
	}
	return a
}
