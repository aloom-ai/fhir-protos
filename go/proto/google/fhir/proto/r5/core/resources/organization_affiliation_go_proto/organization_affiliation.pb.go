//    Copyright 2023 Google Inc.
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

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.29.0
// 	protoc        v3.21.12
// source: proto/google/fhir/proto/r5/core/resources/organization_affiliation.proto

package organization_affiliation_go_proto

import (
	_ "github.com/google/fhir/go/proto/google/fhir/proto/annotations_go_proto"
	datatypes_go_proto "github.com/google/fhir/go/proto/google/fhir/proto/r5/core/datatypes_go_proto"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	anypb "google.golang.org/protobuf/types/known/anypb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// Auto-generated from StructureDefinition for OrganizationAffiliation.
// Defines an affiliation/association/relationship between 2 distinct
// organizations, that is not a part-of relationship/sub-division relationship.
// See http://hl7.org/fhir/StructureDefinition/OrganizationAffiliation
type OrganizationAffiliation struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Logical id of this artifact
	Id *datatypes_go_proto.Id `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// Metadata about the resource
	Meta *datatypes_go_proto.Meta `protobuf:"bytes,2,opt,name=meta,proto3" json:"meta,omitempty"`
	// A set of rules under which this content was created
	ImplicitRules *datatypes_go_proto.Uri `protobuf:"bytes,3,opt,name=implicit_rules,json=implicitRules,proto3" json:"implicit_rules,omitempty"`
	// Language of the resource content
	Language *datatypes_go_proto.Code `protobuf:"bytes,4,opt,name=language,proto3" json:"language,omitempty"`
	// Text summary of the resource, for human interpretation
	Text *datatypes_go_proto.Narrative `protobuf:"bytes,5,opt,name=text,proto3" json:"text,omitempty"`
	// Contained, inline Resources
	Contained []*anypb.Any `protobuf:"bytes,6,rep,name=contained,proto3" json:"contained,omitempty"`
	// Additional content defined by implementations
	Extension []*datatypes_go_proto.Extension `protobuf:"bytes,8,rep,name=extension,proto3" json:"extension,omitempty"`
	// Extensions that cannot be ignored
	ModifierExtension []*datatypes_go_proto.Extension `protobuf:"bytes,9,rep,name=modifier_extension,json=modifierExtension,proto3" json:"modifier_extension,omitempty"`
	// Business identifiers that are specific to this role
	Identifier []*datatypes_go_proto.Identifier `protobuf:"bytes,10,rep,name=identifier,proto3" json:"identifier,omitempty"`
	// Whether this organization affiliation record is in active use
	Active *datatypes_go_proto.Boolean `protobuf:"bytes,11,opt,name=active,proto3" json:"active,omitempty"`
	// The period during which the participatingOrganization is affiliated with
	// the primary organization
	Period *datatypes_go_proto.Period `protobuf:"bytes,12,opt,name=period,proto3" json:"period,omitempty"`
	// Organization where the role is available
	Organization *datatypes_go_proto.Reference `protobuf:"bytes,13,opt,name=organization,proto3" json:"organization,omitempty"`
	// Organization that provides/performs the role (e.g. providing services or is
	// a member of)
	ParticipatingOrganization *datatypes_go_proto.Reference `protobuf:"bytes,14,opt,name=participating_organization,json=participatingOrganization,proto3" json:"participating_organization,omitempty"`
	// The network in which the participatingOrganization provides the role's
	// services (if defined) at the indicated locations (if defined)
	Network []*datatypes_go_proto.Reference `protobuf:"bytes,15,rep,name=network,proto3" json:"network,omitempty"`
	// Definition of the role the participatingOrganization plays
	Code []*datatypes_go_proto.CodeableConcept `protobuf:"bytes,16,rep,name=code,proto3" json:"code,omitempty"`
	// Specific specialty of the participatingOrganization in the context of the
	// role
	Specialty []*datatypes_go_proto.CodeableConcept `protobuf:"bytes,17,rep,name=specialty,proto3" json:"specialty,omitempty"`
	// The location(s) at which the role occurs
	Location []*datatypes_go_proto.Reference `protobuf:"bytes,18,rep,name=location,proto3" json:"location,omitempty"`
	// Healthcare services provided through the role
	HealthcareService []*datatypes_go_proto.Reference `protobuf:"bytes,19,rep,name=healthcare_service,json=healthcareService,proto3" json:"healthcare_service,omitempty"`
	// Official contact details at the participatingOrganization relevant to this
	// Affiliation
	Contact []*datatypes_go_proto.ExtendedContactDetail `protobuf:"bytes,20,rep,name=contact,proto3" json:"contact,omitempty"`
	// Technical endpoints providing access to services operated for this role
	Endpoint []*datatypes_go_proto.Reference `protobuf:"bytes,21,rep,name=endpoint,proto3" json:"endpoint,omitempty"`
}

func (x *OrganizationAffiliation) Reset() {
	*x = OrganizationAffiliation{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *OrganizationAffiliation) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*OrganizationAffiliation) ProtoMessage() {}

func (x *OrganizationAffiliation) ProtoReflect() protoreflect.Message {
	mi := &file_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use OrganizationAffiliation.ProtoReflect.Descriptor instead.
func (*OrganizationAffiliation) Descriptor() ([]byte, []int) {
	return file_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto_rawDescGZIP(), []int{0}
}

func (x *OrganizationAffiliation) GetId() *datatypes_go_proto.Id {
	if x != nil {
		return x.Id
	}
	return nil
}

func (x *OrganizationAffiliation) GetMeta() *datatypes_go_proto.Meta {
	if x != nil {
		return x.Meta
	}
	return nil
}

func (x *OrganizationAffiliation) GetImplicitRules() *datatypes_go_proto.Uri {
	if x != nil {
		return x.ImplicitRules
	}
	return nil
}

func (x *OrganizationAffiliation) GetLanguage() *datatypes_go_proto.Code {
	if x != nil {
		return x.Language
	}
	return nil
}

func (x *OrganizationAffiliation) GetText() *datatypes_go_proto.Narrative {
	if x != nil {
		return x.Text
	}
	return nil
}

func (x *OrganizationAffiliation) GetContained() []*anypb.Any {
	if x != nil {
		return x.Contained
	}
	return nil
}

func (x *OrganizationAffiliation) GetExtension() []*datatypes_go_proto.Extension {
	if x != nil {
		return x.Extension
	}
	return nil
}

func (x *OrganizationAffiliation) GetModifierExtension() []*datatypes_go_proto.Extension {
	if x != nil {
		return x.ModifierExtension
	}
	return nil
}

func (x *OrganizationAffiliation) GetIdentifier() []*datatypes_go_proto.Identifier {
	if x != nil {
		return x.Identifier
	}
	return nil
}

func (x *OrganizationAffiliation) GetActive() *datatypes_go_proto.Boolean {
	if x != nil {
		return x.Active
	}
	return nil
}

func (x *OrganizationAffiliation) GetPeriod() *datatypes_go_proto.Period {
	if x != nil {
		return x.Period
	}
	return nil
}

func (x *OrganizationAffiliation) GetOrganization() *datatypes_go_proto.Reference {
	if x != nil {
		return x.Organization
	}
	return nil
}

func (x *OrganizationAffiliation) GetParticipatingOrganization() *datatypes_go_proto.Reference {
	if x != nil {
		return x.ParticipatingOrganization
	}
	return nil
}

func (x *OrganizationAffiliation) GetNetwork() []*datatypes_go_proto.Reference {
	if x != nil {
		return x.Network
	}
	return nil
}

func (x *OrganizationAffiliation) GetCode() []*datatypes_go_proto.CodeableConcept {
	if x != nil {
		return x.Code
	}
	return nil
}

func (x *OrganizationAffiliation) GetSpecialty() []*datatypes_go_proto.CodeableConcept {
	if x != nil {
		return x.Specialty
	}
	return nil
}

func (x *OrganizationAffiliation) GetLocation() []*datatypes_go_proto.Reference {
	if x != nil {
		return x.Location
	}
	return nil
}

func (x *OrganizationAffiliation) GetHealthcareService() []*datatypes_go_proto.Reference {
	if x != nil {
		return x.HealthcareService
	}
	return nil
}

func (x *OrganizationAffiliation) GetContact() []*datatypes_go_proto.ExtendedContactDetail {
	if x != nil {
		return x.Contact
	}
	return nil
}

func (x *OrganizationAffiliation) GetEndpoint() []*datatypes_go_proto.Reference {
	if x != nil {
		return x.Endpoint
	}
	return nil
}

var File_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto protoreflect.FileDescriptor

var file_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto_rawDesc = []byte{
	0x0a, 0x48, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x66,
	0x68, 0x69, 0x72, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x72, 0x35, 0x2f, 0x63, 0x6f, 0x72,
	0x65, 0x2f, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x73, 0x2f, 0x6f, 0x72, 0x67, 0x61,
	0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x61, 0x66, 0x66, 0x69, 0x6c, 0x69, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x13, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2e, 0x66, 0x68, 0x69, 0x72, 0x2e, 0x72, 0x35, 0x2e, 0x63, 0x6f, 0x72, 0x65, 0x1a,
	0x19, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2f, 0x61, 0x6e, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x29, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x2f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x66, 0x68, 0x69, 0x72, 0x2f, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2f, 0x66, 0x68, 0x69, 0x72, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x72,
	0x35, 0x2f, 0x63, 0x6f, 0x72, 0x65, 0x2f, 0x64, 0x61, 0x74, 0x61, 0x74, 0x79, 0x70, 0x65, 0x73,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x8f, 0x0c, 0x0a, 0x17, 0x4f, 0x72, 0x67, 0x61, 0x6e,
	0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x41, 0x66, 0x66, 0x69, 0x6c, 0x69, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x12, 0x27, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x66, 0x68, 0x69, 0x72, 0x2e, 0x72, 0x35, 0x2e,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x49, 0x64, 0x52, 0x02, 0x69, 0x64, 0x12, 0x2d, 0x0a, 0x04, 0x6d,
	0x65, 0x74, 0x61, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2e, 0x66, 0x68, 0x69, 0x72, 0x2e, 0x72, 0x35, 0x2e, 0x63, 0x6f, 0x72, 0x65, 0x2e,
	0x4d, 0x65, 0x74, 0x61, 0x52, 0x04, 0x6d, 0x65, 0x74, 0x61, 0x12, 0x3f, 0x0a, 0x0e, 0x69, 0x6d,
	0x70, 0x6c, 0x69, 0x63, 0x69, 0x74, 0x5f, 0x72, 0x75, 0x6c, 0x65, 0x73, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x18, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x66, 0x68, 0x69, 0x72,
	0x2e, 0x72, 0x35, 0x2e, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x55, 0x72, 0x69, 0x52, 0x0d, 0x69, 0x6d,
	0x70, 0x6c, 0x69, 0x63, 0x69, 0x74, 0x52, 0x75, 0x6c, 0x65, 0x73, 0x12, 0x35, 0x0a, 0x08, 0x6c,
	0x61, 0x6e, 0x67, 0x75, 0x61, 0x67, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x66, 0x68, 0x69, 0x72, 0x2e, 0x72, 0x35, 0x2e, 0x63,
	0x6f, 0x72, 0x65, 0x2e, 0x43, 0x6f, 0x64, 0x65, 0x52, 0x08, 0x6c, 0x61, 0x6e, 0x67, 0x75, 0x61,
	0x67, 0x65, 0x12, 0x32, 0x0a, 0x04, 0x74, 0x65, 0x78, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1e, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x66, 0x68, 0x69, 0x72, 0x2e, 0x72,
	0x35, 0x2e, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x4e, 0x61, 0x72, 0x72, 0x61, 0x74, 0x69, 0x76, 0x65,
	0x52, 0x04, 0x74, 0x65, 0x78, 0x74, 0x12, 0x32, 0x0a, 0x09, 0x63, 0x6f, 0x6e, 0x74, 0x61, 0x69,
	0x6e, 0x65, 0x64, 0x18, 0x06, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x14, 0x2e, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x41, 0x6e, 0x79, 0x52,
	0x09, 0x63, 0x6f, 0x6e, 0x74, 0x61, 0x69, 0x6e, 0x65, 0x64, 0x12, 0x3c, 0x0a, 0x09, 0x65, 0x78,
	0x74, 0x65, 0x6e, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x08, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1e, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x66, 0x68, 0x69, 0x72, 0x2e, 0x72, 0x35, 0x2e, 0x63,
	0x6f, 0x72, 0x65, 0x2e, 0x45, 0x78, 0x74, 0x65, 0x6e, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x09, 0x65,
	0x78, 0x74, 0x65, 0x6e, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x4d, 0x0a, 0x12, 0x6d, 0x6f, 0x64, 0x69,
	0x66, 0x69, 0x65, 0x72, 0x5f, 0x65, 0x78, 0x74, 0x65, 0x6e, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x09,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x66, 0x68,
	0x69, 0x72, 0x2e, 0x72, 0x35, 0x2e, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x45, 0x78, 0x74, 0x65, 0x6e,
	0x73, 0x69, 0x6f, 0x6e, 0x52, 0x11, 0x6d, 0x6f, 0x64, 0x69, 0x66, 0x69, 0x65, 0x72, 0x45, 0x78,
	0x74, 0x65, 0x6e, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x3f, 0x0a, 0x0a, 0x69, 0x64, 0x65, 0x6e, 0x74,
	0x69, 0x66, 0x69, 0x65, 0x72, 0x18, 0x0a, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1f, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x66, 0x68, 0x69, 0x72, 0x2e, 0x72, 0x35, 0x2e, 0x63, 0x6f, 0x72,
	0x65, 0x2e, 0x49, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x66, 0x69, 0x65, 0x72, 0x52, 0x0a, 0x69, 0x64,
	0x65, 0x6e, 0x74, 0x69, 0x66, 0x69, 0x65, 0x72, 0x12, 0x34, 0x0a, 0x06, 0x61, 0x63, 0x74, 0x69,
	0x76, 0x65, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2e, 0x66, 0x68, 0x69, 0x72, 0x2e, 0x72, 0x35, 0x2e, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x42,
	0x6f, 0x6f, 0x6c, 0x65, 0x61, 0x6e, 0x52, 0x06, 0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x12, 0x33,
	0x0a, 0x06, 0x70, 0x65, 0x72, 0x69, 0x6f, 0x64, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x66, 0x68, 0x69, 0x72, 0x2e, 0x72, 0x35, 0x2e,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x50, 0x65, 0x72, 0x69, 0x6f, 0x64, 0x52, 0x06, 0x70, 0x65, 0x72,
	0x69, 0x6f, 0x64, 0x12, 0x56, 0x0a, 0x0c, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2e, 0x66, 0x68, 0x69, 0x72, 0x2e, 0x72, 0x35, 0x2e, 0x63, 0x6f, 0x72, 0x65, 0x2e,
	0x52, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x42, 0x12, 0xf2, 0xff, 0xfc, 0xc2, 0x06,
	0x0c, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0c, 0x6f,
	0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x71, 0x0a, 0x1a, 0x70,
	0x61, 0x72, 0x74, 0x69, 0x63, 0x69, 0x70, 0x61, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x6f, 0x72, 0x67,
	0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x1e, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x66, 0x68, 0x69, 0x72, 0x2e, 0x72, 0x35,
	0x2e, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x52, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x42,
	0x12, 0xf2, 0xff, 0xfc, 0xc2, 0x06, 0x0c, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x52, 0x19, 0x70, 0x61, 0x72, 0x74, 0x69, 0x63, 0x69, 0x70, 0x61, 0x74, 0x69,
	0x6e, 0x67, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x4c,
	0x0a, 0x07, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x18, 0x0f, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x1e, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x66, 0x68, 0x69, 0x72, 0x2e, 0x72, 0x35,
	0x2e, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x52, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x42,
	0x12, 0xf2, 0xff, 0xfc, 0xc2, 0x06, 0x0c, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x52, 0x07, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x12, 0x38, 0x0a, 0x04,
	0x63, 0x6f, 0x64, 0x65, 0x18, 0x10, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x24, 0x2e, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2e, 0x66, 0x68, 0x69, 0x72, 0x2e, 0x72, 0x35, 0x2e, 0x63, 0x6f, 0x72, 0x65,
	0x2e, 0x43, 0x6f, 0x64, 0x65, 0x61, 0x62, 0x6c, 0x65, 0x43, 0x6f, 0x6e, 0x63, 0x65, 0x70, 0x74,
	0x52, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x12, 0x42, 0x0a, 0x09, 0x73, 0x70, 0x65, 0x63, 0x69, 0x61,
	0x6c, 0x74, 0x79, 0x18, 0x11, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x24, 0x2e, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2e, 0x66, 0x68, 0x69, 0x72, 0x2e, 0x72, 0x35, 0x2e, 0x63, 0x6f, 0x72, 0x65, 0x2e,
	0x43, 0x6f, 0x64, 0x65, 0x61, 0x62, 0x6c, 0x65, 0x43, 0x6f, 0x6e, 0x63, 0x65, 0x70, 0x74, 0x52,
	0x09, 0x73, 0x70, 0x65, 0x63, 0x69, 0x61, 0x6c, 0x74, 0x79, 0x12, 0x4a, 0x0a, 0x08, 0x6c, 0x6f,
	0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x12, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x66, 0x68, 0x69, 0x72, 0x2e, 0x72, 0x35, 0x2e, 0x63, 0x6f,
	0x72, 0x65, 0x2e, 0x52, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x42, 0x0e, 0xf2, 0xff,
	0xfc, 0xc2, 0x06, 0x08, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x08, 0x6c, 0x6f,
	0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x66, 0x0a, 0x12, 0x68, 0x65, 0x61, 0x6c, 0x74, 0x68,
	0x63, 0x61, 0x72, 0x65, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x18, 0x13, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x66, 0x68, 0x69, 0x72,
	0x2e, 0x72, 0x35, 0x2e, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x52, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e,
	0x63, 0x65, 0x42, 0x17, 0xf2, 0xff, 0xfc, 0xc2, 0x06, 0x11, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68,
	0x63, 0x61, 0x72, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x11, 0x68, 0x65, 0x61,
	0x6c, 0x74, 0x68, 0x63, 0x61, 0x72, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x98,
	0x01, 0x0a, 0x07, 0x63, 0x6f, 0x6e, 0x74, 0x61, 0x63, 0x74, 0x18, 0x14, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x2a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x66, 0x68, 0x69, 0x72, 0x2e, 0x72,
	0x35, 0x2e, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x45, 0x78, 0x74, 0x65, 0x6e, 0x64, 0x65, 0x64, 0x43,
	0x6f, 0x6e, 0x74, 0x61, 0x63, 0x74, 0x44, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x42, 0x52, 0xf2, 0xbe,
	0xc0, 0xa4, 0x07, 0x23, 0x74, 0x65, 0x6c, 0x65, 0x63, 0x6f, 0x6d, 0x2e, 0x77, 0x68, 0x65, 0x72,
	0x65, 0x28, 0x75, 0x73, 0x65, 0x20, 0x3d, 0x20, 0x27, 0x68, 0x6f, 0x6d, 0x65, 0x27, 0x29, 0x2e,
	0x65, 0x6d, 0x70, 0x74, 0x79, 0x28, 0x29, 0xf2, 0xbe, 0xc0, 0xa4, 0x07, 0x23, 0x61, 0x64, 0x64,
	0x72, 0x65, 0x73, 0x73, 0x2e, 0x77, 0x68, 0x65, 0x72, 0x65, 0x28, 0x75, 0x73, 0x65, 0x20, 0x3d,
	0x20, 0x27, 0x68, 0x6f, 0x6d, 0x65, 0x27, 0x29, 0x2e, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x28, 0x29,
	0x52, 0x07, 0x63, 0x6f, 0x6e, 0x74, 0x61, 0x63, 0x74, 0x12, 0x4a, 0x0a, 0x08, 0x65, 0x6e, 0x64,
	0x70, 0x6f, 0x69, 0x6e, 0x74, 0x18, 0x15, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x66, 0x68, 0x69, 0x72, 0x2e, 0x72, 0x35, 0x2e, 0x63, 0x6f, 0x72,
	0x65, 0x2e, 0x52, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x42, 0x0e, 0xf2, 0xff, 0xfc,
	0xc2, 0x06, 0x08, 0x45, 0x6e, 0x64, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x52, 0x08, 0x65, 0x6e, 0x64,
	0x70, 0x6f, 0x69, 0x6e, 0x74, 0x3a, 0x4b, 0xc0, 0x9f, 0xe3, 0xb6, 0x05, 0x03, 0xb2, 0xfe, 0xe4,
	0x97, 0x06, 0x3f, 0x68, 0x74, 0x74, 0x70, 0x3a, 0x2f, 0x2f, 0x68, 0x6c, 0x37, 0x2e, 0x6f, 0x72,
	0x67, 0x2f, 0x66, 0x68, 0x69, 0x72, 0x2f, 0x53, 0x74, 0x72, 0x75, 0x63, 0x74, 0x75, 0x72, 0x65,
	0x44, 0x65, 0x66, 0x69, 0x6e, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x2f, 0x4f, 0x72, 0x67, 0x61, 0x6e,
	0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x41, 0x66, 0x66, 0x69, 0x6c, 0x69, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x4a, 0x04, 0x08, 0x07, 0x10, 0x08, 0x42, 0x88, 0x01, 0x98, 0xc6, 0xb0, 0xb5, 0x07,
	0x05, 0x0a, 0x17, 0x63, 0x6f, 0x6d, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x66, 0x68,
	0x69, 0x72, 0x2e, 0x72, 0x35, 0x2e, 0x63, 0x6f, 0x72, 0x65, 0x50, 0x01, 0x5a, 0x65, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f,
	0x66, 0x68, 0x69, 0x72, 0x2f, 0x67, 0x6f, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x66, 0x68, 0x69, 0x72, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f,
	0x72, 0x35, 0x2f, 0x63, 0x6f, 0x72, 0x65, 0x2f, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65,
	0x73, 0x2f, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x61,
	0x66, 0x66, 0x69, 0x6c, 0x69, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x67, 0x6f, 0x5f, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto_rawDescOnce sync.Once
	file_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto_rawDescData = file_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto_rawDesc
)

func file_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto_rawDescGZIP() []byte {
	file_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto_rawDescOnce.Do(func() {
		file_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto_rawDescData)
	})
	return file_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto_rawDescData
}

var file_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto_goTypes = []interface{}{
	(*OrganizationAffiliation)(nil),                  // 0: google.fhir.r5.core.OrganizationAffiliation
	(*datatypes_go_proto.Id)(nil),                    // 1: google.fhir.r5.core.Id
	(*datatypes_go_proto.Meta)(nil),                  // 2: google.fhir.r5.core.Meta
	(*datatypes_go_proto.Uri)(nil),                   // 3: google.fhir.r5.core.Uri
	(*datatypes_go_proto.Code)(nil),                  // 4: google.fhir.r5.core.Code
	(*datatypes_go_proto.Narrative)(nil),             // 5: google.fhir.r5.core.Narrative
	(*anypb.Any)(nil),                                // 6: google.protobuf.Any
	(*datatypes_go_proto.Extension)(nil),             // 7: google.fhir.r5.core.Extension
	(*datatypes_go_proto.Identifier)(nil),            // 8: google.fhir.r5.core.Identifier
	(*datatypes_go_proto.Boolean)(nil),               // 9: google.fhir.r5.core.Boolean
	(*datatypes_go_proto.Period)(nil),                // 10: google.fhir.r5.core.Period
	(*datatypes_go_proto.Reference)(nil),             // 11: google.fhir.r5.core.Reference
	(*datatypes_go_proto.CodeableConcept)(nil),       // 12: google.fhir.r5.core.CodeableConcept
	(*datatypes_go_proto.ExtendedContactDetail)(nil), // 13: google.fhir.r5.core.ExtendedContactDetail
}
var file_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto_depIdxs = []int32{
	1,  // 0: google.fhir.r5.core.OrganizationAffiliation.id:type_name -> google.fhir.r5.core.Id
	2,  // 1: google.fhir.r5.core.OrganizationAffiliation.meta:type_name -> google.fhir.r5.core.Meta
	3,  // 2: google.fhir.r5.core.OrganizationAffiliation.implicit_rules:type_name -> google.fhir.r5.core.Uri
	4,  // 3: google.fhir.r5.core.OrganizationAffiliation.language:type_name -> google.fhir.r5.core.Code
	5,  // 4: google.fhir.r5.core.OrganizationAffiliation.text:type_name -> google.fhir.r5.core.Narrative
	6,  // 5: google.fhir.r5.core.OrganizationAffiliation.contained:type_name -> google.protobuf.Any
	7,  // 6: google.fhir.r5.core.OrganizationAffiliation.extension:type_name -> google.fhir.r5.core.Extension
	7,  // 7: google.fhir.r5.core.OrganizationAffiliation.modifier_extension:type_name -> google.fhir.r5.core.Extension
	8,  // 8: google.fhir.r5.core.OrganizationAffiliation.identifier:type_name -> google.fhir.r5.core.Identifier
	9,  // 9: google.fhir.r5.core.OrganizationAffiliation.active:type_name -> google.fhir.r5.core.Boolean
	10, // 10: google.fhir.r5.core.OrganizationAffiliation.period:type_name -> google.fhir.r5.core.Period
	11, // 11: google.fhir.r5.core.OrganizationAffiliation.organization:type_name -> google.fhir.r5.core.Reference
	11, // 12: google.fhir.r5.core.OrganizationAffiliation.participating_organization:type_name -> google.fhir.r5.core.Reference
	11, // 13: google.fhir.r5.core.OrganizationAffiliation.network:type_name -> google.fhir.r5.core.Reference
	12, // 14: google.fhir.r5.core.OrganizationAffiliation.code:type_name -> google.fhir.r5.core.CodeableConcept
	12, // 15: google.fhir.r5.core.OrganizationAffiliation.specialty:type_name -> google.fhir.r5.core.CodeableConcept
	11, // 16: google.fhir.r5.core.OrganizationAffiliation.location:type_name -> google.fhir.r5.core.Reference
	11, // 17: google.fhir.r5.core.OrganizationAffiliation.healthcare_service:type_name -> google.fhir.r5.core.Reference
	13, // 18: google.fhir.r5.core.OrganizationAffiliation.contact:type_name -> google.fhir.r5.core.ExtendedContactDetail
	11, // 19: google.fhir.r5.core.OrganizationAffiliation.endpoint:type_name -> google.fhir.r5.core.Reference
	20, // [20:20] is the sub-list for method output_type
	20, // [20:20] is the sub-list for method input_type
	20, // [20:20] is the sub-list for extension type_name
	20, // [20:20] is the sub-list for extension extendee
	0,  // [0:20] is the sub-list for field type_name
}

func init() { file_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto_init() }
func file_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto_init() {
	if File_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*OrganizationAffiliation); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto_goTypes,
		DependencyIndexes: file_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto_depIdxs,
		MessageInfos:      file_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto_msgTypes,
	}.Build()
	File_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto = out.File
	file_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto_rawDesc = nil
	file_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto_goTypes = nil
	file_proto_google_fhir_proto_r5_core_resources_organization_affiliation_proto_depIdxs = nil
}
