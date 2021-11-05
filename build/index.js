"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._CredentialStatusOptions = exports.pushProviders = exports.HolderAppInfo = exports.EncryptedKey = exports.RSAPadding = exports.EncryptedCredentialEnriched = exports.EncryptedCredentialOptionsPb = exports.EncryptedCredentialPb = exports.CredentialStatusInfo = exports.IssueCredentialsOptions = exports.IssueCredentialOptions = exports.PublicKeyInfoPb = exports.DidDocumentPb = exports.ProofPb = exports.CredentialRequestPb = exports.CredentialPb = exports.UnsignedCredentialPb = exports.PresentationRequestPb = exports.UnsignedPresentationRequestPb = exports.PresentationPb = exports.UnsignedPresentationPb = void 0;
var runtypes_1 = require("runtypes");
var presentation_1 = require("./protos/presentation");
Object.defineProperty(exports, "UnsignedPresentationPb", { enumerable: true, get: function () { return presentation_1.UnsignedPresentation; } });
Object.defineProperty(exports, "PresentationPb", { enumerable: true, get: function () { return presentation_1.Presentation; } });
var presentationRequest_1 = require("./protos/presentationRequest");
Object.defineProperty(exports, "UnsignedPresentationRequestPb", { enumerable: true, get: function () { return presentationRequest_1.UnsignedPresentationRequest; } });
Object.defineProperty(exports, "PresentationRequestPb", { enumerable: true, get: function () { return presentationRequest_1.PresentationRequest; } });
var didDocument_1 = require("./protos/didDocument");
Object.defineProperty(exports, "DidDocumentPb", { enumerable: true, get: function () { return didDocument_1.DidDocument; } });
var proof_1 = require("./protos/proof");
Object.defineProperty(exports, "ProofPb", { enumerable: true, get: function () { return proof_1.Proof; } });
var credential_1 = require("./protos/credential");
Object.defineProperty(exports, "UnsignedCredentialPb", { enumerable: true, get: function () { return credential_1.UnsignedCredential; } });
Object.defineProperty(exports, "CredentialPb", { enumerable: true, get: function () { return credential_1.Credential; } });
Object.defineProperty(exports, "CredentialRequestPb", { enumerable: true, get: function () { return credential_1.CredentialRequest; } });
Object.defineProperty(exports, "CredentialStatusInfo", { enumerable: true, get: function () { return credential_1.CredentialStatusInfo; } });
var credential_2 = require("./protos/credential");
Object.defineProperty(exports, "IssueCredentialOptions", { enumerable: true, get: function () { return credential_2.IssueCredentialOptions; } });
Object.defineProperty(exports, "IssueCredentialsOptions", { enumerable: true, get: function () { return credential_2.IssueCredentialsOptions; } });
Object.defineProperty(exports, "EncryptedCredentialPb", { enumerable: true, get: function () { return credential_2.EncryptedCredential; } });
Object.defineProperty(exports, "EncryptedCredentialOptionsPb", { enumerable: true, get: function () { return credential_2.EncryptedCredentialOptions; } });
Object.defineProperty(exports, "EncryptedCredentialEnriched", { enumerable: true, get: function () { return credential_2.EncryptedCredentialEnriched; } });
var crypto_1 = require("./protos/crypto");
Object.defineProperty(exports, "EncryptedKey", { enumerable: true, get: function () { return crypto_1.EncryptedKey; } });
Object.defineProperty(exports, "RSAPadding", { enumerable: true, get: function () { return crypto_1.RSAPadding; } });
Object.defineProperty(exports, "PublicKeyInfoPb", { enumerable: true, get: function () { return crypto_1.PublicKeyInfo; } });
var holderApp_1 = require("./protos/holderApp");
Object.defineProperty(exports, "HolderAppInfo", { enumerable: true, get: function () { return holderApp_1.HolderAppInfo; } });
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