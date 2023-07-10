import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "schema.v1";
export interface SchemaAttributesRequestsDto {
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
export interface SchemaAttributesDto {
    credentials: PresentationSchema[];
}
export declare const SchemaAttributesRequestsDto: {
    encode(message: SchemaAttributesRequestsDto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SchemaAttributesRequestsDto;
    fromJSON(object: any): SchemaAttributesRequestsDto;
    toJSON(message: SchemaAttributesRequestsDto): unknown;
    fromPartial(object: DeepPartial<SchemaAttributesRequestsDto>): SchemaAttributesRequestsDto;
};
export declare const SchemaPresentationRequestDto: {
    encode(message: SchemaPresentationRequestDto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SchemaPresentationRequestDto;
    fromJSON(object: any): SchemaPresentationRequestDto;
    toJSON(message: SchemaPresentationRequestDto): unknown;
    fromPartial(object: DeepPartial<SchemaPresentationRequestDto>): SchemaPresentationRequestDto;
};
export declare const PresentationSchemaAttributes: {
    encode(message: PresentationSchemaAttributes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PresentationSchemaAttributes;
    fromJSON(object: any): PresentationSchemaAttributes;
    toJSON(message: PresentationSchemaAttributes): unknown;
    fromPartial(object: DeepPartial<PresentationSchemaAttributes>): PresentationSchemaAttributes;
};
export declare const PresentationSchema: {
    encode(message: PresentationSchema, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PresentationSchema;
    fromJSON(object: any): PresentationSchema;
    toJSON(message: PresentationSchema): unknown;
    fromPartial(object: DeepPartial<PresentationSchema>): PresentationSchema;
};
export declare const CredentialSchemaData: {
    encode(message: CredentialSchemaData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CredentialSchemaData;
    fromJSON(object: any): CredentialSchemaData;
    toJSON(message: CredentialSchemaData): unknown;
    fromPartial(object: DeepPartial<CredentialSchemaData>): CredentialSchemaData;
};
export declare const SchemaGroupings: {
    encode(message: SchemaGroupings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SchemaGroupings;
    fromJSON(object: any): SchemaGroupings;
    toJSON(message: SchemaGroupings): unknown;
    fromPartial(object: DeepPartial<SchemaGroupings>): SchemaGroupings;
};
export declare const SchemaPresentationDto: {
    encode(message: SchemaPresentationDto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SchemaPresentationDto;
    fromJSON(object: any): SchemaPresentationDto;
    toJSON(message: SchemaPresentationDto): unknown;
    fromPartial(object: DeepPartial<SchemaPresentationDto>): SchemaPresentationDto;
};
export declare const SchemaAttributesDto: {
    encode(message: SchemaAttributesDto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SchemaAttributesDto;
    fromJSON(object: any): SchemaAttributesDto;
    toJSON(message: SchemaAttributesDto): unknown;
    fromPartial(object: DeepPartial<SchemaAttributesDto>): SchemaAttributesDto;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=schema.d.ts.map