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
// @generated from file proto/google/fhir/proto/r4/core/resources/research_subject.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Code, Extension, Id, Identifier, Meta, Narrative, Period, Reference, String, Uri } from "../datatypes_pb.js";
import { ResearchSubjectStatusCode_Value } from "../codes_pb.js";

/**
 * Auto-generated from StructureDefinition for ResearchSubject.
 * Physical entity which is the primary unit of interest in the study.
 * See http://hl7.org/fhir/StructureDefinition/ResearchSubject
 *
 * @generated from message google.fhir.r4.core.ResearchSubject
 */
export class ResearchSubject extends Message<ResearchSubject> {
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
   * Business Identifier for research subject in a study
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[] = [];

  /**
   * @generated from field: google.fhir.r4.core.ResearchSubject.StatusCode status = 11;
   */
  status?: ResearchSubject_StatusCode;

  /**
   * Start and end of participation
   *
   * @generated from field: google.fhir.r4.core.Period period = 12;
   */
  period?: Period;

  /**
   * Study subject is part of
   *
   * @generated from field: google.fhir.r4.core.Reference study = 13;
   */
  study?: Reference;

  /**
   * Who is part of study
   *
   * @generated from field: google.fhir.r4.core.Reference individual = 14;
   */
  individual?: Reference;

  /**
   * What path should be followed
   *
   * @generated from field: google.fhir.r4.core.String assigned_arm = 15;
   */
  assignedArm?: String;

  /**
   * What path was followed
   *
   * @generated from field: google.fhir.r4.core.String actual_arm = 16;
   */
  actualArm?: String;

  /**
   * Agreement to participate in study
   *
   * @generated from field: google.fhir.r4.core.Reference consent = 17;
   */
  consent?: Reference;

  constructor(data?: PartialMessage<ResearchSubject>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.ResearchSubject";
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
    { no: 11, name: "status", kind: "message", T: ResearchSubject_StatusCode },
    { no: 12, name: "period", kind: "message", T: Period },
    { no: 13, name: "study", kind: "message", T: Reference },
    { no: 14, name: "individual", kind: "message", T: Reference },
    { no: 15, name: "assigned_arm", kind: "message", T: String },
    { no: 16, name: "actual_arm", kind: "message", T: String },
    { no: 17, name: "consent", kind: "message", T: Reference },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResearchSubject {
    return new ResearchSubject().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResearchSubject {
    return new ResearchSubject().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResearchSubject {
    return new ResearchSubject().fromJsonString(jsonString, options);
  }

  static equals(a: ResearchSubject | PlainMessage<ResearchSubject> | undefined, b: ResearchSubject | PlainMessage<ResearchSubject> | undefined): boolean {
    return proto3.util.equals(ResearchSubject, a, b);
  }
}

/**
 * candidate | eligible | follow-up | ineligible | not-registered | off-study
 * | on-study | on-study-intervention | on-study-observation |
 * pending-on-study | potential-candidate | screening | withdrawn
 *
 * @generated from message google.fhir.r4.core.ResearchSubject.StatusCode
 */
export class ResearchSubject_StatusCode extends Message<ResearchSubject_StatusCode> {
  /**
   * @generated from field: google.fhir.r4.core.ResearchSubjectStatusCode.Value value = 1;
   */
  value = ResearchSubjectStatusCode_Value.INVALID_UNINITIALIZED;

  /**
   * @generated from field: google.fhir.r4.core.String id = 2;
   */
  id?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 3;
   */
  extension: Extension[] = [];

  constructor(data?: PartialMessage<ResearchSubject_StatusCode>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.ResearchSubject.StatusCode";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "enum", T: proto3.getEnumType(ResearchSubjectStatusCode_Value) },
    { no: 2, name: "id", kind: "message", T: String },
    { no: 3, name: "extension", kind: "message", T: Extension, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResearchSubject_StatusCode {
    return new ResearchSubject_StatusCode().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResearchSubject_StatusCode {
    return new ResearchSubject_StatusCode().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResearchSubject_StatusCode {
    return new ResearchSubject_StatusCode().fromJsonString(jsonString, options);
  }

  static equals(a: ResearchSubject_StatusCode | PlainMessage<ResearchSubject_StatusCode> | undefined, b: ResearchSubject_StatusCode | PlainMessage<ResearchSubject_StatusCode> | undefined): boolean {
    return proto3.util.equals(ResearchSubject_StatusCode, a, b);
  }
}

