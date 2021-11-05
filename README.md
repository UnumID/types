# UnumID Types

This project contains all of our shared, generic Typescript types that are used through out the [UnumID](https://https://docs.unum.id/) ecosystem. 

It as well has shared [runtypes](https://github.com/pelotom/runtypes) which allows for functionality like graceful runtime string literal type checking. To support runtypes we had to use a index.ts instead of just a type declaration index.d.ts file. This also means that a build step is necessary in order for changes to index.ts to be realized.

## Conventions

### Protocol Buffers

Ideally all types core to UnumID ought to be defined in the [protobufs](https://github.com/UnumID/protobufs) repo and imported into this project. That migration is an ongoing effort. While we migrate to using all Protocol Buffer defined objects and gRPC, we are still using JSON and HTTP for the transport layer. As such attributes defined in protos that go over the network are serialized to JSON which can cause some typing side effects at run time. An example of this is are Date attributes. 

For this reason we have adopted a convention of extending the proto defined interface here to make the Date attributes strings. One such example is of the EncryptedCredentialDto defined in index.ts which extends the proto defined interface, EncryptedCredential. _Note the use of the Omit function. Reference material can be found [here](https://stackoverflow.com/questions/41285211/overriding-interface-property-type-defined-in-typescript-d-ts-file)_

### Naming

a) Generic types such as `PresentationRequest`, as defined here, ought to be the simplest naming conventions. The generic type represents the domain type definition. If the object is used for persistence this generic type includes the persisted metadata, i.e. `uuid`, `createdAt`, and `updatedAt`. 

b) For generic types that are not directly persisted, i.e. `CredentialRequest`, the naming convention also ought to be the simplest.

c) For generic types that represent a object consisting options for creating a persisted entity they should have succeeding `Options` naming convention. For example, `IssueCredentialOptions` or `EncryptedCredentialOptions`.

d) Types explicitly for HTTP interfaces ought have a trailing `Dto`, i.e. `PresentationRequestDto`. This is often used to better represent for the JSON serialized attributes `createdAt` and `updatedAt` from `Date` to `string`. Furthermore, if the Data Transfer Object is different between the HTTP request verbs, i.e. GET and POST, then include in the type as such, `PresentationRequestPostDto`.

e) HTTP types that encompass other DTOs, that are not just a serialization of one object, should use the naming convention "EnrichedDto". For example the `PresentationRequestEnrichedDto` encompasses the PresentationRequestDto type along with other fields supplementary to the `PresentationRequestDto` type.

f) Types that are used for cryptographic purposes should have a unsigned and signed version. However, the signed type should have the simpler naming convention, i.e. `Credential` is the signed type of `UnsignedCredential`. 

_Note: any types that undergo cryptographic operations need to be defined via Protocol Buffers in order to leverage their deterministic byte array properties. Thus should not be defined solely in this ts types project._

g) Entity types belong in the projects that interface with their data layers. For example, the PresentationRequest entity type, `PresentationRequestEntity`, should not be defined generically, but rather in the SaaS project types.

## Documentation
Detailed documentation generated from source can be found [here](https://docs.unum.id/types/index.html) which is served by this [repo](https://github.com/UnumID/types)'s Github Pages configuration. It is setup to server via the /docs folder of the main branch.

In order to generate the documentation from the source code run the `createTypedocs.sh` script. However, note that this is now handled automatically by the release CI job.

## Release
Releases are handled programmatically via Github Actions CI. Simply push a tag with a preceding 'v' followed by the semver version of the release, i.e. v3.4.3. The CI job will then handle updating the package version, creating new typedocs, creating a Github release, and publishing the package to NPM and Github Packages.