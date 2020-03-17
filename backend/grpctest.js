const path = require('path')
const PROTO_PATH = path.join(__dirname, '../protos/')
const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const packageDefinition = protoLoader.loadSync('../protos/rehearsal.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
    includeDirs: [PROTO_PATH]
});

const rehearsalProto = grpc.loadPackageDefinition(packageDefinition).rehearsal

const client = new rehearsalProto.Rehearsal('localhost:9090', grpc.credentials.createInsecure())

client.SearchContest({
    search: 'NM'
}, function(error, result) {
  if (error) console.log(error);

  result.contests.forEach(contest => {
    console.log(contest.name);
  });
})