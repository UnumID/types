import { Literal, Static, Union } from "runtypes";
import { SemVer } from 'semver';

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
export type ClaimPrimitive = string | number | boolean | Date | null;

/**
 * Type to encapsulate an array of ClaimValues.
 */
export type ClaimList = ClaimValue[];

/**
 * Interface to encapsulate an arbitrary number (0 to n) of string keys with values of type ClaimValue.
 */
export type ClaimDict = {
  [key: string]: ClaimValue
};

/**
 * Type to encapsulate valid ClaimValue types.
 */
export type ClaimValue = ClaimPrimitive | ClaimList | ClaimDict;

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
  }
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
  credentialStatus: { id: string, type: string };
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
  presentationRequestUuid: string;
  verifierDid: string;
  // Note: that verifiableCredential is singular but it's of array type. This is thanks to the w3 spec dictating as such, not by choice. ref: https://www.w3.org/TR/vc-data-model/#presentations-0
  verifiableCredential?: VerifiableCredential[]; // Optional, if undefined then means the presentation request was declined
  uuid?: string; // Optional wether the presentation has been persisted yet or not
}

/**
 * Encapsulates addition attributes to the unsigned presentation entity to create a Presentation entity.
 */
export interface Presentation extends UnsignedPresentation {
  proof: Proof;
}

// /**
//  * Encapsulates addition attributes to the unsigned presentation entity to create a Presentation entity.
//  */
// // DEPRECATED
//  export interface PresentationDeprecated {
//   '@context': ['https://www.w3.org/2018/credentials/v1', ...string[]];
//   proof: Proof;
//   type: ['VerifiablePresentation', ...string[]];
//   presentationRequestUuid: string;
//   verifierDid: string;
//   verifiableCredentials: VerifiableCredential[];
//   uuid?: string; // Optional wether the presentation has been persisted yet or not
// }

// /**
//  * Encapsulates attributes for a presentation request declined.
//  */
// // DEPRECATED
// export interface NoPresentationDeprecated {
//   type: ['NoPresentation', ...string[]];
//   proof: Proof;
//   holder: string;
//   presentationRequestUuid: string;
//   verifierDid: string;
// }

// export type PresentationOrNoPresentation = PresentationDeprecated | NoPresentationDeprecated;

export interface CredentialRequest {
  type: string; // the string matching the desire credential type
  issuers: string[]; // list of acceptable issuer DIDs that have issued the credential
  required?: boolean; // to denote wether this particular credential is required in response to the PresentationRequest. Defaults behavior resolves this to true.
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
  versionInfo: VerifierInfo[],
  isAuthorized: boolean;
}

// const presentationBreakingChange: VersionMapping = {
//   saasApiVersion: new SemVer('2.0.0'),
//   // holderSdkVersion: '2.0.0',
//   serverSdkVersion: new SemVer('2.0.0')
  
// }

// // /**
// //  * Map holder sdk versions (via request "version" headers) to server sdk versions
// //  */
// // export const ServerVersionMapping = {
// //   '2.0.0': '2.0.0' // version 2.0.0 of the SaaS API maps to version 2.0.0 of the Server SDK.
// // }

// /**
//  * Map the saas api version to corresponding version mapping
//  */
// export const versionMapping = {
//   '2.0.0': presentationBreakingChange
// }


export interface VersionMapping {
  saasApiVersion: SemVer, // minimum capable version 
  // holderSdkVersion: string, // minimum capable version 
  serverSdkVersion: SemVer // minimum capable version 
}

export interface VersionInfo {
  target: TargetInfo,
  sdkVersion: SemVer // server sdk version
  // version: VersionMapping
}

export interface TargetInfo {
  version?: string, // api version
  url?: string
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
 * Encapsulates HolderApp entity attributes
 */
export interface HolderApp {
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  uriScheme: string;
  isAuthorized: boolean;
  customerUuid: string;
  deeplinkButtonImg: string;
}

/**
 * Type to encapsulate the response body returned when a PresentationRequest is created
 */
export interface PresentationRequestPostDto {
  presentationRequest: PresentationRequest;
  verifier: Pick<Verifier, 'did' | 'name' | 'url'>;
  issuers: Record<string, Pick<Issuer, 'did' | 'name'>>;
  holderApp: Pick<HolderApp, 'name' | 'uriScheme' | 'deeplinkButtonImg'>;
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
export type DidKeyType = 'secp256r1' | 'RSA';

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
  presentationRequestInfo: PresentationRequestDto; // Going with trailing "Info" to avoid confusing references like presentationRequest.presentationRequest.uuid
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
 * A readonly list of push notification providers.
 */
export const pushProviders = ['FCM', 'APNS'] as const;

/**
 * A type encapsulating all possible push provider values.
 */
export type PushProvider = typeof pushProviders[number];

/**
 * Interface encapsulating an individual push notification token/identifier and its provider.
 */
export interface PushToken {
  value: string;
  provider?: PushProvider; // if not included, the SaaS will attempt to determine the provider based on the token value
}

/**
 * Interface encapsulating options for sending push notifications via the SaaS.
 */
export interface PushNotificationOptions {
  deeplink: string; // the deep link to be sent as a push notification
  token: PushToken | PushToken[]; // PushToken(s) identifying the app + provider a notification should be sent to
  holderAppUuid: string; // the holder app to send the notification to
}

/**
 * Type to encapsulate Credential status value options 
 */
export type CredentialStatusOptions = Static<typeof _CredentialStatusOptions>

/**
 * Credential status value options Runtype, which has the benefit of runtime type checking and guards with literals.
 * More info here: https://github.com/pelotom/runtypes
 */
 export const _CredentialStatusOptions = Union(
    Literal('valid'),
    Literal('revoked')
  );

  /**
   * Interface to encapsulate the parameters needed for Email or SMS message input.
   * Thanks to created a templated message from the deeplink's presentation request uuid and in turn the corresponding verifier, no custom message content needed.
   */
  export interface ExternalChannelMessageInput {
    to: string; // email address or phone number
    deeplink: string;
  }
