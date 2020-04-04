const path = require('path')
const PROTO_PATH = path.join(__dirname, 'protos/')
const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const packageDefinition = protoLoader.loadSync('rehearsal.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
    includeDirs: [PROTO_PATH]
});

const rehearsalProto = grpc.loadPackageDefinition(packageDefinition).rehearsal

console.log("=== LOADED PROTO ===");
console.log("=== ADDRESS ===", process.env.BACKEND_PORT);

const backend = new rehearsalProto.Rehearsal('backend:9090', grpc.credentials.createInsecure())

backend.Login({
  email: 'terje@senikk.com',
  password: 'xxx'
}, (error, result) => {
  console.log("ERROR", error);
  console.log("RESULT", result);
})