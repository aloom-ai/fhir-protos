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
// @generated from file proto/google/fhir/proto/r4/core/resources/event_definition.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Boolean, Code, CodeableConcept, ContactDetail, Date, DateTime, Extension, Id, Identifier, Markdown, Meta, Narrative, Period, Reference, RelatedArtifact, String, TriggerDefinition, Uri, UsageContext } from "../datatypes_pb.js";
import { PublicationStatusCode_Value } from "../codes_pb.js";

/**
 * Auto-generated from StructureDefinition for EventDefinition.
 * A description of when an event can occur.
 * See http://hl7.org/fhir/StructureDefinition/EventDefinition
 *
 * @generated from message google.fhir.r4.core.EventDefinition
 */
export class EventDefinition extends Message<EventDefinition> {
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
   * Canonical identifier for this event definition, represented as a URI
   * (globally unique)
   *
   * @generated from field: google.fhir.r4.core.Uri url = 10;
   */
  url?: Uri;

  /**
   * Additional identifier for the event definition
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 11;
   */
  identifier: Identifier[] = [];

  /**
   * Business version of the event definition
   *
   * @generated from field: google.fhir.r4.core.String version = 12;
   */
  version?: String;

  /**
   * Name for this event definition (computer friendly)
   *
   * @generated from field: google.fhir.r4.core.String name = 13;
   */
  name?: String;

  /**
   * Name for this event definition (human friendly)
   *
   * @generated from field: google.fhir.r4.core.String title = 14;
   */
  title?: String;

  /**
   * Subordinate title of the event definition
   *
   * @generated from field: google.fhir.r4.core.String subtitle = 15;
   */
  subtitle?: String;

  /**
   * @generated from field: google.fhir.r4.core.EventDefinition.StatusCode status = 16;
   */
  status?: EventDefinition_StatusCode;

  /**
   * For testing purposes, not real usage
   *
   * @generated from field: google.fhir.r4.core.Boolean experimental = 17;
   */
  experimental?: Boolean;

  /**
   * @generated from field: google.fhir.r4.core.EventDefinition.SubjectX subject = 18;
   */
  subject?: EventDefinition_SubjectX;

  /**
   * Date last changed
   *
   * @generated from field: google.fhir.r4.core.DateTime date = 19;
   */
  date?: DateTime;

  /**
   * Name of the publisher (organization or individual)
   *
   * @generated from field: google.fhir.r4.core.String publisher = 20;
   */
  publisher?: String;

  /**
   * Contact details for the publisher
   *
   * @generated from field: repeated google.fhir.r4.core.ContactDetail contact = 21;
   */
  contact: ContactDetail[] = [];

  /**
   * Natural language description of the event definition
   *
   * @generated from field: google.fhir.r4.core.Markdown description = 22;
   */
  description?: Markdown;

  /**
   * The context that the content is intended to support
   *
   * @generated from field: repeated google.fhir.r4.core.UsageContext use_context = 23;
   */
  useContext: UsageContext[] = [];

  /**
   * Intended jurisdiction for event definition (if applicable)
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept jurisdiction = 24;
   */
  jurisdiction: CodeableConcept[] = [];

  /**
   * Why this event definition is defined
   *
   * @generated from field: google.fhir.r4.core.Markdown purpose = 25;
   */
  purpose?: Markdown;

  /**
   * Describes the clinical usage of the event definition
   *
   * @generated from field: google.fhir.r4.core.String usage = 26;
   */
  usage?: String;

  /**
   * Use and/or publishing restrictions
   *
   * @generated from field: google.fhir.r4.core.Markdown copyright = 27;
   */
  copyright?: Markdown;

  /**
   * When the event definition was approved by publisher
   *
   * @generated from field: google.fhir.r4.core.Date approval_date = 28;
   */
  approvalDate?: Date;

  /**
   * When the event definition was last reviewed
   *
   * @generated from field: google.fhir.r4.core.Date last_review_date = 29;
   */
  lastReviewDate?: Date;

  /**
   * When the event definition is expected to be used
   *
   * @generated from field: google.fhir.r4.core.Period effective_period = 30;
   */
  effectivePeriod?: Period;

  /**
   * E.g. Education, Treatment, Assessment, etc.
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept topic = 31;
   */
  topic: CodeableConcept[] = [];

  /**
   * Who authored the content
   *
   * @generated from field: repeated google.fhir.r4.core.ContactDetail author = 32;
   */
  author: ContactDetail[] = [];

  /**
   * Who edited the content
   *
   * @generated from field: repeated google.fhir.r4.core.ContactDetail editor = 33;
   */
  editor: ContactDetail[] = [];

  /**
   * Who reviewed the content
   *
   * @generated from field: repeated google.fhir.r4.core.ContactDetail reviewer = 34;
   */
  reviewer: ContactDetail[] = [];

  /**
   * Who endorsed the content
   *
   * @generated from field: repeated google.fhir.r4.core.ContactDetail endorser = 35;
   */
  endorser: ContactDetail[] = [];

  /**
   * Additional documentation, citations, etc.
   *
   * @generated from field: repeated google.fhir.r4.core.RelatedArtifact related_artifact = 36;
   */
  relatedArtifact: RelatedArtifact[] = [];

  /**
   * "when" the event occurs (multiple = 'or')
   *
   * @generated from field: repeated google.fhir.r4.core.TriggerDefinition trigger = 37;
   */
  trigger: TriggerDefinition[] = [];

  constructor(data?: PartialMessage<EventDefinition>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.EventDefinition";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: Id },
    { no: 2, name: "meta", kind: "message", T: Meta },
    { no: 3, name: "implicit_rules", kind: "message", T: Uri },
    { no: 4, name: "language", kind: "message", T: Code },
    { no: 5, name: "text", kind: "message", T: Narrative },
    { no: 6, name: "contained", kind: "message", T: Any, repeated: true },
    { no: 8, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 9, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 10, name: "url", kind: "message", T: Uri },
    { no: 11, name: "identifier", kind: "message", T: Identifier, repeated: true },
    { no: 12, name: "version", kind: "message", T: String },
    { no: 13, name: "name", kind: "message", T: String },
    { no: 14, name: "title", kind: "message", T: String },
    { no: 15, name: "subtitle", kind: "message", T: String },
    { no: 16, name: "status", kind: "message", T: EventDefinition_StatusCode },
    { no: 17, name: "experimental", kind: "message", T: Boolean },
    { no: 18, name: "subject", kind: "message", T: EventDefinition_SubjectX },
    { no: 19, name: "date", kind: "message", T: DateTime },
    { no: 20, name: "publisher", kind: "message", T: String },
    { no: 21, name: "contact", kind: "message", T: ContactDetail, repeated: true },
    { no: 22, name: "description", kind: "message", T: Markdown },
    { no: 23, name: "use_context", kind: "message", T: UsageContext, repeated: true },
    { no: 24, name: "jurisdiction", kind: "message", T: CodeableConcept, repeated: true },
    { no: 25, name: "purpose", kind: "message", T: Markdown },
    { no: 26, name: "usage", kind: "message", T: String },
    { no: 27, name: "copyright", kind: "message", T: Markdown },
    { no: 28, name: "approval_date", kind: "message", T: Date },
    { no: 29, name: "last_review_date", kind: "message", T: Date },
    { no: 30, name: "effective_period", kind: "message", T: Period },
    { no: 31, name: "topic", kind: "message", T: CodeableConcept, repeated: true },
    { no: 32, name: "author", kind: "message", T: ContactDetail, repeated: true },
    { no: 33, name: "editor", kind: "message", T: ContactDetail, repeated: true },
    { no: 34, name: "reviewer", kind: "message", T: ContactDetail, repeated: true },
    { no: 35, name: "endorser", kind: "message", T: ContactDetail, repeated: true },
    { no: 36, name: "related_artifact", kind: "message", T: RelatedArtifact, repeated: true },
    { no: 37, name: "trigger", kind: "message", T: TriggerDefinition, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventDefinition {
    return new EventDefinition().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventDefinition {
    return new EventDefinition().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventDefinition {
    return new EventDefinition().fromJsonString(jsonString, options);
  }

  static equals(a: EventDefinition | PlainMessage<EventDefinition> | undefined, b: EventDefinition | PlainMessage<EventDefinition> | undefined): boolean {
    return proto3.util.equals(EventDefinition, a, b);
  }
}

/**
 * draft | active | retired | unknown
 *
 * @generated from message google.fhir.r4.core.EventDefinition.StatusCode
 */
export class EventDefinition_StatusCode extends Message<EventDefinition_StatusCode> {
  /**
   * @generated from field: google.fhir.r4.core.PublicationStatusCode.Value value = 1;
   */
  value = PublicationStatusCode_Value.INVALID_UNINITIALIZED;

  /**
   * @generated from field: google.fhir.r4.core.String id = 2;
   */
  id?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 3;
   */
  extension: Extension[] = [];

  constructor(data?: PartialMessage<EventDefinition_StatusCode>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.EventDefinition.StatusCode";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "enum", T: proto3.getEnumType(PublicationStatusCode_Value) },
    { no: 2, name: "id", kind: "message", T: String },
    { no: 3, name: "extension", kind: "message", T: Extension, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventDefinition_StatusCode {
    return new EventDefinition_StatusCode().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventDefinition_StatusCode {
    return new EventDefinition_StatusCode().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventDefinition_StatusCode {
    return new EventDefinition_StatusCode().fromJsonString(jsonString, options);
  }

  static equals(a: EventDefinition_StatusCode | PlainMessage<EventDefinition_StatusCode> | undefined, b: EventDefinition_StatusCode | PlainMessage<EventDefinition_StatusCode> | undefined): boolean {
    return proto3.util.equals(EventDefinition_StatusCode, a, b);
  }
}

/**
 * Type of individual the event definition is focused on
 *
 * @generated from message google.fhir.r4.core.EventDefinition.SubjectX
 */
export class EventDefinition_SubjectX extends Message<EventDefinition_SubjectX> {
  /**
   * @generated from oneof google.fhir.r4.core.EventDefinition.SubjectX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.CodeableConcept codeable_concept = 1;
     */
    value: CodeableConcept;
    case: "codeableConcept";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Reference reference = 2;
     */
    value: Reference;
    case: "reference";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<EventDefinition_SubjectX>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.EventDefinition.SubjectX";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "codeable_concept", kind: "message", T: CodeableConcept, oneof: "choice" },
    { no: 2, name: "reference", kind: "message", T: Reference, oneof: "choice" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventDefinition_SubjectX {
    return new EventDefinition_SubjectX().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventDefinition_SubjectX {
    return new EventDefinition_SubjectX().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventDefinition_SubjectX {
    return new EventDefinition_SubjectX().fromJsonString(jsonString, options);
  }

  static equals(a: EventDefinition_SubjectX | PlainMessage<EventDefinition_SubjectX> | undefined, b: EventDefinition_SubjectX | PlainMessage<EventDefinition_SubjectX> | undefined): boolean {
    return proto3.util.equals(EventDefinition_SubjectX, a, b);
  }
}

