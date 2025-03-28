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
// @generated from file proto/google/fhir/proto/r4/core/resources/parameters.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Address, Age, Annotation, Attachment, Base64Binary, Boolean, Canonical, Code, CodeableConcept, Coding, ContactDetail, ContactPoint, Contributor, Count, DataRequirement, Date, DateTime, Decimal, Distance, Dosage, Duration, Expression, Extension, HumanName, Id, Identifier, Instant, Integer, Markdown, Meta, Money, Oid, ParameterDefinition, Period, PositiveInt, Quantity, Range, Ratio, Reference, RelatedArtifact, SampledData, Signature, String, Time, Timing, TriggerDefinition, UnsignedInt, Uri, Url, UsageContext, Uuid } from "../datatypes_pb.js";

/**
 * Auto-generated from StructureDefinition for Parameters.
 * Operation Request or Response.
 * See http://hl7.org/fhir/StructureDefinition/Parameters
 *
 * @generated from message google.fhir.r4.core.Parameters
 */
export class Parameters extends Message<Parameters> {
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
   * @generated from field: repeated google.fhir.r4.core.Parameters.Parameter parameter = 5;
   */
  parameter: Parameters_Parameter[] = [];

  constructor(data?: PartialMessage<Parameters>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.Parameters";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: Id },
    { no: 2, name: "meta", kind: "message", T: Meta },
    { no: 3, name: "implicit_rules", kind: "message", T: Uri },
    { no: 4, name: "language", kind: "message", T: Code },
    { no: 5, name: "parameter", kind: "message", T: Parameters_Parameter, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Parameters {
    return new Parameters().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Parameters {
    return new Parameters().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Parameters {
    return new Parameters().fromJsonString(jsonString, options);
  }

  static equals(a: Parameters | PlainMessage<Parameters> | undefined, b: Parameters | PlainMessage<Parameters> | undefined): boolean {
    return proto3.util.equals(Parameters, a, b);
  }
}

/**
 * Operation Parameter
 *
 * @generated from message google.fhir.r4.core.Parameters.Parameter
 */
export class Parameters_Parameter extends Message<Parameters_Parameter> {
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
   * Name from the definition
   *
   * @generated from field: google.fhir.r4.core.String name = 4;
   */
  name?: String;

  /**
   * @generated from field: google.fhir.r4.core.Parameters.Parameter.ValueX value = 5;
   */
  value?: Parameters_Parameter_ValueX;

  /**
   * If parameter is a whole resource
   *
   * @generated from field: google.protobuf.Any resource = 6;
   */
  resource?: Any;

  /**
   * Named part of a multi-part parameter
   *
   * @generated from field: repeated google.fhir.r4.core.Parameters.Parameter part = 7;
   */
  part: Parameters_Parameter[] = [];

  constructor(data?: PartialMessage<Parameters_Parameter>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.Parameters.Parameter";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 3, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "name", kind: "message", T: String },
    { no: 5, name: "value", kind: "message", T: Parameters_Parameter_ValueX },
    { no: 6, name: "resource", kind: "message", T: Any },
    { no: 7, name: "part", kind: "message", T: Parameters_Parameter, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Parameters_Parameter {
    return new Parameters_Parameter().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Parameters_Parameter {
    return new Parameters_Parameter().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Parameters_Parameter {
    return new Parameters_Parameter().fromJsonString(jsonString, options);
  }

  static equals(a: Parameters_Parameter | PlainMessage<Parameters_Parameter> | undefined, b: Parameters_Parameter | PlainMessage<Parameters_Parameter> | undefined): boolean {
    return proto3.util.equals(Parameters_Parameter, a, b);
  }
}

/**
 * If parameter is a data type
 *
 * @generated from message google.fhir.r4.core.Parameters.Parameter.ValueX
 */
export class Parameters_Parameter_ValueX extends Message<Parameters_Parameter_ValueX> {
  /**
   * @generated from oneof google.fhir.r4.core.Parameters.Parameter.ValueX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.Base64Binary base64_binary = 1;
     */
    value: Base64Binary;
    case: "base64Binary";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Boolean boolean = 2;
     */
    value: Boolean;
    case: "boolean";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Canonical canonical = 3;
     */
    value: Canonical;
    case: "canonical";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Code code = 4;
     */
    value: Code;
    case: "code";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Date date = 5;
     */
    value: Date;
    case: "date";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.DateTime date_time = 6;
     */
    value: DateTime;
    case: "dateTime";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Decimal decimal = 7;
     */
    value: Decimal;
    case: "decimal";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Id id = 8;
     */
    value: Id;
    case: "id";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Instant instant = 9;
     */
    value: Instant;
    case: "instant";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Integer integer = 10;
     */
    value: Integer;
    case: "integer";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Markdown markdown = 11;
     */
    value: Markdown;
    case: "markdown";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Oid oid = 12;
     */
    value: Oid;
    case: "oid";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.PositiveInt positive_int = 13;
     */
    value: PositiveInt;
    case: "positiveInt";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.String string_value = 14 [json_name = "string"];
     */
    value: String;
    case: "stringValue";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Time time = 15;
     */
    value: Time;
    case: "time";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.UnsignedInt unsigned_int = 16;
     */
    value: UnsignedInt;
    case: "unsignedInt";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Uri uri = 17;
     */
    value: Uri;
    case: "uri";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Url url = 18;
     */
    value: Url;
    case: "url";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Uuid uuid = 19;
     */
    value: Uuid;
    case: "uuid";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Address address = 20;
     */
    value: Address;
    case: "address";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Age age = 21;
     */
    value: Age;
    case: "age";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Annotation annotation = 22;
     */
    value: Annotation;
    case: "annotation";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Attachment attachment = 23;
     */
    value: Attachment;
    case: "attachment";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.CodeableConcept codeable_concept = 24;
     */
    value: CodeableConcept;
    case: "codeableConcept";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Coding coding = 25;
     */
    value: Coding;
    case: "coding";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.ContactPoint contact_point = 26;
     */
    value: ContactPoint;
    case: "contactPoint";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Count count = 27;
     */
    value: Count;
    case: "count";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Distance distance = 28;
     */
    value: Distance;
    case: "distance";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Duration duration = 29;
     */
    value: Duration;
    case: "duration";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.HumanName human_name = 30;
     */
    value: HumanName;
    case: "humanName";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Identifier identifier = 31;
     */
    value: Identifier;
    case: "identifier";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Money money = 32;
     */
    value: Money;
    case: "money";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Period period = 33;
     */
    value: Period;
    case: "period";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Quantity quantity = 34;
     */
    value: Quantity;
    case: "quantity";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Range range = 35;
     */
    value: Range;
    case: "range";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Ratio ratio = 36;
     */
    value: Ratio;
    case: "ratio";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Reference reference = 37;
     */
    value: Reference;
    case: "reference";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.SampledData sampled_data = 38;
     */
    value: SampledData;
    case: "sampledData";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Signature signature = 39;
     */
    value: Signature;
    case: "signature";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Timing timing = 40;
     */
    value: Timing;
    case: "timing";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.ContactDetail contact_detail = 41;
     */
    value: ContactDetail;
    case: "contactDetail";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Contributor contributor = 42;
     */
    value: Contributor;
    case: "contributor";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.DataRequirement data_requirement = 43;
     */
    value: DataRequirement;
    case: "dataRequirement";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Expression expression = 44;
     */
    value: Expression;
    case: "expression";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.ParameterDefinition parameter_definition = 45;
     */
    value: ParameterDefinition;
    case: "parameterDefinition";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.RelatedArtifact related_artifact = 46;
     */
    value: RelatedArtifact;
    case: "relatedArtifact";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.TriggerDefinition trigger_definition = 47;
     */
    value: TriggerDefinition;
    case: "triggerDefinition";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.UsageContext usage_context = 48;
     */
    value: UsageContext;
    case: "usageContext";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Dosage dosage = 49;
     */
    value: Dosage;
    case: "dosage";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Meta meta = 50;
     */
    value: Meta;
    case: "meta";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Parameters_Parameter_ValueX>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.Parameters.Parameter.ValueX";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "base64_binary", kind: "message", T: Base64Binary, oneof: "choice" },
    { no: 2, name: "boolean", kind: "message", T: Boolean, oneof: "choice" },
    { no: 3, name: "canonical", kind: "message", T: Canonical, oneof: "choice" },
    { no: 4, name: "code", kind: "message", T: Code, oneof: "choice" },
    { no: 5, name: "date", kind: "message", T: Date, oneof: "choice" },
    { no: 6, name: "date_time", kind: "message", T: DateTime, oneof: "choice" },
    { no: 7, name: "decimal", kind: "message", T: Decimal, oneof: "choice" },
    { no: 8, name: "id", kind: "message", T: Id, oneof: "choice" },
    { no: 9, name: "instant", kind: "message", T: Instant, oneof: "choice" },
    { no: 10, name: "integer", kind: "message", T: Integer, oneof: "choice" },
    { no: 11, name: "markdown", kind: "message", T: Markdown, oneof: "choice" },
    { no: 12, name: "oid", kind: "message", T: Oid, oneof: "choice" },
    { no: 13, name: "positive_int", kind: "message", T: PositiveInt, oneof: "choice" },
    { no: 14, name: "string_value", jsonName: "string", kind: "message", T: String, oneof: "choice" },
    { no: 15, name: "time", kind: "message", T: Time, oneof: "choice" },
    { no: 16, name: "unsigned_int", kind: "message", T: UnsignedInt, oneof: "choice" },
    { no: 17, name: "uri", kind: "message", T: Uri, oneof: "choice" },
    { no: 18, name: "url", kind: "message", T: Url, oneof: "choice" },
    { no: 19, name: "uuid", kind: "message", T: Uuid, oneof: "choice" },
    { no: 20, name: "address", kind: "message", T: Address, oneof: "choice" },
    { no: 21, name: "age", kind: "message", T: Age, oneof: "choice" },
    { no: 22, name: "annotation", kind: "message", T: Annotation, oneof: "choice" },
    { no: 23, name: "attachment", kind: "message", T: Attachment, oneof: "choice" },
    { no: 24, name: "codeable_concept", kind: "message", T: CodeableConcept, oneof: "choice" },
    { no: 25, name: "coding", kind: "message", T: Coding, oneof: "choice" },
    { no: 26, name: "contact_point", kind: "message", T: ContactPoint, oneof: "choice" },
    { no: 27, name: "count", kind: "message", T: Count, oneof: "choice" },
    { no: 28, name: "distance", kind: "message", T: Distance, oneof: "choice" },
    { no: 29, name: "duration", kind: "message", T: Duration, oneof: "choice" },
    { no: 30, name: "human_name", kind: "message", T: HumanName, oneof: "choice" },
    { no: 31, name: "identifier", kind: "message", T: Identifier, oneof: "choice" },
    { no: 32, name: "money", kind: "message", T: Money, oneof: "choice" },
    { no: 33, name: "period", kind: "message", T: Period, oneof: "choice" },
    { no: 34, name: "quantity", kind: "message", T: Quantity, oneof: "choice" },
    { no: 35, name: "range", kind: "message", T: Range, oneof: "choice" },
    { no: 36, name: "ratio", kind: "message", T: Ratio, oneof: "choice" },
    { no: 37, name: "reference", kind: "message", T: Reference, oneof: "choice" },
    { no: 38, name: "sampled_data", kind: "message", T: SampledData, oneof: "choice" },
    { no: 39, name: "signature", kind: "message", T: Signature, oneof: "choice" },
    { no: 40, name: "timing", kind: "message", T: Timing, oneof: "choice" },
    { no: 41, name: "contact_detail", kind: "message", T: ContactDetail, oneof: "choice" },
    { no: 42, name: "contributor", kind: "message", T: Contributor, oneof: "choice" },
    { no: 43, name: "data_requirement", kind: "message", T: DataRequirement, oneof: "choice" },
    { no: 44, name: "expression", kind: "message", T: Expression, oneof: "choice" },
    { no: 45, name: "parameter_definition", kind: "message", T: ParameterDefinition, oneof: "choice" },
    { no: 46, name: "related_artifact", kind: "message", T: RelatedArtifact, oneof: "choice" },
    { no: 47, name: "trigger_definition", kind: "message", T: TriggerDefinition, oneof: "choice" },
    { no: 48, name: "usage_context", kind: "message", T: UsageContext, oneof: "choice" },
    { no: 49, name: "dosage", kind: "message", T: Dosage, oneof: "choice" },
    { no: 50, name: "meta", kind: "message", T: Meta, oneof: "choice" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Parameters_Parameter_ValueX {
    return new Parameters_Parameter_ValueX().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Parameters_Parameter_ValueX {
    return new Parameters_Parameter_ValueX().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Parameters_Parameter_ValueX {
    return new Parameters_Parameter_ValueX().fromJsonString(jsonString, options);
  }

  static equals(a: Parameters_Parameter_ValueX | PlainMessage<Parameters_Parameter_ValueX> | undefined, b: Parameters_Parameter_ValueX | PlainMessage<Parameters_Parameter_ValueX> | undefined): boolean {
    return proto3.util.equals(Parameters_Parameter_ValueX, a, b);
  }
}

