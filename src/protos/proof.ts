/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "proof.v1";

/** Object to encapsulate cryptographic proof for any signed object: Credentials, Presentations, PresentationRequests. */
export interface Proof {
  signatureValue: string;
  type: string;
  verificationMethod: string;
  created: Date | undefined;
  proofPurpose: string;
}

const baseProof: object = {
  signatureValue: "",
  type: "",
  verificationMethod: "",
  proofPurpose: "",
};

export const Proof = {
  encode(message: Proof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signatureValue !== "") {
      writer.uint32(10).string(message.signatureValue);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.verificationMethod !== "") {
      writer.uint32(26).string(message.verificationMethod);
    }
    if (message.created !== undefined) {
      Timestamp.encode(
        toTimestamp(message.created),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.proofPurpose !== "") {
      writer.uint32(42).string(message.proofPurpose);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProof } as Proof;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signatureValue = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.verificationMethod = reader.string();
          break;
        case 4:
          message.created = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.proofPurpose = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Proof {
    const message = { ...baseProof } as Proof;
    if (object.signatureValue !== undefined && object.signatureValue !== null) {
      message.signatureValue = String(object.signatureValue);
    } else {
      message.signatureValue = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (
      object.verificationMethod !== undefined &&
      object.verificationMethod !== null
    ) {
      message.verificationMethod = String(object.verificationMethod);
    } else {
      message.verificationMethod = "";
    }
    if (object.created !== undefined && object.created !== null) {
      message.created = fromJsonTimestamp(object.created);
    } else {
      message.created = undefined;
    }
    if (object.proofPurpose !== undefined && object.proofPurpose !== null) {
      message.proofPurpose = String(object.proofPurpose);
    } else {
      message.proofPurpose = "";
    }
    return message;
  },

  toJSON(message: Proof): unknown {
    const obj: any = {};
    message.signatureValue !== undefined &&
      (obj.signatureValue = message.signatureValue);
    message.type !== undefined && (obj.type = message.type);
    message.verificationMethod !== undefined &&
      (obj.verificationMethod = message.verificationMethod);
    message.created !== undefined &&
      (obj.created = message.created.toISOString());
    message.proofPurpose !== undefined &&
      (obj.proofPurpose = message.proofPurpose);
    return obj;
  },

  fromPartial(object: DeepPartial<Proof>): Proof {
    const message = { ...baseProof } as Proof;
    if (object.signatureValue !== undefined && object.signatureValue !== null) {
      message.signatureValue = object.signatureValue;
    } else {
      message.signatureValue = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (
      object.verificationMethod !== undefined &&
      object.verificationMethod !== null
    ) {
      message.verificationMethod = object.verificationMethod;
    } else {
      message.verificationMethod = "";
    }
    if (object.created !== undefined && object.created !== null) {
      message.created = object.created;
    } else {
      message.created = undefined;
    }
    if (object.proofPurpose !== undefined && object.proofPurpose !== null) {
      message.proofPurpose = object.proofPurpose;
    } else {
      message.proofPurpose = "";
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
