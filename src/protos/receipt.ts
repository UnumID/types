/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "receipt.v1";

/** Object to encapsulate a receipt object from the saas. */
export interface Receipt {
  uuid: string;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  type: string[];
  subject: string;
  verifier: string;
  issuer: string;
  customer: string;
}

/** Object to encapsulate presentation verified receipt data */
export interface PresentationVerifedReceiptOptions {
  type: string[];
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
}

const baseReceipt: object = {
  uuid: "",
  type: "",
  subject: "",
  verifier: "",
  issuer: "",
  customer: "",
};

export const Receipt = {
  encode(
    message: Receipt,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.type) {
      writer.uint32(34).string(v!);
    }
    if (message.subject !== "") {
      writer.uint32(42).string(message.subject);
    }
    if (message.verifier !== "") {
      writer.uint32(50).string(message.verifier);
    }
    if (message.issuer !== "") {
      writer.uint32(58).string(message.issuer);
    }
    if (message.customer !== "") {
      writer.uint32(66).string(message.customer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Receipt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReceipt } as Receipt;
    message.type = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        case 2:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.type.push(reader.string());
          break;
        case 5:
          message.subject = reader.string();
          break;
        case 6:
          message.verifier = reader.string();
          break;
        case 7:
          message.issuer = reader.string();
          break;
        case 8:
          message.customer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Receipt {
    const message = { ...baseReceipt } as Receipt;
    message.type = [];
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = String(object.uuid);
    } else {
      message.uuid = "";
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
    if (object.type !== undefined && object.type !== null) {
      for (const e of object.type) {
        message.type.push(String(e));
      }
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = String(object.subject);
    } else {
      message.subject = "";
    }
    if (object.verifier !== undefined && object.verifier !== null) {
      message.verifier = String(object.verifier);
    } else {
      message.verifier = "";
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
    if (object.customer !== undefined && object.customer !== null) {
      message.customer = String(object.customer);
    } else {
      message.customer = "";
    }
    return message;
  },

  toJSON(message: Receipt): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    if (message.type) {
      obj.type = message.type.map((e) => e);
    } else {
      obj.type = [];
    }
    message.subject !== undefined && (obj.subject = message.subject);
    message.verifier !== undefined && (obj.verifier = message.verifier);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.customer !== undefined && (obj.customer = message.customer);
    return obj;
  },

  fromPartial(object: DeepPartial<Receipt>): Receipt {
    const message = { ...baseReceipt } as Receipt;
    message.type = [];
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = object.uuid;
    } else {
      message.uuid = "";
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
    if (object.type !== undefined && object.type !== null) {
      for (const e of object.type) {
        message.type.push(e);
      }
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = object.subject;
    } else {
      message.subject = "";
    }
    if (object.verifier !== undefined && object.verifier !== null) {
      message.verifier = object.verifier;
    } else {
      message.verifier = "";
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    if (object.customer !== undefined && object.customer !== null) {
      message.customer = object.customer;
    } else {
      message.customer = "";
    }
    return message;
  },
};

const basePresentationVerifedReceiptOptions: object = {
  type: "",
  verifier: "",
  subject: "",
};

export const PresentationVerifedReceiptOptions = {
  encode(
    message: PresentationVerifedReceiptOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.type) {
      writer.uint32(10).string(v!);
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
  ): PresentationVerifedReceiptOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePresentationVerifedReceiptOptions,
    } as PresentationVerifedReceiptOptions;
    message.type = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type.push(reader.string());
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

  fromJSON(object: any): PresentationVerifedReceiptOptions {
    const message = {
      ...basePresentationVerifedReceiptOptions,
    } as PresentationVerifedReceiptOptions;
    message.type = [];
    if (object.type !== undefined && object.type !== null) {
      for (const e of object.type) {
        message.type.push(String(e));
      }
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

  toJSON(message: PresentationVerifedReceiptOptions): unknown {
    const obj: any = {};
    if (message.type) {
      obj.type = message.type.map((e) => e);
    } else {
      obj.type = [];
    }
    message.verifier !== undefined && (obj.verifier = message.verifier);
    message.subject !== undefined && (obj.subject = message.subject);
    message.data !== undefined &&
      (obj.data = message.data ? Verified.toJSON(message.data) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<PresentationVerifedReceiptOptions>
  ): PresentationVerifedReceiptOptions {
    const message = {
      ...basePresentationVerifedReceiptOptions,
    } as PresentationVerifedReceiptOptions;
    message.type = [];
    if (object.type !== undefined && object.type !== null) {
      for (const e of object.type) {
        message.type.push(e);
      }
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
