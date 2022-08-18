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
exports.IssuerInfo = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "issuer.v1";
var baseIssuerInfo = { did: "", name: "", cardImageUrl: "" };
exports.IssuerInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.did !== "") {
            writer.uint32(10).string(message.did);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.cardImageUrl !== "") {
            writer.uint32(26).string(message.cardImageUrl);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseIssuerInfo);
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
                    message.cardImageUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseIssuerInfo);
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
        if (object.cardImageUrl !== undefined && object.cardImageUrl !== null) {
            message.cardImageUrl = String(object.cardImageUrl);
        }
        else {
            message.cardImageUrl = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.did !== undefined && (obj.did = message.did);
        message.name !== undefined && (obj.name = message.name);
        message.cardImageUrl !== undefined &&
            (obj.cardImageUrl = message.cardImageUrl);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseIssuerInfo);
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
        if (object.cardImageUrl !== undefined && object.cardImageUrl !== null) {
            message.cardImageUrl = object.cardImageUrl;
        }
        else {
            message.cardImageUrl = "";
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=issuer.js.map