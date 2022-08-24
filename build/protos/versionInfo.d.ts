import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "versionInfo.v1";
/** Object to encapsulate Target information regarding customer's api versioning. */
export interface TargetInfo {
    version: string;
    /** TODO map of any string to any string for any headers; */
    url: string;
}
/** Object to encapsulate Version information. */
export interface VersionInfo {
    sdkVersion: string;
    target: TargetInfo | undefined;
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
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=versionInfo.d.ts.map