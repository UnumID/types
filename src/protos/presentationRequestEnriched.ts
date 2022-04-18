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
  verifier: VerifierInfo | undefined;
  /** a map of issuer metadata keyed on the issuer's did */
  issuers: Struct | undefined;
  holderApp: HolderAppInfo | undefined;
  deeplink: string;
  qrCode: string;
  displayMessage: string;
}

/** Note: this type does not follow conventions because ought to be removed come v4. No need for such a type thanks to service query params. */
export interface PresentationRequestRepoDto {
  presentationRequests: { [key: string]: PresentationRequestEnriched };
}

export interface PresentationRequestRepoDto_PresentationRequestsEntry {
  key: string;
  value: PresentationRequestEnriched | undefined;
}

const basePresentationRequestEnriched: object = {
  deeplink: "",
  qrCode: "",
  displayMessage: "",
};

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
    if (message.verifier !== undefined) {
      VerifierInfo.encode(message.verifier, writer.uint32(18).fork()).ldelim();
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
    if (message.displayMessage !== "") {
      writer.uint32(58).string(message.displayMessage);
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
          message.verifier = VerifierInfo.decode(reader, reader.uint32());
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
        case 7:
          message.displayMessage = reader.string();
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
    if (object.verifier !== undefined && object.verifier !== null) {
      message.verifier = VerifierInfo.fromJSON(object.verifier);
    } else {
      message.verifier = undefined;
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
    if (object.displayMessage !== undefined && object.displayMessage !== null) {
      message.displayMessage = String(object.displayMessage);
    } else {
      message.displayMessage = "";
    }
    return message;
  },

  toJSON(message: PresentationRequestEnriched): unknown {
    const obj: any = {};
    message.presentationRequest !== undefined &&
      (obj.presentationRequest = message.presentationRequest
        ? PresentationRequest.toJSON(message.presentationRequest)
        : undefined);
    message.verifier !== undefined &&
      (obj.verifier = message.verifier
        ? VerifierInfo.toJSON(message.verifier)
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
    message.displayMessage !== undefined &&
      (obj.displayMessage = message.displayMessage);
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
    if (object.verifier !== undefined && object.verifier !== null) {
      message.verifier = VerifierInfo.fromPartial(object.verifier);
    } else {
      message.verifier = undefined;
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
    if (object.displayMessage !== undefined && object.displayMessage !== null) {
      message.displayMessage = object.displayMessage;
    } else {
      message.displayMessage = "";
    }
    return message;
  },
};

const basePresentationRequestRepoDto: object = {};

export const PresentationRequestRepoDto = {
  encode(
    message: PresentationRequestRepoDto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.presentationRequests).forEach(([key, value]) => {
      PresentationRequestRepoDto_PresentationRequestsEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PresentationRequestRepoDto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePresentationRequestRepoDto,
    } as PresentationRequestRepoDto;
    message.presentationRequests = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 =
            PresentationRequestRepoDto_PresentationRequestsEntry.decode(
              reader,
              reader.uint32()
            );
          if (entry1.value !== undefined) {
            message.presentationRequests[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PresentationRequestRepoDto {
    const message = {
      ...basePresentationRequestRepoDto,
    } as PresentationRequestRepoDto;
    message.presentationRequests = {};
    if (
      object.presentationRequests !== undefined &&
      object.presentationRequests !== null
    ) {
      Object.entries(object.presentationRequests).forEach(([key, value]) => {
        message.presentationRequests[key] =
          PresentationRequestEnriched.fromJSON(value);
      });
    }
    return message;
  },

  toJSON(message: PresentationRequestRepoDto): unknown {
    const obj: any = {};
    obj.presentationRequests = {};
    if (message.presentationRequests) {
      Object.entries(message.presentationRequests).forEach(([k, v]) => {
        obj.presentationRequests[k] = PresentationRequestEnriched.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<PresentationRequestRepoDto>
  ): PresentationRequestRepoDto {
    const message = {
      ...basePresentationRequestRepoDto,
    } as PresentationRequestRepoDto;
    message.presentationRequests = {};
    if (
      object.presentationRequests !== undefined &&
      object.presentationRequests !== null
    ) {
      Object.entries(object.presentationRequests).forEach(([key, value]) => {
        if (value !== undefined) {
          message.presentationRequests[key] =
            PresentationRequestEnriched.fromPartial(value);
        }
      });
    }
    return message;
  },
};

const basePresentationRequestRepoDto_PresentationRequestsEntry: object = {
  key: "",
};

export const PresentationRequestRepoDto_PresentationRequestsEntry = {
  encode(
    message: PresentationRequestRepoDto_PresentationRequestsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      PresentationRequestEnriched.encode(
        message.value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PresentationRequestRepoDto_PresentationRequestsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePresentationRequestRepoDto_PresentationRequestsEntry,
    } as PresentationRequestRepoDto_PresentationRequestsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = PresentationRequestEnriched.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PresentationRequestRepoDto_PresentationRequestsEntry {
    const message = {
      ...basePresentationRequestRepoDto_PresentationRequestsEntry,
    } as PresentationRequestRepoDto_PresentationRequestsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = PresentationRequestEnriched.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(
    message: PresentationRequestRepoDto_PresentationRequestsEntry
  ): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? PresentationRequestEnriched.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<PresentationRequestRepoDto_PresentationRequestsEntry>
  ): PresentationRequestRepoDto_PresentationRequestsEntry {
    const message = {
      ...basePresentationRequestRepoDto_PresentationRequestsEntry,
    } as PresentationRequestRepoDto_PresentationRequestsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = PresentationRequestEnriched.fromPartial(object.value);
    } else {
      message.value = undefined;
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
