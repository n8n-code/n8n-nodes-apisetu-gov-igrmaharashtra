import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovIgrmaharashtraApi implements ICredentialType {
        name = 'N8nDevApisetuGovIgrmaharashtraApi';

        displayName = 'Apisetu Gov Igrmaharashtra API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovIgrmaharashtra/apisetu-gov-igrmaharashtra.svg', dark: 'file:../nodes/ApisetuGovIgrmaharashtra/apisetu-gov-igrmaharashtra.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/igrmaharashtra/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/igrmaharashtra/v3',
                        description: 'The base URL of your Apisetu Gov Igrmaharashtra API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
