import _m0 from "protobufjs/minimal";
import { PublicKeyInfo } from "./crypto";
export declare const protobufPackage = "didDocument.v1";
/** Object to encapsulate a DID document object from the saas. */
export interface DidDocument {
    context: string;
    id: string;
    created: Date | undefined;
    updated: Date | undefined;
    publicKey: PublicKeyInfo[];
    service: DidDocumentService[];
}
/** Object to encapsulate a DID document service info. */
export interface DidDocumentService {
    id: string;
    serviceEndpoint: string;
    type: string;
}
export declare const DidDocument: {
    encode(message: DidDocument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DidDocument;
    fromJSON(object: any): DidDocument;
    toJSON(message: DidDocument): unknown;
    fromPartial(object: DeepPartial<DidDocument>): DidDocument;
};
export declare const DidDocumentService: {
    encode(message: DidDocumentService, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DidDocumentService;
    fromJSON(object: any): DidDocumentService;
    toJSON(message: DidDocumentService): unknown;
    fromPartial(object: DeepPartial<DidDocumentService>): DidDocumentService;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=didDocument.d.ts.map