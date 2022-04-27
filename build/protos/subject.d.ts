import _m0 from "protobufjs/minimal";
import { Proof } from "./proof";
import { IssuerInfo } from "./issuer";
export declare const protobufPackage = "subject.v1";
/** Type to encapsulate a Subject's request for Credentials */
export interface UnsignedSubjectCredentialsRequest {
    types: string[];
    issuer: string;
}
/** Type to encapsulate a Subject's signed request for Credentials. Tightly coupled with UnsignedSubjectCredentialsRequest. */
export interface SubjectCredentialsRequest {
    types: string[];
    issuer: string;
    proof: Proof | undefined;
}
/** Type to encapsulate a dto response from the SubjectCredentialsAbsent service. */
export interface SubjectCredentialsAbsentDto {
    subjectCredentialsAbsent: UnsignedSubjectCredentialsRequest[];
}
/** Encapsulates Issuer metadata attributes. */
export interface SubjectCredentialIssuerInfoDto {
    issuerInfo: IssuerInfo | undefined;
}
export declare const UnsignedSubjectCredentialsRequest: {
    encode(message: UnsignedSubjectCredentialsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UnsignedSubjectCredentialsRequest;
    fromJSON(object: any): UnsignedSubjectCredentialsRequest;
    toJSON(message: UnsignedSubjectCredentialsRequest): unknown;
    fromPartial(object: DeepPartial<UnsignedSubjectCredentialsRequest>): UnsignedSubjectCredentialsRequest;
};
export declare const SubjectCredentialsRequest: {
    encode(message: SubjectCredentialsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubjectCredentialsRequest;
    fromJSON(object: any): SubjectCredentialsRequest;
    toJSON(message: SubjectCredentialsRequest): unknown;
    fromPartial(object: DeepPartial<SubjectCredentialsRequest>): SubjectCredentialsRequest;
};
export declare const SubjectCredentialsAbsentDto: {
    encode(message: SubjectCredentialsAbsentDto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubjectCredentialsAbsentDto;
    fromJSON(object: any): SubjectCredentialsAbsentDto;
    toJSON(message: SubjectCredentialsAbsentDto): unknown;
    fromPartial(object: DeepPartial<SubjectCredentialsAbsentDto>): SubjectCredentialsAbsentDto;
};
export declare const SubjectCredentialIssuerInfoDto: {
    encode(message: SubjectCredentialIssuerInfoDto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubjectCredentialIssuerInfoDto;
    fromJSON(object: any): SubjectCredentialIssuerInfoDto;
    toJSON(message: SubjectCredentialIssuerInfoDto): unknown;
    fromPartial(object: DeepPartial<SubjectCredentialIssuerInfoDto>): SubjectCredentialIssuerInfoDto;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=subject.d.ts.map