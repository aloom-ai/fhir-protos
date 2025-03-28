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
// @generated from file proto/google/fhir/proto/r4/core/resources/consent.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Attachment, Boolean, Code, CodeableConcept, Coding, DateTime, Extension, Id, Identifier, Meta, Narrative, Period, Reference, String, Uri } from "../datatypes_pb.js";
import { ConsentDataMeaningCode_Value, ConsentProvisionTypeCode_Value, ConsentStateCode_Value } from "../codes_pb.js";

/**
 * Auto-generated from StructureDefinition for Consent.
 * A healthcare consumer's  choices to permit or deny recipients or roles to
 * perform actions for specific purposes and periods of time. See
 * http://hl7.org/fhir/StructureDefinition/Consent
 *
 * @generated from message google.fhir.r4.core.Consent
 */
export class Consent extends Message<Consent> {
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
   * Identifier for this record (external references)
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[] = [];

  /**
   * @generated from field: google.fhir.r4.core.Consent.StatusCode status = 11;
   */
  status?: Consent_StatusCode;

  /**
   * Which of the four areas this resource covers (extensible)
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept scope = 12;
   */
  scope?: CodeableConcept;

  /**
   * Classification of the consent statement - for indexing/retrieval
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept category = 13;
   */
  category: CodeableConcept[] = [];

  /**
   * Who the consent applies to
   *
   * @generated from field: google.fhir.r4.core.Reference patient = 14;
   */
  patient?: Reference;

  /**
   * When this Consent was created or indexed
   *
   * @generated from field: google.fhir.r4.core.DateTime date_time = 15;
   */
  dateTime?: DateTime;

  /**
   * Who is agreeing to the policy and rules
   *
   * @generated from field: repeated google.fhir.r4.core.Reference performer = 16;
   */
  performer: Reference[] = [];

  /**
   * Custodian of the consent
   *
   * @generated from field: repeated google.fhir.r4.core.Reference organization = 17;
   */
  organization: Reference[] = [];

  /**
   * @generated from field: google.fhir.r4.core.Consent.SourceX source = 18;
   */
  source?: Consent_SourceX;

  /**
   * @generated from field: repeated google.fhir.r4.core.Consent.Policy policy = 19;
   */
  policy: Consent_Policy[] = [];

  /**
   * Regulation that this consents to
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept policy_rule = 20;
   */
  policyRule?: CodeableConcept;

  /**
   * @generated from field: repeated google.fhir.r4.core.Consent.Verification verification = 21;
   */
  verification: Consent_Verification[] = [];

  /**
   * @generated from field: google.fhir.r4.core.Consent.Provision provision = 22;
   */
  provision?: Consent_Provision;

  constructor(data?: PartialMessage<Consent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.Consent";
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
    { no: 11, name: "status", kind: "message", T: Consent_StatusCode },
    { no: 12, name: "scope", kind: "message", T: CodeableConcept },
    { no: 13, name: "category", kind: "message", T: CodeableConcept, repeated: true },
    { no: 14, name: "patient", kind: "message", T: Reference },
    { no: 15, name: "date_time", kind: "message", T: DateTime },
    { no: 16, name: "performer", kind: "message", T: Reference, repeated: true },
    { no: 17, name: "organization", kind: "message", T: Reference, repeated: true },
    { no: 18, name: "source", kind: "message", T: Consent_SourceX },
    { no: 19, name: "policy", kind: "message", T: Consent_Policy, repeated: true },
    { no: 20, name: "policy_rule", kind: "message", T: CodeableConcept },
    { no: 21, name: "verification", kind: "message", T: Consent_Verification, repeated: true },
    { no: 22, name: "provision", kind: "message", T: Consent_Provision },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Consent {
    return new Consent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Consent {
    return new Consent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Consent {
    return new Consent().fromJsonString(jsonString, options);
  }

  static equals(a: Consent | PlainMessage<Consent> | undefined, b: Consent | PlainMessage<Consent> | undefined): boolean {
    return proto3.util.equals(Consent, a, b);
  }
}

/**
 * draft | proposed | active | rejected | inactive | entered-in-error
 *
 * @generated from message google.fhir.r4.core.Consent.StatusCode
 */
export class Consent_StatusCode extends Message<Consent_StatusCode> {
  /**
   * @generated from field: google.fhir.r4.core.ConsentStateCode.Value value = 1;
   */
  value = ConsentStateCode_Value.INVALID_UNINITIALIZED;

  /**
   * @generated from field: google.fhir.r4.core.String id = 2;
   */
  id?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 3;
   */
  extension: Extension[] = [];

  constructor(data?: PartialMessage<Consent_StatusCode>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.Consent.StatusCode";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "enum", T: proto3.getEnumType(ConsentStateCode_Value) },
    { no: 2, name: "id", kind: "message", T: String },
    { no: 3, name: "extension", kind: "message", T: Extension, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Consent_StatusCode {
    return new Consent_StatusCode().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Consent_StatusCode {
    return new Consent_StatusCode().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Consent_StatusCode {
    return new Consent_StatusCode().fromJsonString(jsonString, options);
  }

  static equals(a: Consent_StatusCode | PlainMessage<Consent_StatusCode> | undefined, b: Consent_StatusCode | PlainMessage<Consent_StatusCode> | undefined): boolean {
    return proto3.util.equals(Consent_StatusCode, a, b);
  }
}

/**
 * Source from which this consent is taken
 *
 * @generated from message google.fhir.r4.core.Consent.SourceX
 */
export class Consent_SourceX extends Message<Consent_SourceX> {
  /**
   * @generated from oneof google.fhir.r4.core.Consent.SourceX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.Attachment attachment = 1;
     */
    value: Attachment;
    case: "attachment";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Reference reference = 2;
     */
    value: Reference;
    case: "reference";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Consent_SourceX>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.Consent.SourceX";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "attachment", kind: "message", T: Attachment, oneof: "choice" },
    { no: 2, name: "reference", kind: "message", T: Reference, oneof: "choice" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Consent_SourceX {
    return new Consent_SourceX().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Consent_SourceX {
    return new Consent_SourceX().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Consent_SourceX {
    return new Consent_SourceX().fromJsonString(jsonString, options);
  }

  static equals(a: Consent_SourceX | PlainMessage<Consent_SourceX> | undefined, b: Consent_SourceX | PlainMessage<Consent_SourceX> | undefined): boolean {
    return proto3.util.equals(Consent_SourceX, a, b);
  }
}

/**
 * Policies covered by this consent
 *
 * @generated from message google.fhir.r4.core.Consent.Policy
 */
export class Consent_Policy extends Message<Consent_Policy> {
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
   * Enforcement source for policy
   *
   * @generated from field: google.fhir.r4.core.Uri authority = 4;
   */
  authority?: Uri;

  /**
   * Specific policy covered by this consent
   *
   * @generated from field: google.fhir.r4.core.Uri uri = 5;
   */
  uri?: Uri;

  constructor(data?: PartialMessage<Consent_Policy>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.Consent.Policy";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 3, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "authority", kind: "message", T: Uri },
    { no: 5, name: "uri", kind: "message", T: Uri },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Consent_Policy {
    return new Consent_Policy().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Consent_Policy {
    return new Consent_Policy().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Consent_Policy {
    return new Consent_Policy().fromJsonString(jsonString, options);
  }

  static equals(a: Consent_Policy | PlainMessage<Consent_Policy> | undefined, b: Consent_Policy | PlainMessage<Consent_Policy> | undefined): boolean {
    return proto3.util.equals(Consent_Policy, a, b);
  }
}

/**
 * Consent Verified by patient or family
 *
 * @generated from message google.fhir.r4.core.Consent.Verification
 */
export class Consent_Verification extends Message<Consent_Verification> {
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
   * Has been verified
   *
   * @generated from field: google.fhir.r4.core.Boolean verified = 4;
   */
  verified?: Boolean;

  /**
   * Person who verified
   *
   * @generated from field: google.fhir.r4.core.Reference verified_with = 5;
   */
  verifiedWith?: Reference;

  /**
   * When consent verified
   *
   * @generated from field: google.fhir.r4.core.DateTime verification_date = 6;
   */
  verificationDate?: DateTime;

  constructor(data?: PartialMessage<Consent_Verification>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.Consent.Verification";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 3, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "verified", kind: "message", T: Boolean },
    { no: 5, name: "verified_with", kind: "message", T: Reference },
    { no: 6, name: "verification_date", kind: "message", T: DateTime },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Consent_Verification {
    return new Consent_Verification().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Consent_Verification {
    return new Consent_Verification().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Consent_Verification {
    return new Consent_Verification().fromJsonString(jsonString, options);
  }

  static equals(a: Consent_Verification | PlainMessage<Consent_Verification> | undefined, b: Consent_Verification | PlainMessage<Consent_Verification> | undefined): boolean {
    return proto3.util.equals(Consent_Verification, a, b);
  }
}

/**
 * Constraints to the base Consent.policyRule
 *
 * @generated from message google.fhir.r4.core.Consent.Provision
 */
export class Consent_Provision extends Message<Consent_Provision> {
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
   * @generated from field: google.fhir.r4.core.Consent.Provision.TypeCode type = 4;
   */
  type?: Consent_Provision_TypeCode;

  /**
   * Timeframe for this rule
   *
   * @generated from field: google.fhir.r4.core.Period period = 5;
   */
  period?: Period;

  /**
   * @generated from field: repeated google.fhir.r4.core.Consent.Provision.ProvisionActor actor = 6;
   */
  actor: Consent_Provision_ProvisionActor[] = [];

  /**
   * Actions controlled by this rule
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept action = 7;
   */
  action: CodeableConcept[] = [];

  /**
   * Security Labels that define affected resources
   *
   * @generated from field: repeated google.fhir.r4.core.Coding security_label = 8;
   */
  securityLabel: Coding[] = [];

  /**
   * Context of activities covered by this rule
   *
   * @generated from field: repeated google.fhir.r4.core.Coding purpose = 9;
   */
  purpose: Coding[] = [];

  /**
   * e.g. Resource Type, Profile, CDA, etc.
   *
   * @generated from field: repeated google.fhir.r4.core.Coding class_value = 10 [json_name = "class"];
   */
  classValue: Coding[] = [];

  /**
   * e.g. LOINC or SNOMED CT code, etc. in the content
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept code = 11;
   */
  code: CodeableConcept[] = [];

  /**
   * Timeframe for data controlled by this rule
   *
   * @generated from field: google.fhir.r4.core.Period data_period = 12;
   */
  dataPeriod?: Period;

  /**
   * @generated from field: repeated google.fhir.r4.core.Consent.Provision.ProvisionData data = 13;
   */
  data: Consent_Provision_ProvisionData[] = [];

  /**
   * Nested Exception Rules
   *
   * @generated from field: repeated google.fhir.r4.core.Consent.Provision provision = 14;
   */
  provision: Consent_Provision[] = [];

  constructor(data?: PartialMessage<Consent_Provision>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.Consent.Provision";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 3, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "type", kind: "message", T: Consent_Provision_TypeCode },
    { no: 5, name: "period", kind: "message", T: Period },
    { no: 6, name: "actor", kind: "message", T: Consent_Provision_ProvisionActor, repeated: true },
    { no: 7, name: "action", kind: "message", T: CodeableConcept, repeated: true },
    { no: 8, name: "security_label", kind: "message", T: Coding, repeated: true },
    { no: 9, name: "purpose", kind: "message", T: Coding, repeated: true },
    { no: 10, name: "class_value", jsonName: "class", kind: "message", T: Coding, repeated: true },
    { no: 11, name: "code", kind: "message", T: CodeableConcept, repeated: true },
    { no: 12, name: "data_period", kind: "message", T: Period },
    { no: 13, name: "data", kind: "message", T: Consent_Provision_ProvisionData, repeated: true },
    { no: 14, name: "provision", kind: "message", T: Consent_Provision, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Consent_Provision {
    return new Consent_Provision().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Consent_Provision {
    return new Consent_Provision().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Consent_Provision {
    return new Consent_Provision().fromJsonString(jsonString, options);
  }

  static equals(a: Consent_Provision | PlainMessage<Consent_Provision> | undefined, b: Consent_Provision | PlainMessage<Consent_Provision> | undefined): boolean {
    return proto3.util.equals(Consent_Provision, a, b);
  }
}

/**
 * deny | permit
 *
 * @generated from message google.fhir.r4.core.Consent.Provision.TypeCode
 */
export class Consent_Provision_TypeCode extends Message<Consent_Provision_TypeCode> {
  /**
   * @generated from field: google.fhir.r4.core.ConsentProvisionTypeCode.Value value = 1;
   */
  value = ConsentProvisionTypeCode_Value.INVALID_UNINITIALIZED;

  /**
   * @generated from field: google.fhir.r4.core.String id = 2;
   */
  id?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 3;
   */
  extension: Extension[] = [];

  constructor(data?: PartialMessage<Consent_Provision_TypeCode>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.Consent.Provision.TypeCode";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "enum", T: proto3.getEnumType(ConsentProvisionTypeCode_Value) },
    { no: 2, name: "id", kind: "message", T: String },
    { no: 3, name: "extension", kind: "message", T: Extension, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Consent_Provision_TypeCode {
    return new Consent_Provision_TypeCode().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Consent_Provision_TypeCode {
    return new Consent_Provision_TypeCode().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Consent_Provision_TypeCode {
    return new Consent_Provision_TypeCode().fromJsonString(jsonString, options);
  }

  static equals(a: Consent_Provision_TypeCode | PlainMessage<Consent_Provision_TypeCode> | undefined, b: Consent_Provision_TypeCode | PlainMessage<Consent_Provision_TypeCode> | undefined): boolean {
    return proto3.util.equals(Consent_Provision_TypeCode, a, b);
  }
}

/**
 * Who|what controlled by this rule (or group, by role)
 *
 * @generated from message google.fhir.r4.core.Consent.Provision.ProvisionActor
 */
export class Consent_Provision_ProvisionActor extends Message<Consent_Provision_ProvisionActor> {
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
   * How the actor is involved
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept role = 4;
   */
  role?: CodeableConcept;

  /**
   * Resource for the actor (or group, by role)
   *
   * @generated from field: google.fhir.r4.core.Reference reference = 5;
   */
  reference?: Reference;

  constructor(data?: PartialMessage<Consent_Provision_ProvisionActor>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.Consent.Provision.ProvisionActor";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 3, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "role", kind: "message", T: CodeableConcept },
    { no: 5, name: "reference", kind: "message", T: Reference },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Consent_Provision_ProvisionActor {
    return new Consent_Provision_ProvisionActor().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Consent_Provision_ProvisionActor {
    return new Consent_Provision_ProvisionActor().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Consent_Provision_ProvisionActor {
    return new Consent_Provision_ProvisionActor().fromJsonString(jsonString, options);
  }

  static equals(a: Consent_Provision_ProvisionActor | PlainMessage<Consent_Provision_ProvisionActor> | undefined, b: Consent_Provision_ProvisionActor | PlainMessage<Consent_Provision_ProvisionActor> | undefined): boolean {
    return proto3.util.equals(Consent_Provision_ProvisionActor, a, b);
  }
}

/**
 * Data controlled by this rule
 *
 * @generated from message google.fhir.r4.core.Consent.Provision.ProvisionData
 */
export class Consent_Provision_ProvisionData extends Message<Consent_Provision_ProvisionData> {
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
   * @generated from field: google.fhir.r4.core.Consent.Provision.ProvisionData.MeaningCode meaning = 4;
   */
  meaning?: Consent_Provision_ProvisionData_MeaningCode;

  /**
   * The actual data reference
   *
   * @generated from field: google.fhir.r4.core.Reference reference = 5;
   */
  reference?: Reference;

  constructor(data?: PartialMessage<Consent_Provision_ProvisionData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.Consent.Provision.ProvisionData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 3, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "meaning", kind: "message", T: Consent_Provision_ProvisionData_MeaningCode },
    { no: 5, name: "reference", kind: "message", T: Reference },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Consent_Provision_ProvisionData {
    return new Consent_Provision_ProvisionData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Consent_Provision_ProvisionData {
    return new Consent_Provision_ProvisionData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Consent_Provision_ProvisionData {
    return new Consent_Provision_ProvisionData().fromJsonString(jsonString, options);
  }

  static equals(a: Consent_Provision_ProvisionData | PlainMessage<Consent_Provision_ProvisionData> | undefined, b: Consent_Provision_ProvisionData | PlainMessage<Consent_Provision_ProvisionData> | undefined): boolean {
    return proto3.util.equals(Consent_Provision_ProvisionData, a, b);
  }
}

/**
 * instance | related | dependents | authoredby
 *
 * @generated from message google.fhir.r4.core.Consent.Provision.ProvisionData.MeaningCode
 */
export class Consent_Provision_ProvisionData_MeaningCode extends Message<Consent_Provision_ProvisionData_MeaningCode> {
  /**
   * @generated from field: google.fhir.r4.core.ConsentDataMeaningCode.Value value = 1;
   */
  value = ConsentDataMeaningCode_Value.INVALID_UNINITIALIZED;

  /**
   * @generated from field: google.fhir.r4.core.String id = 2;
   */
  id?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 3;
   */
  extension: Extension[] = [];

  constructor(data?: PartialMessage<Consent_Provision_ProvisionData_MeaningCode>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.Consent.Provision.ProvisionData.MeaningCode";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "enum", T: proto3.getEnumType(ConsentDataMeaningCode_Value) },
    { no: 2, name: "id", kind: "message", T: String },
    { no: 3, name: "extension", kind: "message", T: Extension, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Consent_Provision_ProvisionData_MeaningCode {
    return new Consent_Provision_ProvisionData_MeaningCode().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Consent_Provision_ProvisionData_MeaningCode {
    return new Consent_Provision_ProvisionData_MeaningCode().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Consent_Provision_ProvisionData_MeaningCode {
    return new Consent_Provision_ProvisionData_MeaningCode().fromJsonString(jsonString, options);
  }

  static equals(a: Consent_Provision_ProvisionData_MeaningCode | PlainMessage<Consent_Provision_ProvisionData_MeaningCode> | undefined, b: Consent_Provision_ProvisionData_MeaningCode | PlainMessage<Consent_Provision_ProvisionData_MeaningCode> | undefined): boolean {
    return proto3.util.equals(Consent_Provision_ProvisionData_MeaningCode, a, b);
  }
}

