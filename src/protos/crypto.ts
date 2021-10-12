/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "crypto.v1";

/** Object to encapsulate encrypted data */
export interface EncryptedKey {
  iv: string;
  key: string;
  algorithm: string;
  did: string;
}

/** Object to encapsulate encrypted data */
export interface EncryptedData {
  data: string;
  key: EncryptedKey | undefined;
}

/** Object to encapsulate public key info */
export interface PublicKeyInfo {
  id: string;
  publicKey: string;
  encoding: string;
  type: string;
  status: string;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}

/** Object to encapsulate a key pair */
export interface KeyPair {
  privateKey: string;
  publicKey: string;
}

/** Object to encapsulate a key pair set */
export interface KeyPairSet {
  signing: KeyPair | undefined;
  encryption: KeyPair | undefined;
}

const baseEncryptedKey: object = { iv: "", key: "", algorithm: "", did: "" };

export const EncryptedKey = {
  encode(
    message: EncryptedKey,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.iv !== "") {
      writer.uint32(10).string(message.iv);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    if (message.algorithm !== "") {
      writer.uint32(26).string(message.algorithm);
    }
    if (message.did !== "") {
      writer.uint32(34).string(message.did);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EncryptedKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEncryptedKey } as EncryptedKey;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iv = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        case 3:
          message.algorithm = reader.string();
          break;
        case 4:
          message.did = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EncryptedKey {
    const message = { ...baseEncryptedKey } as EncryptedKey;
    if (object.iv !== undefined && object.iv !== null) {
      message.iv = String(object.iv);
    } else {
      message.iv = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.algorithm !== undefined && object.algorithm !== null) {
      message.algorithm = String(object.algorithm);
    } else {
      message.algorithm = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    return message;
  },

  toJSON(message: EncryptedKey): unknown {
    const obj: any = {};
    message.iv !== undefined && (obj.iv = message.iv);
    message.key !== undefined && (obj.key = message.key);
    message.algorithm !== undefined && (obj.algorithm = message.algorithm);
    message.did !== undefined && (obj.did = message.did);
    return obj;
  },

  fromPartial(object: DeepPartial<EncryptedKey>): EncryptedKey {
    const message = { ...baseEncryptedKey } as EncryptedKey;
    if (object.iv !== undefined && object.iv !== null) {
      message.iv = object.iv;
    } else {
      message.iv = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.algorithm !== undefined && object.algorithm !== null) {
      message.algorithm = object.algorithm;
    } else {
      message.algorithm = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    return message;
  },
};

const baseEncryptedData: object = { data: "" };

export const EncryptedData = {
  encode(
    message: EncryptedData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    if (message.key !== undefined) {
      EncryptedKey.encode(message.key, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EncryptedData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEncryptedData } as EncryptedData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        case 2:
          message.key = EncryptedKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EncryptedData {
    const message = { ...baseEncryptedData } as EncryptedData;
    if (object.data !== undefined && object.data !== null) {
      message.data = String(object.data);
    } else {
      message.data = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = EncryptedKey.fromJSON(object.key);
    } else {
      message.key = undefined;
    }
    return message;
  },

  toJSON(message: EncryptedData): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data);
    message.key !== undefined &&
      (obj.key = message.key ? EncryptedKey.toJSON(message.key) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<EncryptedData>): EncryptedData {
    const message = { ...baseEncryptedData } as EncryptedData;
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = EncryptedKey.fromPartial(object.key);
    } else {
      message.key = undefined;
    }
    return message;
  },
};

const basePublicKeyInfo: object = {
  id: "",
  publicKey: "",
  encoding: "",
  type: "",
  status: "",
};

export const PublicKeyInfo = {
  encode(
    message: PublicKeyInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.publicKey !== "") {
      writer.uint32(18).string(message.publicKey);
    }
    if (message.encoding !== "") {
      writer.uint32(26).string(message.encoding);
    }
    if (message.type !== "") {
      writer.uint32(34).string(message.type);
    }
    if (message.status !== "") {
      writer.uint32(42).string(message.status);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublicKeyInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePublicKeyInfo } as PublicKeyInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.publicKey = reader.string();
          break;
        case 3:
          message.encoding = reader.string();
          break;
        case 4:
          message.type = reader.string();
          break;
        case 5:
          message.status = reader.string();
          break;
        case 6:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PublicKeyInfo {
    const message = { ...basePublicKeyInfo } as PublicKeyInfo;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = String(object.publicKey);
    } else {
      message.publicKey = "";
    }
    if (object.encoding !== undefined && object.encoding !== null) {
      message.encoding = String(object.encoding);
    } else {
      message.encoding = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    return message;
  },

  toJSON(message: PublicKeyInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.publicKey !== undefined && (obj.publicKey = message.publicKey);
    message.encoding !== undefined && (obj.encoding = message.encoding);
    message.type !== undefined && (obj.type = message.type);
    message.status !== undefined && (obj.status = message.status);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<PublicKeyInfo>): PublicKeyInfo {
    const message = { ...basePublicKeyInfo } as PublicKeyInfo;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = object.publicKey;
    } else {
      message.publicKey = "";
    }
    if (object.encoding !== undefined && object.encoding !== null) {
      message.encoding = object.encoding;
    } else {
      message.encoding = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    return message;
  },
};

const baseKeyPair: object = { privateKey: "", publicKey: "" };

export const KeyPair = {
  encode(
    message: KeyPair,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.privateKey !== "") {
      writer.uint32(10).string(message.privateKey);
    }
    if (message.publicKey !== "") {
      writer.uint32(18).string(message.publicKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseKeyPair } as KeyPair;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.privateKey = reader.string();
          break;
        case 2:
          message.publicKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeyPair {
    const message = { ...baseKeyPair } as KeyPair;
    if (object.privateKey !== undefined && object.privateKey !== null) {
      message.privateKey = String(object.privateKey);
    } else {
      message.privateKey = "";
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = String(object.publicKey);
    } else {
      message.publicKey = "";
    }
    return message;
  },

  toJSON(message: KeyPair): unknown {
    const obj: any = {};
    message.privateKey !== undefined && (obj.privateKey = message.privateKey);
    message.publicKey !== undefined && (obj.publicKey = message.publicKey);
    return obj;
  },

  fromPartial(object: DeepPartial<KeyPair>): KeyPair {
    const message = { ...baseKeyPair } as KeyPair;
    if (object.privateKey !== undefined && object.privateKey !== null) {
      message.privateKey = object.privateKey;
    } else {
      message.privateKey = "";
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = object.publicKey;
    } else {
      message.publicKey = "";
    }
    return message;
  },
};

const baseKeyPairSet: object = {};

export const KeyPairSet = {
  encode(
    message: KeyPairSet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.signing !== undefined) {
      KeyPair.encode(message.signing, writer.uint32(10).fork()).ldelim();
    }
    if (message.encryption !== undefined) {
      KeyPair.encode(message.encryption, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyPairSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseKeyPairSet } as KeyPairSet;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signing = KeyPair.decode(reader, reader.uint32());
          break;
        case 2:
          message.encryption = KeyPair.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeyPairSet {
    const message = { ...baseKeyPairSet } as KeyPairSet;
    if (object.signing !== undefined && object.signing !== null) {
      message.signing = KeyPair.fromJSON(object.signing);
    } else {
      message.signing = undefined;
    }
    if (object.encryption !== undefined && object.encryption !== null) {
      message.encryption = KeyPair.fromJSON(object.encryption);
    } else {
      message.encryption = undefined;
    }
    return message;
  },

  toJSON(message: KeyPairSet): unknown {
    const obj: any = {};
    message.signing !== undefined &&
      (obj.signing = message.signing
        ? KeyPair.toJSON(message.signing)
        : undefined);
    message.encryption !== undefined &&
      (obj.encryption = message.encryption
        ? KeyPair.toJSON(message.encryption)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<KeyPairSet>): KeyPairSet {
    const message = { ...baseKeyPairSet } as KeyPairSet;
    if (object.signing !== undefined && object.signing !== null) {
      message.signing = KeyPair.fromPartial(object.signing);
    } else {
      message.signing = undefined;
    }
    if (object.encryption !== undefined && object.encryption !== null) {
      message.encryption = KeyPair.fromPartial(object.encryption);
    } else {
      message.encryption = undefined;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
