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
exports.Proof = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var timestamp_1 = require("./google/protobuf/timestamp");
exports.protobufPackage = "proof.v1";
var baseProof = {
    signatureValue: "",
    type: "",
    verificationMethod: "",
    proofPurpose: "",
};
exports.Proof = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.signatureValue !== "") {
            writer.uint32(10).string(message.signatureValue);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        if (message.verificationMethod !== "") {
            writer.uint32(26).string(message.verificationMethod);
        }
        if (message.created !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.created), writer.uint32(34).fork()).ldelim();
        }
        if (message.proofPurpose !== "") {
            writer.uint32(42).string(message.proofPurpose);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseProof);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatureValue = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                case 3:
                    message.verificationMethod = reader.string();
                    break;
                case 4:
                    message.created = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.proofPurpose = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseProof);
        if (object.signatureValue !== undefined && object.signatureValue !== null) {
            message.signatureValue = String(object.signatureValue);
        }
        else {
            message.signatureValue = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = "";
        }
        if (object.verificationMethod !== undefined &&
            object.verificationMethod !== null) {
            message.verificationMethod = String(object.verificationMethod);
        }
        else {
            message.verificationMethod = "";
        }
        if (object.created !== undefined && object.created !== null) {
            message.created = fromJsonTimestamp(object.created);
        }
        else {
            message.created = undefined;
        }
        if (object.proofPurpose !== undefined && object.proofPurpose !== null) {
            message.proofPurpose = String(object.proofPurpose);
        }
        else {
            message.proofPurpose = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.signatureValue !== undefined &&
            (obj.signatureValue = message.signatureValue);
        message.type !== undefined && (obj.type = message.type);
        message.verificationMethod !== undefined &&
            (obj.verificationMethod = message.verificationMethod);
        message.created !== undefined &&
            (obj.created = message.created.toISOString());
        message.proofPurpose !== undefined &&
            (obj.proofPurpose = message.proofPurpose);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseProof);
        if (object.signatureValue !== undefined && object.signatureValue !== null) {
            message.signatureValue = object.signatureValue;
        }
        else {
            message.signatureValue = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = "";
        }
        if (object.verificationMethod !== undefined &&
            object.verificationMethod !== null) {
            message.verificationMethod = object.verificationMethod;
        }
        else {
            message.verificationMethod = "";
        }
        if (object.created !== undefined && object.created !== null) {
            message.created = object.created;
        }
        else {
            message.created = undefined;
        }
        if (object.proofPurpose !== undefined && object.proofPurpose !== null) {
            message.proofPurpose = object.proofPurpose;
        }
        else {
            message.proofPurpose = "";
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
//# sourceMappingURL=proof.js.map