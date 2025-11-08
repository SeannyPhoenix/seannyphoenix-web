// $schema: https://json-schema.org/draft/2020-12/schema
// $id: https://json-schema.org/draft/2020-12/meta/content
// $dynamicAnchor: meta
// title: Content vocabulary meta-schema

import { JsonSchema202012 } from "../schema";

export type Content =
  | boolean
  | {
      readonly contentEncoding?: string;

      readonly contentMediaType?: string;

      readonly contentSchema?: JsonSchema202012;
    };
