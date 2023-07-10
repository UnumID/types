import _m0 from "protobufjs/minimal";
import { PresentationRequest } from "./presentationRequest";
import { VerifierInfo } from "./verifier";
import { Struct } from "./google/protobuf/struct";
import { HolderAppInfo } from "./holderApp";
export declare const protobufPackage = "presentationRequestEnriched.v1";
/** Encapsulates presentation request attributes as they are returned from Unum ID saas. */
export interface PresentationRequestEnriched {
    presentationRequest: PresentationRequest | undefined;
    verifier: VerifierInfo | undefined;
    /** a map of issuer metadata keyed on the issuer's did */
    issuers: Struct | undefined;
    holderApp: HolderAppInfo | undefined;
    deeplink: string;
    qrCode: string;
    displayMessage: PresentationRequestDisplayMessage | undefined;
}
export interface PresentationRequestDisplayMessage {
    text: string;
    html: string;
}
export declare const PresentationRequestEnriched: {
    encode(message: PresentationRequestEnriched, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PresentationRequestEnriched;
    fromJSON(object: any): PresentationRequestEnriched;
    toJSON(message: PresentationRequestEnriched): unknown;
    fromPartial(object: DeepPartial<PresentationRequestEnriched>): PresentationRequestEnriched;
};
export declare const PresentationRequestDisplayMessage: {
    encode(message: PresentationRequestDisplayMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PresentationRequestDisplayMessage;
    fromJSON(object: any): PresentationRequestDisplayMessage;
    toJSON(message: PresentationRequestDisplayMessage): unknown;
    fromPartial(object: DeepPartial<PresentationRequestDisplayMessage>): PresentationRequestDisplayMessage;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=presentationRequestEnriched.d.ts.map