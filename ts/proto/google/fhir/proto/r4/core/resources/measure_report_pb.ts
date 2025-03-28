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
// @generated from file proto/google/fhir/proto/r4/core/resources/measure_report.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Canonical, Code, CodeableConcept, DateTime, Extension, Id, Identifier, Integer, Meta, Narrative, Period, Quantity, Reference, String, Uri } from "../datatypes_pb.js";
import { MeasureReportStatusCode_Value, MeasureReportTypeCode_Value } from "../codes_pb.js";

/**
 * Auto-generated from StructureDefinition for MeasureReport.
 * Results of a measure evaluation.
 * See http://hl7.org/fhir/StructureDefinition/MeasureReport
 *
 * @generated from message google.fhir.r4.core.MeasureReport
 */
export class MeasureReport extends Message<MeasureReport> {
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
   * Additional identifier for the MeasureReport
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[] = [];

  /**
   * @generated from field: google.fhir.r4.core.MeasureReport.StatusCode status = 11;
   */
  status?: MeasureReport_StatusCode;

  /**
   * @generated from field: google.fhir.r4.core.MeasureReport.TypeCode type = 12;
   */
  type?: MeasureReport_TypeCode;

  /**
   * What measure was calculated
   *
   * @generated from field: google.fhir.r4.core.Canonical measure = 13;
   */
  measure?: Canonical;

  /**
   * What individual(s) the report is for
   *
   * @generated from field: google.fhir.r4.core.Reference subject = 14;
   */
  subject?: Reference;

  /**
   * When the report was generated
   *
   * @generated from field: google.fhir.r4.core.DateTime date = 15;
   */
  date?: DateTime;

  /**
   * Who is reporting the data
   *
   * @generated from field: google.fhir.r4.core.Reference reporter = 16;
   */
  reporter?: Reference;

  /**
   * What period the report covers
   *
   * @generated from field: google.fhir.r4.core.Period period = 17;
   */
  period?: Period;

  /**
   * increase | decrease
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept improvement_notation = 18;
   */
  improvementNotation?: CodeableConcept;

  /**
   * @generated from field: repeated google.fhir.r4.core.MeasureReport.Group group = 19;
   */
  group: MeasureReport_Group[] = [];

  /**
   * What data was used to calculate the measure score
   *
   * @generated from field: repeated google.fhir.r4.core.Reference evaluated_resource = 20;
   */
  evaluatedResource: Reference[] = [];

  constructor(data?: PartialMessage<MeasureReport>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.MeasureReport";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: Id },
    { no: 2, name: "meta", kind: "message", T: Meta },
    { no: 3, name: "implicit_rules", kind: "message", T: Uri },
    { no: 4, name: "language", kind: "message", T: Code },
    { no: 5, name: "text", kind: "message", T: Narrative },
    { no: 6, name: "contained", kind: "message", T: Any, repeated: true },
    { no: 8, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 9, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 10, name: "identifier", kind: "message", T: Identifier, repeated: true },
    { no: 11, name: "status", kind: "message", T: MeasureReport_StatusCode },
    { no: 12, name: "type", kind: "message", T: MeasureReport_TypeCode },
    { no: 13, name: "measure", kind: "message", T: Canonical },
    { no: 14, name: "subject", kind: "message", T: Reference },
    { no: 15, name: "date", kind: "message", T: DateTime },
    { no: 16, name: "reporter", kind: "message", T: Reference },
    { no: 17, name: "period", kind: "message", T: Period },
    { no: 18, name: "improvement_notation", kind: "message", T: CodeableConcept },
    { no: 19, name: "group", kind: "message", T: MeasureReport_Group, repeated: true },
    { no: 20, name: "evaluated_resource", kind: "message", T: Reference, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeasureReport {
    return new MeasureReport().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeasureReport {
    return new MeasureReport().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeasureReport {
    return new MeasureReport().fromJsonString(jsonString, options);
  }

  static equals(a: MeasureReport | PlainMessage<MeasureReport> | undefined, b: MeasureReport | PlainMessage<MeasureReport> | undefined): boolean {
    return proto3.util.equals(MeasureReport, a, b);
  }
}

/**
 * complete | pending | error
 *
 * @generated from message google.fhir.r4.core.MeasureReport.StatusCode
 */
export class MeasureReport_StatusCode extends Message<MeasureReport_StatusCode> {
  /**
   * @generated from field: google.fhir.r4.core.MeasureReportStatusCode.Value value = 1;
   */
  value = MeasureReportStatusCode_Value.INVALID_UNINITIALIZED;

  /**
   * @generated from field: google.fhir.r4.core.String id = 2;
   */
  id?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 3;
   */
  extension: Extension[] = [];

  constructor(data?: PartialMessage<MeasureReport_StatusCode>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.MeasureReport.StatusCode";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "enum", T: proto3.getEnumType(MeasureReportStatusCode_Value) },
    { no: 2, name: "id", kind: "message", T: String },
    { no: 3, name: "extension", kind: "message", T: Extension, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeasureReport_StatusCode {
    return new MeasureReport_StatusCode().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeasureReport_StatusCode {
    return new MeasureReport_StatusCode().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeasureReport_StatusCode {
    return new MeasureReport_StatusCode().fromJsonString(jsonString, options);
  }

  static equals(a: MeasureReport_StatusCode | PlainMessage<MeasureReport_StatusCode> | undefined, b: MeasureReport_StatusCode | PlainMessage<MeasureReport_StatusCode> | undefined): boolean {
    return proto3.util.equals(MeasureReport_StatusCode, a, b);
  }
}

/**
 * individual | subject-list | summary | data-collection
 *
 * @generated from message google.fhir.r4.core.MeasureReport.TypeCode
 */
export class MeasureReport_TypeCode extends Message<MeasureReport_TypeCode> {
  /**
   * @generated from field: google.fhir.r4.core.MeasureReportTypeCode.Value value = 1;
   */
  value = MeasureReportTypeCode_Value.INVALID_UNINITIALIZED;

  /**
   * @generated from field: google.fhir.r4.core.String id = 2;
   */
  id?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 3;
   */
  extension: Extension[] = [];

  constructor(data?: PartialMessage<MeasureReport_TypeCode>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.MeasureReport.TypeCode";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "enum", T: proto3.getEnumType(MeasureReportTypeCode_Value) },
    { no: 2, name: "id", kind: "message", T: String },
    { no: 3, name: "extension", kind: "message", T: Extension, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeasureReport_TypeCode {
    return new MeasureReport_TypeCode().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeasureReport_TypeCode {
    return new MeasureReport_TypeCode().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeasureReport_TypeCode {
    return new MeasureReport_TypeCode().fromJsonString(jsonString, options);
  }

  static equals(a: MeasureReport_TypeCode | PlainMessage<MeasureReport_TypeCode> | undefined, b: MeasureReport_TypeCode | PlainMessage<MeasureReport_TypeCode> | undefined): boolean {
    return proto3.util.equals(MeasureReport_TypeCode, a, b);
  }
}

/**
 * Measure results for each group
 *
 * @generated from message google.fhir.r4.core.MeasureReport.Group
 */
export class MeasureReport_Group extends Message<MeasureReport_Group> {
  /**
   * Unique id for inter-element referencing
   *
   * @generated from field: google.fhir.r4.core.String id = 1;
   */
  id?: String;

  /**
   * Additional content defined by implementations
   *
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 2;
   */
  extension: Extension[] = [];

  /**
   * Extensions that cannot be ignored even if unrecognized
   *
   * @generated from field: repeated google.fhir.r4.core.Extension modifier_extension = 3;
   */
  modifierExtension: Extension[] = [];

  /**
   * Meaning of the group
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept code = 4;
   */
  code?: CodeableConcept;

  /**
   * @generated from field: repeated google.fhir.r4.core.MeasureReport.Group.Population population = 5;
   */
  population: MeasureReport_Group_Population[] = [];

  /**
   * What score this group achieved
   *
   * @generated from field: google.fhir.r4.core.Quantity measure_score = 6;
   */
  measureScore?: Quantity;

  /**
   * @generated from field: repeated google.fhir.r4.core.MeasureReport.Group.Stratifier stratifier = 7;
   */
  stratifier: MeasureReport_Group_Stratifier[] = [];

  constructor(data?: PartialMessage<MeasureReport_Group>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.MeasureReport.Group";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 3, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "code", kind: "message", T: CodeableConcept },
    { no: 5, name: "population", kind: "message", T: MeasureReport_Group_Population, repeated: true },
    { no: 6, name: "measure_score", kind: "message", T: Quantity },
    { no: 7, name: "stratifier", kind: "message", T: MeasureReport_Group_Stratifier, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeasureReport_Group {
    return new MeasureReport_Group().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeasureReport_Group {
    return new MeasureReport_Group().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeasureReport_Group {
    return new MeasureReport_Group().fromJsonString(jsonString, options);
  }

  static equals(a: MeasureReport_Group | PlainMessage<MeasureReport_Group> | undefined, b: MeasureReport_Group | PlainMessage<MeasureReport_Group> | undefined): boolean {
    return proto3.util.equals(MeasureReport_Group, a, b);
  }
}

/**
 * The populations in the group
 *
 * @generated from message google.fhir.r4.core.MeasureReport.Group.Population
 */
export class MeasureReport_Group_Population extends Message<MeasureReport_Group_Population> {
  /**
   * Unique id for inter-element referencing
   *
   * @generated from field: google.fhir.r4.core.String id = 1;
   */
  id?: String;

  /**
   * Additional content defined by implementations
   *
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 2;
   */
  extension: Extension[] = [];

  /**
   * Extensions that cannot be ignored even if unrecognized
   *
   * @generated from field: repeated google.fhir.r4.core.Extension modifier_extension = 3;
   */
  modifierExtension: Extension[] = [];

  /**
   * initial-population | numerator | numerator-exclusion | denominator |
   * denominator-exclusion | denominator-exception | measure-population |
   * measure-population-exclusion | measure-observation
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept code = 4;
   */
  code?: CodeableConcept;

  /**
   * Size of the population
   *
   * @generated from field: google.fhir.r4.core.Integer count = 5;
   */
  count?: Integer;

  /**
   * For subject-list reports, the subject results in this population
   *
   * @generated from field: google.fhir.r4.core.Reference subject_results = 6;
   */
  subjectResults?: Reference;

  constructor(data?: PartialMessage<MeasureReport_Group_Population>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.MeasureReport.Group.Population";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 3, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "code", kind: "message", T: CodeableConcept },
    { no: 5, name: "count", kind: "message", T: Integer },
    { no: 6, name: "subject_results", kind: "message", T: Reference },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeasureReport_Group_Population {
    return new MeasureReport_Group_Population().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeasureReport_Group_Population {
    return new MeasureReport_Group_Population().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeasureReport_Group_Population {
    return new MeasureReport_Group_Population().fromJsonString(jsonString, options);
  }

  static equals(a: MeasureReport_Group_Population | PlainMessage<MeasureReport_Group_Population> | undefined, b: MeasureReport_Group_Population | PlainMessage<MeasureReport_Group_Population> | undefined): boolean {
    return proto3.util.equals(MeasureReport_Group_Population, a, b);
  }
}

/**
 * Stratification results
 *
 * @generated from message google.fhir.r4.core.MeasureReport.Group.Stratifier
 */
export class MeasureReport_Group_Stratifier extends Message<MeasureReport_Group_Stratifier> {
  /**
   * Unique id for inter-element referencing
   *
   * @generated from field: google.fhir.r4.core.String id = 1;
   */
  id?: String;

  /**
   * Additional content defined by implementations
   *
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 2;
   */
  extension: Extension[] = [];

  /**
   * Extensions that cannot be ignored even if unrecognized
   *
   * @generated from field: repeated google.fhir.r4.core.Extension modifier_extension = 3;
   */
  modifierExtension: Extension[] = [];

  /**
   * What stratifier of the group
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept code = 4;
   */
  code: CodeableConcept[] = [];

  /**
   * @generated from field: repeated google.fhir.r4.core.MeasureReport.Group.Stratifier.StratifierGroup stratum = 5;
   */
  stratum: MeasureReport_Group_Stratifier_StratifierGroup[] = [];

  constructor(data?: PartialMessage<MeasureReport_Group_Stratifier>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.MeasureReport.Group.Stratifier";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 3, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "code", kind: "message", T: CodeableConcept, repeated: true },
    { no: 5, name: "stratum", kind: "message", T: MeasureReport_Group_Stratifier_StratifierGroup, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeasureReport_Group_Stratifier {
    return new MeasureReport_Group_Stratifier().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeasureReport_Group_Stratifier {
    return new MeasureReport_Group_Stratifier().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeasureReport_Group_Stratifier {
    return new MeasureReport_Group_Stratifier().fromJsonString(jsonString, options);
  }

  static equals(a: MeasureReport_Group_Stratifier | PlainMessage<MeasureReport_Group_Stratifier> | undefined, b: MeasureReport_Group_Stratifier | PlainMessage<MeasureReport_Group_Stratifier> | undefined): boolean {
    return proto3.util.equals(MeasureReport_Group_Stratifier, a, b);
  }
}

/**
 * Stratum results, one for each unique value, or set of values, in the
 * stratifier, or stratifier components
 *
 * @generated from message google.fhir.r4.core.MeasureReport.Group.Stratifier.StratifierGroup
 */
export class MeasureReport_Group_Stratifier_StratifierGroup extends Message<MeasureReport_Group_Stratifier_StratifierGroup> {
  /**
   * Unique id for inter-element referencing
   *
   * @generated from field: google.fhir.r4.core.String id = 1;
   */
  id?: String;

  /**
   * Additional content defined by implementations
   *
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 2;
   */
  extension: Extension[] = [];

  /**
   * Extensions that cannot be ignored even if unrecognized
   *
   * @generated from field: repeated google.fhir.r4.core.Extension modifier_extension = 3;
   */
  modifierExtension: Extension[] = [];

  /**
   * The stratum value, e.g. male
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept value = 4;
   */
  value?: CodeableConcept;

  /**
   * @generated from field: repeated google.fhir.r4.core.MeasureReport.Group.Stratifier.StratifierGroup.Component component = 5;
   */
  component: MeasureReport_Group_Stratifier_StratifierGroup_Component[] = [];

  /**
   * @generated from field: repeated google.fhir.r4.core.MeasureReport.Group.Stratifier.StratifierGroup.StratifierGroupPopulation population = 6;
   */
  population: MeasureReport_Group_Stratifier_StratifierGroup_StratifierGroupPopulation[] = [];

  /**
   * What score this stratum achieved
   *
   * @generated from field: google.fhir.r4.core.Quantity measure_score = 7;
   */
  measureScore?: Quantity;

  constructor(data?: PartialMessage<MeasureReport_Group_Stratifier_StratifierGroup>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.MeasureReport.Group.Stratifier.StratifierGroup";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 3, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "value", kind: "message", T: CodeableConcept },
    { no: 5, name: "component", kind: "message", T: MeasureReport_Group_Stratifier_StratifierGroup_Component, repeated: true },
    { no: 6, name: "population", kind: "message", T: MeasureReport_Group_Stratifier_StratifierGroup_StratifierGroupPopulation, repeated: true },
    { no: 7, name: "measure_score", kind: "message", T: Quantity },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeasureReport_Group_Stratifier_StratifierGroup {
    return new MeasureReport_Group_Stratifier_StratifierGroup().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeasureReport_Group_Stratifier_StratifierGroup {
    return new MeasureReport_Group_Stratifier_StratifierGroup().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeasureReport_Group_Stratifier_StratifierGroup {
    return new MeasureReport_Group_Stratifier_StratifierGroup().fromJsonString(jsonString, options);
  }

  static equals(a: MeasureReport_Group_Stratifier_StratifierGroup | PlainMessage<MeasureReport_Group_Stratifier_StratifierGroup> | undefined, b: MeasureReport_Group_Stratifier_StratifierGroup | PlainMessage<MeasureReport_Group_Stratifier_StratifierGroup> | undefined): boolean {
    return proto3.util.equals(MeasureReport_Group_Stratifier_StratifierGroup, a, b);
  }
}

/**
 * Stratifier component values
 *
 * @generated from message google.fhir.r4.core.MeasureReport.Group.Stratifier.StratifierGroup.Component
 */
export class MeasureReport_Group_Stratifier_StratifierGroup_Component extends Message<MeasureReport_Group_Stratifier_StratifierGroup_Component> {
  /**
   * Unique id for inter-element referencing
   *
   * @generated from field: google.fhir.r4.core.String id = 1;
   */
  id?: String;

  /**
   * Additional content defined by implementations
   *
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 2;
   */
  extension: Extension[] = [];

  /**
   * Extensions that cannot be ignored even if unrecognized
   *
   * @generated from field: repeated google.fhir.r4.core.Extension modifier_extension = 3;
   */
  modifierExtension: Extension[] = [];

  /**
   * What stratifier component of the group
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept code = 4;
   */
  code?: CodeableConcept;

  /**
   * The stratum component value, e.g. male
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept value = 5;
   */
  value?: CodeableConcept;

  constructor(data?: PartialMessage<MeasureReport_Group_Stratifier_StratifierGroup_Component>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.MeasureReport.Group.Stratifier.StratifierGroup.Component";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 3, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "code", kind: "message", T: CodeableConcept },
    { no: 5, name: "value", kind: "message", T: CodeableConcept },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeasureReport_Group_Stratifier_StratifierGroup_Component {
    return new MeasureReport_Group_Stratifier_StratifierGroup_Component().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeasureReport_Group_Stratifier_StratifierGroup_Component {
    return new MeasureReport_Group_Stratifier_StratifierGroup_Component().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeasureReport_Group_Stratifier_StratifierGroup_Component {
    return new MeasureReport_Group_Stratifier_StratifierGroup_Component().fromJsonString(jsonString, options);
  }

  static equals(a: MeasureReport_Group_Stratifier_StratifierGroup_Component | PlainMessage<MeasureReport_Group_Stratifier_StratifierGroup_Component> | undefined, b: MeasureReport_Group_Stratifier_StratifierGroup_Component | PlainMessage<MeasureReport_Group_Stratifier_StratifierGroup_Component> | undefined): boolean {
    return proto3.util.equals(MeasureReport_Group_Stratifier_StratifierGroup_Component, a, b);
  }
}

/**
 * Population results in this stratum
 *
 * @generated from message google.fhir.r4.core.MeasureReport.Group.Stratifier.StratifierGroup.StratifierGroupPopulation
 */
export class MeasureReport_Group_Stratifier_StratifierGroup_StratifierGroupPopulation extends Message<MeasureReport_Group_Stratifier_StratifierGroup_StratifierGroupPopulation> {
  /**
   * Unique id for inter-element referencing
   *
   * @generated from field: google.fhir.r4.core.String id = 1;
   */
  id?: String;

  /**
   * Additional content defined by implementations
   *
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 2;
   */
  extension: Extension[] = [];

  /**
   * Extensions that cannot be ignored even if unrecognized
   *
   * @generated from field: repeated google.fhir.r4.core.Extension modifier_extension = 3;
   */
  modifierExtension: Extension[] = [];

  /**
   * initial-population | numerator | numerator-exclusion | denominator
   * | denominator-exclusion | denominator-exception |
   * measure-population | measure-population-exclusion |
   * measure-observation
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept code = 4;
   */
  code?: CodeableConcept;

  /**
   * Size of the population
   *
   * @generated from field: google.fhir.r4.core.Integer count = 5;
   */
  count?: Integer;

  /**
   * For subject-list reports, the subject results in this population
   *
   * @generated from field: google.fhir.r4.core.Reference subject_results = 6;
   */
  subjectResults?: Reference;

  constructor(data?: PartialMessage<MeasureReport_Group_Stratifier_StratifierGroup_StratifierGroupPopulation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.MeasureReport.Group.Stratifier.StratifierGroup.StratifierGroupPopulation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 3, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "code", kind: "message", T: CodeableConcept },
    { no: 5, name: "count", kind: "message", T: Integer },
    { no: 6, name: "subject_results", kind: "message", T: Reference },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeasureReport_Group_Stratifier_StratifierGroup_StratifierGroupPopulation {
    return new MeasureReport_Group_Stratifier_StratifierGroup_StratifierGroupPopulation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeasureReport_Group_Stratifier_StratifierGroup_StratifierGroupPopulation {
    return new MeasureReport_Group_Stratifier_StratifierGroup_StratifierGroupPopulation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeasureReport_Group_Stratifier_StratifierGroup_StratifierGroupPopulation {
    return new MeasureReport_Group_Stratifier_StratifierGroup_StratifierGroupPopulation().fromJsonString(jsonString, options);
  }

  static equals(a: MeasureReport_Group_Stratifier_StratifierGroup_StratifierGroupPopulation | PlainMessage<MeasureReport_Group_Stratifier_StratifierGroup_StratifierGroupPopulation> | undefined, b: MeasureReport_Group_Stratifier_StratifierGroup_StratifierGroupPopulation | PlainMessage<MeasureReport_Group_Stratifier_StratifierGroup_StratifierGroupPopulation> | undefined): boolean {
    return proto3.util.equals(MeasureReport_Group_Stratifier_StratifierGroup_StratifierGroupPopulation, a, b);
  }
}

