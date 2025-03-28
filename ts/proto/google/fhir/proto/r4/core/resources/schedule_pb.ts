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
// @generated from file proto/google/fhir/proto/r4/core/resources/schedule.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Boolean, Code, CodeableConcept, Extension, Id, Identifier, Meta, Narrative, Period, Reference, String, Uri } from "../datatypes_pb.js";

/**
 * Auto-generated from StructureDefinition for Schedule.
 * A container for slots of time that may be available for booking appointments.
 * See http://hl7.org/fhir/StructureDefinition/Schedule
 *
 * @generated from message google.fhir.r4.core.Schedule
 */
export class Schedule extends Message<Schedule> {
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
   * External Ids for this item
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[] = [];

  /**
   * Whether this schedule is in active use
   *
   * @generated from field: google.fhir.r4.core.Boolean active = 11;
   */
  active?: Boolean;

  /**
   * High-level category
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept service_category = 12;
   */
  serviceCategory: CodeableConcept[] = [];

  /**
   * Specific service
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept service_type = 13;
   */
  serviceType: CodeableConcept[] = [];

  /**
   * Type of specialty needed
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept specialty = 14;
   */
  specialty: CodeableConcept[] = [];

  /**
   * Resource(s) that availability information is being provided for
   *
   * @generated from field: repeated google.fhir.r4.core.Reference actor = 15;
   */
  actor: Reference[] = [];

  /**
   * Period of time covered by schedule
   *
   * @generated from field: google.fhir.r4.core.Period planning_horizon = 16;
   */
  planningHorizon?: Period;

  /**
   * Comments on availability
   *
   * @generated from field: google.fhir.r4.core.String comment = 17;
   */
  comment?: String;

  constructor(data?: PartialMessage<Schedule>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.Schedule";
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
    { no: 12, name: "service_category", kind: "message", T: CodeableConcept, repeated: true },
    { no: 13, name: "service_type", kind: "message", T: CodeableConcept, repeated: true },
    { no: 14, name: "specialty", kind: "message", T: CodeableConcept, repeated: true },
    { no: 15, name: "actor", kind: "message", T: Reference, repeated: true },
    { no: 16, name: "planning_horizon", kind: "message", T: Period },
    { no: 17, name: "comment", kind: "message", T: String },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Schedule {
    return new Schedule().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Schedule {
    return new Schedule().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Schedule {
    return new Schedule().fromJsonString(jsonString, options);
  }

  static equals(a: Schedule | PlainMessage<Schedule> | undefined, b: Schedule | PlainMessage<Schedule> | undefined): boolean {
    return proto3.util.equals(Schedule, a, b);
  }
}

