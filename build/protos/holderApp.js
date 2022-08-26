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
exports.HolderAppInfo = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "holderApp.v1";
var baseHolderAppInfo = { name: "", deeplinkButtonImg: "" };
exports.HolderAppInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.deeplinkButtonImg !== "") {
            writer.uint32(18).string(message.deeplinkButtonImg);
        }
        if (message.appStoreUrl !== undefined) {
            writer.uint32(26).string(message.appStoreUrl);
        }
        if (message.playStoreUrl !== undefined) {
            writer.uint32(34).string(message.playStoreUrl);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseHolderAppInfo);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.deeplinkButtonImg = reader.string();
                    break;
                case 3:
                    message.appStoreUrl = reader.string();
                    break;
                case 4:
                    message.playStoreUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseHolderAppInfo);
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.deeplinkButtonImg !== undefined &&
            object.deeplinkButtonImg !== null) {
            message.deeplinkButtonImg = String(object.deeplinkButtonImg);
        }
        else {
            message.deeplinkButtonImg = "";
        }
        if (object.appStoreUrl !== undefined && object.appStoreUrl !== null) {
            message.appStoreUrl = String(object.appStoreUrl);
        }
        else {
            message.appStoreUrl = undefined;
        }
        if (object.playStoreUrl !== undefined && object.playStoreUrl !== null) {
            message.playStoreUrl = String(object.playStoreUrl);
        }
        else {
            message.playStoreUrl = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.deeplinkButtonImg !== undefined &&
            (obj.deeplinkButtonImg = message.deeplinkButtonImg);
        message.appStoreUrl !== undefined &&
            (obj.appStoreUrl = message.appStoreUrl);
        message.playStoreUrl !== undefined &&
            (obj.playStoreUrl = message.playStoreUrl);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseHolderAppInfo);
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.deeplinkButtonImg !== undefined &&
            object.deeplinkButtonImg !== null) {
            message.deeplinkButtonImg = object.deeplinkButtonImg;
        }
        else {
            message.deeplinkButtonImg = "";
        }
        if (object.appStoreUrl !== undefined && object.appStoreUrl !== null) {
            message.appStoreUrl = object.appStoreUrl;
        }
        else {
            message.appStoreUrl = undefined;
        }
        if (object.playStoreUrl !== undefined && object.playStoreUrl !== null) {
            message.playStoreUrl = object.playStoreUrl;
        }
        else {
            message.playStoreUrl = undefined;
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=holderApp.js.map