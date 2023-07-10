import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "receipt.v1";
/** Object to encapsulate presentation verified receipt data */
export interface PresentationVerifiedReceiptOptions {
    type: string;
    /** did */
    verifier: string;
    /** did */
    subject: string;
    data: Verified | undefined;
}
export interface Verified {
    isVerified: boolean;
    credentialTypes: string[];
    issuers: string[];
    reason: string;
    reply: string;
    requestId: string;
    requestUuid: string;
}
export declare const PresentationVerifiedReceiptOptions: {
    encode(message: PresentationVerifiedReceiptOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PresentationVerifiedReceiptOptions;
    fromJSON(object: any): PresentationVerifiedReceiptOptions;
    toJSON(message: PresentationVerifiedReceiptOptions): unknown;
    fromPartial(object: DeepPartial<PresentationVerifiedReceiptOptions>): PresentationVerifiedReceiptOptions;
};
export declare const Verified: {
    encode(message: Verified, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Verified;
    fromJSON(object: any): Verified;
    toJSON(message: Verified): unknown;
    fromPartial(object: DeepPartial<Verified>): Verified;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=receipt.d.ts.map