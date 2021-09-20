import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "receipt.v1";
/** Object to encapsulate a receipt object from the saas. */
export interface Receipt {
    uuid: string;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
    type: string[];
    subject: string;
    verifier: string;
    issuer: string;
    customer: string;
}
/** Object to encapsulate presentation verified receipt data */
export interface PresentationVerifedReceiptOptions {
    type: string[];
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
}
export declare const Receipt: {
    encode(message: Receipt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Receipt;
    fromJSON(object: any): Receipt;
    toJSON(message: Receipt): unknown;
    fromPartial(object: DeepPartial<Receipt>): Receipt;
};
export declare const PresentationVerifedReceiptOptions: {
    encode(message: PresentationVerifedReceiptOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PresentationVerifedReceiptOptions;
    fromJSON(object: any): PresentationVerifedReceiptOptions;
    toJSON(message: PresentationVerifedReceiptOptions): unknown;
    fromPartial(object: DeepPartial<PresentationVerifedReceiptOptions>): PresentationVerifedReceiptOptions;
};
export declare const Verified: {
    encode(message: Verified, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Verified;
    fromJSON(object: any): Verified;
    toJSON(message: Verified): unknown;
    fromPartial(object: DeepPartial<Verified>): Verified;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=receipt.d.ts.map