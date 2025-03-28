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
// @generated from file proto/google/fhir/proto/r4/core/resources/audit_event.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Base64Binary, Boolean, Code, CodeableConcept, Coding, Extension, Id, Instant, Meta, Narrative, Period, Reference, String, Uri } from "../datatypes_pb.js";
import { AuditEventActionCode_Value, AuditEventAgentNetworkTypeCode_Value, AuditEventOutcomeCode_Value } from "../codes_pb.js";

/**
 * Auto-generated from StructureDefinition for AuditEvent.
 * Event record kept for security purposes.
 * See http://hl7.org/fhir/StructureDefinition/AuditEvent
 *
 * @generated from message google.fhir.r4.core.AuditEvent
 */
export class AuditEvent extends Message<AuditEvent> {
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
   * Type/identifier of event
   *
   * @generated from field: google.fhir.r4.core.Coding type = 10;
   */
  type?: Coding;

  /**
   * More specific type/id for the event
   *
   * @generated from field: repeated google.fhir.r4.core.Coding subtype = 11;
   */
  subtype: Coding[] = [];

  /**
   * @generated from field: google.fhir.r4.core.AuditEvent.ActionCode action = 12;
   */
  action?: AuditEvent_ActionCode;

  /**
   * When the activity occurred
   *
   * @generated from field: google.fhir.r4.core.Period period = 13;
   */
  period?: Period;

  /**
   * Time when the event was recorded
   *
   * @generated from field: google.fhir.r4.core.Instant recorded = 14;
   */
  recorded?: Instant;

  /**
   * @generated from field: google.fhir.r4.core.AuditEvent.OutcomeCode outcome = 15;
   */
  outcome?: AuditEvent_OutcomeCode;

  /**
   * Description of the event outcome
   *
   * @generated from field: google.fhir.r4.core.String outcome_desc = 16;
   */
  outcomeDesc?: String;

  /**
   * The purposeOfUse of the event
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept purpose_of_event = 17;
   */
  purposeOfEvent: CodeableConcept[] = [];

  /**
   * @generated from field: repeated google.fhir.r4.core.AuditEvent.Agent agent = 18;
   */
  agent: AuditEvent_Agent[] = [];

  /**
   * @generated from field: google.fhir.r4.core.AuditEvent.Source source = 19;
   */
  source?: AuditEvent_Source;

  /**
   * @generated from field: repeated google.fhir.r4.core.AuditEvent.Entity entity = 20;
   */
  entity: AuditEvent_Entity[] = [];

  constructor(data?: PartialMessage<AuditEvent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.AuditEvent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: Id },
    { no: 2, name: "meta", kind: "message", T: Meta },
    { no: 3, name: "implicit_rules", kind: "message", T: Uri },
    { no: 4, name: "language", kind: "message", T: Code },
    { no: 5, name: "text", kind: "message", T: Narrative },
    { no: 6, name: "contained", kind: "message", T: Any, repeated: true },
    { no: 8, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 9, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 10, name: "type", kind: "message", T: Coding },
    { no: 11, name: "subtype", kind: "message", T: Coding, repeated: true },
    { no: 12, name: "action", kind: "message", T: AuditEvent_ActionCode },
    { no: 13, name: "period", kind: "message", T: Period },
    { no: 14, name: "recorded", kind: "message", T: Instant },
    { no: 15, name: "outcome", kind: "message", T: AuditEvent_OutcomeCode },
    { no: 16, name: "outcome_desc", kind: "message", T: String },
    { no: 17, name: "purpose_of_event", kind: "message", T: CodeableConcept, repeated: true },
    { no: 18, name: "agent", kind: "message", T: AuditEvent_Agent, repeated: true },
    { no: 19, name: "source", kind: "message", T: AuditEvent_Source },
    { no: 20, name: "entity", kind: "message", T: AuditEvent_Entity, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditEvent {
    return new AuditEvent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditEvent {
    return new AuditEvent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditEvent {
    return new AuditEvent().fromJsonString(jsonString, options);
  }

  static equals(a: AuditEvent | PlainMessage<AuditEvent> | undefined, b: AuditEvent | PlainMessage<AuditEvent> | undefined): boolean {
    return proto3.util.equals(AuditEvent, a, b);
  }
}

/**
 * Type of action performed during the event
 *
 * @generated from message google.fhir.r4.core.AuditEvent.ActionCode
 */
export class AuditEvent_ActionCode extends Message<AuditEvent_ActionCode> {
  /**
   * @generated from field: google.fhir.r4.core.AuditEventActionCode.Value value = 1;
   */
  value = AuditEventActionCode_Value.INVALID_UNINITIALIZED;

  /**
   * @generated from field: google.fhir.r4.core.String id = 2;
   */
  id?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 3;
   */
  extension: Extension[] = [];

  constructor(data?: PartialMessage<AuditEvent_ActionCode>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.AuditEvent.ActionCode";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "enum", T: proto3.getEnumType(AuditEventActionCode_Value) },
    { no: 2, name: "id", kind: "message", T: String },
    { no: 3, name: "extension", kind: "message", T: Extension, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditEvent_ActionCode {
    return new AuditEvent_ActionCode().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditEvent_ActionCode {
    return new AuditEvent_ActionCode().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditEvent_ActionCode {
    return new AuditEvent_ActionCode().fromJsonString(jsonString, options);
  }

  static equals(a: AuditEvent_ActionCode | PlainMessage<AuditEvent_ActionCode> | undefined, b: AuditEvent_ActionCode | PlainMessage<AuditEvent_ActionCode> | undefined): boolean {
    return proto3.util.equals(AuditEvent_ActionCode, a, b);
  }
}

/**
 * Whether the event succeeded or failed
 *
 * @generated from message google.fhir.r4.core.AuditEvent.OutcomeCode
 */
export class AuditEvent_OutcomeCode extends Message<AuditEvent_OutcomeCode> {
  /**
   * @generated from field: google.fhir.r4.core.AuditEventOutcomeCode.Value value = 1;
   */
  value = AuditEventOutcomeCode_Value.INVALID_UNINITIALIZED;

  /**
   * @generated from field: google.fhir.r4.core.String id = 2;
   */
  id?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 3;
   */
  extension: Extension[] = [];

  constructor(data?: PartialMessage<AuditEvent_OutcomeCode>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.AuditEvent.OutcomeCode";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "enum", T: proto3.getEnumType(AuditEventOutcomeCode_Value) },
    { no: 2, name: "id", kind: "message", T: String },
    { no: 3, name: "extension", kind: "message", T: Extension, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditEvent_OutcomeCode {
    return new AuditEvent_OutcomeCode().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditEvent_OutcomeCode {
    return new AuditEvent_OutcomeCode().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditEvent_OutcomeCode {
    return new AuditEvent_OutcomeCode().fromJsonString(jsonString, options);
  }

  static equals(a: AuditEvent_OutcomeCode | PlainMessage<AuditEvent_OutcomeCode> | undefined, b: AuditEvent_OutcomeCode | PlainMessage<AuditEvent_OutcomeCode> | undefined): boolean {
    return proto3.util.equals(AuditEvent_OutcomeCode, a, b);
  }
}

/**
 * Actor involved in the event
 *
 * @generated from message google.fhir.r4.core.AuditEvent.Agent
 */
export class AuditEvent_Agent extends Message<AuditEvent_Agent> {
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
   * How agent participated
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 4;
   */
  type?: CodeableConcept;

  /**
   * Agent role in the event
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept role = 5;
   */
  role: CodeableConcept[] = [];

  /**
   * Identifier of who
   *
   * @generated from field: google.fhir.r4.core.Reference who = 6;
   */
  who?: Reference;

  /**
   * Alternative User identity
   *
   * @generated from field: google.fhir.r4.core.String alt_id = 7;
   */
  altId?: String;

  /**
   * Human friendly name for the agent
   *
   * @generated from field: google.fhir.r4.core.String name = 8;
   */
  name?: String;

  /**
   * Whether user is initiator
   *
   * @generated from field: google.fhir.r4.core.Boolean requestor = 9;
   */
  requestor?: Boolean;

  /**
   * Where
   *
   * @generated from field: google.fhir.r4.core.Reference location = 10;
   */
  location?: Reference;

  /**
   * Policy that authorized event
   *
   * @generated from field: repeated google.fhir.r4.core.Uri policy = 11;
   */
  policy: Uri[] = [];

  /**
   * Type of media
   *
   * @generated from field: google.fhir.r4.core.Coding media = 12;
   */
  media?: Coding;

  /**
   * @generated from field: google.fhir.r4.core.AuditEvent.Agent.Network network = 13;
   */
  network?: AuditEvent_Agent_Network;

  /**
   * Reason given for this user
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept purpose_of_use = 14;
   */
  purposeOfUse: CodeableConcept[] = [];

  constructor(data?: PartialMessage<AuditEvent_Agent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.AuditEvent.Agent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 3, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "type", kind: "message", T: CodeableConcept },
    { no: 5, name: "role", kind: "message", T: CodeableConcept, repeated: true },
    { no: 6, name: "who", kind: "message", T: Reference },
    { no: 7, name: "alt_id", kind: "message", T: String },
    { no: 8, name: "name", kind: "message", T: String },
    { no: 9, name: "requestor", kind: "message", T: Boolean },
    { no: 10, name: "location", kind: "message", T: Reference },
    { no: 11, name: "policy", kind: "message", T: Uri, repeated: true },
    { no: 12, name: "media", kind: "message", T: Coding },
    { no: 13, name: "network", kind: "message", T: AuditEvent_Agent_Network },
    { no: 14, name: "purpose_of_use", kind: "message", T: CodeableConcept, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditEvent_Agent {
    return new AuditEvent_Agent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditEvent_Agent {
    return new AuditEvent_Agent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditEvent_Agent {
    return new AuditEvent_Agent().fromJsonString(jsonString, options);
  }

  static equals(a: AuditEvent_Agent | PlainMessage<AuditEvent_Agent> | undefined, b: AuditEvent_Agent | PlainMessage<AuditEvent_Agent> | undefined): boolean {
    return proto3.util.equals(AuditEvent_Agent, a, b);
  }
}

/**
 * Logical network location for application activity
 *
 * @generated from message google.fhir.r4.core.AuditEvent.Agent.Network
 */
export class AuditEvent_Agent_Network extends Message<AuditEvent_Agent_Network> {
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
   * Identifier for the network access point of the user device
   *
   * @generated from field: google.fhir.r4.core.String address = 4;
   */
  address?: String;

  /**
   * @generated from field: google.fhir.r4.core.AuditEvent.Agent.Network.TypeCode type = 5;
   */
  type?: AuditEvent_Agent_Network_TypeCode;

  constructor(data?: PartialMessage<AuditEvent_Agent_Network>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.AuditEvent.Agent.Network";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 3, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "address", kind: "message", T: String },
    { no: 5, name: "type", kind: "message", T: AuditEvent_Agent_Network_TypeCode },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditEvent_Agent_Network {
    return new AuditEvent_Agent_Network().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditEvent_Agent_Network {
    return new AuditEvent_Agent_Network().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditEvent_Agent_Network {
    return new AuditEvent_Agent_Network().fromJsonString(jsonString, options);
  }

  static equals(a: AuditEvent_Agent_Network | PlainMessage<AuditEvent_Agent_Network> | undefined, b: AuditEvent_Agent_Network | PlainMessage<AuditEvent_Agent_Network> | undefined): boolean {
    return proto3.util.equals(AuditEvent_Agent_Network, a, b);
  }
}

/**
 * The type of network access point
 *
 * @generated from message google.fhir.r4.core.AuditEvent.Agent.Network.TypeCode
 */
export class AuditEvent_Agent_Network_TypeCode extends Message<AuditEvent_Agent_Network_TypeCode> {
  /**
   * @generated from field: google.fhir.r4.core.AuditEventAgentNetworkTypeCode.Value value = 1;
   */
  value = AuditEventAgentNetworkTypeCode_Value.INVALID_UNINITIALIZED;

  /**
   * @generated from field: google.fhir.r4.core.String id = 2;
   */
  id?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 3;
   */
  extension: Extension[] = [];

  constructor(data?: PartialMessage<AuditEvent_Agent_Network_TypeCode>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.AuditEvent.Agent.Network.TypeCode";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "enum", T: proto3.getEnumType(AuditEventAgentNetworkTypeCode_Value) },
    { no: 2, name: "id", kind: "message", T: String },
    { no: 3, name: "extension", kind: "message", T: Extension, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditEvent_Agent_Network_TypeCode {
    return new AuditEvent_Agent_Network_TypeCode().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditEvent_Agent_Network_TypeCode {
    return new AuditEvent_Agent_Network_TypeCode().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditEvent_Agent_Network_TypeCode {
    return new AuditEvent_Agent_Network_TypeCode().fromJsonString(jsonString, options);
  }

  static equals(a: AuditEvent_Agent_Network_TypeCode | PlainMessage<AuditEvent_Agent_Network_TypeCode> | undefined, b: AuditEvent_Agent_Network_TypeCode | PlainMessage<AuditEvent_Agent_Network_TypeCode> | undefined): boolean {
    return proto3.util.equals(AuditEvent_Agent_Network_TypeCode, a, b);
  }
}

/**
 * Audit Event Reporter
 *
 * @generated from message google.fhir.r4.core.AuditEvent.Source
 */
export class AuditEvent_Source extends Message<AuditEvent_Source> {
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
   * Logical source location within the enterprise
   *
   * @generated from field: google.fhir.r4.core.String site = 4;
   */
  site?: String;

  /**
   * The identity of source detecting the event
   *
   * @generated from field: google.fhir.r4.core.Reference observer = 5;
   */
  observer?: Reference;

  /**
   * The type of source where event originated
   *
   * @generated from field: repeated google.fhir.r4.core.Coding type = 6;
   */
  type: Coding[] = [];

  constructor(data?: PartialMessage<AuditEvent_Source>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.AuditEvent.Source";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 3, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "site", kind: "message", T: String },
    { no: 5, name: "observer", kind: "message", T: Reference },
    { no: 6, name: "type", kind: "message", T: Coding, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditEvent_Source {
    return new AuditEvent_Source().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditEvent_Source {
    return new AuditEvent_Source().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditEvent_Source {
    return new AuditEvent_Source().fromJsonString(jsonString, options);
  }

  static equals(a: AuditEvent_Source | PlainMessage<AuditEvent_Source> | undefined, b: AuditEvent_Source | PlainMessage<AuditEvent_Source> | undefined): boolean {
    return proto3.util.equals(AuditEvent_Source, a, b);
  }
}

/**
 * Data or objects used
 *
 * @generated from message google.fhir.r4.core.AuditEvent.Entity
 */
export class AuditEvent_Entity extends Message<AuditEvent_Entity> {
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
   * Specific instance of resource
   *
   * @generated from field: google.fhir.r4.core.Reference what = 4;
   */
  what?: Reference;

  /**
   * Type of entity involved
   *
   * @generated from field: google.fhir.r4.core.Coding type = 5;
   */
  type?: Coding;

  /**
   * What role the entity played
   *
   * @generated from field: google.fhir.r4.core.Coding role = 6;
   */
  role?: Coding;

  /**
   * Life-cycle stage for the entity
   *
   * @generated from field: google.fhir.r4.core.Coding lifecycle = 7;
   */
  lifecycle?: Coding;

  /**
   * Security labels on the entity
   *
   * @generated from field: repeated google.fhir.r4.core.Coding security_label = 8;
   */
  securityLabel: Coding[] = [];

  /**
   * Descriptor for entity
   *
   * @generated from field: google.fhir.r4.core.String name = 9;
   */
  name?: String;

  /**
   * Descriptive text
   *
   * @generated from field: google.fhir.r4.core.String description = 10;
   */
  description?: String;

  /**
   * Query parameters
   *
   * @generated from field: google.fhir.r4.core.Base64Binary query = 11;
   */
  query?: Base64Binary;

  /**
   * @generated from field: repeated google.fhir.r4.core.AuditEvent.Entity.Detail detail = 12;
   */
  detail: AuditEvent_Entity_Detail[] = [];

  constructor(data?: PartialMessage<AuditEvent_Entity>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.AuditEvent.Entity";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 3, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "what", kind: "message", T: Reference },
    { no: 5, name: "type", kind: "message", T: Coding },
    { no: 6, name: "role", kind: "message", T: Coding },
    { no: 7, name: "lifecycle", kind: "message", T: Coding },
    { no: 8, name: "security_label", kind: "message", T: Coding, repeated: true },
    { no: 9, name: "name", kind: "message", T: String },
    { no: 10, name: "description", kind: "message", T: String },
    { no: 11, name: "query", kind: "message", T: Base64Binary },
    { no: 12, name: "detail", kind: "message", T: AuditEvent_Entity_Detail, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditEvent_Entity {
    return new AuditEvent_Entity().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditEvent_Entity {
    return new AuditEvent_Entity().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditEvent_Entity {
    return new AuditEvent_Entity().fromJsonString(jsonString, options);
  }

  static equals(a: AuditEvent_Entity | PlainMessage<AuditEvent_Entity> | undefined, b: AuditEvent_Entity | PlainMessage<AuditEvent_Entity> | undefined): boolean {
    return proto3.util.equals(AuditEvent_Entity, a, b);
  }
}

/**
 * Additional Information about the entity
 *
 * @generated from message google.fhir.r4.core.AuditEvent.Entity.Detail
 */
export class AuditEvent_Entity_Detail extends Message<AuditEvent_Entity_Detail> {
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
   * Name of the property
   *
   * @generated from field: google.fhir.r4.core.String type = 4;
   */
  type?: String;

  /**
   * @generated from field: google.fhir.r4.core.AuditEvent.Entity.Detail.ValueX value = 5;
   */
  value?: AuditEvent_Entity_Detail_ValueX;

  constructor(data?: PartialMessage<AuditEvent_Entity_Detail>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.AuditEvent.Entity.Detail";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 3, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "type", kind: "message", T: String },
    { no: 5, name: "value", kind: "message", T: AuditEvent_Entity_Detail_ValueX },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditEvent_Entity_Detail {
    return new AuditEvent_Entity_Detail().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditEvent_Entity_Detail {
    return new AuditEvent_Entity_Detail().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditEvent_Entity_Detail {
    return new AuditEvent_Entity_Detail().fromJsonString(jsonString, options);
  }

  static equals(a: AuditEvent_Entity_Detail | PlainMessage<AuditEvent_Entity_Detail> | undefined, b: AuditEvent_Entity_Detail | PlainMessage<AuditEvent_Entity_Detail> | undefined): boolean {
    return proto3.util.equals(AuditEvent_Entity_Detail, a, b);
  }
}

/**
 * Property value
 *
 * @generated from message google.fhir.r4.core.AuditEvent.Entity.Detail.ValueX
 */
export class AuditEvent_Entity_Detail_ValueX extends Message<AuditEvent_Entity_Detail_ValueX> {
  /**
   * @generated from oneof google.fhir.r4.core.AuditEvent.Entity.Detail.ValueX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.String string_value = 1 [json_name = "string"];
     */
    value: String;
    case: "stringValue";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Base64Binary base64_binary = 2;
     */
    value: Base64Binary;
    case: "base64Binary";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<AuditEvent_Entity_Detail_ValueX>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.AuditEvent.Entity.Detail.ValueX";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "string_value", jsonName: "string", kind: "message", T: String, oneof: "choice" },
    { no: 2, name: "base64_binary", kind: "message", T: Base64Binary, oneof: "choice" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditEvent_Entity_Detail_ValueX {
    return new AuditEvent_Entity_Detail_ValueX().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditEvent_Entity_Detail_ValueX {
    return new AuditEvent_Entity_Detail_ValueX().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditEvent_Entity_Detail_ValueX {
    return new AuditEvent_Entity_Detail_ValueX().fromJsonString(jsonString, options);
  }

  static equals(a: AuditEvent_Entity_Detail_ValueX | PlainMessage<AuditEvent_Entity_Detail_ValueX> | undefined, b: AuditEvent_Entity_Detail_ValueX | PlainMessage<AuditEvent_Entity_Detail_ValueX> | undefined): boolean {
    return proto3.util.equals(AuditEvent_Entity_Detail_ValueX, a, b);
  }
}

