package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

func home(rw http.ResponseWriter, r *http.Request) {
	indexHTML, err := ioutil.ReadFile("/home/site/wwwroot/webapp2/build/static/index.html")
	if err != nil {
		log.Fatal(err)
	}
	rw.Header().Set("Content-Type", "text/html; charset=utf-8")
	rw.Write(indexHTML)
}

func serveStaticFiles(dir string, prefix string) http.Handler {
	fs := http.FileServer(http.Dir(dir))
	return http.StripPrefix(prefix, fs)
}

func main() {
	port := os.Getenv("HTTP_PLATFORM_PORT")
	if port == "" {
		port = "8080" // 기본 포트 설정
	}
	mux := http.NewServeMux()

	// JS 폴더에 대한 핸들러
	mux.Handle("/static/js/", serveStaticFiles("/home/site/wwwroot/webapp2/build/static/js/", "/static/js/"))

	// CSS 폴더에 대한 핸들러
	mux.Handle("/static/css/", serveStaticFiles("/home/site/wwwroot/webapp2/build/static/css/", "/static/css/"))

	// Img 폴더에 대한 핸들러
	mux.Handle("/static/img/", serveStaticFiles("/home/site/wwwroot/webapp2/build/static/img/", "/static/img/"))

	mux.HandleFunc("/", home)

	fmt.Printf("http://localhost:%s\n", port)
	log.Fatal(http.ListenAndServe(":"+port, mux))
}
