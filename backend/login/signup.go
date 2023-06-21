package login

import (
	"database/sql"
	"fmt"

	"github.com/cumedang/FileExplorer/backend/utils"
	_ "github.com/go-sql-driver/mysql"
)

func Signup(id, pw, email string) {
	fmt.Println(id, pw, email)
	db, err := sql.Open("mysql", "sanz:@tyu22342234@tcp(fileexplorer.mysql.database.azure.com)/hackerground")
	utils.HandelERror(err)
	defer db.Close()
	query, err := db.Prepare("Insert into user (id,pw,email) values (?,?,?);")
	utils.HandelERror(err)
	res, err := query.Exec(id, pw, email)
	Count, err := res.RowsAffected()
	utils.HandelERror(err)
	fmt.Printf("%d", Count)
}
