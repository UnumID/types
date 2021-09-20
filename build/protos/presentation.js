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
exports.Presentation = exports.UnsignedPresentation = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var credential_1 = require("./credential");
var proof_1 = require("./proof");
exports.protobufPackage = "presentation.v1";
var baseUnsignedPresentation = {
    context: "",
    type: "",
    presentationRequestId: "",
    verifierDid: "",
    reply: "",
};
exports.UnsignedPresentation = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.context; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        for (var _b = 0, _c = message.type; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(18).string(v);
        }
        if (message.presentationRequestId !== "") {
            writer.uint32(26).string(message.presentationRequestId);
        }
        if (message.verifierDid !== "") {
            writer.uint32(34).string(message.verifierDid);
        }
        for (var _d = 0, _e = message.verifiableCredential; _d < _e.length; _d++) {
            var v = _e[_d];
            credential_1.Credential.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.reply !== "") {
            writer.uint32(50).string(message.reply);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseUnsignedPresentation);
        message.context = [];
        message.type = [];
        message.verifiableCredential = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.context.push(reader.string());
                    break;
                case 2:
                    message.type.push(reader.string());
                    break;
                case 3:
                    message.presentationRequestId = reader.string();
                    break;
                case 4:
                    message.verifierDid = reader.string();
                    break;
                case 5:
                    message.verifiableCredential.push(credential_1.Credential.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.reply = reader.string();
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
        message.context = [];
        message.type = [];
        message.verifiableCredential = [];
        if (object.context !== undefined && object.context !== null) {
            for (var _i = 0, _a = object.context; _i < _a.length; _i++) {
                var e = _a[_i];
                message.context.push(String(e));
            }
        }
        if (object.type !== undefined && object.type !== null) {
            for (var _b = 0, _c = object.type; _b < _c.length; _b++) {
                var e = _c[_b];
                message.type.push(String(e));
            }
        }
        if (object.presentationRequestId !== undefined &&
            object.presentationRequestId !== null) {
            message.presentationRequestId = String(object.presentationRequestId);
        }
        else {
            message.presentationRequestId = "";
        }
        if (object.verifierDid !== undefined && object.verifierDid !== null) {
            message.verifierDid = String(object.verifierDid);
        }
        else {
            message.verifierDid = "";
        }
        if (object.verifiableCredential !== undefined &&
            object.verifiableCredential !== null) {
            for (var _d = 0, _e = object.verifiableCredential; _d < _e.length; _d++) {
                var e = _e[_d];
                message.verifiableCredential.push(credential_1.Credential.fromJSON(e));
            }
        }
        if (object.reply !== undefined && object.reply !== null) {
            message.reply = String(object.reply);
        }
        else {
            message.reply = "";
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
        if (message.type) {
            obj.type = message.type.map(function (e) { return e; });
        }
        else {
            obj.type = [];
        }
        message.presentationRequestId !== undefined &&
            (obj.presentationRequestId = message.presentationRequestId);
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
        message.reply !== undefined && (obj.reply = message.reply);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseUnsignedPresentation);
        message.context = [];
        message.type = [];
        message.verifiableCredential = [];
        if (object.context !== undefined && object.context !== null) {
            for (var _i = 0, _a = object.context; _i < _a.length; _i++) {
                var e = _a[_i];
                message.context.push(e);
            }
        }
        if (object.type !== undefined && object.type !== null) {
            for (var _b = 0, _c = object.type; _b < _c.length; _b++) {
                var e = _c[_b];
                message.type.push(e);
            }
        }
        if (object.presentationRequestId !== undefined &&
            object.presentationRequestId !== null) {
            message.presentationRequestId = object.presentationRequestId;
        }
        else {
            message.presentationRequestId = "";
        }
        if (object.verifierDid !== undefined && object.verifierDid !== null) {
            message.verifierDid = object.verifierDid;
        }
        else {
            message.verifierDid = "";
        }
        if (object.verifiableCredential !== undefined &&
            object.verifiableCredential !== null) {
            for (var _d = 0, _e = object.verifiableCredential; _d < _e.length; _d++) {
                var e = _e[_d];
                message.verifiableCredential.push(credential_1.Credential.fromPartial(e));
            }
        }
        if (object.reply !== undefined && object.reply !== null) {
            message.reply = object.reply;
        }
        else {
            message.reply = "";
        }
        return message;
    },
};
var basePresentation = {
    context: "",
    type: "",
    presentationRequestId: "",
    verifierDid: "",
    reply: "",
};
exports.Presentation = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.context; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        for (var _b = 0, _c = message.type; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(18).string(v);
        }
        if (message.presentationRequestId !== "") {
            writer.uint32(26).string(message.presentationRequestId);
        }
        if (message.verifierDid !== "") {
            writer.uint32(34).string(message.verifierDid);
        }
        for (var _d = 0, _e = message.verifiableCredential; _d < _e.length; _d++) {
            var v = _e[_d];
            credential_1.Credential.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.proof !== undefined) {
            proof_1.Proof.encode(message.proof, writer.uint32(50).fork()).ldelim();
        }
        if (message.reply !== "") {
            writer.uint32(58).string(message.reply);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, basePresentation);
        message.context = [];
        message.type = [];
        message.verifiableCredential = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.context.push(reader.string());
                    break;
                case 2:
                    message.type.push(reader.string());
                    break;
                case 3:
                    message.presentationRequestId = reader.string();
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
                case 7:
                    message.reply = reader.string();
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
        message.context = [];
        message.type = [];
        message.verifiableCredential = [];
        if (object.context !== undefined && object.context !== null) {
            for (var _i = 0, _a = object.context; _i < _a.length; _i++) {
                var e = _a[_i];
                message.context.push(String(e));
            }
        }
        if (object.type !== undefined && object.type !== null) {
            for (var _b = 0, _c = object.type; _b < _c.length; _b++) {
                var e = _c[_b];
                message.type.push(String(e));
            }
        }
        if (object.presentationRequestId !== undefined &&
            object.presentationRequestId !== null) {
            message.presentationRequestId = String(object.presentationRequestId);
        }
        else {
            message.presentationRequestId = "";
        }
        if (object.verifierDid !== undefined && object.verifierDid !== null) {
            message.verifierDid = String(object.verifierDid);
        }
        else {
            message.verifierDid = "";
        }
        if (object.verifiableCredential !== undefined &&
            object.verifiableCredential !== null) {
            for (var _d = 0, _e = object.verifiableCredential; _d < _e.length; _d++) {
                var e = _e[_d];
                message.verifiableCredential.push(credential_1.Credential.fromJSON(e));
            }
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = proof_1.Proof.fromJSON(object.proof);
        }
        else {
            message.proof = undefined;
        }
        if (object.reply !== undefined && object.reply !== null) {
            message.reply = String(object.reply);
        }
        else {
            message.reply = "";
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
        if (message.type) {
            obj.type = message.type.map(function (e) { return e; });
        }
        else {
            obj.type = [];
        }
        message.presentationRequestId !== undefined &&
            (obj.presentationRequestId = message.presentationRequestId);
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
        message.reply !== undefined && (obj.reply = message.reply);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, basePresentation);
        message.context = [];
        message.type = [];
        message.verifiableCredential = [];
        if (object.context !== undefined && object.context !== null) {
            for (var _i = 0, _a = object.context; _i < _a.length; _i++) {
                var e = _a[_i];
                message.context.push(e);
            }
        }
        if (object.type !== undefined && object.type !== null) {
            for (var _b = 0, _c = object.type; _b < _c.length; _b++) {
                var e = _c[_b];
                message.type.push(e);
            }
        }
        if (object.presentationRequestId !== undefined &&
            object.presentationRequestId !== null) {
            message.presentationRequestId = object.presentationRequestId;
        }
        else {
            message.presentationRequestId = "";
        }
        if (object.verifierDid !== undefined && object.verifierDid !== null) {
            message.verifierDid = object.verifierDid;
        }
        else {
            message.verifierDid = "";
        }
        if (object.verifiableCredential !== undefined &&
            object.verifiableCredential !== null) {
            for (var _d = 0, _e = object.verifiableCredential; _d < _e.length; _d++) {
                var e = _e[_d];
                message.verifiableCredential.push(credential_1.Credential.fromPartial(e));
            }
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = proof_1.Proof.fromPartial(object.proof);
        }
        else {
            message.proof = undefined;
        }
        if (object.reply !== undefined && object.reply !== null) {
            message.reply = object.reply;
        }
        else {
            message.reply = "";
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=presentation.js.map