"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._CredentialStatusOptions = exports.pushProviders = exports.UnsignedPresentationRequestPb = exports.ProofPb = exports.CredentialPb = exports.UnsignedCredentialPb = exports.PresentationPb = exports.UnsignedPresentationPb = void 0;
var runtypes_1 = require("runtypes");
// export { UnsignedPresentation as UnsignedPresentation_pb} from "./protos/presentation";
var presentation_1 = require("./protos/presentation");
Object.defineProperty(exports, "UnsignedPresentationPb", { enumerable: true, get: function () { return presentation_1.UnsignedPresentation; } });
Object.defineProperty(exports, "PresentationPb", { enumerable: true, get: function () { return presentation_1.Presentation; } });
Object.defineProperty(exports, "UnsignedPresentationRequestPb", { enumerable: true, get: function () { return presentation_1.UnsignedPresentationRequest; } });
var credential_1 = require("./protos/credential");
Object.defineProperty(exports, "UnsignedCredentialPb", { enumerable: true, get: function () { return credential_1.UnsignedCredential; } });
Object.defineProperty(exports, "CredentialPb", { enumerable: true, get: function () { return credential_1.Credential; } });
var proof_1 = require("./protos/proof");
Object.defineProperty(exports, "ProofPb", { enumerable: true, get: function () { return proof_1.Proof; } });
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