import { test, expectTypeOf } from "vitest";
import { createProjectDir } from "./install-deps.js";

test("Test 1. directory creation: ", () => {
  expectTypeOf(createProjectDir("must")).toBeString();
});

test("Test 2. directory name contains numbers: ", () => {
  expectTypeOf(createProjectDir("3242")).toBeString();
});

test("Test 3. directory name contains numbers: ", () => {
  expectTypeOf(createProjectDir("")).toBeString();
});

test("Test 3. directory name contains numbers: ", () => {
  expectTypeOf(createProjectDir("must")).toBeString();
});
