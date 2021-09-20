import _m0 from "protobufjs/minimal";
import { Proof } from "./proof";
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
 * Tightly coupled with UnsignedCredential.
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
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=credential.d.ts.map