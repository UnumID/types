import _m0 from "protobufjs/minimal";
import { PublicKeyInfo } from "./crypto";
import { Proof } from "./proof";
export declare const protobufPackage = "didDocument.v1";
/** Object to encapsulate a DID document object from the saas. */
export interface DidDocument {
    context: string;
    id: string;
    created: Date | undefined;
    updated: Date | undefined;
    publicKey: PublicKeyInfo[];
    service: DidDocumentService[];
}
/** Object to encapsulate a DID document service info. */
export interface DidDocumentService {
    id: string;
    serviceEndpoint: string;
    type: string;
}
/**
 * Object to encapsulate a signed DidDocument.
 * Note: it breaks the name convention of the singed type counterpart being the simpler name of the two, however because the unsigned DidDocument definition was claimed first, this is an exception to the rule.
 */
export interface SignedDidDocument {
    context: string;
    id: string;
    created: Date | undefined;
    updated: Date | undefined;
    publicKey: PublicKeyInfo[];
    service: DidDocumentService[];
    proof: Proof | undefined;
}
/**
 * Object to encapsulate an unsigned Decentralized ID.
 * Currently only used in subjectCredentialRequest flow for the userDIDAssociation flow (proving ownership of a DID).
 */
export interface UnsignedDID {
    id: string;
}
/**
 * Object to encapsulate a signed Decentralized ID.
 * Currently only used in subjectCredentialRequest flow for the userDIDAssociation flow (proving ownership of a DID).
 */
export interface DID {
    id: string;
    proof: Proof | undefined;
}
/** Interface to encapsulate the parameters needed for associating a subject Did to an application User. */
export interface UserDidAssociation {
    /** the userCode should be a short lived, one time use user alias. */
    userCode: string;
    /** the subject did to be associated to the user. */
    did: DID | undefined;
    issuerDid: string;
}
/** An options object used to create a Holder entity */
export interface HolderOptions {
    browserName?: string | undefined;
    deviceOs?: string | undefined;
    deviceModel?: string | undefined;
    /** HolderType in ts types */
    type?: string | undefined;
}
/**
 * An options object used to update a DidDocument by adding or updating a public key
 * If the DidDocument does not include a key with the same id, a new key will be added.
 * If it does, that key will be updated
 */
export interface PublicKeyInfoUpdateOptions {
    id: string;
    /** optional, but required to add a new key */
    publicKey?: string | undefined;
    /** optional, required to add a new key */
    encoding?: string | undefined;
    /** optional, required to add a new key */
    type?: string | undefined;
    /** optional required to add a new key or update key status of an existing key. Can invaliate an existing by setting to value 'invalid' */
    status?: string | undefined;
}
/**
 * An options object used to update a Did Document by adding or updating one or more public keys
 * It must contain the subject's updateKey and a signature by either one of the subject's existing
 * signing keys or another key to which the correct authority has been delegated
 */
export interface DidDocumentPatchOptions {
    /** identifies the DidDocument to update */
    did: string;
    /** the subject's updateKey */
    updateKey: string;
    /** keys to update/add */
    publicKeyInfo: PublicKeyInfoUpdateOptions[];
    /** proof containing a signature over the updateKey by an authorized private key */
    proof: Proof | undefined;
    /** optional: metadata options for creating a new Holder, if keys are being added */
    holderOptions: HolderOptions | undefined;
}
export declare const DidDocument: {
    encode(message: DidDocument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DidDocument;
    fromJSON(object: any): DidDocument;
    toJSON(message: DidDocument): unknown;
    fromPartial(object: DeepPartial<DidDocument>): DidDocument;
};
export declare const DidDocumentService: {
    encode(message: DidDocumentService, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DidDocumentService;
    fromJSON(object: any): DidDocumentService;
    toJSON(message: DidDocumentService): unknown;
    fromPartial(object: DeepPartial<DidDocumentService>): DidDocumentService;
};
export declare const SignedDidDocument: {
    encode(message: SignedDidDocument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignedDidDocument;
    fromJSON(object: any): SignedDidDocument;
    toJSON(message: SignedDidDocument): unknown;
    fromPartial(object: DeepPartial<SignedDidDocument>): SignedDidDocument;
};
export declare const UnsignedDID: {
    encode(message: UnsignedDID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UnsignedDID;
    fromJSON(object: any): UnsignedDID;
    toJSON(message: UnsignedDID): unknown;
    fromPartial(object: DeepPartial<UnsignedDID>): UnsignedDID;
};
export declare const DID: {
    encode(message: DID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DID;
    fromJSON(object: any): DID;
    toJSON(message: DID): unknown;
    fromPartial(object: DeepPartial<DID>): DID;
};
export declare const UserDidAssociation: {
    encode(message: UserDidAssociation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserDidAssociation;
    fromJSON(object: any): UserDidAssociation;
    toJSON(message: UserDidAssociation): unknown;
    fromPartial(object: DeepPartial<UserDidAssociation>): UserDidAssociation;
};
export declare const HolderOptions: {
    encode(message: HolderOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HolderOptions;
    fromJSON(object: any): HolderOptions;
    toJSON(message: HolderOptions): unknown;
    fromPartial(object: DeepPartial<HolderOptions>): HolderOptions;
};
export declare const PublicKeyInfoUpdateOptions: {
    encode(message: PublicKeyInfoUpdateOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PublicKeyInfoUpdateOptions;
    fromJSON(object: any): PublicKeyInfoUpdateOptions;
    toJSON(message: PublicKeyInfoUpdateOptions): unknown;
    fromPartial(object: DeepPartial<PublicKeyInfoUpdateOptions>): PublicKeyInfoUpdateOptions;
};
export declare const DidDocumentPatchOptions: {
    encode(message: DidDocumentPatchOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DidDocumentPatchOptions;
    fromJSON(object: any): DidDocumentPatchOptions;
    toJSON(message: DidDocumentPatchOptions): unknown;
    fromPartial(object: DeepPartial<DidDocumentPatchOptions>): DidDocumentPatchOptions;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=didDocument.d.ts.map