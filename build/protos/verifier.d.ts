import _m0 from "protobufjs/minimal";
import { VersionInfo } from "./versionInfo";
import { PublicKeyInfo } from "./crypto";
export declare const protobufPackage = "verifier.v1";
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
/** Object to encapsulate an VerifierOptions entity */
export interface VerifierOptions {
    publicKeyInfo: PublicKeyInfo[];
    url: string;
    versionInfo: VersionInfo[];
}
/** Object to encapsulate basic verifier info */
export interface VerifierInfo {
    did: string;
    name: string;
    encryptionPublicKey: PublicKeyInfo | undefined;
    signingPublicKey: PublicKeyInfo | undefined;
}
export interface RegisterVerifierOptions {
    url: string;
}
export declare const Verifier: {
    encode(message: Verifier, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Verifier;
    fromJSON(object: any): Verifier;
    toJSON(message: Verifier): unknown;
    fromPartial(object: DeepPartial<Verifier>): Verifier;
};
export declare const VerifierOptions: {
    encode(message: VerifierOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VerifierOptions;
    fromJSON(object: any): VerifierOptions;
    toJSON(message: VerifierOptions): unknown;
    fromPartial(object: DeepPartial<VerifierOptions>): VerifierOptions;
};
export declare const VerifierInfo: {
    encode(message: VerifierInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VerifierInfo;
    fromJSON(object: any): VerifierInfo;
    toJSON(message: VerifierInfo): unknown;
    fromPartial(object: DeepPartial<VerifierInfo>): VerifierInfo;
};
export declare const RegisterVerifierOptions: {
    encode(message: RegisterVerifierOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterVerifierOptions;
    fromJSON(object: any): RegisterVerifierOptions;
    toJSON(message: RegisterVerifierOptions): unknown;
    fromPartial(object: DeepPartial<RegisterVerifierOptions>): RegisterVerifierOptions;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=verifier.d.ts.map