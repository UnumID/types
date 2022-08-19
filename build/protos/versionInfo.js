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
exports.VersionInfo = exports.TargetInfo = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "versionInfo.v1";
var baseTargetInfo = { version: "", url: "" };
exports.TargetInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseTargetInfo);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseTargetInfo);
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = "";
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        else {
            message.url = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseTargetInfo);
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = "";
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        else {
            message.url = "";
        }
        return message;
    },
};
var baseVersionInfo = { sdkVersion: "" };
exports.VersionInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.sdkVersion !== "") {
            writer.uint32(10).string(message.sdkVersion);
        }
        if (message.target !== undefined) {
            exports.TargetInfo.encode(message.target, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseVersionInfo);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sdkVersion = reader.string();
                    break;
                case 2:
                    message.target = exports.TargetInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseVersionInfo);
        if (object.sdkVersion !== undefined && object.sdkVersion !== null) {
            message.sdkVersion = String(object.sdkVersion);
        }
        else {
            message.sdkVersion = "";
        }
        if (object.target !== undefined && object.target !== null) {
            message.target = exports.TargetInfo.fromJSON(object.target);
        }
        else {
            message.target = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.sdkVersion !== undefined && (obj.sdkVersion = message.sdkVersion);
        message.target !== undefined &&
            (obj.target = message.target
                ? exports.TargetInfo.toJSON(message.target)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseVersionInfo);
        if (object.sdkVersion !== undefined && object.sdkVersion !== null) {
            message.sdkVersion = object.sdkVersion;
        }
        else {
            message.sdkVersion = "";
        }
        if (object.target !== undefined && object.target !== null) {
            message.target = exports.TargetInfo.fromPartial(object.target);
        }
        else {
            message.target = undefined;
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=versionInfo.js.map