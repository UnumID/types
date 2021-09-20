/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "externalMessage.v1";

/** Object to encapsulate encrypted data */
export interface ExternalMessage {
  to: string;
  deeplink: string;
}

const baseExternalMessage: object = { to: "", deeplink: "" };

export const ExternalMessage = {
  encode(
    message: ExternalMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.to !== "") {
      writer.uint32(10).string(message.to);
    }
    if (message.deeplink !== "") {
      writer.uint32(18).string(message.deeplink);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExternalMessage } as ExternalMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.to = reader.string();
          break;
        case 2:
          message.deeplink = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExternalMessage {
    const message = { ...baseExternalMessage } as ExternalMessage;
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.deeplink !== undefined && object.deeplink !== null) {
      message.deeplink = String(object.deeplink);
    } else {
      message.deeplink = "";
    }
    return message;
  },

  toJSON(message: ExternalMessage): unknown {
    const obj: any = {};
    message.to !== undefined && (obj.to = message.to);
    message.deeplink !== undefined && (obj.deeplink = message.deeplink);
    return obj;
  },

  fromPartial(object: DeepPartial<ExternalMessage>): ExternalMessage {
    const message = { ...baseExternalMessage } as ExternalMessage;
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.deeplink !== undefined && object.deeplink !== null) {
      message.deeplink = object.deeplink;
    } else {
      message.deeplink = "";
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
