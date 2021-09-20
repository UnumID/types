/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "./google/protobuf/timestamp";
import { PublicKeyInfo } from "./crypto";

export const protobufPackage = "didDocument.v1";

/** Object to encapsulate a DID document object from the saas. */
export interface DidDocument {
  context: string;
  id: string;
  created: Date | undefined;
  updated: Date | undefined;
  publicKey: PublicKeyInfo[];
  service: DidDocumentService[];
}

/** Object to encapsulate a DID document service info. */
export interface DidDocumentService {
  id: string;
  serviceEndpoint: string;
  type: string;
}

const baseDidDocument: object = { context: "", id: "" };

export const DidDocument = {
  encode(
    message: DidDocument,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.context !== "") {
      writer.uint32(10).string(message.context);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.created !== undefined) {
      Timestamp.encode(
        toTimestamp(message.created),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.updated !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updated),
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.publicKey) {
      PublicKeyInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.service) {
      DidDocumentService.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DidDocument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDidDocument } as DidDocument;
    message.publicKey = [];
    message.service = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.context = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.created = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.updated = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.publicKey.push(PublicKeyInfo.decode(reader, reader.uint32()));
          break;
        case 6:
          message.service.push(
            DidDocumentService.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DidDocument {
    const message = { ...baseDidDocument } as DidDocument;
    message.publicKey = [];
    message.service = [];
    if (object.context !== undefined && object.context !== null) {
      message.context = String(object.context);
    } else {
      message.context = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.created !== undefined && object.created !== null) {
      message.created = fromJsonTimestamp(object.created);
    } else {
      message.created = undefined;
    }
    if (object.updated !== undefined && object.updated !== null) {
      message.updated = fromJsonTimestamp(object.updated);
    } else {
      message.updated = undefined;
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      for (const e of object.publicKey) {
        message.publicKey.push(PublicKeyInfo.fromJSON(e));
      }
    }
    if (object.service !== undefined && object.service !== null) {
      for (const e of object.service) {
        message.service.push(DidDocumentService.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: DidDocument): unknown {
    const obj: any = {};
    message.context !== undefined && (obj.context = message.context);
    message.id !== undefined && (obj.id = message.id);
    message.created !== undefined &&
      (obj.created = message.created.toISOString());
    message.updated !== undefined &&
      (obj.updated = message.updated.toISOString());
    if (message.publicKey) {
      obj.publicKey = message.publicKey.map((e) =>
        e ? PublicKeyInfo.toJSON(e) : undefined
      );
    } else {
      obj.publicKey = [];
    }
    if (message.service) {
      obj.service = message.service.map((e) =>
        e ? DidDocumentService.toJSON(e) : undefined
      );
    } else {
      obj.service = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<DidDocument>): DidDocument {
    const message = { ...baseDidDocument } as DidDocument;
    message.publicKey = [];
    message.service = [];
    if (object.context !== undefined && object.context !== null) {
      message.context = object.context;
    } else {
      message.context = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.created !== undefined && object.created !== null) {
      message.created = object.created;
    } else {
      message.created = undefined;
    }
    if (object.updated !== undefined && object.updated !== null) {
      message.updated = object.updated;
    } else {
      message.updated = undefined;
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      for (const e of object.publicKey) {
        message.publicKey.push(PublicKeyInfo.fromPartial(e));
      }
    }
    if (object.service !== undefined && object.service !== null) {
      for (const e of object.service) {
        message.service.push(DidDocumentService.fromPartial(e));
      }
    }
    return message;
  },
};

const baseDidDocumentService: object = {
  id: "",
  serviceEndpoint: "",
  type: "",
};

export const DidDocumentService = {
  encode(
    message: DidDocumentService,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.serviceEndpoint !== "") {
      writer.uint32(18).string(message.serviceEndpoint);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DidDocumentService {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDidDocumentService } as DidDocumentService;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.serviceEndpoint = reader.string();
          break;
        case 3:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DidDocumentService {
    const message = { ...baseDidDocumentService } as DidDocumentService;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (
      object.serviceEndpoint !== undefined &&
      object.serviceEndpoint !== null
    ) {
      message.serviceEndpoint = String(object.serviceEndpoint);
    } else {
      message.serviceEndpoint = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    return message;
  },

  toJSON(message: DidDocumentService): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.serviceEndpoint !== undefined &&
      (obj.serviceEndpoint = message.serviceEndpoint);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: DeepPartial<DidDocumentService>): DidDocumentService {
    const message = { ...baseDidDocumentService } as DidDocumentService;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (
      object.serviceEndpoint !== undefined &&
      object.serviceEndpoint !== null
    ) {
      message.serviceEndpoint = object.serviceEndpoint;
    } else {
      message.serviceEndpoint = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
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
