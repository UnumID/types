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
exports.Verified = exports.PresentationVerifiedReceiptOptions = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "receipt.v1";
var basePresentationVerifiedReceiptOptions = {
    type: "",
    verifier: "",
    subject: "",
};
exports.PresentationVerifiedReceiptOptions = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.verifier !== "") {
            writer.uint32(18).string(message.verifier);
        }
        if (message.subject !== "") {
            writer.uint32(26).string(message.subject);
        }
        if (message.data !== undefined) {
            exports.Verified.encode(message.data, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, basePresentationVerifiedReceiptOptions);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.verifier = reader.string();
                    break;
                case 3:
                    message.subject = reader.string();
                    break;
                case 4:
                    message.data = exports.Verified.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, basePresentationVerifiedReceiptOptions);
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = "";
        }
        if (object.verifier !== undefined && object.verifier !== null) {
            message.verifier = String(object.verifier);
        }
        else {
            message.verifier = "";
        }
        if (object.subject !== undefined && object.subject !== null) {
            message.subject = String(object.subject);
        }
        else {
            message.subject = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = exports.Verified.fromJSON(object.data);
        }
        else {
            message.data = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.verifier !== undefined && (obj.verifier = message.verifier);
        message.subject !== undefined && (obj.subject = message.subject);
        message.data !== undefined &&
            (obj.data = message.data ? exports.Verified.toJSON(message.data) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, basePresentationVerifiedReceiptOptions);
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = "";
        }
        if (object.verifier !== undefined && object.verifier !== null) {
            message.verifier = object.verifier;
        }
        else {
            message.verifier = "";
        }
        if (object.subject !== undefined && object.subject !== null) {
            message.subject = object.subject;
        }
        else {
            message.subject = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = exports.Verified.fromPartial(object.data);
        }
        else {
            message.data = undefined;
        }
        return message;
    },
};
var baseVerified = {
    isVerified: false,
    credentialTypes: "",
    issuers: "",
    reason: "",
    reply: "",
    requestId: "",
    requestUuid: "",
};
exports.Verified = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.isVerified === true) {
            writer.uint32(8).bool(message.isVerified);
        }
        for (var _i = 0, _a = message.credentialTypes; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        for (var _b = 0, _c = message.issuers; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(26).string(v);
        }
        if (message.reason !== "") {
            writer.uint32(34).string(message.reason);
        }
        if (message.reply !== "") {
            writer.uint32(42).string(message.reply);
        }
        if (message.requestId !== "") {
            writer.uint32(50).string(message.requestId);
        }
        if (message.requestUuid !== "") {
            writer.uint32(58).string(message.requestUuid);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseVerified);
        message.credentialTypes = [];
        message.issuers = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.isVerified = reader.bool();
                    break;
                case 2:
                    message.credentialTypes.push(reader.string());
                    break;
                case 3:
                    message.issuers.push(reader.string());
                    break;
                case 4:
                    message.reason = reader.string();
                    break;
                case 5:
                    message.reply = reader.string();
                    break;
                case 6:
                    message.requestId = reader.string();
                    break;
                case 7:
                    message.requestUuid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseVerified);
        message.credentialTypes = [];
        message.issuers = [];
        if (object.isVerified !== undefined && object.isVerified !== null) {
            message.isVerified = Boolean(object.isVerified);
        }
        else {
            message.isVerified = false;
        }
        if (object.credentialTypes !== undefined &&
            object.credentialTypes !== null) {
            for (var _i = 0, _a = object.credentialTypes; _i < _a.length; _i++) {
                var e = _a[_i];
                message.credentialTypes.push(String(e));
            }
        }
        if (object.issuers !== undefined && object.issuers !== null) {
            for (var _b = 0, _c = object.issuers; _b < _c.length; _b++) {
                var e = _c[_b];
                message.issuers.push(String(e));
            }
        }
        if (object.reason !== undefined && object.reason !== null) {
            message.reason = String(object.reason);
        }
        else {
            message.reason = "";
        }
        if (object.reply !== undefined && object.reply !== null) {
            message.reply = String(object.reply);
        }
        else {
            message.reply = "";
        }
        if (object.requestId !== undefined && object.requestId !== null) {
            message.requestId = String(object.requestId);
        }
        else {
            message.requestId = "";
        }
        if (object.requestUuid !== undefined && object.requestUuid !== null) {
            message.requestUuid = String(object.requestUuid);
        }
        else {
            message.requestUuid = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.isVerified !== undefined && (obj.isVerified = message.isVerified);
        if (message.credentialTypes) {
            obj.credentialTypes = message.credentialTypes.map(function (e) { return e; });
        }
        else {
            obj.credentialTypes = [];
        }
        if (message.issuers) {
            obj.issuers = message.issuers.map(function (e) { return e; });
        }
        else {
            obj.issuers = [];
        }
        message.reason !== undefined && (obj.reason = message.reason);
        message.reply !== undefined && (obj.reply = message.reply);
        message.requestId !== undefined && (obj.requestId = message.requestId);
        message.requestUuid !== undefined &&
            (obj.requestUuid = message.requestUuid);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseVerified);
        message.credentialTypes = [];
        message.issuers = [];
        if (object.isVerified !== undefined && object.isVerified !== null) {
            message.isVerified = object.isVerified;
        }
        else {
            message.isVerified = false;
        }
        if (object.credentialTypes !== undefined &&
            object.credentialTypes !== null) {
            for (var _i = 0, _a = object.credentialTypes; _i < _a.length; _i++) {
                var e = _a[_i];
                message.credentialTypes.push(e);
            }
        }
        if (object.issuers !== undefined && object.issuers !== null) {
            for (var _b = 0, _c = object.issuers; _b < _c.length; _b++) {
                var e = _c[_b];
                message.issuers.push(e);
            }
        }
        if (object.reason !== undefined && object.reason !== null) {
            message.reason = object.reason;
        }
        else {
            message.reason = "";
        }
        if (object.reply !== undefined && object.reply !== null) {
            message.reply = object.reply;
        }
        else {
            message.reply = "";
        }
        if (object.requestId !== undefined && object.requestId !== null) {
            message.requestId = object.requestId;
        }
        else {
            message.requestId = "";
        }
        if (object.requestUuid !== undefined && object.requestUuid !== null) {
            message.requestUuid = object.requestUuid;
        }
        else {
            message.requestUuid = "";
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=receipt.js.map