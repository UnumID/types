import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "externalMessage.v1";
/** Object to encapsulate encrypted data */
export interface ExternalMessage {
    to: string;
    deeplink: string;
}
export declare const ExternalMessage: {
    encode(message: ExternalMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalMessage;
    fromJSON(object: any): ExternalMessage;
    toJSON(message: ExternalMessage): unknown;
    fromPartial(object: DeepPartial<ExternalMessage>): ExternalMessage;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=externalMessage.d.ts.map