// $schema: https://json-schema.org/draft/2020-12/schema
// $id: https://json-schema.org/draft/2020-12/schema
// $dynamicAnchor: meta
// title: Core and Validation Schemas for JSON Schema
// $comment: This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.

import { Applicator } from "./meta/applicator";
import { Content } from "./meta/content";
import { AnchorString, Core, UriReferenceString } from "./meta/core";
import { FormatAnnotation } from "./meta/format-annotation";
import { MetaData } from "./meta/meta-data";
import { Unevaluated } from "./meta/unevaluated";
import { StringArray, Validation } from "./meta/validation";

export type JsonSchema202012 =
  | boolean
  | (Core &
      Applicator &
      Unevaluated &
      Validation &
      MetaData &
      FormatAnnotation &
      Content & {
        // $comment: "definitions" has been replaced by "$defs".
        // deprecated: true
        // default: {}
        readonly definitions?: Record<string, JsonSchema202012>;

        // $comment: "dependencies" has been replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.
        // deprecated: true
        // default: {}
        readonly dependencies?: Record<string, JsonSchema202012 | StringArray>;

        // $comment: "$recursiveAnchor" has been replaced by "$dynamicAnchor".
        // deprecated: true
        readonly $recursiveAnchor?: AnchorString;

        // $comment: "$recursiveRef" has been replaced by "$dynamicRef".
        // deprecated: true
        readonly $recursiveRef?: UriReferenceString;
      });
