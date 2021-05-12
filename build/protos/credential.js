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
exports.CredentialRequest = exports.Credential = exports.UnsignedCredential = exports.CredentialStatus = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var timestamp_1 = require("./google/protobuf/timestamp");
var proof_1 = require("./proof");
exports.protobufPackage = "credential.v1";
var baseCredentialStatus = { id: "", type: "" };
exports.CredentialStatus = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseCredentialStatus);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseCredentialStatus);
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseCredentialStatus);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = "";
        }
        return message;
    },
};
var baseUnsignedCredential = {
    context: "",
    credentialSubject: "",
    issuer: "",
    type: "",
    id: "",
};
exports.UnsignedCredential = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.context !== "") {
            writer.uint32(10).string(message.context);
        }
        if (message.credentialSubject !== "") {
            writer.uint32(18).string(message.credentialSubject);
        }
        if (message.credentialStatus !== undefined) {
            exports.CredentialStatus.encode(message.credentialStatus, writer.uint32(26).fork()).ldelim();
        }
        if (message.issuer !== "") {
            writer.uint32(34).string(message.issuer);
        }
        for (var _i = 0, _a = message.type; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(42).string(v);
        }
        if (message.id !== "") {
            writer.uint32(50).string(message.id);
        }
        if (message.issuanceDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.issuanceDate), writer.uint32(58).fork()).ldelim();
        }
        if (message.expirationDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expirationDate), writer.uint32(130).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseUnsignedCredential);
        message.type = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.context = reader.string();
                    break;
                case 2:
                    message.credentialSubject = reader.string();
                    break;
                case 3:
                    message.credentialStatus = exports.CredentialStatus.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.issuer = reader.string();
                    break;
                case 5:
                    message.type.push(reader.string());
                    break;
                case 6:
                    message.id = reader.string();
                    break;
                case 7:
                    message.issuanceDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 16:
                    message.expirationDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseUnsignedCredential);
        message.type = [];
        if (object.context !== undefined && object.context !== null) {
            message.context = String(object.context);
        }
        else {
            message.context = "";
        }
        if (object.credentialSubject !== undefined &&
            object.credentialSubject !== null) {
            message.credentialSubject = String(object.credentialSubject);
        }
        else {
            message.credentialSubject = "";
        }
        if (object.credentialStatus !== undefined &&
            object.credentialStatus !== null) {
            message.credentialStatus = exports.CredentialStatus.fromJSON(object.credentialStatus);
        }
        else {
            message.credentialStatus = undefined;
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = String(object.issuer);
        }
        else {
            message.issuer = "";
        }
        if (object.type !== undefined && object.type !== null) {
            for (var _i = 0, _a = object.type; _i < _a.length; _i++) {
                var e = _a[_i];
                message.type.push(String(e));
            }
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.issuanceDate !== undefined && object.issuanceDate !== null) {
            message.issuanceDate = fromJsonTimestamp(object.issuanceDate);
        }
        else {
            message.issuanceDate = undefined;
        }
        if (object.expirationDate !== undefined && object.expirationDate !== null) {
            message.expirationDate = fromJsonTimestamp(object.expirationDate);
        }
        else {
            message.expirationDate = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.context !== undefined && (obj.context = message.context);
        message.credentialSubject !== undefined &&
            (obj.credentialSubject = message.credentialSubject);
        message.credentialStatus !== undefined &&
            (obj.credentialStatus = message.credentialStatus
                ? exports.CredentialStatus.toJSON(message.credentialStatus)
                : undefined);
        message.issuer !== undefined && (obj.issuer = message.issuer);
        if (message.type) {
            obj.type = message.type.map(function (e) { return e; });
        }
        else {
            obj.type = [];
        }
        message.id !== undefined && (obj.id = message.id);
        message.issuanceDate !== undefined &&
            (obj.issuanceDate = message.issuanceDate.toISOString());
        message.expirationDate !== undefined &&
            (obj.expirationDate = message.expirationDate.toISOString());
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseUnsignedCredential);
        message.type = [];
        if (object.context !== undefined && object.context !== null) {
            message.context = object.context;
        }
        else {
            message.context = "";
        }
        if (object.credentialSubject !== undefined &&
            object.credentialSubject !== null) {
            message.credentialSubject = object.credentialSubject;
        }
        else {
            message.credentialSubject = "";
        }
        if (object.credentialStatus !== undefined &&
            object.credentialStatus !== null) {
            message.credentialStatus = exports.CredentialStatus.fromPartial(object.credentialStatus);
        }
        else {
            message.credentialStatus = undefined;
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        else {
            message.issuer = "";
        }
        if (object.type !== undefined && object.type !== null) {
            for (var _i = 0, _a = object.type; _i < _a.length; _i++) {
                var e = _a[_i];
                message.type.push(e);
            }
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.issuanceDate !== undefined && object.issuanceDate !== null) {
            message.issuanceDate = object.issuanceDate;
        }
        else {
            message.issuanceDate = undefined;
        }
        if (object.expirationDate !== undefined && object.expirationDate !== null) {
            message.expirationDate = object.expirationDate;
        }
        else {
            message.expirationDate = undefined;
        }
        return message;
    },
};
var baseCredential = {
    context: "",
    credentialSubject: "",
    issuer: "",
    type: "",
    id: "",
};
exports.Credential = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.context !== "") {
            writer.uint32(10).string(message.context);
        }
        if (message.credentialSubject !== "") {
            writer.uint32(18).string(message.credentialSubject);
        }
        if (message.credentialStatus !== undefined) {
            exports.CredentialStatus.encode(message.credentialStatus, writer.uint32(26).fork()).ldelim();
        }
        if (message.issuer !== "") {
            writer.uint32(34).string(message.issuer);
        }
        for (var _i = 0, _a = message.type; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(42).string(v);
        }
        if (message.id !== "") {
            writer.uint32(50).string(message.id);
        }
        if (message.issuanceDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.issuanceDate), writer.uint32(58).fork()).ldelim();
        }
        if (message.proof !== undefined) {
            proof_1.Proof.encode(message.proof, writer.uint32(66).fork()).ldelim();
        }
        if (message.expirationDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expirationDate), writer.uint32(130).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseCredential);
        message.type = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.context = reader.string();
                    break;
                case 2:
                    message.credentialSubject = reader.string();
                    break;
                case 3:
                    message.credentialStatus = exports.CredentialStatus.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.issuer = reader.string();
                    break;
                case 5:
                    message.type.push(reader.string());
                    break;
                case 6:
                    message.id = reader.string();
                    break;
                case 7:
                    message.issuanceDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.proof = proof_1.Proof.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.expirationDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseCredential);
        message.type = [];
        if (object.context !== undefined && object.context !== null) {
            message.context = String(object.context);
        }
        else {
            message.context = "";
        }
        if (object.credentialSubject !== undefined &&
            object.credentialSubject !== null) {
            message.credentialSubject = String(object.credentialSubject);
        }
        else {
            message.credentialSubject = "";
        }
        if (object.credentialStatus !== undefined &&
            object.credentialStatus !== null) {
            message.credentialStatus = exports.CredentialStatus.fromJSON(object.credentialStatus);
        }
        else {
            message.credentialStatus = undefined;
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = String(object.issuer);
        }
        else {
            message.issuer = "";
        }
        if (object.type !== undefined && object.type !== null) {
            for (var _i = 0, _a = object.type; _i < _a.length; _i++) {
                var e = _a[_i];
                message.type.push(String(e));
            }
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.issuanceDate !== undefined && object.issuanceDate !== null) {
            message.issuanceDate = fromJsonTimestamp(object.issuanceDate);
        }
        else {
            message.issuanceDate = undefined;
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = proof_1.Proof.fromJSON(object.proof);
        }
        else {
            message.proof = undefined;
        }
        if (object.expirationDate !== undefined && object.expirationDate !== null) {
            message.expirationDate = fromJsonTimestamp(object.expirationDate);
        }
        else {
            message.expirationDate = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.context !== undefined && (obj.context = message.context);
        message.credentialSubject !== undefined &&
            (obj.credentialSubject = message.credentialSubject);
        message.credentialStatus !== undefined &&
            (obj.credentialStatus = message.credentialStatus
                ? exports.CredentialStatus.toJSON(message.credentialStatus)
                : undefined);
        message.issuer !== undefined && (obj.issuer = message.issuer);
        if (message.type) {
            obj.type = message.type.map(function (e) { return e; });
        }
        else {
            obj.type = [];
        }
        message.id !== undefined && (obj.id = message.id);
        message.issuanceDate !== undefined &&
            (obj.issuanceDate = message.issuanceDate.toISOString());
        message.proof !== undefined &&
            (obj.proof = message.proof ? proof_1.Proof.toJSON(message.proof) : undefined);
        message.expirationDate !== undefined &&
            (obj.expirationDate = message.expirationDate.toISOString());
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseCredential);
        message.type = [];
        if (object.context !== undefined && object.context !== null) {
            message.context = object.context;
        }
        else {
            message.context = "";
        }
        if (object.credentialSubject !== undefined &&
            object.credentialSubject !== null) {
            message.credentialSubject = object.credentialSubject;
        }
        else {
            message.credentialSubject = "";
        }
        if (object.credentialStatus !== undefined &&
            object.credentialStatus !== null) {
            message.credentialStatus = exports.CredentialStatus.fromPartial(object.credentialStatus);
        }
        else {
            message.credentialStatus = undefined;
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        else {
            message.issuer = "";
        }
        if (object.type !== undefined && object.type !== null) {
            for (var _i = 0, _a = object.type; _i < _a.length; _i++) {
                var e = _a[_i];
                message.type.push(e);
            }
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.issuanceDate !== undefined && object.issuanceDate !== null) {
            message.issuanceDate = object.issuanceDate;
        }
        else {
            message.issuanceDate = undefined;
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = proof_1.Proof.fromPartial(object.proof);
        }
        else {
            message.proof = undefined;
        }
        if (object.expirationDate !== undefined && object.expirationDate !== null) {
            message.expirationDate = object.expirationDate;
        }
        else {
            message.expirationDate = undefined;
        }
        return message;
    },
};
var baseCredentialRequest = {
    type: "",
    issuers: "",
    required: false,
};
exports.CredentialRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        for (var _i = 0, _a = message.issuers; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        if (message.required === true) {
            writer.uint32(24).bool(message.required);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseCredentialRequest);
        message.issuers = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.issuers.push(reader.string());
                    break;
                case 3:
                    message.required = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseCredentialRequest);
        message.issuers = [];
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = "";
        }
        if (object.issuers !== undefined && object.issuers !== null) {
            for (var _i = 0, _a = object.issuers; _i < _a.length; _i++) {
                var e = _a[_i];
                message.issuers.push(String(e));
            }
        }
        if (object.required !== undefined && object.required !== null) {
            message.required = Boolean(object.required);
        }
        else {
            message.required = false;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.type !== undefined && (obj.type = message.type);
        if (message.issuers) {
            obj.issuers = message.issuers.map(function (e) { return e; });
        }
        else {
            obj.issuers = [];
        }
        message.required !== undefined && (obj.required = message.required);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseCredentialRequest);
        message.issuers = [];
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = "";
        }
        if (object.issuers !== undefined && object.issuers !== null) {
            for (var _i = 0, _a = object.issuers; _i < _a.length; _i++) {
                var e = _a[_i];
                message.issuers.push(e);
            }
        }
        if (object.required !== undefined && object.required !== null) {
            message.required = object.required;
        }
        else {
            message.required = false;
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
//# sourceMappingURL=credential.js.map