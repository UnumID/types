import _m0 from "protobufjs/minimal";
import { PublicKeyInfo } from "./crypto";
export declare const protobufPackage = "issuer.v1";
/** Object to encapsulate an Issuer entity */
export interface Issuer {
    uuid: string;
    customerUuid: string;
    name: string;
    did: string;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
    isAuthorized: boolean;
    apiKey: string;
}
/** Object to encapsulate an Issuer entity */
export interface RegisterIssuerOptions {
    customerUuid: string;
    publicKeyInfo: PublicKeyInfo[];
}
/** Encapsulates Issuer metadata attributes. */
export interface IssuerInfo {
    did: string;
    name: string;
    cardImageUrl: string;
}
export declare const Issuer: {
    encode(message: Issuer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Issuer;
    fromJSON(object: any): Issuer;
    toJSON(message: Issuer): unknown;
    fromPartial(object: DeepPartial<Issuer>): Issuer;
};
export declare const RegisterIssuerOptions: {
    encode(message: RegisterIssuerOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterIssuerOptions;
    fromJSON(object: any): RegisterIssuerOptions;
    toJSON(message: RegisterIssuerOptions): unknown;
    fromPartial(object: DeepPartial<RegisterIssuerOptions>): RegisterIssuerOptions;
};
export declare const IssuerInfo: {
    encode(message: IssuerInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IssuerInfo;
    fromJSON(object: any): IssuerInfo;
    toJSON(message: IssuerInfo): unknown;
    fromPartial(object: DeepPartial<IssuerInfo>): IssuerInfo;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=issuer.d.ts.map