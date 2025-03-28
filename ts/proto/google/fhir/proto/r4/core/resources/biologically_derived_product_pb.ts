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
// @generated from file proto/google/fhir/proto/r4/core/resources/biologically_derived_product.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Code, CodeableConcept, DateTime, Decimal, Extension, Id, Identifier, Integer, Meta, Narrative, Period, Reference, String, Uri } from "../datatypes_pb.js";
import { BiologicallyDerivedProductCategoryCode_Value, BiologicallyDerivedProductStatusCode_Value, BiologicallyDerivedProductStorageScaleCode_Value } from "../codes_pb.js";

/**
 * Auto-generated from StructureDefinition for BiologicallyDerivedProduct.
 * A material substance originating from a biological entity.
 * See http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct
 *
 * @generated from message google.fhir.r4.core.BiologicallyDerivedProduct
 */
export class BiologicallyDerivedProduct extends Message<BiologicallyDerivedProduct> {
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
   * External ids for this item
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[] = [];

  /**
   * @generated from field: google.fhir.r4.core.BiologicallyDerivedProduct.ProductCategoryCode product_category = 11;
   */
  productCategory?: BiologicallyDerivedProduct_ProductCategoryCode;

  /**
   * What this biologically derived product is
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept product_code = 12;
   */
  productCode?: CodeableConcept;

  /**
   * @generated from field: google.fhir.r4.core.BiologicallyDerivedProduct.StatusCode status = 13;
   */
  status?: BiologicallyDerivedProduct_StatusCode;

  /**
   * Procedure request
   *
   * @generated from field: repeated google.fhir.r4.core.Reference request = 14;
   */
  request: Reference[] = [];

  /**
   * The amount of this biologically derived product
   *
   * @generated from field: google.fhir.r4.core.Integer quantity = 15;
   */
  quantity?: Integer;

  /**
   * BiologicallyDerivedProduct parent
   *
   * @generated from field: repeated google.fhir.r4.core.Reference parent = 16;
   */
  parent: Reference[] = [];

  /**
   * @generated from field: google.fhir.r4.core.BiologicallyDerivedProduct.Collection collection = 17;
   */
  collection?: BiologicallyDerivedProduct_Collection;

  /**
   * @generated from field: repeated google.fhir.r4.core.BiologicallyDerivedProduct.Processing processing = 18;
   */
  processing: BiologicallyDerivedProduct_Processing[] = [];

  /**
   * @generated from field: google.fhir.r4.core.BiologicallyDerivedProduct.Manipulation manipulation = 19;
   */
  manipulation?: BiologicallyDerivedProduct_Manipulation;

  /**
   * @generated from field: repeated google.fhir.r4.core.BiologicallyDerivedProduct.Storage storage = 20;
   */
  storage: BiologicallyDerivedProduct_Storage[] = [];

  constructor(data?: PartialMessage<BiologicallyDerivedProduct>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.BiologicallyDerivedProduct";
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
    { no: 11, name: "product_category", kind: "message", T: BiologicallyDerivedProduct_ProductCategoryCode },
    { no: 12, name: "product_code", kind: "message", T: CodeableConcept },
    { no: 13, name: "status", kind: "message", T: BiologicallyDerivedProduct_StatusCode },
    { no: 14, name: "request", kind: "message", T: Reference, repeated: true },
    { no: 15, name: "quantity", kind: "message", T: Integer },
    { no: 16, name: "parent", kind: "message", T: Reference, repeated: true },
    { no: 17, name: "collection", kind: "message", T: BiologicallyDerivedProduct_Collection },
    { no: 18, name: "processing", kind: "message", T: BiologicallyDerivedProduct_Processing, repeated: true },
    { no: 19, name: "manipulation", kind: "message", T: BiologicallyDerivedProduct_Manipulation },
    { no: 20, name: "storage", kind: "message", T: BiologicallyDerivedProduct_Storage, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BiologicallyDerivedProduct {
    return new BiologicallyDerivedProduct().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BiologicallyDerivedProduct {
    return new BiologicallyDerivedProduct().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BiologicallyDerivedProduct {
    return new BiologicallyDerivedProduct().fromJsonString(jsonString, options);
  }

  static equals(a: BiologicallyDerivedProduct | PlainMessage<BiologicallyDerivedProduct> | undefined, b: BiologicallyDerivedProduct | PlainMessage<BiologicallyDerivedProduct> | undefined): boolean {
    return proto3.util.equals(BiologicallyDerivedProduct, a, b);
  }
}

/**
 * organ | tissue | fluid | cells | biologicalAgent
 *
 * @generated from message google.fhir.r4.core.BiologicallyDerivedProduct.ProductCategoryCode
 */
export class BiologicallyDerivedProduct_ProductCategoryCode extends Message<BiologicallyDerivedProduct_ProductCategoryCode> {
  /**
   * @generated from field: google.fhir.r4.core.BiologicallyDerivedProductCategoryCode.Value value = 1;
   */
  value = BiologicallyDerivedProductCategoryCode_Value.INVALID_UNINITIALIZED;

  /**
   * @generated from field: google.fhir.r4.core.String id = 2;
   */
  id?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 3;
   */
  extension: Extension[] = [];

  constructor(data?: PartialMessage<BiologicallyDerivedProduct_ProductCategoryCode>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.BiologicallyDerivedProduct.ProductCategoryCode";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "enum", T: proto3.getEnumType(BiologicallyDerivedProductCategoryCode_Value) },
    { no: 2, name: "id", kind: "message", T: String },
    { no: 3, name: "extension", kind: "message", T: Extension, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BiologicallyDerivedProduct_ProductCategoryCode {
    return new BiologicallyDerivedProduct_ProductCategoryCode().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BiologicallyDerivedProduct_ProductCategoryCode {
    return new BiologicallyDerivedProduct_ProductCategoryCode().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BiologicallyDerivedProduct_ProductCategoryCode {
    return new BiologicallyDerivedProduct_ProductCategoryCode().fromJsonString(jsonString, options);
  }

  static equals(a: BiologicallyDerivedProduct_ProductCategoryCode | PlainMessage<BiologicallyDerivedProduct_ProductCategoryCode> | undefined, b: BiologicallyDerivedProduct_ProductCategoryCode | PlainMessage<BiologicallyDerivedProduct_ProductCategoryCode> | undefined): boolean {
    return proto3.util.equals(BiologicallyDerivedProduct_ProductCategoryCode, a, b);
  }
}

/**
 * available | unavailable
 *
 * @generated from message google.fhir.r4.core.BiologicallyDerivedProduct.StatusCode
 */
export class BiologicallyDerivedProduct_StatusCode extends Message<BiologicallyDerivedProduct_StatusCode> {
  /**
   * @generated from field: google.fhir.r4.core.BiologicallyDerivedProductStatusCode.Value value = 1;
   */
  value = BiologicallyDerivedProductStatusCode_Value.INVALID_UNINITIALIZED;

  /**
   * @generated from field: google.fhir.r4.core.String id = 2;
   */
  id?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 3;
   */
  extension: Extension[] = [];

  constructor(data?: PartialMessage<BiologicallyDerivedProduct_StatusCode>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.BiologicallyDerivedProduct.StatusCode";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "enum", T: proto3.getEnumType(BiologicallyDerivedProductStatusCode_Value) },
    { no: 2, name: "id", kind: "message", T: String },
    { no: 3, name: "extension", kind: "message", T: Extension, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BiologicallyDerivedProduct_StatusCode {
    return new BiologicallyDerivedProduct_StatusCode().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BiologicallyDerivedProduct_StatusCode {
    return new BiologicallyDerivedProduct_StatusCode().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BiologicallyDerivedProduct_StatusCode {
    return new BiologicallyDerivedProduct_StatusCode().fromJsonString(jsonString, options);
  }

  static equals(a: BiologicallyDerivedProduct_StatusCode | PlainMessage<BiologicallyDerivedProduct_StatusCode> | undefined, b: BiologicallyDerivedProduct_StatusCode | PlainMessage<BiologicallyDerivedProduct_StatusCode> | undefined): boolean {
    return proto3.util.equals(BiologicallyDerivedProduct_StatusCode, a, b);
  }
}

/**
 * How this product was collected
 *
 * @generated from message google.fhir.r4.core.BiologicallyDerivedProduct.Collection
 */
export class BiologicallyDerivedProduct_Collection extends Message<BiologicallyDerivedProduct_Collection> {
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
   * Individual performing collection
   *
   * @generated from field: google.fhir.r4.core.Reference collector = 4;
   */
  collector?: Reference;

  /**
   * Who is product from
   *
   * @generated from field: google.fhir.r4.core.Reference source = 5;
   */
  source?: Reference;

  /**
   * @generated from field: google.fhir.r4.core.BiologicallyDerivedProduct.Collection.CollectedX collected = 6;
   */
  collected?: BiologicallyDerivedProduct_Collection_CollectedX;

  constructor(data?: PartialMessage<BiologicallyDerivedProduct_Collection>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.BiologicallyDerivedProduct.Collection";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 3, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "collector", kind: "message", T: Reference },
    { no: 5, name: "source", kind: "message", T: Reference },
    { no: 6, name: "collected", kind: "message", T: BiologicallyDerivedProduct_Collection_CollectedX },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BiologicallyDerivedProduct_Collection {
    return new BiologicallyDerivedProduct_Collection().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BiologicallyDerivedProduct_Collection {
    return new BiologicallyDerivedProduct_Collection().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BiologicallyDerivedProduct_Collection {
    return new BiologicallyDerivedProduct_Collection().fromJsonString(jsonString, options);
  }

  static equals(a: BiologicallyDerivedProduct_Collection | PlainMessage<BiologicallyDerivedProduct_Collection> | undefined, b: BiologicallyDerivedProduct_Collection | PlainMessage<BiologicallyDerivedProduct_Collection> | undefined): boolean {
    return proto3.util.equals(BiologicallyDerivedProduct_Collection, a, b);
  }
}

/**
 * Time of product collection
 *
 * @generated from message google.fhir.r4.core.BiologicallyDerivedProduct.Collection.CollectedX
 */
export class BiologicallyDerivedProduct_Collection_CollectedX extends Message<BiologicallyDerivedProduct_Collection_CollectedX> {
  /**
   * @generated from oneof google.fhir.r4.core.BiologicallyDerivedProduct.Collection.CollectedX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.DateTime date_time = 1;
     */
    value: DateTime;
    case: "dateTime";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Period period = 2;
     */
    value: Period;
    case: "period";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<BiologicallyDerivedProduct_Collection_CollectedX>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.BiologicallyDerivedProduct.Collection.CollectedX";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "date_time", kind: "message", T: DateTime, oneof: "choice" },
    { no: 2, name: "period", kind: "message", T: Period, oneof: "choice" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BiologicallyDerivedProduct_Collection_CollectedX {
    return new BiologicallyDerivedProduct_Collection_CollectedX().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BiologicallyDerivedProduct_Collection_CollectedX {
    return new BiologicallyDerivedProduct_Collection_CollectedX().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BiologicallyDerivedProduct_Collection_CollectedX {
    return new BiologicallyDerivedProduct_Collection_CollectedX().fromJsonString(jsonString, options);
  }

  static equals(a: BiologicallyDerivedProduct_Collection_CollectedX | PlainMessage<BiologicallyDerivedProduct_Collection_CollectedX> | undefined, b: BiologicallyDerivedProduct_Collection_CollectedX | PlainMessage<BiologicallyDerivedProduct_Collection_CollectedX> | undefined): boolean {
    return proto3.util.equals(BiologicallyDerivedProduct_Collection_CollectedX, a, b);
  }
}

/**
 * Any processing of the product during collection
 *
 * @generated from message google.fhir.r4.core.BiologicallyDerivedProduct.Processing
 */
export class BiologicallyDerivedProduct_Processing extends Message<BiologicallyDerivedProduct_Processing> {
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
   * Description of of processing
   *
   * @generated from field: google.fhir.r4.core.String description = 4;
   */
  description?: String;

  /**
   * Procesing code
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept procedure = 5;
   */
  procedure?: CodeableConcept;

  /**
   * Substance added during processing
   *
   * @generated from field: google.fhir.r4.core.Reference additive = 6;
   */
  additive?: Reference;

  /**
   * @generated from field: google.fhir.r4.core.BiologicallyDerivedProduct.Processing.TimeX time = 7;
   */
  time?: BiologicallyDerivedProduct_Processing_TimeX;

  constructor(data?: PartialMessage<BiologicallyDerivedProduct_Processing>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.BiologicallyDerivedProduct.Processing";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 3, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "description", kind: "message", T: String },
    { no: 5, name: "procedure", kind: "message", T: CodeableConcept },
    { no: 6, name: "additive", kind: "message", T: Reference },
    { no: 7, name: "time", kind: "message", T: BiologicallyDerivedProduct_Processing_TimeX },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BiologicallyDerivedProduct_Processing {
    return new BiologicallyDerivedProduct_Processing().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BiologicallyDerivedProduct_Processing {
    return new BiologicallyDerivedProduct_Processing().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BiologicallyDerivedProduct_Processing {
    return new BiologicallyDerivedProduct_Processing().fromJsonString(jsonString, options);
  }

  static equals(a: BiologicallyDerivedProduct_Processing | PlainMessage<BiologicallyDerivedProduct_Processing> | undefined, b: BiologicallyDerivedProduct_Processing | PlainMessage<BiologicallyDerivedProduct_Processing> | undefined): boolean {
    return proto3.util.equals(BiologicallyDerivedProduct_Processing, a, b);
  }
}

/**
 * Time of processing
 *
 * @generated from message google.fhir.r4.core.BiologicallyDerivedProduct.Processing.TimeX
 */
export class BiologicallyDerivedProduct_Processing_TimeX extends Message<BiologicallyDerivedProduct_Processing_TimeX> {
  /**
   * @generated from oneof google.fhir.r4.core.BiologicallyDerivedProduct.Processing.TimeX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.DateTime date_time = 1;
     */
    value: DateTime;
    case: "dateTime";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Period period = 2;
     */
    value: Period;
    case: "period";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<BiologicallyDerivedProduct_Processing_TimeX>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.BiologicallyDerivedProduct.Processing.TimeX";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "date_time", kind: "message", T: DateTime, oneof: "choice" },
    { no: 2, name: "period", kind: "message", T: Period, oneof: "choice" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BiologicallyDerivedProduct_Processing_TimeX {
    return new BiologicallyDerivedProduct_Processing_TimeX().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BiologicallyDerivedProduct_Processing_TimeX {
    return new BiologicallyDerivedProduct_Processing_TimeX().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BiologicallyDerivedProduct_Processing_TimeX {
    return new BiologicallyDerivedProduct_Processing_TimeX().fromJsonString(jsonString, options);
  }

  static equals(a: BiologicallyDerivedProduct_Processing_TimeX | PlainMessage<BiologicallyDerivedProduct_Processing_TimeX> | undefined, b: BiologicallyDerivedProduct_Processing_TimeX | PlainMessage<BiologicallyDerivedProduct_Processing_TimeX> | undefined): boolean {
    return proto3.util.equals(BiologicallyDerivedProduct_Processing_TimeX, a, b);
  }
}

/**
 * Any manipulation of product post-collection
 *
 * @generated from message google.fhir.r4.core.BiologicallyDerivedProduct.Manipulation
 */
export class BiologicallyDerivedProduct_Manipulation extends Message<BiologicallyDerivedProduct_Manipulation> {
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
   * Description of manipulation
   *
   * @generated from field: google.fhir.r4.core.String description = 4;
   */
  description?: String;

  /**
   * @generated from field: google.fhir.r4.core.BiologicallyDerivedProduct.Manipulation.TimeX time = 5;
   */
  time?: BiologicallyDerivedProduct_Manipulation_TimeX;

  constructor(data?: PartialMessage<BiologicallyDerivedProduct_Manipulation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.BiologicallyDerivedProduct.Manipulation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 3, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "description", kind: "message", T: String },
    { no: 5, name: "time", kind: "message", T: BiologicallyDerivedProduct_Manipulation_TimeX },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BiologicallyDerivedProduct_Manipulation {
    return new BiologicallyDerivedProduct_Manipulation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BiologicallyDerivedProduct_Manipulation {
    return new BiologicallyDerivedProduct_Manipulation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BiologicallyDerivedProduct_Manipulation {
    return new BiologicallyDerivedProduct_Manipulation().fromJsonString(jsonString, options);
  }

  static equals(a: BiologicallyDerivedProduct_Manipulation | PlainMessage<BiologicallyDerivedProduct_Manipulation> | undefined, b: BiologicallyDerivedProduct_Manipulation | PlainMessage<BiologicallyDerivedProduct_Manipulation> | undefined): boolean {
    return proto3.util.equals(BiologicallyDerivedProduct_Manipulation, a, b);
  }
}

/**
 * Time of manipulation
 *
 * @generated from message google.fhir.r4.core.BiologicallyDerivedProduct.Manipulation.TimeX
 */
export class BiologicallyDerivedProduct_Manipulation_TimeX extends Message<BiologicallyDerivedProduct_Manipulation_TimeX> {
  /**
   * @generated from oneof google.fhir.r4.core.BiologicallyDerivedProduct.Manipulation.TimeX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.DateTime date_time = 1;
     */
    value: DateTime;
    case: "dateTime";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Period period = 2;
     */
    value: Period;
    case: "period";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<BiologicallyDerivedProduct_Manipulation_TimeX>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.BiologicallyDerivedProduct.Manipulation.TimeX";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "date_time", kind: "message", T: DateTime, oneof: "choice" },
    { no: 2, name: "period", kind: "message", T: Period, oneof: "choice" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BiologicallyDerivedProduct_Manipulation_TimeX {
    return new BiologicallyDerivedProduct_Manipulation_TimeX().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BiologicallyDerivedProduct_Manipulation_TimeX {
    return new BiologicallyDerivedProduct_Manipulation_TimeX().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BiologicallyDerivedProduct_Manipulation_TimeX {
    return new BiologicallyDerivedProduct_Manipulation_TimeX().fromJsonString(jsonString, options);
  }

  static equals(a: BiologicallyDerivedProduct_Manipulation_TimeX | PlainMessage<BiologicallyDerivedProduct_Manipulation_TimeX> | undefined, b: BiologicallyDerivedProduct_Manipulation_TimeX | PlainMessage<BiologicallyDerivedProduct_Manipulation_TimeX> | undefined): boolean {
    return proto3.util.equals(BiologicallyDerivedProduct_Manipulation_TimeX, a, b);
  }
}

/**
 * Product storage
 *
 * @generated from message google.fhir.r4.core.BiologicallyDerivedProduct.Storage
 */
export class BiologicallyDerivedProduct_Storage extends Message<BiologicallyDerivedProduct_Storage> {
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
   * Description of storage
   *
   * @generated from field: google.fhir.r4.core.String description = 4;
   */
  description?: String;

  /**
   * Storage temperature
   *
   * @generated from field: google.fhir.r4.core.Decimal temperature = 5;
   */
  temperature?: Decimal;

  /**
   * @generated from field: google.fhir.r4.core.BiologicallyDerivedProduct.Storage.ScaleCode scale = 6;
   */
  scale?: BiologicallyDerivedProduct_Storage_ScaleCode;

  /**
   * Storage timeperiod
   *
   * @generated from field: google.fhir.r4.core.Period duration = 7;
   */
  duration?: Period;

  constructor(data?: PartialMessage<BiologicallyDerivedProduct_Storage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.BiologicallyDerivedProduct.Storage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: String },
    { no: 2, name: "extension", kind: "message", T: Extension, repeated: true },
    { no: 3, name: "modifier_extension", kind: "message", T: Extension, repeated: true },
    { no: 4, name: "description", kind: "message", T: String },
    { no: 5, name: "temperature", kind: "message", T: Decimal },
    { no: 6, name: "scale", kind: "message", T: BiologicallyDerivedProduct_Storage_ScaleCode },
    { no: 7, name: "duration", kind: "message", T: Period },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BiologicallyDerivedProduct_Storage {
    return new BiologicallyDerivedProduct_Storage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BiologicallyDerivedProduct_Storage {
    return new BiologicallyDerivedProduct_Storage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BiologicallyDerivedProduct_Storage {
    return new BiologicallyDerivedProduct_Storage().fromJsonString(jsonString, options);
  }

  static equals(a: BiologicallyDerivedProduct_Storage | PlainMessage<BiologicallyDerivedProduct_Storage> | undefined, b: BiologicallyDerivedProduct_Storage | PlainMessage<BiologicallyDerivedProduct_Storage> | undefined): boolean {
    return proto3.util.equals(BiologicallyDerivedProduct_Storage, a, b);
  }
}

/**
 * farenheit | celsius | kelvin
 *
 * @generated from message google.fhir.r4.core.BiologicallyDerivedProduct.Storage.ScaleCode
 */
export class BiologicallyDerivedProduct_Storage_ScaleCode extends Message<BiologicallyDerivedProduct_Storage_ScaleCode> {
  /**
   * @generated from field: google.fhir.r4.core.BiologicallyDerivedProductStorageScaleCode.Value value = 1;
   */
  value = BiologicallyDerivedProductStorageScaleCode_Value.INVALID_UNINITIALIZED;

  /**
   * @generated from field: google.fhir.r4.core.String id = 2;
   */
  id?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 3;
   */
  extension: Extension[] = [];

  constructor(data?: PartialMessage<BiologicallyDerivedProduct_Storage_ScaleCode>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.r4.core.BiologicallyDerivedProduct.Storage.ScaleCode";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "enum", T: proto3.getEnumType(BiologicallyDerivedProductStorageScaleCode_Value) },
    { no: 2, name: "id", kind: "message", T: String },
    { no: 3, name: "extension", kind: "message", T: Extension, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BiologicallyDerivedProduct_Storage_ScaleCode {
    return new BiologicallyDerivedProduct_Storage_ScaleCode().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BiologicallyDerivedProduct_Storage_ScaleCode {
    return new BiologicallyDerivedProduct_Storage_ScaleCode().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BiologicallyDerivedProduct_Storage_ScaleCode {
    return new BiologicallyDerivedProduct_Storage_ScaleCode().fromJsonString(jsonString, options);
  }

  static equals(a: BiologicallyDerivedProduct_Storage_ScaleCode | PlainMessage<BiologicallyDerivedProduct_Storage_ScaleCode> | undefined, b: BiologicallyDerivedProduct_Storage_ScaleCode | PlainMessage<BiologicallyDerivedProduct_Storage_ScaleCode> | undefined): boolean {
    return proto3.util.equals(BiologicallyDerivedProduct_Storage_ScaleCode, a, b);
  }
}

