/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "./google/protobuf/timestamp";
import { VersionInfo } from "./versionInfo";
import { PublicKeyInfo } from "./crypto";

export const protobufPackage = "verifier.v1";

/** Object to encapsulate a Verifier entity */
export interface Verifier {
  uuid: string;
  customerUuid: string;
  name: string;
  did: string;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  isAuthorized: boolean;
  apiKey: string;
  url: string;
  versionInfo: VersionInfo[];
}

/** Object to encapsulate an VerifierOptions entity */
export interface VerifierOptions {
  publicKeyInfo: PublicKeyInfo[];
  url: string;
  versionInfo: VersionInfo[];
}

/** Object to encapsulate basic verifier info */
export interface VerifierInfo {
  did: string;
  name: string;
  encryptionPublicKey: PublicKeyInfo | undefined;
  signingPublicKey: PublicKeyInfo | undefined;
}

export interface RegisterVerifierOptions {
  url: string;
}

const baseVerifier: object = {
  uuid: "",
  customerUuid: "",
  name: "",
  did: "",
  isAuthorized: false,
  apiKey: "",
  url: "",
};

export const Verifier = {
  encode(
    message: Verifier,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    if (message.customerUuid !== "") {
      writer.uint32(18).string(message.customerUuid);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.did !== "") {
      writer.uint32(34).string(message.did);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.isAuthorized === true) {
      writer.uint32(56).bool(message.isAuthorized);
    }
    if (message.apiKey !== "") {
      writer.uint32(66).string(message.apiKey);
    }
    if (message.url !== "") {
      writer.uint32(74).string(message.url);
    }
    for (const v of message.versionInfo) {
      VersionInfo.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Verifier {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVerifier } as Verifier;
    message.versionInfo = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        case 2:
          message.customerUuid = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.did = reader.string();
          break;
        case 5:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.isAuthorized = reader.bool();
          break;
        case 8:
          message.apiKey = reader.string();
          break;
        case 9:
          message.url = reader.string();
          break;
        case 10:
          message.versionInfo.push(VersionInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Verifier {
    const message = { ...baseVerifier } as Verifier;
    message.versionInfo = [];
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = String(object.uuid);
    } else {
      message.uuid = "";
    }
    if (object.customerUuid !== undefined && object.customerUuid !== null) {
      message.customerUuid = String(object.customerUuid);
    } else {
      message.customerUuid = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
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
    if (object.isAuthorized !== undefined && object.isAuthorized !== null) {
      message.isAuthorized = Boolean(object.isAuthorized);
    } else {
      message.isAuthorized = false;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = String(object.apiKey);
    } else {
      message.apiKey = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.versionInfo !== undefined && object.versionInfo !== null) {
      for (const e of object.versionInfo) {
        message.versionInfo.push(VersionInfo.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Verifier): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.customerUuid !== undefined &&
      (obj.customerUuid = message.customerUuid);
    message.name !== undefined && (obj.name = message.name);
    message.did !== undefined && (obj.did = message.did);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    message.isAuthorized !== undefined &&
      (obj.isAuthorized = message.isAuthorized);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey);
    message.url !== undefined && (obj.url = message.url);
    if (message.versionInfo) {
      obj.versionInfo = message.versionInfo.map((e) =>
        e ? VersionInfo.toJSON(e) : undefined
      );
    } else {
      obj.versionInfo = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Verifier>): Verifier {
    const message = { ...baseVerifier } as Verifier;
    message.versionInfo = [];
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = object.uuid;
    } else {
      message.uuid = "";
    }
    if (object.customerUuid !== undefined && object.customerUuid !== null) {
      message.customerUuid = object.customerUuid;
    } else {
      message.customerUuid = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
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
    if (object.isAuthorized !== undefined && object.isAuthorized !== null) {
      message.isAuthorized = object.isAuthorized;
    } else {
      message.isAuthorized = false;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = object.apiKey;
    } else {
      message.apiKey = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.versionInfo !== undefined && object.versionInfo !== null) {
      for (const e of object.versionInfo) {
        message.versionInfo.push(VersionInfo.fromPartial(e));
      }
    }
    return message;
  },
};

const baseVerifierOptions: object = { url: "" };

export const VerifierOptions = {
  encode(
    message: VerifierOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.publicKeyInfo) {
      PublicKeyInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    for (const v of message.versionInfo) {
      VersionInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifierOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVerifierOptions } as VerifierOptions;
    message.publicKeyInfo = [];
    message.versionInfo = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publicKeyInfo.push(
            PublicKeyInfo.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.versionInfo.push(VersionInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VerifierOptions {
    const message = { ...baseVerifierOptions } as VerifierOptions;
    message.publicKeyInfo = [];
    message.versionInfo = [];
    if (object.publicKeyInfo !== undefined && object.publicKeyInfo !== null) {
      for (const e of object.publicKeyInfo) {
        message.publicKeyInfo.push(PublicKeyInfo.fromJSON(e));
      }
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.versionInfo !== undefined && object.versionInfo !== null) {
      for (const e of object.versionInfo) {
        message.versionInfo.push(VersionInfo.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: VerifierOptions): unknown {
    const obj: any = {};
    if (message.publicKeyInfo) {
      obj.publicKeyInfo = message.publicKeyInfo.map((e) =>
        e ? PublicKeyInfo.toJSON(e) : undefined
      );
    } else {
      obj.publicKeyInfo = [];
    }
    message.url !== undefined && (obj.url = message.url);
    if (message.versionInfo) {
      obj.versionInfo = message.versionInfo.map((e) =>
        e ? VersionInfo.toJSON(e) : undefined
      );
    } else {
      obj.versionInfo = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<VerifierOptions>): VerifierOptions {
    const message = { ...baseVerifierOptions } as VerifierOptions;
    message.publicKeyInfo = [];
    message.versionInfo = [];
    if (object.publicKeyInfo !== undefined && object.publicKeyInfo !== null) {
      for (const e of object.publicKeyInfo) {
        message.publicKeyInfo.push(PublicKeyInfo.fromPartial(e));
      }
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.versionInfo !== undefined && object.versionInfo !== null) {
      for (const e of object.versionInfo) {
        message.versionInfo.push(VersionInfo.fromPartial(e));
      }
    }
    return message;
  },
};

const baseVerifierInfo: object = { did: "", name: "" };

export const VerifierInfo = {
  encode(
    message: VerifierInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.encryptionPublicKey !== undefined) {
      PublicKeyInfo.encode(
        message.encryptionPublicKey,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.signingPublicKey !== undefined) {
      PublicKeyInfo.encode(
        message.signingPublicKey,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifierInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVerifierInfo } as VerifierInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.encryptionPublicKey = PublicKeyInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.signingPublicKey = PublicKeyInfo.decode(
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

  fromJSON(object: any): VerifierInfo {
    const message = { ...baseVerifierInfo } as VerifierInfo;
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (
      object.encryptionPublicKey !== undefined &&
      object.encryptionPublicKey !== null
    ) {
      message.encryptionPublicKey = PublicKeyInfo.fromJSON(
        object.encryptionPublicKey
      );
    } else {
      message.encryptionPublicKey = undefined;
    }
    if (
      object.signingPublicKey !== undefined &&
      object.signingPublicKey !== null
    ) {
      message.signingPublicKey = PublicKeyInfo.fromJSON(
        object.signingPublicKey
      );
    } else {
      message.signingPublicKey = undefined;
    }
    return message;
  },

  toJSON(message: VerifierInfo): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    message.name !== undefined && (obj.name = message.name);
    message.encryptionPublicKey !== undefined &&
      (obj.encryptionPublicKey = message.encryptionPublicKey
        ? PublicKeyInfo.toJSON(message.encryptionPublicKey)
        : undefined);
    message.signingPublicKey !== undefined &&
      (obj.signingPublicKey = message.signingPublicKey
        ? PublicKeyInfo.toJSON(message.signingPublicKey)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<VerifierInfo>): VerifierInfo {
    const message = { ...baseVerifierInfo } as VerifierInfo;
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (
      object.encryptionPublicKey !== undefined &&
      object.encryptionPublicKey !== null
    ) {
      message.encryptionPublicKey = PublicKeyInfo.fromPartial(
        object.encryptionPublicKey
      );
    } else {
      message.encryptionPublicKey = undefined;
    }
    if (
      object.signingPublicKey !== undefined &&
      object.signingPublicKey !== null
    ) {
      message.signingPublicKey = PublicKeyInfo.fromPartial(
        object.signingPublicKey
      );
    } else {
      message.signingPublicKey = undefined;
    }
    return message;
  },
};

const baseRegisterVerifierOptions: object = { url: "" };

export const RegisterVerifierOptions = {
  encode(
    message: RegisterVerifierOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegisterVerifierOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRegisterVerifierOptions,
    } as RegisterVerifierOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterVerifierOptions {
    const message = {
      ...baseRegisterVerifierOptions,
    } as RegisterVerifierOptions;
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    return message;
  },

  toJSON(message: RegisterVerifierOptions): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RegisterVerifierOptions>
  ): RegisterVerifierOptions {
    const message = {
      ...baseRegisterVerifierOptions,
    } as RegisterVerifierOptions;
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
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
