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
// @generated from file proto/google/fhir/proto/r4/core/resources/organization_affiliation.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Boolean, Code, CodeableConcept, ContactPoint, Extension, Id, Identifier, Meta, Narrative, Period, Reference, Uri } from "../datatypes_pb.js";

/**
 * Auto-generated from StructureDefinition for OrganizationAffiliation.
 * Defines an affiliation/assotiation/relationship between 2 distinct
 * oganizations, that is not a part-of relationship/sub-division relationship.
 * See http://hl7.org/fhir/StructureDefinition/OrganizationAffiliation
 *
 * @generated from message google.fhir.r4.core.OrganizationAffiliation
 */
export class OrganizationAffiliation extends Message<OrganizationAffiliation> {
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
   * Business identifiers that are specific to this role
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[] = [];

  /**
   * Whether this organization affiliation record is in active use
   *
   * @generated from field: google.fhir.r4.core.Boolean active = 11;
   */
  active?: Boolean;

  /**
   * The period during which the participatingOrganization is affiliated with
   * the primary organization
   *
   * @generated from field: google.fhir.r4.core.Period period = 12;
   */
  period?: Period;

  /**
   * Organization where the role is available
   *
   * @generated from field: google.fhir.r4.core.Reference organization = 13;
   */
  organization?: Reference;

  /**
   * Organization that provides/performs the role (e.g. providing services or is
   * a member of)
   *
   * @generated from field: google.fhir.r4.core.Reference participating_organization = 14;
   */
  participatingOrganization?: Reference;

  /**
   * Health insurance provider network in which the participatingOrganization
   * provides the role's services (if defined) at the indicated locations (if
   * defined)
   *
   * @generated from field: repeated google.fhir.r4.core.Reference network = 15;
   */
  network: Reference[] = [];

  /**
   * Definition of the role the participatingOrganization plays
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept code = 16;
   */
  code: CodeableConcept[] = [];

  /**
   * Specific specialty of the participatingOrganization in the context of the
   * role
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept specialty = 17;
   */
  specialty: CodeableConcept[] = [];

  /**
   * The location(s) at which the role occurs
   *
   * @generated from field: repeated google.fhir.r4.core.Reference location = 18;
   */
  location: Reference[] = [];

  /**
   * Healthcare services provided through the role
   *
   * @generated from field: repeated google.fhir.r4.core.Reference healthcare_service = 19;
   */
  healthcareService: Reference[] = [];

  /**
   * Contact details at the participatingOrganization relevant to this
   * Affiliation
   *
   * @generated from field: repeated google.fhir.r4.core.ContactPoint telecom = 20;
   */
  telecom: ContactPoint[] = [];

  /**
   * Technical endpoints providing access to services operated for this role
   *
   * @generated from field: repeated google.fhir.r4.core.Reference endpoint = 21;
   */
  endpoint: Reference[] = [];

  constructor(data?: PartialMessage<OrganizationAffiliation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.OrganizationAffiliation";
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
    { no: 13, name: "organization", kind: "message", T: Reference },
    { no: 14, name: "participating_organization", kind: "message", T: Reference },
    { no: 15, name: "network", kind: "message", T: Reference, repeated: true },
    { no: 16, name: "code", kind: "message", T: CodeableConcept, repeated: true },
    { no: 17, name: "specialty", kind: "message", T: CodeableConcept, repeated: true },
    { no: 18, name: "location", kind: "message", T: Reference, repeated: true },
    { no: 19, name: "healthcare_service", kind: "message", T: Reference, repeated: true },
    { no: 20, name: "telecom", kind: "message", T: ContactPoint, repeated: true },
    { no: 21, name: "endpoint", kind: "message", T: Reference, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrganizationAffiliation {
    return new OrganizationAffiliation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrganizationAffiliation {
    return new OrganizationAffiliation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrganizationAffiliation {
    return new OrganizationAffiliation().fromJsonString(jsonString, options);
  }

  static equals(a: OrganizationAffiliation | PlainMessage<OrganizationAffiliation> | undefined, b: OrganizationAffiliation | PlainMessage<OrganizationAffiliation> | undefined): boolean {
    return proto3.util.equals(OrganizationAffiliation, a, b);
  }
}

