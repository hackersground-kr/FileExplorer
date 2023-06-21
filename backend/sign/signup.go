package sign

import (
	"database/sql"
	"fmt"

	"github.com/cumedang/FileExplorer/backend/utils"
	_ "github.com/go-sql-driver/mysql"
)

const (
	host     = "fileexplorer.mysql.database.azure.com"
	database = "hackerground"
	user     = "sanz"
	password = "@tyu22342234"
)

func Signup(id, pw, email string) {
	utils.SslTls()
	var connectionString = fmt.Sprintf("%s:%s@tcp(%s:3306)/%s?parseTime=true&tls=custom", user, password, host, database)
	db, err := sql.Open("mysql", connectionString)
	utils.HandelERror(err)
	defer db.Close()
	query, err := db.Prepare("Insert into user (id,password,email) values (?,?,?);")
	utils.HandelERror(err)
	res, err := query.Exec(id, pw, email)
	Count, err := res.RowsAffected()
	utils.HandelERror(err)
	fmt.Printf("%d", Count)
}
