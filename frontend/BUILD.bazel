load("@aspect_rules_ts//ts:defs.bzl", "ts_config")
load("@npm//:defs.bzl", "npm_link_all_packages")
load("@aspect_rules_js//js:defs.bzl", "js_library")

exports_files([
    "tailwind.config.js",
    "postcss.config.js",
    "package.json",
])

# Link all npm packages into the frontend/node_modules tree
npm_link_all_packages(name = "node_modules")

js_library(
    name = "package_json",
    srcs = ["package.json"],
    visibility = ["//visibility:public"],
)

ts_config(
    name = "tsconfig",
    src = "tsconfig.json",
    visibility = [":__subpackages__"],
)
