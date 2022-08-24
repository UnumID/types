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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignedString = exports.UnsignedString = exports.KeyPairSet = exports.KeyPair = exports.PublicKeyInfo = exports.EncryptedData = exports.EncryptedKey = exports.rSAPaddingToJSON = exports.rSAPaddingFromJSON = exports.RSAPadding = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var timestamp_1 = require("./google/protobuf/timestamp");
var proof_1 = require("./proof");
exports.protobufPackage = "crypto.v1";
/** Enum containing all of the RSA padding types that we use */
var RSAPadding;
(function (RSAPadding) {
    RSAPadding[RSAPadding["PKCS"] = 0] = "PKCS";
    RSAPadding[RSAPadding["OAEP"] = 1] = "OAEP";
    RSAPadding[RSAPadding["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RSAPadding = exports.RSAPadding || (exports.RSAPadding = {}));
function rSAPaddingFromJSON(object) {
    switch (object) {
        case 0:
        case "PKCS":
            return RSAPadding.PKCS;
        case 1:
        case "OAEP":
            return RSAPadding.OAEP;
        case -1:
        case "UNRECOGNIZED":
        default:
            return RSAPadding.UNRECOGNIZED;
    }
}
exports.rSAPaddingFromJSON = rSAPaddingFromJSON;
function rSAPaddingToJSON(object) {
    switch (object) {
        case RSAPadding.PKCS:
            return "PKCS";
        case RSAPadding.OAEP:
            return "OAEP";
        default:
            return "UNKNOWN";
    }
}
exports.rSAPaddingToJSON = rSAPaddingToJSON;
var baseEncryptedKey = { iv: "", key: "", algorithm: "", did: "" };
exports.EncryptedKey = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.iv !== "") {
            writer.uint32(10).string(message.iv);
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        if (message.algorithm !== "") {
            writer.uint32(26).string(message.algorithm);
        }
        if (message.did !== "") {
            writer.uint32(34).string(message.did);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseEncryptedKey);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iv = reader.string();
                    break;
                case 2:
                    message.key = reader.string();
                    break;
                case 3:
                    message.algorithm = reader.string();
                    break;
                case 4:
                    message.did = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseEncryptedKey);
        if (object.iv !== undefined && object.iv !== null) {
            message.iv = String(object.iv);
        }
        else {
            message.iv = "";
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.algorithm !== undefined && object.algorithm !== null) {
            message.algorithm = String(object.algorithm);
        }
        else {
            message.algorithm = "";
        }
        if (object.did !== undefined && object.did !== null) {
            message.did = String(object.did);
        }
        else {
            message.did = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.iv !== undefined && (obj.iv = message.iv);
        message.key !== undefined && (obj.key = message.key);
        message.algorithm !== undefined && (obj.algorithm = message.algorithm);
        message.did !== undefined && (obj.did = message.did);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseEncryptedKey);
        if (object.iv !== undefined && object.iv !== null) {
            message.iv = object.iv;
        }
        else {
            message.iv = "";
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.algorithm !== undefined && object.algorithm !== null) {
            message.algorithm = object.algorithm;
        }
        else {
            message.algorithm = "";
        }
        if (object.did !== undefined && object.did !== null) {
            message.did = object.did;
        }
        else {
            message.did = "";
        }
        return message;
    },
};
var baseEncryptedData = { data: "" };
exports.EncryptedData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.data !== "") {
            writer.uint32(10).string(message.data);
        }
        if (message.key !== undefined) {
            exports.EncryptedKey.encode(message.key, writer.uint32(18).fork()).ldelim();
        }
        if (message.rsaPadding !== undefined) {
            writer.uint32(24).int32(message.rsaPadding);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseEncryptedData);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.string();
                    break;
                case 2:
                    message.key = exports.EncryptedKey.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.rsaPadding = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseEncryptedData);
        if (object.data !== undefined && object.data !== null) {
            message.data = String(object.data);
        }
        else {
            message.data = "";
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = exports.EncryptedKey.fromJSON(object.key);
        }
        else {
            message.key = undefined;
        }
        if (object.rsaPadding !== undefined && object.rsaPadding !== null) {
            message.rsaPadding = rSAPaddingFromJSON(object.rsaPadding);
        }
        else {
            message.rsaPadding = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.data !== undefined && (obj.data = message.data);
        message.key !== undefined &&
            (obj.key = message.key ? exports.EncryptedKey.toJSON(message.key) : undefined);
        message.rsaPadding !== undefined &&
            (obj.rsaPadding =
                message.rsaPadding !== undefined
                    ? rSAPaddingToJSON(message.rsaPadding)
                    : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseEncryptedData);
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = "";
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = exports.EncryptedKey.fromPartial(object.key);
        }
        else {
            message.key = undefined;
        }
        if (object.rsaPadding !== undefined && object.rsaPadding !== null) {
            message.rsaPadding = object.rsaPadding;
        }
        else {
            message.rsaPadding = undefined;
        }
        return message;
    },
};
var basePublicKeyInfo = {
    id: "",
    publicKey: "",
    encoding: "",
    type: "",
    status: "",
};
exports.PublicKeyInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.publicKey !== "") {
            writer.uint32(18).string(message.publicKey);
        }
        if (message.encoding !== "") {
            writer.uint32(26).string(message.encoding);
        }
        if (message.type !== "") {
            writer.uint32(34).string(message.type);
        }
        if (message.status !== "") {
            writer.uint32(42).string(message.status);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.rsaPadding !== undefined) {
            writer.uint32(64).int32(message.rsaPadding);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, basePublicKeyInfo);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.publicKey = reader.string();
                    break;
                case 3:
                    message.encoding = reader.string();
                    break;
                case 4:
                    message.type = reader.string();
                    break;
                case 5:
                    message.status = reader.string();
                    break;
                case 6:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.rsaPadding = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, basePublicKeyInfo);
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.publicKey !== undefined && object.publicKey !== null) {
            message.publicKey = String(object.publicKey);
        }
        else {
            message.publicKey = "";
        }
        if (object.encoding !== undefined && object.encoding !== null) {
            message.encoding = String(object.encoding);
        }
        else {
            message.encoding = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = "";
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = String(object.status);
        }
        else {
            message.status = "";
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        else {
            message.createdAt = undefined;
        }
        if (object.updatedAt !== undefined && object.updatedAt !== null) {
            message.updatedAt = fromJsonTimestamp(object.updatedAt);
        }
        else {
            message.updatedAt = undefined;
        }
        if (object.rsaPadding !== undefined && object.rsaPadding !== null) {
            message.rsaPadding = rSAPaddingFromJSON(object.rsaPadding);
        }
        else {
            message.rsaPadding = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.publicKey !== undefined && (obj.publicKey = message.publicKey);
        message.encoding !== undefined && (obj.encoding = message.encoding);
        message.type !== undefined && (obj.type = message.type);
        message.status !== undefined && (obj.status = message.status);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined &&
            (obj.updatedAt = message.updatedAt.toISOString());
        message.rsaPadding !== undefined &&
            (obj.rsaPadding =
                message.rsaPadding !== undefined
                    ? rSAPaddingToJSON(message.rsaPadding)
                    : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, basePublicKeyInfo);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.publicKey !== undefined && object.publicKey !== null) {
            message.publicKey = object.publicKey;
        }
        else {
            message.publicKey = "";
        }
        if (object.encoding !== undefined && object.encoding !== null) {
            message.encoding = object.encoding;
        }
        else {
            message.encoding = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = "";
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = "";
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = undefined;
        }
        if (object.updatedAt !== undefined && object.updatedAt !== null) {
            message.updatedAt = object.updatedAt;
        }
        else {
            message.updatedAt = undefined;
        }
        if (object.rsaPadding !== undefined && object.rsaPadding !== null) {
            message.rsaPadding = object.rsaPadding;
        }
        else {
            message.rsaPadding = undefined;
        }
        return message;
    },
};
var baseKeyPair = { privateKey: "", publicKey: "", id: "" };
exports.KeyPair = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.privateKey !== "") {
            writer.uint32(10).string(message.privateKey);
        }
        if (message.publicKey !== "") {
            writer.uint32(18).string(message.publicKey);
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseKeyPair);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privateKey = reader.string();
                    break;
                case 2:
                    message.publicKey = reader.string();
                    break;
                case 3:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseKeyPair);
        if (object.privateKey !== undefined && object.privateKey !== null) {
            message.privateKey = String(object.privateKey);
        }
        else {
            message.privateKey = "";
        }
        if (object.publicKey !== undefined && object.publicKey !== null) {
            message.publicKey = String(object.publicKey);
        }
        else {
            message.publicKey = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.privateKey !== undefined && (obj.privateKey = message.privateKey);
        message.publicKey !== undefined && (obj.publicKey = message.publicKey);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseKeyPair);
        if (object.privateKey !== undefined && object.privateKey !== null) {
            message.privateKey = object.privateKey;
        }
        else {
            message.privateKey = "";
        }
        if (object.publicKey !== undefined && object.publicKey !== null) {
            message.publicKey = object.publicKey;
        }
        else {
            message.publicKey = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        return message;
    },
};
var baseKeyPairSet = {};
exports.KeyPairSet = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.signing !== undefined) {
            exports.KeyPair.encode(message.signing, writer.uint32(10).fork()).ldelim();
        }
        if (message.encryption !== undefined) {
            exports.KeyPair.encode(message.encryption, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseKeyPairSet);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signing = exports.KeyPair.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.encryption = exports.KeyPair.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseKeyPairSet);
        if (object.signing !== undefined && object.signing !== null) {
            message.signing = exports.KeyPair.fromJSON(object.signing);
        }
        else {
            message.signing = undefined;
        }
        if (object.encryption !== undefined && object.encryption !== null) {
            message.encryption = exports.KeyPair.fromJSON(object.encryption);
        }
        else {
            message.encryption = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.signing !== undefined &&
            (obj.signing = message.signing
                ? exports.KeyPair.toJSON(message.signing)
                : undefined);
        message.encryption !== undefined &&
            (obj.encryption = message.encryption
                ? exports.KeyPair.toJSON(message.encryption)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseKeyPairSet);
        if (object.signing !== undefined && object.signing !== null) {
            message.signing = exports.KeyPair.fromPartial(object.signing);
        }
        else {
            message.signing = undefined;
        }
        if (object.encryption !== undefined && object.encryption !== null) {
            message.encryption = exports.KeyPair.fromPartial(object.encryption);
        }
        else {
            message.encryption = undefined;
        }
        return message;
    },
};
var baseUnsignedString = { data: "" };
exports.UnsignedString = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.data !== "") {
            writer.uint32(10).string(message.data);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseUnsignedString);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseUnsignedString);
        if (object.data !== undefined && object.data !== null) {
            message.data = String(object.data);
        }
        else {
            message.data = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.data !== undefined && (obj.data = message.data);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseUnsignedString);
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = "";
        }
        return message;
    },
};
var baseSignedString = { data: "" };
exports.SignedString = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.data !== "") {
            writer.uint32(10).string(message.data);
        }
        if (message.proof !== undefined) {
            proof_1.Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseSignedString);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.string();
                    break;
                case 2:
                    message.proof = proof_1.Proof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseSignedString);
        if (object.data !== undefined && object.data !== null) {
            message.data = String(object.data);
        }
        else {
            message.data = "";
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = proof_1.Proof.fromJSON(object.proof);
        }
        else {
            message.proof = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.data !== undefined && (obj.data = message.data);
        message.proof !== undefined &&
            (obj.proof = message.proof ? proof_1.Proof.toJSON(message.proof) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseSignedString);
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = "";
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = proof_1.Proof.fromPartial(object.proof);
        }
        else {
            message.proof = undefined;
        }
        return message;
    },
};
function toTimestamp(date) {
    var seconds = date.getTime() / 1000;
    var nanos = (date.getTime() % 1000) * 1000000;
    return { seconds: seconds, nanos: nanos };
}
function fromTimestamp(t) {
    var millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=crypto.js.map