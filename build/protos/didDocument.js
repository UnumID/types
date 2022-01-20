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
exports.DID = exports.unsignedDID = exports.SignedDidDocument = exports.DidDocumentService = exports.DidDocument = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var timestamp_1 = require("./google/protobuf/timestamp");
var crypto_1 = require("./crypto");
var proof_1 = require("./proof");
exports.protobufPackage = "didDocument.v1";
var baseDidDocument = { context: "", id: "" };
exports.DidDocument = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.context !== "") {
            writer.uint32(10).string(message.context);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.created !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.created), writer.uint32(26).fork()).ldelim();
        }
        if (message.updated !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updated), writer.uint32(34).fork()).ldelim();
        }
        for (var _i = 0, _a = message.publicKey; _i < _a.length; _i++) {
            var v = _a[_i];
            crypto_1.PublicKeyInfo.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (var _b = 0, _c = message.service; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.DidDocumentService.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseDidDocument);
        message.publicKey = [];
        message.service = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.context = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.created = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.updated = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.publicKey.push(crypto_1.PublicKeyInfo.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.service.push(exports.DidDocumentService.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseDidDocument);
        message.publicKey = [];
        message.service = [];
        if (object.context !== undefined && object.context !== null) {
            message.context = String(object.context);
        }
        else {
            message.context = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.created !== undefined && object.created !== null) {
            message.created = fromJsonTimestamp(object.created);
        }
        else {
            message.created = undefined;
        }
        if (object.updated !== undefined && object.updated !== null) {
            message.updated = fromJsonTimestamp(object.updated);
        }
        else {
            message.updated = undefined;
        }
        if (object.publicKey !== undefined && object.publicKey !== null) {
            for (var _i = 0, _a = object.publicKey; _i < _a.length; _i++) {
                var e = _a[_i];
                message.publicKey.push(crypto_1.PublicKeyInfo.fromJSON(e));
            }
        }
        if (object.service !== undefined && object.service !== null) {
            for (var _b = 0, _c = object.service; _b < _c.length; _b++) {
                var e = _c[_b];
                message.service.push(exports.DidDocumentService.fromJSON(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.context !== undefined && (obj.context = message.context);
        message.id !== undefined && (obj.id = message.id);
        message.created !== undefined &&
            (obj.created = message.created.toISOString());
        message.updated !== undefined &&
            (obj.updated = message.updated.toISOString());
        if (message.publicKey) {
            obj.publicKey = message.publicKey.map(function (e) {
                return e ? crypto_1.PublicKeyInfo.toJSON(e) : undefined;
            });
        }
        else {
            obj.publicKey = [];
        }
        if (message.service) {
            obj.service = message.service.map(function (e) {
                return e ? exports.DidDocumentService.toJSON(e) : undefined;
            });
        }
        else {
            obj.service = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseDidDocument);
        message.publicKey = [];
        message.service = [];
        if (object.context !== undefined && object.context !== null) {
            message.context = object.context;
        }
        else {
            message.context = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.created !== undefined && object.created !== null) {
            message.created = object.created;
        }
        else {
            message.created = undefined;
        }
        if (object.updated !== undefined && object.updated !== null) {
            message.updated = object.updated;
        }
        else {
            message.updated = undefined;
        }
        if (object.publicKey !== undefined && object.publicKey !== null) {
            for (var _i = 0, _a = object.publicKey; _i < _a.length; _i++) {
                var e = _a[_i];
                message.publicKey.push(crypto_1.PublicKeyInfo.fromPartial(e));
            }
        }
        if (object.service !== undefined && object.service !== null) {
            for (var _b = 0, _c = object.service; _b < _c.length; _b++) {
                var e = _c[_b];
                message.service.push(exports.DidDocumentService.fromPartial(e));
            }
        }
        return message;
    },
};
var baseDidDocumentService = {
    id: "",
    serviceEndpoint: "",
    type: "",
};
exports.DidDocumentService = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.serviceEndpoint !== "") {
            writer.uint32(18).string(message.serviceEndpoint);
        }
        if (message.type !== "") {
            writer.uint32(26).string(message.type);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseDidDocumentService);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.serviceEndpoint = reader.string();
                    break;
                case 3:
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
        var message = __assign({}, baseDidDocumentService);
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.serviceEndpoint !== undefined &&
            object.serviceEndpoint !== null) {
            message.serviceEndpoint = String(object.serviceEndpoint);
        }
        else {
            message.serviceEndpoint = "";
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
        message.serviceEndpoint !== undefined &&
            (obj.serviceEndpoint = message.serviceEndpoint);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseDidDocumentService);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.serviceEndpoint !== undefined &&
            object.serviceEndpoint !== null) {
            message.serviceEndpoint = object.serviceEndpoint;
        }
        else {
            message.serviceEndpoint = "";
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
var baseSignedDidDocument = { context: "", id: "" };
exports.SignedDidDocument = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.context !== "") {
            writer.uint32(10).string(message.context);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.created !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.created), writer.uint32(26).fork()).ldelim();
        }
        if (message.updated !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updated), writer.uint32(34).fork()).ldelim();
        }
        for (var _i = 0, _a = message.publicKey; _i < _a.length; _i++) {
            var v = _a[_i];
            crypto_1.PublicKeyInfo.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (var _b = 0, _c = message.service; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.DidDocumentService.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.proof !== undefined) {
            proof_1.Proof.encode(message.proof, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseSignedDidDocument);
        message.publicKey = [];
        message.service = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.context = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.created = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.updated = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.publicKey.push(crypto_1.PublicKeyInfo.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.service.push(exports.DidDocumentService.decode(reader, reader.uint32()));
                    break;
                case 7:
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
        var message = __assign({}, baseSignedDidDocument);
        message.publicKey = [];
        message.service = [];
        if (object.context !== undefined && object.context !== null) {
            message.context = String(object.context);
        }
        else {
            message.context = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.created !== undefined && object.created !== null) {
            message.created = fromJsonTimestamp(object.created);
        }
        else {
            message.created = undefined;
        }
        if (object.updated !== undefined && object.updated !== null) {
            message.updated = fromJsonTimestamp(object.updated);
        }
        else {
            message.updated = undefined;
        }
        if (object.publicKey !== undefined && object.publicKey !== null) {
            for (var _i = 0, _a = object.publicKey; _i < _a.length; _i++) {
                var e = _a[_i];
                message.publicKey.push(crypto_1.PublicKeyInfo.fromJSON(e));
            }
        }
        if (object.service !== undefined && object.service !== null) {
            for (var _b = 0, _c = object.service; _b < _c.length; _b++) {
                var e = _c[_b];
                message.service.push(exports.DidDocumentService.fromJSON(e));
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
        message.context !== undefined && (obj.context = message.context);
        message.id !== undefined && (obj.id = message.id);
        message.created !== undefined &&
            (obj.created = message.created.toISOString());
        message.updated !== undefined &&
            (obj.updated = message.updated.toISOString());
        if (message.publicKey) {
            obj.publicKey = message.publicKey.map(function (e) {
                return e ? crypto_1.PublicKeyInfo.toJSON(e) : undefined;
            });
        }
        else {
            obj.publicKey = [];
        }
        if (message.service) {
            obj.service = message.service.map(function (e) {
                return e ? exports.DidDocumentService.toJSON(e) : undefined;
            });
        }
        else {
            obj.service = [];
        }
        message.proof !== undefined &&
            (obj.proof = message.proof ? proof_1.Proof.toJSON(message.proof) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseSignedDidDocument);
        message.publicKey = [];
        message.service = [];
        if (object.context !== undefined && object.context !== null) {
            message.context = object.context;
        }
        else {
            message.context = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.created !== undefined && object.created !== null) {
            message.created = object.created;
        }
        else {
            message.created = undefined;
        }
        if (object.updated !== undefined && object.updated !== null) {
            message.updated = object.updated;
        }
        else {
            message.updated = undefined;
        }
        if (object.publicKey !== undefined && object.publicKey !== null) {
            for (var _i = 0, _a = object.publicKey; _i < _a.length; _i++) {
                var e = _a[_i];
                message.publicKey.push(crypto_1.PublicKeyInfo.fromPartial(e));
            }
        }
        if (object.service !== undefined && object.service !== null) {
            for (var _b = 0, _c = object.service; _b < _c.length; _b++) {
                var e = _c[_b];
                message.service.push(exports.DidDocumentService.fromPartial(e));
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
var baseunsignedDID = { id: "" };
exports.unsignedDID = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseunsignedDID);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        var message = __assign({}, baseunsignedDID);
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
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseunsignedDID);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        return message;
    },
};
var baseDID = { id: "" };
exports.DID = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.proof !== undefined) {
            proof_1.Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseDID);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
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
        var message = __assign({}, baseDID);
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
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
        message.id !== undefined && (obj.id = message.id);
        message.proof !== undefined &&
            (obj.proof = message.proof ? proof_1.Proof.toJSON(message.proof) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseDID);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
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
//# sourceMappingURL=didDocument.js.map