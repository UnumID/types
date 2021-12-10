/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "./google/protobuf/timestamp";
import { Proof } from "./proof";
import { EncryptedData } from "./crypto";
import { DidDocument } from "./didDocument";

export const protobufPackage = "credential.v1";

/**
 * Object to encapsulate Credential status information per W3C VC documentation
 * ref: https://www.w3.org/TR/vc-data-model/#status
 */
export interface CredentialStatus {
  id: string;
  type: string;
}

/** Object to encapsulate relevant credential information. */
export interface UnsignedCredential {
  context: string[];
  credentialSubject: string;
  credentialStatus: CredentialStatus | undefined;
  issuer: string;
  type: string[];
  id: string;
  issuanceDate: Date | undefined;
  /** optional in the ts types */
  expirationDate: Date | undefined;
}

/**
 * Object which incorporates the relevant credential information in addition to a cryptographic proof so that the Credential is verifiable.
 * aka "SignedCredential". Tightly coupled with UnsignedCredential.
 */
export interface Credential {
  context: string[];
  credentialSubject: string;
  credentialStatus: CredentialStatus | undefined;
  issuer: string;
  type: string[];
  id: string;
  issuanceDate: Date | undefined;
  proof: Proof | undefined;
  /** optional in the ts types */
  expirationDate: Date | undefined;
}

/**
 * Object that encapsulates Credential information requested.
 * Note this is used moslty used within Presentations and PresentationRequests. However it can also be used as an UnsignedCredentialRequest when dealing with a signed SubjectCredentialRequest.
 */
export interface CredentialRequest {
  /** the string matching the desire credential type */
  type: string;
  /** list of acceptable issuer DIDs that have issued the credential */
  issuers: string[];
  /** to denote wether this particular credential is required in response to the PresentationRequest. Defaults behavior resolves this to true. */
  required: boolean;
}

/**
 * Object that encapsulates a Subject's request for a Credential.
 * Note: this is different than the original CredentialRequest which lives in a Presentation(Request) object.
 * Also, it breaks the name convention of the singed type counterpart being the simpler name of the two, however because the unsigned CredentialRequest definition was claimed first, this is an exception to the rule.
 */
export interface SubjectCredentialRequest {
  /** the string matching the desire credential type */
  type: string;
  /** list of acceptable issuer DIDs that have issued the credential */
  issuers: string[];
  /** to denote wether this particular credential is required. Defaults behavior resolves this to true. */
  required: boolean;
  /** proof signed by the subject */
  proof: Proof | undefined;
}

/** Type to encapsulate Credential type information of credentials issued, generally in response to Subject CredentialRequest. */
export interface CredentialsIssuedResponse {
  credentialTypesIssued: string[];
}

/**
 * Type to encapsulate Subject Credential Requests DTO which as a top level issuerDid which should be part of the request's issuers attribute.
 * This top level issuerDid attribute to facilitate the saas grabbed the issuer entity for relaying to the issuer's /credentialRequests endpoint.
 */
export interface SubjectCredentialRequestsDto {
  credentialRequests: SubjectCredentialRequest[];
  issuerDid: string;
  subjectDid: string;
}

/** Object that encapsulates an EncryptedCredentialOptions for persisting an EncryptedCredential. */
export interface EncryptedCredentialOptions {
  credentialId: string;
  subject: string;
  issuer: string;
  type: string;
  data: EncryptedData | undefined;
}

/**
 * Object that encapsulates a request to Unum ID SaaS to issue credentials.
 * Note: that the while can handle multiple EncryptedCredentials that is for the edge case of
 * the same credential (id, type, subject, issuer) being encrypted with different holder public keys
 */
export interface IssueCredentialOptions {
  credentialId: string;
  subject: string;
  issuer: string;
  type: string;
  encryptedCredentials: EncryptedCredentialOptions[];
}

/** Object that encapsulates a request to Unum ID SaaS to issue multiple credentials of various types. */
export interface IssueCredentialsOptions {
  credentialRequests: IssueCredentialOptions[];
}

/** Object that encapsulates a Credential's status information. */
export interface CredentialStatusInfo {
  uuid: string;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  credentialId: string;
  /** note could be an enum but just simplier this way... only valid values are: revoked, valid */
  status: string;
}

/**
 * Object that encapsulates an EncryptedCredentialResponse.
 * Note: this is the SaaS' response of EncryptedCredential from the SaaS DB.
 */
export interface EncryptedCredential {
  uuid: string;
  credentialId: string;
  subject: string;
  issuer: string;
  type: string;
  data: EncryptedData | undefined;
  version: string;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}

/** Object that encapsulates an EncryptedCredential and a DidDocument corresponding the credential's issuer. */
export interface EncryptedCredentialEnriched {
  encryptedCredential: EncryptedCredential | undefined;
  didDocument: DidDocument | undefined;
}

/** Object to encapsulate an subjectDid signed by an issuer wishing to revoke all credentials it has issued the DID. */
export interface RevokeAllCredentials {
  /** for now can only be a subject DID, however concievably could be an other entity DID */
  did: string;
  proof: Proof | undefined;
}

const baseCredentialStatus: object = { id: "", type: "" };

export const CredentialStatus = {
  encode(
    message: CredentialStatus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CredentialStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCredentialStatus } as CredentialStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CredentialStatus {
    const message = { ...baseCredentialStatus } as CredentialStatus;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    return message;
  },

  toJSON(message: CredentialStatus): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: DeepPartial<CredentialStatus>): CredentialStatus {
    const message = { ...baseCredentialStatus } as CredentialStatus;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    return message;
  },
};

const baseUnsignedCredential: object = {
  context: "",
  credentialSubject: "",
  issuer: "",
  type: "",
  id: "",
};

export const UnsignedCredential = {
  encode(
    message: UnsignedCredential,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.context) {
      writer.uint32(10).string(v!);
    }
    if (message.credentialSubject !== "") {
      writer.uint32(18).string(message.credentialSubject);
    }
    if (message.credentialStatus !== undefined) {
      CredentialStatus.encode(
        message.credentialStatus,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.issuer !== "") {
      writer.uint32(34).string(message.issuer);
    }
    for (const v of message.type) {
      writer.uint32(42).string(v!);
    }
    if (message.id !== "") {
      writer.uint32(50).string(message.id);
    }
    if (message.issuanceDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.issuanceDate),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.expirationDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expirationDate),
        writer.uint32(130).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnsignedCredential {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUnsignedCredential } as UnsignedCredential;
    message.context = [];
    message.type = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.context.push(reader.string());
          break;
        case 2:
          message.credentialSubject = reader.string();
          break;
        case 3:
          message.credentialStatus = CredentialStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.issuer = reader.string();
          break;
        case 5:
          message.type.push(reader.string());
          break;
        case 6:
          message.id = reader.string();
          break;
        case 7:
          message.issuanceDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 16:
          message.expirationDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnsignedCredential {
    const message = { ...baseUnsignedCredential } as UnsignedCredential;
    message.context = [];
    message.type = [];
    if (object.context !== undefined && object.context !== null) {
      for (const e of object.context) {
        message.context.push(String(e));
      }
    }
    if (
      object.credentialSubject !== undefined &&
      object.credentialSubject !== null
    ) {
      message.credentialSubject = String(object.credentialSubject);
    } else {
      message.credentialSubject = "";
    }
    if (
      object.credentialStatus !== undefined &&
      object.credentialStatus !== null
    ) {
      message.credentialStatus = CredentialStatus.fromJSON(
        object.credentialStatus
      );
    } else {
      message.credentialStatus = undefined;
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
    if (object.type !== undefined && object.type !== null) {
      for (const e of object.type) {
        message.type.push(String(e));
      }
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.issuanceDate !== undefined && object.issuanceDate !== null) {
      message.issuanceDate = fromJsonTimestamp(object.issuanceDate);
    } else {
      message.issuanceDate = undefined;
    }
    if (object.expirationDate !== undefined && object.expirationDate !== null) {
      message.expirationDate = fromJsonTimestamp(object.expirationDate);
    } else {
      message.expirationDate = undefined;
    }
    return message;
  },

  toJSON(message: UnsignedCredential): unknown {
    const obj: any = {};
    if (message.context) {
      obj.context = message.context.map((e) => e);
    } else {
      obj.context = [];
    }
    message.credentialSubject !== undefined &&
      (obj.credentialSubject = message.credentialSubject);
    message.credentialStatus !== undefined &&
      (obj.credentialStatus = message.credentialStatus
        ? CredentialStatus.toJSON(message.credentialStatus)
        : undefined);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    if (message.type) {
      obj.type = message.type.map((e) => e);
    } else {
      obj.type = [];
    }
    message.id !== undefined && (obj.id = message.id);
    message.issuanceDate !== undefined &&
      (obj.issuanceDate = message.issuanceDate.toISOString());
    message.expirationDate !== undefined &&
      (obj.expirationDate = message.expirationDate.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<UnsignedCredential>): UnsignedCredential {
    const message = { ...baseUnsignedCredential } as UnsignedCredential;
    message.context = [];
    message.type = [];
    if (object.context !== undefined && object.context !== null) {
      for (const e of object.context) {
        message.context.push(e);
      }
    }
    if (
      object.credentialSubject !== undefined &&
      object.credentialSubject !== null
    ) {
      message.credentialSubject = object.credentialSubject;
    } else {
      message.credentialSubject = "";
    }
    if (
      object.credentialStatus !== undefined &&
      object.credentialStatus !== null
    ) {
      message.credentialStatus = CredentialStatus.fromPartial(
        object.credentialStatus
      );
    } else {
      message.credentialStatus = undefined;
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    if (object.type !== undefined && object.type !== null) {
      for (const e of object.type) {
        message.type.push(e);
      }
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.issuanceDate !== undefined && object.issuanceDate !== null) {
      message.issuanceDate = object.issuanceDate;
    } else {
      message.issuanceDate = undefined;
    }
    if (object.expirationDate !== undefined && object.expirationDate !== null) {
      message.expirationDate = object.expirationDate;
    } else {
      message.expirationDate = undefined;
    }
    return message;
  },
};

const baseCredential: object = {
  context: "",
  credentialSubject: "",
  issuer: "",
  type: "",
  id: "",
};

export const Credential = {
  encode(
    message: Credential,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.context) {
      writer.uint32(10).string(v!);
    }
    if (message.credentialSubject !== "") {
      writer.uint32(18).string(message.credentialSubject);
    }
    if (message.credentialStatus !== undefined) {
      CredentialStatus.encode(
        message.credentialStatus,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.issuer !== "") {
      writer.uint32(34).string(message.issuer);
    }
    for (const v of message.type) {
      writer.uint32(42).string(v!);
    }
    if (message.id !== "") {
      writer.uint32(50).string(message.id);
    }
    if (message.issuanceDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.issuanceDate),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(66).fork()).ldelim();
    }
    if (message.expirationDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expirationDate),
        writer.uint32(130).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Credential {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCredential } as Credential;
    message.context = [];
    message.type = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.context.push(reader.string());
          break;
        case 2:
          message.credentialSubject = reader.string();
          break;
        case 3:
          message.credentialStatus = CredentialStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.issuer = reader.string();
          break;
        case 5:
          message.type.push(reader.string());
          break;
        case 6:
          message.id = reader.string();
          break;
        case 7:
          message.issuanceDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        case 16:
          message.expirationDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Credential {
    const message = { ...baseCredential } as Credential;
    message.context = [];
    message.type = [];
    if (object.context !== undefined && object.context !== null) {
      for (const e of object.context) {
        message.context.push(String(e));
      }
    }
    if (
      object.credentialSubject !== undefined &&
      object.credentialSubject !== null
    ) {
      message.credentialSubject = String(object.credentialSubject);
    } else {
      message.credentialSubject = "";
    }
    if (
      object.credentialStatus !== undefined &&
      object.credentialStatus !== null
    ) {
      message.credentialStatus = CredentialStatus.fromJSON(
        object.credentialStatus
      );
    } else {
      message.credentialStatus = undefined;
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
    if (object.type !== undefined && object.type !== null) {
      for (const e of object.type) {
        message.type.push(String(e));
      }
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.issuanceDate !== undefined && object.issuanceDate !== null) {
      message.issuanceDate = fromJsonTimestamp(object.issuanceDate);
    } else {
      message.issuanceDate = undefined;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromJSON(object.proof);
    } else {
      message.proof = undefined;
    }
    if (object.expirationDate !== undefined && object.expirationDate !== null) {
      message.expirationDate = fromJsonTimestamp(object.expirationDate);
    } else {
      message.expirationDate = undefined;
    }
    return message;
  },

  toJSON(message: Credential): unknown {
    const obj: any = {};
    if (message.context) {
      obj.context = message.context.map((e) => e);
    } else {
      obj.context = [];
    }
    message.credentialSubject !== undefined &&
      (obj.credentialSubject = message.credentialSubject);
    message.credentialStatus !== undefined &&
      (obj.credentialStatus = message.credentialStatus
        ? CredentialStatus.toJSON(message.credentialStatus)
        : undefined);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    if (message.type) {
      obj.type = message.type.map((e) => e);
    } else {
      obj.type = [];
    }
    message.id !== undefined && (obj.id = message.id);
    message.issuanceDate !== undefined &&
      (obj.issuanceDate = message.issuanceDate.toISOString());
    message.proof !== undefined &&
      (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    message.expirationDate !== undefined &&
      (obj.expirationDate = message.expirationDate.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<Credential>): Credential {
    const message = { ...baseCredential } as Credential;
    message.context = [];
    message.type = [];
    if (object.context !== undefined && object.context !== null) {
      for (const e of object.context) {
        message.context.push(e);
      }
    }
    if (
      object.credentialSubject !== undefined &&
      object.credentialSubject !== null
    ) {
      message.credentialSubject = object.credentialSubject;
    } else {
      message.credentialSubject = "";
    }
    if (
      object.credentialStatus !== undefined &&
      object.credentialStatus !== null
    ) {
      message.credentialStatus = CredentialStatus.fromPartial(
        object.credentialStatus
      );
    } else {
      message.credentialStatus = undefined;
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    if (object.type !== undefined && object.type !== null) {
      for (const e of object.type) {
        message.type.push(e);
      }
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.issuanceDate !== undefined && object.issuanceDate !== null) {
      message.issuanceDate = object.issuanceDate;
    } else {
      message.issuanceDate = undefined;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromPartial(object.proof);
    } else {
      message.proof = undefined;
    }
    if (object.expirationDate !== undefined && object.expirationDate !== null) {
      message.expirationDate = object.expirationDate;
    } else {
      message.expirationDate = undefined;
    }
    return message;
  },
};

const baseCredentialRequest: object = {
  type: "",
  issuers: "",
  required: false,
};

export const CredentialRequest = {
  encode(
    message: CredentialRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.issuers) {
      writer.uint32(18).string(v!);
    }
    if (message.required === true) {
      writer.uint32(24).bool(message.required);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CredentialRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCredentialRequest } as CredentialRequest;
    message.issuers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.issuers.push(reader.string());
          break;
        case 3:
          message.required = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CredentialRequest {
    const message = { ...baseCredentialRequest } as CredentialRequest;
    message.issuers = [];
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.issuers !== undefined && object.issuers !== null) {
      for (const e of object.issuers) {
        message.issuers.push(String(e));
      }
    }
    if (object.required !== undefined && object.required !== null) {
      message.required = Boolean(object.required);
    } else {
      message.required = false;
    }
    return message;
  },

  toJSON(message: CredentialRequest): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    if (message.issuers) {
      obj.issuers = message.issuers.map((e) => e);
    } else {
      obj.issuers = [];
    }
    message.required !== undefined && (obj.required = message.required);
    return obj;
  },

  fromPartial(object: DeepPartial<CredentialRequest>): CredentialRequest {
    const message = { ...baseCredentialRequest } as CredentialRequest;
    message.issuers = [];
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.issuers !== undefined && object.issuers !== null) {
      for (const e of object.issuers) {
        message.issuers.push(e);
      }
    }
    if (object.required !== undefined && object.required !== null) {
      message.required = object.required;
    } else {
      message.required = false;
    }
    return message;
  },
};

const baseSubjectCredentialRequest: object = {
  type: "",
  issuers: "",
  required: false,
};

export const SubjectCredentialRequest = {
  encode(
    message: SubjectCredentialRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.issuers) {
      writer.uint32(18).string(v!);
    }
    if (message.required === true) {
      writer.uint32(24).bool(message.required);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SubjectCredentialRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSubjectCredentialRequest,
    } as SubjectCredentialRequest;
    message.issuers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.issuers.push(reader.string());
          break;
        case 3:
          message.required = reader.bool();
          break;
        case 4:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubjectCredentialRequest {
    const message = {
      ...baseSubjectCredentialRequest,
    } as SubjectCredentialRequest;
    message.issuers = [];
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.issuers !== undefined && object.issuers !== null) {
      for (const e of object.issuers) {
        message.issuers.push(String(e));
      }
    }
    if (object.required !== undefined && object.required !== null) {
      message.required = Boolean(object.required);
    } else {
      message.required = false;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromJSON(object.proof);
    } else {
      message.proof = undefined;
    }
    return message;
  },

  toJSON(message: SubjectCredentialRequest): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    if (message.issuers) {
      obj.issuers = message.issuers.map((e) => e);
    } else {
      obj.issuers = [];
    }
    message.required !== undefined && (obj.required = message.required);
    message.proof !== undefined &&
      (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SubjectCredentialRequest>
  ): SubjectCredentialRequest {
    const message = {
      ...baseSubjectCredentialRequest,
    } as SubjectCredentialRequest;
    message.issuers = [];
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.issuers !== undefined && object.issuers !== null) {
      for (const e of object.issuers) {
        message.issuers.push(e);
      }
    }
    if (object.required !== undefined && object.required !== null) {
      message.required = object.required;
    } else {
      message.required = false;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromPartial(object.proof);
    } else {
      message.proof = undefined;
    }
    return message;
  },
};

const baseCredentialsIssuedResponse: object = { credentialTypesIssued: "" };

export const CredentialsIssuedResponse = {
  encode(
    message: CredentialsIssuedResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.credentialTypesIssued) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CredentialsIssuedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCredentialsIssuedResponse,
    } as CredentialsIssuedResponse;
    message.credentialTypesIssued = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.credentialTypesIssued.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CredentialsIssuedResponse {
    const message = {
      ...baseCredentialsIssuedResponse,
    } as CredentialsIssuedResponse;
    message.credentialTypesIssued = [];
    if (
      object.credentialTypesIssued !== undefined &&
      object.credentialTypesIssued !== null
    ) {
      for (const e of object.credentialTypesIssued) {
        message.credentialTypesIssued.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: CredentialsIssuedResponse): unknown {
    const obj: any = {};
    if (message.credentialTypesIssued) {
      obj.credentialTypesIssued = message.credentialTypesIssued.map((e) => e);
    } else {
      obj.credentialTypesIssued = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<CredentialsIssuedResponse>
  ): CredentialsIssuedResponse {
    const message = {
      ...baseCredentialsIssuedResponse,
    } as CredentialsIssuedResponse;
    message.credentialTypesIssued = [];
    if (
      object.credentialTypesIssued !== undefined &&
      object.credentialTypesIssued !== null
    ) {
      for (const e of object.credentialTypesIssued) {
        message.credentialTypesIssued.push(e);
      }
    }
    return message;
  },
};

const baseSubjectCredentialRequestsDto: object = {
  issuerDid: "",
  subjectDid: "",
};

export const SubjectCredentialRequestsDto = {
  encode(
    message: SubjectCredentialRequestsDto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.credentialRequests) {
      SubjectCredentialRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.issuerDid !== "") {
      writer.uint32(18).string(message.issuerDid);
    }
    if (message.subjectDid !== "") {
      writer.uint32(26).string(message.subjectDid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SubjectCredentialRequestsDto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSubjectCredentialRequestsDto,
    } as SubjectCredentialRequestsDto;
    message.credentialRequests = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.credentialRequests.push(
            SubjectCredentialRequest.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.issuerDid = reader.string();
          break;
        case 3:
          message.subjectDid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubjectCredentialRequestsDto {
    const message = {
      ...baseSubjectCredentialRequestsDto,
    } as SubjectCredentialRequestsDto;
    message.credentialRequests = [];
    if (
      object.credentialRequests !== undefined &&
      object.credentialRequests !== null
    ) {
      for (const e of object.credentialRequests) {
        message.credentialRequests.push(SubjectCredentialRequest.fromJSON(e));
      }
    }
    if (object.issuerDid !== undefined && object.issuerDid !== null) {
      message.issuerDid = String(object.issuerDid);
    } else {
      message.issuerDid = "";
    }
    if (object.subjectDid !== undefined && object.subjectDid !== null) {
      message.subjectDid = String(object.subjectDid);
    } else {
      message.subjectDid = "";
    }
    return message;
  },

  toJSON(message: SubjectCredentialRequestsDto): unknown {
    const obj: any = {};
    if (message.credentialRequests) {
      obj.credentialRequests = message.credentialRequests.map((e) =>
        e ? SubjectCredentialRequest.toJSON(e) : undefined
      );
    } else {
      obj.credentialRequests = [];
    }
    message.issuerDid !== undefined && (obj.issuerDid = message.issuerDid);
    message.subjectDid !== undefined && (obj.subjectDid = message.subjectDid);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SubjectCredentialRequestsDto>
  ): SubjectCredentialRequestsDto {
    const message = {
      ...baseSubjectCredentialRequestsDto,
    } as SubjectCredentialRequestsDto;
    message.credentialRequests = [];
    if (
      object.credentialRequests !== undefined &&
      object.credentialRequests !== null
    ) {
      for (const e of object.credentialRequests) {
        message.credentialRequests.push(
          SubjectCredentialRequest.fromPartial(e)
        );
      }
    }
    if (object.issuerDid !== undefined && object.issuerDid !== null) {
      message.issuerDid = object.issuerDid;
    } else {
      message.issuerDid = "";
    }
    if (object.subjectDid !== undefined && object.subjectDid !== null) {
      message.subjectDid = object.subjectDid;
    } else {
      message.subjectDid = "";
    }
    return message;
  },
};

const baseEncryptedCredentialOptions: object = {
  credentialId: "",
  subject: "",
  issuer: "",
  type: "",
};

export const EncryptedCredentialOptions = {
  encode(
    message: EncryptedCredentialOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.credentialId !== "") {
      writer.uint32(10).string(message.credentialId);
    }
    if (message.subject !== "") {
      writer.uint32(18).string(message.subject);
    }
    if (message.issuer !== "") {
      writer.uint32(26).string(message.issuer);
    }
    if (message.type !== "") {
      writer.uint32(34).string(message.type);
    }
    if (message.data !== undefined) {
      EncryptedData.encode(message.data, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EncryptedCredentialOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEncryptedCredentialOptions,
    } as EncryptedCredentialOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.credentialId = reader.string();
          break;
        case 2:
          message.subject = reader.string();
          break;
        case 3:
          message.issuer = reader.string();
          break;
        case 4:
          message.type = reader.string();
          break;
        case 5:
          message.data = EncryptedData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EncryptedCredentialOptions {
    const message = {
      ...baseEncryptedCredentialOptions,
    } as EncryptedCredentialOptions;
    if (object.credentialId !== undefined && object.credentialId !== null) {
      message.credentialId = String(object.credentialId);
    } else {
      message.credentialId = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = String(object.subject);
    } else {
      message.subject = "";
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = EncryptedData.fromJSON(object.data);
    } else {
      message.data = undefined;
    }
    return message;
  },

  toJSON(message: EncryptedCredentialOptions): unknown {
    const obj: any = {};
    message.credentialId !== undefined &&
      (obj.credentialId = message.credentialId);
    message.subject !== undefined && (obj.subject = message.subject);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.type !== undefined && (obj.type = message.type);
    message.data !== undefined &&
      (obj.data = message.data
        ? EncryptedData.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EncryptedCredentialOptions>
  ): EncryptedCredentialOptions {
    const message = {
      ...baseEncryptedCredentialOptions,
    } as EncryptedCredentialOptions;
    if (object.credentialId !== undefined && object.credentialId !== null) {
      message.credentialId = object.credentialId;
    } else {
      message.credentialId = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = object.subject;
    } else {
      message.subject = "";
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = EncryptedData.fromPartial(object.data);
    } else {
      message.data = undefined;
    }
    return message;
  },
};

const baseIssueCredentialOptions: object = {
  credentialId: "",
  subject: "",
  issuer: "",
  type: "",
};

export const IssueCredentialOptions = {
  encode(
    message: IssueCredentialOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.credentialId !== "") {
      writer.uint32(10).string(message.credentialId);
    }
    if (message.subject !== "") {
      writer.uint32(18).string(message.subject);
    }
    if (message.issuer !== "") {
      writer.uint32(26).string(message.issuer);
    }
    if (message.type !== "") {
      writer.uint32(34).string(message.type);
    }
    for (const v of message.encryptedCredentials) {
      EncryptedCredentialOptions.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IssueCredentialOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIssueCredentialOptions } as IssueCredentialOptions;
    message.encryptedCredentials = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.credentialId = reader.string();
          break;
        case 2:
          message.subject = reader.string();
          break;
        case 3:
          message.issuer = reader.string();
          break;
        case 4:
          message.type = reader.string();
          break;
        case 5:
          message.encryptedCredentials.push(
            EncryptedCredentialOptions.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IssueCredentialOptions {
    const message = { ...baseIssueCredentialOptions } as IssueCredentialOptions;
    message.encryptedCredentials = [];
    if (object.credentialId !== undefined && object.credentialId !== null) {
      message.credentialId = String(object.credentialId);
    } else {
      message.credentialId = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = String(object.subject);
    } else {
      message.subject = "";
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (
      object.encryptedCredentials !== undefined &&
      object.encryptedCredentials !== null
    ) {
      for (const e of object.encryptedCredentials) {
        message.encryptedCredentials.push(
          EncryptedCredentialOptions.fromJSON(e)
        );
      }
    }
    return message;
  },

  toJSON(message: IssueCredentialOptions): unknown {
    const obj: any = {};
    message.credentialId !== undefined &&
      (obj.credentialId = message.credentialId);
    message.subject !== undefined && (obj.subject = message.subject);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.type !== undefined && (obj.type = message.type);
    if (message.encryptedCredentials) {
      obj.encryptedCredentials = message.encryptedCredentials.map((e) =>
        e ? EncryptedCredentialOptions.toJSON(e) : undefined
      );
    } else {
      obj.encryptedCredentials = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<IssueCredentialOptions>
  ): IssueCredentialOptions {
    const message = { ...baseIssueCredentialOptions } as IssueCredentialOptions;
    message.encryptedCredentials = [];
    if (object.credentialId !== undefined && object.credentialId !== null) {
      message.credentialId = object.credentialId;
    } else {
      message.credentialId = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = object.subject;
    } else {
      message.subject = "";
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (
      object.encryptedCredentials !== undefined &&
      object.encryptedCredentials !== null
    ) {
      for (const e of object.encryptedCredentials) {
        message.encryptedCredentials.push(
          EncryptedCredentialOptions.fromPartial(e)
        );
      }
    }
    return message;
  },
};

const baseIssueCredentialsOptions: object = {};

export const IssueCredentialsOptions = {
  encode(
    message: IssueCredentialsOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.credentialRequests) {
      IssueCredentialOptions.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IssueCredentialsOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseIssueCredentialsOptions,
    } as IssueCredentialsOptions;
    message.credentialRequests = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.credentialRequests.push(
            IssueCredentialOptions.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IssueCredentialsOptions {
    const message = {
      ...baseIssueCredentialsOptions,
    } as IssueCredentialsOptions;
    message.credentialRequests = [];
    if (
      object.credentialRequests !== undefined &&
      object.credentialRequests !== null
    ) {
      for (const e of object.credentialRequests) {
        message.credentialRequests.push(IssueCredentialOptions.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: IssueCredentialsOptions): unknown {
    const obj: any = {};
    if (message.credentialRequests) {
      obj.credentialRequests = message.credentialRequests.map((e) =>
        e ? IssueCredentialOptions.toJSON(e) : undefined
      );
    } else {
      obj.credentialRequests = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<IssueCredentialsOptions>
  ): IssueCredentialsOptions {
    const message = {
      ...baseIssueCredentialsOptions,
    } as IssueCredentialsOptions;
    message.credentialRequests = [];
    if (
      object.credentialRequests !== undefined &&
      object.credentialRequests !== null
    ) {
      for (const e of object.credentialRequests) {
        message.credentialRequests.push(IssueCredentialOptions.fromPartial(e));
      }
    }
    return message;
  },
};

const baseCredentialStatusInfo: object = {
  uuid: "",
  credentialId: "",
  status: "",
};

export const CredentialStatusInfo = {
  encode(
    message: CredentialStatusInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.credentialId !== "") {
      writer.uint32(34).string(message.credentialId);
    }
    if (message.status !== "") {
      writer.uint32(42).string(message.status);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CredentialStatusInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCredentialStatusInfo } as CredentialStatusInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        case 2:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.credentialId = reader.string();
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

  fromJSON(object: any): CredentialStatusInfo {
    const message = { ...baseCredentialStatusInfo } as CredentialStatusInfo;
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = String(object.uuid);
    } else {
      message.uuid = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.credentialId !== undefined && object.credentialId !== null) {
      message.credentialId = String(object.credentialId);
    } else {
      message.credentialId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: CredentialStatusInfo): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    message.credentialId !== undefined &&
      (obj.credentialId = message.credentialId);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<CredentialStatusInfo>): CredentialStatusInfo {
    const message = { ...baseCredentialStatusInfo } as CredentialStatusInfo;
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = object.uuid;
    } else {
      message.uuid = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    if (object.credentialId !== undefined && object.credentialId !== null) {
      message.credentialId = object.credentialId;
    } else {
      message.credentialId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },
};

const baseEncryptedCredential: object = {
  uuid: "",
  credentialId: "",
  subject: "",
  issuer: "",
  type: "",
  version: "",
};

export const EncryptedCredential = {
  encode(
    message: EncryptedCredential,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    if (message.credentialId !== "") {
      writer.uint32(18).string(message.credentialId);
    }
    if (message.subject !== "") {
      writer.uint32(26).string(message.subject);
    }
    if (message.issuer !== "") {
      writer.uint32(34).string(message.issuer);
    }
    if (message.type !== "") {
      writer.uint32(42).string(message.type);
    }
    if (message.data !== undefined) {
      EncryptedData.encode(message.data, writer.uint32(50).fork()).ldelim();
    }
    if (message.version !== "") {
      writer.uint32(58).string(message.version);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(74).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EncryptedCredential {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEncryptedCredential } as EncryptedCredential;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        case 2:
          message.credentialId = reader.string();
          break;
        case 3:
          message.subject = reader.string();
          break;
        case 4:
          message.issuer = reader.string();
          break;
        case 5:
          message.type = reader.string();
          break;
        case 6:
          message.data = EncryptedData.decode(reader, reader.uint32());
          break;
        case 7:
          message.version = reader.string();
          break;
        case 8:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EncryptedCredential {
    const message = { ...baseEncryptedCredential } as EncryptedCredential;
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = String(object.uuid);
    } else {
      message.uuid = "";
    }
    if (object.credentialId !== undefined && object.credentialId !== null) {
      message.credentialId = String(object.credentialId);
    } else {
      message.credentialId = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = String(object.subject);
    } else {
      message.subject = "";
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = EncryptedData.fromJSON(object.data);
    } else {
      message.data = undefined;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = String(object.version);
    } else {
      message.version = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = fromJsonTimestamp(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = fromJsonTimestamp(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    return message;
  },

  toJSON(message: EncryptedCredential): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.credentialId !== undefined &&
      (obj.credentialId = message.credentialId);
    message.subject !== undefined && (obj.subject = message.subject);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.type !== undefined && (obj.type = message.type);
    message.data !== undefined &&
      (obj.data = message.data
        ? EncryptedData.toJSON(message.data)
        : undefined);
    message.version !== undefined && (obj.version = message.version);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<EncryptedCredential>): EncryptedCredential {
    const message = { ...baseEncryptedCredential } as EncryptedCredential;
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = object.uuid;
    } else {
      message.uuid = "";
    }
    if (object.credentialId !== undefined && object.credentialId !== null) {
      message.credentialId = object.credentialId;
    } else {
      message.credentialId = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = object.subject;
    } else {
      message.subject = "";
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = EncryptedData.fromPartial(object.data);
    } else {
      message.data = undefined;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = undefined;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = undefined;
    }
    return message;
  },
};

const baseEncryptedCredentialEnriched: object = {};

export const EncryptedCredentialEnriched = {
  encode(
    message: EncryptedCredentialEnriched,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.encryptedCredential !== undefined) {
      EncryptedCredential.encode(
        message.encryptedCredential,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.didDocument !== undefined) {
      DidDocument.encode(
        message.didDocument,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EncryptedCredentialEnriched {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEncryptedCredentialEnriched,
    } as EncryptedCredentialEnriched;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encryptedCredential = EncryptedCredential.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.didDocument = DidDocument.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EncryptedCredentialEnriched {
    const message = {
      ...baseEncryptedCredentialEnriched,
    } as EncryptedCredentialEnriched;
    if (
      object.encryptedCredential !== undefined &&
      object.encryptedCredential !== null
    ) {
      message.encryptedCredential = EncryptedCredential.fromJSON(
        object.encryptedCredential
      );
    } else {
      message.encryptedCredential = undefined;
    }
    if (object.didDocument !== undefined && object.didDocument !== null) {
      message.didDocument = DidDocument.fromJSON(object.didDocument);
    } else {
      message.didDocument = undefined;
    }
    return message;
  },

  toJSON(message: EncryptedCredentialEnriched): unknown {
    const obj: any = {};
    message.encryptedCredential !== undefined &&
      (obj.encryptedCredential = message.encryptedCredential
        ? EncryptedCredential.toJSON(message.encryptedCredential)
        : undefined);
    message.didDocument !== undefined &&
      (obj.didDocument = message.didDocument
        ? DidDocument.toJSON(message.didDocument)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EncryptedCredentialEnriched>
  ): EncryptedCredentialEnriched {
    const message = {
      ...baseEncryptedCredentialEnriched,
    } as EncryptedCredentialEnriched;
    if (
      object.encryptedCredential !== undefined &&
      object.encryptedCredential !== null
    ) {
      message.encryptedCredential = EncryptedCredential.fromPartial(
        object.encryptedCredential
      );
    } else {
      message.encryptedCredential = undefined;
    }
    if (object.didDocument !== undefined && object.didDocument !== null) {
      message.didDocument = DidDocument.fromPartial(object.didDocument);
    } else {
      message.didDocument = undefined;
    }
    return message;
  },
};

const baseRevokeAllCredentials: object = { did: "" };

export const RevokeAllCredentials = {
  encode(
    message: RevokeAllCredentials,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RevokeAllCredentials {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRevokeAllCredentials } as RevokeAllCredentials;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
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

  fromJSON(object: any): RevokeAllCredentials {
    const message = { ...baseRevokeAllCredentials } as RevokeAllCredentials;
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromJSON(object.proof);
    } else {
      message.proof = undefined;
    }
    return message;
  },

  toJSON(message: RevokeAllCredentials): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    message.proof !== undefined &&
      (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RevokeAllCredentials>): RevokeAllCredentials {
    const message = { ...baseRevokeAllCredentials } as RevokeAllCredentials;
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromPartial(object.proof);
    } else {
      message.proof = undefined;
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
