/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "receipt.v1";

/** Object to encapsulate presentation verified receipt data */
export interface PresentationVerifiedReceiptOptions {
  type: string;
  /** did */
  verifier: string;
  /** did */
  subject: string;
  data: Verified | undefined;
}

export interface Verified {
  isVerified: boolean;
  credentialTypes: string[];
  issuers: string[];
  reason: string;
  reply: string;
  requestId: string;
  requestUuid: string;
}

const basePresentationVerifiedReceiptOptions: object = {
  type: "",
  verifier: "",
  subject: "",
};

export const PresentationVerifiedReceiptOptions = {
  encode(
    message: PresentationVerifiedReceiptOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.verifier !== "") {
      writer.uint32(18).string(message.verifier);
    }
    if (message.subject !== "") {
      writer.uint32(26).string(message.subject);
    }
    if (message.data !== undefined) {
      Verified.encode(message.data, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PresentationVerifiedReceiptOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePresentationVerifiedReceiptOptions,
    } as PresentationVerifiedReceiptOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.verifier = reader.string();
          break;
        case 3:
          message.subject = reader.string();
          break;
        case 4:
          message.data = Verified.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PresentationVerifiedReceiptOptions {
    const message = {
      ...basePresentationVerifiedReceiptOptions,
    } as PresentationVerifiedReceiptOptions;
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.verifier !== undefined && object.verifier !== null) {
      message.verifier = String(object.verifier);
    } else {
      message.verifier = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = String(object.subject);
    } else {
      message.subject = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Verified.fromJSON(object.data);
    } else {
      message.data = undefined;
    }
    return message;
  },

  toJSON(message: PresentationVerifiedReceiptOptions): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.verifier !== undefined && (obj.verifier = message.verifier);
    message.subject !== undefined && (obj.subject = message.subject);
    message.data !== undefined &&
      (obj.data = message.data ? Verified.toJSON(message.data) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<PresentationVerifiedReceiptOptions>
  ): PresentationVerifiedReceiptOptions {
    const message = {
      ...basePresentationVerifiedReceiptOptions,
    } as PresentationVerifiedReceiptOptions;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.verifier !== undefined && object.verifier !== null) {
      message.verifier = object.verifier;
    } else {
      message.verifier = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = object.subject;
    } else {
      message.subject = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Verified.fromPartial(object.data);
    } else {
      message.data = undefined;
    }
    return message;
  },
};

const baseVerified: object = {
  isVerified: false,
  credentialTypes: "",
  issuers: "",
  reason: "",
  reply: "",
  requestId: "",
  requestUuid: "",
};

export const Verified = {
  encode(
    message: Verified,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.isVerified === true) {
      writer.uint32(8).bool(message.isVerified);
    }
    for (const v of message.credentialTypes) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.issuers) {
      writer.uint32(26).string(v!);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    if (message.reply !== "") {
      writer.uint32(42).string(message.reply);
    }
    if (message.requestId !== "") {
      writer.uint32(50).string(message.requestId);
    }
    if (message.requestUuid !== "") {
      writer.uint32(58).string(message.requestUuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Verified {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVerified } as Verified;
    message.credentialTypes = [];
    message.issuers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isVerified = reader.bool();
          break;
        case 2:
          message.credentialTypes.push(reader.string());
          break;
        case 3:
          message.issuers.push(reader.string());
          break;
        case 4:
          message.reason = reader.string();
          break;
        case 5:
          message.reply = reader.string();
          break;
        case 6:
          message.requestId = reader.string();
          break;
        case 7:
          message.requestUuid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Verified {
    const message = { ...baseVerified } as Verified;
    message.credentialTypes = [];
    message.issuers = [];
    if (object.isVerified !== undefined && object.isVerified !== null) {
      message.isVerified = Boolean(object.isVerified);
    } else {
      message.isVerified = false;
    }
    if (
      object.credentialTypes !== undefined &&
      object.credentialTypes !== null
    ) {
      for (const e of object.credentialTypes) {
        message.credentialTypes.push(String(e));
      }
    }
    if (object.issuers !== undefined && object.issuers !== null) {
      for (const e of object.issuers) {
        message.issuers.push(String(e));
      }
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = String(object.reason);
    } else {
      message.reason = "";
    }
    if (object.reply !== undefined && object.reply !== null) {
      message.reply = String(object.reply);
    } else {
      message.reply = "";
    }
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
    if (object.requestUuid !== undefined && object.requestUuid !== null) {
      message.requestUuid = String(object.requestUuid);
    } else {
      message.requestUuid = "";
    }
    return message;
  },

  toJSON(message: Verified): unknown {
    const obj: any = {};
    message.isVerified !== undefined && (obj.isVerified = message.isVerified);
    if (message.credentialTypes) {
      obj.credentialTypes = message.credentialTypes.map((e) => e);
    } else {
      obj.credentialTypes = [];
    }
    if (message.issuers) {
      obj.issuers = message.issuers.map((e) => e);
    } else {
      obj.issuers = [];
    }
    message.reason !== undefined && (obj.reason = message.reason);
    message.reply !== undefined && (obj.reply = message.reply);
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.requestUuid !== undefined &&
      (obj.requestUuid = message.requestUuid);
    return obj;
  },

  fromPartial(object: DeepPartial<Verified>): Verified {
    const message = { ...baseVerified } as Verified;
    message.credentialTypes = [];
    message.issuers = [];
    if (object.isVerified !== undefined && object.isVerified !== null) {
      message.isVerified = object.isVerified;
    } else {
      message.isVerified = false;
    }
    if (
      object.credentialTypes !== undefined &&
      object.credentialTypes !== null
    ) {
      for (const e of object.credentialTypes) {
        message.credentialTypes.push(e);
      }
    }
    if (object.issuers !== undefined && object.issuers !== null) {
      for (const e of object.issuers) {
        message.issuers.push(e);
      }
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    } else {
      message.reason = "";
    }
    if (object.reply !== undefined && object.reply !== null) {
      message.reply = object.reply;
    } else {
      message.reply = "";
    }
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
    if (object.requestUuid !== undefined && object.requestUuid !== null) {
      message.requestUuid = object.requestUuid;
    } else {
      message.requestUuid = "";
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
