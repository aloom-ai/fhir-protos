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
// @generated from file proto/google/fhir/proto/r4/core/resources/imaging_study.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Annotation, Code, CodeableConcept, Coding, DateTime, Extension, Id, Identifier, Meta, Narrative, Reference, String, UnsignedInt, Uri } from "../datatypes_pb.js";
import { ImagingStudyStatusCode_Value } from "../codes_pb.js";

/**
 * Auto-generated from StructureDefinition for ImagingStudy.
 * A set of images produced in single study (one or more series of references
 * images). See http://hl7.org/fhir/StructureDefinition/ImagingStudy
 *
 * @generated from message google.fhir.r4.core.ImagingStudy
 */
export class ImagingStudy extends Message<ImagingStudy> {
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
   * Identifiers for the whole study
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[] = [];

  /**
   * @generated from field: google.fhir.r4.core.ImagingStudy.StatusCode status = 11;
   */
  status?: ImagingStudy_StatusCode;

  /**
   * All series modality if actual acquisition modalities
   *
   * @generated from field: repeated google.fhir.r4.core.Coding modality = 12;
   */
  modality: Coding[] = [];

  /**
   * Who or what is the subject of the study
   *
   * @generated from field: google.fhir.r4.core.Reference subject = 13;
   */
  subject?: Reference;

  /**
   * Encounter with which this imaging study is associated
   *
   * @generated from field: google.fhir.r4.core.Reference encounter = 14;
   */
  encounter?: Reference;

  /**
   * When the study was started
   *
   * @generated from field: google.fhir.r4.core.DateTime started = 15;
   */
  started?: DateTime;

  /**
   * Request fulfilled
   *
   * @generated from field: repeated google.fhir.r4.core.Reference based_on = 16;
   */
  basedOn: Reference[] = [];

  /**
   * Referring physician
   *
   * @generated from field: google.fhir.r4.core.Reference referrer = 17;
   */
  referrer?: Reference;

  /**
   * Who interpreted images
   *
   * @generated from field: repeated google.fhir.r4.core.Reference interpreter = 18;
   */
  interpreter: Reference[] = [];

  /**
   * Study access endpoint
   *
   * @generated from field: repeated google.fhir.r4.core.Reference endpoint = 19;
   */
  endpoint: Reference[] = [];

  /**
   * Number of Study Related Series
   *
   * @generated from field: google.fhir.r4.core.UnsignedInt number_of_series = 20;
   */
  numberOfSeries?: UnsignedInt;

  /**
   * Number of Study Related Instances
   *
   * @generated from field: google.fhir.r4.core.UnsignedInt number_of_instances = 21;
   */
  numberOfInstances?: UnsignedInt;

  /**
   * The performed Procedure reference
   *
   * @generated from field: google.fhir.r4.core.Reference procedure_reference = 22;
   */
  procedureReference?: Reference;

  /**
   * The performed procedure code
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept procedure_code = 23;
   */
  procedureCode: CodeableConcept[] = [];

  /**
   * Where ImagingStudy occurred
   *
   * @generated from field: google.fhir.r4.core.Reference location = 24;
   */
  location?: Reference;

  /**
   * Why the study was requested
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept reason_code = 25;
   */
  reasonCode: CodeableConcept[] = [];

  /**
   * Why was study performed
   *
   * @generated from field: repeated google.fhir.r4.core.Reference reason_reference = 26;
   */
  reasonReference: Reference[] = [];

  /**
   * User-defined comments
   *
   * @generated from field: repeated google.fhir.r4.core.Annotation note = 27;
   */
  note: Annotation[] = [];

  /**
   * Institution-generated description
   *
   * @generated from field: google.fhir.r4.core.String description = 28;
   */
  description?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.ImagingStudy.Series series = 29;
   */
  series: ImagingStudy_Series[] = [];

  constructor(data?: PartialMessage<ImagingStudy>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.ImagingStudy";
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
    { no: 11, name: "status", kind: "message", T: ImagingStudy_StatusCode },
    { no: 12, name: "modality", kind: "message", T: Coding, repeated: true },
    { no: 13, name: "subject", kind: "message", T: Reference },
    { no: 14, name: "encounter", kind: "message", T: Reference },
    { no: 15, name: "started", kind: "message", T: DateTime },
    { no: 16, name: "based_on", kind: "message", T: Reference, repeated: true },
    { no: 17, name: "referrer", kind: "message", T: Reference },
    { no: 18, name: "interpreter", kind: "message", T: Reference, repeated: true },
    { no: 19, name: "endpoint", kind: "message", T: Reference, repeated: true },
    { no: 20, name: "number_of_series", kind: "message", T: UnsignedInt },
    { no: 21, name: "number_of_instances", kind: "message", T: UnsignedInt },
    { no: 22, name: "procedure_reference", kind: "message", T: Reference },
    { no: 23, name: "procedure_code", kind: "message", T: CodeableConcept, repeated: true },
    { no: 24, name: "location", kind: "message", T: Reference },
    { no: 25, name: "reason_code", kind: "message", T: CodeableConcept, repeated: true },
    { no: 26, name: "reason_reference", kind: "message", T: Reference, repeated: true },
    { no: 27, name: "note", kind: "message", T: Annotation, repeated: true },
    { no: 28, name: "description", kind: "message", T: String },
    { no: 29, name: "series", kind: "message", T: ImagingStudy_Series, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImagingStudy {
    return new ImagingStudy().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImagingStudy {
    return new ImagingStudy().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImagingStudy {
    return new ImagingStudy().fromJsonString(jsonString, options);
  }

  static equals(a: ImagingStudy | PlainMessage<ImagingStudy> | undefined, b: ImagingStudy | PlainMessage<ImagingStudy> | undefined): boolean {
    return proto3.util.equals(ImagingStudy, a, b);
  }
}

/**
 * registered | available | cancelled | entered-in-error | unknown
 *
 * @generated from message google.fhir.r4.core.ImagingStudy.StatusCode
 */
export class ImagingStudy_StatusCode extends Message<ImagingStudy_StatusCode> {
  /**
   * @generated from field: google.fhir.r4.core.ImagingStudyStatusCode.Value value = 1;
   */
  value = ImagingStudyStatusCode_Value.INVALID_UNINITIALIZED;

  /**
   * @generated from field: google.fhir.r4.core.String id = 2;
   */
  id?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 3;
   */
  extension: Extension[] = [];

  constructor(data?: PartialMessage<ImagingStudy_StatusCode>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.ImagingStudy.StatusCode";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "enum", T: proto3.getEnumType(ImagingStudyStatusCode_Value) },
    { no: 2, name: "id", kind: "message", T: String },
    { no: 3, name: "extension", kind: "message", T: Extension, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImagingStudy_StatusCode {
    return new ImagingStudy_StatusCode().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImagingStudy_StatusCode {
    return new ImagingStudy_StatusCode().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImagingStudy_StatusCode {
    return new ImagingStudy_StatusCode().fromJsonString(jsonString, options);
  }

  static equals(a: ImagingStudy_StatusCode | PlainMessage<ImagingStudy_StatusCode> | undefined, b: ImagingStudy_StatusCode | PlainMessage<ImagingStudy_StatusCode> | undefined): boolean {
    return proto3.util.equals(ImagingStudy_StatusCode, a, b);
  }
}

/**
 * Each study has one or more series of instances
 *
 * @generated from message google.fhir.r4.core.ImagingStudy.Series
 */
export class ImagingStudy_Series extends Message<ImagingStudy_Series> {
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
   * DICOM Series Instance UID for the series
   *
   * @generated from field: google.fhir.r4.core.Id uid = 4;
   */
  uid?: Id;

  /**
   * Numeric identifier of this series
   *
   * @generated from field: google.fhir.r4.core.UnsignedInt number = 5;
   */
  number?: UnsignedInt;

  /**
   * The modality of the instances in the series
   *
   * @generated from field: google.fhir.r4.core.Coding modality = 6;
   */
  modality?: Coding;

  /**
   * A short human readable summary of the series
   *
   * @generated from field: google.fhir.r4.core.String description = 7;
   */
  description?: String;

  /**
   * Number of Series Related Instances
   *
   * @generated from field: google.fhir.r4.core.UnsignedInt number_of_instances = 8;
   */
  numberOfInstances?: UnsignedInt;

  /**
   * Series access endpoint
   *
   * @generated from field: repeated google.fhir.r4.core.Reference endpoint = 9;
   */
  endpoint: Reference[] = [];

  /**
   * Body part examined
   *
   * @generated from field: google.fhir.r4.core.Coding body_site = 10;
   */
  bodySite?: Coding;

  /**
   * Body part laterality
   *
   * @generated from field: google.fhir.r4.core.Coding laterality = 11;
   */
  laterality?: Coding;

  /**
   * Specimen imaged
   *
   * @generated from field: repeated google.fhir.r4.core.Reference specimen = 12;
   */
  specimen: Reference[] = [];

  /**
   * When the series started
   *
   * @generated from field: google.fhir.r4.core.DateTime started = 13;
   */
  started?: DateTime;

  /**
   * @generated from field: repeated google.fhir.r4.core.ImagingStudy.Series.Performer performer = 14;
   */
  performer: ImagingStudy_Series_Performer[] = [];

  /**
   * @generated from field: repeated google.fhir.r4.core.ImagingStudy.Series.Instance instance = 15;
   */
  instance: ImagingStudy_Series_Instance[] = [];

  constructor(data?: PartialMessage<ImagingStudy_Series>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.ImagingStudy.Series";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 3, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "uid", kind: "message", T: Id },
    { no: 5, name: "number", kind: "message", T: UnsignedInt },
    { no: 6, name: "modality", kind: "message", T: Coding },
    { no: 7, name: "description", kind: "message", T: String },
    { no: 8, name: "number_of_instances", kind: "message", T: UnsignedInt },
    { no: 9, name: "endpoint", kind: "message", T: Reference, repeated: true },
    { no: 10, name: "body_site", kind: "message", T: Coding },
    { no: 11, name: "laterality", kind: "message", T: Coding },
    { no: 12, name: "specimen", kind: "message", T: Reference, repeated: true },
    { no: 13, name: "started", kind: "message", T: DateTime },
    { no: 14, name: "performer", kind: "message", T: ImagingStudy_Series_Performer, repeated: true },
    { no: 15, name: "instance", kind: "message", T: ImagingStudy_Series_Instance, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImagingStudy_Series {
    return new ImagingStudy_Series().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImagingStudy_Series {
    return new ImagingStudy_Series().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImagingStudy_Series {
    return new ImagingStudy_Series().fromJsonString(jsonString, options);
  }

  static equals(a: ImagingStudy_Series | PlainMessage<ImagingStudy_Series> | undefined, b: ImagingStudy_Series | PlainMessage<ImagingStudy_Series> | undefined): boolean {
    return proto3.util.equals(ImagingStudy_Series, a, b);
  }
}

/**
 * Who performed the series
 *
 * @generated from message google.fhir.r4.core.ImagingStudy.Series.Performer
 */
export class ImagingStudy_Series_Performer extends Message<ImagingStudy_Series_Performer> {
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
   * Type of performance
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept function = 4;
   */
  function?: CodeableConcept;

  /**
   * Who performed the series
   *
   * @generated from field: google.fhir.r4.core.Reference actor = 5;
   */
  actor?: Reference;

  constructor(data?: PartialMessage<ImagingStudy_Series_Performer>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.ImagingStudy.Series.Performer";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 3, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "function", kind: "message", T: CodeableConcept },
    { no: 5, name: "actor", kind: "message", T: Reference },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImagingStudy_Series_Performer {
    return new ImagingStudy_Series_Performer().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImagingStudy_Series_Performer {
    return new ImagingStudy_Series_Performer().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImagingStudy_Series_Performer {
    return new ImagingStudy_Series_Performer().fromJsonString(jsonString, options);
  }

  static equals(a: ImagingStudy_Series_Performer | PlainMessage<ImagingStudy_Series_Performer> | undefined, b: ImagingStudy_Series_Performer | PlainMessage<ImagingStudy_Series_Performer> | undefined): boolean {
    return proto3.util.equals(ImagingStudy_Series_Performer, a, b);
  }
}

/**
 * A single SOP instance from the series
 *
 * @generated from message google.fhir.r4.core.ImagingStudy.Series.Instance
 */
export class ImagingStudy_Series_Instance extends Message<ImagingStudy_Series_Instance> {
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
   * DICOM SOP Instance UID
   *
   * @generated from field: google.fhir.r4.core.Id uid = 4;
   */
  uid?: Id;

  /**
   * DICOM class type
   *
   * @generated from field: google.fhir.r4.core.Coding sop_class = 5;
   */
  sopClass?: Coding;

  /**
   * The number of this instance in the series
   *
   * @generated from field: google.fhir.r4.core.UnsignedInt number = 6;
   */
  number?: UnsignedInt;

  /**
   * Description of instance
   *
   * @generated from field: google.fhir.r4.core.String title = 7;
   */
  title?: String;

  constructor(data?: PartialMessage<ImagingStudy_Series_Instance>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.ImagingStudy.Series.Instance";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 3, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "uid", kind: "message", T: Id },
    { no: 5, name: "sop_class", kind: "message", T: Coding },
    { no: 6, name: "number", kind: "message", T: UnsignedInt },
    { no: 7, name: "title", kind: "message", T: String },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImagingStudy_Series_Instance {
    return new ImagingStudy_Series_Instance().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImagingStudy_Series_Instance {
    return new ImagingStudy_Series_Instance().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImagingStudy_Series_Instance {
    return new ImagingStudy_Series_Instance().fromJsonString(jsonString, options);
  }

  static equals(a: ImagingStudy_Series_Instance | PlainMessage<ImagingStudy_Series_Instance> | undefined, b: ImagingStudy_Series_Instance | PlainMessage<ImagingStudy_Series_Instance> | undefined): boolean {
    return proto3.util.equals(ImagingStudy_Series_Instance, a, b);
  }
}

