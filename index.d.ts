export interface Proof {
  created: string;
  signatureValue: string;
  unsignedValue: string;
  type: string;
  verificationMethod: string;
  proofPurpose: string;
}

export type ClaimPrimitive = string | number | boolean | Date | null;

export type ClaimList = ClaimValue[];

export type ClaimDict = {
  [key: string]: ClaimValue
};

export type ClaimValue = ClaimPrimitive | ClaimList | ClaimDict;

interface CredentialSubject {
  id: string;
  [claimName: string]: ClaimValue;
}


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
  expiresAt: Date;
  verifier: string;
  credentialRequests: CredentialRequest[];
  proof: Proof;
  metadata?: any;
  holderAppUuid: string;
}
