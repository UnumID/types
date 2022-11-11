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
exports.RegisterVerifierOptions = exports.VerifierInfo = exports.VerifierOptions = exports.Verifier = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var timestamp_1 = require("./google/protobuf/timestamp");
var versionInfo_1 = require("./versionInfo");
var crypto_1 = require("./crypto");
exports.protobufPackage = "verifier.v1";
var baseVerifier = {
    uuid: "",
    customerUuid: "",
    name: "",
    did: "",
    isAuthorized: false,
    apiKey: "",
    url: "",
};
exports.Verifier = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.uuid !== "") {
            writer.uint32(10).string(message.uuid);
        }
        if (message.customerUuid !== "") {
            writer.uint32(18).string(message.customerUuid);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.did !== "") {
            writer.uint32(34).string(message.did);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(50).fork()).ldelim();
        }
        if (message.isAuthorized === true) {
            writer.uint32(56).bool(message.isAuthorized);
        }
        if (message.apiKey !== "") {
            writer.uint32(66).string(message.apiKey);
        }
        if (message.url !== "") {
            writer.uint32(74).string(message.url);
        }
        for (var _i = 0, _a = message.versionInfo; _i < _a.length; _i++) {
            var v = _a[_i];
            versionInfo_1.VersionInfo.encode(v, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseVerifier);
        message.versionInfo = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.customerUuid = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.did = reader.string();
                    break;
                case 5:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.isAuthorized = reader.bool();
                    break;
                case 8:
                    message.apiKey = reader.string();
                    break;
                case 9:
                    message.url = reader.string();
                    break;
                case 10:
                    message.versionInfo.push(versionInfo_1.VersionInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseVerifier);
        message.versionInfo = [];
        if (object.uuid !== undefined && object.uuid !== null) {
            message.uuid = String(object.uuid);
        }
        else {
            message.uuid = "";
        }
        if (object.customerUuid !== undefined && object.customerUuid !== null) {
            message.customerUuid = String(object.customerUuid);
        }
        else {
            message.customerUuid = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.did !== undefined && object.did !== null) {
            message.did = String(object.did);
        }
        else {
            message.did = "";
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
        if (object.isAuthorized !== undefined && object.isAuthorized !== null) {
            message.isAuthorized = Boolean(object.isAuthorized);
        }
        else {
            message.isAuthorized = false;
        }
        if (object.apiKey !== undefined && object.apiKey !== null) {
            message.apiKey = String(object.apiKey);
        }
        else {
            message.apiKey = "";
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        else {
            message.url = "";
        }
        if (object.versionInfo !== undefined && object.versionInfo !== null) {
            for (var _i = 0, _a = object.versionInfo; _i < _a.length; _i++) {
                var e = _a[_i];
                message.versionInfo.push(versionInfo_1.VersionInfo.fromJSON(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.uuid !== undefined && (obj.uuid = message.uuid);
        message.customerUuid !== undefined &&
            (obj.customerUuid = message.customerUuid);
        message.name !== undefined && (obj.name = message.name);
        message.did !== undefined && (obj.did = message.did);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined &&
            (obj.updatedAt = message.updatedAt.toISOString());
        message.isAuthorized !== undefined &&
            (obj.isAuthorized = message.isAuthorized);
        message.apiKey !== undefined && (obj.apiKey = message.apiKey);
        message.url !== undefined && (obj.url = message.url);
        if (message.versionInfo) {
            obj.versionInfo = message.versionInfo.map(function (e) {
                return e ? versionInfo_1.VersionInfo.toJSON(e) : undefined;
            });
        }
        else {
            obj.versionInfo = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseVerifier);
        message.versionInfo = [];
        if (object.uuid !== undefined && object.uuid !== null) {
            message.uuid = object.uuid;
        }
        else {
            message.uuid = "";
        }
        if (object.customerUuid !== undefined && object.customerUuid !== null) {
            message.customerUuid = object.customerUuid;
        }
        else {
            message.customerUuid = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.did !== undefined && object.did !== null) {
            message.did = object.did;
        }
        else {
            message.did = "";
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
        if (object.isAuthorized !== undefined && object.isAuthorized !== null) {
            message.isAuthorized = object.isAuthorized;
        }
        else {
            message.isAuthorized = false;
        }
        if (object.apiKey !== undefined && object.apiKey !== null) {
            message.apiKey = object.apiKey;
        }
        else {
            message.apiKey = "";
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        else {
            message.url = "";
        }
        if (object.versionInfo !== undefined && object.versionInfo !== null) {
            for (var _i = 0, _a = object.versionInfo; _i < _a.length; _i++) {
                var e = _a[_i];
                message.versionInfo.push(versionInfo_1.VersionInfo.fromPartial(e));
            }
        }
        return message;
    },
};
var baseVerifierOptions = { url: "" };
exports.VerifierOptions = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.publicKeyInfo; _i < _a.length; _i++) {
            var v = _a[_i];
            crypto_1.PublicKeyInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        for (var _b = 0, _c = message.versionInfo; _b < _c.length; _b++) {
            var v = _c[_b];
            versionInfo_1.VersionInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseVerifierOptions);
        message.publicKeyInfo = [];
        message.versionInfo = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicKeyInfo.push(crypto_1.PublicKeyInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.versionInfo.push(versionInfo_1.VersionInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseVerifierOptions);
        message.publicKeyInfo = [];
        message.versionInfo = [];
        if (object.publicKeyInfo !== undefined && object.publicKeyInfo !== null) {
            for (var _i = 0, _a = object.publicKeyInfo; _i < _a.length; _i++) {
                var e = _a[_i];
                message.publicKeyInfo.push(crypto_1.PublicKeyInfo.fromJSON(e));
            }
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        else {
            message.url = "";
        }
        if (object.versionInfo !== undefined && object.versionInfo !== null) {
            for (var _b = 0, _c = object.versionInfo; _b < _c.length; _b++) {
                var e = _c[_b];
                message.versionInfo.push(versionInfo_1.VersionInfo.fromJSON(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.publicKeyInfo) {
            obj.publicKeyInfo = message.publicKeyInfo.map(function (e) {
                return e ? crypto_1.PublicKeyInfo.toJSON(e) : undefined;
            });
        }
        else {
            obj.publicKeyInfo = [];
        }
        message.url !== undefined && (obj.url = message.url);
        if (message.versionInfo) {
            obj.versionInfo = message.versionInfo.map(function (e) {
                return e ? versionInfo_1.VersionInfo.toJSON(e) : undefined;
            });
        }
        else {
            obj.versionInfo = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseVerifierOptions);
        message.publicKeyInfo = [];
        message.versionInfo = [];
        if (object.publicKeyInfo !== undefined && object.publicKeyInfo !== null) {
            for (var _i = 0, _a = object.publicKeyInfo; _i < _a.length; _i++) {
                var e = _a[_i];
                message.publicKeyInfo.push(crypto_1.PublicKeyInfo.fromPartial(e));
            }
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        else {
            message.url = "";
        }
        if (object.versionInfo !== undefined && object.versionInfo !== null) {
            for (var _b = 0, _c = object.versionInfo; _b < _c.length; _b++) {
                var e = _c[_b];
                message.versionInfo.push(versionInfo_1.VersionInfo.fromPartial(e));
            }
        }
        return message;
    },
};
var baseVerifierInfo = { did: "", name: "" };
exports.VerifierInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.did !== "") {
            writer.uint32(10).string(message.did);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.encryptionPublicKey !== undefined) {
            crypto_1.PublicKeyInfo.encode(message.encryptionPublicKey, writer.uint32(26).fork()).ldelim();
        }
        if (message.signingPublicKey !== undefined) {
            crypto_1.PublicKeyInfo.encode(message.signingPublicKey, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseVerifierInfo);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.did = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.encryptionPublicKey = crypto_1.PublicKeyInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signingPublicKey = crypto_1.PublicKeyInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseVerifierInfo);
        if (object.did !== undefined && object.did !== null) {
            message.did = String(object.did);
        }
        else {
            message.did = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.encryptionPublicKey !== undefined &&
            object.encryptionPublicKey !== null) {
            message.encryptionPublicKey = crypto_1.PublicKeyInfo.fromJSON(object.encryptionPublicKey);
        }
        else {
            message.encryptionPublicKey = undefined;
        }
        if (object.signingPublicKey !== undefined &&
            object.signingPublicKey !== null) {
            message.signingPublicKey = crypto_1.PublicKeyInfo.fromJSON(object.signingPublicKey);
        }
        else {
            message.signingPublicKey = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.did !== undefined && (obj.did = message.did);
        message.name !== undefined && (obj.name = message.name);
        message.encryptionPublicKey !== undefined &&
            (obj.encryptionPublicKey = message.encryptionPublicKey
                ? crypto_1.PublicKeyInfo.toJSON(message.encryptionPublicKey)
                : undefined);
        message.signingPublicKey !== undefined &&
            (obj.signingPublicKey = message.signingPublicKey
                ? crypto_1.PublicKeyInfo.toJSON(message.signingPublicKey)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseVerifierInfo);
        if (object.did !== undefined && object.did !== null) {
            message.did = object.did;
        }
        else {
            message.did = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.encryptionPublicKey !== undefined &&
            object.encryptionPublicKey !== null) {
            message.encryptionPublicKey = crypto_1.PublicKeyInfo.fromPartial(object.encryptionPublicKey);
        }
        else {
            message.encryptionPublicKey = undefined;
        }
        if (object.signingPublicKey !== undefined &&
            object.signingPublicKey !== null) {
            message.signingPublicKey = crypto_1.PublicKeyInfo.fromPartial(object.signingPublicKey);
        }
        else {
            message.signingPublicKey = undefined;
        }
        return message;
    },
};
var baseRegisterVerifierOptions = { url: "" };
exports.RegisterVerifierOptions = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.url !== "") {
            writer.uint32(10).string(message.url);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseRegisterVerifierOptions);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseRegisterVerifierOptions);
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        else {
            message.url = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseRegisterVerifierOptions);
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        else {
            message.url = "";
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
//# sourceMappingURL=verifier.js.map