const path = require('path')
const PROTO_PATH = path.join(__dirname, '../protos/')
const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const packageDefinition = protoLoader.loadSync(['rehearsal.proto'], {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
    includeDirs: [PROTO_PATH]
});

const contestProto = grpc.loadPackageDefinition(packageDefinition).rehearsal

function SearchContest(call, cb) {
  console.log("CALL", call);
  console.log("CB", cb);  

  cb(null, { contests: [
    {
      contestid: 1,
      name: 'NM janitsjar'
    },
    {
      contestid: 2,
      name: 'Siddis Brass 2020'
    }
  ]});
}

const rehearsalFunctions = {
    SearchContest: SearchContest
}

const server = new grpc.Server()
server.addService(contestProto.Rehearsal.service, rehearsalFunctions)
server.bind('localhost:9090', grpc.ServerCredentials.createInsecure())
server.start();