import * as jspb from "google-protobuf"

export class LoginRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class LoginResponse extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): void;

  getJwt(): string;
  setJwt(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    userid: number,
    jwt: string,
    name: string,
  }
}

export class SignupRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignupRequest): SignupRequest.AsObject;
  static serializeBinaryToWriter(message: SignupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignupRequest;
  static deserializeBinaryFromReader(message: SignupRequest, reader: jspb.BinaryReader): SignupRequest;
}

export namespace SignupRequest {
  export type AsObject = {
    name: string,
    email: string,
    password: string,
  }
}

export class AddRehearsalRequest extends jspb.Message {
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
    contestid: number,
    minutes: number,
    description: string,
  }
}

export class ListRehearsalRequest extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): void;

  getContestid(): number;
  setContestid(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

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
    contestid: number,
    limit: number,
  }
}

export class RehearsalEntry extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getUserid(): number;
  setUserid(value: number): void;

  getContestid(): number;
  setContestid(value: number): void;

  getMinutes(): number;
  setMinutes(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  getCreatedat(): string;
  setCreatedat(value: string): void;

  getUser(): User | undefined;
  setUser(value?: User): void;
  hasUser(): boolean;
  clearUser(): void;

  getContest(): Contest | undefined;
  setContest(value?: Contest): void;
  hasContest(): boolean;
  clearContest(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RehearsalEntry.AsObject;
  static toObject(includeInstance: boolean, msg: RehearsalEntry): RehearsalEntry.AsObject;
  static serializeBinaryToWriter(message: RehearsalEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RehearsalEntry;
  static deserializeBinaryFromReader(message: RehearsalEntry, reader: jspb.BinaryReader): RehearsalEntry;
}

export namespace RehearsalEntry {
  export type AsObject = {
    id: number,
    userid: number,
    contestid: number,
    minutes: number,
    description: string,
    createdat: string,
    user?: User.AsObject,
    contest?: Contest.AsObject,
  }
}

export class User extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    name: string,
  }
}

export class Contest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Contest.AsObject;
  static toObject(includeInstance: boolean, msg: Contest): Contest.AsObject;
  static serializeBinaryToWriter(message: Contest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Contest;
  static deserializeBinaryFromReader(message: Contest, reader: jspb.BinaryReader): Contest;
}

export namespace Contest {
  export type AsObject = {
    name: string,
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
  getName(): string;
  setName(value: string): void;

  getRules(): string;
  setRules(value: string): void;

  getPublic(): boolean;
  setPublic(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddContestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddContestRequest): AddContestRequest.AsObject;
  static serializeBinaryToWriter(message: AddContestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddContestRequest;
  static deserializeBinaryFromReader(message: AddContestRequest, reader: jspb.BinaryReader): AddContestRequest;
}

export namespace AddContestRequest {
  export type AsObject = {
    name: string,
    rules: string,
    pb_public: boolean,
  }
}

export class AddContestResponse extends jspb.Message {
  getContest(): ContestEntry | undefined;
  setContest(value?: ContestEntry): void;
  hasContest(): boolean;
  clearContest(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddContestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddContestResponse): AddContestResponse.AsObject;
  static serializeBinaryToWriter(message: AddContestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddContestResponse;
  static deserializeBinaryFromReader(message: AddContestResponse, reader: jspb.BinaryReader): AddContestResponse;
}

export namespace AddContestResponse {
  export type AsObject = {
    contest?: ContestEntry.AsObject,
  }
}

export class ContestEntry extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getRules(): string;
  setRules(value: string): void;

  getUser(): User | undefined;
  setUser(value?: User): void;
  hasUser(): boolean;
  clearUser(): void;

  getJoined(): boolean;
  setJoined(value: boolean): void;

  getPublic(): boolean;
  setPublic(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContestEntry.AsObject;
  static toObject(includeInstance: boolean, msg: ContestEntry): ContestEntry.AsObject;
  static serializeBinaryToWriter(message: ContestEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContestEntry;
  static deserializeBinaryFromReader(message: ContestEntry, reader: jspb.BinaryReader): ContestEntry;
}

export namespace ContestEntry {
  export type AsObject = {
    id: number,
    name: string,
    rules: string,
    user?: User.AsObject,
    joined: boolean,
    pb_public: boolean,
  }
}

export class ListContestRequest extends jspb.Message {
  getFilter(): string;
  setFilter(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  getPublic(): boolean;
  setPublic(value: boolean): void;

  getJoined(): boolean;
  setJoined(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListContestRequest): ListContestRequest.AsObject;
  static serializeBinaryToWriter(message: ListContestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContestRequest;
  static deserializeBinaryFromReader(message: ListContestRequest, reader: jspb.BinaryReader): ListContestRequest;
}

export namespace ListContestRequest {
  export type AsObject = {
    filter: string,
    limit: number,
    pb_public: boolean,
    joined: boolean,
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

export class JoinContestRequest extends jspb.Message {
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

  getLimit(): number;
  setLimit(value: number): void;

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
    limit: number,
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

  getMinutes(): string;
  setMinutes(value: string): void;

  getUser(): User | undefined;
  setUser(value?: User): void;
  hasUser(): boolean;
  clearUser(): void;

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
    minutes: string,
    user?: User.AsObject,
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

export class ProfileRequest extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileRequest): ProfileRequest.AsObject;
  static serializeBinaryToWriter(message: ProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileRequest;
  static deserializeBinaryFromReader(message: ProfileRequest, reader: jspb.BinaryReader): ProfileRequest;
}

export namespace ProfileRequest {
  export type AsObject = {
    userid: number,
  }
}

export class ProfileResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getJoined(): string;
  setJoined(value: string): void;

  getPositionthisweek(): number;
  setPositionthisweek(value: number): void;

  getMinutesthisweek(): number;
  setMinutesthisweek(value: number): void;

  getMinutesthismonth(): number;
  setMinutesthismonth(value: number): void;

  getMinutesthisyear(): number;
  setMinutesthisyear(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileResponse): ProfileResponse.AsObject;
  static serializeBinaryToWriter(message: ProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileResponse;
  static deserializeBinaryFromReader(message: ProfileResponse, reader: jspb.BinaryReader): ProfileResponse;
}

export namespace ProfileResponse {
  export type AsObject = {
    name: string,
    joined: string,
    positionthisweek: number,
    minutesthisweek: number,
    minutesthismonth: number,
    minutesthisyear: number,
  }
}

