/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "./google/protobuf/timestamp";
import { Proof } from "./proof";

export const protobufPackage = "crypto.v1";

/** Enum containing all of the RSA padding types that we use */
export enum RSAPadding {
  PKCS = 0,
  OAEP = 1,
  UNRECOGNIZED = -1,
}

export function rSAPaddingFromJSON(object: any): RSAPadding {
  switch (object) {
    case 0:
    case "PKCS":
      return RSAPadding.PKCS;
    case 1:
    case "OAEP":
      return RSAPadding.OAEP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RSAPadding.UNRECOGNIZED;
  }
}

export function rSAPaddingToJSON(object: RSAPadding): string {
  switch (object) {
    case RSAPadding.PKCS:
      return "PKCS";
    case RSAPadding.OAEP:
      return "OAEP";
    default:
      return "UNKNOWN";
  }
}

/**
 * Interface to encapsulate an encrypted key.
 * Note: This is used to encrypted an AES key using RSA so that data can be encrypted with the significantly smaller AES key.
 */
export interface EncryptedKey {
  iv: string;
  key: string;
  algorithm: string;
  did: string;
}

/**
 * Interface to encapsulate encrypted information along side its encrypted decryption key.
 * Note: please see EncryptedKey.
 */
export interface EncryptedData {
  data: string;
  key: EncryptedKey | undefined;
  rsaPadding?: RSAPadding | undefined;
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
  rsaPadding?: RSAPadding | undefined;
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

/**
 * Object to encapsulate an unsigned String
 * This is necessary such that there is a base proto object of which to uniformally / consistently convert to and from bytes.
 */
export interface UnsignedString {
  data: string;
}

/**
 * Object to encapsulate a signed String
 * Note: breaking naming conventions thanks to the "String" causing all sorts of conflicts
 */
export interface SignedString {
  data: string;
  proof: Proof | undefined;
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
    if (message.rsaPadding !== undefined) {
      writer.uint32(24).int32(message.rsaPadding);
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
        case 3:
          message.rsaPadding = reader.int32() as any;
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
    if (object.rsaPadding !== undefined && object.rsaPadding !== null) {
      message.rsaPadding = rSAPaddingFromJSON(object.rsaPadding);
    } else {
      message.rsaPadding = undefined;
    }
    return message;
  },

  toJSON(message: EncryptedData): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data);
    message.key !== undefined &&
      (obj.key = message.key ? EncryptedKey.toJSON(message.key) : undefined);
    message.rsaPadding !== undefined &&
      (obj.rsaPadding =
        message.rsaPadding !== undefined
          ? rSAPaddingToJSON(message.rsaPadding)
          : undefined);
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
    if (object.rsaPadding !== undefined && object.rsaPadding !== null) {
      message.rsaPadding = object.rsaPadding;
    } else {
      message.rsaPadding = undefined;
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
    if (message.rsaPadding !== undefined) {
      writer.uint32(64).int32(message.rsaPadding);
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
        case 8:
          message.rsaPadding = reader.int32() as any;
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
    if (object.rsaPadding !== undefined && object.rsaPadding !== null) {
      message.rsaPadding = rSAPaddingFromJSON(object.rsaPadding);
    } else {
      message.rsaPadding = undefined;
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
    message.rsaPadding !== undefined &&
      (obj.rsaPadding =
        message.rsaPadding !== undefined
          ? rSAPaddingToJSON(message.rsaPadding)
          : undefined);
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
    if (object.rsaPadding !== undefined && object.rsaPadding !== null) {
      message.rsaPadding = object.rsaPadding;
    } else {
      message.rsaPadding = undefined;
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

const baseUnsignedString: object = { data: "" };

export const UnsignedString = {
  encode(
    message: UnsignedString,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnsignedString {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUnsignedString } as UnsignedString;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnsignedString {
    const message = { ...baseUnsignedString } as UnsignedString;
    if (object.data !== undefined && object.data !== null) {
      message.data = String(object.data);
    } else {
      message.data = "";
    }
    return message;
  },

  toJSON(message: UnsignedString): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  fromPartial(object: DeepPartial<UnsignedString>): UnsignedString {
    const message = { ...baseUnsignedString } as UnsignedString;
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = "";
    }
    return message;
  },
};

const baseSignedString: object = { data: "" };

export const SignedString = {
  encode(
    message: SignedString,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignedString {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSignedString } as SignedString;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        case 2:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignedString {
    const message = { ...baseSignedString } as SignedString;
    if (object.data !== undefined && object.data !== null) {
      message.data = String(object.data);
    } else {
      message.data = "";
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromJSON(object.proof);
    } else {
      message.proof = undefined;
    }
    return message;
  },

  toJSON(message: SignedString): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data);
    message.proof !== undefined &&
      (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SignedString>): SignedString {
    const message = { ...baseSignedString } as SignedString;
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = "";
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromPartial(object.proof);
    } else {
      message.proof = undefined;
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
