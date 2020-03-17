import * as jspb from "google-protobuf"

export class AddRehearsalRequest extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): void;

  getContestid(): number;
  setContestid(value: number): void;

  getMinutes(): number;
  setMinutes(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRehearsalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddRehearsalRequest): AddRehearsalRequest.AsObject;
  static serializeBinaryToWriter(message: AddRehearsalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRehearsalRequest;
  static deserializeBinaryFromReader(message: AddRehearsalRequest, reader: jspb.BinaryReader): AddRehearsalRequest;
}

export namespace AddRehearsalRequest {
  export type AsObject = {
    userid: number,
    contestid: number,
    minutes: number,
    description: string,
  }
}

export class AddRehearsalResponse extends jspb.Message {
  getResult(): number;
  setResult(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRehearsalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddRehearsalResponse): AddRehearsalResponse.AsObject;
  static serializeBinaryToWriter(message: AddRehearsalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRehearsalResponse;
  static deserializeBinaryFromReader(message: AddRehearsalResponse, reader: jspb.BinaryReader): AddRehearsalResponse;
}

export namespace AddRehearsalResponse {
  export type AsObject = {
    result: number,
  }
}

export class ListRehearsalRequest extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRehearsalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRehearsalRequest): ListRehearsalRequest.AsObject;
  static serializeBinaryToWriter(message: ListRehearsalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRehearsalRequest;
  static deserializeBinaryFromReader(message: ListRehearsalRequest, reader: jspb.BinaryReader): ListRehearsalRequest;
}

export namespace ListRehearsalRequest {
  export type AsObject = {
    userid: number,
  }
}

export class RehearsalEntry extends jspb.Message {
  getRehearselid(): number;
  setRehearselid(value: number): void;

  getUserid(): number;
  setUserid(value: number): void;

  getContestid(): number;
  setContestid(value: number): void;

  getMinutes(): number;
  setMinutes(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RehearsalEntry.AsObject;
  static toObject(includeInstance: boolean, msg: RehearsalEntry): RehearsalEntry.AsObject;
  static serializeBinaryToWriter(message: RehearsalEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RehearsalEntry;
  static deserializeBinaryFromReader(message: RehearsalEntry, reader: jspb.BinaryReader): RehearsalEntry;
}

export namespace RehearsalEntry {
  export type AsObject = {
    rehearselid: number,
    userid: number,
    contestid: number,
    minutes: number,
    description: string,
  }
}

export class ListRehearsalResponse extends jspb.Message {
  getRehearsalsList(): Array<RehearsalEntry>;
  setRehearsalsList(value: Array<RehearsalEntry>): void;
  clearRehearsalsList(): void;
  addRehearsals(value?: RehearsalEntry, index?: number): RehearsalEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRehearsalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRehearsalResponse): ListRehearsalResponse.AsObject;
  static serializeBinaryToWriter(message: ListRehearsalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRehearsalResponse;
  static deserializeBinaryFromReader(message: ListRehearsalResponse, reader: jspb.BinaryReader): ListRehearsalResponse;
}

export namespace ListRehearsalResponse {
  export type AsObject = {
    rehearsalsList: Array<RehearsalEntry.AsObject>,
  }
}

export class RemoveRehearsalRequest extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): void;

  getRehearselid(): number;
  setRehearselid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveRehearsalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveRehearsalRequest): RemoveRehearsalRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveRehearsalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveRehearsalRequest;
  static deserializeBinaryFromReader(message: RemoveRehearsalRequest, reader: jspb.BinaryReader): RemoveRehearsalRequest;
}

export namespace RemoveRehearsalRequest {
  export type AsObject = {
    userid: number,
    rehearselid: number,
  }
}

export class RemoveRehearsalResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveRehearsalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveRehearsalResponse): RemoveRehearsalResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveRehearsalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveRehearsalResponse;
  static deserializeBinaryFromReader(message: RemoveRehearsalResponse, reader: jspb.BinaryReader): RemoveRehearsalResponse;
}

export namespace RemoveRehearsalResponse {
  export type AsObject = {
  }
}

export class AddContestRequest extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getRules(): string;
  setRules(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddContestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddContestRequest): AddContestRequest.AsObject;
  static serializeBinaryToWriter(message: AddContestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddContestRequest;
  static deserializeBinaryFromReader(message: AddContestRequest, reader: jspb.BinaryReader): AddContestRequest;
}

export namespace AddContestRequest {
  export type AsObject = {
    userid: number,
    name: string,
    rules: string,
  }
}

export class AddContestResponse extends jspb.Message {
  getResult(): number;
  setResult(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddContestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddContestResponse): AddContestResponse.AsObject;
  static serializeBinaryToWriter(message: AddContestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddContestResponse;
  static deserializeBinaryFromReader(message: AddContestResponse, reader: jspb.BinaryReader): AddContestResponse;
}

export namespace AddContestResponse {
  export type AsObject = {
    result: number,
  }
}

export class ContestEntry extends jspb.Message {
  getContestid(): number;
  setContestid(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContestEntry.AsObject;
  static toObject(includeInstance: boolean, msg: ContestEntry): ContestEntry.AsObject;
  static serializeBinaryToWriter(message: ContestEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContestEntry;
  static deserializeBinaryFromReader(message: ContestEntry, reader: jspb.BinaryReader): ContestEntry;
}

export namespace ContestEntry {
  export type AsObject = {
    contestid: number,
    name: string,
  }
}

export class ListContestRequest extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListContestRequest): ListContestRequest.AsObject;
  static serializeBinaryToWriter(message: ListContestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContestRequest;
  static deserializeBinaryFromReader(message: ListContestRequest, reader: jspb.BinaryReader): ListContestRequest;
}

export namespace ListContestRequest {
  export type AsObject = {
    userid: number,
  }
}

export class ListContestReponse extends jspb.Message {
  getContestsList(): Array<ContestEntry>;
  setContestsList(value: Array<ContestEntry>): void;
  clearContestsList(): void;
  addContests(value?: ContestEntry, index?: number): ContestEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContestReponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListContestReponse): ListContestReponse.AsObject;
  static serializeBinaryToWriter(message: ListContestReponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContestReponse;
  static deserializeBinaryFromReader(message: ListContestReponse, reader: jspb.BinaryReader): ListContestReponse;
}

export namespace ListContestReponse {
  export type AsObject = {
    contestsList: Array<ContestEntry.AsObject>,
  }
}

export class SearchContestRequest extends jspb.Message {
  getSearch(): string;
  setSearch(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchContestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchContestRequest): SearchContestRequest.AsObject;
  static serializeBinaryToWriter(message: SearchContestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchContestRequest;
  static deserializeBinaryFromReader(message: SearchContestRequest, reader: jspb.BinaryReader): SearchContestRequest;
}

export namespace SearchContestRequest {
  export type AsObject = {
    search: string,
  }
}

export class JoinContestRequest extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): void;

  getContestid(): number;
  setContestid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinContestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinContestRequest): JoinContestRequest.AsObject;
  static serializeBinaryToWriter(message: JoinContestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinContestRequest;
  static deserializeBinaryFromReader(message: JoinContestRequest, reader: jspb.BinaryReader): JoinContestRequest;
}

export namespace JoinContestRequest {
  export type AsObject = {
    userid: number,
    contestid: number,
  }
}

export class JoinContestResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinContestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JoinContestResponse): JoinContestResponse.AsObject;
  static serializeBinaryToWriter(message: JoinContestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinContestResponse;
  static deserializeBinaryFromReader(message: JoinContestResponse, reader: jspb.BinaryReader): JoinContestResponse;
}

export namespace JoinContestResponse {
  export type AsObject = {
  }
}

export class ListResultRequest extends jspb.Message {
  getContestid(): number;
  setContestid(value: number): void;

  getPeriod(): ListResultRequest.Period;
  setPeriod(value: ListResultRequest.Period): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListResultRequest): ListResultRequest.AsObject;
  static serializeBinaryToWriter(message: ListResultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResultRequest;
  static deserializeBinaryFromReader(message: ListResultRequest, reader: jspb.BinaryReader): ListResultRequest;
}

export namespace ListResultRequest {
  export type AsObject = {
    contestid: number,
    period: ListResultRequest.Period,
  }

  export enum Period { 
    THISYEAR = 0,
    THISMONTH = 1,
    THISWEEK = 2,
    LASTYEAR = 3,
    LASTMONTH = 4,
    LASTWEEK = 5,
  }
}

export class Result extends jspb.Message {
  getContestid(): number;
  setContestid(value: number): void;

  getUserid(): number;
  setUserid(value: number): void;

  getPosition(): number;
  setPosition(value: number): void;

  getName(): string;
  setName(value: string): void;

  getMinutes(): string;
  setMinutes(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Result.AsObject;
  static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
  static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Result;
  static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
}

export namespace Result {
  export type AsObject = {
    contestid: number,
    userid: number,
    position: number,
    name: string,
    minutes: string,
  }
}

export class ListResultReponse extends jspb.Message {
  getResultsList(): Array<Result>;
  setResultsList(value: Array<Result>): void;
  clearResultsList(): void;
  addResults(value?: Result, index?: number): Result;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResultReponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResultReponse): ListResultReponse.AsObject;
  static serializeBinaryToWriter(message: ListResultReponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResultReponse;
  static deserializeBinaryFromReader(message: ListResultReponse, reader: jspb.BinaryReader): ListResultReponse;
}

export namespace ListResultReponse {
  export type AsObject = {
    resultsList: Array<Result.AsObject>,
  }
}

export class ResultRequest extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResultRequest): ResultRequest.AsObject;
  static serializeBinaryToWriter(message: ResultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResultRequest;
  static deserializeBinaryFromReader(message: ResultRequest, reader: jspb.BinaryReader): ResultRequest;
}

export namespace ResultRequest {
  export type AsObject = {
    userid: number,
  }
}

export class ResultResponse extends jspb.Message {
  getThisyear(): number;
  setThisyear(value: number): void;

  getThismonth(): number;
  setThismonth(value: number): void;

  getThisweek(): number;
  setThisweek(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResultResponse): ResultResponse.AsObject;
  static serializeBinaryToWriter(message: ResultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResultResponse;
  static deserializeBinaryFromReader(message: ResultResponse, reader: jspb.BinaryReader): ResultResponse;
}

export namespace ResultResponse {
  export type AsObject = {
    thisyear: number,
    thismonth: number,
    thisweek: number,
  }
}

