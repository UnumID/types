/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "versionInfo.v1";

/** Object to encapsulate Target information regarding customer's api versioning. */
export interface TargetInfo {
  version: string;
  /** TODO map of any string to any string for any headers; */
  url: string;
}

/** Object to encapsulate Version information. */
export interface VersionInfo {
  sdkVersion: string;
  target: TargetInfo | undefined;
}

const baseTargetInfo: object = { version: "", url: "" };

export const TargetInfo = {
  encode(
    message: TargetInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TargetInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTargetInfo } as TargetInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TargetInfo {
    const message = { ...baseTargetInfo } as TargetInfo;
    if (object.version !== undefined && object.version !== null) {
      message.version = String(object.version);
    } else {
      message.version = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    return message;
  },

  toJSON(message: TargetInfo): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial(object: DeepPartial<TargetInfo>): TargetInfo {
    const message = { ...baseTargetInfo } as TargetInfo;
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    return message;
  },
};

const baseVersionInfo: object = { sdkVersion: "" };

export const VersionInfo = {
  encode(
    message: VersionInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sdkVersion !== "") {
      writer.uint32(10).string(message.sdkVersion);
    }
    if (message.target !== undefined) {
      TargetInfo.encode(message.target, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VersionInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVersionInfo } as VersionInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sdkVersion = reader.string();
          break;
        case 2:
          message.target = TargetInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VersionInfo {
    const message = { ...baseVersionInfo } as VersionInfo;
    if (object.sdkVersion !== undefined && object.sdkVersion !== null) {
      message.sdkVersion = String(object.sdkVersion);
    } else {
      message.sdkVersion = "";
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = TargetInfo.fromJSON(object.target);
    } else {
      message.target = undefined;
    }
    return message;
  },

  toJSON(message: VersionInfo): unknown {
    const obj: any = {};
    message.sdkVersion !== undefined && (obj.sdkVersion = message.sdkVersion);
    message.target !== undefined &&
      (obj.target = message.target
        ? TargetInfo.toJSON(message.target)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<VersionInfo>): VersionInfo {
    const message = { ...baseVersionInfo } as VersionInfo;
    if (object.sdkVersion !== undefined && object.sdkVersion !== null) {
      message.sdkVersion = object.sdkVersion;
    } else {
      message.sdkVersion = "";
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = TargetInfo.fromPartial(object.target);
    } else {
      message.target = undefined;
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
