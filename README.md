# FHIR for typescript

## Summary

This is a fork of the [Google FHIR](https://github.com/google/fhir) repository with extensions to build the protos for ecmascript and friends.   In general, it's a 1-for-1
copy and build using Buf's build tooling.   The only modifications were the exclusions of duplicate exports and creation of index.ts entrypoints for bundling.  Modifications to the rest of the repo are intentionally avoided.   This should facilitate upkeep and allow us to track the upstream fairly closely as new protos emerge (e.g. the upcoming R5 release).

The package is bundled using tsup and should be suitable for consumption by both common and esmodule imports.  We use the typescript "bundler" moduleResolution setting in other aloom-ai projects but assume that other modern imports (e.g., "nodenext") should work as well.  The output is moderately heavy at ~3.7MB packed so you _probably_ want to tree-shake if you intend to use with a browser.  

We may add additional typescript extensions in the future, but only intend to update this repository sparingly.  Feel free to fork and extend as needed.


## Trademark
FHIR® is the registered trademark of HL7 and is used with the permission of HL7. Use of the FHIR trademark does not constitute endorsement of this product by HL7.

