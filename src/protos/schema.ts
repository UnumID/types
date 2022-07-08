/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "schema.v1";

export interface SchemaPresentationRequestDto {
  credentialTypes: string[];
}

export interface PresentationSchemaAttributes {
  /** credential value key */
  key: string;
  /** label for the credential value */
  label: string;
  /** comment for the credential value */
  comment: string;
}

export interface PresentationSchema {
  /** credentialType */
  type: string;
  attributes: PresentationSchemaAttributes | undefined;
}

export interface CredentialSchemaData {
  /** human readable GroupingHeaders */
  heading: string;
  credentials: PresentationSchema[];
}

export interface SchemaGroupings {
  name?: CredentialSchemaData | undefined;
  contactInfo?: CredentialSchemaData | undefined;
}

export interface SchemaPresentationDto {
  groupings: SchemaGroupings | undefined;
}

const baseSchemaPresentationRequestDto: object = { credentialTypes: "" };

export const SchemaPresentationRequestDto = {
  encode(
    message: SchemaPresentationRequestDto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.credentialTypes) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SchemaPresentationRequestDto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSchemaPresentationRequestDto,
    } as SchemaPresentationRequestDto;
    message.credentialTypes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): SchemaPresentationRequestDto {
    const message = {
      ...baseSchemaPresentationRequestDto,
    } as SchemaPresentationRequestDto;
    message.credentialTypes = [];
    if (
      object.credentialTypes !== undefined &&
      object.credentialTypes !== null
    ) {
      for (const e of object.credentialTypes) {
        message.credentialTypes.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: SchemaPresentationRequestDto): unknown {
    const obj: any = {};
    if (message.credentialTypes) {
      obj.credentialTypes = message.credentialTypes.map((e) => e);
    } else {
      obj.credentialTypes = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<SchemaPresentationRequestDto>
  ): SchemaPresentationRequestDto {
    const message = {
      ...baseSchemaPresentationRequestDto,
    } as SchemaPresentationRequestDto;
    message.credentialTypes = [];
    if (
      object.credentialTypes !== undefined &&
      object.credentialTypes !== null
    ) {
      for (const e of object.credentialTypes) {
        message.credentialTypes.push(e);
      }
    }
    return message;
  },
};

const basePresentationSchemaAttributes: object = {
  key: "",
  label: "",
  comment: "",
};

export const PresentationSchemaAttributes = {
  encode(
    message: PresentationSchemaAttributes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PresentationSchemaAttributes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePresentationSchemaAttributes,
    } as PresentationSchemaAttributes;
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): PresentationSchemaAttributes {
    const message = {
      ...basePresentationSchemaAttributes,
    } as PresentationSchemaAttributes;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = String(object.label);
    } else {
      message.label = "";
    }
    if (object.comment !== undefined && object.comment !== null) {
      message.comment = String(object.comment);
    } else {
      message.comment = "";
    }
    return message;
  },

  toJSON(message: PresentationSchemaAttributes): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.label !== undefined && (obj.label = message.label);
    message.comment !== undefined && (obj.comment = message.comment);
    return obj;
  },

  fromPartial(
    object: DeepPartial<PresentationSchemaAttributes>
  ): PresentationSchemaAttributes {
    const message = {
      ...basePresentationSchemaAttributes,
    } as PresentationSchemaAttributes;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    } else {
      message.label = "";
    }
    if (object.comment !== undefined && object.comment !== null) {
      message.comment = object.comment;
    } else {
      message.comment = "";
    }
    return message;
  },
};

const basePresentationSchema: object = { type: "" };

export const PresentationSchema = {
  encode(
    message: PresentationSchema,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.attributes !== undefined) {
      PresentationSchemaAttributes.encode(
        message.attributes,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PresentationSchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePresentationSchema } as PresentationSchema;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.attributes = PresentationSchemaAttributes.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PresentationSchema {
    const message = { ...basePresentationSchema } as PresentationSchema;
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      message.attributes = PresentationSchemaAttributes.fromJSON(
        object.attributes
      );
    } else {
      message.attributes = undefined;
    }
    return message;
  },

  toJSON(message: PresentationSchema): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.attributes !== undefined &&
      (obj.attributes = message.attributes
        ? PresentationSchemaAttributes.toJSON(message.attributes)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PresentationSchema>): PresentationSchema {
    const message = { ...basePresentationSchema } as PresentationSchema;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      message.attributes = PresentationSchemaAttributes.fromPartial(
        object.attributes
      );
    } else {
      message.attributes = undefined;
    }
    return message;
  },
};

const baseCredentialSchemaData: object = { heading: "" };

export const CredentialSchemaData = {
  encode(
    message: CredentialSchemaData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.heading !== "") {
      writer.uint32(10).string(message.heading);
    }
    for (const v of message.credentials) {
      PresentationSchema.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CredentialSchemaData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCredentialSchemaData } as CredentialSchemaData;
    message.credentials = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.heading = reader.string();
          break;
        case 2:
          message.credentials.push(
            PresentationSchema.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CredentialSchemaData {
    const message = { ...baseCredentialSchemaData } as CredentialSchemaData;
    message.credentials = [];
    if (object.heading !== undefined && object.heading !== null) {
      message.heading = String(object.heading);
    } else {
      message.heading = "";
    }
    if (object.credentials !== undefined && object.credentials !== null) {
      for (const e of object.credentials) {
        message.credentials.push(PresentationSchema.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: CredentialSchemaData): unknown {
    const obj: any = {};
    message.heading !== undefined && (obj.heading = message.heading);
    if (message.credentials) {
      obj.credentials = message.credentials.map((e) =>
        e ? PresentationSchema.toJSON(e) : undefined
      );
    } else {
      obj.credentials = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<CredentialSchemaData>): CredentialSchemaData {
    const message = { ...baseCredentialSchemaData } as CredentialSchemaData;
    message.credentials = [];
    if (object.heading !== undefined && object.heading !== null) {
      message.heading = object.heading;
    } else {
      message.heading = "";
    }
    if (object.credentials !== undefined && object.credentials !== null) {
      for (const e of object.credentials) {
        message.credentials.push(PresentationSchema.fromPartial(e));
      }
    }
    return message;
  },
};

const baseSchemaGroupings: object = {};

export const SchemaGroupings = {
  encode(
    message: SchemaGroupings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== undefined) {
      CredentialSchemaData.encode(
        message.name,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.contactInfo !== undefined) {
      CredentialSchemaData.encode(
        message.contactInfo,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchemaGroupings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSchemaGroupings } as SchemaGroupings;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = CredentialSchemaData.decode(reader, reader.uint32());
          break;
        case 2:
          message.contactInfo = CredentialSchemaData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SchemaGroupings {
    const message = { ...baseSchemaGroupings } as SchemaGroupings;
    if (object.name !== undefined && object.name !== null) {
      message.name = CredentialSchemaData.fromJSON(object.name);
    } else {
      message.name = undefined;
    }
    if (object.contactInfo !== undefined && object.contactInfo !== null) {
      message.contactInfo = CredentialSchemaData.fromJSON(object.contactInfo);
    } else {
      message.contactInfo = undefined;
    }
    return message;
  },

  toJSON(message: SchemaGroupings): unknown {
    const obj: any = {};
    message.name !== undefined &&
      (obj.name = message.name
        ? CredentialSchemaData.toJSON(message.name)
        : undefined);
    message.contactInfo !== undefined &&
      (obj.contactInfo = message.contactInfo
        ? CredentialSchemaData.toJSON(message.contactInfo)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SchemaGroupings>): SchemaGroupings {
    const message = { ...baseSchemaGroupings } as SchemaGroupings;
    if (object.name !== undefined && object.name !== null) {
      message.name = CredentialSchemaData.fromPartial(object.name);
    } else {
      message.name = undefined;
    }
    if (object.contactInfo !== undefined && object.contactInfo !== null) {
      message.contactInfo = CredentialSchemaData.fromPartial(
        object.contactInfo
      );
    } else {
      message.contactInfo = undefined;
    }
    return message;
  },
};

const baseSchemaPresentationDto: object = {};

export const SchemaPresentationDto = {
  encode(
    message: SchemaPresentationDto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupings !== undefined) {
      SchemaGroupings.encode(
        message.groupings,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SchemaPresentationDto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSchemaPresentationDto } as SchemaPresentationDto;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupings = SchemaGroupings.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SchemaPresentationDto {
    const message = { ...baseSchemaPresentationDto } as SchemaPresentationDto;
    if (object.groupings !== undefined && object.groupings !== null) {
      message.groupings = SchemaGroupings.fromJSON(object.groupings);
    } else {
      message.groupings = undefined;
    }
    return message;
  },

  toJSON(message: SchemaPresentationDto): unknown {
    const obj: any = {};
    message.groupings !== undefined &&
      (obj.groupings = message.groupings
        ? SchemaGroupings.toJSON(message.groupings)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SchemaPresentationDto>
  ): SchemaPresentationDto {
    const message = { ...baseSchemaPresentationDto } as SchemaPresentationDto;
    if (object.groupings !== undefined && object.groupings !== null) {
      message.groupings = SchemaGroupings.fromPartial(object.groupings);
    } else {
      message.groupings = undefined;
    }
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
