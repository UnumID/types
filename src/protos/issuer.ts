/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "issuer.v1";

/** Encapsulates Issuer metadata attributes. */
export interface IssuerInfo {
  did: string;
  name: string;
  cardImageUrl: string;
}

const baseIssuerInfo: object = { did: "", name: "", cardImageUrl: "" };

export const IssuerInfo = {
  encode(
    message: IssuerInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.cardImageUrl !== "") {
      writer.uint32(26).string(message.cardImageUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IssuerInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIssuerInfo } as IssuerInfo;
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
          message.cardImageUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IssuerInfo {
    const message = { ...baseIssuerInfo } as IssuerInfo;
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
    if (object.cardImageUrl !== undefined && object.cardImageUrl !== null) {
      message.cardImageUrl = String(object.cardImageUrl);
    } else {
      message.cardImageUrl = "";
    }
    return message;
  },

  toJSON(message: IssuerInfo): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    message.name !== undefined && (obj.name = message.name);
    message.cardImageUrl !== undefined &&
      (obj.cardImageUrl = message.cardImageUrl);
    return obj;
  },

  fromPartial(object: DeepPartial<IssuerInfo>): IssuerInfo {
    const message = { ...baseIssuerInfo } as IssuerInfo;
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
    if (object.cardImageUrl !== undefined && object.cardImageUrl !== null) {
      message.cardImageUrl = object.cardImageUrl;
    } else {
      message.cardImageUrl = "";
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
