# Cursor Rules Overview

This directory contains all the development rules and guidelines for the project. Each rule file focuses on a specific aspect of development to ensure consistency and quality.

## 📋 Available Rules

### 1. **wajib-dilakukan.mdc** ⭐ **CORE RULES**
- **Purpose**: Core development practices and mandatory rules for frontend development
- **Scope**: All frontend development, project structure, and documentation
- **Key Rule**: Project structure, changes recap, reusable components, global variables, style consistency

### 2. **component-development-rules.mdc** ⭐ **COMPONENT RULES**
- **Purpose**: Component development patterns and best practices for creating reusable components
- **Scope**: All component creation and organization
- **Key Rule**: Proper folder structure, documentation, TypeScript interfaces, testing, accessibility

### 3. **firebase-integration-rules.mdc** ⭐ **FIREBASE RULES**
- **Purpose**: Firebase integration rules and best practices for consistent Firebase usage
- **Scope**: All Firebase operations and integrations
- **Key Rule**: Always use Firebase CRUD service, never make direct Firebase calls

### 4. **datatable-width-calculation.mdc**
- **Purpose**: Ensures proper width calculation for DataTable components to prevent desktop overlap
- **Scope**: All DataTable implementations
- **Key Rule**: Always wrap DataTable in responsive width container with proper breakpoints

### 5. **office-table-component.mdc**
- **Purpose**: Mandates use of DataTable component for all table implementations in office module
- **Scope**: Office module table components
- **Key Rule**: Never create custom tables - always use DataTable component

### 6. **common-components-priority.mdc**
- **Purpose**: Ensures use of existing common components before creating new ones
- **Scope**: All form inputs and UI components
- **Key Rule**: Check common components first, maintain design consistency

### 7. **typescript-best-practices.mdc**
- **Purpose**: TypeScript coding standards and best practices
- **Scope**: All TypeScript files
- **Key Rule**: Always use proper types, never use `any`, implement proper interfaces

### 8. **error-handling-patterns.mdc**
- **Purpose**: Error handling patterns and user experience guidelines
- **Scope**: All components and API calls
- **Key Rule**: Always handle errors gracefully, implement error boundaries

### 9. **testing-guidelines.mdc**
- **Purpose**: Testing standards and best practices
- **Scope**: All test files
- **Key Rule**: Write tests for all components, hooks, and utilities

### 10. **api-integration-patterns.mdc**
- **Purpose**: API integration patterns and service layer guidelines
- **Scope**: All API calls and data fetching
- **Key Rule**: Use centralized API client, implement proper error handling

## 🎯 How to Use These Rules

1. **Start with Core Rules**: Read `wajib-dilakukan.mdc` first for fundamental practices
2. **Component Development**: Use `component-development-rules.mdc` when creating new components
3. **Firebase Integration**: Use `firebase-integration-rules.mdc` for all Firebase operations
4. **Follow the patterns** shown in examples
5. **Check rules** when implementing new features
6. **Reference rules** during code reviews

## 📁 File Structure

```
.cursor/rules/
├── README.md                           # This file
├── wajib-dilakukan.mdc                 # ⭐ CORE RULES - Mandatory practices
├── component-development-rules.mdc      # ⭐ COMPONENT RULES - Component patterns
├── firebase-integration-rules.mdc      # ⭐ FIREBASE RULES - Firebase patterns
├── datatable-width-calculation.mdc     # DataTable width rules
├── office-table-component.mdc          # Table component rules
├── common-components-priority.mdc      # Component priority rules
├── typescript-best-practices.mdc       # TypeScript standards
├── error-handling-patterns.mdc        # Error handling patterns
├── testing-guidelines.mdc             # Testing standards
└── api-integration-patterns.mdc       # API integration patterns
```

## 🚨 Priority Levels

### ⭐ **CORE RULES** (Highest Priority)
- **wajib-dilakukan.mdc** - Fundamental development practices
- **component-development-rules.mdc** - Component creation standards
- **firebase-integration-rules.mdc** - Firebase integration standards

### 🔧 **SPECIFIC RULES** (Medium Priority)
- **datatable-width-calculation.mdc** - DataTable specific
- **office-table-component.mdc** - Table component specific
- **common-components-priority.mdc** - Component usage specific

### 📚 **BEST PRACTICES** (Standard Priority)
- **typescript-best-practices.mdc** - TypeScript standards
- **error-handling-patterns.mdc** - Error handling patterns
- **testing-guidelines.mdc** - Testing standards
- **api-integration-patterns.mdc** - API patterns

## ⚠️ Important Notes

- **Core rules are mandatory** and must be followed in all development
- **Component rules are critical** for maintaining project structure
- **Firebase rules are critical** for maintaining Firebase integration consistency
- **Failure to follow core rules** will result in immediate code review rejection
- **Rules are updated** as the project evolves
- **Questions about rules** should be discussed with the team

## 🔄 Rule Updates

Rules are updated based on:
- Project requirements changes
- Best practices evolution
- Team feedback and experience
- Code review findings

## 📚 Additional Resources

- Check individual rule files for detailed examples
- Refer to component documentation
- Review existing implementations in the codebase
- Ask team members for clarification

## 🎯 Development Workflow

1. **Before Development**: Read `wajib-dilakukan.mdc`, `component-development-rules.mdc`, and `firebase-integration-rules.mdc`
2. **During Development**: Follow specific rules based on what you're building
3. **After Development**: Update documentation and follow checklist requirements
4. **Code Review**: Reference rules to ensure compliance

## 🔥 Firebase Integration

**CRITICAL**: All Firebase operations MUST use the Firebase CRUD service:
- **Location**: `src/lib/firebase/`
- **Hook**: `useCollection<T>(collectionName)`
- **Service**: `createFirebaseCRUD<T>(collectionName)`
- **Rule**: Never make direct Firebase calls in components
