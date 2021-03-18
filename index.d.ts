/**
 * Interface to encapsulate cryptographic proof for any signed object: Credentials, Presentations, PresentationRequests.
 */
export interface Proof {
  created: string;
  signatureValue: string;
  unsignedValue: string;
  type: string;
  verificationMethod: string;
  proofPurpose: string;
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
interface CredentialSubject {
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

export interface Presentation {
  '@context': ['https://www.w3.org/2018/credentials/v1', ...string[]];
  uuid: string;
  type: ['VerifiablePresentation', ...string[]];
  verifiableCredential: Credential[];
  proof: Proof;
  presentationRequestUuid: string;
}

export interface NoPresentation {
  type: ['NoPresentation', ...string[]];
  proof: Proof;
  holder: string;
  presentationRequestUuid: string;
}

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

export interface PresentationRequest {
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  expiresAt?: Date;
  verifier: string;
  credentialRequests: CredentialRequest[];
  proof: Proof;
  metadata?: any;
  holderAppUuid: string;
}

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

export interface Issuer {
  did: string;
  uuid: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  customerUuid: string;
  isAuthorized: boolean;
}

export interface PresentationRequestPostDto {
  presentationRequest: PresentationRequest;
  verifier: Pick<Verifier, 'did' | 'name' | 'url'>;
  issuers: Record<string, Pick<Issuer, 'did' | 'name'>>;
  deeplink: string;
  qrCode: string;
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