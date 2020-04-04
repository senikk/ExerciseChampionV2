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

const backend = new rehearsalProto.Rehearsal('localhost:9090', grpc.credentials.createInsecure())

/*
backend.SearchContest({
    search: 'NM'
}, function(error, result) {
  if (error) console.log(error);

  result.contests.forEach(contest => {
    console.log(contest.name);
  });
})
*/

/*
backend.AddRehearsal({
  contestid: 1,
  minutes: 10,
  description: 'Hmmmm'
}, function(error, result) {
  console.log("error", error)
  console.log("result", result);
})
*/

/*
backend.Login({
  email: 'terje@senikk.com',
  password: '1234'
}, (error, result) => {
  console.log(result);

  var meta = new grpc.Metadata()
  meta.add('jwt', result.jwt)

  backend.ListContest({
  }, meta, (error, data) => {
    console.log("E", error)
    console.log("D", data)
  })
});
*/

/*
backend.Login({
  email: 'terje@senikk.com',
  password: '1234'
}, (error, result) => {
  console.log(result);

  var meta = new grpc.Metadata()
  meta.add('jwt', result.jwt)

  backend.JoinContest({
    contestid: 1
  }, meta, (error, data) => {
    console.log("E", error)
    console.log("D", data)
  })
});
*/

/*
backend.ListRehearsal({
  contestid: 1,
  userid: 0,
  limit: 20
}, (error, data) => {
  console.log(data);
})
*/

/*
backend.Login({
  email: 'terje@senikk.com',
  password: '1234'
}, (error, result) => {
  console.log(result);

  var meta = new grpc.Metadata()
  meta.add('jwt', result.jwt)

  backend.GetProfile({
    userid: result.userid
  }, meta, (error, data) => {
    console.log("E", error)
    console.log("D", data)
  })
});
*/

/*
backend.Login({
  email: 'terje@senikk.com',
  password: '1234'
}, (error, result) => {
  var meta = new grpc.Metadata()
  meta.add('jwt', result.jwt)

  let channel = backend.RehearsalStream({}, meta);
  channel.on("data", (rehearsal) => {
      console.log("== GOT REHEARSAL FROM SERVER", rehearsal);
  });
  channel.on("error", (error) => {
      console.log(error);
  });  
} );
*/