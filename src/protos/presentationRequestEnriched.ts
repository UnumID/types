/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PresentationRequest } from "./presentationRequest";
import { VerifierInfo } from "./verifier";
import { Struct } from "./google/protobuf/struct";
import { HolderAppInfo } from "./holderApp";

export const protobufPackage = "presentationRequestEnriched.v1";

/** Encapsulates presentation request attributes as they are retuned from Unum ID saas. */
export interface PresentationRequestEnriched {
  presentationRequest: PresentationRequest | undefined;
  verifierInfo: VerifierInfo | undefined;
  /** a map of issuer metadata keyed on the issuer's did */
  issuers: Struct | undefined;
  holderApp: HolderAppInfo | undefined;
  deeplink: string;
  qrCode: string;
}

const basePresentationRequestEnriched: object = { deeplink: "", qrCode: "" };

export const PresentationRequestEnriched = {
  encode(
    message: PresentationRequestEnriched,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.presentationRequest !== undefined) {
      PresentationRequest.encode(
        message.presentationRequest,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.verifierInfo !== undefined) {
      VerifierInfo.encode(
        message.verifierInfo,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.issuers !== undefined) {
      Struct.encode(message.issuers, writer.uint32(26).fork()).ldelim();
    }
    if (message.holderApp !== undefined) {
      HolderAppInfo.encode(
        message.holderApp,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.deeplink !== "") {
      writer.uint32(42).string(message.deeplink);
    }
    if (message.qrCode !== "") {
      writer.uint32(50).string(message.qrCode);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PresentationRequestEnriched {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePresentationRequestEnriched,
    } as PresentationRequestEnriched;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.presentationRequest = PresentationRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.verifierInfo = VerifierInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.issuers = Struct.decode(reader, reader.uint32());
          break;
        case 4:
          message.holderApp = HolderAppInfo.decode(reader, reader.uint32());
          break;
        case 5:
          message.deeplink = reader.string();
          break;
        case 6:
          message.qrCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PresentationRequestEnriched {
    const message = {
      ...basePresentationRequestEnriched,
    } as PresentationRequestEnriched;
    if (
      object.presentationRequest !== undefined &&
      object.presentationRequest !== null
    ) {
      message.presentationRequest = PresentationRequest.fromJSON(
        object.presentationRequest
      );
    } else {
      message.presentationRequest = undefined;
    }
    if (object.verifierInfo !== undefined && object.verifierInfo !== null) {
      message.verifierInfo = VerifierInfo.fromJSON(object.verifierInfo);
    } else {
      message.verifierInfo = undefined;
    }
    if (object.issuers !== undefined && object.issuers !== null) {
      message.issuers = Struct.fromJSON(object.issuers);
    } else {
      message.issuers = undefined;
    }
    if (object.holderApp !== undefined && object.holderApp !== null) {
      message.holderApp = HolderAppInfo.fromJSON(object.holderApp);
    } else {
      message.holderApp = undefined;
    }
    if (object.deeplink !== undefined && object.deeplink !== null) {
      message.deeplink = String(object.deeplink);
    } else {
      message.deeplink = "";
    }
    if (object.qrCode !== undefined && object.qrCode !== null) {
      message.qrCode = String(object.qrCode);
    } else {
      message.qrCode = "";
    }
    return message;
  },

  toJSON(message: PresentationRequestEnriched): unknown {
    const obj: any = {};
    message.presentationRequest !== undefined &&
      (obj.presentationRequest = message.presentationRequest
        ? PresentationRequest.toJSON(message.presentationRequest)
        : undefined);
    message.verifierInfo !== undefined &&
      (obj.verifierInfo = message.verifierInfo
        ? VerifierInfo.toJSON(message.verifierInfo)
        : undefined);
    message.issuers !== undefined &&
      (obj.issuers = message.issuers
        ? Struct.toJSON(message.issuers)
        : undefined);
    message.holderApp !== undefined &&
      (obj.holderApp = message.holderApp
        ? HolderAppInfo.toJSON(message.holderApp)
        : undefined);
    message.deeplink !== undefined && (obj.deeplink = message.deeplink);
    message.qrCode !== undefined && (obj.qrCode = message.qrCode);
    return obj;
  },

  fromPartial(
    object: DeepPartial<PresentationRequestEnriched>
  ): PresentationRequestEnriched {
    const message = {
      ...basePresentationRequestEnriched,
    } as PresentationRequestEnriched;
    if (
      object.presentationRequest !== undefined &&
      object.presentationRequest !== null
    ) {
      message.presentationRequest = PresentationRequest.fromPartial(
        object.presentationRequest
      );
    } else {
      message.presentationRequest = undefined;
    }
    if (object.verifierInfo !== undefined && object.verifierInfo !== null) {
      message.verifierInfo = VerifierInfo.fromPartial(object.verifierInfo);
    } else {
      message.verifierInfo = undefined;
    }
    if (object.issuers !== undefined && object.issuers !== null) {
      message.issuers = Struct.fromPartial(object.issuers);
    } else {
      message.issuers = undefined;
    }
    if (object.holderApp !== undefined && object.holderApp !== null) {
      message.holderApp = HolderAppInfo.fromPartial(object.holderApp);
    } else {
      message.holderApp = undefined;
    }
    if (object.deeplink !== undefined && object.deeplink !== null) {
      message.deeplink = object.deeplink;
    } else {
      message.deeplink = "";
    }
    if (object.qrCode !== undefined && object.qrCode !== null) {
      message.qrCode = object.qrCode;
    } else {
      message.qrCode = "";
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
