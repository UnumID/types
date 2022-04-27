"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._CredentialStatusOptions = exports.pushProviders = exports.receiptTypes = exports.receiptGroupTypes = exports.SubjectCredentialIssuerInfoDto = exports.SubjectCredentialsAbsentDto = exports.SubjectCredentialsRequest = exports.UnsignedSubjectCredentialsRequest = exports.HolderAppInfo = exports.IssuerInfo = exports.VerifierInfo = exports.SignedString = exports.UnsignedString = exports.PublicKeyInfoPb = exports.ProofPb = exports.EncryptedKey = exports.PresentationRequestDisplayMessage = exports.PresentationRequestEnriched = exports.SubjectCredentialRequestsEnrichedDtoPb = exports.UnsignedSubjectCredentialRequests = exports.RevokeAllCredentials = exports.UnsignedRevokeAllCredentials = exports.CredentialsIssuedResponse = exports.RSAPadding = exports.EncryptedCredentialEnriched = exports.EncryptedCredentialOptionsPb = exports.EncryptedCredentialPb = exports.CredentialPb = exports.UnsignedCredentialPb = exports.CredentialRequestPb = exports.CredentialStatus = exports.CredentialStatusInfoPb = exports.IssueCredentialsOptions = exports.IssueCredentialOptions = exports.PresentationRequestPb = exports.UnsignedPresentationRequestPb = exports.UserDidAssociationPb = exports.DIDPb = exports.UnsignedDID = exports.SignedDidDocumentPb = exports.DidDocumentService = exports.DidDocumentPb = exports.PresentationPb = exports.UnsignedPresentationPb = void 0;
var runtypes_1 = require("runtypes");
var presentation_1 = require("./protos/presentation");
Object.defineProperty(exports, "UnsignedPresentationPb", { enumerable: true, get: function () { return presentation_1.UnsignedPresentation; } });
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
var proof_1 = require("./protos/proof");
Object.defineProperty(exports, "ProofPb", { enumerable: true, get: function () { return proof_1.Proof; } });
var credential_1 = require("./protos/credential");
Object.defineProperty(exports, "UnsignedCredentialPb", { enumerable: true, get: function () { return credential_1.UnsignedCredential; } });
Object.defineProperty(exports, "CredentialPb", { enumerable: true, get: function () { return credential_1.Credential; } });
Object.defineProperty(exports, "CredentialRequestPb", { enumerable: true, get: function () { return credential_1.CredentialRequest; } });
Object.defineProperty(exports, "CredentialStatusInfoPb", { enumerable: true, get: function () { return credential_1.CredentialStatusInfo; } });
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
Object.defineProperty(exports, "VerifierInfo", { enumerable: true, get: function () { return verifier_1.VerifierInfo; } });
var subject_1 = require("./protos/subject");
Object.defineProperty(exports, "UnsignedSubjectCredentialsRequest", { enumerable: true, get: function () { return subject_1.UnsignedSubjectCredentialsRequest; } });
Object.defineProperty(exports, "SubjectCredentialsRequest", { enumerable: true, get: function () { return subject_1.SubjectCredentialsRequest; } });
Object.defineProperty(exports, "SubjectCredentialsAbsentDto", { enumerable: true, get: function () { return subject_1.SubjectCredentialsAbsentDto; } });
Object.defineProperty(exports, "SubjectCredentialIssuerInfoDto", { enumerable: true, get: function () { return subject_1.SubjectCredentialIssuerInfoDto; } });
var issuer_1 = require("./protos/issuer");
Object.defineProperty(exports, "IssuerInfo", { enumerable: true, get: function () { return issuer_1.IssuerInfo; } });
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