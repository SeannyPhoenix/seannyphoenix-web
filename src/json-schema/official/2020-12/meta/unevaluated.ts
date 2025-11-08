// $schema: https://json-schema.org/draft/2020-12/schema
// $id: https://json-schema.org/draft/2020-12/meta/unevaluated
// $dynamicAnchor: meta
// title: Unevaluated applicator vocabulary meta-schema

import { JsonSchema202012 } from "../schema";

export type Unevaluated =
  | {
      readonly unevaluatedItems?: JsonSchema202012;

      readonly unevaluatedProperties?: JsonSchema202012;
    }
  | boolean;
