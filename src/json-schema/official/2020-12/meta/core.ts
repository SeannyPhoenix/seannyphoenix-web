// $schema: https://json-schema.org/draft/2020-12/schema
// $id: https://json-schema.org/draft/2020-12/meta/core
// $dynamicAnchor: meta
// title: Core vocabulary meta-schema

import { JsonSchema202012 } from "../schema";

// $id: https://json-schema.org/draft/2020-12/meta/core
export type Core =
  | {
      // $comment: Non-empty fragments not allowed
      // pattern: ^[^#]*#?$
      readonly $id?: UriReferenceString;

      readonly $schema?: UriString;

      readonly $ref?: UriReferenceString;

      readonly $anchor?: AnchorString;

      readonly $dynamicRef?: UriReferenceString;

      readonly $dynamicAnchor?: AnchorString;

      readonly $vocabulary?: Record<UriString, boolean>;

      readonly $comment?: string;

      readonly $defs?: Record<string, JsonSchema202012>;
    }
  | boolean;

// pattern: ^[A-Za-z_][-A-Za-z0-9._]*$
export type AnchorString = string;

// format: uri
type UriString = string;

// format: uri-reference
export type UriReferenceString = string;
