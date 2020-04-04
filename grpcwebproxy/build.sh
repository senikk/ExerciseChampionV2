docker build -t ec-grpcwebproxy:$1 .
docker tag ec-grpcwebproxy:$1 senikk/ec-grpcwebproxy:$1
docker push senikk/ec-grpcwebproxy:$1