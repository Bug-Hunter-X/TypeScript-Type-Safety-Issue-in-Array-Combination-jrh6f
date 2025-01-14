# TypeScript Type Safety Issue in Array Combination

This repository demonstrates a type safety issue that can arise in TypeScript when combining arrays of different types using the spread syntax. The code is designed to work only with arrays of numbers, however it lacks explicit type checking which results in a runtime error when arrays of different types are combined.

## Bug

The `combine` function attempts to combine two number arrays using the spread syntax.  However, it lacks type validation, allowing for arrays of different types to be combined resulting in an error.

## Solution

The solution enforces type checking to ensure that only number arrays are combined. This prevents unexpected behavior and ensures type safety.