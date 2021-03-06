const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const OidScalar = require('../scalars/oid.scalar.js');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');

/**
 * @name exports
 * @summary ImagingStudy Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImagingStudy_Input',
	description: 'Base StructureDefinition for ImagingStudy Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'ImagingStudy_Enum_input',
					values: { ImagingStudy: { value: 'ImagingStudy' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.input.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.input.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_started: {
			type: require('./element.input.js'),
			description: 'Date and Time the study started.',
		},
		started: {
			type: DateTimeScalar,
			description: 'Date and Time the study started.',
		},
		patient: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The patient imaged in the study.',
		},
		_uid: {
			type: require('./element.input.js'),
			description: 'Formal identifier for the study.',
		},
		uid: {
			type: new GraphQLNonNull(OidScalar),
			description: 'Formal identifier for the study.',
		},
		accession: {
			type: require('./identifier.input.js'),
			description:
				'Accession Number is an identifier related to some aspect of imaging workflow and data management. Usage may vary across different institutions.  See for instance [IHE Radiology Technical Framework Volume 1 Appendix A](http://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_TF_Rev13.0_Vol1_FT_2014-07-30.pdf).',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description: 'Other identifiers for the study.',
		},
		order: {
			type: new GraphQLList(GraphQLString),
			description:
				'A list of the diagnostic orders that resulted in this imaging study being performed.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/dicom-cid29
		modalityList: {
			type: new GraphQLList(require('./coding.input.js')),
			description:
				'A list of all the Series.ImageModality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).',
		},
		referrer: {
			type: GraphQLString,
			description: 'The requesting/referring physician.',
		},
		_availability: {
			type: require('./element.input.js'),
			description: 'Availability of study (online, offline or nearline).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/instance-availability
		availability: {
			type: CodeScalar,
			description: 'Availability of study (online, offline or nearline).',
		},
		_url: {
			type: require('./element.input.js'),
			description: 'WADO-RS resource where Study is available.',
		},
		url: {
			type: UriScalar,
			description: 'WADO-RS resource where Study is available.',
		},
		_numberOfSeries: {
			type: require('./element.input.js'),
			description: 'Number of Series in Study.',
		},
		numberOfSeries: {
			type: new GraphQLNonNull(UnsignedIntScalar),
			description: 'Number of Series in Study.',
		},
		_numberOfInstances: {
			type: require('./element.input.js'),
			description: 'Number of SOP Instances in Study.',
		},
		numberOfInstances: {
			type: new GraphQLNonNull(UnsignedIntScalar),
			description: 'Number of SOP Instances in Study.',
		},
		procedure: {
			type: new GraphQLList(GraphQLString),
			description: 'Type of procedure performed.',
		},
		interpreter: {
			type: GraphQLString,
			description:
				'Who read the study and interpreted the images or other content.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				'Institution-generated description or classification of the Study performed.',
		},
		description: {
			type: GraphQLString,
			description:
				'Institution-generated description or classification of the Study performed.',
		},
		series: {
			type: new GraphQLList(require('./imagingstudyseries.input.js')),
			description:
				'Each study has one or more series of images or other content.',
		},
	}),
});
