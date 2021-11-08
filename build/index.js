"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._CredentialStatusOptions = exports.pushProviders = exports.credentialToSignedBytes = exports.credentialToUnsignedCredential = exports.credentialToPb = exports.pbToCredential = exports.proofToPb = exports.pbToProof = exports.pBtoUnsignedCredential = exports.unsignedCredentialToPb = exports.HolderAppInfo = exports.EncryptedKey = exports.RSAPadding = exports.EncryptedCredentialEnriched = exports.EncryptedCredentialOptionsPb = exports.EncryptedCredentialPb = exports.CredentialStatusInfo = exports.IssueCredentialsOptions = exports.IssueCredentialOptions = exports.PublicKeyInfoPb = exports.DidDocumentPb = exports.ProofPb = exports.CredentialRequestPb = exports.CredentialPb = exports.UnsignedCredentialPb = exports.PresentationRequestPb = exports.UnsignedPresentationRequestPb = exports.PresentationPb = exports.UnsignedPresentationPb = void 0;
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
 * Converts an UnsignedCredential object to an UnsignedCredentialPb object
 * @param {UnsignedCredential}
 * @returns {UnsignedCredentialPb}
 */
var unsignedCredentialToPb = function (unsignedCredential) {
    return {
        context: unsignedCredential['@context'],
        credentialSubject: unsignedCredential.credentialSubject,
        credentialStatus: unsignedCredential.credentialStatus,
        issuer: unsignedCredential.issuer,
        type: unsignedCredential.type,
        id: unsignedCredential.id,
        issuanceDate: unsignedCredential.issuanceDate,
        expirationDate: unsignedCredential.expirationDate
    };
};
exports.unsignedCredentialToPb = unsignedCredentialToPb;
/**
 * Converts an UnsignedCredentialPb object to an UnsignedCredential object
 * Validates that the UnsignedCredentialPb can be converted to a valid UnsignedCredential
 * and throws an error if it cannot.
 * @param {UnsignedCredentialPb} pb
 * @returns {UnsignedCredentialPb}
 */
var pBtoUnsignedCredential = function (pb) {
    // validate required fields are present
    if (!pb.credentialStatus) {
        throw new Error('Invalid UnsignedCredential: credentialStatus is required.');
    }
    if (!pb.issuanceDate) {
        throw new Error('Invalid UnsignedCredential: issuanceDate is required.');
    }
    // validate required values are present
    if (pb.type[0] !== 'VerifiableCredential') {
        throw new Error('Invalid UnsignedCredential: type must include \'VerifiableCredential\'.');
    }
    if (pb.context[0] !== 'https://www.w3.org/2018/credentials/v1') {
        throw new Error('Invalid UnsignedCredential: context must include \'https://www.w3.org/2018/credentials/v1\'.');
    }
    return {
        '@context': pb.context,
        credentialSubject: pb.credentialSubject,
        credentialStatus: pb.credentialStatus,
        issuer: pb.issuer,
        type: pb.type,
        id: pb.id,
        issuanceDate: pb.issuanceDate,
        expirationDate: pb.expirationDate
    };
};
exports.pBtoUnsignedCredential = pBtoUnsignedCredential;
/**
 * Converts a ProofPb object to a Proof object
 * Validates that the ProofPb can be converted to a valid Proof
 * and throws an error if it cannot.
 * @param {ProofPb} pb
 * @returns {Proof}
 */
var pbToProof = function (pb) {
    // validate required fields are present
    if (!pb.created) {
        throw new Error('Invalid Proof: created is required.');
    }
    return {
        signatureValue: pb.signatureValue,
        type: pb.type,
        verificationMethod: pb.verificationMethod,
        created: pb.created.toISOString(),
        proofPurpose: pb.proofPurpose
    };
};
exports.pbToProof = pbToProof;
/**
 * Converts a Proof object to a Proof protobuf object
 * @param {Proof} proof
 * @returns {ProofPb}
 */
var proofToPb = function (proof) {
    return __assign(__assign({}, proof), { created: new Date(proof.created) });
};
exports.proofToPb = proofToPb;
/**
 * Converts a CredentialPb object to a Credential object
 * Validates that the CredentialPb can be converted to a valid Credential
 * and throws an error if it cannot.
 * @param {CredentialPb} pb
 * @returns {Credential}
 */
var pbToCredential = function (pb) {
    // validate required fields are present
    if (!pb.credentialStatus) {
        throw new Error('Invalid Credential: credentialStatus is required.');
    }
    if (!pb.issuanceDate) {
        throw new Error('Invalid Credential: issuanceDate is required.');
    }
    if (!pb.proof) {
        throw new Error('Invalid Credential: proof is required.');
    }
    // validate required values are present
    if (pb.type[0] !== 'VerifiableCredential') {
        throw new Error('Invalid UnsignedCredential: type must include \'VerifiableCredential\'.');
    }
    if (pb.context[0] !== 'https://www.w3.org/2018/credentials/v1') {
        throw new Error('Invalid UnsignedCredential: context must include \'https://www.w3.org/2018/credentials/v1\'.');
    }
    return {
        '@context': pb.context,
        credentialSubject: pb.credentialSubject,
        credentialStatus: pb.credentialStatus,
        issuer: pb.issuer,
        type: pb.type,
        issuanceDate: pb.issuanceDate,
        proof: exports.pbToProof(pb.proof),
        expirationDate: pb.expirationDate,
        id: pb.id,
    };
};
exports.pbToCredential = pbToCredential;
/**
 * Converts a Credential object to a Credential protobuf object
 * @param {Credential} credential
 * @returns {CredentialPb}
 */
var credentialToPb = function (credential) {
    return {
        context: credential['@context'],
        credentialStatus: credential.credentialStatus,
        credentialSubject: credential.credentialSubject,
        issuanceDate: credential.issuanceDate,
        proof: exports.proofToPb(credential.proof),
        expirationDate: credential.expirationDate,
        issuer: credential.issuer,
        id: credential.id,
        type: credential.type
    };
};
exports.credentialToPb = credentialToPb;
/**
 * Converts a Credential to its unsigned version
 * @param {Credential} credential
 * @returns {UnsignedCredential}
 */
var credentialToUnsignedCredential = function (credential) {
    return {
        '@context': credential['@context'],
        credentialStatus: credential.credentialStatus,
        credentialSubject: credential.credentialSubject,
        id: credential.id,
        issuanceDate: credential.issuanceDate,
        issuer: credential.issuer,
        expirationDate: credential.expirationDate,
        type: credential.type
    };
};
exports.credentialToUnsignedCredential = credentialToUnsignedCredential;
/**
 * Converts a Credential to the bytes that were signed to create its proof
 * @param {Credential} credential
 * @returns {Uint8Array}
 */
var credentialToSignedBytes = function (credential) {
    var unsignedCredential = exports.credentialToUnsignedCredential(credential);
    var unsignedCredentialPb = exports.unsignedCredentialToPb(unsignedCredential);
    return credential_1.UnsignedCredential.encode(unsignedCredentialPb).finish();
};
exports.credentialToSignedBytes = credentialToSignedBytes;
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