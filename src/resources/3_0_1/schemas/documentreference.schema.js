const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const InstantScalar = require('../scalars/instant.scalar.js');

/**
 * @name exports
 * @summary DocumentReference Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DocumentReference',
	description: 'Base StructureDefinition for DocumentReference Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'DocumentReference_Enum_schema',
					values: { DocumentReference: { value: 'DocumentReference' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		masterIdentifier: {
			type: require('./identifier.schema.js'),
			description:
				'Document identifier as assigned by the source of the document. This identifier is specific to this version of the document. This unique identifier may be used elsewhere to identify this version of the document.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'Other identifiers associated with the document, including version independent identifiers.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'The status of this document reference.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/document-reference-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of this document reference.',
		},
		_docStatus: {
			type: require('./element.schema.js'),
			description: 'The status of the underlying document.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/composition-status
		docStatus: {
			type: CodeScalar,
			description: 'The status of the underlying document.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/c80-doc-typecodes
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'Specifies the particular kind of document referenced  (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the document referenced.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/c80-doc-classcodes
		class: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A categorization for the type of document referenced - helps for indexing and searching. This may be implied by or derived from the code specified in the DocumentReference.type.',
		},
		subject: {
			type: new GraphQLUnionType({
				name: 'DocumentReferencesubject_subject_Union',
				description:
					'Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure).',
				types: () => [
					require('./patient.schema.js'),
					require('./practitioner.schema.js'),
					require('./group.schema.js'),
					require('./device.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'Group') {
						return require('./group.schema.js');
					}
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
				},
			}),
			description:
				'Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure).',
		},
		_created: {
			type: require('./element.schema.js'),
			description: 'When the document was created.',
		},
		created: {
			type: DateTimeScalar,
			description: 'When the document was created.',
		},
		_indexed: {
			type: require('./element.schema.js'),
			description: 'When the document reference was created.',
		},
		indexed: {
			type: new GraphQLNonNull(InstantScalar),
			description: 'When the document reference was created.',
		},
		author: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'DocumentReferenceauthor_author_Union',
					description:
						'Identifies who is responsible for adding the information to the document.',
					types: () => [
						require('./practitioner.schema.js'),
						require('./organization.schema.js'),
						require('./device.schema.js'),
						require('./patient.schema.js'),
						require('./relatedperson.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Practitioner') {
							return require('./practitioner.schema.js');
						}
						if (data && data.resourceType === 'Organization') {
							return require('./organization.schema.js');
						}
						if (data && data.resourceType === 'Device') {
							return require('./device.schema.js');
						}
						if (data && data.resourceType === 'Patient') {
							return require('./patient.schema.js');
						}
						if (data && data.resourceType === 'RelatedPerson') {
							return require('./relatedperson.schema.js');
						}
					},
				}),
			),
			description:
				'Identifies who is responsible for adding the information to the document.',
		},
		authenticator: {
			type: new GraphQLUnionType({
				name: 'DocumentReferenceauthenticator_authenticator_Union',
				description:
					'Which person or organization authenticates that this document is valid.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./organization.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				'Which person or organization authenticates that this document is valid.',
		},
		custodian: {
			type: new GraphQLUnionType({
				name: 'DocumentReferencecustodian_custodian_Union',
				description:
					'Identifies the organization or group who is responsible for ongoing maintenance of and access to the document.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				'Identifies the organization or group who is responsible for ongoing maintenance of and access to the document.',
		},
		relatesTo: {
			type: new GraphQLList(require('./documentreferencerelatesto.schema.js')),
			description:
				'Relationships that this document has with other document references that already exist.',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				"Human-readable description of the source document. This is sometimes known as the 'title'.",
		},
		description: {
			type: GraphQLString,
			description:
				"Human-readable description of the source document. This is sometimes known as the 'title'.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/security-labels
		securityLabel: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				"A set of Security-Tag codes specifying the level of privacy/security of the Document. Note that DocumentReference.meta.security contains the security labels of the 'reference' to the document, while DocumentReference.securityLabel contains a snapshot of the security labels on the document the reference refers to.",
		},
		content: {
			type: new GraphQLList(
				new GraphQLNonNull(require('./documentreferencecontent.schema.js')),
			),
			description:
				'The document and format referenced. There may be multiple content element repetitions, each with a different format.',
		},
		context: {
			type: require('./documentreferencecontext.schema.js'),
			description: 'The clinical context in which the document was prepared.',
		},
	}),
});
