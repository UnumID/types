import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "crypto.v1";
/**
 * Interface to encapsulate an encrypted key.
 * Note: This is used to encrypted an AES key using RSA so that data can be encrypted with the significantly smaller AES key.
 */
export interface EncryptedKey {
    iv: string;
    key: string;
    algorithm: string;
    did: string;
}
/**
 * Interface to encapsulate encrypted information along side its encrypted decryption key.
 * Note: please see EncryptedKey.
 */
export interface EncryptedData {
    data: string;
    key: EncryptedKey | undefined;
}
/** Object to encapsulate public key info */
export interface PublicKeyInfo {
    id: string;
    publicKey: string;
    encoding: string;
    type: string;
    status: string;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
}
/** Object to encapsulate a key pair */
export interface KeyPair {
    privateKey: string;
    publicKey: string;
}
/** Object to encapsulate a key pair set */
export interface KeyPairSet {
    signing: KeyPair | undefined;
    encryption: KeyPair | undefined;
}
export declare const EncryptedKey: {
    encode(message: EncryptedKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EncryptedKey;
    fromJSON(object: any): EncryptedKey;
    toJSON(message: EncryptedKey): unknown;
    fromPartial(object: DeepPartial<EncryptedKey>): EncryptedKey;
};
export declare const EncryptedData: {
    encode(message: EncryptedData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EncryptedData;
    fromJSON(object: any): EncryptedData;
    toJSON(message: EncryptedData): unknown;
    fromPartial(object: DeepPartial<EncryptedData>): EncryptedData;
};
export declare const PublicKeyInfo: {
    encode(message: PublicKeyInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PublicKeyInfo;
    fromJSON(object: any): PublicKeyInfo;
    toJSON(message: PublicKeyInfo): unknown;
    fromPartial(object: DeepPartial<PublicKeyInfo>): PublicKeyInfo;
};
export declare const KeyPair: {
    encode(message: KeyPair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeyPair;
    fromJSON(object: any): KeyPair;
    toJSON(message: KeyPair): unknown;
    fromPartial(object: DeepPartial<KeyPair>): KeyPair;
};
export declare const KeyPairSet: {
    encode(message: KeyPairSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeyPairSet;
    fromJSON(object: any): KeyPairSet;
    toJSON(message: KeyPairSet): unknown;
    fromPartial(object: DeepPartial<KeyPairSet>): KeyPairSet;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=crypto.d.ts.map