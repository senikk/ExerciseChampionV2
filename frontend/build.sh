docker build -t ec-frontend:$1 .
docker tag ec-frontend:$1 senikk/ec-frontend:$1
docker push senikk/ec-frontend:$1