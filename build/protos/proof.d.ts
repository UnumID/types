import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "proof.v1";
/** Object to encapsulate cryptographic proof for any signed object: Credentials, Presentations, PresentationRequests. */
export interface Proof {
    signatureValue: string;
    type: string;
    verificationMethod: string;
    created: Date | undefined;
    proofPurpose: string;
}
export declare const Proof: {
    encode(message: Proof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proof;
    fromJSON(object: any): Proof;
    toJSON(message: Proof): unknown;
    fromPartial(object: DeepPartial<Proof>): Proof;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=proof.d.ts.map