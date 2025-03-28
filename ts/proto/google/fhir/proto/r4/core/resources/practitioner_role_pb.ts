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
// @generated from file proto/google/fhir/proto/r4/core/resources/practitioner_role.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Boolean, Code, CodeableConcept, ContactPoint, Extension, Id, Identifier, Meta, Narrative, Period, Reference, String, Time, Uri } from "../datatypes_pb.js";
import { DaysOfWeekCode_Value } from "../codes_pb.js";

/**
 * Auto-generated from StructureDefinition for PractitionerRole.
 * Roles/organizations the practitioner is associated with.
 * See http://hl7.org/fhir/StructureDefinition/PractitionerRole
 *
 * @generated from message google.fhir.r4.core.PractitionerRole
 */
export class PractitionerRole extends Message<PractitionerRole> {
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
   * Business Identifiers that are specific to a role/location
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[] = [];

  /**
   * Whether this practitioner role record is in active use
   *
   * @generated from field: google.fhir.r4.core.Boolean active = 11;
   */
  active?: Boolean;

  /**
   * The period during which the practitioner is authorized to perform in these
   * role(s)
   *
   * @generated from field: google.fhir.r4.core.Period period = 12;
   */
  period?: Period;

  /**
   * Practitioner that is able to provide the defined services for the
   * organization
   *
   * @generated from field: google.fhir.r4.core.Reference practitioner = 13;
   */
  practitioner?: Reference;

  /**
   * Organization where the roles are available
   *
   * @generated from field: google.fhir.r4.core.Reference organization = 14;
   */
  organization?: Reference;

  /**
   * Roles which this practitioner may perform
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept code = 15;
   */
  code: CodeableConcept[] = [];

  /**
   * Specific specialty of the practitioner
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept specialty = 16;
   */
  specialty: CodeableConcept[] = [];

  /**
   * The location(s) at which this practitioner provides care
   *
   * @generated from field: repeated google.fhir.r4.core.Reference location = 17;
   */
  location: Reference[] = [];

  /**
   * The list of healthcare services that this worker provides for this role's
   * Organization/Location(s)
   *
   * @generated from field: repeated google.fhir.r4.core.Reference healthcare_service = 18;
   */
  healthcareService: Reference[] = [];

  /**
   * Contact details that are specific to the role/location/service
   *
   * @generated from field: repeated google.fhir.r4.core.ContactPoint telecom = 19;
   */
  telecom: ContactPoint[] = [];

  /**
   * @generated from field: repeated google.fhir.r4.core.PractitionerRole.AvailableTime available_time = 20;
   */
  availableTime: PractitionerRole_AvailableTime[] = [];

  /**
   * @generated from field: repeated google.fhir.r4.core.PractitionerRole.NotAvailable not_available = 21;
   */
  notAvailable: PractitionerRole_NotAvailable[] = [];

  /**
   * Description of availability exceptions
   *
   * @generated from field: google.fhir.r4.core.String availability_exceptions = 22;
   */
  availabilityExceptions?: String;

  /**
   * Technical endpoints providing access to services operated for the
   * practitioner with this role
   *
   * @generated from field: repeated google.fhir.r4.core.Reference endpoint = 23;
   */
  endpoint: Reference[] = [];

  constructor(data?: PartialMessage<PractitionerRole>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.PractitionerRole";
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
    { no: 11, name: "active", kind: "message", T: Boolean },
    { no: 12, name: "period", kind: "message", T: Period },
    { no: 13, name: "practitioner", kind: "message", T: Reference },
    { no: 14, name: "organization", kind: "message", T: Reference },
    { no: 15, name: "code", kind: "message", T: CodeableConcept, repeated: true },
    { no: 16, name: "specialty", kind: "message", T: CodeableConcept, repeated: true },
    { no: 17, name: "location", kind: "message", T: Reference, repeated: true },
    { no: 18, name: "healthcare_service", kind: "message", T: Reference, repeated: true },
    { no: 19, name: "telecom", kind: "message", T: ContactPoint, repeated: true },
    { no: 20, name: "available_time", kind: "message", T: PractitionerRole_AvailableTime, repeated: true },
    { no: 21, name: "not_available", kind: "message", T: PractitionerRole_NotAvailable, repeated: true },
    { no: 22, name: "availability_exceptions", kind: "message", T: String },
    { no: 23, name: "endpoint", kind: "message", T: Reference, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PractitionerRole {
    return new PractitionerRole().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PractitionerRole {
    return new PractitionerRole().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PractitionerRole {
    return new PractitionerRole().fromJsonString(jsonString, options);
  }

  static equals(a: PractitionerRole | PlainMessage<PractitionerRole> | undefined, b: PractitionerRole | PlainMessage<PractitionerRole> | undefined): boolean {
    return proto3.util.equals(PractitionerRole, a, b);
  }
}

/**
 * Times the Service Site is available
 *
 * @generated from message google.fhir.r4.core.PractitionerRole.AvailableTime
 */
export class PractitionerRole_AvailableTime extends Message<PractitionerRole_AvailableTime> {
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
   * @generated from field: repeated google.fhir.r4.core.PractitionerRole.AvailableTime.DaysOfWeekCode days_of_week = 4;
   */
  daysOfWeek: PractitionerRole_AvailableTime_DaysOfWeekCode[] = [];

  /**
   * Always available? e.g. 24 hour service
   *
   * @generated from field: google.fhir.r4.core.Boolean all_day = 5;
   */
  allDay?: Boolean;

  /**
   * Opening time of day (ignored if allDay = true)
   *
   * @generated from field: google.fhir.r4.core.Time available_start_time = 6;
   */
  availableStartTime?: Time;

  /**
   * Closing time of day (ignored if allDay = true)
   *
   * @generated from field: google.fhir.r4.core.Time available_end_time = 7;
   */
  availableEndTime?: Time;

  constructor(data?: PartialMessage<PractitionerRole_AvailableTime>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.PractitionerRole.AvailableTime";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 3, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "days_of_week", kind: "message", T: PractitionerRole_AvailableTime_DaysOfWeekCode, repeated: true },
    { no: 5, name: "all_day", kind: "message", T: Boolean },
    { no: 6, name: "available_start_time", kind: "message", T: Time },
    { no: 7, name: "available_end_time", kind: "message", T: Time },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PractitionerRole_AvailableTime {
    return new PractitionerRole_AvailableTime().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PractitionerRole_AvailableTime {
    return new PractitionerRole_AvailableTime().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PractitionerRole_AvailableTime {
    return new PractitionerRole_AvailableTime().fromJsonString(jsonString, options);
  }

  static equals(a: PractitionerRole_AvailableTime | PlainMessage<PractitionerRole_AvailableTime> | undefined, b: PractitionerRole_AvailableTime | PlainMessage<PractitionerRole_AvailableTime> | undefined): boolean {
    return proto3.util.equals(PractitionerRole_AvailableTime, a, b);
  }
}

/**
 * mon | tue | wed | thu | fri | sat | sun
 *
 * @generated from message google.fhir.r4.core.PractitionerRole.AvailableTime.DaysOfWeekCode
 */
export class PractitionerRole_AvailableTime_DaysOfWeekCode extends Message<PractitionerRole_AvailableTime_DaysOfWeekCode> {
  /**
   * @generated from field: google.fhir.r4.core.DaysOfWeekCode.Value value = 1;
   */
  value = DaysOfWeekCode_Value.INVALID_UNINITIALIZED;

  /**
   * @generated from field: google.fhir.r4.core.String id = 2;
   */
  id?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 3;
   */
  extension: Extension[] = [];

  constructor(data?: PartialMessage<PractitionerRole_AvailableTime_DaysOfWeekCode>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.PractitionerRole.AvailableTime.DaysOfWeekCode";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "enum", T: proto3.getEnumType(DaysOfWeekCode_Value) },
    { no: 2, name: "id", kind: "message", T: String },
    { no: 3, name: "extension", kind: "message", T: Extension, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PractitionerRole_AvailableTime_DaysOfWeekCode {
    return new PractitionerRole_AvailableTime_DaysOfWeekCode().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PractitionerRole_AvailableTime_DaysOfWeekCode {
    return new PractitionerRole_AvailableTime_DaysOfWeekCode().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PractitionerRole_AvailableTime_DaysOfWeekCode {
    return new PractitionerRole_AvailableTime_DaysOfWeekCode().fromJsonString(jsonString, options);
  }

  static equals(a: PractitionerRole_AvailableTime_DaysOfWeekCode | PlainMessage<PractitionerRole_AvailableTime_DaysOfWeekCode> | undefined, b: PractitionerRole_AvailableTime_DaysOfWeekCode | PlainMessage<PractitionerRole_AvailableTime_DaysOfWeekCode> | undefined): boolean {
    return proto3.util.equals(PractitionerRole_AvailableTime_DaysOfWeekCode, a, b);
  }
}

/**
 * Not available during this time due to provided reason
 *
 * @generated from message google.fhir.r4.core.PractitionerRole.NotAvailable
 */
export class PractitionerRole_NotAvailable extends Message<PractitionerRole_NotAvailable> {
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
   * Reason presented to the user explaining why time not available
   *
   * @generated from field: google.fhir.r4.core.String description = 4;
   */
  description?: String;

  /**
   * Service not available from this date
   *
   * @generated from field: google.fhir.r4.core.Period during = 5;
   */
  during?: Period;

  constructor(data?: PartialMessage<PractitionerRole_NotAvailable>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.PractitionerRole.NotAvailable";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 3, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "description", kind: "message", T: String },
    { no: 5, name: "during", kind: "message", T: Period },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PractitionerRole_NotAvailable {
    return new PractitionerRole_NotAvailable().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PractitionerRole_NotAvailable {
    return new PractitionerRole_NotAvailable().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PractitionerRole_NotAvailable {
    return new PractitionerRole_NotAvailable().fromJsonString(jsonString, options);
  }

  static equals(a: PractitionerRole_NotAvailable | PlainMessage<PractitionerRole_NotAvailable> | undefined, b: PractitionerRole_NotAvailable | PlainMessage<PractitionerRole_NotAvailable> | undefined): boolean {
    return proto3.util.equals(PractitionerRole_NotAvailable, a, b);
  }
}

