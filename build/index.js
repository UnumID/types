"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.receiptGroupTypes = exports.SchemaAttributesDto = exports.SchemaGroupings = exports.CredentialSchemaData = exports.PresentationSchema = exports.PresentationSchemaAttributes = exports.SchemaPresentationRequestDto = exports.SchemaAttributesRequestsDto = exports.SubjectCredentialIssuerInfoDto = exports.SubjectCredentialsAbsentDto = exports.SubjectAbsentCredentials = exports.HolderAppInfo = exports.IssuerInfo = exports.VerifierInfoPb = exports.SignedString = exports.UnsignedString = exports.PublicKeyInfoPb = exports.ProofPb = exports.EncryptedKey = exports.PresentationRequestDisplayMessage = exports.PresentationRequestEnriched = exports.SubjectCredentialRequestsEnrichedDtoPb = exports.UnsignedSubjectCredentialRequests = exports.RevokeAllCredentials = exports.UnsignedRevokeAllCredentials = exports.CredentialsIssuedResponse = exports.RSAPadding = exports.EncryptedCredentialEnriched = exports.EncryptedCredentialOptionsPb = exports.EncryptedCredentialPb = exports.CredentialPb = exports.UnsignedCredentialPb = exports.CredentialRequest = exports.CredentialStatusesOptionsPb = exports.CredentialStatusOptionsPb = exports.CredentialStatus = exports.CredentialStatusInfoPb = exports.IssueCredentialsOptions = exports.IssueCredentialOptions = exports.PresentationRequestPb = exports.UnsignedPresentationRequestPb = exports.PublicKeyInfoUpdateOptions = exports.UserDidAssociationPb = exports.DIDPb = exports.UnsignedDID = exports.SignedDidDocumentPb = exports.DidDocumentService = exports.DidDocumentPb = exports.PresentationPb = exports.UnsignedPresentation = void 0;
exports._CredentialStatusOptions = exports.pushProviders = exports.receiptTypes = void 0;
var runtypes_1 = require("runtypes");
var presentation_1 = require("./protos/presentation");
Object.defineProperty(exports, "UnsignedPresentation", { enumerable: true, get: function () { return presentation_1.UnsignedPresentation; } });
Object.defineProperty(exports, "PresentationPb", { enumerable: true, get: function () { return presentation_1.Presentation; } });
var presentationRequest_1 = require("./protos/presentationRequest");
Object.defineProperty(exports, "UnsignedPresentationRequestPb", { enumerable: true, get: function () { return presentationRequest_1.UnsignedPresentationRequest; } });
Object.defineProperty(exports, "PresentationRequestPb", { enumerable: true, get: function () { return presentationRequest_1.PresentationRequest; } });
var didDocument_1 = require("./protos/didDocument");
Object.defineProperty(exports, "DidDocumentPb", { enumerable: true, get: function () { return didDocument_1.DidDocument; } });
Object.defineProperty(exports, "SignedDidDocumentPb", { enumerable: true, get: function () { return didDocument_1.SignedDidDocument; } });
Object.defineProperty(exports, "DidDocumentService", { enumerable: true, get: function () { return didDocument_1.DidDocumentService; } });
Object.defineProperty(exports, "UnsignedDID", { enumerable: true, get: function () { return didDocument_1.UnsignedDID; } });
Object.defineProperty(exports, "DIDPb", { enumerable: true, get: function () { return didDocument_1.DID; } });
Object.defineProperty(exports, "UserDidAssociationPb", { enumerable: true, get: function () { return didDocument_1.UserDidAssociation; } });
Object.defineProperty(exports, "PublicKeyInfoUpdateOptions", { enumerable: true, get: function () { return didDocument_1.PublicKeyInfoUpdateOptions; } });
var proof_1 = require("./protos/proof");
Object.defineProperty(exports, "ProofPb", { enumerable: true, get: function () { return proof_1.Proof; } });
var credential_1 = require("./protos/credential");
Object.defineProperty(exports, "UnsignedCredentialPb", { enumerable: true, get: function () { return credential_1.UnsignedCredential; } });
Object.defineProperty(exports, "CredentialPb", { enumerable: true, get: function () { return credential_1.Credential; } });
Object.defineProperty(exports, "CredentialRequest", { enumerable: true, get: function () { return credential_1.CredentialRequest; } });
Object.defineProperty(exports, "CredentialStatusInfoPb", { enumerable: true, get: function () { return credential_1.CredentialStatusInfo; } });
Object.defineProperty(exports, "CredentialStatusOptionsPb", { enumerable: true, get: function () { return credential_1.CredentialStatusOptions; } });
Object.defineProperty(exports, "CredentialStatusesOptionsPb", { enumerable: true, get: function () { return credential_1.CredentialStatusesOptions; } });
Object.defineProperty(exports, "IssueCredentialOptions", { enumerable: true, get: function () { return credential_1.IssueCredentialOptions; } });
Object.defineProperty(exports, "IssueCredentialsOptions", { enumerable: true, get: function () { return credential_1.IssueCredentialsOptions; } });
Object.defineProperty(exports, "EncryptedCredentialPb", { enumerable: true, get: function () { return credential_1.EncryptedCredential; } });
Object.defineProperty(exports, "EncryptedCredentialOptionsPb", { enumerable: true, get: function () { return credential_1.EncryptedCredentialOptions; } });
Object.defineProperty(exports, "EncryptedCredentialEnriched", { enumerable: true, get: function () { return credential_1.EncryptedCredentialEnriched; } });
Object.defineProperty(exports, "UnsignedSubjectCredentialRequests", { enumerable: true, get: function () { return credential_1.UnsignedSubjectCredentialRequests; } });
Object.defineProperty(exports, "CredentialsIssuedResponse", { enumerable: true, get: function () { return credential_1.CredentialsIssuedResponse; } });
Object.defineProperty(exports, "CredentialStatus", { enumerable: true, get: function () { return credential_1.CredentialStatus; } });
Object.defineProperty(exports, "RevokeAllCredentials", { enumerable: true, get: function () { return credential_1.RevokeAllCredentials; } });
Object.defineProperty(exports, "UnsignedRevokeAllCredentials", { enumerable: true, get: function () { return credential_1.UnsignedRevokeAllCredentials; } });
Object.defineProperty(exports, "SubjectCredentialRequestsEnrichedDtoPb", { enumerable: true, get: function () { return credential_1.SubjectCredentialRequestsEnrichedDto; } });
var crypto_1 = require("./protos/crypto");
Object.defineProperty(exports, "EncryptedKey", { enumerable: true, get: function () { return crypto_1.EncryptedKey; } });
Object.defineProperty(exports, "RSAPadding", { enumerable: true, get: function () { return crypto_1.RSAPadding; } });
Object.defineProperty(exports, "PublicKeyInfoPb", { enumerable: true, get: function () { return crypto_1.PublicKeyInfo; } });
Object.defineProperty(exports, "UnsignedString", { enumerable: true, get: function () { return crypto_1.UnsignedString; } });
Object.defineProperty(exports, "SignedString", { enumerable: true, get: function () { return crypto_1.SignedString; } });
var holderApp_1 = require("./protos/holderApp");
Object.defineProperty(exports, "HolderAppInfo", { enumerable: true, get: function () { return holderApp_1.HolderAppInfo; } });
var presentationRequestEnriched_1 = require("./protos/presentationRequestEnriched");
Object.defineProperty(exports, "PresentationRequestEnriched", { enumerable: true, get: function () { return presentationRequestEnriched_1.PresentationRequestEnriched; } });
Object.defineProperty(exports, "PresentationRequestDisplayMessage", { enumerable: true, get: function () { return presentationRequestEnriched_1.PresentationRequestDisplayMessage; } });
// import { VerifierInfo as VerifierInfoPb } from "./protos/verifier";
var verifier_1 = require("./protos/verifier");
Object.defineProperty(exports, "VerifierInfoPb", { enumerable: true, get: function () { return verifier_1.VerifierInfo; } });
var subject_1 = require("./protos/subject");
Object.defineProperty(exports, "SubjectAbsentCredentials", { enumerable: true, get: function () { return subject_1.SubjectAbsentCredentials; } });
Object.defineProperty(exports, "SubjectCredentialsAbsentDto", { enumerable: true, get: function () { return subject_1.SubjectCredentialsAbsentDto; } });
Object.defineProperty(exports, "SubjectCredentialIssuerInfoDto", { enumerable: true, get: function () { return subject_1.SubjectCredentialIssuerInfoDto; } });
var issuer_1 = require("./protos/issuer");
Object.defineProperty(exports, "IssuerInfo", { enumerable: true, get: function () { return issuer_1.IssuerInfo; } });
var schema_1 = require("./protos/schema");
Object.defineProperty(exports, "SchemaPresentationRequestDto", { enumerable: true, get: function () { return schema_1.SchemaPresentationRequestDto; } });
Object.defineProperty(exports, "SchemaAttributesRequestsDto", { enumerable: true, get: function () { return schema_1.SchemaAttributesRequestsDto; } });
Object.defineProperty(exports, "PresentationSchemaAttributes", { enumerable: true, get: function () { return schema_1.PresentationSchemaAttributes; } });
Object.defineProperty(exports, "PresentationSchema", { enumerable: true, get: function () { return schema_1.PresentationSchema; } });
Object.defineProperty(exports, "CredentialSchemaData", { enumerable: true, get: function () { return schema_1.CredentialSchemaData; } });
Object.defineProperty(exports, "SchemaGroupings", { enumerable: true, get: function () { return schema_1.SchemaGroupings; } });
Object.defineProperty(exports, "SchemaAttributesDto", { enumerable: true, get: function () { return schema_1.SchemaAttributesDto; } });
/**
 * Saas supported receipt group types
 */
exports.receiptGroupTypes = [
    'Credential',
    'PresentationRequest',
    'Presentation'
];
/**
 * Saas supported receipt types
 */
exports.receiptTypes = [
    'SubjectDidDocumentVerified',
    'SubjectCredentialRequestVerified',
    'CredentialIssued',
    'CredentialShared',
    'CredentialReceived',
    'RequestCreated',
    'RequestShared',
    'RequestReceived',
    'PresentationPosted',
    'PresentationSharedVerification',
    'PresentationVerified',
    'CredentialStatusChanged',
    'NotificationSent'
];
/**
 * A readonly list of push notification providers.
 */
exports.pushProviders = ['FCM', 'APNS'];
/**
 * Credential status value options Runtype, which has the benefit of runtime type checking and guards with literals.
 * More info here: https://github.com/pelotom/runtypes
 */
exports._CredentialStatusOptions = runtypes_1.Union(runtypes_1.Literal('valid'), runtypes_1.Literal('revoked'));
//# sourceMappingURL=index.js.map