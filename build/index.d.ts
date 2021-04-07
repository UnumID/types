import { Literal, Static, Union } from "runtypes";
/**
 * Interface to encapsulate cryptographic proof for any signed object: Credentials, Presentations, PresentationRequests.
 */
export interface Proof {
    created: string;
    signatureValue: string;
    type: string;
    verificationMethod: string;
    proofPurpose: string;
    unsignedValue?: string;
}
/**
 * Type to encapsulate supported claim primitives.
 */
export declare type ClaimPrimitive = string | number | boolean | Date | null;
/**
 * Type to encapsulate an array of ClaimValues.
 */
export declare type ClaimList = ClaimValue[];
/**
 * Interface to encapsulate an arbitrary number (0 to n) of string keys with values of type ClaimValue.
 */
export declare type ClaimDict = {
    [key: string]: ClaimValue;
};
/**
 * Type to encapsulate valid ClaimValue types.
 */
export declare type ClaimValue = ClaimPrimitive | ClaimList | ClaimDict;
/**
 * Interface to associate an id attribute to an arbitrary number (0 to n) of string keys with values of type ClaimValue.
 */
export interface CredentialSubject {
    id: string;
    [claimName: string]: ClaimValue;
}
/**
 * Interface to encapsulate relevant credential information.
 */
export interface UnsignedCredential {
    '@context': ['https://www.w3.org/2018/credentials/v1', ...string[]];
    credentialSubject: CredentialSubject;
    credentialStatus: {
        id: string;
        type: string;
    };
    issuer: string;
    type: ['VerifiableCredential', ...string[]];
    id: string;
    issuanceDate: Date;
    expirationDate?: Date;
}
/**
 * Interface which incorporates the relevant credential information in addition to a cryptographic proof so that the Credential is verifiable.
 */
export interface Credential extends UnsignedCredential {
    proof: Proof;
}
/**
 * Encapsulates a verifiable credential attributes.
 */
export interface VerifiableCredential {
    ['@context']: ['https://www.w3.org/2018/credentials/v1', ...string[]];
    id: string;
    credentialSubject: any;
    credentialStatus: {
        id: string;
        type: string;
    };
    issuer: string;
    type: ['VerifiableCredential', ...string[]];
    issuanceDate: Date;
    expirationDate?: Date;
    proof: Proof;
}
/**
 * Encapsulates an unsigned presentation attributes.
 */
export interface UnsignedPresentation {
    '@context': ['https://www.w3.org/2018/credentials/v1', ...string[]];
    type: ['VerifiablePresentation', ...string[]];
    verifiableCredentials: VerifiableCredential[];
    presentationRequestUuid: string;
    uuid?: string;
}
/**
 * Encapsulates addition attributes to the unsigned presentation entity to create a Presentation entity.
 */
export interface Presentation extends UnsignedPresentation {
    proof: Proof;
}
/**
 * Encapsulates attributes for a presentation request declined.
 */
export interface NoPresentation {
    type: ['NoPresentation', ...string[]];
    proof: Proof;
    holder: string;
    presentationRequestUuid: string;
}
export declare type PresentationOrNoPresentation = Presentation | NoPresentation;
export interface CredentialRequest {
    type: string;
    issuers: string[];
    required?: boolean;
}
export interface PresentationRequestOptions {
    credentialRequests: CredentialRequest[];
    createdAt?: Date;
    updatedAt?: Date;
    expiresAt?: Date;
    holderAppUuid: string;
    metadata?: any;
    verifier: string;
}
/**
 * Encapsulates addition request attributes to the general presentation request type for the purposes of sending an unsigned presentation request.
 */
export interface UnsignedPresentationRequest extends PresentationRequestOptions {
    uuid: string;
}
/**
 * Encapsulates addition request attributes to the unsigned presentation request type for the purposes of sending a signed presentation request.
 */
export interface SignedPresentationRequest extends UnsignedPresentationRequest {
    proof: Proof;
}
/**
 * Encapsulates addition request attributes to the signed presentation request type for the purposes of valid presentation request with metadata.
 */
export interface PresentationRequest extends SignedPresentationRequest {
    createdAt: Date;
    updatedAt: Date;
}
/**
 * Encapsulates necessary Verifier entity attributes during creation.
 */
export interface VerifierOptions {
    name: string;
    customerUuid: string;
    publicKeyInfo: PublicKeyInfo[];
    url: string;
}
/**
 * Encapsulates Verifier entity attributes.
 */
export interface Verifier {
    did: string;
    uuid: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    customerUuid: string;
    url: string;
    isAuthorized: boolean;
}
/**
 * Encapsulates Issuer entity attributes.
 */
export interface Issuer {
    uuid: string;
    customerUuid: string;
    name: string;
    did: string;
    createdAt: Date;
    updatedAt: Date;
    isAuthorized: boolean;
}
/**
 * Type to encapsulate the post body of a Presentation Request Data Transfer Object, often used for PresentationRequest creation
 */
export interface PresentationRequestPostDto {
    presentationRequest: PresentationRequest;
    verifier: Pick<Verifier, 'did' | 'name' | 'url'>;
    issuers: Record<string, Pick<Issuer, 'did' | 'name'>>;
    deeplink: string;
    qrCode: string;
}
/**
 * Type to encapsulate a PresentationRequest Data Transfer Object get response used in interfacing services.
 */
export interface PresentationRequestDto {
    presentationRequest: PresentationRequest;
    verifier: VerifierInfo;
    issuers: IssuerInfoMap;
}
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
    key: EncryptedKey;
}
/**
 * Interface to encapsulate information related to a public key.
 */
export interface PublicKeyInfo {
    id: string;
    publicKey: string;
    encoding: 'pem' | 'base58';
    type: string;
    status: 'valid' | 'invalid';
}
/**
 * Interface to encapsulate Did Document information.
 */
export interface DidDocument {
    '@context': ['https://www.w3.org/ns/did/v1', ...string[]];
    id: string;
    created: Date;
    updated: Date;
    publicKey: PublicKeyInfo[];
    service: {
        id: string;
        serviceEndpoint: string;
        type: string;
    }[];
}
/**
 * Type to encapsulate supported key types in did documents.
 */
export declare type DidKeyType = 'secp256r1' | 'RSA';
/**
 * Encapsulates necessary information relating to the encrypted credential data during creation.
 */
export interface EncryptedCredentialOptions {
    credentialId: string;
    subject: string;
    issuer: string;
    type: string[];
    data: EncryptedData;
}
/**
 * Encapsulates necessary CredentialRequest entity attributes.
 */
export interface CredentialRequest {
    type: string;
    issuers: string[];
    required?: boolean;
}
/**
 * Encapsulates Verifier metadata attributes.
 */
export interface VerifierInfo {
    did: string;
    name: string;
    url?: string;
}
/**
 * Encapsulates Issuer metadata attributes.
 */
export interface IssuerInfo {
    did: string;
    name: string;
}
/**
 * Encapsulates a map of Issuer metadata attributes keyed on the corresponding did.
 */
export interface IssuerInfoMap {
    [did: string]: IssuerInfo;
}
/**
 * Interface for Public and Private corresponding key pair
 */
export interface KeyPair {
    privateKey: string;
    publicKey: string;
}
/**
 * Type to encapsulate an encrypted presentation sent from the UnumID SaaS
 */
export interface EncryptedPresentation {
    presentationRequest: PresentationRequestDto;
    encryptedPresentation: EncryptedData;
}
/**
 * Type to encapsulate the non sensitive decrypted presentation information to help enrich UnumID's SaaS reporting dashboard.
 */
export interface PresentationReceiptInfo {
    subjectDid: string;
    verifierDid: string;
    holderApp: string;
    credentialTypes?: string[];
    issuers?: IssuerInfoMap;
}
/**
 * Encapsulates the different push notification providers the SaaS supports.
 */
export declare type PushProvider = 'APNS' | 'FCM';
/**
 * Interface encapsulating an individual push notification token/identifier and its provider.
 */
export interface PushToken {
    value: string;
    provider: PushProvider;
}
/**
 * Interface encapsulating options for sending push notifications via the SaaS.
 */
export interface PushNotificationOptions {
    deeplink: string;
    token: PushToken;
    holderAppUuid: string;
}
/**
 * Type to encapsulate Credential status value options
 */
export declare type CredentialStatusOptions = Static<typeof _CredentialStatusOptions>;
/**
 * Credential status value options Runtype, which has the benefit of runtime type checking and guards with literals.
 * More info here: https://github.com/pelotom/runtypes
 */
export declare const _CredentialStatusOptions: Union<[Literal<"valid">, Literal<"revoked">]>;
//# sourceMappingURL=index.d.ts.map