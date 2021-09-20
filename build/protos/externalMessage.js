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
exports.ExternalMessage = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "externalMessage.v1";
var baseExternalMessage = { to: "", deeplink: "" };
exports.ExternalMessage = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.to !== "") {
            writer.uint32(10).string(message.to);
        }
        if (message.deeplink !== "") {
            writer.uint32(18).string(message.deeplink);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseExternalMessage);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.to = reader.string();
                    break;
                case 2:
                    message.deeplink = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseExternalMessage);
        if (object.to !== undefined && object.to !== null) {
            message.to = String(object.to);
        }
        else {
            message.to = "";
        }
        if (object.deeplink !== undefined && object.deeplink !== null) {
            message.deeplink = String(object.deeplink);
        }
        else {
            message.deeplink = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.to !== undefined && (obj.to = message.to);
        message.deeplink !== undefined && (obj.deeplink = message.deeplink);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseExternalMessage);
        if (object.to !== undefined && object.to !== null) {
            message.to = object.to;
        }
        else {
            message.to = "";
        }
        if (object.deeplink !== undefined && object.deeplink !== null) {
            message.deeplink = object.deeplink;
        }
        else {
            message.deeplink = "";
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=externalMessage.js.map