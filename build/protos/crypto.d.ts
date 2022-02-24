import _m0 from "protobufjs/minimal";
import { Proof } from "./proof";
export declare const protobufPackage = "crypto.v1";
/** Enum containing all of the RSA padding types that we use */
export declare enum RSAPadding {
    PKCS = 0,
    OAEP = 1,
    UNRECOGNIZED = -1
}
export declare function rSAPaddingFromJSON(object: any): RSAPadding;
export declare function rSAPaddingToJSON(object: RSAPadding): string;
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
    rsaPadding?: RSAPadding | undefined;
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
    rsaPadding?: RSAPadding | undefined;
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
/** Object to encapsulate an unsigned String */
export interface UnsignedString {
    data: string;
}
/** Object to encapsulate a signed String */
export interface SignedString {
    data: string;
    proof: Proof | undefined;
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
export declare const UnsignedString: {
    encode(message: UnsignedString, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UnsignedString;
    fromJSON(object: any): UnsignedString;
    toJSON(message: UnsignedString): unknown;
    fromPartial(object: DeepPartial<UnsignedString>): UnsignedString;
};
export declare const SignedString: {
    encode(message: SignedString, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignedString;
    fromJSON(object: any): SignedString;
    toJSON(message: SignedString): unknown;
    fromPartial(object: DeepPartial<SignedString>): SignedString;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=crypto.d.ts.map