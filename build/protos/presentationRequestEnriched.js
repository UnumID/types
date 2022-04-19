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
exports.PresentationRequestDisplayMessage = exports.PresentationRequestRepoDto_PresentationRequestsEntry = exports.PresentationRequestRepoDto = exports.PresentationRequestEnriched = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var presentationRequest_1 = require("./presentationRequest");
var verifier_1 = require("./verifier");
var struct_1 = require("./google/protobuf/struct");
var holderApp_1 = require("./holderApp");
exports.protobufPackage = "presentationRequestEnriched.v1";
var basePresentationRequestEnriched = { deeplink: "", qrCode: "" };
exports.PresentationRequestEnriched = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.presentationRequest !== undefined) {
            presentationRequest_1.PresentationRequest.encode(message.presentationRequest, writer.uint32(10).fork()).ldelim();
        }
        if (message.verifier !== undefined) {
            verifier_1.VerifierInfo.encode(message.verifier, writer.uint32(18).fork()).ldelim();
        }
        if (message.issuers !== undefined) {
            struct_1.Struct.encode(message.issuers, writer.uint32(26).fork()).ldelim();
        }
        if (message.holderApp !== undefined) {
            holderApp_1.HolderAppInfo.encode(message.holderApp, writer.uint32(34).fork()).ldelim();
        }
        if (message.deeplink !== "") {
            writer.uint32(42).string(message.deeplink);
        }
        if (message.qrCode !== "") {
            writer.uint32(50).string(message.qrCode);
        }
        if (message.displayMessage !== undefined) {
            exports.PresentationRequestDisplayMessage.encode(message.displayMessage, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, basePresentationRequestEnriched);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.presentationRequest = presentationRequest_1.PresentationRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.verifier = verifier_1.VerifierInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.issuers = struct_1.Struct.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.holderApp = holderApp_1.HolderAppInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.deeplink = reader.string();
                    break;
                case 6:
                    message.qrCode = reader.string();
                    break;
                case 7:
                    message.displayMessage = exports.PresentationRequestDisplayMessage.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, basePresentationRequestEnriched);
        if (object.presentationRequest !== undefined &&
            object.presentationRequest !== null) {
            message.presentationRequest = presentationRequest_1.PresentationRequest.fromJSON(object.presentationRequest);
        }
        else {
            message.presentationRequest = undefined;
        }
        if (object.verifier !== undefined && object.verifier !== null) {
            message.verifier = verifier_1.VerifierInfo.fromJSON(object.verifier);
        }
        else {
            message.verifier = undefined;
        }
        if (object.issuers !== undefined && object.issuers !== null) {
            message.issuers = struct_1.Struct.fromJSON(object.issuers);
        }
        else {
            message.issuers = undefined;
        }
        if (object.holderApp !== undefined && object.holderApp !== null) {
            message.holderApp = holderApp_1.HolderAppInfo.fromJSON(object.holderApp);
        }
        else {
            message.holderApp = undefined;
        }
        if (object.deeplink !== undefined && object.deeplink !== null) {
            message.deeplink = String(object.deeplink);
        }
        else {
            message.deeplink = "";
        }
        if (object.qrCode !== undefined && object.qrCode !== null) {
            message.qrCode = String(object.qrCode);
        }
        else {
            message.qrCode = "";
        }
        if (object.displayMessage !== undefined && object.displayMessage !== null) {
            message.displayMessage = exports.PresentationRequestDisplayMessage.fromJSON(object.displayMessage);
        }
        else {
            message.displayMessage = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.presentationRequest !== undefined &&
            (obj.presentationRequest = message.presentationRequest
                ? presentationRequest_1.PresentationRequest.toJSON(message.presentationRequest)
                : undefined);
        message.verifier !== undefined &&
            (obj.verifier = message.verifier
                ? verifier_1.VerifierInfo.toJSON(message.verifier)
                : undefined);
        message.issuers !== undefined &&
            (obj.issuers = message.issuers
                ? struct_1.Struct.toJSON(message.issuers)
                : undefined);
        message.holderApp !== undefined &&
            (obj.holderApp = message.holderApp
                ? holderApp_1.HolderAppInfo.toJSON(message.holderApp)
                : undefined);
        message.deeplink !== undefined && (obj.deeplink = message.deeplink);
        message.qrCode !== undefined && (obj.qrCode = message.qrCode);
        message.displayMessage !== undefined &&
            (obj.displayMessage = message.displayMessage
                ? exports.PresentationRequestDisplayMessage.toJSON(message.displayMessage)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, basePresentationRequestEnriched);
        if (object.presentationRequest !== undefined &&
            object.presentationRequest !== null) {
            message.presentationRequest = presentationRequest_1.PresentationRequest.fromPartial(object.presentationRequest);
        }
        else {
            message.presentationRequest = undefined;
        }
        if (object.verifier !== undefined && object.verifier !== null) {
            message.verifier = verifier_1.VerifierInfo.fromPartial(object.verifier);
        }
        else {
            message.verifier = undefined;
        }
        if (object.issuers !== undefined && object.issuers !== null) {
            message.issuers = struct_1.Struct.fromPartial(object.issuers);
        }
        else {
            message.issuers = undefined;
        }
        if (object.holderApp !== undefined && object.holderApp !== null) {
            message.holderApp = holderApp_1.HolderAppInfo.fromPartial(object.holderApp);
        }
        else {
            message.holderApp = undefined;
        }
        if (object.deeplink !== undefined && object.deeplink !== null) {
            message.deeplink = object.deeplink;
        }
        else {
            message.deeplink = "";
        }
        if (object.qrCode !== undefined && object.qrCode !== null) {
            message.qrCode = object.qrCode;
        }
        else {
            message.qrCode = "";
        }
        if (object.displayMessage !== undefined && object.displayMessage !== null) {
            message.displayMessage = exports.PresentationRequestDisplayMessage.fromPartial(object.displayMessage);
        }
        else {
            message.displayMessage = undefined;
        }
        return message;
    },
};
var basePresentationRequestRepoDto = {};
exports.PresentationRequestRepoDto = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        Object.entries(message.presentationRequests).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.PresentationRequestRepoDto_PresentationRequestsEntry.encode({ key: key, value: value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, basePresentationRequestRepoDto);
        message.presentationRequests = {};
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    var entry1 = exports.PresentationRequestRepoDto_PresentationRequestsEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.presentationRequests[entry1.key] = entry1.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, basePresentationRequestRepoDto);
        message.presentationRequests = {};
        if (object.presentationRequests !== undefined &&
            object.presentationRequests !== null) {
            Object.entries(object.presentationRequests).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.presentationRequests[key] =
                    exports.PresentationRequestEnriched.fromJSON(value);
            });
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        obj.presentationRequests = {};
        if (message.presentationRequests) {
            Object.entries(message.presentationRequests).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.presentationRequests[k] = exports.PresentationRequestEnriched.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, basePresentationRequestRepoDto);
        message.presentationRequests = {};
        if (object.presentationRequests !== undefined &&
            object.presentationRequests !== null) {
            Object.entries(object.presentationRequests).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.presentationRequests[key] =
                        exports.PresentationRequestEnriched.fromPartial(value);
                }
            });
        }
        return message;
    },
};
var basePresentationRequestRepoDto_PresentationRequestsEntry = {
    key: "",
};
exports.PresentationRequestRepoDto_PresentationRequestsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.PresentationRequestEnriched.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, basePresentationRequestRepoDto_PresentationRequestsEntry);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.PresentationRequestEnriched.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, basePresentationRequestRepoDto_PresentationRequestsEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.PresentationRequestEnriched.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? exports.PresentationRequestEnriched.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, basePresentationRequestRepoDto_PresentationRequestsEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.PresentationRequestEnriched.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
};
var basePresentationRequestDisplayMessage = { text: "", html: "" };
exports.PresentationRequestDisplayMessage = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.text !== "") {
            writer.uint32(10).string(message.text);
        }
        if (message.html !== "") {
            writer.uint32(18).string(message.html);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, basePresentationRequestDisplayMessage);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                case 2:
                    message.html = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, basePresentationRequestDisplayMessage);
        if (object.text !== undefined && object.text !== null) {
            message.text = String(object.text);
        }
        else {
            message.text = "";
        }
        if (object.html !== undefined && object.html !== null) {
            message.html = String(object.html);
        }
        else {
            message.html = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.text !== undefined && (obj.text = message.text);
        message.html !== undefined && (obj.html = message.html);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, basePresentationRequestDisplayMessage);
        if (object.text !== undefined && object.text !== null) {
            message.text = object.text;
        }
        else {
            message.text = "";
        }
        if (object.html !== undefined && object.html !== null) {
            message.html = object.html;
        }
        else {
            message.html = "";
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=presentationRequestEnriched.js.map