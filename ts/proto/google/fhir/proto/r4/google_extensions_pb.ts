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
// @generated from file proto/google/fhir/proto/r4/google_extensions.proto (package google.fhir.r4.google, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Boolean, Coding, DateTime, Decimal, Extension, Integer, PositiveInt, Reference, String } from "./core/datatypes_pb.js";

/**
 * Auto-generated from StructureDefinition for Base64BinarySeparatorStride.
 * Base64Binary rendering parameters.
 * See https://g.co/fhir/StructureDefinition/base64Binary-separatorStride
 *
 * @generated from message google.fhir.r4.google.Base64BinarySeparatorStride
 */
export class Base64BinarySeparatorStride extends Message<Base64BinarySeparatorStride> {
  /**
   * Unique id for inter-element referencing
   *
   * @generated from field: google.fhir.r4.core.String id = 1;
   */
  id?: String;

  /**
   * The separator, usually a sequence of spaces.
   *
   * @generated from field: google.fhir.r4.core.String separator = 4;
   */
  separator?: String;

  /**
   * The stride.
   *
   * @generated from field: google.fhir.r4.core.PositiveInt stride = 5;
   */
  stride?: PositiveInt;

  constructor(data?: PartialMessage<Base64BinarySeparatorStride>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.google.Base64BinarySeparatorStride";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 4, name: "separator", kind: "message", T: String },
    { no: 5, name: "stride", kind: "message", T: PositiveInt },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Base64BinarySeparatorStride {
    return new Base64BinarySeparatorStride().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Base64BinarySeparatorStride {
    return new Base64BinarySeparatorStride().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Base64BinarySeparatorStride {
    return new Base64BinarySeparatorStride().fromJsonString(jsonString, options);
  }

  static equals(a: Base64BinarySeparatorStride | PlainMessage<Base64BinarySeparatorStride> | undefined, b: Base64BinarySeparatorStride | PlainMessage<Base64BinarySeparatorStride> | undefined): boolean {
    return proto3.util.equals(Base64BinarySeparatorStride, a, b);
  }
}

/**
 * Auto-generated from StructureDefinition for EventLabel.
 * EventLabels define labels used for TensorFlow model training and evaluation.
 * See https://g.co/fhir/StructureDefinition/eventLabel
 *
 * @generated from message google.fhir.r4.google.EventLabel
 */
export class EventLabel extends Message<EventLabel> {
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
   * The patient associated with this label
   *
   * @generated from field: google.fhir.r4.core.Reference patient = 4;
   */
  patient?: Reference;

  /**
   * The type of label, part of the prediction task definition
   *
   * @generated from field: google.fhir.r4.core.Coding type = 5;
   */
  type?: Coding;

  /**
   * Time associated with the label event, if available
   *
   * @generated from field: google.fhir.r4.core.DateTime event_time = 6;
   */
  eventTime?: DateTime;

  /**
   * Resource that owns this label
   *
   * @generated from field: google.fhir.r4.core.Reference source = 7;
   */
  source?: Reference;

  /**
   * @generated from field: repeated google.fhir.r4.google.EventLabel.Label label = 8;
   */
  label: EventLabel_Label[] = [];

  constructor(data?: PartialMessage<EventLabel>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.google.EventLabel";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "patient", kind: "message", T: Reference },
    { no: 5, name: "type", kind: "message", T: Coding },
    { no: 6, name: "event_time", kind: "message", T: DateTime },
    { no: 7, name: "source", kind: "message", T: Reference },
    { no: 8, name: "label", kind: "message", T: EventLabel_Label, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventLabel {
    return new EventLabel().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventLabel {
    return new EventLabel().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventLabel {
    return new EventLabel().fromJsonString(jsonString, options);
  }

  static equals(a: EventLabel | PlainMessage<EventLabel> | undefined, b: EventLabel | PlainMessage<EventLabel> | undefined): boolean {
    return proto3.util.equals(EventLabel, a, b);
  }
}

/**
 * List of labels associated with this event
 *
 * @generated from message google.fhir.r4.google.EventLabel.Label
 */
export class EventLabel_Label extends Message<EventLabel_Label> {
  /**
   * Unique id for inter-element referencing
   *
   * @generated from field: google.fhir.r4.core.String id = 1;
   */
  id?: String;

  /**
   * Class name in multi-class prediction tasks, e.g. code "780.60" for icd9
   *
   * @generated from field: google.fhir.r4.core.Coding class_name = 4;
   */
  className?: Coding;

  /**
   * @generated from field: google.fhir.r4.google.EventLabel.Label.ClassValueX class_value = 5;
   */
  classValue?: EventLabel_Label_ClassValueX;

  constructor(data?: PartialMessage<EventLabel_Label>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.google.EventLabel.Label";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 4, name: "class_name", kind: "message", T: Coding },
    { no: 5, name: "class_value", kind: "message", T: EventLabel_Label_ClassValueX },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventLabel_Label {
    return new EventLabel_Label().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventLabel_Label {
    return new EventLabel_Label().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventLabel_Label {
    return new EventLabel_Label().fromJsonString(jsonString, options);
  }

  static equals(a: EventLabel_Label | PlainMessage<EventLabel_Label> | undefined, b: EventLabel_Label | PlainMessage<EventLabel_Label> | undefined): boolean {
    return proto3.util.equals(EventLabel_Label, a, b);
  }
}

/**
 * The value of the label
 *
 * @generated from message google.fhir.r4.google.EventLabel.Label.ClassValueX
 */
export class EventLabel_Label_ClassValueX extends Message<EventLabel_Label_ClassValueX> {
  /**
   * @generated from oneof google.fhir.r4.google.EventLabel.Label.ClassValueX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.Boolean boolean = 1;
     */
    value: Boolean;
    case: "boolean";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Decimal decimal = 2;
     */
    value: Decimal;
    case: "decimal";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Integer integer = 3;
     */
    value: Integer;
    case: "integer";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.String string_value = 4 [json_name = "string"];
     */
    value: String;
    case: "stringValue";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.DateTime date_time = 5;
     */
    value: DateTime;
    case: "dateTime";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<EventLabel_Label_ClassValueX>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.google.EventLabel.Label.ClassValueX";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "boolean", kind: "message", T: Boolean, oneof: "choice" },
    { no: 2, name: "decimal", kind: "message", T: Decimal, oneof: "choice" },
    { no: 3, name: "integer", kind: "message", T: Integer, oneof: "choice" },
    { no: 4, name: "string_value", jsonName: "string", kind: "message", T: String, oneof: "choice" },
    { no: 5, name: "date_time", kind: "message", T: DateTime, oneof: "choice" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventLabel_Label_ClassValueX {
    return new EventLabel_Label_ClassValueX().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventLabel_Label_ClassValueX {
    return new EventLabel_Label_ClassValueX().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventLabel_Label_ClassValueX {
    return new EventLabel_Label_ClassValueX().fromJsonString(jsonString, options);
  }

  static equals(a: EventLabel_Label_ClassValueX | PlainMessage<EventLabel_Label_ClassValueX> | undefined, b: EventLabel_Label_ClassValueX | PlainMessage<EventLabel_Label_ClassValueX> | undefined): boolean {
    return proto3.util.equals(EventLabel_Label_ClassValueX, a, b);
  }
}

/**
 * Auto-generated from StructureDefinition for EventTrigger.
 * EventTriggers specify cutoff times for generated TensorFlow examples.
 * See https://g.co/fhir/StructureDefinition/eventTrigger
 *
 * @generated from message google.fhir.r4.google.EventTrigger
 */
export class EventTrigger extends Message<EventTrigger> {
  /**
   * Unique id for inter-element referencing
   *
   * @generated from field: google.fhir.r4.core.String id = 1;
   */
  id?: String;

  /**
   * The type of trigger, part of the prediction task definition.
   *
   * @generated from field: google.fhir.r4.core.Coding type = 4;
   */
  type?: Coding;

  /**
   * Prediction event time, more recent data will be elided.
   *
   * @generated from field: google.fhir.r4.core.DateTime event_time = 5;
   */
  eventTime?: DateTime;

  /**
   * Resource that owns this trigger.
   *
   * @generated from field: google.fhir.r4.core.Reference source = 6;
   */
  source?: Reference;

  constructor(data?: PartialMessage<EventTrigger>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.google.EventTrigger";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 4, name: "type", kind: "message", T: Coding },
    { no: 5, name: "event_time", kind: "message", T: DateTime },
    { no: 6, name: "source", kind: "message", T: Reference },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventTrigger {
    return new EventTrigger().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventTrigger {
    return new EventTrigger().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventTrigger {
    return new EventTrigger().fromJsonString(jsonString, options);
  }

  static equals(a: EventTrigger | PlainMessage<EventTrigger> | undefined, b: EventTrigger | PlainMessage<EventTrigger> | undefined): boolean {
    return proto3.util.equals(EventTrigger, a, b);
  }
}

/**
 * Auto-generated from StructureDefinition for OperationOutcomeSubject.
 * Indicates the FHIR resource subject of this OperationOutcome.
 * See https://g.co/fhir/medicalrecords/OperationOutcomeSubject
 *
 * @generated from message google.fhir.r4.google.OperationOutcomeSubject
 */
export class OperationOutcomeSubject extends Message<OperationOutcomeSubject> {
  /**
   * Unique id for inter-element referencing
   *
   * @generated from field: google.fhir.r4.core.String id = 1;
   */
  id?: String;

  /**
   * Value of extension
   *
   * @generated from field: google.fhir.r4.core.Reference value_reference = 3;
   */
  valueReference?: Reference;

  constructor(data?: PartialMessage<OperationOutcomeSubject>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.google.OperationOutcomeSubject";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 3, name: "value_reference", kind: "message", T: Reference },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OperationOutcomeSubject {
    return new OperationOutcomeSubject().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OperationOutcomeSubject {
    return new OperationOutcomeSubject().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OperationOutcomeSubject {
    return new OperationOutcomeSubject().fromJsonString(jsonString, options);
  }

  static equals(a: OperationOutcomeSubject | PlainMessage<OperationOutcomeSubject> | undefined, b: OperationOutcomeSubject | PlainMessage<OperationOutcomeSubject> | undefined): boolean {
    return proto3.util.equals(OperationOutcomeSubject, a, b);
  }
}

/**
 * Auto-generated from StructureDefinition for PrimitiveHasNoValue.
 * Whether or not the primitive is missing a value.
 * See https://g.co/fhir/StructureDefinition/primitiveHasNoValue
 *
 * @generated from message google.fhir.r4.google.PrimitiveHasNoValue
 */
export class PrimitiveHasNoValue extends Message<PrimitiveHasNoValue> {
  /**
   * Unique id for inter-element referencing
   *
   * @generated from field: google.fhir.r4.core.String id = 1;
   */
  id?: String;

  /**
   * Value of extension
   *
   * @generated from field: google.fhir.r4.core.Boolean value_boolean = 3;
   */
  valueBoolean?: Boolean;

  constructor(data?: PartialMessage<PrimitiveHasNoValue>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.google.PrimitiveHasNoValue";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 3, name: "value_boolean", kind: "message", T: Boolean },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PrimitiveHasNoValue {
    return new PrimitiveHasNoValue().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PrimitiveHasNoValue {
    return new PrimitiveHasNoValue().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PrimitiveHasNoValue {
    return new PrimitiveHasNoValue().fromJsonString(jsonString, options);
  }

  static equals(a: PrimitiveHasNoValue | PlainMessage<PrimitiveHasNoValue> | undefined, b: PrimitiveHasNoValue | PlainMessage<PrimitiveHasNoValue> | undefined): boolean {
    return proto3.util.equals(PrimitiveHasNoValue, a, b);
  }
}

