import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { apIsDescription } from './resources/ap-is';

export class ApisetuGovIgrmaharashtra implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Apisetu Gov Igrmaharashtra',
		name: 'N8nDevApisetuGovIgrmaharashtra',
		icon: { light: 'file:./apisetu-gov-igrmaharashtra.svg', dark: 'file:./apisetu-gov-igrmaharashtra.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Maharashtra Dept of Registration & Stamps issues digital Leave & License Certificates via DigiLocker.',
		defaults: { name: 'Apisetu Gov Igrmaharashtra' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevApisetuGovIgrmaharashtraApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "AP Is",
					"value": "AP Is",
					"description": ""
				}
			],
			"default": ""
		},
		...apIsDescription
		],
	};
}
