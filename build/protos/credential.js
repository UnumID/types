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
exports.CredentialStatusesOptions = exports.CredentialStatusOptions = exports.RevokeAllCredentials = exports.UnsignedRevokeAllCredentials = exports.EncryptedCredentialEnriched = exports.EncryptedCredential = exports.CredentialStatusInfo = exports.IssueCredentialsOptions = exports.IssueCredentialOptions = exports.EncryptedCredentialOptions = exports.SubjectCredentialRequestsEnrichedDto = exports.SubjectCredentialRequestsDto = exports.SubjectCredentialRequests = exports.UnsignedSubjectCredentialRequests = exports.CredentialsIssuedResponse = exports.CredentialRequest = exports.Credential = exports.UnsignedCredential = exports.CredentialStatus = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var timestamp_1 = require("./google/protobuf/timestamp");
var proof_1 = require("./proof");
var didDocument_1 = require("./didDocument");
var crypto_1 = require("./crypto");
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
        for (var _i = 0, _a = message.context; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
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
        for (var _b = 0, _c = message.type; _b < _c.length; _b++) {
            var v = _c[_b];
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
        message.context = [];
        message.type = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.context.push(reader.string());
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
        message.context = [];
        message.type = [];
        if (object.context !== undefined && object.context !== null) {
            for (var _i = 0, _a = object.context; _i < _a.length; _i++) {
                var e = _a[_i];
                message.context.push(String(e));
            }
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
            for (var _b = 0, _c = object.type; _b < _c.length; _b++) {
                var e = _c[_b];
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
        if (message.context) {
            obj.context = message.context.map(function (e) { return e; });
        }
        else {
            obj.context = [];
        }
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
        message.context = [];
        message.type = [];
        if (object.context !== undefined && object.context !== null) {
            for (var _i = 0, _a = object.context; _i < _a.length; _i++) {
                var e = _a[_i];
                message.context.push(e);
            }
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
            for (var _b = 0, _c = object.type; _b < _c.length; _b++) {
                var e = _c[_b];
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
        for (var _i = 0, _a = message.context; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
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
        for (var _b = 0, _c = message.type; _b < _c.length; _b++) {
            var v = _c[_b];
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
        message.context = [];
        message.type = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.context.push(reader.string());
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
        message.context = [];
        message.type = [];
        if (object.context !== undefined && object.context !== null) {
            for (var _i = 0, _a = object.context; _i < _a.length; _i++) {
                var e = _a[_i];
                message.context.push(String(e));
            }
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
            for (var _b = 0, _c = object.type; _b < _c.length; _b++) {
                var e = _c[_b];
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
        if (message.context) {
            obj.context = message.context.map(function (e) { return e; });
        }
        else {
            obj.context = [];
        }
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
        message.context = [];
        message.type = [];
        if (object.context !== undefined && object.context !== null) {
            for (var _i = 0, _a = object.context; _i < _a.length; _i++) {
                var e = _a[_i];
                message.context.push(e);
            }
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
            for (var _b = 0, _c = object.type; _b < _c.length; _b++) {
                var e = _c[_b];
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
var baseCredentialsIssuedResponse = { credentialTypesIssued: "" };
exports.CredentialsIssuedResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.credentialTypesIssued; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseCredentialsIssuedResponse);
        message.credentialTypesIssued = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.credentialTypesIssued.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseCredentialsIssuedResponse);
        message.credentialTypesIssued = [];
        if (object.credentialTypesIssued !== undefined &&
            object.credentialTypesIssued !== null) {
            for (var _i = 0, _a = object.credentialTypesIssued; _i < _a.length; _i++) {
                var e = _a[_i];
                message.credentialTypesIssued.push(String(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.credentialTypesIssued) {
            obj.credentialTypesIssued = message.credentialTypesIssued.map(function (e) { return e; });
        }
        else {
            obj.credentialTypesIssued = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseCredentialsIssuedResponse);
        message.credentialTypesIssued = [];
        if (object.credentialTypesIssued !== undefined &&
            object.credentialTypesIssued !== null) {
            for (var _i = 0, _a = object.credentialTypesIssued; _i < _a.length; _i++) {
                var e = _a[_i];
                message.credentialTypesIssued.push(e);
            }
        }
        return message;
    },
};
var baseUnsignedSubjectCredentialRequests = {};
exports.UnsignedSubjectCredentialRequests = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.credentialRequests; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.CredentialRequest.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseUnsignedSubjectCredentialRequests);
        message.credentialRequests = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.credentialRequests.push(exports.CredentialRequest.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseUnsignedSubjectCredentialRequests);
        message.credentialRequests = [];
        if (object.credentialRequests !== undefined &&
            object.credentialRequests !== null) {
            for (var _i = 0, _a = object.credentialRequests; _i < _a.length; _i++) {
                var e = _a[_i];
                message.credentialRequests.push(exports.CredentialRequest.fromJSON(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.credentialRequests) {
            obj.credentialRequests = message.credentialRequests.map(function (e) {
                return e ? exports.CredentialRequest.toJSON(e) : undefined;
            });
        }
        else {
            obj.credentialRequests = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseUnsignedSubjectCredentialRequests);
        message.credentialRequests = [];
        if (object.credentialRequests !== undefined &&
            object.credentialRequests !== null) {
            for (var _i = 0, _a = object.credentialRequests; _i < _a.length; _i++) {
                var e = _a[_i];
                message.credentialRequests.push(exports.CredentialRequest.fromPartial(e));
            }
        }
        return message;
    },
};
var baseSubjectCredentialRequests = {};
exports.SubjectCredentialRequests = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.credentialRequests; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.CredentialRequest.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof !== undefined) {
            proof_1.Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseSubjectCredentialRequests);
        message.credentialRequests = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.credentialRequests.push(exports.CredentialRequest.decode(reader, reader.uint32()));
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
        var message = __assign({}, baseSubjectCredentialRequests);
        message.credentialRequests = [];
        if (object.credentialRequests !== undefined &&
            object.credentialRequests !== null) {
            for (var _i = 0, _a = object.credentialRequests; _i < _a.length; _i++) {
                var e = _a[_i];
                message.credentialRequests.push(exports.CredentialRequest.fromJSON(e));
            }
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
        if (message.credentialRequests) {
            obj.credentialRequests = message.credentialRequests.map(function (e) {
                return e ? exports.CredentialRequest.toJSON(e) : undefined;
            });
        }
        else {
            obj.credentialRequests = [];
        }
        message.proof !== undefined &&
            (obj.proof = message.proof ? proof_1.Proof.toJSON(message.proof) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseSubjectCredentialRequests);
        message.credentialRequests = [];
        if (object.credentialRequests !== undefined &&
            object.credentialRequests !== null) {
            for (var _i = 0, _a = object.credentialRequests; _i < _a.length; _i++) {
                var e = _a[_i];
                message.credentialRequests.push(exports.CredentialRequest.fromPartial(e));
            }
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
var baseSubjectCredentialRequestsDto = {
    issuerDid: "",
    subjectDid: "",
};
exports.SubjectCredentialRequestsDto = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.subjectCredentialRequests !== undefined) {
            exports.SubjectCredentialRequests.encode(message.subjectCredentialRequests, writer.uint32(10).fork()).ldelim();
        }
        if (message.issuerDid !== "") {
            writer.uint32(18).string(message.issuerDid);
        }
        if (message.subjectDid !== "") {
            writer.uint32(26).string(message.subjectDid);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseSubjectCredentialRequestsDto);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectCredentialRequests = exports.SubjectCredentialRequests.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.issuerDid = reader.string();
                    break;
                case 3:
                    message.subjectDid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseSubjectCredentialRequestsDto);
        if (object.subjectCredentialRequests !== undefined &&
            object.subjectCredentialRequests !== null) {
            message.subjectCredentialRequests = exports.SubjectCredentialRequests.fromJSON(object.subjectCredentialRequests);
        }
        else {
            message.subjectCredentialRequests = undefined;
        }
        if (object.issuerDid !== undefined && object.issuerDid !== null) {
            message.issuerDid = String(object.issuerDid);
        }
        else {
            message.issuerDid = "";
        }
        if (object.subjectDid !== undefined && object.subjectDid !== null) {
            message.subjectDid = String(object.subjectDid);
        }
        else {
            message.subjectDid = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.subjectCredentialRequests !== undefined &&
            (obj.subjectCredentialRequests = message.subjectCredentialRequests
                ? exports.SubjectCredentialRequests.toJSON(message.subjectCredentialRequests)
                : undefined);
        message.issuerDid !== undefined && (obj.issuerDid = message.issuerDid);
        message.subjectDid !== undefined && (obj.subjectDid = message.subjectDid);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseSubjectCredentialRequestsDto);
        if (object.subjectCredentialRequests !== undefined &&
            object.subjectCredentialRequests !== null) {
            message.subjectCredentialRequests = exports.SubjectCredentialRequests.fromPartial(object.subjectCredentialRequests);
        }
        else {
            message.subjectCredentialRequests = undefined;
        }
        if (object.issuerDid !== undefined && object.issuerDid !== null) {
            message.issuerDid = object.issuerDid;
        }
        else {
            message.issuerDid = "";
        }
        if (object.subjectDid !== undefined && object.subjectDid !== null) {
            message.subjectDid = object.subjectDid;
        }
        else {
            message.subjectDid = "";
        }
        return message;
    },
};
var baseSubjectCredentialRequestsEnrichedDto = {};
exports.SubjectCredentialRequestsEnrichedDto = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.credentialRequestsInfo !== undefined) {
            exports.SubjectCredentialRequestsDto.encode(message.credentialRequestsInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.userDidAssociation !== undefined) {
            didDocument_1.UserDidAssociation.encode(message.userDidAssociation, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseSubjectCredentialRequestsEnrichedDto);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.credentialRequestsInfo = exports.SubjectCredentialRequestsDto.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userDidAssociation = didDocument_1.UserDidAssociation.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseSubjectCredentialRequestsEnrichedDto);
        if (object.credentialRequestsInfo !== undefined &&
            object.credentialRequestsInfo !== null) {
            message.credentialRequestsInfo = exports.SubjectCredentialRequestsDto.fromJSON(object.credentialRequestsInfo);
        }
        else {
            message.credentialRequestsInfo = undefined;
        }
        if (object.userDidAssociation !== undefined &&
            object.userDidAssociation !== null) {
            message.userDidAssociation = didDocument_1.UserDidAssociation.fromJSON(object.userDidAssociation);
        }
        else {
            message.userDidAssociation = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.credentialRequestsInfo !== undefined &&
            (obj.credentialRequestsInfo = message.credentialRequestsInfo
                ? exports.SubjectCredentialRequestsDto.toJSON(message.credentialRequestsInfo)
                : undefined);
        message.userDidAssociation !== undefined &&
            (obj.userDidAssociation = message.userDidAssociation
                ? didDocument_1.UserDidAssociation.toJSON(message.userDidAssociation)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseSubjectCredentialRequestsEnrichedDto);
        if (object.credentialRequestsInfo !== undefined &&
            object.credentialRequestsInfo !== null) {
            message.credentialRequestsInfo = exports.SubjectCredentialRequestsDto.fromPartial(object.credentialRequestsInfo);
        }
        else {
            message.credentialRequestsInfo = undefined;
        }
        if (object.userDidAssociation !== undefined &&
            object.userDidAssociation !== null) {
            message.userDidAssociation = didDocument_1.UserDidAssociation.fromPartial(object.userDidAssociation);
        }
        else {
            message.userDidAssociation = undefined;
        }
        return message;
    },
};
var baseEncryptedCredentialOptions = {
    credentialId: "",
    subject: "",
    issuer: "",
    type: "",
};
exports.EncryptedCredentialOptions = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.credentialId !== "") {
            writer.uint32(10).string(message.credentialId);
        }
        if (message.subject !== "") {
            writer.uint32(18).string(message.subject);
        }
        if (message.issuer !== "") {
            writer.uint32(26).string(message.issuer);
        }
        if (message.type !== "") {
            writer.uint32(34).string(message.type);
        }
        if (message.data !== undefined) {
            crypto_1.EncryptedData.encode(message.data, writer.uint32(42).fork()).ldelim();
        }
        if (message.expirationDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expirationDate), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseEncryptedCredentialOptions);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.credentialId = reader.string();
                    break;
                case 2:
                    message.subject = reader.string();
                    break;
                case 3:
                    message.issuer = reader.string();
                    break;
                case 4:
                    message.type = reader.string();
                    break;
                case 5:
                    message.data = crypto_1.EncryptedData.decode(reader, reader.uint32());
                    break;
                case 6:
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
        var message = __assign({}, baseEncryptedCredentialOptions);
        if (object.credentialId !== undefined && object.credentialId !== null) {
            message.credentialId = String(object.credentialId);
        }
        else {
            message.credentialId = "";
        }
        if (object.subject !== undefined && object.subject !== null) {
            message.subject = String(object.subject);
        }
        else {
            message.subject = "";
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = String(object.issuer);
        }
        else {
            message.issuer = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = crypto_1.EncryptedData.fromJSON(object.data);
        }
        else {
            message.data = undefined;
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
        message.credentialId !== undefined &&
            (obj.credentialId = message.credentialId);
        message.subject !== undefined && (obj.subject = message.subject);
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.type !== undefined && (obj.type = message.type);
        message.data !== undefined &&
            (obj.data = message.data
                ? crypto_1.EncryptedData.toJSON(message.data)
                : undefined);
        message.expirationDate !== undefined &&
            (obj.expirationDate = message.expirationDate.toISOString());
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseEncryptedCredentialOptions);
        if (object.credentialId !== undefined && object.credentialId !== null) {
            message.credentialId = object.credentialId;
        }
        else {
            message.credentialId = "";
        }
        if (object.subject !== undefined && object.subject !== null) {
            message.subject = object.subject;
        }
        else {
            message.subject = "";
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        else {
            message.issuer = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = crypto_1.EncryptedData.fromPartial(object.data);
        }
        else {
            message.data = undefined;
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
var baseIssueCredentialOptions = {
    credentialId: "",
    subject: "",
    issuer: "",
    type: "",
};
exports.IssueCredentialOptions = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.credentialId !== "") {
            writer.uint32(10).string(message.credentialId);
        }
        if (message.subject !== "") {
            writer.uint32(18).string(message.subject);
        }
        if (message.issuer !== "") {
            writer.uint32(26).string(message.issuer);
        }
        if (message.type !== "") {
            writer.uint32(34).string(message.type);
        }
        for (var _i = 0, _a = message.encryptedCredentials; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.EncryptedCredentialOptions.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseIssueCredentialOptions);
        message.encryptedCredentials = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.credentialId = reader.string();
                    break;
                case 2:
                    message.subject = reader.string();
                    break;
                case 3:
                    message.issuer = reader.string();
                    break;
                case 4:
                    message.type = reader.string();
                    break;
                case 5:
                    message.encryptedCredentials.push(exports.EncryptedCredentialOptions.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseIssueCredentialOptions);
        message.encryptedCredentials = [];
        if (object.credentialId !== undefined && object.credentialId !== null) {
            message.credentialId = String(object.credentialId);
        }
        else {
            message.credentialId = "";
        }
        if (object.subject !== undefined && object.subject !== null) {
            message.subject = String(object.subject);
        }
        else {
            message.subject = "";
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = String(object.issuer);
        }
        else {
            message.issuer = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = "";
        }
        if (object.encryptedCredentials !== undefined &&
            object.encryptedCredentials !== null) {
            for (var _i = 0, _a = object.encryptedCredentials; _i < _a.length; _i++) {
                var e = _a[_i];
                message.encryptedCredentials.push(exports.EncryptedCredentialOptions.fromJSON(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.credentialId !== undefined &&
            (obj.credentialId = message.credentialId);
        message.subject !== undefined && (obj.subject = message.subject);
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.type !== undefined && (obj.type = message.type);
        if (message.encryptedCredentials) {
            obj.encryptedCredentials = message.encryptedCredentials.map(function (e) {
                return e ? exports.EncryptedCredentialOptions.toJSON(e) : undefined;
            });
        }
        else {
            obj.encryptedCredentials = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseIssueCredentialOptions);
        message.encryptedCredentials = [];
        if (object.credentialId !== undefined && object.credentialId !== null) {
            message.credentialId = object.credentialId;
        }
        else {
            message.credentialId = "";
        }
        if (object.subject !== undefined && object.subject !== null) {
            message.subject = object.subject;
        }
        else {
            message.subject = "";
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        else {
            message.issuer = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = "";
        }
        if (object.encryptedCredentials !== undefined &&
            object.encryptedCredentials !== null) {
            for (var _i = 0, _a = object.encryptedCredentials; _i < _a.length; _i++) {
                var e = _a[_i];
                message.encryptedCredentials.push(exports.EncryptedCredentialOptions.fromPartial(e));
            }
        }
        return message;
    },
};
var baseIssueCredentialsOptions = {};
exports.IssueCredentialsOptions = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.credentialRequests; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.IssueCredentialOptions.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseIssueCredentialsOptions);
        message.credentialRequests = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.credentialRequests.push(exports.IssueCredentialOptions.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseIssueCredentialsOptions);
        message.credentialRequests = [];
        if (object.credentialRequests !== undefined &&
            object.credentialRequests !== null) {
            for (var _i = 0, _a = object.credentialRequests; _i < _a.length; _i++) {
                var e = _a[_i];
                message.credentialRequests.push(exports.IssueCredentialOptions.fromJSON(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.credentialRequests) {
            obj.credentialRequests = message.credentialRequests.map(function (e) {
                return e ? exports.IssueCredentialOptions.toJSON(e) : undefined;
            });
        }
        else {
            obj.credentialRequests = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseIssueCredentialsOptions);
        message.credentialRequests = [];
        if (object.credentialRequests !== undefined &&
            object.credentialRequests !== null) {
            for (var _i = 0, _a = object.credentialRequests; _i < _a.length; _i++) {
                var e = _a[_i];
                message.credentialRequests.push(exports.IssueCredentialOptions.fromPartial(e));
            }
        }
        return message;
    },
};
var baseCredentialStatusInfo = {
    uuid: "",
    credentialId: "",
    status: "",
};
exports.CredentialStatusInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.uuid !== "") {
            writer.uint32(10).string(message.uuid);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.credentialId !== "") {
            writer.uint32(34).string(message.credentialId);
        }
        if (message.status !== "") {
            writer.uint32(42).string(message.status);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseCredentialStatusInfo);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.credentialId = reader.string();
                    break;
                case 5:
                    message.status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseCredentialStatusInfo);
        if (object.uuid !== undefined && object.uuid !== null) {
            message.uuid = String(object.uuid);
        }
        else {
            message.uuid = "";
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
        if (object.credentialId !== undefined && object.credentialId !== null) {
            message.credentialId = String(object.credentialId);
        }
        else {
            message.credentialId = "";
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = String(object.status);
        }
        else {
            message.status = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.uuid !== undefined && (obj.uuid = message.uuid);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined &&
            (obj.updatedAt = message.updatedAt.toISOString());
        message.credentialId !== undefined &&
            (obj.credentialId = message.credentialId);
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseCredentialStatusInfo);
        if (object.uuid !== undefined && object.uuid !== null) {
            message.uuid = object.uuid;
        }
        else {
            message.uuid = "";
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
        if (object.credentialId !== undefined && object.credentialId !== null) {
            message.credentialId = object.credentialId;
        }
        else {
            message.credentialId = "";
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = "";
        }
        return message;
    },
};
var baseEncryptedCredential = {
    uuid: "",
    credentialId: "",
    subject: "",
    issuer: "",
    type: "",
    version: "",
};
exports.EncryptedCredential = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.uuid !== "") {
            writer.uint32(10).string(message.uuid);
        }
        if (message.credentialId !== "") {
            writer.uint32(18).string(message.credentialId);
        }
        if (message.subject !== "") {
            writer.uint32(26).string(message.subject);
        }
        if (message.issuer !== "") {
            writer.uint32(34).string(message.issuer);
        }
        if (message.type !== "") {
            writer.uint32(42).string(message.type);
        }
        if (message.data !== undefined) {
            crypto_1.EncryptedData.encode(message.data, writer.uint32(50).fork()).ldelim();
        }
        if (message.version !== "") {
            writer.uint32(58).string(message.version);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(66).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseEncryptedCredential);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.credentialId = reader.string();
                    break;
                case 3:
                    message.subject = reader.string();
                    break;
                case 4:
                    message.issuer = reader.string();
                    break;
                case 5:
                    message.type = reader.string();
                    break;
                case 6:
                    message.data = crypto_1.EncryptedData.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.version = reader.string();
                    break;
                case 8:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseEncryptedCredential);
        if (object.uuid !== undefined && object.uuid !== null) {
            message.uuid = String(object.uuid);
        }
        else {
            message.uuid = "";
        }
        if (object.credentialId !== undefined && object.credentialId !== null) {
            message.credentialId = String(object.credentialId);
        }
        else {
            message.credentialId = "";
        }
        if (object.subject !== undefined && object.subject !== null) {
            message.subject = String(object.subject);
        }
        else {
            message.subject = "";
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = String(object.issuer);
        }
        else {
            message.issuer = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = crypto_1.EncryptedData.fromJSON(object.data);
        }
        else {
            message.data = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = "";
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
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.uuid !== undefined && (obj.uuid = message.uuid);
        message.credentialId !== undefined &&
            (obj.credentialId = message.credentialId);
        message.subject !== undefined && (obj.subject = message.subject);
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.type !== undefined && (obj.type = message.type);
        message.data !== undefined &&
            (obj.data = message.data
                ? crypto_1.EncryptedData.toJSON(message.data)
                : undefined);
        message.version !== undefined && (obj.version = message.version);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined &&
            (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseEncryptedCredential);
        if (object.uuid !== undefined && object.uuid !== null) {
            message.uuid = object.uuid;
        }
        else {
            message.uuid = "";
        }
        if (object.credentialId !== undefined && object.credentialId !== null) {
            message.credentialId = object.credentialId;
        }
        else {
            message.credentialId = "";
        }
        if (object.subject !== undefined && object.subject !== null) {
            message.subject = object.subject;
        }
        else {
            message.subject = "";
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        else {
            message.issuer = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = crypto_1.EncryptedData.fromPartial(object.data);
        }
        else {
            message.data = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = "";
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
        return message;
    },
};
var baseEncryptedCredentialEnriched = {};
exports.EncryptedCredentialEnriched = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.encryptedCredential !== undefined) {
            exports.EncryptedCredential.encode(message.encryptedCredential, writer.uint32(10).fork()).ldelim();
        }
        if (message.didDocument !== undefined) {
            didDocument_1.DidDocument.encode(message.didDocument, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseEncryptedCredentialEnriched);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.encryptedCredential = exports.EncryptedCredential.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.didDocument = didDocument_1.DidDocument.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseEncryptedCredentialEnriched);
        if (object.encryptedCredential !== undefined &&
            object.encryptedCredential !== null) {
            message.encryptedCredential = exports.EncryptedCredential.fromJSON(object.encryptedCredential);
        }
        else {
            message.encryptedCredential = undefined;
        }
        if (object.didDocument !== undefined && object.didDocument !== null) {
            message.didDocument = didDocument_1.DidDocument.fromJSON(object.didDocument);
        }
        else {
            message.didDocument = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.encryptedCredential !== undefined &&
            (obj.encryptedCredential = message.encryptedCredential
                ? exports.EncryptedCredential.toJSON(message.encryptedCredential)
                : undefined);
        message.didDocument !== undefined &&
            (obj.didDocument = message.didDocument
                ? didDocument_1.DidDocument.toJSON(message.didDocument)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseEncryptedCredentialEnriched);
        if (object.encryptedCredential !== undefined &&
            object.encryptedCredential !== null) {
            message.encryptedCredential = exports.EncryptedCredential.fromPartial(object.encryptedCredential);
        }
        else {
            message.encryptedCredential = undefined;
        }
        if (object.didDocument !== undefined && object.didDocument !== null) {
            message.didDocument = didDocument_1.DidDocument.fromPartial(object.didDocument);
        }
        else {
            message.didDocument = undefined;
        }
        return message;
    },
};
var baseUnsignedRevokeAllCredentials = { did: "" };
exports.UnsignedRevokeAllCredentials = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.did !== "") {
            writer.uint32(10).string(message.did);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseUnsignedRevokeAllCredentials);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        var message = __assign({}, baseUnsignedRevokeAllCredentials);
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
        message.did !== undefined && (obj.did = message.did);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseUnsignedRevokeAllCredentials);
        if (object.did !== undefined && object.did !== null) {
            message.did = object.did;
        }
        else {
            message.did = "";
        }
        return message;
    },
};
var baseRevokeAllCredentials = { did: "" };
exports.RevokeAllCredentials = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.did !== "") {
            writer.uint32(10).string(message.did);
        }
        if (message.proof !== undefined) {
            proof_1.Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseRevokeAllCredentials);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.did = reader.string();
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
        var message = __assign({}, baseRevokeAllCredentials);
        if (object.did !== undefined && object.did !== null) {
            message.did = String(object.did);
        }
        else {
            message.did = "";
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
        message.did !== undefined && (obj.did = message.did);
        message.proof !== undefined &&
            (obj.proof = message.proof ? proof_1.Proof.toJSON(message.proof) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseRevokeAllCredentials);
        if (object.did !== undefined && object.did !== null) {
            message.did = object.did;
        }
        else {
            message.did = "";
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
var baseCredentialStatusOptions = { status: "" };
exports.CredentialStatusOptions = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseCredentialStatusOptions);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseCredentialStatusOptions);
        if (object.status !== undefined && object.status !== null) {
            message.status = String(object.status);
        }
        else {
            message.status = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseCredentialStatusOptions);
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = "";
        }
        return message;
    },
};
var baseCredentialStatusesOptions = { status: "", credentialIds: "" };
exports.CredentialStatusesOptions = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        for (var _i = 0, _a = message.credentialIds; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseCredentialStatusesOptions);
        message.credentialIds = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.string();
                    break;
                case 2:
                    message.credentialIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseCredentialStatusesOptions);
        message.credentialIds = [];
        if (object.status !== undefined && object.status !== null) {
            message.status = String(object.status);
        }
        else {
            message.status = "";
        }
        if (object.credentialIds !== undefined && object.credentialIds !== null) {
            for (var _i = 0, _a = object.credentialIds; _i < _a.length; _i++) {
                var e = _a[_i];
                message.credentialIds.push(String(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.status !== undefined && (obj.status = message.status);
        if (message.credentialIds) {
            obj.credentialIds = message.credentialIds.map(function (e) { return e; });
        }
        else {
            obj.credentialIds = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseCredentialStatusesOptions);
        message.credentialIds = [];
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = "";
        }
        if (object.credentialIds !== undefined && object.credentialIds !== null) {
            for (var _i = 0, _a = object.credentialIds; _i < _a.length; _i++) {
                var e = _a[_i];
                message.credentialIds.push(e);
            }
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