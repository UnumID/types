import _m0 from "protobufjs/minimal";
import { Credential } from "./credential";
import { Proof } from "./proof";
export declare const protobufPackage = "presentation.v4";
/** Encapsulates an unsigned presentation attributes. */
export interface UnsignedPresentation {
    context: string[];
    type: string[];
    presentationRequestId: string;
    verifierDid: string;
    /** Optional. If undefined or empty it means the presentation request was declined */
    verifiableCredential: Credential[];
    uuid: string;
}
/**
 * Encapsulates addition attributes to the unsigned presentation entity to create a Presentation entity.
 * Tightly coupled with UnsignedPresentation.
 */
export interface Presentation {
    context: string[];
    type: string[];
    presentationRequestId: string;
    verifierDid: string;
    /** Optional. If undefined or empty it means the presentation request was declined */
    verifiableCredential: Credential[];
    proof: Proof | undefined;
    uuid: string;
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
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=presentation.d.ts.map