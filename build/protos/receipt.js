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
exports.Verified = exports.PresentationVerifedReceiptOptions = exports.Receipt = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var timestamp_1 = require("./google/protobuf/timestamp");
exports.protobufPackage = "receipt.v1";
var baseReceipt = {
    uuid: "",
    type: "",
    subject: "",
    verifier: "",
    issuer: "",
    customer: "",
};
exports.Receipt = {
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
        for (var _i = 0, _a = message.type; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(34).string(v);
        }
        if (message.subject !== "") {
            writer.uint32(42).string(message.subject);
        }
        if (message.verifier !== "") {
            writer.uint32(50).string(message.verifier);
        }
        if (message.issuer !== "") {
            writer.uint32(58).string(message.issuer);
        }
        if (message.customer !== "") {
            writer.uint32(66).string(message.customer);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseReceipt);
        message.type = [];
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
                    message.type.push(reader.string());
                    break;
                case 5:
                    message.subject = reader.string();
                    break;
                case 6:
                    message.verifier = reader.string();
                    break;
                case 7:
                    message.issuer = reader.string();
                    break;
                case 8:
                    message.customer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseReceipt);
        message.type = [];
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
        if (object.type !== undefined && object.type !== null) {
            for (var _i = 0, _a = object.type; _i < _a.length; _i++) {
                var e = _a[_i];
                message.type.push(String(e));
            }
        }
        if (object.subject !== undefined && object.subject !== null) {
            message.subject = String(object.subject);
        }
        else {
            message.subject = "";
        }
        if (object.verifier !== undefined && object.verifier !== null) {
            message.verifier = String(object.verifier);
        }
        else {
            message.verifier = "";
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = String(object.issuer);
        }
        else {
            message.issuer = "";
        }
        if (object.customer !== undefined && object.customer !== null) {
            message.customer = String(object.customer);
        }
        else {
            message.customer = "";
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
        if (message.type) {
            obj.type = message.type.map(function (e) { return e; });
        }
        else {
            obj.type = [];
        }
        message.subject !== undefined && (obj.subject = message.subject);
        message.verifier !== undefined && (obj.verifier = message.verifier);
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.customer !== undefined && (obj.customer = message.customer);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseReceipt);
        message.type = [];
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
        if (object.type !== undefined && object.type !== null) {
            for (var _i = 0, _a = object.type; _i < _a.length; _i++) {
                var e = _a[_i];
                message.type.push(e);
            }
        }
        if (object.subject !== undefined && object.subject !== null) {
            message.subject = object.subject;
        }
        else {
            message.subject = "";
        }
        if (object.verifier !== undefined && object.verifier !== null) {
            message.verifier = object.verifier;
        }
        else {
            message.verifier = "";
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        else {
            message.issuer = "";
        }
        if (object.customer !== undefined && object.customer !== null) {
            message.customer = object.customer;
        }
        else {
            message.customer = "";
        }
        return message;
    },
};
var basePresentationVerifedReceiptOptions = {
    type: "",
    verifier: "",
    subject: "",
};
exports.PresentationVerifedReceiptOptions = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.type; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
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
        var message = __assign({}, basePresentationVerifedReceiptOptions);
        message.type = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type.push(reader.string());
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
        var message = __assign({}, basePresentationVerifedReceiptOptions);
        message.type = [];
        if (object.type !== undefined && object.type !== null) {
            for (var _i = 0, _a = object.type; _i < _a.length; _i++) {
                var e = _a[_i];
                message.type.push(String(e));
            }
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
        if (message.type) {
            obj.type = message.type.map(function (e) { return e; });
        }
        else {
            obj.type = [];
        }
        message.verifier !== undefined && (obj.verifier = message.verifier);
        message.subject !== undefined && (obj.subject = message.subject);
        message.data !== undefined &&
            (obj.data = message.data ? exports.Verified.toJSON(message.data) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, basePresentationVerifedReceiptOptions);
        message.type = [];
        if (object.type !== undefined && object.type !== null) {
            for (var _i = 0, _a = object.type; _i < _a.length; _i++) {
                var e = _a[_i];
                message.type.push(e);
            }
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
//# sourceMappingURL=receipt.js.map