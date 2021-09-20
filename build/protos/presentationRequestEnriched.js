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
exports.PresentationRequestEnriched = exports.protobufPackage = void 0;
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
        if (message.verifierInfo !== undefined) {
            verifier_1.VerifierInfo.encode(message.verifierInfo, writer.uint32(18).fork()).ldelim();
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
                    message.verifierInfo = verifier_1.VerifierInfo.decode(reader, reader.uint32());
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
        if (object.verifierInfo !== undefined && object.verifierInfo !== null) {
            message.verifierInfo = verifier_1.VerifierInfo.fromJSON(object.verifierInfo);
        }
        else {
            message.verifierInfo = undefined;
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
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.presentationRequest !== undefined &&
            (obj.presentationRequest = message.presentationRequest
                ? presentationRequest_1.PresentationRequest.toJSON(message.presentationRequest)
                : undefined);
        message.verifierInfo !== undefined &&
            (obj.verifierInfo = message.verifierInfo
                ? verifier_1.VerifierInfo.toJSON(message.verifierInfo)
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
        if (object.verifierInfo !== undefined && object.verifierInfo !== null) {
            message.verifierInfo = verifier_1.VerifierInfo.fromPartial(object.verifierInfo);
        }
        else {
            message.verifierInfo = undefined;
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
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=presentationRequestEnriched.js.map