import createOpenAPIClient from 'openapi-fetch'
import { paths } from './third_party/v2'

export type Client = ReturnType<typeof createOpenAPIClient<paths>>

export function createClient({ token }: { token: string }) {
  return createOpenAPIClient<paths>({
    baseUrl: 'https://api.vultr.com/v2',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
