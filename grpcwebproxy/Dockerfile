FROM alpine AS build

ENV GRPCWEB_VER 0.12.0

RUN apk --update --no-cache add curl unzip && \
curl -s -L -o dist.zip https://github.com/improbable-eng/grpc-web/releases/download/v${GRPCWEB_VER}/grpcwebproxy-v${GRPCWEB_VER}-linux-x86_64.zip && \
    unzip dist.zip && \
    mv dist/grpcwebproxy-v${GRPCWEB_VER}-linux-x86_64 /grpcwebproxy && \
    rm dist.zip && \
    chmod +x /grpcwebproxy

FROM alpine

COPY --from=build /grpcwebproxy /grpcwebproxy

EXPOSE 8080
EXPOSE 8443

ENTRYPOINT ["/bin/sh", "-c", "/grpcwebproxy --backend_addr=backend:9090 --run_tls_server=false --allow_all_origins"]