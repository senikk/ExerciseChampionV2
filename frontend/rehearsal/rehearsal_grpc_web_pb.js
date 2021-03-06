/**
 * @fileoverview gRPC-Web generated client stub for rehearsal
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.rehearsal = require('./rehearsal_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.rehearsal.RehearsalClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.rehearsal.RehearsalPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.rehearsal.LoginRequest,
 *   !proto.rehearsal.LoginResponse>}
 */
const methodDescriptor_Rehearsal_Login = new grpc.web.MethodDescriptor(
  '/rehearsal.Rehearsal/Login',
  grpc.web.MethodType.UNARY,
  proto.rehearsal.LoginRequest,
  proto.rehearsal.LoginResponse,
  /**
   * @param {!proto.rehearsal.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.rehearsal.LoginRequest,
 *   !proto.rehearsal.LoginResponse>}
 */
const methodInfo_Rehearsal_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.rehearsal.LoginResponse,
  /**
   * @param {!proto.rehearsal.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.rehearsal.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.rehearsal.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.rehearsal.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.rehearsal.RehearsalClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/rehearsal.Rehearsal/Login',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_Login,
      callback);
};


/**
 * @param {!proto.rehearsal.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.rehearsal.LoginResponse>}
 *     A native promise that resolves to the response
 */
proto.rehearsal.RehearsalPromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/rehearsal.Rehearsal/Login',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.rehearsal.SignupRequest,
 *   !proto.rehearsal.LoginResponse>}
 */
const methodDescriptor_Rehearsal_Signup = new grpc.web.MethodDescriptor(
  '/rehearsal.Rehearsal/Signup',
  grpc.web.MethodType.UNARY,
  proto.rehearsal.SignupRequest,
  proto.rehearsal.LoginResponse,
  /**
   * @param {!proto.rehearsal.SignupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.rehearsal.SignupRequest,
 *   !proto.rehearsal.LoginResponse>}
 */
const methodInfo_Rehearsal_Signup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.rehearsal.LoginResponse,
  /**
   * @param {!proto.rehearsal.SignupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.rehearsal.SignupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.rehearsal.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.rehearsal.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.rehearsal.RehearsalClient.prototype.signup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/rehearsal.Rehearsal/Signup',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_Signup,
      callback);
};


/**
 * @param {!proto.rehearsal.SignupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.rehearsal.LoginResponse>}
 *     A native promise that resolves to the response
 */
proto.rehearsal.RehearsalPromiseClient.prototype.signup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/rehearsal.Rehearsal/Signup',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_Signup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.rehearsal.AddRehearsalRequest,
 *   !proto.rehearsal.RehearsalEntry>}
 */
const methodDescriptor_Rehearsal_AddRehearsal = new grpc.web.MethodDescriptor(
  '/rehearsal.Rehearsal/AddRehearsal',
  grpc.web.MethodType.UNARY,
  proto.rehearsal.AddRehearsalRequest,
  proto.rehearsal.RehearsalEntry,
  /**
   * @param {!proto.rehearsal.AddRehearsalRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.RehearsalEntry.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.rehearsal.AddRehearsalRequest,
 *   !proto.rehearsal.RehearsalEntry>}
 */
const methodInfo_Rehearsal_AddRehearsal = new grpc.web.AbstractClientBase.MethodInfo(
  proto.rehearsal.RehearsalEntry,
  /**
   * @param {!proto.rehearsal.AddRehearsalRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.RehearsalEntry.deserializeBinary
);


/**
 * @param {!proto.rehearsal.AddRehearsalRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.rehearsal.RehearsalEntry)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.rehearsal.RehearsalEntry>|undefined}
 *     The XHR Node Readable Stream
 */
proto.rehearsal.RehearsalClient.prototype.addRehearsal =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/rehearsal.Rehearsal/AddRehearsal',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_AddRehearsal,
      callback);
};


/**
 * @param {!proto.rehearsal.AddRehearsalRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.rehearsal.RehearsalEntry>}
 *     A native promise that resolves to the response
 */
proto.rehearsal.RehearsalPromiseClient.prototype.addRehearsal =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/rehearsal.Rehearsal/AddRehearsal',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_AddRehearsal);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.rehearsal.RemoveRehearsalRequest,
 *   !proto.rehearsal.RemoveRehearsalResponse>}
 */
const methodDescriptor_Rehearsal_RemoveRehearsal = new grpc.web.MethodDescriptor(
  '/rehearsal.Rehearsal/RemoveRehearsal',
  grpc.web.MethodType.UNARY,
  proto.rehearsal.RemoveRehearsalRequest,
  proto.rehearsal.RemoveRehearsalResponse,
  /**
   * @param {!proto.rehearsal.RemoveRehearsalRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.RemoveRehearsalResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.rehearsal.RemoveRehearsalRequest,
 *   !proto.rehearsal.RemoveRehearsalResponse>}
 */
const methodInfo_Rehearsal_RemoveRehearsal = new grpc.web.AbstractClientBase.MethodInfo(
  proto.rehearsal.RemoveRehearsalResponse,
  /**
   * @param {!proto.rehearsal.RemoveRehearsalRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.RemoveRehearsalResponse.deserializeBinary
);


/**
 * @param {!proto.rehearsal.RemoveRehearsalRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.rehearsal.RemoveRehearsalResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.rehearsal.RemoveRehearsalResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.rehearsal.RehearsalClient.prototype.removeRehearsal =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/rehearsal.Rehearsal/RemoveRehearsal',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_RemoveRehearsal,
      callback);
};


/**
 * @param {!proto.rehearsal.RemoveRehearsalRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.rehearsal.RemoveRehearsalResponse>}
 *     A native promise that resolves to the response
 */
proto.rehearsal.RehearsalPromiseClient.prototype.removeRehearsal =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/rehearsal.Rehearsal/RemoveRehearsal',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_RemoveRehearsal);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.rehearsal.ListRehearsalRequest,
 *   !proto.rehearsal.ListRehearsalResponse>}
 */
const methodDescriptor_Rehearsal_ListRehearsal = new grpc.web.MethodDescriptor(
  '/rehearsal.Rehearsal/ListRehearsal',
  grpc.web.MethodType.UNARY,
  proto.rehearsal.ListRehearsalRequest,
  proto.rehearsal.ListRehearsalResponse,
  /**
   * @param {!proto.rehearsal.ListRehearsalRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.ListRehearsalResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.rehearsal.ListRehearsalRequest,
 *   !proto.rehearsal.ListRehearsalResponse>}
 */
const methodInfo_Rehearsal_ListRehearsal = new grpc.web.AbstractClientBase.MethodInfo(
  proto.rehearsal.ListRehearsalResponse,
  /**
   * @param {!proto.rehearsal.ListRehearsalRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.ListRehearsalResponse.deserializeBinary
);


/**
 * @param {!proto.rehearsal.ListRehearsalRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.rehearsal.ListRehearsalResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.rehearsal.ListRehearsalResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.rehearsal.RehearsalClient.prototype.listRehearsal =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/rehearsal.Rehearsal/ListRehearsal',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_ListRehearsal,
      callback);
};


/**
 * @param {!proto.rehearsal.ListRehearsalRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.rehearsal.ListRehearsalResponse>}
 *     A native promise that resolves to the response
 */
proto.rehearsal.RehearsalPromiseClient.prototype.listRehearsal =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/rehearsal.Rehearsal/ListRehearsal',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_ListRehearsal);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.rehearsal.ListRehearsalRequest,
 *   !proto.rehearsal.RehearsalEntry>}
 */
const methodDescriptor_Rehearsal_RehearsalStream = new grpc.web.MethodDescriptor(
  '/rehearsal.Rehearsal/RehearsalStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.rehearsal.ListRehearsalRequest,
  proto.rehearsal.RehearsalEntry,
  /**
   * @param {!proto.rehearsal.ListRehearsalRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.RehearsalEntry.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.rehearsal.ListRehearsalRequest,
 *   !proto.rehearsal.RehearsalEntry>}
 */
const methodInfo_Rehearsal_RehearsalStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.rehearsal.RehearsalEntry,
  /**
   * @param {!proto.rehearsal.ListRehearsalRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.RehearsalEntry.deserializeBinary
);


/**
 * @param {!proto.rehearsal.ListRehearsalRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.rehearsal.RehearsalEntry>}
 *     The XHR Node Readable Stream
 */
proto.rehearsal.RehearsalClient.prototype.rehearsalStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/rehearsal.Rehearsal/RehearsalStream',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_RehearsalStream);
};


/**
 * @param {!proto.rehearsal.ListRehearsalRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.rehearsal.RehearsalEntry>}
 *     The XHR Node Readable Stream
 */
proto.rehearsal.RehearsalPromiseClient.prototype.rehearsalStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/rehearsal.Rehearsal/RehearsalStream',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_RehearsalStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.rehearsal.AddContestRequest,
 *   !proto.rehearsal.ContestEntry>}
 */
const methodDescriptor_Rehearsal_AddContest = new grpc.web.MethodDescriptor(
  '/rehearsal.Rehearsal/AddContest',
  grpc.web.MethodType.UNARY,
  proto.rehearsal.AddContestRequest,
  proto.rehearsal.ContestEntry,
  /**
   * @param {!proto.rehearsal.AddContestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.ContestEntry.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.rehearsal.AddContestRequest,
 *   !proto.rehearsal.ContestEntry>}
 */
const methodInfo_Rehearsal_AddContest = new grpc.web.AbstractClientBase.MethodInfo(
  proto.rehearsal.ContestEntry,
  /**
   * @param {!proto.rehearsal.AddContestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.ContestEntry.deserializeBinary
);


/**
 * @param {!proto.rehearsal.AddContestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.rehearsal.ContestEntry)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.rehearsal.ContestEntry>|undefined}
 *     The XHR Node Readable Stream
 */
proto.rehearsal.RehearsalClient.prototype.addContest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/rehearsal.Rehearsal/AddContest',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_AddContest,
      callback);
};


/**
 * @param {!proto.rehearsal.AddContestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.rehearsal.ContestEntry>}
 *     A native promise that resolves to the response
 */
proto.rehearsal.RehearsalPromiseClient.prototype.addContest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/rehearsal.Rehearsal/AddContest',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_AddContest);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.rehearsal.ListContestRequest,
 *   !proto.rehearsal.ListContestReponse>}
 */
const methodDescriptor_Rehearsal_ListContest = new grpc.web.MethodDescriptor(
  '/rehearsal.Rehearsal/ListContest',
  grpc.web.MethodType.UNARY,
  proto.rehearsal.ListContestRequest,
  proto.rehearsal.ListContestReponse,
  /**
   * @param {!proto.rehearsal.ListContestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.ListContestReponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.rehearsal.ListContestRequest,
 *   !proto.rehearsal.ListContestReponse>}
 */
const methodInfo_Rehearsal_ListContest = new grpc.web.AbstractClientBase.MethodInfo(
  proto.rehearsal.ListContestReponse,
  /**
   * @param {!proto.rehearsal.ListContestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.ListContestReponse.deserializeBinary
);


/**
 * @param {!proto.rehearsal.ListContestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.rehearsal.ListContestReponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.rehearsal.ListContestReponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.rehearsal.RehearsalClient.prototype.listContest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/rehearsal.Rehearsal/ListContest',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_ListContest,
      callback);
};


/**
 * @param {!proto.rehearsal.ListContestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.rehearsal.ListContestReponse>}
 *     A native promise that resolves to the response
 */
proto.rehearsal.RehearsalPromiseClient.prototype.listContest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/rehearsal.Rehearsal/ListContest',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_ListContest);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.rehearsal.JoinContestRequest,
 *   !proto.rehearsal.JoinContestResponse>}
 */
const methodDescriptor_Rehearsal_JoinContest = new grpc.web.MethodDescriptor(
  '/rehearsal.Rehearsal/JoinContest',
  grpc.web.MethodType.UNARY,
  proto.rehearsal.JoinContestRequest,
  proto.rehearsal.JoinContestResponse,
  /**
   * @param {!proto.rehearsal.JoinContestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.JoinContestResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.rehearsal.JoinContestRequest,
 *   !proto.rehearsal.JoinContestResponse>}
 */
const methodInfo_Rehearsal_JoinContest = new grpc.web.AbstractClientBase.MethodInfo(
  proto.rehearsal.JoinContestResponse,
  /**
   * @param {!proto.rehearsal.JoinContestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.JoinContestResponse.deserializeBinary
);


/**
 * @param {!proto.rehearsal.JoinContestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.rehearsal.JoinContestResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.rehearsal.JoinContestResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.rehearsal.RehearsalClient.prototype.joinContest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/rehearsal.Rehearsal/JoinContest',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_JoinContest,
      callback);
};


/**
 * @param {!proto.rehearsal.JoinContestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.rehearsal.JoinContestResponse>}
 *     A native promise that resolves to the response
 */
proto.rehearsal.RehearsalPromiseClient.prototype.joinContest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/rehearsal.Rehearsal/JoinContest',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_JoinContest);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.rehearsal.JoinContestRequest,
 *   !proto.rehearsal.JoinContestResponse>}
 */
const methodDescriptor_Rehearsal_LeaveContest = new grpc.web.MethodDescriptor(
  '/rehearsal.Rehearsal/LeaveContest',
  grpc.web.MethodType.UNARY,
  proto.rehearsal.JoinContestRequest,
  proto.rehearsal.JoinContestResponse,
  /**
   * @param {!proto.rehearsal.JoinContestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.JoinContestResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.rehearsal.JoinContestRequest,
 *   !proto.rehearsal.JoinContestResponse>}
 */
const methodInfo_Rehearsal_LeaveContest = new grpc.web.AbstractClientBase.MethodInfo(
  proto.rehearsal.JoinContestResponse,
  /**
   * @param {!proto.rehearsal.JoinContestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.JoinContestResponse.deserializeBinary
);


/**
 * @param {!proto.rehearsal.JoinContestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.rehearsal.JoinContestResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.rehearsal.JoinContestResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.rehearsal.RehearsalClient.prototype.leaveContest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/rehearsal.Rehearsal/LeaveContest',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_LeaveContest,
      callback);
};


/**
 * @param {!proto.rehearsal.JoinContestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.rehearsal.JoinContestResponse>}
 *     A native promise that resolves to the response
 */
proto.rehearsal.RehearsalPromiseClient.prototype.leaveContest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/rehearsal.Rehearsal/LeaveContest',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_LeaveContest);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.rehearsal.ListResultRequest,
 *   !proto.rehearsal.ListResultReponse>}
 */
const methodDescriptor_Rehearsal_ListResult = new grpc.web.MethodDescriptor(
  '/rehearsal.Rehearsal/ListResult',
  grpc.web.MethodType.UNARY,
  proto.rehearsal.ListResultRequest,
  proto.rehearsal.ListResultReponse,
  /**
   * @param {!proto.rehearsal.ListResultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.ListResultReponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.rehearsal.ListResultRequest,
 *   !proto.rehearsal.ListResultReponse>}
 */
const methodInfo_Rehearsal_ListResult = new grpc.web.AbstractClientBase.MethodInfo(
  proto.rehearsal.ListResultReponse,
  /**
   * @param {!proto.rehearsal.ListResultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.ListResultReponse.deserializeBinary
);


/**
 * @param {!proto.rehearsal.ListResultRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.rehearsal.ListResultReponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.rehearsal.ListResultReponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.rehearsal.RehearsalClient.prototype.listResult =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/rehearsal.Rehearsal/ListResult',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_ListResult,
      callback);
};


/**
 * @param {!proto.rehearsal.ListResultRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.rehearsal.ListResultReponse>}
 *     A native promise that resolves to the response
 */
proto.rehearsal.RehearsalPromiseClient.prototype.listResult =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/rehearsal.Rehearsal/ListResult',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_ListResult);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.rehearsal.ResultRequest,
 *   !proto.rehearsal.ResultResponse>}
 */
const methodDescriptor_Rehearsal_YourResult = new grpc.web.MethodDescriptor(
  '/rehearsal.Rehearsal/YourResult',
  grpc.web.MethodType.UNARY,
  proto.rehearsal.ResultRequest,
  proto.rehearsal.ResultResponse,
  /**
   * @param {!proto.rehearsal.ResultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.ResultResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.rehearsal.ResultRequest,
 *   !proto.rehearsal.ResultResponse>}
 */
const methodInfo_Rehearsal_YourResult = new grpc.web.AbstractClientBase.MethodInfo(
  proto.rehearsal.ResultResponse,
  /**
   * @param {!proto.rehearsal.ResultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.ResultResponse.deserializeBinary
);


/**
 * @param {!proto.rehearsal.ResultRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.rehearsal.ResultResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.rehearsal.ResultResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.rehearsal.RehearsalClient.prototype.yourResult =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/rehearsal.Rehearsal/YourResult',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_YourResult,
      callback);
};


/**
 * @param {!proto.rehearsal.ResultRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.rehearsal.ResultResponse>}
 *     A native promise that resolves to the response
 */
proto.rehearsal.RehearsalPromiseClient.prototype.yourResult =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/rehearsal.Rehearsal/YourResult',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_YourResult);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.rehearsal.ProfileRequest,
 *   !proto.rehearsal.ProfileResponse>}
 */
const methodDescriptor_Rehearsal_GetProfile = new grpc.web.MethodDescriptor(
  '/rehearsal.Rehearsal/GetProfile',
  grpc.web.MethodType.UNARY,
  proto.rehearsal.ProfileRequest,
  proto.rehearsal.ProfileResponse,
  /**
   * @param {!proto.rehearsal.ProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.ProfileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.rehearsal.ProfileRequest,
 *   !proto.rehearsal.ProfileResponse>}
 */
const methodInfo_Rehearsal_GetProfile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.rehearsal.ProfileResponse,
  /**
   * @param {!proto.rehearsal.ProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.ProfileResponse.deserializeBinary
);


/**
 * @param {!proto.rehearsal.ProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.rehearsal.ProfileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.rehearsal.ProfileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.rehearsal.RehearsalClient.prototype.getProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/rehearsal.Rehearsal/GetProfile',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_GetProfile,
      callback);
};


/**
 * @param {!proto.rehearsal.ProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.rehearsal.ProfileResponse>}
 *     A native promise that resolves to the response
 */
proto.rehearsal.RehearsalPromiseClient.prototype.getProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/rehearsal.Rehearsal/GetProfile',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_GetProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.rehearsal.InviteRequest,
 *   !proto.rehearsal.InviteResponse>}
 */
const methodDescriptor_Rehearsal_GetInvite = new grpc.web.MethodDescriptor(
  '/rehearsal.Rehearsal/GetInvite',
  grpc.web.MethodType.UNARY,
  proto.rehearsal.InviteRequest,
  proto.rehearsal.InviteResponse,
  /**
   * @param {!proto.rehearsal.InviteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.InviteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.rehearsal.InviteRequest,
 *   !proto.rehearsal.InviteResponse>}
 */
const methodInfo_Rehearsal_GetInvite = new grpc.web.AbstractClientBase.MethodInfo(
  proto.rehearsal.InviteResponse,
  /**
   * @param {!proto.rehearsal.InviteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.InviteResponse.deserializeBinary
);


/**
 * @param {!proto.rehearsal.InviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.rehearsal.InviteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.rehearsal.InviteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.rehearsal.RehearsalClient.prototype.getInvite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/rehearsal.Rehearsal/GetInvite',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_GetInvite,
      callback);
};


/**
 * @param {!proto.rehearsal.InviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.rehearsal.InviteResponse>}
 *     A native promise that resolves to the response
 */
proto.rehearsal.RehearsalPromiseClient.prototype.getInvite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/rehearsal.Rehearsal/GetInvite',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_GetInvite);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.rehearsal.InviteAcceptRequest,
 *   !proto.rehearsal.InviteAcceptResponse>}
 */
const methodDescriptor_Rehearsal_AcceptInvite = new grpc.web.MethodDescriptor(
  '/rehearsal.Rehearsal/AcceptInvite',
  grpc.web.MethodType.UNARY,
  proto.rehearsal.InviteAcceptRequest,
  proto.rehearsal.InviteAcceptResponse,
  /**
   * @param {!proto.rehearsal.InviteAcceptRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.InviteAcceptResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.rehearsal.InviteAcceptRequest,
 *   !proto.rehearsal.InviteAcceptResponse>}
 */
const methodInfo_Rehearsal_AcceptInvite = new grpc.web.AbstractClientBase.MethodInfo(
  proto.rehearsal.InviteAcceptResponse,
  /**
   * @param {!proto.rehearsal.InviteAcceptRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rehearsal.InviteAcceptResponse.deserializeBinary
);


/**
 * @param {!proto.rehearsal.InviteAcceptRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.rehearsal.InviteAcceptResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.rehearsal.InviteAcceptResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.rehearsal.RehearsalClient.prototype.acceptInvite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/rehearsal.Rehearsal/AcceptInvite',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_AcceptInvite,
      callback);
};


/**
 * @param {!proto.rehearsal.InviteAcceptRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.rehearsal.InviteAcceptResponse>}
 *     A native promise that resolves to the response
 */
proto.rehearsal.RehearsalPromiseClient.prototype.acceptInvite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/rehearsal.Rehearsal/AcceptInvite',
      request,
      metadata || {},
      methodDescriptor_Rehearsal_AcceptInvite);
};


module.exports = proto.rehearsal;

