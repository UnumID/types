import _m0 from "protobufjs/minimal";
import { Proof } from "./proof";
import { UserDidAssociation, DidDocument } from "./didDocument";
import { EncryptedData } from "./crypto";
export declare const protobufPackage = "credential.v1";
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
    expirationDate?: Date | undefined;
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
    expirationDate?: Date | undefined;
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
    /** the given description to be explained */
    description?: string;
}
/** Type to encapsulate Credential type information of credentials issued, generally in response to Subject CredentialRequest. */
export interface CredentialsIssuedResponse {
    credentialTypesIssued: string[];
}
/** Object that encapsulates an unsigned Subject's request for Credentials. */
export interface UnsignedSubjectCredentialRequests {
    credentialRequests: CredentialRequest[];
}
/** Object that encapsulates a signed Subject's request for Credentials. */
export interface SubjectCredentialRequests {
    credentialRequests: CredentialRequest[];
    /** proof signed by the subject */
    proof: Proof | undefined;
}
/**
 * Type to encapsulate Subject Credential Requests DTO which as a top level issuerDid which should be part of the request's issuers attribute.
 * This top level issuerDid attribute to facilitate the saas grabbed the issuer entity for relaying to the issuer's /credentialRequests endpoint.
 */
export interface SubjectCredentialRequestsDto {
    subjectCredentialRequests: SubjectCredentialRequests | undefined;
    issuerDid: string;
    subjectDid: string;
}
/**
 * Interface to encapsulate the combined functionality of user DID association with  subject credential requests.
 *
 * Note: userDidAssociation is optional because will not always be necessary. However is needed for the initial credential requests in order for the customer's user to get an associated DID.
 * Opted to include as part of the credential requests to eliminate the possibility for a user did / credential request race condition.
 *
 * Note: credentialRequestsInfo is optional becuase this type can be used strictly for userDidAssocation, despite its name. We opted to keep this functionality under the SubjectCredentialRequet
 * flow for simplicity of customers implementation. They only have to implement one endpoint in this manner than can perform in either manner.
 */
export interface SubjectCredentialRequestsEnrichedDto {
    credentialRequestsInfo?: SubjectCredentialRequestsDto | undefined;
    userDidAssociation?: UserDidAssociation | undefined;
}
/** Object that encapsulates an EncryptedCredentialOptions for persisting an EncryptedCredential. */
export interface EncryptedCredentialOptions {
    credentialId: string;
    subject: string;
    issuer: string;
    type: string;
    data: EncryptedData | undefined;
    expirationDate?: Date | undefined;
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
    expirationDate?: Date | undefined;
}
/** Object that encapsulates an EncryptedCredential and a DidDocument corresponding the credential's issuer. */
export interface EncryptedCredentialEnriched {
    encryptedCredential: EncryptedCredential | undefined;
    didDocument: DidDocument | undefined;
}
/** Object to encapsulate an subjectDid to be signed by an issuer wishing to revoke all credentials it has issued the DID. */
export interface UnsignedRevokeAllCredentials {
    /** for now can only be a subject DID, however concievably could be an other entity DID */
    did: string;
}
/** Object to encapsulate an subjectDid signed by an issuer wishing to revoke all credentials it has issued the DID. */
export interface RevokeAllCredentials {
    /** for now can only be a subject DID, however concievably could be an other entity DID */
    did: string;
    /** proof signed by the issuer */
    proof: Proof | undefined;
}
/** Object to encapsulate options for updating a credential's status */
export interface CredentialStatusOptions {
    /** either 'revoked' or 'valid' */
    status: string;
}
/** Object to encapsulate options for updating a credential's status */
export interface CredentialStatusesOptions {
    /** either 'revoked' or 'valid' */
    status: string;
    credentialIds: string[];
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
export declare const CredentialsIssuedResponse: {
    encode(message: CredentialsIssuedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CredentialsIssuedResponse;
    fromJSON(object: any): CredentialsIssuedResponse;
    toJSON(message: CredentialsIssuedResponse): unknown;
    fromPartial(object: DeepPartial<CredentialsIssuedResponse>): CredentialsIssuedResponse;
};
export declare const UnsignedSubjectCredentialRequests: {
    encode(message: UnsignedSubjectCredentialRequests, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UnsignedSubjectCredentialRequests;
    fromJSON(object: any): UnsignedSubjectCredentialRequests;
    toJSON(message: UnsignedSubjectCredentialRequests): unknown;
    fromPartial(object: DeepPartial<UnsignedSubjectCredentialRequests>): UnsignedSubjectCredentialRequests;
};
export declare const SubjectCredentialRequests: {
    encode(message: SubjectCredentialRequests, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubjectCredentialRequests;
    fromJSON(object: any): SubjectCredentialRequests;
    toJSON(message: SubjectCredentialRequests): unknown;
    fromPartial(object: DeepPartial<SubjectCredentialRequests>): SubjectCredentialRequests;
};
export declare const SubjectCredentialRequestsDto: {
    encode(message: SubjectCredentialRequestsDto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubjectCredentialRequestsDto;
    fromJSON(object: any): SubjectCredentialRequestsDto;
    toJSON(message: SubjectCredentialRequestsDto): unknown;
    fromPartial(object: DeepPartial<SubjectCredentialRequestsDto>): SubjectCredentialRequestsDto;
};
export declare const SubjectCredentialRequestsEnrichedDto: {
    encode(message: SubjectCredentialRequestsEnrichedDto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubjectCredentialRequestsEnrichedDto;
    fromJSON(object: any): SubjectCredentialRequestsEnrichedDto;
    toJSON(message: SubjectCredentialRequestsEnrichedDto): unknown;
    fromPartial(object: DeepPartial<SubjectCredentialRequestsEnrichedDto>): SubjectCredentialRequestsEnrichedDto;
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
export declare const UnsignedRevokeAllCredentials: {
    encode(message: UnsignedRevokeAllCredentials, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UnsignedRevokeAllCredentials;
    fromJSON(object: any): UnsignedRevokeAllCredentials;
    toJSON(message: UnsignedRevokeAllCredentials): unknown;
    fromPartial(object: DeepPartial<UnsignedRevokeAllCredentials>): UnsignedRevokeAllCredentials;
};
export declare const RevokeAllCredentials: {
    encode(message: RevokeAllCredentials, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RevokeAllCredentials;
    fromJSON(object: any): RevokeAllCredentials;
    toJSON(message: RevokeAllCredentials): unknown;
    fromPartial(object: DeepPartial<RevokeAllCredentials>): RevokeAllCredentials;
};
export declare const CredentialStatusOptions: {
    encode(message: CredentialStatusOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CredentialStatusOptions;
    fromJSON(object: any): CredentialStatusOptions;
    toJSON(message: CredentialStatusOptions): unknown;
    fromPartial(object: DeepPartial<CredentialStatusOptions>): CredentialStatusOptions;
};
export declare const CredentialStatusesOptions: {
    encode(message: CredentialStatusesOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CredentialStatusesOptions;
    fromJSON(object: any): CredentialStatusesOptions;
    toJSON(message: CredentialStatusesOptions): unknown;
    fromPartial(object: DeepPartial<CredentialStatusesOptions>): CredentialStatusesOptions;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=credential.d.ts.map