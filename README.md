# UnumID Types

This project contains all of our shared, generic Typescript types that are used through out the [UnumID](https://https://docs.unum.id/) ecosystem. 

It as well has shared [runtypes](https://github.com/pelotom/runtypes) which allows for functionality like graceful runtime string literal type checking. To support runtypes we had to use a index.ts instead of just a type declaration index.d.ts file. This also means that a build step is necessary in order for changes to index.ts to be realized.

## Naming Conventions

Generic types such as `PresentationRequest`, as defined here, ought to be the simplest naming conventions. For example, the PresentationRequest entity definition types ought to go by `PresentationRequestEntity`.

Types explicitly for HTTP interfaces ought have a trailing `Dto`, i.e. `PresentationRequestDto`. Furthermore, if the Data Transfer Object is different between the HTTP request verbs, i.e. GET and POST, then include in the type as such, `PresentationRequestPostDto`.

Types that are used for cryptographic purposes should have a unsigned and signed version. However, the signed type should have the simpler naming convention, i.e. `Credential` is the signed type of `UnsignedCredential`.

## Documentation
Detailed documentation generated from source can be found [here](https://docs.unum.id/types/index.html) which is served by this repo's Github Pages configuration. It is setup to server via the /docs folder of the main branch.

In order to generate the documentation from the source code run the `createTypedocs.sh` script.