import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "verifier.v1";
/** Object to encapsulate Target information regarding customer's api versioning. */
export interface TargetInfo {
    version: string;
    url: string;
}
/** Object to encapsulate Version information. */
export interface VersionInfo {
    sdkVersion: string;
    url: TargetInfo | undefined;
}
/** Object to encapsulate a Verifier entity */
export interface Verifier {
    uuid: string;
    customerUuid: string;
    name: string;
    did: string;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
    isAuthorized: boolean;
    apiKey: string;
    url: string;
    versionInfo: VersionInfo[];
}
/** Object to encapsulate basic verifier info */
export interface VerifierInfo {
    did: string;
    name: string;
    url: string;
}
export declare const TargetInfo: {
    encode(message: TargetInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TargetInfo;
    fromJSON(object: any): TargetInfo;
    toJSON(message: TargetInfo): unknown;
    fromPartial(object: DeepPartial<TargetInfo>): TargetInfo;
};
export declare const VersionInfo: {
    encode(message: VersionInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VersionInfo;
    fromJSON(object: any): VersionInfo;
    toJSON(message: VersionInfo): unknown;
    fromPartial(object: DeepPartial<VersionInfo>): VersionInfo;
};
export declare const Verifier: {
    encode(message: Verifier, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Verifier;
    fromJSON(object: any): Verifier;
    toJSON(message: Verifier): unknown;
    fromPartial(object: DeepPartial<Verifier>): Verifier;
};
export declare const VerifierInfo: {
    encode(message: VerifierInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VerifierInfo;
    fromJSON(object: any): VerifierInfo;
    toJSON(message: VerifierInfo): unknown;
    fromPartial(object: DeepPartial<VerifierInfo>): VerifierInfo;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=verifier.d.ts.map