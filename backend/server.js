const path = require('path')
const PROTO_PATH = path.join(__dirname, '../protos/')
const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')
const moment = require('moment')
const sequelize = require('sequelize')
const {Op} = require('sequelize')
const {db, Contest, Rehearsal, User} = require('./database/models/index')
const {Login} = require('./grpc/login')
const {AddRehearsal, ListRehearsal} = require('./grpc/rehearsal')
const {AddContest, ListContest} = require('./grpc/contest')
const {ListResult} = require('./grpc/result')

//const contest = Contest.create({
//  name: 'NM Brass 2021'
//});

/*
User.create({
  name: 'Terje Pedersen',
  email: 'terje@senikk.com'
});
User.create({
  name: 'Hege Alette Eilertsen',
  email: 'hegeae@gmail.com'
});

Rehearsal.create({
  userid: 1,
  contestid: 1,
  minutes: 10,
  description: 'Første test'
});
Rehearsal.create({
  userid: 1,
  contestid: 1,
  minutes: 5,
  description: 'Andre test'
});
Rehearsal.create({
  userid: 2,
  contestid: 1,
  minutes: 20,
  description: 'Slår deg'
});
*/

//Contest.findByPk(1).then(contest => {
//  console.log(contest);
//});

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
  Login: Login,
  AddContest: AddContest,
  ListContest: ListContest,
  AddRehearsal: AddRehearsal,
  ListRehearsal: ListRehearsal,
  ListResult: ListResult
});
server.bind('localhost:9090', grpc.ServerCredentials.createInsecure())
server.start();
