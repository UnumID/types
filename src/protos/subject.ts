/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { IssuerInfo } from "./issuer";

export const protobufPackage = "subject.v1";

/** Type to encapsulate a Subject's absent credentials */
export interface SubjectAbsentCredentials {
  types: string[];
  issuer: string;
}

/** Type to encapsulate a dto response from the SubjectCredentialsAbsent service. */
export interface SubjectCredentialsAbsentDto {
  subjectCredentialsAbsent: SubjectAbsentCredentials[];
}

/** Encapsulates Issuer metadata attributes. */
export interface SubjectCredentialIssuerInfoDto {
  issuerInfo: IssuerInfo[];
}

const baseSubjectAbsentCredentials: object = { types: "", issuer: "" };

export const SubjectAbsentCredentials = {
  encode(
    message: SubjectAbsentCredentials,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.types) {
      writer.uint32(10).string(v!);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SubjectAbsentCredentials {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSubjectAbsentCredentials,
    } as SubjectAbsentCredentials;
    message.types = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.types.push(reader.string());
          break;
        case 2:
          message.issuer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubjectAbsentCredentials {
    const message = {
      ...baseSubjectAbsentCredentials,
    } as SubjectAbsentCredentials;
    message.types = [];
    if (object.types !== undefined && object.types !== null) {
      for (const e of object.types) {
        message.types.push(String(e));
      }
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
    return message;
  },

  toJSON(message: SubjectAbsentCredentials): unknown {
    const obj: any = {};
    if (message.types) {
      obj.types = message.types.map((e) => e);
    } else {
      obj.types = [];
    }
    message.issuer !== undefined && (obj.issuer = message.issuer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SubjectAbsentCredentials>
  ): SubjectAbsentCredentials {
    const message = {
      ...baseSubjectAbsentCredentials,
    } as SubjectAbsentCredentials;
    message.types = [];
    if (object.types !== undefined && object.types !== null) {
      for (const e of object.types) {
        message.types.push(e);
      }
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    return message;
  },
};

const baseSubjectCredentialsAbsentDto: object = {};

export const SubjectCredentialsAbsentDto = {
  encode(
    message: SubjectCredentialsAbsentDto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.subjectCredentialsAbsent) {
      SubjectAbsentCredentials.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SubjectCredentialsAbsentDto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSubjectCredentialsAbsentDto,
    } as SubjectCredentialsAbsentDto;
    message.subjectCredentialsAbsent = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subjectCredentialsAbsent.push(
            SubjectAbsentCredentials.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubjectCredentialsAbsentDto {
    const message = {
      ...baseSubjectCredentialsAbsentDto,
    } as SubjectCredentialsAbsentDto;
    message.subjectCredentialsAbsent = [];
    if (
      object.subjectCredentialsAbsent !== undefined &&
      object.subjectCredentialsAbsent !== null
    ) {
      for (const e of object.subjectCredentialsAbsent) {
        message.subjectCredentialsAbsent.push(
          SubjectAbsentCredentials.fromJSON(e)
        );
      }
    }
    return message;
  },

  toJSON(message: SubjectCredentialsAbsentDto): unknown {
    const obj: any = {};
    if (message.subjectCredentialsAbsent) {
      obj.subjectCredentialsAbsent = message.subjectCredentialsAbsent.map((e) =>
        e ? SubjectAbsentCredentials.toJSON(e) : undefined
      );
    } else {
      obj.subjectCredentialsAbsent = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<SubjectCredentialsAbsentDto>
  ): SubjectCredentialsAbsentDto {
    const message = {
      ...baseSubjectCredentialsAbsentDto,
    } as SubjectCredentialsAbsentDto;
    message.subjectCredentialsAbsent = [];
    if (
      object.subjectCredentialsAbsent !== undefined &&
      object.subjectCredentialsAbsent !== null
    ) {
      for (const e of object.subjectCredentialsAbsent) {
        message.subjectCredentialsAbsent.push(
          SubjectAbsentCredentials.fromPartial(e)
        );
      }
    }
    return message;
  },
};

const baseSubjectCredentialIssuerInfoDto: object = {};

export const SubjectCredentialIssuerInfoDto = {
  encode(
    message: SubjectCredentialIssuerInfoDto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.issuerInfo) {
      IssuerInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SubjectCredentialIssuerInfoDto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSubjectCredentialIssuerInfoDto,
    } as SubjectCredentialIssuerInfoDto;
    message.issuerInfo = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuerInfo.push(IssuerInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubjectCredentialIssuerInfoDto {
    const message = {
      ...baseSubjectCredentialIssuerInfoDto,
    } as SubjectCredentialIssuerInfoDto;
    message.issuerInfo = [];
    if (object.issuerInfo !== undefined && object.issuerInfo !== null) {
      for (const e of object.issuerInfo) {
        message.issuerInfo.push(IssuerInfo.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: SubjectCredentialIssuerInfoDto): unknown {
    const obj: any = {};
    if (message.issuerInfo) {
      obj.issuerInfo = message.issuerInfo.map((e) =>
        e ? IssuerInfo.toJSON(e) : undefined
      );
    } else {
      obj.issuerInfo = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<SubjectCredentialIssuerInfoDto>
  ): SubjectCredentialIssuerInfoDto {
    const message = {
      ...baseSubjectCredentialIssuerInfoDto,
    } as SubjectCredentialIssuerInfoDto;
    message.issuerInfo = [];
    if (object.issuerInfo !== undefined && object.issuerInfo !== null) {
      for (const e of object.issuerInfo) {
        message.issuerInfo.push(IssuerInfo.fromPartial(e));
      }
    }
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
