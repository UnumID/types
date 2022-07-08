/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "./google/protobuf/timestamp";
import { PublicKeyInfo } from "./crypto";
import { Proof } from "./proof";

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

/**
 * Object to encapsulate a signed DidDocument.
 * Note: it breaks the name convention of the singed type counterpart being the simpler name of the two, however because the unsigned DidDocument definition was claimed first, this is an exception to the rule.
 */
export interface SignedDidDocument {
  context: string;
  id: string;
  created: Date | undefined;
  updated: Date | undefined;
  publicKey: PublicKeyInfo[];
  service: DidDocumentService[];
  proof: Proof | undefined;
}

/**
 * Object to encapsulate an unsigned Decentralized ID.
 * Currently only used in subjectCredentialRequest flow for the userDIDAssociation flow (proving ownership of a DID).
 */
export interface UnsignedDID {
  id: string;
}

/**
 * Object to encapsulate a signed Decentralized ID.
 * Currently only used in subjectCredentialRequest flow for the userDIDAssociation flow (proving ownership of a DID).
 */
export interface DID {
  id: string;
  proof: Proof | undefined;
}

/** Interface to encapsulate the parameters needed for associating a subject Did to an application User. */
export interface UserDidAssociation {
  /** the userCode should be a short lived, one time use user alias. */
  userCode: string;
  /** the subject did to be associated to the user. */
  did: DID | undefined;
  issuerDid: string;
}

/** An options object used to create a Holder entity */
export interface HolderOptions {
  browserName?: string | undefined;
  deviceOs?: string | undefined;
  deviceModel?: string | undefined;
  /** HolderType in ts types */
  type?: string | undefined;
}

/**
 * An options object used to update a DidDocument by adding or updating a public key
 * If the DidDocument does not include a key with the same id, a new key will be added.
 * If it does, that key will be updated
 */
export interface PublicKeyInfoUpdateOptions {
  id: string;
  /** optional, but required to add a new key */
  publicKey?: string | undefined;
  /** optional, required to add a new key */
  encoding?: string | undefined;
  /** optional, required to add a new key */
  type?: string | undefined;
  /** optional required to add a new key or update key status of an existing key. Can invaliate an existing by setting to value 'invalid' */
  status?: string | undefined;
}

/**
 * An options object used to update a Did Document by adding or updating one or more public keys
 * It must contain the subject's updateKey and a signature by either one of the subject's existing
 * signing keys or another key to which the correct authority has been delegated
 */
export interface DidDocumentPatchOptions {
  /** identifies the DidDocument to update */
  did: string;
  /** the subject's updateKey */
  updateKey: string;
  /** keys to update/add */
  publicKeyInfo: PublicKeyInfoUpdateOptions[];
  /** proof containing a signature over the updateKey by an authorized private key */
  proof: Proof | undefined;
  /** optional: metadata options for creating a new Holder, if keys are being added */
  holderOptions: HolderOptions | undefined;
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

const baseSignedDidDocument: object = { context: "", id: "" };

export const SignedDidDocument = {
  encode(
    message: SignedDidDocument,
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
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignedDidDocument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSignedDidDocument } as SignedDidDocument;
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
        case 7:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignedDidDocument {
    const message = { ...baseSignedDidDocument } as SignedDidDocument;
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
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromJSON(object.proof);
    } else {
      message.proof = undefined;
    }
    return message;
  },

  toJSON(message: SignedDidDocument): unknown {
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
    message.proof !== undefined &&
      (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SignedDidDocument>): SignedDidDocument {
    const message = { ...baseSignedDidDocument } as SignedDidDocument;
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
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromPartial(object.proof);
    } else {
      message.proof = undefined;
    }
    return message;
  },
};

const baseUnsignedDID: object = { id: "" };

export const UnsignedDID = {
  encode(
    message: UnsignedDID,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnsignedDID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUnsignedDID } as UnsignedDID;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnsignedDID {
    const message = { ...baseUnsignedDID } as UnsignedDID;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: UnsignedDID): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<UnsignedDID>): UnsignedDID {
    const message = { ...baseUnsignedDID } as UnsignedDID;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseDID: object = { id: "" };

export const DID = {
  encode(message: DID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDID } as DID;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DID {
    const message = { ...baseDID } as DID;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromJSON(object.proof);
    } else {
      message.proof = undefined;
    }
    return message;
  },

  toJSON(message: DID): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.proof !== undefined &&
      (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DID>): DID {
    const message = { ...baseDID } as DID;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromPartial(object.proof);
    } else {
      message.proof = undefined;
    }
    return message;
  },
};

const baseUserDidAssociation: object = { userCode: "", issuerDid: "" };

export const UserDidAssociation = {
  encode(
    message: UserDidAssociation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userCode !== "") {
      writer.uint32(10).string(message.userCode);
    }
    if (message.did !== undefined) {
      DID.encode(message.did, writer.uint32(18).fork()).ldelim();
    }
    if (message.issuerDid !== "") {
      writer.uint32(26).string(message.issuerDid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserDidAssociation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserDidAssociation } as UserDidAssociation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userCode = reader.string();
          break;
        case 2:
          message.did = DID.decode(reader, reader.uint32());
          break;
        case 3:
          message.issuerDid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserDidAssociation {
    const message = { ...baseUserDidAssociation } as UserDidAssociation;
    if (object.userCode !== undefined && object.userCode !== null) {
      message.userCode = String(object.userCode);
    } else {
      message.userCode = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = DID.fromJSON(object.did);
    } else {
      message.did = undefined;
    }
    if (object.issuerDid !== undefined && object.issuerDid !== null) {
      message.issuerDid = String(object.issuerDid);
    } else {
      message.issuerDid = "";
    }
    return message;
  },

  toJSON(message: UserDidAssociation): unknown {
    const obj: any = {};
    message.userCode !== undefined && (obj.userCode = message.userCode);
    message.did !== undefined &&
      (obj.did = message.did ? DID.toJSON(message.did) : undefined);
    message.issuerDid !== undefined && (obj.issuerDid = message.issuerDid);
    return obj;
  },

  fromPartial(object: DeepPartial<UserDidAssociation>): UserDidAssociation {
    const message = { ...baseUserDidAssociation } as UserDidAssociation;
    if (object.userCode !== undefined && object.userCode !== null) {
      message.userCode = object.userCode;
    } else {
      message.userCode = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = DID.fromPartial(object.did);
    } else {
      message.did = undefined;
    }
    if (object.issuerDid !== undefined && object.issuerDid !== null) {
      message.issuerDid = object.issuerDid;
    } else {
      message.issuerDid = "";
    }
    return message;
  },
};

const baseHolderOptions: object = {};

export const HolderOptions = {
  encode(
    message: HolderOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.browserName !== undefined) {
      writer.uint32(10).string(message.browserName);
    }
    if (message.deviceOs !== undefined) {
      writer.uint32(18).string(message.deviceOs);
    }
    if (message.deviceModel !== undefined) {
      writer.uint32(26).string(message.deviceModel);
    }
    if (message.type !== undefined) {
      writer.uint32(34).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HolderOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHolderOptions } as HolderOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserName = reader.string();
          break;
        case 2:
          message.deviceOs = reader.string();
          break;
        case 3:
          message.deviceModel = reader.string();
          break;
        case 4:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HolderOptions {
    const message = { ...baseHolderOptions } as HolderOptions;
    if (object.browserName !== undefined && object.browserName !== null) {
      message.browserName = String(object.browserName);
    } else {
      message.browserName = undefined;
    }
    if (object.deviceOs !== undefined && object.deviceOs !== null) {
      message.deviceOs = String(object.deviceOs);
    } else {
      message.deviceOs = undefined;
    }
    if (object.deviceModel !== undefined && object.deviceModel !== null) {
      message.deviceModel = String(object.deviceModel);
    } else {
      message.deviceModel = undefined;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = undefined;
    }
    return message;
  },

  toJSON(message: HolderOptions): unknown {
    const obj: any = {};
    message.browserName !== undefined &&
      (obj.browserName = message.browserName);
    message.deviceOs !== undefined && (obj.deviceOs = message.deviceOs);
    message.deviceModel !== undefined &&
      (obj.deviceModel = message.deviceModel);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: DeepPartial<HolderOptions>): HolderOptions {
    const message = { ...baseHolderOptions } as HolderOptions;
    if (object.browserName !== undefined && object.browserName !== null) {
      message.browserName = object.browserName;
    } else {
      message.browserName = undefined;
    }
    if (object.deviceOs !== undefined && object.deviceOs !== null) {
      message.deviceOs = object.deviceOs;
    } else {
      message.deviceOs = undefined;
    }
    if (object.deviceModel !== undefined && object.deviceModel !== null) {
      message.deviceModel = object.deviceModel;
    } else {
      message.deviceModel = undefined;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = undefined;
    }
    return message;
  },
};

const basePublicKeyInfoUpdateOptions: object = { id: "" };

export const PublicKeyInfoUpdateOptions = {
  encode(
    message: PublicKeyInfoUpdateOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.publicKey !== undefined) {
      writer.uint32(18).string(message.publicKey);
    }
    if (message.encoding !== undefined) {
      writer.uint32(26).string(message.encoding);
    }
    if (message.type !== undefined) {
      writer.uint32(34).string(message.type);
    }
    if (message.status !== undefined) {
      writer.uint32(42).string(message.status);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PublicKeyInfoUpdateOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePublicKeyInfoUpdateOptions,
    } as PublicKeyInfoUpdateOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.publicKey = reader.string();
          break;
        case 3:
          message.encoding = reader.string();
          break;
        case 4:
          message.type = reader.string();
          break;
        case 5:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PublicKeyInfoUpdateOptions {
    const message = {
      ...basePublicKeyInfoUpdateOptions,
    } as PublicKeyInfoUpdateOptions;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = String(object.publicKey);
    } else {
      message.publicKey = undefined;
    }
    if (object.encoding !== undefined && object.encoding !== null) {
      message.encoding = String(object.encoding);
    } else {
      message.encoding = undefined;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  toJSON(message: PublicKeyInfoUpdateOptions): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.publicKey !== undefined && (obj.publicKey = message.publicKey);
    message.encoding !== undefined && (obj.encoding = message.encoding);
    message.type !== undefined && (obj.type = message.type);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(
    object: DeepPartial<PublicKeyInfoUpdateOptions>
  ): PublicKeyInfoUpdateOptions {
    const message = {
      ...basePublicKeyInfoUpdateOptions,
    } as PublicKeyInfoUpdateOptions;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = object.publicKey;
    } else {
      message.publicKey = undefined;
    }
    if (object.encoding !== undefined && object.encoding !== null) {
      message.encoding = object.encoding;
    } else {
      message.encoding = undefined;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = undefined;
    }
    return message;
  },
};

const baseDidDocumentPatchOptions: object = { did: "", updateKey: "" };

export const DidDocumentPatchOptions = {
  encode(
    message: DidDocumentPatchOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    if (message.updateKey !== "") {
      writer.uint32(18).string(message.updateKey);
    }
    for (const v of message.publicKeyInfo) {
      PublicKeyInfoUpdateOptions.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(34).fork()).ldelim();
    }
    if (message.holderOptions !== undefined) {
      HolderOptions.encode(
        message.holderOptions,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DidDocumentPatchOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDidDocumentPatchOptions,
    } as DidDocumentPatchOptions;
    message.publicKeyInfo = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;
        case 2:
          message.updateKey = reader.string();
          break;
        case 3:
          message.publicKeyInfo.push(
            PublicKeyInfoUpdateOptions.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        case 5:
          message.holderOptions = HolderOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DidDocumentPatchOptions {
    const message = {
      ...baseDidDocumentPatchOptions,
    } as DidDocumentPatchOptions;
    message.publicKeyInfo = [];
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    if (object.updateKey !== undefined && object.updateKey !== null) {
      message.updateKey = String(object.updateKey);
    } else {
      message.updateKey = "";
    }
    if (object.publicKeyInfo !== undefined && object.publicKeyInfo !== null) {
      for (const e of object.publicKeyInfo) {
        message.publicKeyInfo.push(PublicKeyInfoUpdateOptions.fromJSON(e));
      }
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromJSON(object.proof);
    } else {
      message.proof = undefined;
    }
    if (object.holderOptions !== undefined && object.holderOptions !== null) {
      message.holderOptions = HolderOptions.fromJSON(object.holderOptions);
    } else {
      message.holderOptions = undefined;
    }
    return message;
  },

  toJSON(message: DidDocumentPatchOptions): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    message.updateKey !== undefined && (obj.updateKey = message.updateKey);
    if (message.publicKeyInfo) {
      obj.publicKeyInfo = message.publicKeyInfo.map((e) =>
        e ? PublicKeyInfoUpdateOptions.toJSON(e) : undefined
      );
    } else {
      obj.publicKeyInfo = [];
    }
    message.proof !== undefined &&
      (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    message.holderOptions !== undefined &&
      (obj.holderOptions = message.holderOptions
        ? HolderOptions.toJSON(message.holderOptions)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DidDocumentPatchOptions>
  ): DidDocumentPatchOptions {
    const message = {
      ...baseDidDocumentPatchOptions,
    } as DidDocumentPatchOptions;
    message.publicKeyInfo = [];
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    if (object.updateKey !== undefined && object.updateKey !== null) {
      message.updateKey = object.updateKey;
    } else {
      message.updateKey = "";
    }
    if (object.publicKeyInfo !== undefined && object.publicKeyInfo !== null) {
      for (const e of object.publicKeyInfo) {
        message.publicKeyInfo.push(PublicKeyInfoUpdateOptions.fromPartial(e));
      }
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromPartial(object.proof);
    } else {
      message.proof = undefined;
    }
    if (object.holderOptions !== undefined && object.holderOptions !== null) {
      message.holderOptions = HolderOptions.fromPartial(object.holderOptions);
    } else {
      message.holderOptions = undefined;
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
