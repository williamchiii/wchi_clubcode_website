import { type SchemaTypeDefinition } from 'sanity'
import { memberType } from './member'
import { teamType } from './team'
import { eventType } from './event'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [memberType, teamType, eventType],
}
