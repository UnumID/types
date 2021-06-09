**Note**: this branch was a modification that was necessary as part of version 2 of the sdk. It was made after version 3 had already been merged into main. Thus it will live as this special branch for perpetuity or until the use of the sdk version 2 is no more.

# UnumID Types

This project contains all of our shared, generic Typescript types that are used through out the [UnumID](https://https://docs.unum.id/) ecosystem. 

It as well has shared [runtypes](https://github.com/pelotom/runtypes) which allows for functionality like graceful runtime string literal type checking. To support runtypes we had to use a index.ts instead of just a type declaration index.d.ts file. This also means that a build step is necessary in order for changes to index.ts to be realized.

## Documentation
Detailed documentation generated from source can be found [here](https://docs.unum.id/types/index.html) which is served by this repo's Github Pages configuration. It is setup to server via the /docs folder of the main branch.

In order to generate the documentation from the source code run the `createTypedocs.sh` script.