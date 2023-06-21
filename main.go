package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"

	"github.com/cumedang/FileExplorer/backend/sign"
	"github.com/cumedang/FileExplorer/backend/utils"
)

var port = ":4000"

func home(rw http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("front/signUp/signUp.html")
	utils.HandelERror(err)
	tmpl.Execute(rw, nil)
}

func signup(rw http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "POST":
		r.ParseForm()
		id := r.Form.Get("userid")
		pw := r.Form.Get("userpw")
		email := r.Form.Get("useremail")
		sign.Signup(id, pw, email)
	}
}

func main() {
	fs := http.FileServer(http.Dir("front"))
	http.HandleFunc("/", home)
	http.Handle("/front/", http.StripPrefix("/front/", fs))
	http.HandleFunc("/signup", signup)
	fmt.Printf("http://localhost%s", port)
	log.Fatal(http.ListenAndServe(port, nil))
}
