"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._CredentialStatusOptions = exports.pushProviders = exports.receiptTypes = exports.receiptGroupTypes = exports.HolderAppInfo = exports.VerifierInfoPb = exports.PublicKeyInfoPb = exports.ProofPb = exports.EncryptedKey = exports.PresentationRequestEnriched = exports.RevokeAllCredentials = exports.UnsignedRevokeAllCredentials = exports.CredentialsIssuedResponse = exports.SubjectCredentialRequest = exports.RSAPadding = exports.EncryptedCredentialEnriched = exports.EncryptedCredentialOptionsPb = exports.EncryptedCredentialPb = exports.CredentialPb = exports.UnsignedCredentialPb = exports.CredentialRequestPb = exports.CredentialStatus = exports.CredentialStatusInfoPb = exports.IssueCredentialsOptions = exports.IssueCredentialOptions = exports.PresentationRequestPb = exports.UnsignedPresentationRequestPb = exports.DIDPb = exports.unsignedDID = exports.SignedDidDocumentPb = exports.DidDocumentService = exports.DidDocumentPb = exports.PresentationPb = exports.UnsignedPresentationPb = void 0;
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
Object.defineProperty(exports, "unsignedDID", { enumerable: true, get: function () { return didDocument_1.unsignedDID; } });
Object.defineProperty(exports, "DIDPb", { enumerable: true, get: function () { return didDocument_1.DID; } });
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
Object.defineProperty(exports, "SubjectCredentialRequest", { enumerable: true, get: function () { return credential_1.SubjectCredentialRequest; } });
Object.defineProperty(exports, "CredentialsIssuedResponse", { enumerable: true, get: function () { return credential_1.CredentialsIssuedResponse; } });
Object.defineProperty(exports, "CredentialStatus", { enumerable: true, get: function () { return credential_1.CredentialStatus; } });
Object.defineProperty(exports, "RevokeAllCredentials", { enumerable: true, get: function () { return credential_1.RevokeAllCredentials; } });
Object.defineProperty(exports, "UnsignedRevokeAllCredentials", { enumerable: true, get: function () { return credential_1.UnsignedRevokeAllCredentials; } });
var crypto_1 = require("./protos/crypto");
Object.defineProperty(exports, "EncryptedKey", { enumerable: true, get: function () { return crypto_1.EncryptedKey; } });
Object.defineProperty(exports, "RSAPadding", { enumerable: true, get: function () { return crypto_1.RSAPadding; } });
Object.defineProperty(exports, "PublicKeyInfoPb", { enumerable: true, get: function () { return crypto_1.PublicKeyInfo; } });
var holderApp_1 = require("./protos/holderApp");
Object.defineProperty(exports, "HolderAppInfo", { enumerable: true, get: function () { return holderApp_1.HolderAppInfo; } });
var presentationRequestEnriched_1 = require("./protos/presentationRequestEnriched");
Object.defineProperty(exports, "PresentationRequestEnriched", { enumerable: true, get: function () { return presentationRequestEnriched_1.PresentationRequestEnriched; } });
var verifier_1 = require("./protos/verifier");
Object.defineProperty(exports, "VerifierInfoPb", { enumerable: true, get: function () { return verifier_1.VerifierInfo; } });
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