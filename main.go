package main

import (
	"log"
	"net/http"

	"github.com/cumedang/FileExplorer/backend/login"
)

func signup(rw http.ResponseWriter, r *http.Request) {
	switch r.Method {

	case "POST":
		r.ParseForm()
		id := r.Form.Get("userid")
		pw := r.Form.Get("userpw")
		email := r.Form.Get("useremail")
		login.Signup(id, pw, email)
	}
}

func main() {
	http.HandleFunc("/singup", signup)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
