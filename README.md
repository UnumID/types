# UnumID Types

This project contains all of our shared, generic Typescript types that are used through out the [UnumID](https://https://docs.unum.id/) ecosystem. 

It as well has shared [runtypes](https://github.com/pelotom/runtypes) which allows for functionality like graceful runtime string literal type checking. To support runtypes we had to use a index.ts instead of just a type declaration index.d.ts file. This also means that a build step is necessary in order for changes to index.ts to be realized.

## Conventions

### Naming

Generic types such as `PresentationRequest`, as defined here, ought to be the simplest naming conventions. For example, the PresentationRequest entity definition types ought to go by `PresentationRequestEntity`.

Types explicitly for HTTP interfaces ought have a trailing `Dto`, i.e. `PresentationRequestDto`. Furthermore, if the Data Transfer Object is different between the HTTP request verbs, i.e. GET and POST, then include in the type as such, `PresentationRequestPostDto`.

Types that are used for cryptographic purposes should have a unsigned and signed version. However, the signed type should have the simpler naming convention, i.e. `Credential` is the signed type of `UnsignedCredential`.

### Protocol Buffers

Ideally all types core to UnumID ought to be defined in the [protobufs](https://github.com/UnumID/protobufs) repo and imported into this project. That migration is an ongoing effort. While we migrate to using all Protocol Buffer defined objects and gRPC, we are still using JSON and HTTP for the transport layer. As such attributes defined in protos that go over the network are serialized to JSON which can cause some typing side effects at run time. An example of this is are Date attributes. 

For this reason we have adopted a convention of extending the proto defined interface here to make the Date attributes strings. One such example is of the EncryptedCredentialDto defined in index.ts which extends the proto defined interface, EncryptedCredential.

## Documentation
Detailed documentation generated from source can be found [here](https://docs.unum.id/types/index.html) which is served by this [repo](https://github.com/UnumID/types)'s Github Pages configuration. It is setup to server via the /docs folder of the main branch.

In order to generate the documentation from the source code run the `createTypedocs.sh` script. However, note that this is now handled automatically by the release CI job.

## Release
Releases are handled programmatically via Github Actions CI. Simply push a tag with a preceding 'v' followed by the semver version of the release, i.e. v3.4.3. The CI job will then handle updating the package version, creating new typedocs, creating a Github release, and publishing the package to NPM and Github Packages.