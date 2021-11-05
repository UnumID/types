import _m0 from "protobufjs/minimal";
import { Proof } from "./proof";
import { EncryptedData } from "./crypto";
import { DidDocument } from "./didDocument";
export declare const protobufPackage = "credential.v1";
/** Object to encapsulate Credential status information. */
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
/** Object that encapsulates Credential information requested. */
export interface CredentialRequest {
    /** the string matching the desire credential type */
    type: string;
    /** list of acceptable issuer DIDs that have issued the credential */
    issuers: string[];
    /** to denote wether this particular credential is required in response to the PresentationRequest. Defaults behavior resolves this to true. */
    required: boolean;
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
/** Object that encapsulates CredentialStatus information. */
export interface CredentialStatusInfo {
    uuid: string;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
    credentialiId: string;
    /** note could be an enum but just simplier this way... only valid values are: revoked, valid */
    status: string;
}
/**
 * Object that encapsulates an EncryptedCredentialRespose.
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
export declare const CredentialStatus: {
    encode(message: CredentialStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CredentialStatus;
    fromJSON(object: any): CredentialStatus;
    toJSON(message: CredentialStatus): unknown;
    fromPartial(object: DeepPartial<CredentialStatus>): CredentialStatus;
};
export declare const UnsignedCredential: {
    encode(message: UnsignedCredential, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UnsignedCredential;
    fromJSON(object: any): UnsignedCredential;
    toJSON(message: UnsignedCredential): unknown;
    fromPartial(object: DeepPartial<UnsignedCredential>): UnsignedCredential;
};
export declare const Credential: {
    encode(message: Credential, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Credential;
    fromJSON(object: any): Credential;
    toJSON(message: Credential): unknown;
    fromPartial(object: DeepPartial<Credential>): Credential;
};
export declare const CredentialRequest: {
    encode(message: CredentialRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CredentialRequest;
    fromJSON(object: any): CredentialRequest;
    toJSON(message: CredentialRequest): unknown;
    fromPartial(object: DeepPartial<CredentialRequest>): CredentialRequest;
};
export declare const EncryptedCredentialOptions: {
    encode(message: EncryptedCredentialOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EncryptedCredentialOptions;
    fromJSON(object: any): EncryptedCredentialOptions;
    toJSON(message: EncryptedCredentialOptions): unknown;
    fromPartial(object: DeepPartial<EncryptedCredentialOptions>): EncryptedCredentialOptions;
};
export declare const IssueCredentialOptions: {
    encode(message: IssueCredentialOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IssueCredentialOptions;
    fromJSON(object: any): IssueCredentialOptions;
    toJSON(message: IssueCredentialOptions): unknown;
    fromPartial(object: DeepPartial<IssueCredentialOptions>): IssueCredentialOptions;
};
export declare const IssueCredentialsOptions: {
    encode(message: IssueCredentialsOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IssueCredentialsOptions;
    fromJSON(object: any): IssueCredentialsOptions;
    toJSON(message: IssueCredentialsOptions): unknown;
    fromPartial(object: DeepPartial<IssueCredentialsOptions>): IssueCredentialsOptions;
};
export declare const CredentialStatusInfo: {
    encode(message: CredentialStatusInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CredentialStatusInfo;
    fromJSON(object: any): CredentialStatusInfo;
    toJSON(message: CredentialStatusInfo): unknown;
    fromPartial(object: DeepPartial<CredentialStatusInfo>): CredentialStatusInfo;
};
export declare const EncryptedCredential: {
    encode(message: EncryptedCredential, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EncryptedCredential;
    fromJSON(object: any): EncryptedCredential;
    toJSON(message: EncryptedCredential): unknown;
    fromPartial(object: DeepPartial<EncryptedCredential>): EncryptedCredential;
};
export declare const EncryptedCredentialEnriched: {
    encode(message: EncryptedCredentialEnriched, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EncryptedCredentialEnriched;
    fromJSON(object: any): EncryptedCredentialEnriched;
    toJSON(message: EncryptedCredentialEnriched): unknown;
    fromPartial(object: DeepPartial<EncryptedCredentialEnriched>): EncryptedCredentialEnriched;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=credential.d.ts.map