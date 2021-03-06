const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary TestReporttest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestReporttest',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_name: {
			type: require('./element.schema.js'),
			description:
				'The name of this test used for tracking/logging purposes by test engines.',
		},
		name: {
			type: GraphQLString,
			description:
				'The name of this test used for tracking/logging purposes by test engines.',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				'A short description of the test used by test engines for tracking and reporting purposes.',
		},
		description: {
			type: GraphQLString,
			description:
				'A short description of the test used by test engines for tracking and reporting purposes.',
		},
		action: {
			type: new GraphQLList(
				new GraphQLNonNull(require('./testreporttestaction.schema.js')),
			),
			description: 'Action would contain either an operation or an assertion.',
		},
	}),
});
