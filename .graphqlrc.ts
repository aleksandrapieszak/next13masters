import type { CodegenConfig } from '@graphql-codegen/cli';
import {loadEnvConfig} from "@next/env";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.GRAPHQL_URL,
  documents: "src/graphql/*.graphql",
  ignoreNoDocuments: true,
  generates: {
    "src/gql/": {
      preset: "client",
      presetConfig:{
        fragmentMasking: {unmaskFunctionName:"getFragmentData"}
      },
      config:{
        defaultScalarType: "unknown",
        enumAsType:true,
        useTypeImports: true,
        skipTypeName: true,
        documentMode: "string",
      },
      plugins: []
    }
  }
};

export default config;
