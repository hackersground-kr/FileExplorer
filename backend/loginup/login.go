package loginup

import (
	"database/sql"
	"fmt"

	"github.com/cumedang/FileExplorer/backend/utils"
)

const (
	host     = "fileexplorer.mysql.database.azure.com"
	database = "hackerground"
	user     = "sanz"
	password = "@tyu22342234"
)

func Login(id, pw string) {
	utils.SslTls()
	var connectionString = fmt.Sprintf("%s:%s@tcp(%s:3306)/%s?parseTime=true&tls=custom", user, password, host, database)
	db, err := sql.Open("mysql", connectionString)
	utils.HandelERror(err)
	defer db.Close()
}
