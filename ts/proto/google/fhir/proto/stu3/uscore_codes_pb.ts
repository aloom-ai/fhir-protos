//    Copyright 2018 Google Inc.
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
// @generated from file proto/google/fhir/proto/stu3/uscore_codes.proto (package google.fhir.stu3.uscore, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Extension, String } from "./datatypes_pb.js";

/**
 * A type defined by US Core for Birthsex
 * http://hl7.org/fhir/us/core/ValueSet/us-core-birthsex
 *
 * @generated from message google.fhir.stu3.uscore.UsCoreBirthSexCode
 */
export class UsCoreBirthSexCode extends Message<UsCoreBirthSexCode> {
  /**
   * @generated from field: google.fhir.stu3.uscore.UsCoreBirthSexCode.Value value = 1;
   */
  value = UsCoreBirthSexCode_Value.INVALID_UNINITIALIZED;

  /**
   * xml:id (or equivalent in JSON)
   *
   * @generated from field: google.fhir.stu3.proto.String id = 2;
   */
  id?: String;

  /**
   * Additional Content defined by implementations
   *
   * @generated from field: repeated google.fhir.stu3.proto.Extension extension = 3;
   */
  extension: Extension[] = [];

  constructor(data?: PartialMessage<UsCoreBirthSexCode>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.fhir.stu3.uscore.UsCoreBirthSexCode";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "enum", T: proto3.getEnumType(UsCoreBirthSexCode_Value) },
    { no: 2, name: "id", kind: "message", T: String },
    { no: 3, name: "extension", kind: "message", T: Extension, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsCoreBirthSexCode {
    return new UsCoreBirthSexCode().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsCoreBirthSexCode {
    return new UsCoreBirthSexCode().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsCoreBirthSexCode {
    return new UsCoreBirthSexCode().fromJsonString(jsonString, options);
  }

  static equals(a: UsCoreBirthSexCode | PlainMessage<UsCoreBirthSexCode> | undefined, b: UsCoreBirthSexCode | PlainMessage<UsCoreBirthSexCode> | undefined): boolean {
    return proto3.util.equals(UsCoreBirthSexCode, a, b);
  }
}

/**
 * Primitive value for code
 *
 * @generated from enum google.fhir.stu3.uscore.UsCoreBirthSexCode.Value
 */
export enum UsCoreBirthSexCode_Value {
  /**
   * @generated from enum value: INVALID_UNINITIALIZED = 0;
   */
  INVALID_UNINITIALIZED = 0,

  /**
   * @generated from enum value: FEMALE = 1;
   */
  FEMALE = 1,

  /**
   * @generated from enum value: MALE = 2;
   */
  MALE = 2,

  /**
   * @generated from enum value: UNKNOWN = 3;
   */
  UNKNOWN = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(UsCoreBirthSexCode_Value)
proto3.util.setEnumType(UsCoreBirthSexCode_Value, "google.fhir.stu3.uscore.UsCoreBirthSexCode.Value", [
  { no: 0, name: "INVALID_UNINITIALIZED" },
  { no: 1, name: "FEMALE" },
  { no: 2, name: "MALE" },
  { no: 3, name: "UNKNOWN" },
]);

