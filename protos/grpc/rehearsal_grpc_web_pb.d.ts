import * as grpcWeb from 'grpc-web';

import {
  AddContestRequest,
  AddContestResponse,
  AddRehearsalRequest,
  AddRehearsalResponse,
  JoinContestRequest,
  JoinContestResponse,
  ListContestReponse,
  ListContestRequest,
  ListRehearsalRequest,
  ListRehearsalResponse,
  ListResultReponse,
  ListResultRequest,
  RemoveRehearsalRequest,
  RemoveRehearsalResponse,
  ResultRequest,
  ResultResponse,
  SearchContestRequest} from './rehearsal_pb';

export class RehearsalClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  addRehearsal(
    request: AddRehearsalRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: AddRehearsalResponse) => void
  ): grpcWeb.ClientReadableStream<AddRehearsalResponse>;

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
               response: AddContestResponse) => void
  ): grpcWeb.ClientReadableStream<AddContestResponse>;

  listContest(
    request: ListContestRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ListContestReponse) => void
  ): grpcWeb.ClientReadableStream<ListContestReponse>;

  searchContest(
    request: SearchContestRequest,
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

}

export class RehearsalPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  addRehearsal(
    request: AddRehearsalRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<AddRehearsalResponse>;

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
  ): Promise<AddContestResponse>;

  listContest(
    request: ListContestRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ListContestReponse>;

  searchContest(
    request: SearchContestRequest,
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

}

