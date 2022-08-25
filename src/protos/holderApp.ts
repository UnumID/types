/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "holderApp.v1";

/** Object to encapsulate basic Holder App entity info */
export interface HolderAppInfo {
  name: string;
  /** base64 string representation of image */
  deeplinkButtonImg: string;
  appStoreUrl?: string | undefined;
  playStoreUrl?: string | undefined;
}

const baseHolderAppInfo: object = { name: "", deeplinkButtonImg: "" };

export const HolderAppInfo = {
  encode(
    message: HolderAppInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.deeplinkButtonImg !== "") {
      writer.uint32(18).string(message.deeplinkButtonImg);
    }
    if (message.appStoreUrl !== undefined) {
      writer.uint32(26).string(message.appStoreUrl);
    }
    if (message.playStoreUrl !== undefined) {
      writer.uint32(34).string(message.playStoreUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HolderAppInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHolderAppInfo } as HolderAppInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.deeplinkButtonImg = reader.string();
          break;
        case 3:
          message.appStoreUrl = reader.string();
          break;
        case 4:
          message.playStoreUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HolderAppInfo {
    const message = { ...baseHolderAppInfo } as HolderAppInfo;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (
      object.deeplinkButtonImg !== undefined &&
      object.deeplinkButtonImg !== null
    ) {
      message.deeplinkButtonImg = String(object.deeplinkButtonImg);
    } else {
      message.deeplinkButtonImg = "";
    }
    if (object.appStoreUrl !== undefined && object.appStoreUrl !== null) {
      message.appStoreUrl = String(object.appStoreUrl);
    } else {
      message.appStoreUrl = undefined;
    }
    if (object.playStoreUrl !== undefined && object.playStoreUrl !== null) {
      message.playStoreUrl = String(object.playStoreUrl);
    } else {
      message.playStoreUrl = undefined;
    }
    return message;
  },

  toJSON(message: HolderAppInfo): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.deeplinkButtonImg !== undefined &&
      (obj.deeplinkButtonImg = message.deeplinkButtonImg);
    message.appStoreUrl !== undefined &&
      (obj.appStoreUrl = message.appStoreUrl);
    message.playStoreUrl !== undefined &&
      (obj.playStoreUrl = message.playStoreUrl);
    return obj;
  },

  fromPartial(object: DeepPartial<HolderAppInfo>): HolderAppInfo {
    const message = { ...baseHolderAppInfo } as HolderAppInfo;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (
      object.deeplinkButtonImg !== undefined &&
      object.deeplinkButtonImg !== null
    ) {
      message.deeplinkButtonImg = object.deeplinkButtonImg;
    } else {
      message.deeplinkButtonImg = "";
    }
    if (object.appStoreUrl !== undefined && object.appStoreUrl !== null) {
      message.appStoreUrl = object.appStoreUrl;
    } else {
      message.appStoreUrl = undefined;
    }
    if (object.playStoreUrl !== undefined && object.playStoreUrl !== null) {
      message.playStoreUrl = object.playStoreUrl;
    } else {
      message.playStoreUrl = undefined;
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
