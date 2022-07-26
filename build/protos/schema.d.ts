import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "schema.v1";
export interface SchemaAttributesRequestDto {
    credentialTypes: string[];
}
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
    attributes: PresentationSchemaAttributes[];
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
export declare const SchemaAttributesRequestDto: {
    encode(message: SchemaAttributesRequestDto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SchemaAttributesRequestDto;
    fromJSON(object: any): SchemaAttributesRequestDto;
    toJSON(message: SchemaAttributesRequestDto): unknown;
    fromPartial(object: DeepPartial<SchemaAttributesRequestDto>): SchemaAttributesRequestDto;
};
export declare const SchemaPresentationRequestDto: {
    encode(message: SchemaPresentationRequestDto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SchemaPresentationRequestDto;
    fromJSON(object: any): SchemaPresentationRequestDto;
    toJSON(message: SchemaPresentationRequestDto): unknown;
    fromPartial(object: DeepPartial<SchemaPresentationRequestDto>): SchemaPresentationRequestDto;
};
export declare const PresentationSchemaAttributes: {
    encode(message: PresentationSchemaAttributes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PresentationSchemaAttributes;
    fromJSON(object: any): PresentationSchemaAttributes;
    toJSON(message: PresentationSchemaAttributes): unknown;
    fromPartial(object: DeepPartial<PresentationSchemaAttributes>): PresentationSchemaAttributes;
};
export declare const PresentationSchema: {
    encode(message: PresentationSchema, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PresentationSchema;
    fromJSON(object: any): PresentationSchema;
    toJSON(message: PresentationSchema): unknown;
    fromPartial(object: DeepPartial<PresentationSchema>): PresentationSchema;
};
export declare const CredentialSchemaData: {
    encode(message: CredentialSchemaData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CredentialSchemaData;
    fromJSON(object: any): CredentialSchemaData;
    toJSON(message: CredentialSchemaData): unknown;
    fromPartial(object: DeepPartial<CredentialSchemaData>): CredentialSchemaData;
};
export declare const SchemaGroupings: {
    encode(message: SchemaGroupings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SchemaGroupings;
    fromJSON(object: any): SchemaGroupings;
    toJSON(message: SchemaGroupings): unknown;
    fromPartial(object: DeepPartial<SchemaGroupings>): SchemaGroupings;
};
export declare const SchemaPresentationDto: {
    encode(message: SchemaPresentationDto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SchemaPresentationDto;
    fromJSON(object: any): SchemaPresentationDto;
    toJSON(message: SchemaPresentationDto): unknown;
    fromPartial(object: DeepPartial<SchemaPresentationDto>): SchemaPresentationDto;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=schema.d.ts.map