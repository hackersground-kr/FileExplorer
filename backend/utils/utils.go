package utils

import (
	"crypto/tls"
	"crypto/x509"
	"io/ioutil"
	"log"

	"github.com/go-sql-driver/mysql"
)

func HandelERror(err error) {
	if err != nil {
		log.Panic(err)
	}
}
func SslTls() {
	rootCertPool := x509.NewCertPool()
	pem, err := ioutil.ReadFile("C:/Users/yusun/go/src/github.com/cumedang/FileExplorer/DigiCertGlobalRootCA.crt.pem")
	HandelERror(err)
	if ok := rootCertPool.AppendCertsFromPEM(pem); !ok {
		log.Fatal("Failed to append PEM.")
	}
	mysql.RegisterTLSConfig("custom", &tls.Config{RootCAs: rootCertPool})
}
