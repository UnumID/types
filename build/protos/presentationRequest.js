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
exports.PresentationRequest = exports.UnsignedPresentationRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var timestamp_1 = require("./google/protobuf/timestamp");
var credential_1 = require("./credential");
var proof_1 = require("./proof");
exports.protobufPackage = "presentationRequest.v1";
var baseUnsignedPresentationRequest = {
    verifier: "",
    metadata: "",
    uuid: "",
    id: "",
    version: "",
};
exports.UnsignedPresentationRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.credentialRequests; _i < _a.length; _i++) {
            var v = _a[_i];
            credential_1.CredentialRequest.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.holderAppUuid !== undefined) {
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
        if (message.metadata !== "") {
            writer.uint32(58).string(message.metadata);
        }
        if (message.uuid !== "") {
            writer.uint32(66).string(message.uuid);
        }
        if (message.id !== "") {
            writer.uint32(74).string(message.id);
        }
        if (message.version !== "") {
            writer.uint32(82).string(message.version);
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
                    message.metadata = reader.string();
                    break;
                case 8:
                    message.uuid = reader.string();
                    break;
                case 9:
                    message.id = reader.string();
                    break;
                case 10:
                    message.version = reader.string();
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
            message.holderAppUuid = undefined;
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
            message.metadata = String(object.metadata);
        }
        else {
            message.metadata = "";
        }
        if (object.uuid !== undefined && object.uuid !== null) {
            message.uuid = String(object.uuid);
        }
        else {
            message.uuid = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = "";
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
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.uuid !== undefined && (obj.uuid = message.uuid);
        message.id !== undefined && (obj.id = message.id);
        message.version !== undefined && (obj.version = message.version);
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
            message.holderAppUuid = undefined;
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
            message.metadata = object.metadata;
        }
        else {
            message.metadata = "";
        }
        if (object.uuid !== undefined && object.uuid !== null) {
            message.uuid = object.uuid;
        }
        else {
            message.uuid = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = "";
        }
        return message;
    },
};
var basePresentationRequest = {
    verifier: "",
    metadata: "",
    uuid: "",
    id: "",
    version: "",
};
exports.PresentationRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.credentialRequests; _i < _a.length; _i++) {
            var v = _a[_i];
            credential_1.CredentialRequest.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.holderAppUuid !== undefined) {
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
        if (message.metadata !== "") {
            writer.uint32(58).string(message.metadata);
        }
        if (message.uuid !== "") {
            writer.uint32(66).string(message.uuid);
        }
        if (message.proof !== undefined) {
            proof_1.Proof.encode(message.proof, writer.uint32(74).fork()).ldelim();
        }
        if (message.id !== "") {
            writer.uint32(82).string(message.id);
        }
        if (message.version !== "") {
            writer.uint32(90).string(message.version);
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
                    message.metadata = reader.string();
                    break;
                case 8:
                    message.uuid = reader.string();
                    break;
                case 9:
                    message.proof = proof_1.Proof.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.id = reader.string();
                    break;
                case 11:
                    message.version = reader.string();
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
            message.holderAppUuid = undefined;
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
            message.metadata = String(object.metadata);
        }
        else {
            message.metadata = "";
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
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = "";
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
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.uuid !== undefined && (obj.uuid = message.uuid);
        message.proof !== undefined &&
            (obj.proof = message.proof ? proof_1.Proof.toJSON(message.proof) : undefined);
        message.id !== undefined && (obj.id = message.id);
        message.version !== undefined && (obj.version = message.version);
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
            message.holderAppUuid = undefined;
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
            message.metadata = object.metadata;
        }
        else {
            message.metadata = "";
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
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = "";
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
//# sourceMappingURL=presentationRequest.js.map