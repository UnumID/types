import _m0 from "protobufjs/minimal";
import { PresentationRequest } from "./presentationRequest";
import { VerifierInfo } from "./verifier";
import { Struct } from "./google/protobuf/struct";
import { HolderAppInfo } from "./holderApp";
export declare const protobufPackage = "presentationRequestEnriched.v1";
/** Encapsulates presentation request attributes as they are retuned from Unum ID saas. */
export interface PresentationRequestEnriched {
    presentationRequest: PresentationRequest | undefined;
    verifier: VerifierInfo | undefined;
    /** a map of issuer metadata keyed on the issuer's did */
    issuers: Struct | undefined;
    holderApp: HolderAppInfo | undefined;
    deeplink: string;
    qrCode: string;
}
/** Type to encapsulate a PresentationRequest Data Transfer Object from the PresentationRequestRepository service. */
export interface PresentationRequestRepoDto {
    presentationRequests: {
        [key: string]: PresentationRequestEnriched;
    };
}
export interface PresentationRequestRepoDto_PresentationRequestsEntry {
    key: string;
    value: PresentationRequestEnriched | undefined;
}
export declare const PresentationRequestEnriched: {
    encode(message: PresentationRequestEnriched, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PresentationRequestEnriched;
    fromJSON(object: any): PresentationRequestEnriched;
    toJSON(message: PresentationRequestEnriched): unknown;
    fromPartial(object: DeepPartial<PresentationRequestEnriched>): PresentationRequestEnriched;
};
export declare const PresentationRequestRepoDto: {
    encode(message: PresentationRequestRepoDto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PresentationRequestRepoDto;
    fromJSON(object: any): PresentationRequestRepoDto;
    toJSON(message: PresentationRequestRepoDto): unknown;
    fromPartial(object: DeepPartial<PresentationRequestRepoDto>): PresentationRequestRepoDto;
};
export declare const PresentationRequestRepoDto_PresentationRequestsEntry: {
    encode(message: PresentationRequestRepoDto_PresentationRequestsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PresentationRequestRepoDto_PresentationRequestsEntry;
    fromJSON(object: any): PresentationRequestRepoDto_PresentationRequestsEntry;
    toJSON(message: PresentationRequestRepoDto_PresentationRequestsEntry): unknown;
    fromPartial(object: DeepPartial<PresentationRequestRepoDto_PresentationRequestsEntry>): PresentationRequestRepoDto_PresentationRequestsEntry;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=presentationRequestEnriched.d.ts.map