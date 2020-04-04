import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import dotenv from 'dotenv';
dotenv.config();

export default {
  input: 'app.js',
  output: {
    format: 'iife',
    file: 'bundle.js'
  },
  plugins: [
    replace({
      process: JSON.stringify({
        env: {
          GRPCSERVICE: process.env.GRPCSERVICE
        }
      })
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'translations.js': ['Translation'],
        'node_modules/rehearsal/rehearsal_grpc_web_pb.js': ['RehearsalClient'],
        'node_modules/rehearsal/rehearsal_pb.js': [  
          'LoginRequest',
          'AddContestRequest',
          'AddContestResponse',
          'AddRehearsalRequest',
          'AddRehearsalResponse',
          'JoinContestRequest',
          'JoinContestResponse',
          'ListContestReponse',
          'ListContestRequest',
          'ListRehearsalRequest',
          'ListRehearsalResponse',
          'ListResultReponse',
          'ListResultRequest',
          'RemoveRehearsalRequest',
          'RemoveRehearsalResponse',
          'ResultRequest',
          'ResultResponse',
          'SearchContestRequest',
          'SignupRequest',
          'ProfileRequest',
          'ProfileResponse'],
        'grpc-web/index.js': ['AbstractClientBase', 'GrpcWebClientBase']
      }
    }),
    resolve({
      mainFields: ['main', 'browser', 'jsnext:main']
    })
  ]
};
