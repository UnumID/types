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

/** Note: this type does not follow conventions because ought to be removed come v4. No need for such a type thanks to service query params. */
export interface SubjectAbsentCredentialMap {
  credentialMap: { [key: string]: SubjectCredentialsRequest };
}

export interface SubjectAbsentCredentialMap_CredentialMapEntry {
  key: string;
  value: SubjectCredentialsRequest | undefined;
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

const baseSubjectAbsentCredentialMap: object = {};

export const SubjectAbsentCredentialMap = {
  encode(
    message: SubjectAbsentCredentialMap,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.credentialMap).forEach(([key, value]) => {
      SubjectAbsentCredentialMap_CredentialMapEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SubjectAbsentCredentialMap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSubjectAbsentCredentialMap,
    } as SubjectAbsentCredentialMap;
    message.credentialMap = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = SubjectAbsentCredentialMap_CredentialMapEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.credentialMap[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubjectAbsentCredentialMap {
    const message = {
      ...baseSubjectAbsentCredentialMap,
    } as SubjectAbsentCredentialMap;
    message.credentialMap = {};
    if (object.credentialMap !== undefined && object.credentialMap !== null) {
      Object.entries(object.credentialMap).forEach(([key, value]) => {
        message.credentialMap[key] = SubjectCredentialsRequest.fromJSON(value);
      });
    }
    return message;
  },

  toJSON(message: SubjectAbsentCredentialMap): unknown {
    const obj: any = {};
    obj.credentialMap = {};
    if (message.credentialMap) {
      Object.entries(message.credentialMap).forEach(([k, v]) => {
        obj.credentialMap[k] = SubjectCredentialsRequest.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<SubjectAbsentCredentialMap>
  ): SubjectAbsentCredentialMap {
    const message = {
      ...baseSubjectAbsentCredentialMap,
    } as SubjectAbsentCredentialMap;
    message.credentialMap = {};
    if (object.credentialMap !== undefined && object.credentialMap !== null) {
      Object.entries(object.credentialMap).forEach(([key, value]) => {
        if (value !== undefined) {
          message.credentialMap[key] =
            SubjectCredentialsRequest.fromPartial(value);
        }
      });
    }
    return message;
  },
};

const baseSubjectAbsentCredentialMap_CredentialMapEntry: object = { key: "" };

export const SubjectAbsentCredentialMap_CredentialMapEntry = {
  encode(
    message: SubjectAbsentCredentialMap_CredentialMapEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      SubjectCredentialsRequest.encode(
        message.value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SubjectAbsentCredentialMap_CredentialMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSubjectAbsentCredentialMap_CredentialMapEntry,
    } as SubjectAbsentCredentialMap_CredentialMapEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = SubjectCredentialsRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubjectAbsentCredentialMap_CredentialMapEntry {
    const message = {
      ...baseSubjectAbsentCredentialMap_CredentialMapEntry,
    } as SubjectAbsentCredentialMap_CredentialMapEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = SubjectCredentialsRequest.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: SubjectAbsentCredentialMap_CredentialMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? SubjectCredentialsRequest.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SubjectAbsentCredentialMap_CredentialMapEntry>
  ): SubjectAbsentCredentialMap_CredentialMapEntry {
    const message = {
      ...baseSubjectAbsentCredentialMap_CredentialMapEntry,
    } as SubjectAbsentCredentialMap_CredentialMapEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = SubjectCredentialsRequest.fromPartial(object.value);
    } else {
      message.value = undefined;
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
