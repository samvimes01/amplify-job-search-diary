import { defineFunction, defineStorage } from '@aws-amplify/backend';

const onUpload = defineFunction({
  entry: './on-upload-handlers.ts'
})

export const storage = defineStorage({
  name: 'amplifyTeamDrive',
  access: (allow) => ({
    'profile/{entity_id}/*': [
      allow.entity('identity').to(['read', 'write', 'delete']),
      allow.resource(onUpload).to(['read'])
    ]
  }),
  triggers: {
    onUpload: onUpload,
  }
});