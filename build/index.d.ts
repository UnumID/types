/// <reference types="node" />
import { Literal, Static, Union } from "runtypes";
import { SemVer } from 'semver';
import { UnsignedPresentation, Presentation as PresentationPb } from "./protos/presentation";
import { PresentationRequestOptions as PresentationRequestOptionsPb, UnsignedPresentationRequest as UnsignedPresentationRequestPb, PresentationRequest as PresentationRequestPb } from "./protos/presentationRequest";
import { DidDocument as DidDocumentPb, SignedDidDocument as SignedDidDocumentPb, DidDocumentService, UnsignedDID, DID as DIDPb, UserDidAssociation as UserDidAssociationPb, HolderOptions as HolderOptionsPb, PublicKeyInfoUpdateOptions, DidDocumentPatchOptions as DidDocumentPatchOptionsPb } from "./protos/didDocument";
import { Proof as ProofPb } from "./protos/proof";
import { UnsignedCredential as UnsignedCredentialPb, Credential as CredentialPb, CredentialRequest, CredentialStatusInfo as CredentialStatusInfoPb, CredentialStatusesOptions as CredentialStatusesOptionsPb, IssueCredentialOptions, IssueCredentialsOptions, EncryptedCredential as EncryptedCredentialPb, EncryptedCredentialOptions as EncryptedCredentialOptionsPb, EncryptedCredentialEnriched as EncryptedCredentialEnrichedPb, UnsignedSubjectCredentialRequests, SubjectCredentialRequests as SubjectCredentialRequestsPb, SubjectCredentialRequestsDto as SubjectCredentialRequestsDtoPb, CredentialsIssuedResponse, CredentialStatus, RevokeAllCredentials, UnsignedRevokeAllCredentials, SubjectCredentialRequestsEnrichedDto as SubjectCredentialRequestsEnrichedDtoPb } from "./protos/credential";
import { KeyPair, KeyPairSet, EncryptedData as EncryptedDataPb, EncryptedKey, RSAPadding, PublicKeyInfo as PublicKeyInfoPb, UnsignedString, SignedString } from "./protos/crypto";
import { HolderAppInfo } from "./protos/holderApp";
import { PresentationRequestEnriched as PresentationRequestEnrichedPb, PresentationRequestDisplayMessage } from "./protos/presentationRequestEnriched";
import { VerifierInfo as VerifierInfoPb, Verifier as VerifierPb, VerifierOptions as VerifierOptionsPb, RegisterVerifierOptions } from "./protos/verifier";
import { SubjectAbsentCredentials, SubjectCredentialsAbsentDto, SubjectCredentialIssuerInfoDto } from "./protos/subject";
import { IssuerInfo, Issuer as IssuerPb, IssuerOptions as IssuerOptionsPb } from "./protos/issuer";
import { SchemaPresentationRequestDto, SchemaAttributesRequestsDto, PresentationSchemaAttributes, PresentationSchema, CredentialSchemaData, SchemaGroupings, SchemaPresentationDto as SchemaPresentationDtoPb, SchemaAttributesDto } from "./protos/schema";
/**
 * Note the proto defined types import with a 'Pb' suffix that also have older, vanilla ts types defined.
 * The "Pb" serves to differentiate until we can ditch the legacy ts defined types.
 */
export { UnsignedPresentation, PresentationPb, };
export { DidDocumentPb, DidDocumentService, SignedDidDocumentPb, UnsignedDID, DIDPb, UserDidAssociationPb, PublicKeyInfoUpdateOptions };
export { UnsignedPresentationRequestPb, PresentationRequestPb, };
export { IssueCredentialOptions, IssueCredentialsOptions, CredentialStatusInfoPb, CredentialStatus, CredentialRequest, UnsignedCredentialPb, CredentialPb, EncryptedCredentialPb, EncryptedCredentialOptionsPb, EncryptedCredentialEnrichedPb, CredentialsIssuedResponse, UnsignedRevokeAllCredentials, RevokeAllCredentials, UnsignedSubjectCredentialRequests, SubjectCredentialRequestsEnrichedDtoPb, };
export { PresentationRequestDisplayMessage };
export { EncryptedKey, RSAPadding, UnsignedString, SignedString, KeyPair, KeyPairSet, ProofPb };
export { VerifierInfoPb, RegisterVerifierOptions, };
export { IssuerInfo, };
export { HolderAppInfo };
export { SubjectAbsentCredentials, SubjectCredentialsAbsentDto, SubjectCredentialIssuerInfoDto };
export { SchemaAttributesRequestsDto, SchemaPresentationRequestDto, PresentationSchemaAttributes, PresentationSchema, CredentialSchemaData, SchemaGroupings, SchemaAttributesDto };
/**
 * Encapsulates addition attributes to the unsigned presentation entity to create a Presentation entity.
 * Tightly coupled with UnsignedPresentation.
 * Note: extending the protobuf definition to enforce attribute existence.
 */
export interface Presentation extends PresentationPb {
    proof: Proof;
}
export interface SchemaPresentationDto extends Omit<SchemaPresentationDtoPb, 'groupings'> {
    groupings: SchemaGroupings;
}
/**
 * Maps Dates to strings, including nested.
 * Effectively equals the type change caused by JSON.parse(JSON.stringify(x))
 */
export declare type DatesToStrings<T> = T extends Date ? string : T extends Function ? T : {
    [k in keyof T]: DatesToStrings<T[k]>;
};
/**
 * Interface to encapsulate a base Unum Entity.
 */
export interface BaseEntity {
    uuid: string;
    createdAt: string;
    updatedAt: string;
}
/**
 * Interface to encapsulate cryptographic proof for any signed object: Credentials, Presentations, PresentationRequests.
 * Note: extending the protobuf definition to enforce attribute existence.
 */
export interface Proof extends ProofPb {
    created: Date;
}
/**
 * Interface to encapsulate cryptographic proof for any signed object: Credentials, Presentations, PresentationRequests that goes over HTTP
 */
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
 * Interface for an arbitrary number (0 to n) of string keys with values of type ClaimValue.
 */
export interface CredentialData {
    type: string;
    [claimName: string]: ClaimValue;
}
/**
 * Interface for a CredentialSchema in JSON-LD syntax with arbitrary number (0 to n) of string keys with values of type ClaimValue.
 */
export interface CredentialSchema {
    '@context': string;
    '@type': string;
    [claimName: string]: ClaimValue;
}
/**
 * Interface to encapsulate a JSON object with unknown keys
 */
export interface JSONObj {
    [key: string]: any;
}
/**
 * Interface to encapsulate relevant credential information.
 * Note: extending the protobuf definition to enforce attribute existence.
 */
export interface UnsignedCredential extends UnsignedCredentialPb {
    /**
     * As dictated by the W3 spec. ref: https://www.w3.org/TR/vc-data-model/#example-1-a-simple-example-of-a-verifiable-credential.
     */
    context: ['https://www.w3.org/2018/credentials/v1', ...string[]];
    type: ['VerifiableCredential', ...string[]];
    credentialStatus: CredentialStatus;
    issuanceDate: Date;
}
/**
 * Interface which incorporates the relevant credential information in addition to a cryptographic proof so that the Credential is verifiable.
 * Note: extending the protobuf definition to enforce attribute existence.
 */
export interface Credential extends CredentialPb {
    /**
     * As dictated by the W3 spec. ref: https://www.w3.org/TR/vc-data-model/#example-1-a-simple-example-of-a-verifiable-credential.
     */
    context: ['https://www.w3.org/2018/credentials/v1', ...string[]];
    type: ['VerifiableCredential', ...string[]];
    credentialStatus: CredentialStatus;
    issuanceDate: Date;
    proof: Proof;
}
/**
 * Extends protobuf definition to make field required
 */
export interface EncryptedData extends EncryptedDataPb {
    key: EncryptedKey;
}
/**
 * Extends protobuf definition to make fields required
 * Note: extending the protobuf definition to enforce attribute existence.
 */
export interface EncryptedCredential extends EncryptedCredentialPb {
    data: EncryptedData;
    createdAt: Date;
    updatedAt: Date;
}
/**
 * Data transfer object for a single EncryptedCredential
 * Note: extending the protobuf definition of EncryptedCredential in order to make the date fields string for json serialization
 */
export interface EncryptedCredentialDto extends Omit<EncryptedCredential, 'createdAt' | 'updatedAt' | 'expirationDate'> {
    createdAt: string;
    updatedAt: string;
    expirationDate?: string;
}
export interface EncryptedCredentialEnriched extends Omit<EncryptedCredentialEnrichedPb, 'didDocument'> {
    encryptedCredential: EncryptedCredential;
    didDocument: DidDocument;
}
/**
 * Data transfer object for a single EncryptedCredentialEnriched
 * Note: extending the protobuf definition of EncryptedCredentialEnriched in order to make the date fields string for json serialization and did document align with @context
 */
export interface EncryptedCredentialEnrichedDto extends EncryptedCredentialEnriched {
    createdAt: string;
    updatedAt: string;
}
/**
 * Data transfer object for multiple EncryptedCredentials, keyed by credential id
 */
export interface EncryptedCredentialsDto {
    encryptedCredentials: {
        [version: string]: EncryptedCredentialDto[];
    };
}
/**
 * Encapsulates addition request attributes to the general presentation request type for the purposes of sending an unsigned presentation request.
 */
export interface PresentationRequestOptions extends PresentationRequestOptionsPb {
    expiresAt: Date;
}
/**
 * Encapsulates addition request attributes to the general presentation request type for the purposes of sending an unsigned presentation request.
 */
export interface UnsignedPresentationRequest extends UnsignedPresentationRequestPb {
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
}
/**
 * Encapsulates addition request attributes to the unsigned presentation request type for the purposes of sending a signed presentation request.
 */
export interface PresentationRequest extends PresentationRequestPb {
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
    proof: Proof;
}
/**
 * Encapsulates addition request attributes to the signed presentation request type for the purposes of valid presentation request with metadata.
 */
export interface PresentationRequest extends PresentationRequestPb {
    createdAt: Date;
    updatedAt: Date;
    metadata?: string;
}
/**
 * Encapsulates necessary Issuer entity attributes during creation.
 */
export interface IssuerOptions extends Omit<IssuerOptionsPb, 'versionInfo'> {
    publicKeyInfo: Array<PublicKeyInfo>;
    versionInfo: VersionInfo[];
}
/**
 * Encapsulates necessary Verifier entity attributes during creation.
 */
export interface VerifierOptions extends Omit<VerifierOptionsPb, 'versionInfo'> {
    publicKeyInfo: PublicKeyInfo[];
    versionInfo: VersionInfo[];
}
/**
 * Encapsulates Verifier entity attributes.
 */
export interface Verifier extends Omit<VerifierPb, 'versionInfo'> {
    createdAt: Date;
    updatedAt: Date;
    versionInfo: VersionInfo[];
}
/**
 * Interface to encapsulate corresponding mappings between UnumID Mobile (aka Holder) SDK and Server SDK versions.
 *
 * Ideally the major versions should always be consist however this abstraction is in place in case we need more fine tune control between the compatible versions.
 */
export interface VersionMapping {
    /**
     * Minimum capable version. In practice it corresponds to the version header used by the Mobile SDK.
     */
    saasApiVersion: SemVer;
    /**
     * Minimum capable version
     */
    serverSdkVersion: SemVer;
}
/**
 * Interface to encapsulate how to target a customer's application version to reach a specific UnumId Server SDK version.
 */
export interface VersionInfo {
    /**
     * The information of how to target a customer's application to communication with the corresponding Server sdkVersion.
     */
    target: TargetInfo;
    /**
     * Server sdk version. Ought to be in Semver notation however opting to keep a string type for simplicity.
     */
    sdkVersion: string;
}
/**
 * Interface to encapsulate wether to use a version header or a specific url to differentiate between customer application versions.
 */
export interface TargetInfo {
    /**
     * To be able to handle generic HTTP header requirements, i.e. version, accept, appId, etc
     */
    [key: string]: any;
    /**
     * Versions denoted via a different url.
     */
    url?: string;
}
/**
 * Encapsulates Issuer entity attributes.
 */
export interface Issuer extends Omit<IssuerPb, 'versionInfo'> {
    createdAt: Date;
    updatedAt: Date;
    versionInfo: VersionInfo[];
}
/**
 * Saas supported receipt group types
 */
export declare const receiptGroupTypes: string[];
/**
 * Saas supported receipt types
 */
export declare const receiptTypes: string[];
/**
 * Encapsulates Receipt option attributes with generic type for the data variance between receipt types.
 */
export interface ReceiptOptions<T = ReceiptDataOptions> {
    type: string;
    subject?: string;
    issuer?: string;
    verifier?: string;
    group?: string;
    customer?: string;
    data: T;
}
/**
 * Encapsulates Receipt entity attributes with generic type for the data variance between receipt types.
 */
export interface Receipt<T = ReceiptDataOptions> extends ReceiptOptions<T> {
    uuid: string;
    createdAt: Date;
    updatedAt: Date;
}
/**
 * Type to encapsulate possible Receipt data fields.
 */
export interface ReceiptDataOptions {
    required?: boolean;
    expirationDate?: Date;
    subject?: string;
    credentialTypes?: string[];
    issuers?: string[];
    holderAppUuid?: string;
    uuid?: string;
    id?: string;
    version?: string;
    credentialId?: string;
    isVerified?: boolean;
    reason?: string;
    reply?: string;
    status?: CredentialStatusOptions;
    credentialIssued?: Date;
    credentialStatusUpdated?: Date;
    credentialStatusUpdatedBy?: string;
}
/**
 * Type to encapsulate specific Receipt data fields for Credential related receipts.
 */
export interface ReceiptCredentialData {
    type: string;
    version: string;
    credentialId: string;
    status?: CredentialStatusOptions;
    credentialIssued?: Date;
    credentialStatusUpdated?: Date;
    credentialStatusUpdatedBy?: string;
}
/**
 * Type to encapsulate specific Receipt data fields for PresentationRequest related receipts.
 */
export interface ReceiptPresentationRequestData {
    version: string;
    holderAppUuid: string;
    uuid: string;
    id: string;
    requestInfo: CredentialRequest[];
    expirationDate?: Date;
}
/**
 * Type to encapsulate specific Receipt data fields for the RequestReceived receipt
 */
export interface ReceiptRequestReceivedData {
    version: string;
    holderAppUuid: string;
    uuid: string;
    id: string;
    credentialTypes: string[];
    issuers: string[];
}
/**
 * Type to encapsulate specific Receipt data fields for Presentation related receipts.
 */
export interface ReceiptPresentationData {
    credentialTypes: string[];
    issuers: string[];
    version: string;
    holderAppUuid: string;
    requestUuid: string;
    requestId: string;
    subject: string;
    isVerified?: boolean;
    reason?: string;
    reply?: string;
}
/**
 * Encapsulates attributes regarding Verified Receipts
 */
export interface VerifiedReceiptDataOptions {
    isVerified: boolean;
    reason?: string;
}
/**
 * Type to encapsulate specific Receipt data fields for SubjectCredentialRequestVerified related receipts.
 */
export interface ReceiptSubjectCredentialRequestVerifiedData extends VerifiedReceiptDataOptions {
    requestInfo: CredentialRequest[];
}
/**
* Type to encapsulate specific Receipt data fields for SubjectDidDocumentVerified related receipts.
*/
export interface ReceiptSubjectDidDocumentVerifiedData extends VerifiedReceiptDataOptions {
    did: string;
}
/**
 * Encapsulates ReceiptGroup option attributes with generic type for the data variance between receipt group types.
 */
export interface ReceiptGroupOptions<T = ReceiptGroupDataOptions> {
    type: string;
    receipts: Receipt<T>[];
    subject?: string;
    issuer?: string;
    verifier?: string;
    presentationIssuers?: string[];
    credentialId?: string;
    presentationRequestId?: string;
    customer?: string;
    data: T;
}
/**
 * Encapsulates ReceiptGroup entity attributes with generic type for the data variance between receipt group types.
 */
export interface ReceiptGroup<T = ReceiptGroupDataOptions> extends ReceiptGroupOptions<T> {
    uuid: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface VerifierInfo extends Omit<VerifierInfoPb, 'encryptionPublicKey' | 'signingPublicKey'> {
    encryptionPublicKey: PublicKeyInfo;
    signingPublicKey: PublicKeyInfo;
}
/**
 * Type to encapsulate possible ReceiptGroup data fields.
 */
export interface ReceiptGroupDataOptions {
    type?: string;
    credentialIssued?: Date;
    status: CredentialStatusOptions;
    credentialStatusUpdated?: Date;
    credentialStatusUpdatedBy?: string;
    credentialRequestInfo?: CredentialRequestInfo[];
    requestReceived?: Date;
    expirationDate?: Date;
    verifier?: VerifierInfo;
    holderApp?: Pick<HolderApp, 'name' | 'uuid'>;
    isVerified?: boolean;
    credentialInfo?: CredentialReceiptInfo[];
}
/**
 * Type to encapsulate a Credential ReceiptGroup's data attribute
 */
export interface ReceiptGroupCredentialData {
    issuer: IssuerInfo;
    type: string;
    version: string;
    credentialId: string;
    status: CredentialStatusOptions;
    credentialIssued: Date;
    credentialReceived?: Date;
    credentialStatusUpdated?: Date;
    credentialStatusUpdatedBy?: string;
}
/**
 * Type to encapsulate a PresentationRequest ReceiptGroup's data attribute
 */
export interface ReceiptGroupPresentationRequestData {
    credentialRequestInfo: CredentialRequestInfo[];
    requestReceived?: Date;
    expirationDate?: Date;
    verifier: Pick<VerifierInfo, 'did' | 'name'>;
    holderApp: Pick<HolderApp, 'name' | 'uuid'>;
}
/**
 * Type to encapsulate a Presentation ReceiptGroup's data attribute
 */
export interface ReceiptGroupPresentationData {
    verifier: Pick<VerifierInfo, 'did' | 'name'>;
    holderApp: Pick<HolderApp, 'name' | 'uuid'>;
    isVerified?: boolean;
    credentialInfo?: CredentialReceiptInfo[];
}
/**
 * Type to encapsulate a Credential ReceiptGroup's credentialInfo data attribute
 */
export interface CredentialReceiptInfo {
    credentialId: string;
    issuer: IssuerInfo;
    subject: string;
    type: string;
    dateIssued: Date;
    status: CredentialStatusOptions;
}
/**
 * Type to encapsulate enriched CredentialRequest info.
 */
export interface CredentialRequestInfo {
    type: string;
    issuers: IssuerInfo[];
    required: boolean;
}
/**
 * Encapsulates HolderApp entity attributes
 */
export interface HolderApp {
    uuid: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    apiKey: string;
    isAuthorized: boolean;
    customerUuid: string;
    deeplinkButtonImg: string;
    isIos: boolean;
    apnsConfig?: string;
    appleTeamId?: string;
    appleBundleId?: string;
    appStoreUrl?: string;
    isAndroid: boolean;
    fcmConfig?: string;
    androidPackageName?: string;
    androidSHA256Fingerprints?: string;
    playStoreUrl?: string;
}
/**
 * Encapsulates FCMConfig entity attributes
 */
export interface FCMConfig extends BaseEntity {
    config: Record<string, string>;
    holderApp: string;
    bundleId: string;
}
/**
* Encapsulates APNSConfig entity attributes
*/
export interface APNSConfig extends BaseEntity {
    certificate: Buffer;
    holderApp: HolderApp;
    bundleId: string;
}
/**
 * Encapsulates Customer entity attributes
 */
export interface Customer {
    uuid: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    isAuthorized: boolean;
    apiKey: string;
}
/**
 * Encapsulates Subject entity attributes
 */
export interface Subject {
    uuid: string;
    createdAt: string;
    updatedAt: string;
    did: string;
    isAuthorized: boolean;
    updateKey: string;
    customerUuid: string;
    holderAppUuid: string;
    holders: HolderDto[];
}
/**
 * Encapsulates Holder types
 */
export declare type HolderType = 'web' | 'mobile';
/**
 * An options object used to create a Holder entity
 */
export interface HolderOptions extends HolderOptionsPb {
    type?: HolderType;
}
/**
 * Encapsulates possible Holder statuses
 */
export declare type HolderStatus = 'active' | 'deactivated';
/**
 * Encapsulates Holder entity attributes
 */
export interface HolderDto {
    uuid: string;
    createdAt: string;
    updatedAt: string;
    signingKeyId: string;
    encryptionKeyId: string;
    holderAppUuid: string;
    subjectDid: string;
    type?: HolderType;
    browserName?: string;
    deviceOs?: string;
    deviceModel?: string;
    statusUpdatedAt: string;
    status: HolderStatus;
}
/**
 * An options object used to create a Subject entity
 */
export interface SubjectOptions {
    publicKeyInfo: PublicKeyInfo[];
    holderOptions?: HolderOptions;
}
/**
 * The response body returned when creating or patching a Subject
 */
export interface SubjectPostDto extends Subject {
    holder: HolderDto;
}
/**
 * An options object used to update a Did Document by adding or updating one or more public keys
 * It must contain the subject's updateKey and a signature by either one of the subject's existing
 * signing keys or another key to which the correct authority has been delegated
 */
export interface DidDocumentPatchOptions extends Omit<DidDocumentPatchOptionsPb, 'proof' | 'holderOptions'> {
    proof: ProofPb;
    holderOptions?: HolderOptions;
}
/**
 * Response returned from the DidDocument PATCH operation
 * It will include a new holder, if one was created
 */
export interface DidDocumentPatchDto {
    success: boolean;
    holder?: HolderDto;
}
/**
 * Type to encapsulate generic response from SaaS API endpoints which return resources keyed by version.
 */
export declare type VersionedDto<N extends string, T = any> = {
    [n in N]: {
        [version: string]: T;
    };
};
/**
 * Encapsulates presentation request attributes as they are export interface PresentationRequestEnriched extends Omit<PresentationRequestEnrichedPb, 'issuers'> { from Unum ID saas.
 * Note: extending the protobuf definition to enforce attribute existence.
 */
export interface PresentationRequestEnriched extends Omit<PresentationRequestEnrichedPb, 'issuers'> {
    presentationRequest: PresentationRequest;
    verifier: VerifierInfo;
    issuers: IssuerInfoMap;
    displayMessage: PresentationRequestDisplayMessage;
    holderApp: HolderAppInfo;
}
/**
 * Type to encapsulate the response body returned when a PresentationRequest is created
 * AKA PresentationRequestEnriched
 * @deprecated only used in legacy saas service PresentationRequestRepo that needs to be removed (and can be now on v4)
 */
export interface PresentationRequestPostDto {
    presentationRequest: PresentationRequest;
    verifier: Pick<Verifier, 'did' | 'name' | 'url'>;
    issuers: Record<string, Pick<Issuer, 'did' | 'name'>>;
    holderApp: Pick<HolderApp, 'name' | 'deeplinkButtonImg'>;
    deeplink: string;
    qrCode: string;
}
/**
 * Type to encapsulate a PresentationRequest Data Transfer Object get response used in interfacing services.
 * AKA PresentationRequestEnriched
 * @deprecated only used in legacy saas service PresentationRequestRepo that needs to be removed (and can be now on v4)
 */
export interface PresentationRequestDto {
    presentationRequest: WithVersion<PresentationRequest>;
    verifier: VerifierInfo;
    issuers: IssuerInfoMap;
    holderApp?: Pick<HolderApp, 'name' | 'deeplinkButtonImg' | 'appStoreUrl' | 'playStoreUrl'>;
    deeplink?: string;
    qrCode?: string;
    displayMessage: PresentationRequestDisplayMessage;
}
/**
 * Type to encapsulate a Protobuf PresentationRequest Data Transfer Object get response used in interfacing services.
 * Note: this is not used when dealing with json / http network interfaces.
 */
export interface PresentationRequestDtoPb {
    presentationRequest: PresentationRequest;
    verifier: VerifierInfo;
    issuers: IssuerInfoMap;
}
/**
 * Interface to encapsulate an ApiKey Entity from Unum ID's SaaS.
 */
export interface ApiKey {
    uuid: string;
    createdAt: string;
    updatedAt: string;
    type: string;
    key: string;
    customerUuid: string;
    name: string;
    cardImageUrl?: string;
}
/**
 * Interface to encapsulate information related to a public key.
 * Note: extending the protobuf definition to enforce attribute existence.
 */
export interface PublicKeyInfo extends PublicKeyInfoPb {
    encoding: 'pem' | 'base58';
    status: 'valid' | 'invalid';
    createdAt: Date;
    updatedAt: Date;
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
    service: DidDocumentService[];
}
/**
 * Interface to encapsulate a signed Subject Did Document.
 * Note: it breaks the name convention of the singed type counterpart being the simpler name of the two, however because the unsigned DidDocument definition was claimed first, this is an exception to the rule.
 */
export interface SignedDidDocument extends SignedDidDocumentPb {
    context: ['https://www.w3.org/ns/did/v1', ...string[]];
    created: Date;
    updated: Date;
    publicKey: PublicKeyInfo[];
    proof: Proof;
}
/**
 * Type to encapsulate supported key types in did documents.
 */
export declare type DidKeyType = 'secp256r1' | 'RSA';
/**
 * Encapsulates necessary information relating to the encrypted credential data during creation.
 */
export interface EncryptedCredentialOptions extends EncryptedCredentialOptionsPb {
    data: EncryptedData;
}
/**
 * Encapsulates a map of Issuer metadata attributes keyed on the corresponding did.
 */
export interface IssuerInfoMap {
    [did: string]: IssuerInfo;
}
/**
 * Type to encapsulate an encrypted presentation sent from the UnumID SaaS
 */
export interface EncryptedPresentation {
    presentationRequestInfo: PresentationRequestEnriched;
    encryptedPresentation: EncryptedData;
}
/**
 * Type to encapsulate the non sensitive decrypted presentation information to help enrich UnumID's SaaS reporting dashboard.
 */
export interface PresentationReceiptInfo {
    presentationUuid: string;
    subjectDid: string;
    verifierDid: string;
    holderApp: string;
    presentationRequestUuid?: string;
    presentationRequestId: string;
    credentialTypes?: string[];
    issuers?: IssuerInfoMap;
}
/**
 * A readonly list of push notification providers.
 */
export declare const pushProviders: readonly ["FCM", "APNS"];
/**
 * A type encapsulating all possible push provider values.
 */
export declare type PushProvider = typeof pushProviders[number];
/**
 * Interface encapsulating an individual push notification token/identifier and its provider.
 */
export interface PushToken {
    value: string;
    /**
     * If not included, the SaaS will attempt to determine the provider based on the token value.
     */
    provider?: PushProvider;
}
/**
 * Interface encapsulating options for sending push notifications via the SaaS.
 */
export interface PushNotificationOptions {
    /**
     * The deep link to be sent as a push notification.
     */
    deeplink: string;
    /**
     * PushToken(s) identifying the app + provider a notification should be sent to.
     */
    token: PushToken | PushToken[];
    /**
     * The holder app to send the notification to.
     */
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
/**
 * Interface to encapsulate information for updating many CredentialStatuses simultaneously
 */
export interface CredentialStatusesOptions extends CredentialStatusesOptionsPb {
    status: CredentialStatusOptions;
}
/**
 * Interface to encapsulate the parameters needed for Email or SMS message input.
 * Thanks to created a templated message from the deeplink's presentation request uuid and in turn the corresponding verifier, no custom message content needed.
 */
export interface ExternalChannelMessageInput {
    /**
     * Email address or phone number.
     */
    to: string;
    deeplink: string;
}
/**
 * Interface to enforce the presence of the DID attribute on the UserDidAssociationPb protobuf definition.
 */
export interface UserDidAssociation extends Omit<UserDidAssociationPb, 'did'> {
    did: DID;
}
/**
 * Interface to enforce the presence of the Proof attribute on the DID protobuf definition.
 */
export interface DID extends Omit<DIDPb, 'proof'> {
    proof: Proof;
}
/**
 * Interface to enforce the presence of the Proof and CredentialRequest[] attribute on the SubjectCredentialRequests protobuf definition
 */
export interface SubjectCredentialRequests extends Omit<SubjectCredentialRequestsPb, 'proof' | 'credentialRequests'> {
    credentialRequests: CredentialRequest[];
    proof: Proof;
}
/**
 * Interface to enforce the presence of the SubjectCredentialRequests attribute on the SubjectCredentialRequestsDto protobuf definition.
 */
export interface SubjectCredentialRequestsDto extends Omit<SubjectCredentialRequestsDtoPb, 'credentialRequests'> {
    subjectCredentialRequests: SubjectCredentialRequests;
}
/**
 * Interface to encapsulate the combined functionality of user DID association with  subject credential requests.
 *
 * Note: userDidAssociation is optional because will not always be necessary. However is needed for the initial credential requests in order for the customer's user to get an associated DID.
 * Opted to include as part of the credential requests to eliminate the possibility for a user did / credential request race condition.
 *
 * Note: credentialRequestsInfo is optional becuase this type can be used strictly for userDidAssocation, despite its name. We opted to keep this functionality under the SubjectCredentialRequet
 * flow for simplicity of customers implementation. They only have to implement one endpoint in this manner than can perform in either manner.
 *
 * Interface to enforce the presence of the SubjectCredentialRequestsDto attribute on the SubjectCredentialRequestsEnrichedDto protobuf definition and
 * the optional UserDidAssociation with, when present, enforces the presence of Proof attribute on the UserDidAssociation protobuf definition.
 */
export interface SubjectCredentialRequestsEnrichedDto extends Omit<SubjectCredentialRequestsEnrichedDtoPb, 'credentialRequestsInfo' | 'userDidAssociation'> {
    credentialRequestsInfo?: SubjectCredentialRequestsDto;
    userDidAssociation?: UserDidAssociation;
}
/**
 * Interface to encapsulate the response that the UnumID SaaS is expecting after forwarding the encrypted presentation to the verifier app for verification.
 * Notably it is not the DecryptedPresentation type from the Server SDK returns because the SaaS to never deals with the plaintext presentations.
 */
export interface VerificationResponse {
    isVerified: boolean;
    type: 'VerifiablePresentation' | 'DeclinedPresentation';
    presentationReceiptInfo: PresentationReceiptInfo;
}
/**
 * Helper which adds a named key with a specific value type to an existing type.
 */
export declare type WithKeyAndValue<T, K extends string, V> = T & Record<K, V>;
/**
 * Helper type which adds a version string.
 */
export declare type WithVersion<T> = WithKeyAndValue<T, 'version', string>;
/**
 * Type to encapsulate result from Unum ID SaaS feather service upon a query with pagination
 */
export interface PaginatedUnumDto<T> {
    total: number;
    limit: number;
    skip: number;
    data: T[];
}
/**
 * extends protobuf definition to make Date fields required
 * Note: extending the protobuf definition to enforce attribute existence.
 */
export interface CredentialStatusInfo extends CredentialStatusInfoPb {
    createdAt: Date;
    updatedAt: Date;
}
/**
 * A mapping of credentialIds to the corresponding CredentialStatus
 */
export interface CredentialIdToStatusMap {
    [credentialId: string]: CredentialStatusInfo;
}
//# sourceMappingURL=index.d.ts.map