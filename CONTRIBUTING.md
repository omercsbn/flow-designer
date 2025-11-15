# Contributing to @osabun/saga-flow-designer

Thank you for your interest in contributing to this project! This guide will help you get started.

## Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/omercsbn/flow-designer.git
   cd flow-designer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the library**
   ```bash
   npm run build
   ```

4. **Run the example**
   ```bash
   npm run dev
   ```
   Then open http://localhost:5173 in your browser.

## Project Structure

```
flow-designer/
├── src/                      # Library source code
│   ├── components/          # React components
│   │   ├── FlowCanvas.tsx   # Main canvas component
│   │   ├── PhaseNode.tsx    # Node component
│   │   ├── ConfigPanel.tsx  # Configuration panel
│   │   ├── ConnectionLine.tsx # Connection line component
│   │   └── ErrorBoundary.tsx # Error boundary component
│   ├── hooks/               # React hooks
│   │   └── useFlowStore.ts  # Zustand store
│   ├── types/               # TypeScript types
│   │   └── index.ts         # Type definitions
│   ├── utils/               # Utility functions
│   │   ├── flowSerializer.ts # Import/export utilities
│   │   └── topoSort.ts      # Topological sort
│   ├── style.css            # TailwindCSS styles
│   └── index.ts             # Main entry point
├── example/                 # Example application
│   ├── index.html
│   └── main.tsx
├── dist/                    # Built library (generated)
└── package.json
```

## Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write code following the existing style
   - Keep changes focused and minimal
   - Add comments for complex logic

3. **Build and test**
   ```bash
   npm run build
   npm run dev  # Test in the example app
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: your feature description"
   ```

   Follow [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation changes
   - `refactor:` for code refactoring
   - `test:` for test additions
   - `chore:` for maintenance tasks

5. **Push and create a Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```

## Code Style

- Use TypeScript for all new code
- Follow existing code formatting
- Use functional React components with hooks
- Keep components small and focused
- Add types for all function parameters and return values

## Testing Changes

Before submitting a PR:

1. Build the library: `npm run build`
2. Run the example: `npm run dev`
3. Test all affected functionality
4. Check for TypeScript errors
5. Ensure no security vulnerabilities: `npm audit`

## Adding New Features

When adding new features:

1. Update the TypeScript types in `src/types/`
2. Add components to `src/components/`
3. Export new public APIs from `src/index.ts`
4. Update the README with usage examples
5. Update CHANGELOG.md with your changes

## Reporting Issues

When reporting issues, please include:

- A clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Your environment (OS, Node version, npm version)
- Relevant code snippets or screenshots

## Questions?

Feel free to open an issue for questions or discussions about the project.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
