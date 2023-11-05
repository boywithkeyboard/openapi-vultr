import createClient from 'openapi-fetch'
import { paths } from './third_party/schema'

type Client = ReturnType<typeof createClient<paths>>

export class Vultr {
  #client

  delete: Client['DELETE']
  get: Client['GET']
  patch: Client['PATCH']
  post: Client['POST']
  put: Client['PUT']

  constructor(options: {
    token: string
  }) {
    this.#client = createClient<paths>({
      baseUrl: 'https://api.vultr.com/v2',
      headers: {
        Authorization: `Bearer ${options.token}`
      }
    })

    this.delete = this.#client.DELETE
    this.get = this.#client.GET
    this.patch = this.#client.PATCH
    this.post = this.#client.POST
    this.put = this.#client.PUT
  }
}
