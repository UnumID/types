/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Credential } from "./credential";
import { Proof } from "./proof";

export const protobufPackage = "presentation.v4";

/** Encapsulates an unsigned presentation attributes. */
export interface UnsignedPresentation {
  context: string[];
  type: string[];
  presentationRequestId: string;
  verifierDid: string;
  /** Optional. If undefined or empty it means the presentation request was declined */
  verifiableCredential: Credential[];
  uuid: string;
}

/**
 * Encapsulates addition attributes to the unsigned presentation entity to create a Presentation entity.
 * Tightly coupled with UnsignedPresentation.
 */
export interface Presentation {
  context: string[];
  type: string[];
  presentationRequestId: string;
  verifierDid: string;
  /** Optional. If undefined or empty it means the presentation request was declined */
  verifiableCredential: Credential[];
  proof: Proof | undefined;
  uuid: string;
}

const baseUnsignedPresentation: object = {
  context: "",
  type: "",
  presentationRequestId: "",
  verifierDid: "",
  uuid: "",
};

export const UnsignedPresentation = {
  encode(
    message: UnsignedPresentation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.context) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.type) {
      writer.uint32(18).string(v!);
    }
    if (message.presentationRequestId !== "") {
      writer.uint32(26).string(message.presentationRequestId);
    }
    if (message.verifierDid !== "") {
      writer.uint32(34).string(message.verifierDid);
    }
    for (const v of message.verifiableCredential) {
      Credential.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.uuid !== "") {
      writer.uint32(50).string(message.uuid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UnsignedPresentation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUnsignedPresentation } as UnsignedPresentation;
    message.context = [];
    message.type = [];
    message.verifiableCredential = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.context.push(reader.string());
          break;
        case 2:
          message.type.push(reader.string());
          break;
        case 3:
          message.presentationRequestId = reader.string();
          break;
        case 4:
          message.verifierDid = reader.string();
          break;
        case 5:
          message.verifiableCredential.push(
            Credential.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.uuid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnsignedPresentation {
    const message = { ...baseUnsignedPresentation } as UnsignedPresentation;
    message.context = [];
    message.type = [];
    message.verifiableCredential = [];
    if (object.context !== undefined && object.context !== null) {
      for (const e of object.context) {
        message.context.push(String(e));
      }
    }
    if (object.type !== undefined && object.type !== null) {
      for (const e of object.type) {
        message.type.push(String(e));
      }
    }
    if (
      object.presentationRequestId !== undefined &&
      object.presentationRequestId !== null
    ) {
      message.presentationRequestId = String(object.presentationRequestId);
    } else {
      message.presentationRequestId = "";
    }
    if (object.verifierDid !== undefined && object.verifierDid !== null) {
      message.verifierDid = String(object.verifierDid);
    } else {
      message.verifierDid = "";
    }
    if (
      object.verifiableCredential !== undefined &&
      object.verifiableCredential !== null
    ) {
      for (const e of object.verifiableCredential) {
        message.verifiableCredential.push(Credential.fromJSON(e));
      }
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = String(object.uuid);
    } else {
      message.uuid = "";
    }
    return message;
  },

  toJSON(message: UnsignedPresentation): unknown {
    const obj: any = {};
    if (message.context) {
      obj.context = message.context.map((e) => e);
    } else {
      obj.context = [];
    }
    if (message.type) {
      obj.type = message.type.map((e) => e);
    } else {
      obj.type = [];
    }
    message.presentationRequestId !== undefined &&
      (obj.presentationRequestId = message.presentationRequestId);
    message.verifierDid !== undefined &&
      (obj.verifierDid = message.verifierDid);
    if (message.verifiableCredential) {
      obj.verifiableCredential = message.verifiableCredential.map((e) =>
        e ? Credential.toJSON(e) : undefined
      );
    } else {
      obj.verifiableCredential = [];
    }
    message.uuid !== undefined && (obj.uuid = message.uuid);
    return obj;
  },

  fromPartial(object: DeepPartial<UnsignedPresentation>): UnsignedPresentation {
    const message = { ...baseUnsignedPresentation } as UnsignedPresentation;
    message.context = [];
    message.type = [];
    message.verifiableCredential = [];
    if (object.context !== undefined && object.context !== null) {
      for (const e of object.context) {
        message.context.push(e);
      }
    }
    if (object.type !== undefined && object.type !== null) {
      for (const e of object.type) {
        message.type.push(e);
      }
    }
    if (
      object.presentationRequestId !== undefined &&
      object.presentationRequestId !== null
    ) {
      message.presentationRequestId = object.presentationRequestId;
    } else {
      message.presentationRequestId = "";
    }
    if (object.verifierDid !== undefined && object.verifierDid !== null) {
      message.verifierDid = object.verifierDid;
    } else {
      message.verifierDid = "";
    }
    if (
      object.verifiableCredential !== undefined &&
      object.verifiableCredential !== null
    ) {
      for (const e of object.verifiableCredential) {
        message.verifiableCredential.push(Credential.fromPartial(e));
      }
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = object.uuid;
    } else {
      message.uuid = "";
    }
    return message;
  },
};

const basePresentation: object = {
  context: "",
  type: "",
  presentationRequestId: "",
  verifierDid: "",
  uuid: "",
};

export const Presentation = {
  encode(
    message: Presentation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.context) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.type) {
      writer.uint32(18).string(v!);
    }
    if (message.presentationRequestId !== "") {
      writer.uint32(26).string(message.presentationRequestId);
    }
    if (message.verifierDid !== "") {
      writer.uint32(34).string(message.verifierDid);
    }
    for (const v of message.verifiableCredential) {
      Credential.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(50).fork()).ldelim();
    }
    if (message.uuid !== "") {
      writer.uint32(58).string(message.uuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Presentation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePresentation } as Presentation;
    message.context = [];
    message.type = [];
    message.verifiableCredential = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.context.push(reader.string());
          break;
        case 2:
          message.type.push(reader.string());
          break;
        case 3:
          message.presentationRequestId = reader.string();
          break;
        case 4:
          message.verifierDid = reader.string();
          break;
        case 5:
          message.verifiableCredential.push(
            Credential.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        case 7:
          message.uuid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Presentation {
    const message = { ...basePresentation } as Presentation;
    message.context = [];
    message.type = [];
    message.verifiableCredential = [];
    if (object.context !== undefined && object.context !== null) {
      for (const e of object.context) {
        message.context.push(String(e));
      }
    }
    if (object.type !== undefined && object.type !== null) {
      for (const e of object.type) {
        message.type.push(String(e));
      }
    }
    if (
      object.presentationRequestId !== undefined &&
      object.presentationRequestId !== null
    ) {
      message.presentationRequestId = String(object.presentationRequestId);
    } else {
      message.presentationRequestId = "";
    }
    if (object.verifierDid !== undefined && object.verifierDid !== null) {
      message.verifierDid = String(object.verifierDid);
    } else {
      message.verifierDid = "";
    }
    if (
      object.verifiableCredential !== undefined &&
      object.verifiableCredential !== null
    ) {
      for (const e of object.verifiableCredential) {
        message.verifiableCredential.push(Credential.fromJSON(e));
      }
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromJSON(object.proof);
    } else {
      message.proof = undefined;
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = String(object.uuid);
    } else {
      message.uuid = "";
    }
    return message;
  },

  toJSON(message: Presentation): unknown {
    const obj: any = {};
    if (message.context) {
      obj.context = message.context.map((e) => e);
    } else {
      obj.context = [];
    }
    if (message.type) {
      obj.type = message.type.map((e) => e);
    } else {
      obj.type = [];
    }
    message.presentationRequestId !== undefined &&
      (obj.presentationRequestId = message.presentationRequestId);
    message.verifierDid !== undefined &&
      (obj.verifierDid = message.verifierDid);
    if (message.verifiableCredential) {
      obj.verifiableCredential = message.verifiableCredential.map((e) =>
        e ? Credential.toJSON(e) : undefined
      );
    } else {
      obj.verifiableCredential = [];
    }
    message.proof !== undefined &&
      (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    return obj;
  },

  fromPartial(object: DeepPartial<Presentation>): Presentation {
    const message = { ...basePresentation } as Presentation;
    message.context = [];
    message.type = [];
    message.verifiableCredential = [];
    if (object.context !== undefined && object.context !== null) {
      for (const e of object.context) {
        message.context.push(e);
      }
    }
    if (object.type !== undefined && object.type !== null) {
      for (const e of object.type) {
        message.type.push(e);
      }
    }
    if (
      object.presentationRequestId !== undefined &&
      object.presentationRequestId !== null
    ) {
      message.presentationRequestId = object.presentationRequestId;
    } else {
      message.presentationRequestId = "";
    }
    if (object.verifierDid !== undefined && object.verifierDid !== null) {
      message.verifierDid = object.verifierDid;
    } else {
      message.verifierDid = "";
    }
    if (
      object.verifiableCredential !== undefined &&
      object.verifiableCredential !== null
    ) {
      for (const e of object.verifiableCredential) {
        message.verifiableCredential.push(Credential.fromPartial(e));
      }
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromPartial(object.proof);
    } else {
      message.proof = undefined;
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = object.uuid;
    } else {
      message.uuid = "";
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
