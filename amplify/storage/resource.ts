import { defineStorage } from '@aws-amplify/backend';
import { onCvUploadHandler } from '../functions/upload-handler/resource';

export const storage = defineStorage({
  name: 'amplifyTeamDrive',
  access: (allow) => ({
    'profile/{entity_id}/*': [
      allow.entity('identity').to(['read', 'write', 'delete']),
      allow.resource(onCvUploadHandler).to(['read'])
    ]
  }),
  triggers: {
    onUpload: onCvUploadHandler,
  }
});