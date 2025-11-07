# JSON Schema Tool

A comprehensive TypeScript library for JSON Schema validation and document building.

## Overview

This module provides a complete solution for working with JSON Schema in TypeScript applications, including:

- **Validation**: Validate JSON documents against JSON Schema specifications
- **Building**: Generate forms and interfaces for creating JSON documents from schemas
- **Schema Management**: Type-safe interfaces and utilities for working with JSON Schema
- **Utilities**: Helper functions for path manipulation, type checking, and more

## Module Structure

The library is organized into focused modules using barrel exports:

```
src/json-schema/
├── index.ts           # Main barrel export - import everything from here
├── validator/         # JSON Schema validation engine
│   └── index.ts
├── builder/           # Document building and form generation
│   └── index.ts
├── schema/            # JSON Schema type definitions and utilities
│   └── index.ts
├── utils/             # Common utilities and helper functions
│   └── index.ts
└── docs/              # Documentation and planning
    ├── REQUIREMENTS.md
    └── PLANNING.md
```

## Quick Start

```typescript
import { validateSchema, SchemaBuilder, JSONSchema } from "json-schema";

// Define a schema
const schema: JSONSchema = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 1 },
    age: { type: "number", minimum: 0 },
  },
  required: ["name"],
};

// Validate data
const data = { name: "John", age: 30 };
const result = validateSchema(data, schema);

if (result.valid) {
  console.log("Valid document!");
} else {
  console.log("Validation errors:", result.errors);
}

// Build forms from schema
const builder = new SchemaBuilder(schema);
const form = builder.generateForm();
```

## API Reference

### Validation

- `validateSchema(data, schema, options?)` - Validate data against a schema
- `ValidationResult` - Result interface with validation status and errors
- `ValidationError` - Individual validation error details

### Building

- `SchemaBuilder` - Class for building forms and documents from schemas
- `buildSchema(schema, options?)` - Factory function for creating builders
- `FormField` - Interface for form field definitions

### Schema Types

- `JSONSchema` - Complete JSON Schema interface
- `JSONSchemaType` - Union of valid JSON Schema type strings
- `SchemaReference` - Interface for schema references ($ref)

### Utilities

- `createJsonPointer(path)` - Create JSON Pointer from path array
- `parseJsonPointer(pointer)` - Parse JSON Pointer to path array
- `getValueAtPath(obj, path)` - Get value at object path
- `setValueAtPath(obj, path, value)` - Set value at object path
- `isObject(value)`, `isArray(value)`, `isPrimitive(value)` - Type guards

## Development Status

🚧 **This module is currently under development.**

Current milestone: **Milestone 0 - Foundation**

- ✅ Project structure created
- ✅ TypeScript interfaces defined
- ✅ Barrel exports configured
- ⏳ Basic validation implementation
- ⏳ JSON file loading
- ⏳ Proof of concept testing

See [PLANNING.md](docs/PLANNING.md) for detailed development roadmap and [REQUIREMENTS.md](docs/REQUIREMENTS.md) for complete specifications.

## Testing

```bash
# Run tests (when implemented)
npm test

# Run type checking
npx tsc --noEmit

# Build the project
npm run build
```

## Contributing

This module follows the architectural decisions documented in [PLANNING.md](docs/PLANNING.md). Key principles:

- **Barrel exports** for clean import statements
- **TypeScript-first** with comprehensive type safety
- **Incremental development** following milestone-driven approach
- **Real-world focused** with GTFS and similar use cases in mind
