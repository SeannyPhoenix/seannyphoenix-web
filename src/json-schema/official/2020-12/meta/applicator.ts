// $schema: https://json-schema.org/draft/2020-12/schema
// $id: https://json-schema.org/draft/2020-12/meta/applicator
// $dynamicAnchor: meta
// title: Applicator vocabulary meta-schema

import { JsonSchema202012 } from "../schema";

export type Applicator =
  | {
      readonly prefixItems?: SchemaArray;

      readonly items?: JsonSchema202012;

      readonly contains?: JsonSchema202012;

      readonly additionalProperties?: JsonSchema202012;

      // default: {}
      readonly properties?: Record<string, JsonSchema202012>;

      // propertyNames: regex
      // default: {}
      readonly patternProperties?: Record<string, JsonSchema202012>;

      // default: {}
      readonly dependentSchemas?: Record<string, JsonSchema202012>;

      readonly propertyNames?: JsonSchema202012;

      readonly if?: JsonSchema202012;

      readonly then?: JsonSchema202012;

      readonly else?: JsonSchema202012;

      readonly allOf?: SchemaArray;

      readonly anyOf?: SchemaArray;

      readonly oneOf?: SchemaArray;

      readonly not?: JsonSchema202012;
    }
  | boolean;

// minItems: 1
type SchemaArray = JsonSchema202012[];
