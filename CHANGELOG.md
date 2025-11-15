# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2025-11-14

### Added
- TypeScript configuration files (tsconfig.json, tsconfig.node.json)
- ErrorBoundary component for graceful error handling
- Interactive node dragging and edge management
- CSS build process with TailwindCSS minification
- Comprehensive README with API documentation and examples
- Example application with sample flow data
- Proper package metadata (keywords, repository, files)
- Peer dependencies for React and React DOM

### Changed
- Updated Zustand import from default to named export (fixing deprecation warning)
- Package name consistency (now @osabun/saga-flow-designer throughout)
- Upgraded dependencies:
  - tsup: ^7.0.0 → ^8.5.1
  - vite: ^5.0.0 → ^7.2.2
- Moved React and React DOM to peer dependencies
- Enhanced FlowCanvas with proper node and edge change handlers
- Added `fitView` to FlowCanvas for better initial view
- Fixed package.json exports order to resolve TypeScript warnings

### Fixed
- Build errors due to missing TypeScript configuration
- Security vulnerabilities (0 vulnerabilities remaining)
- Unused variable warnings in strict TypeScript mode
- Missing @vitejs/plugin-react dependency
- Missing autoprefixer and postcss dependencies

### Security
- Resolved 3 moderate severity vulnerabilities in dependencies
- Updated esbuild (transitive dependency) through tsup and vite updates
