import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "holderApp.v1";
/** Object to encapsulate basic Holder App entity info */
export interface HolderAppInfo {
    name: string;
    /** base64 string representation of image */
    deeplinkButtonImg: string;
    appStoreUrl?: string | undefined;
    playStoreUrl?: string | undefined;
}
export declare const HolderAppInfo: {
    encode(message: HolderAppInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HolderAppInfo;
    fromJSON(object: any): HolderAppInfo;
    toJSON(message: HolderAppInfo): unknown;
    fromPartial(object: DeepPartial<HolderAppInfo>): HolderAppInfo;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=holderApp.d.ts.map