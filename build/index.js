"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._CredentialStatusOptions = exports.pushProviders = exports.Proof_pb = exports.UnsignedCredential_pb = exports.UnsignedPresentation_pb = void 0;
var runtypes_1 = require("runtypes");
// export { UnsignedPresentation as UnsignedPresentation_pb} from "./protos/presentation";
var presentation_1 = require("./protos/presentation");
Object.defineProperty(exports, "UnsignedPresentation_pb", { enumerable: true, get: function () { return presentation_1.UnsignedPresentation; } });
var credential_1 = require("./protos/credential");
Object.defineProperty(exports, "UnsignedCredential_pb", { enumerable: true, get: function () { return credential_1.UnsignedCredential; } });
var proof_1 = require("./protos/proof");
Object.defineProperty(exports, "Proof_pb", { enumerable: true, get: function () { return proof_1.Proof; } });
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