# Bazel TypeScript & Tailwind CSS Project

A hermetic, high-performance web project setup using **Bazel (Bzlmod)**, **TypeScript**, **Tailwind CSS**, and **Vitest**.

## Project Structure

- `/`: Bazel configuration (`MODULE.bazel`, `BUILD`).
- `frontend/`: Node.js project root (`package.json`, `pnpm-lock.yaml`).
- `frontend/src/`: Application source code (TS, CSS, HTML).
- `frontend/src/dist/`: Build outputs (managed by Bazel).

## Prerequisites

- [Bazel](https://bazel.build/install) (v7.0+)
- [pnpm](https://pnpm.io/installation) (v9.0+)
- [ibazel](https://github.com/bazelbuild/bazel-watcher) (Optional, for watch mode)

## Getting Started

1.  Clone the repository.
2.  Install dependencies locally (for IDE support):
    ```bash
    cd frontend && pnpm install
    ```

## Core Commands

### Building
Build the entire project:
```bash
bazel build //...
```

Build specific components:
```bash
bazel build //frontend/src:src      # TypeScript only
bazel build //frontend/src:styles   # Tailwind CSS only
```

### Testing
Run all tests using Vitest:
```bash
bazel test //...
```

Run tests for the frontend package:
```bash
bazel test //frontend/src:test
```

### Serving
Start the local development server:
```bash
bazel run //frontend/src:serve
```
Default address: `http://localhost:8080`

### Watch Mode (ibazel)
Use `ibazel` to automatically rebuild and reload on file changes.

**Live Rebuild & Test:**
```bash
ibazel test //frontend/src:test
```

**Live Rebuild & Serve:**
```bash
ibazel run //frontend/src:serve
```

## Maintenance

### Updating Dependencies
1.  Modify `frontend/package.json`.
2.  Update the lockfile:
    ```bash
    cd frontend && pnpm install --lockfile-only
    ```
3.  Bazel will automatically sync with the new lockfile on the next build.

### Updating BUILD Files (Gazelle)
Automatically generate or update `BUILD` files when adding new files or imports:
```bash
bazel run //:gazelle
```
