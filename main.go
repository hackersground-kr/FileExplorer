package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

func home(rw http.ResponseWriter, r *http.Request) {
	indexHTML, err := ioutil.ReadFile("/home/site/wwwroot/webapp2/build/index.html")
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

	// fs := http.FileServer(http.Dir("front"))
	// mux.Handle("/front/", http.StripPrefix("/front/", fs))

	mux.HandleFunc("/", home)

	fmt.Printf("http://localhost:%s", port)
	log.Fatal(http.ListenAndServe(":"+port, mux))
}
