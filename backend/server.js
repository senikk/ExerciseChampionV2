const path = require('path')
const PROTO_PATH = path.join(__dirname, 'protos')
const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')
const {Signup} = require('./grpc/signup')
const {Login} = require('./grpc/login')
const {AddRehearsal, ListRehearsal, RehearsalStream} = require('./grpc/rehearsal')
const {AddContest, ListContest, JoinContest} = require('./grpc/contest')
const {ListResult} = require('./grpc/result')
const {GetProfile} = require('./grpc/profile')
const {GetInvite, AcceptInvite} = require('./grpc/invite')
const PORT = 9090;

const packageDefinition = protoLoader.loadSync(['rehearsal.proto'], {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
    includeDirs: [PROTO_PATH]
});

const contestProto = grpc.loadPackageDefinition(packageDefinition).rehearsal
const server = new grpc.Server()
server.addService(contestProto.Rehearsal.service, {
  Signup: Signup,
  Login: Login,
  AddContest: AddContest,
  ListContest: ListContest,
  AddRehearsal: AddRehearsal,
  ListRehearsal: ListRehearsal,
  ListResult: ListResult,
  JoinContest: JoinContest,
  GetProfile: GetProfile,
  RehearsalStream: RehearsalStream,
  GetInvite: GetInvite,
  AcceptInvite: AcceptInvite
});

console.log("STARTING ON PORT " + PORT);
server.bind(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure())
server.start();
