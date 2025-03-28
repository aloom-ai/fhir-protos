//    Copyright 2019 Google Inc.
//
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
//
//        https://www.apache.org/licenses/LICENSE-2.0
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

// @generated by protoc-gen-es v1.4.1 with parameter "target=ts"
// @generated from file proto/google/fhir/proto/r4/core/resources/medicinal_product_undesirable_effect.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Code, CodeableConcept, Extension, Id, Meta, Narrative, Population, Reference, Uri } from "../datatypes_pb.js";

/**
 * Auto-generated from StructureDefinition for
 * MedicinalProductUndesirableEffect. MedicinalProductUndesirableEffect. See
 * http://hl7.org/fhir/StructureDefinition/MedicinalProductUndesirableEffect
 *
 * @generated from message google.fhir.r4.core.MedicinalProductUndesirableEffect
 */
export class MedicinalProductUndesirableEffect extends Message<MedicinalProductUndesirableEffect> {
  /**
   * Logical id of this artifact
   *
   * @generated from field: google.fhir.r4.core.Id id = 1;
   */
  id?: Id;

  /**
   * Metadata about the resource
   *
   * @generated from field: google.fhir.r4.core.Meta meta = 2;
   */
  meta?: Meta;

  /**
   * A set of rules under which this content was created
   *
   * @generated from field: google.fhir.r4.core.Uri implicit_rules = 3;
   */
  implicitRules?: Uri;

  /**
   * Language of the resource content
   *
   * @generated from field: google.fhir.r4.core.Code language = 4;
   */
  language?: Code;

  /**
   * Text summary of the resource, for human interpretation
   *
   * @generated from field: google.fhir.r4.core.Narrative text = 5;
   */
  text?: Narrative;

  /**
   * Contained, inline Resources
   *
   * @generated from field: repeated google.protobuf.Any contained = 6;
   */
  contained: Any[] = [];

  /**
   * Additional content defined by implementations
   *
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 8;
   */
  extension: Extension[] = [];

  /**
   * Extensions that cannot be ignored
   *
   * @generated from field: repeated google.fhir.r4.core.Extension modifier_extension = 9;
   */
  modifierExtension: Extension[] = [];

  /**
   * The medication for which this is an indication
   *
   * @generated from field: repeated google.fhir.r4.core.Reference subject = 10;
   */
  subject: Reference[] = [];

  /**
   * The symptom, condition or undesirable effect
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept symptom_condition_effect = 11;
   */
  symptomConditionEffect?: CodeableConcept;

  /**
   * Classification of the effect
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept classification = 12;
   */
  classification?: CodeableConcept;

  /**
   * The frequency of occurrence of the effect
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept frequency_of_occurrence = 13;
   */
  frequencyOfOccurrence?: CodeableConcept;

  /**
   * The population group to which this applies
   *
   * @generated from field: repeated google.fhir.r4.core.Population population = 14;
   */
  population: Population[] = [];

  constructor(data?: PartialMessage<MedicinalProductUndesirableEffect>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.MedicinalProductUndesirableEffect";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: Id },
    { no: 2, name: "meta", kind: "message", T: Meta },
    { no: 3, name: "implicit_rules", kind: "message", T: Uri },
    { no: 4, name: "language", kind: "message", T: Code },
    { no: 5, name: "text", kind: "message", T: Narrative },
    { no: 6, name: "contained", kind: "message", T: Any, repeated: true },
    { no: 8, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 9, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 10, name: "subject", kind: "message", T: Reference, repeated: true },
    { no: 11, name: "symptom_condition_effect", kind: "message", T: CodeableConcept },
    { no: 12, name: "classification", kind: "message", T: CodeableConcept },
    { no: 13, name: "frequency_of_occurrence", kind: "message", T: CodeableConcept },
    { no: 14, name: "population", kind: "message", T: Population, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MedicinalProductUndesirableEffect {
    return new MedicinalProductUndesirableEffect().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MedicinalProductUndesirableEffect {
    return new MedicinalProductUndesirableEffect().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MedicinalProductUndesirableEffect {
    return new MedicinalProductUndesirableEffect().fromJsonString(jsonString, options);
  }

  static equals(a: MedicinalProductUndesirableEffect | PlainMessage<MedicinalProductUndesirableEffect> | undefined, b: MedicinalProductUndesirableEffect | PlainMessage<MedicinalProductUndesirableEffect> | undefined): boolean {
    return proto3.util.equals(MedicinalProductUndesirableEffect, a, b);
  }
}

