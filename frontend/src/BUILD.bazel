load("@aspect_rules_ts//ts:defs.bzl", "ts_project")
load("@npm//frontend:tailwindcss/package_json.bzl", tailwind_bin = "bin")
load("@aspect_rules_js//js:defs.bzl", "js_run_devserver")
load("@npm//frontend:http-server/package_json.bzl", http_server_bin = "bin")
load("@npm//frontend:vitest/package_json.bzl", vitest_bin = "bin")

exports_files([
    "styles.css",
    "index.ts",
    "tailwind.config.js",
    "postcss.config.js",
    "index.html",
    "vite.config.ts",
    "index.test.ts",
])

ts_project(
    name = "src",
    srcs = ["index.ts"],
    out_dir = "dist",
    root_dir = "",
    transpiler = "tsc",
    tsconfig = "//frontend:tsconfig",
)

tailwind_bin.tailwindcss(
    name = "styles",
    srcs = [
        "styles.css",
        "index.ts",
        "tailwind.config.js",
        "postcss.config.js",
    ],
    outs = ["dist/styles.css"],
    chdir = "frontend/src",
    args = [
        "--input",
        "styles.css",
        "--output",
        "dist/styles.css",
        "--config",
        "tailwind.config.js",
    ],
)

http_server_bin.http_server_binary(
    name = "http_server_bin",
)

js_run_devserver(
    name = "serve",
    args = ["."],
    chdir = "frontend/src",
    data = [
        "index.html",
        ":src",
        ":styles",
    ],
    tool = ":http_server_bin",
)

vitest_bin.vitest_test(
    name = "test",
    args = [
        "run",
        "--config",
        "vite.config.ts",
    ],
    chdir = "frontend/src",
    data = [
        "index.test.ts",
        "vite.config.ts",
        "index.ts",
        "//frontend:package_json",
        "//frontend:node_modules/vitest",
        "//frontend:node_modules/vite",
    ],
)
