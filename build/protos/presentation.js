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
exports.PresentationRequest = exports.UnsignedPresentationRequest = exports.Presentation = exports.UnsignedPresentation = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var timestamp_1 = require("./google/protobuf/timestamp");
var credential_1 = require("./credential");
var proof_1 = require("./proof");
var any_1 = require("./google/protobuf/any");
exports.protobufPackage = "presentation.v1";
var baseUnsignedPresentation = {
    context: "",
    type: "",
    presentationRequestUuid: "",
    verifierDid: "",
    uuid: "",
};
exports.UnsignedPresentation = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.context !== "") {
            writer.uint32(10).string(message.context);
        }
        for (var _i = 0, _a = message.type; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        if (message.presentationRequestUuid !== "") {
            writer.uint32(26).string(message.presentationRequestUuid);
        }
        if (message.verifierDid !== "") {
            writer.uint32(34).string(message.verifierDid);
        }
        for (var _b = 0, _c = message.verifiableCredential; _b < _c.length; _b++) {
            var v = _c[_b];
            credential_1.Credential.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.uuid !== "") {
            writer.uint32(130).string(message.uuid);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseUnsignedPresentation);
        message.type = [];
        message.verifiableCredential = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.context = reader.string();
                    break;
                case 2:
                    message.type.push(reader.string());
                    break;
                case 3:
                    message.presentationRequestUuid = reader.string();
                    break;
                case 4:
                    message.verifierDid = reader.string();
                    break;
                case 5:
                    message.verifiableCredential.push(credential_1.Credential.decode(reader, reader.uint32()));
                    break;
                case 16:
                    message.uuid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseUnsignedPresentation);
        message.type = [];
        message.verifiableCredential = [];
        if (object.context !== undefined && object.context !== null) {
            message.context = String(object.context);
        }
        else {
            message.context = "";
        }
        if (object.type !== undefined && object.type !== null) {
            for (var _i = 0, _a = object.type; _i < _a.length; _i++) {
                var e = _a[_i];
                message.type.push(String(e));
            }
        }
        if (object.presentationRequestUuid !== undefined &&
            object.presentationRequestUuid !== null) {
            message.presentationRequestUuid = String(object.presentationRequestUuid);
        }
        else {
            message.presentationRequestUuid = "";
        }
        if (object.verifierDid !== undefined && object.verifierDid !== null) {
            message.verifierDid = String(object.verifierDid);
        }
        else {
            message.verifierDid = "";
        }
        if (object.verifiableCredential !== undefined &&
            object.verifiableCredential !== null) {
            for (var _b = 0, _c = object.verifiableCredential; _b < _c.length; _b++) {
                var e = _c[_b];
                message.verifiableCredential.push(credential_1.Credential.fromJSON(e));
            }
        }
        if (object.uuid !== undefined && object.uuid !== null) {
            message.uuid = String(object.uuid);
        }
        else {
            message.uuid = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.context !== undefined && (obj.context = message.context);
        if (message.type) {
            obj.type = message.type.map(function (e) { return e; });
        }
        else {
            obj.type = [];
        }
        message.presentationRequestUuid !== undefined &&
            (obj.presentationRequestUuid = message.presentationRequestUuid);
        message.verifierDid !== undefined &&
            (obj.verifierDid = message.verifierDid);
        if (message.verifiableCredential) {
            obj.verifiableCredential = message.verifiableCredential.map(function (e) {
                return e ? credential_1.Credential.toJSON(e) : undefined;
            });
        }
        else {
            obj.verifiableCredential = [];
        }
        message.uuid !== undefined && (obj.uuid = message.uuid);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseUnsignedPresentation);
        message.type = [];
        message.verifiableCredential = [];
        if (object.context !== undefined && object.context !== null) {
            message.context = object.context;
        }
        else {
            message.context = "";
        }
        if (object.type !== undefined && object.type !== null) {
            for (var _i = 0, _a = object.type; _i < _a.length; _i++) {
                var e = _a[_i];
                message.type.push(e);
            }
        }
        if (object.presentationRequestUuid !== undefined &&
            object.presentationRequestUuid !== null) {
            message.presentationRequestUuid = object.presentationRequestUuid;
        }
        else {
            message.presentationRequestUuid = "";
        }
        if (object.verifierDid !== undefined && object.verifierDid !== null) {
            message.verifierDid = object.verifierDid;
        }
        else {
            message.verifierDid = "";
        }
        if (object.verifiableCredential !== undefined &&
            object.verifiableCredential !== null) {
            for (var _b = 0, _c = object.verifiableCredential; _b < _c.length; _b++) {
                var e = _c[_b];
                message.verifiableCredential.push(credential_1.Credential.fromPartial(e));
            }
        }
        if (object.uuid !== undefined && object.uuid !== null) {
            message.uuid = object.uuid;
        }
        else {
            message.uuid = "";
        }
        return message;
    },
};
var basePresentation = {
    context: "",
    type: "",
    presentationRequestUuid: "",
    verifierDid: "",
    uuid: "",
};
exports.Presentation = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.context !== "") {
            writer.uint32(10).string(message.context);
        }
        for (var _i = 0, _a = message.type; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        if (message.presentationRequestUuid !== "") {
            writer.uint32(26).string(message.presentationRequestUuid);
        }
        if (message.verifierDid !== "") {
            writer.uint32(34).string(message.verifierDid);
        }
        for (var _b = 0, _c = message.verifiableCredential; _b < _c.length; _b++) {
            var v = _c[_b];
            credential_1.Credential.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.proof !== undefined) {
            proof_1.Proof.encode(message.proof, writer.uint32(50).fork()).ldelim();
        }
        if (message.uuid !== "") {
            writer.uint32(130).string(message.uuid);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, basePresentation);
        message.type = [];
        message.verifiableCredential = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.context = reader.string();
                    break;
                case 2:
                    message.type.push(reader.string());
                    break;
                case 3:
                    message.presentationRequestUuid = reader.string();
                    break;
                case 4:
                    message.verifierDid = reader.string();
                    break;
                case 5:
                    message.verifiableCredential.push(credential_1.Credential.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.proof = proof_1.Proof.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.uuid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, basePresentation);
        message.type = [];
        message.verifiableCredential = [];
        if (object.context !== undefined && object.context !== null) {
            message.context = String(object.context);
        }
        else {
            message.context = "";
        }
        if (object.type !== undefined && object.type !== null) {
            for (var _i = 0, _a = object.type; _i < _a.length; _i++) {
                var e = _a[_i];
                message.type.push(String(e));
            }
        }
        if (object.presentationRequestUuid !== undefined &&
            object.presentationRequestUuid !== null) {
            message.presentationRequestUuid = String(object.presentationRequestUuid);
        }
        else {
            message.presentationRequestUuid = "";
        }
        if (object.verifierDid !== undefined && object.verifierDid !== null) {
            message.verifierDid = String(object.verifierDid);
        }
        else {
            message.verifierDid = "";
        }
        if (object.verifiableCredential !== undefined &&
            object.verifiableCredential !== null) {
            for (var _b = 0, _c = object.verifiableCredential; _b < _c.length; _b++) {
                var e = _c[_b];
                message.verifiableCredential.push(credential_1.Credential.fromJSON(e));
            }
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = proof_1.Proof.fromJSON(object.proof);
        }
        else {
            message.proof = undefined;
        }
        if (object.uuid !== undefined && object.uuid !== null) {
            message.uuid = String(object.uuid);
        }
        else {
            message.uuid = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.context !== undefined && (obj.context = message.context);
        if (message.type) {
            obj.type = message.type.map(function (e) { return e; });
        }
        else {
            obj.type = [];
        }
        message.presentationRequestUuid !== undefined &&
            (obj.presentationRequestUuid = message.presentationRequestUuid);
        message.verifierDid !== undefined &&
            (obj.verifierDid = message.verifierDid);
        if (message.verifiableCredential) {
            obj.verifiableCredential = message.verifiableCredential.map(function (e) {
                return e ? credential_1.Credential.toJSON(e) : undefined;
            });
        }
        else {
            obj.verifiableCredential = [];
        }
        message.proof !== undefined &&
            (obj.proof = message.proof ? proof_1.Proof.toJSON(message.proof) : undefined);
        message.uuid !== undefined && (obj.uuid = message.uuid);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, basePresentation);
        message.type = [];
        message.verifiableCredential = [];
        if (object.context !== undefined && object.context !== null) {
            message.context = object.context;
        }
        else {
            message.context = "";
        }
        if (object.type !== undefined && object.type !== null) {
            for (var _i = 0, _a = object.type; _i < _a.length; _i++) {
                var e = _a[_i];
                message.type.push(e);
            }
        }
        if (object.presentationRequestUuid !== undefined &&
            object.presentationRequestUuid !== null) {
            message.presentationRequestUuid = object.presentationRequestUuid;
        }
        else {
            message.presentationRequestUuid = "";
        }
        if (object.verifierDid !== undefined && object.verifierDid !== null) {
            message.verifierDid = object.verifierDid;
        }
        else {
            message.verifierDid = "";
        }
        if (object.verifiableCredential !== undefined &&
            object.verifiableCredential !== null) {
            for (var _b = 0, _c = object.verifiableCredential; _b < _c.length; _b++) {
                var e = _c[_b];
                message.verifiableCredential.push(credential_1.Credential.fromPartial(e));
            }
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = proof_1.Proof.fromPartial(object.proof);
        }
        else {
            message.proof = undefined;
        }
        if (object.uuid !== undefined && object.uuid !== null) {
            message.uuid = object.uuid;
        }
        else {
            message.uuid = "";
        }
        return message;
    },
};
var baseUnsignedPresentationRequest = {
    holderAppUuid: "",
    verifier: "",
    uuid: "",
};
exports.UnsignedPresentationRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.credentialRequests; _i < _a.length; _i++) {
            var v = _a[_i];
            credential_1.CredentialRequest.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.holderAppUuid !== "") {
            writer.uint32(18).string(message.holderAppUuid);
        }
        if (message.verifier !== "") {
            writer.uint32(26).string(message.verifier);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.expiresAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expiresAt), writer.uint32(50).fork()).ldelim();
        }
        if (message.metadata !== undefined) {
            any_1.Any.encode(message.metadata, writer.uint32(58).fork()).ldelim();
        }
        if (message.uuid !== "") {
            writer.uint32(66).string(message.uuid);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseUnsignedPresentationRequest);
        message.credentialRequests = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.credentialRequests.push(credential_1.CredentialRequest.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.holderAppUuid = reader.string();
                    break;
                case 3:
                    message.verifier = reader.string();
                    break;
                case 4:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.expiresAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.metadata = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.uuid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseUnsignedPresentationRequest);
        message.credentialRequests = [];
        if (object.credentialRequests !== undefined &&
            object.credentialRequests !== null) {
            for (var _i = 0, _a = object.credentialRequests; _i < _a.length; _i++) {
                var e = _a[_i];
                message.credentialRequests.push(credential_1.CredentialRequest.fromJSON(e));
            }
        }
        if (object.holderAppUuid !== undefined && object.holderAppUuid !== null) {
            message.holderAppUuid = String(object.holderAppUuid);
        }
        else {
            message.holderAppUuid = "";
        }
        if (object.verifier !== undefined && object.verifier !== null) {
            message.verifier = String(object.verifier);
        }
        else {
            message.verifier = "";
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
        if (object.expiresAt !== undefined && object.expiresAt !== null) {
            message.expiresAt = fromJsonTimestamp(object.expiresAt);
        }
        else {
            message.expiresAt = undefined;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = any_1.Any.fromJSON(object.metadata);
        }
        else {
            message.metadata = undefined;
        }
        if (object.uuid !== undefined && object.uuid !== null) {
            message.uuid = String(object.uuid);
        }
        else {
            message.uuid = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.credentialRequests) {
            obj.credentialRequests = message.credentialRequests.map(function (e) {
                return e ? credential_1.CredentialRequest.toJSON(e) : undefined;
            });
        }
        else {
            obj.credentialRequests = [];
        }
        message.holderAppUuid !== undefined &&
            (obj.holderAppUuid = message.holderAppUuid);
        message.verifier !== undefined && (obj.verifier = message.verifier);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined &&
            (obj.updatedAt = message.updatedAt.toISOString());
        message.expiresAt !== undefined &&
            (obj.expiresAt = message.expiresAt.toISOString());
        message.metadata !== undefined &&
            (obj.metadata = message.metadata
                ? any_1.Any.toJSON(message.metadata)
                : undefined);
        message.uuid !== undefined && (obj.uuid = message.uuid);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseUnsignedPresentationRequest);
        message.credentialRequests = [];
        if (object.credentialRequests !== undefined &&
            object.credentialRequests !== null) {
            for (var _i = 0, _a = object.credentialRequests; _i < _a.length; _i++) {
                var e = _a[_i];
                message.credentialRequests.push(credential_1.CredentialRequest.fromPartial(e));
            }
        }
        if (object.holderAppUuid !== undefined && object.holderAppUuid !== null) {
            message.holderAppUuid = object.holderAppUuid;
        }
        else {
            message.holderAppUuid = "";
        }
        if (object.verifier !== undefined && object.verifier !== null) {
            message.verifier = object.verifier;
        }
        else {
            message.verifier = "";
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
        if (object.expiresAt !== undefined && object.expiresAt !== null) {
            message.expiresAt = object.expiresAt;
        }
        else {
            message.expiresAt = undefined;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = any_1.Any.fromPartial(object.metadata);
        }
        else {
            message.metadata = undefined;
        }
        if (object.uuid !== undefined && object.uuid !== null) {
            message.uuid = object.uuid;
        }
        else {
            message.uuid = "";
        }
        return message;
    },
};
var basePresentationRequest = {
    holderAppUuid: "",
    verifier: "",
    uuid: "",
};
exports.PresentationRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.credentialRequests; _i < _a.length; _i++) {
            var v = _a[_i];
            credential_1.CredentialRequest.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.holderAppUuid !== "") {
            writer.uint32(18).string(message.holderAppUuid);
        }
        if (message.verifier !== "") {
            writer.uint32(26).string(message.verifier);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.expiresAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expiresAt), writer.uint32(50).fork()).ldelim();
        }
        if (message.metadata !== undefined) {
            any_1.Any.encode(message.metadata, writer.uint32(58).fork()).ldelim();
        }
        if (message.uuid !== "") {
            writer.uint32(66).string(message.uuid);
        }
        if (message.proof !== undefined) {
            proof_1.Proof.encode(message.proof, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, basePresentationRequest);
        message.credentialRequests = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.credentialRequests.push(credential_1.CredentialRequest.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.holderAppUuid = reader.string();
                    break;
                case 3:
                    message.verifier = reader.string();
                    break;
                case 4:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.expiresAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.metadata = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.uuid = reader.string();
                    break;
                case 9:
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
        var message = __assign({}, basePresentationRequest);
        message.credentialRequests = [];
        if (object.credentialRequests !== undefined &&
            object.credentialRequests !== null) {
            for (var _i = 0, _a = object.credentialRequests; _i < _a.length; _i++) {
                var e = _a[_i];
                message.credentialRequests.push(credential_1.CredentialRequest.fromJSON(e));
            }
        }
        if (object.holderAppUuid !== undefined && object.holderAppUuid !== null) {
            message.holderAppUuid = String(object.holderAppUuid);
        }
        else {
            message.holderAppUuid = "";
        }
        if (object.verifier !== undefined && object.verifier !== null) {
            message.verifier = String(object.verifier);
        }
        else {
            message.verifier = "";
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
        if (object.expiresAt !== undefined && object.expiresAt !== null) {
            message.expiresAt = fromJsonTimestamp(object.expiresAt);
        }
        else {
            message.expiresAt = undefined;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = any_1.Any.fromJSON(object.metadata);
        }
        else {
            message.metadata = undefined;
        }
        if (object.uuid !== undefined && object.uuid !== null) {
            message.uuid = String(object.uuid);
        }
        else {
            message.uuid = "";
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
                return e ? credential_1.CredentialRequest.toJSON(e) : undefined;
            });
        }
        else {
            obj.credentialRequests = [];
        }
        message.holderAppUuid !== undefined &&
            (obj.holderAppUuid = message.holderAppUuid);
        message.verifier !== undefined && (obj.verifier = message.verifier);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined &&
            (obj.updatedAt = message.updatedAt.toISOString());
        message.expiresAt !== undefined &&
            (obj.expiresAt = message.expiresAt.toISOString());
        message.metadata !== undefined &&
            (obj.metadata = message.metadata
                ? any_1.Any.toJSON(message.metadata)
                : undefined);
        message.uuid !== undefined && (obj.uuid = message.uuid);
        message.proof !== undefined &&
            (obj.proof = message.proof ? proof_1.Proof.toJSON(message.proof) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, basePresentationRequest);
        message.credentialRequests = [];
        if (object.credentialRequests !== undefined &&
            object.credentialRequests !== null) {
            for (var _i = 0, _a = object.credentialRequests; _i < _a.length; _i++) {
                var e = _a[_i];
                message.credentialRequests.push(credential_1.CredentialRequest.fromPartial(e));
            }
        }
        if (object.holderAppUuid !== undefined && object.holderAppUuid !== null) {
            message.holderAppUuid = object.holderAppUuid;
        }
        else {
            message.holderAppUuid = "";
        }
        if (object.verifier !== undefined && object.verifier !== null) {
            message.verifier = object.verifier;
        }
        else {
            message.verifier = "";
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
        if (object.expiresAt !== undefined && object.expiresAt !== null) {
            message.expiresAt = object.expiresAt;
        }
        else {
            message.expiresAt = undefined;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = any_1.Any.fromPartial(object.metadata);
        }
        else {
            message.metadata = undefined;
        }
        if (object.uuid !== undefined && object.uuid !== null) {
            message.uuid = object.uuid;
        }
        else {
            message.uuid = "";
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
//# sourceMappingURL=presentation.js.map