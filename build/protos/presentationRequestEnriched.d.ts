import _m0 from "protobufjs/minimal";
import { PresentationRequest } from "./presentationRequest";
import { VerifierInfo } from "./verifier";
import { Struct } from "./google/protobuf/struct";
import { HolderAppInfo } from "./holderApp";
export declare const protobufPackage = "presentationRequestEnriched.v1";
/** Encapsulates presentation request attributes as they are retuned from Unum ID saas. */
export interface PresentationRequestEnriched {
    presentationRequest: PresentationRequest | undefined;
    verifierInfo: VerifierInfo | undefined;
    /** a map of issuer metadata keyed on the issuer's did */
    issuers: Struct | undefined;
    holderApp: HolderAppInfo | undefined;
    deeplink: string;
    qrCode: string;
}
export declare const PresentationRequestEnriched: {
    encode(message: PresentationRequestEnriched, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PresentationRequestEnriched;
    fromJSON(object: any): PresentationRequestEnriched;
    toJSON(message: PresentationRequestEnriched): unknown;
    fromPartial(object: DeepPartial<PresentationRequestEnriched>): PresentationRequestEnriched;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=presentationRequestEnriched.d.ts.map