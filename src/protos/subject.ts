/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Proof } from "./proof";

export const protobufPackage = "subject.v1";

/** Type to encapsulate a Subject's request for Credentials */
export interface UnsignedSubjectCredentialsRequest {
  types: string[];
  issuer: string;
}

/** Type to encapsulate a Subject's signed request for Credentials. Tightly coupled with UnsignedSubjectCredentialsRequest. */
export interface SubjectCredentialsRequest {
  types: string[];
  issuer: string;
  proof: Proof | undefined;
}

/** Type to encapsulate a dto response from the SubjectCredentialsAbsent service. */
export interface SubjectCredentialsAbsentDto {
  subjectCredentialsAbsent: UnsignedSubjectCredentialsRequest[];
}

const baseUnsignedSubjectCredentialsRequest: object = { types: "", issuer: "" };

export const UnsignedSubjectCredentialsRequest = {
  encode(
    message: UnsignedSubjectCredentialsRequest,
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
  ): UnsignedSubjectCredentialsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUnsignedSubjectCredentialsRequest,
    } as UnsignedSubjectCredentialsRequest;
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

  fromJSON(object: any): UnsignedSubjectCredentialsRequest {
    const message = {
      ...baseUnsignedSubjectCredentialsRequest,
    } as UnsignedSubjectCredentialsRequest;
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

  toJSON(message: UnsignedSubjectCredentialsRequest): unknown {
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
    object: DeepPartial<UnsignedSubjectCredentialsRequest>
  ): UnsignedSubjectCredentialsRequest {
    const message = {
      ...baseUnsignedSubjectCredentialsRequest,
    } as UnsignedSubjectCredentialsRequest;
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

const baseSubjectCredentialsRequest: object = { types: "", issuer: "" };

export const SubjectCredentialsRequest = {
  encode(
    message: SubjectCredentialsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.types) {
      writer.uint32(10).string(v!);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SubjectCredentialsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSubjectCredentialsRequest,
    } as SubjectCredentialsRequest;
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
        case 3:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubjectCredentialsRequest {
    const message = {
      ...baseSubjectCredentialsRequest,
    } as SubjectCredentialsRequest;
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
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromJSON(object.proof);
    } else {
      message.proof = undefined;
    }
    return message;
  },

  toJSON(message: SubjectCredentialsRequest): unknown {
    const obj: any = {};
    if (message.types) {
      obj.types = message.types.map((e) => e);
    } else {
      obj.types = [];
    }
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.proof !== undefined &&
      (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SubjectCredentialsRequest>
  ): SubjectCredentialsRequest {
    const message = {
      ...baseSubjectCredentialsRequest,
    } as SubjectCredentialsRequest;
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
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromPartial(object.proof);
    } else {
      message.proof = undefined;
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
      UnsignedSubjectCredentialsRequest.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
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
            UnsignedSubjectCredentialsRequest.decode(reader, reader.uint32())
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
          UnsignedSubjectCredentialsRequest.fromJSON(e)
        );
      }
    }
    return message;
  },

  toJSON(message: SubjectCredentialsAbsentDto): unknown {
    const obj: any = {};
    if (message.subjectCredentialsAbsent) {
      obj.subjectCredentialsAbsent = message.subjectCredentialsAbsent.map((e) =>
        e ? UnsignedSubjectCredentialsRequest.toJSON(e) : undefined
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
          UnsignedSubjectCredentialsRequest.fromPartial(e)
        );
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
