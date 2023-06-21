package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"

	"github.com/cumedang/FileExplorer/backend/loginup"
	"github.com/cumedang/FileExplorer/backend/sign"
	"github.com/cumedang/FileExplorer/backend/utils"
	"github.com/gorilla/sessions"
)

var port = ":8000"

var store = sessions.NewCookieStore([]byte(os.Getenv("doyouknowsanz")))

func home(rw http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("front/index.html")
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

func login(rw http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "POST":
		session, _ := store.Get(r, "wasanz")
		r.ParseForm()
		id := r.Form.Get("userlogin")
		pw := r.Form.Get("loginpw")
		fmt.Println(id + " " + pw)
		answer := loginup.Login(id, pw)
		if answer == 1 {
			session.Values["id"] = id
			session.Values["answer"] = 1
			err := session.Save(r, rw)
			utils.HandelERror(err)

			// 세션 값을 JavaScript로 전달하는 쿠키 설정
			cookieID := &http.Cookie{
				Name:  "id",
				Value: id,
			}
			http.SetCookie(rw, cookieID)

			cookieAnswer := &http.Cookie{
				Name:  "answer",
				Value: "1",
			}
			http.SetCookie(rw, cookieAnswer)

			fmt.Fprint(rw, `<script>alert("`+id+`님 환영합니다");location.href='front/index.html'</script>`)
		} else {
			session.Values["id"] = nil
			session.Values["answer"] = 0
			err := session.Save(r, rw)
			utils.HandelERror(err)

			// 세션 값을 JavaScript로 전달하는 쿠키 설정
			cookieID := &http.Cookie{
				Name:  "id",
				Value: "",
			}
			http.SetCookie(rw, cookieID)

			cookieAnswer := &http.Cookie{
				Name:  "answer",
				Value: "0",
			}
			http.SetCookie(rw, cookieAnswer)

			fmt.Fprint(rw, `<script>alert('계정이 존재하지 않습니다. 회원가입 먼저 하여주세요'); location.href='front/signup/signup.html'</script>`)
		}
	}
}

func main() {

	mux := http.NewServeMux()

	fs := http.FileServer(http.Dir("front"))
	mux.Handle("/front/", http.StripPrefix("/front/", fs))

	mux.HandleFunc("/", home)
	mux.HandleFunc("/signup", signup)
	mux.HandleFunc("/login", login)

	fmt.Printf("http://localhost%s", port)
	log.Fatal(http.ListenAndServe(port, mux))
}
