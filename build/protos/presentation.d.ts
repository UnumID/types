import _m0 from "protobufjs/minimal";
import { Credential, CredentialRequest } from "./credential";
import { Proof } from "./proof";
import { Struct } from "./google/protobuf/struct";
export declare const protobufPackage = "presentation.v1";
/** Encapsulates an unsigned presentation attributes. */
export interface UnsignedPresentation {
    context: string[];
    type: string[];
    presentationRequestUuid: string;
    verifierDid: string;
    verifiableCredential: Credential[];
}
/**
 * Encapsulates addition attributes to the unsigned presentation entity to create a Presentation entity.
 * Tightly coupled with UnsignedPresentation.
 */
export interface Presentation {
    context: string[];
    type: string[];
    presentationRequestUuid: string;
    verifierDid: string;
    verifiableCredential: Credential[];
    proof: Proof | undefined;
}
/** Encapsulates request attributes for the purposes of requesting presentation of credentials. */
export interface UnsignedPresentationRequest {
    credentialRequests: CredentialRequest[];
    holderAppUuid: string;
    verifier: string;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
    expiresAt: Date | undefined;
    /** a string representation of an ambiguous object. Note: the Any type does not work because still needs a scheme (but can be assigned dymanically) */
    metadata: Struct | undefined;
    uuid: string;
    /** an indentifier for related presetnation requests across versions */
    id: string;
}
/**
 * Encapsulates request attributes for the purposes of requesting presentation of credentials with the addition of a proof.
 * Tighting coupled to UnsignedPresentationRequest.
 */
export interface PresentationRequest {
    credentialRequests: CredentialRequest[];
    holderAppUuid: string;
    verifier: string;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
    expiresAt: Date | undefined;
    /** a string representation of an ambiguous object. Note: the Any type does not work because still needs a scheme (but can be assigned dymanically) */
    metadata: Struct | undefined;
    uuid: string;
    proof: Proof | undefined;
    /** an indentifier for related presetnation requests across versions */
    id: string;
}
export declare const UnsignedPresentation: {
    encode(message: UnsignedPresentation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UnsignedPresentation;
    fromJSON(object: any): UnsignedPresentation;
    toJSON(message: UnsignedPresentation): unknown;
    fromPartial(object: DeepPartial<UnsignedPresentation>): UnsignedPresentation;
};
export declare const Presentation: {
    encode(message: Presentation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Presentation;
    fromJSON(object: any): Presentation;
    toJSON(message: Presentation): unknown;
    fromPartial(object: DeepPartial<Presentation>): Presentation;
};
export declare const UnsignedPresentationRequest: {
    encode(message: UnsignedPresentationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UnsignedPresentationRequest;
    fromJSON(object: any): UnsignedPresentationRequest;
    toJSON(message: UnsignedPresentationRequest): unknown;
    fromPartial(object: DeepPartial<UnsignedPresentationRequest>): UnsignedPresentationRequest;
};
export declare const PresentationRequest: {
    encode(message: PresentationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PresentationRequest;
    fromJSON(object: any): PresentationRequest;
    toJSON(message: PresentationRequest): unknown;
    fromPartial(object: DeepPartial<PresentationRequest>): PresentationRequest;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=presentation.d.ts.map