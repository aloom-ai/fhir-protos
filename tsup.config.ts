import { defineConfig, type Options } from 'tsup'

export default defineConfig((options: Options) => ({
    entryPoints: ['ts/proto/google/fhir/proto/r4/index.ts', 'ts/proto/google/fhir/proto/stu3/index.ts'],
    clean: true,
    dts: true,
    splitting: true,
    format: ['esm', 'cjs'],
    ...options,
}))
