import _m0 from "protobufjs/minimal";
import { CredentialRequest } from "./credential";
import { Proof } from "./proof";
export declare const protobufPackage = "presentationRequest.v1";
/** Encapsulates request attributes for the purposes of requesting presentation of credentials. */
export interface PresentationRequestOptions {
    credentialRequests: CredentialRequest[];
    holderAppUuid: string;
    verifier: string;
    expiresAt: Date | undefined;
    /** a string representation of an ambiguous object. Note: the Any type does not work because still needs a scheme (but can be assigned dymanically) & Struct does not work becuase not determinsitcally serialzied across langauges */
    metadata?: string | undefined;
    uuid: string;
    /** an indentifier for related presetnation requests across versions */
    id: string;
    version: string;
}
/** Encapsulates request attributes for the purposes of requesting presentation of credentials. */
export interface UnsignedPresentationRequest {
    credentialRequests: CredentialRequest[];
    holderAppUuid: string;
    verifier: string;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
    expiresAt: Date | undefined;
    /**
     * A string representation of an ambiguous object.
     * Note: the Any type does not work because still needs a scheme (but can be assigned dymanically) & Struct does not work becuase not determinsitcally serialzied across langauges
     */
    metadata?: string | undefined;
    uuid: string;
    /** An indentifier for related presetnation requests across versions */
    id: string;
    version: string;
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
    /**
     * A string representation of an ambiguous object.
     * Note: the Any type does not work because still needs a scheme (but can be assigned dymanically) & Struct does not work becuase not determinsitcally serialzied across langauges
     */
    metadata?: string | undefined;
    uuid: string;
    proof: Proof | undefined;
    /** An indentifier for related presetnation requests across versions */
    id: string;
    version: string;
}
export declare const PresentationRequestOptions: {
    encode(message: PresentationRequestOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PresentationRequestOptions;
    fromJSON(object: any): PresentationRequestOptions;
    toJSON(message: PresentationRequestOptions): unknown;
    fromPartial(object: DeepPartial<PresentationRequestOptions>): PresentationRequestOptions;
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
//# sourceMappingURL=presentationRequest.d.ts.map