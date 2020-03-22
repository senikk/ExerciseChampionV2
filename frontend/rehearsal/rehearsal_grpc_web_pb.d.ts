import * as grpcWeb from 'grpc-web';

import {
  AddContestRequest,
  AddRehearsalRequest,
  ContestEntry,
  JoinContestRequest,
  JoinContestResponse,
  ListContestReponse,
  ListContestRequest,
  ListRehearsalRequest,
  ListRehearsalResponse,
  ListResultReponse,
  ListResultRequest,
  LoginRequest,
  LoginResponse,
  ProfileRequest,
  ProfileResponse,
  RehearsalEntry,
  RemoveRehearsalRequest,
  RemoveRehearsalResponse,
  ResultRequest,
  ResultResponse,
  SignupRequest} from './rehearsal_pb';

export class RehearsalClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  login(
    request: LoginRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: LoginResponse) => void
  ): grpcWeb.ClientReadableStream<LoginResponse>;

  signup(
    request: SignupRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: LoginResponse) => void
  ): grpcWeb.ClientReadableStream<LoginResponse>;

  addRehearsal(
    request: AddRehearsalRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: RehearsalEntry) => void
  ): grpcWeb.ClientReadableStream<RehearsalEntry>;

  removeRehearsal(
    request: RemoveRehearsalRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: RemoveRehearsalResponse) => void
  ): grpcWeb.ClientReadableStream<RemoveRehearsalResponse>;

  listRehearsal(
    request: ListRehearsalRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ListRehearsalResponse) => void
  ): grpcWeb.ClientReadableStream<ListRehearsalResponse>;

  addContest(
    request: AddContestRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ContestEntry) => void
  ): grpcWeb.ClientReadableStream<ContestEntry>;

  listContest(
    request: ListContestRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ListContestReponse) => void
  ): grpcWeb.ClientReadableStream<ListContestReponse>;

  joinContest(
    request: JoinContestRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: JoinContestResponse) => void
  ): grpcWeb.ClientReadableStream<JoinContestResponse>;

  leaveContest(
    request: JoinContestRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: JoinContestResponse) => void
  ): grpcWeb.ClientReadableStream<JoinContestResponse>;

  listResult(
    request: ListResultRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ListResultReponse) => void
  ): grpcWeb.ClientReadableStream<ListResultReponse>;

  yourResult(
    request: ResultRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ResultResponse) => void
  ): grpcWeb.ClientReadableStream<ResultResponse>;

  getProfile(
    request: ProfileRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ProfileResponse) => void
  ): grpcWeb.ClientReadableStream<ProfileResponse>;

}

export class RehearsalPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  login(
    request: LoginRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<LoginResponse>;

  signup(
    request: SignupRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<LoginResponse>;

  addRehearsal(
    request: AddRehearsalRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<RehearsalEntry>;

  removeRehearsal(
    request: RemoveRehearsalRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<RemoveRehearsalResponse>;

  listRehearsal(
    request: ListRehearsalRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ListRehearsalResponse>;

  addContest(
    request: AddContestRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ContestEntry>;

  listContest(
    request: ListContestRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ListContestReponse>;

  joinContest(
    request: JoinContestRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<JoinContestResponse>;

  leaveContest(
    request: JoinContestRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<JoinContestResponse>;

  listResult(
    request: ListResultRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ListResultReponse>;

  yourResult(
    request: ResultRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ResultResponse>;

  getProfile(
    request: ProfileRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ProfileResponse>;

}

