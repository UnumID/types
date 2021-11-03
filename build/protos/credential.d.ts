import _m0 from "protobufjs/minimal";
import { Proof } from "./proof";
import { EncryptedData } from "./crypto";
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
/**
 * Object that encapsulates an EncryptedCredential.
 * Note: this is more of the DTO to persist an EncryptedCredential in the saas because no uuid is defined here.
 */
export interface EncryptedCredential {
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
export interface IssueCredentialDto {
    credentialId: string;
    subject: string;
    issuer: string;
    type: string;
    encryptedCredentials: EncryptedCredential[];
}
/** Object that encapsulates a request to Unum ID SaaS to issue multiple credentials of various types. */
export interface IssueCredentialsDto {
    credentialRequests: IssueCredentialDto[];
}
/** Object that encapsulates CredentialStatus information. */
export interface CredentialStatusInfo {
    uuid: string;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
    credentialId: string;
    /** note could be an enum but just simplier this way... only valid values are: revoked, valid */
    status: string;
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
export declare const EncryptedCredential: {
    encode(message: EncryptedCredential, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EncryptedCredential;
    fromJSON(object: any): EncryptedCredential;
    toJSON(message: EncryptedCredential): unknown;
    fromPartial(object: DeepPartial<EncryptedCredential>): EncryptedCredential;
};
export declare const IssueCredentialDto: {
    encode(message: IssueCredentialDto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IssueCredentialDto;
    fromJSON(object: any): IssueCredentialDto;
    toJSON(message: IssueCredentialDto): unknown;
    fromPartial(object: DeepPartial<IssueCredentialDto>): IssueCredentialDto;
};
export declare const IssueCredentialsDto: {
    encode(message: IssueCredentialsDto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IssueCredentialsDto;
    fromJSON(object: any): IssueCredentialsDto;
    toJSON(message: IssueCredentialsDto): unknown;
    fromPartial(object: DeepPartial<IssueCredentialsDto>): IssueCredentialsDto;
};
export declare const CredentialStatusInfo: {
    encode(message: CredentialStatusInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CredentialStatusInfo;
    fromJSON(object: any): CredentialStatusInfo;
    toJSON(message: CredentialStatusInfo): unknown;
    fromPartial(object: DeepPartial<CredentialStatusInfo>): CredentialStatusInfo;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=credential.d.ts.map