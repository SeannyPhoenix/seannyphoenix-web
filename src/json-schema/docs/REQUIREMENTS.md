# JSON Schema Tool - Requirements Document

## Project Overview

A TypeScript-based JSON schema validation and building tool that will evolve into a web application. The tool implements JSON Schema Draft 2020-12 specification with focus on validation and guided document creation.

## Core Requirements

### Primary Goals

1. **JSON Validator**: Validate any JSON object against a valid JSON schema
2. **JSON Builder**: Provide guided interface for creating JSON documents that conform to a given schema

### Target Use Case

- Validating large datasets (e.g., GTFS datasets with >10,000 small documents)
- Each document contains several properties with simple types or shallow arrays/objects
- Real-time validation feedback during document creation

## Technical Specifications

### Platform & Technology

- **Language**: TypeScript
- **Target Platform**: Web application (browser-based)
- **Browser Support**: Latest browser features
- **Dependencies**: Minimal external dependencies (dev dependencies like esbuild and TypeScript are acceptable)
- **JSON Schema Version**: Draft 2020-12 (schema files included in repository)

### Architecture Principles

- Standalone tool initially
- Individual components designed for reusability in other projects
- Potential future rewrite in Go
- Extensible design for future feature additions

## Functional Requirements

### JSON Validator

#### Phase 1 - Core Validation Features (Priority Order)

1. **Basic Type Validation**

   - string, number, boolean, null, object, array
   - Type coercion handling

2. **String Constraints**

   - minLength, maxLength
   - pattern (regex validation)

3. **Numeric Constraints**

   - minimum, maximum
   - multipleOf

4. **Array Constraints**

   - minItems, maxItems
   - uniqueItems
   - items schema validation

5. **Object Constraints**
   - required properties
   - properties schema validation
   - additionalProperties handling

#### Phase 2 - Advanced Validation Features

6. **Logical Operators**

   - oneOf, anyOf, allOf
   - not

7. **Conditional Logic**

   - if/then/else schemas

8. **Format Validation**
   - email, uri, date-time
   - Additional formats as needed

#### Error Reporting Levels

- **Flag**: Simple pass/fail boolean
- **Basic**: List of failed validation rules
- **Detailed**: Validation errors with JSON paths and context
- **Verbose**: Comprehensive error reporting with suggestions

### JSON Builder

#### User Interface Requirements

- **Schema Upload**: Support for JSON schema file uploads
- **Intelligent Input Controls**:
  - Standard JSON editing with syntax highlighting
  - Enhanced controls for specific schema constraints:
    - Dropdown menus for enum values
    - Date pickers for date formats
    - Numeric steppers for number constraints
    - IntelliSense-style suggestions
- **Real-time Validation**: Immediate feedback as users create/edit documents
- **Guided Creation**: Interface guides users through required fields and constraints

#### Data Handling

- Users provide actual data (no automatic data generation)
- Support for complex nested structures
- Preservation of user input during validation cycles

### Schema Management

#### Phase 1

- **File Upload**: Load JSON schema files from local filesystem
- **Schema Validation**: Ensure uploaded schemas are valid JSON Schema Draft 2020-12
- **Schema Display**: Show schema structure and constraints to users

#### Future Phases

- **Schema Library**: Built-in collection of common schemas
- **Schema Editor**: Create and modify schemas within the tool
- **Schema Validation**: Validate schemas against meta-schema

## Performance Requirements

### Validation Performance

- Handle >10,000 small documents efficiently
- Support both:
  - Batch validation of large datasets
  - Real-time validation during user input
- Target: Sub-100ms validation for typical small documents

### User Experience

- Responsive interface during large batch operations
- Progressive feedback for long-running validations
- Non-blocking UI during background operations

## Non-Functional Requirements

### Maintainability

- Clean, modular TypeScript code
- Comprehensive error handling
- Unit tests for core validation logic
- Documentation for public APIs

### Extensibility

- Plugin architecture for custom validators
- Configurable error reporting
- Support for custom format validators
- Modular design for feature additions

### Reliability

- Robust error handling for malformed schemas
- Graceful degradation for unsupported features
- Input validation and sanitization

## Future Considerations

### Potential Features (Not in Initial Scope)

- Schema registry integration
- Remote schema loading via URLs
- Schema composition and inheritance
- Custom vocabulary support
- Export/import functionality for validated documents
- Integration APIs for external systems

### Platform Evolution

- Potential Go rewrite for performance-critical components
- CLI version of the tool
- Integration with other development tools

## Success Criteria

### Phase 1 Success Metrics

- Successfully validate JSON documents against JSON Schema Draft 2020-12
- Support all Phase 1 validation features
- Provide guided document creation interface
- Handle GTFS dataset validation use case
- Error reporting at flag and basic levels

### Long-term Success Metrics

- Comprehensive JSON Schema Draft 2020-12 support
- Production-ready performance for large datasets
- Intuitive user interface for schema-guided document creation
- Extensible architecture supporting custom use cases

## Dependencies

### External Dependencies (Minimize)

- JSON Schema Draft 2020-12 specification (included in repository)
- No additional runtime dependencies initially

### Development Dependencies

- TypeScript compiler
- esbuild for bundling
- Testing framework (to be determined)
- Development server for web app

## Constraints

### Technical Constraints

- Browser-based execution environment
- No server-side processing initially
- Limited to JSON Schema Draft 2020-12 specification
- Minimal external dependencies

### Resource Constraints

- Single developer initially
- Iterative development approach
- Focus on core functionality before advanced features

---

_This requirements document serves as the foundation for project planning and development. It should be reviewed and updated as the project evolves and new requirements emerge._
