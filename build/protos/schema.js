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
exports.SchemaPresentationDto = exports.SchemaGroupings = exports.CredentialSchemaData = exports.PresentationSchema = exports.PresentationSchemaAttributes = exports.SchemaPresentationRequestDto = exports.SchemaAttributesRequestsDto = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "schema.v1";
var baseSchemaAttributesRequestsDto = { credentialTypes: "" };
exports.SchemaAttributesRequestsDto = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.credentialTypes; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseSchemaAttributesRequestsDto);
        message.credentialTypes = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.credentialTypes.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseSchemaAttributesRequestsDto);
        message.credentialTypes = [];
        if (object.credentialTypes !== undefined &&
            object.credentialTypes !== null) {
            for (var _i = 0, _a = object.credentialTypes; _i < _a.length; _i++) {
                var e = _a[_i];
                message.credentialTypes.push(String(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.credentialTypes) {
            obj.credentialTypes = message.credentialTypes.map(function (e) { return e; });
        }
        else {
            obj.credentialTypes = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseSchemaAttributesRequestsDto);
        message.credentialTypes = [];
        if (object.credentialTypes !== undefined &&
            object.credentialTypes !== null) {
            for (var _i = 0, _a = object.credentialTypes; _i < _a.length; _i++) {
                var e = _a[_i];
                message.credentialTypes.push(e);
            }
        }
        return message;
    },
};
var baseSchemaPresentationRequestDto = { credentialTypes: "" };
exports.SchemaPresentationRequestDto = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.credentialTypes; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseSchemaPresentationRequestDto);
        message.credentialTypes = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.credentialTypes.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseSchemaPresentationRequestDto);
        message.credentialTypes = [];
        if (object.credentialTypes !== undefined &&
            object.credentialTypes !== null) {
            for (var _i = 0, _a = object.credentialTypes; _i < _a.length; _i++) {
                var e = _a[_i];
                message.credentialTypes.push(String(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.credentialTypes) {
            obj.credentialTypes = message.credentialTypes.map(function (e) { return e; });
        }
        else {
            obj.credentialTypes = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseSchemaPresentationRequestDto);
        message.credentialTypes = [];
        if (object.credentialTypes !== undefined &&
            object.credentialTypes !== null) {
            for (var _i = 0, _a = object.credentialTypes; _i < _a.length; _i++) {
                var e = _a[_i];
                message.credentialTypes.push(e);
            }
        }
        return message;
    },
};
var basePresentationSchemaAttributes = {
    key: "",
    label: "",
    comment: "",
};
exports.PresentationSchemaAttributes = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.label !== "") {
            writer.uint32(18).string(message.label);
        }
        if (message.comment !== "") {
            writer.uint32(26).string(message.comment);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, basePresentationSchemaAttributes);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.label = reader.string();
                    break;
                case 3:
                    message.comment = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, basePresentationSchemaAttributes);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.label !== undefined && object.label !== null) {
            message.label = String(object.label);
        }
        else {
            message.label = "";
        }
        if (object.comment !== undefined && object.comment !== null) {
            message.comment = String(object.comment);
        }
        else {
            message.comment = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.label !== undefined && (obj.label = message.label);
        message.comment !== undefined && (obj.comment = message.comment);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, basePresentationSchemaAttributes);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.label !== undefined && object.label !== null) {
            message.label = object.label;
        }
        else {
            message.label = "";
        }
        if (object.comment !== undefined && object.comment !== null) {
            message.comment = object.comment;
        }
        else {
            message.comment = "";
        }
        return message;
    },
};
var basePresentationSchema = { type: "" };
exports.PresentationSchema = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        for (var _i = 0, _a = message.attributes; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.PresentationSchemaAttributes.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, basePresentationSchema);
        message.attributes = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.attributes.push(exports.PresentationSchemaAttributes.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, basePresentationSchema);
        message.attributes = [];
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = "";
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (var _i = 0, _a = object.attributes; _i < _a.length; _i++) {
                var e = _a[_i];
                message.attributes.push(exports.PresentationSchemaAttributes.fromJSON(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.type !== undefined && (obj.type = message.type);
        if (message.attributes) {
            obj.attributes = message.attributes.map(function (e) {
                return e ? exports.PresentationSchemaAttributes.toJSON(e) : undefined;
            });
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, basePresentationSchema);
        message.attributes = [];
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = "";
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (var _i = 0, _a = object.attributes; _i < _a.length; _i++) {
                var e = _a[_i];
                message.attributes.push(exports.PresentationSchemaAttributes.fromPartial(e));
            }
        }
        return message;
    },
};
var baseCredentialSchemaData = { heading: "" };
exports.CredentialSchemaData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.heading !== "") {
            writer.uint32(10).string(message.heading);
        }
        for (var _i = 0, _a = message.credentials; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.PresentationSchema.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseCredentialSchemaData);
        message.credentials = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.heading = reader.string();
                    break;
                case 2:
                    message.credentials.push(exports.PresentationSchema.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseCredentialSchemaData);
        message.credentials = [];
        if (object.heading !== undefined && object.heading !== null) {
            message.heading = String(object.heading);
        }
        else {
            message.heading = "";
        }
        if (object.credentials !== undefined && object.credentials !== null) {
            for (var _i = 0, _a = object.credentials; _i < _a.length; _i++) {
                var e = _a[_i];
                message.credentials.push(exports.PresentationSchema.fromJSON(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.heading !== undefined && (obj.heading = message.heading);
        if (message.credentials) {
            obj.credentials = message.credentials.map(function (e) {
                return e ? exports.PresentationSchema.toJSON(e) : undefined;
            });
        }
        else {
            obj.credentials = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseCredentialSchemaData);
        message.credentials = [];
        if (object.heading !== undefined && object.heading !== null) {
            message.heading = object.heading;
        }
        else {
            message.heading = "";
        }
        if (object.credentials !== undefined && object.credentials !== null) {
            for (var _i = 0, _a = object.credentials; _i < _a.length; _i++) {
                var e = _a[_i];
                message.credentials.push(exports.PresentationSchema.fromPartial(e));
            }
        }
        return message;
    },
};
var baseSchemaGroupings = {};
exports.SchemaGroupings = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.name !== undefined) {
            exports.CredentialSchemaData.encode(message.name, writer.uint32(10).fork()).ldelim();
        }
        if (message.contactInfo !== undefined) {
            exports.CredentialSchemaData.encode(message.contactInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseSchemaGroupings);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = exports.CredentialSchemaData.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.contactInfo = exports.CredentialSchemaData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseSchemaGroupings);
        if (object.name !== undefined && object.name !== null) {
            message.name = exports.CredentialSchemaData.fromJSON(object.name);
        }
        else {
            message.name = undefined;
        }
        if (object.contactInfo !== undefined && object.contactInfo !== null) {
            message.contactInfo = exports.CredentialSchemaData.fromJSON(object.contactInfo);
        }
        else {
            message.contactInfo = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined &&
            (obj.name = message.name
                ? exports.CredentialSchemaData.toJSON(message.name)
                : undefined);
        message.contactInfo !== undefined &&
            (obj.contactInfo = message.contactInfo
                ? exports.CredentialSchemaData.toJSON(message.contactInfo)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseSchemaGroupings);
        if (object.name !== undefined && object.name !== null) {
            message.name = exports.CredentialSchemaData.fromPartial(object.name);
        }
        else {
            message.name = undefined;
        }
        if (object.contactInfo !== undefined && object.contactInfo !== null) {
            message.contactInfo = exports.CredentialSchemaData.fromPartial(object.contactInfo);
        }
        else {
            message.contactInfo = undefined;
        }
        return message;
    },
};
var baseSchemaPresentationDto = {};
exports.SchemaPresentationDto = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.groupings !== undefined) {
            exports.SchemaGroupings.encode(message.groupings, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseSchemaPresentationDto);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupings = exports.SchemaGroupings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseSchemaPresentationDto);
        if (object.groupings !== undefined && object.groupings !== null) {
            message.groupings = exports.SchemaGroupings.fromJSON(object.groupings);
        }
        else {
            message.groupings = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.groupings !== undefined &&
            (obj.groupings = message.groupings
                ? exports.SchemaGroupings.toJSON(message.groupings)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseSchemaPresentationDto);
        if (object.groupings !== undefined && object.groupings !== null) {
            message.groupings = exports.SchemaGroupings.fromPartial(object.groupings);
        }
        else {
            message.groupings = undefined;
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=schema.js.map