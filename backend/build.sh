docker build -t ec-backend:$1 .
docker tag ec-backend:$1 senikk/ec-backend:$1
docker push senikk/ec-backend:$1