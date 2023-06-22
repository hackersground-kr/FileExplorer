package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

func home(rw http.ResponseWriter, r *http.Request) {
	indexHTML, err := ioutil.ReadFile(" /home/site/wwwroot/webapp2/static/index.html")
	if err != nil {
		log.Fatal(err)
	}
	rw.Header().Set("Content-Type", "text/html; charset=utf-8")
	rw.Write(indexHTML)
}

func main() {
	port := os.Getenv("HTTP_PLATFORM_PORT")
	if port == "" {
		port = "8080" // 기본 포트 설정
	}

	mux := http.NewServeMux()

	// js 폴더에 대한 핸들러
	jsHandler := http.StripPrefix("/static/js/", http.FileServer(http.Dir("static/js")))
	mux.Handle("/static/js/", jsHandler)

	// css 폴더에 대한 핸들러
	cssHandler := http.StripPrefix("/static/css/", http.FileServer(http.Dir("static/css")))
	mux.Handle("/static/css/", cssHandler)

	// img 폴더에 대한 핸들러
	imgHandler := http.StripPrefix("/static/img/", http.FileServer(http.Dir("static/img")))
	mux.Handle("/static/img/", imgHandler)

	mux.HandleFunc("/", home)

	fmt.Printf("http://localhost:%s\n", port)
	log.Fatal(http.ListenAndServe(":"+port, mux))
}
