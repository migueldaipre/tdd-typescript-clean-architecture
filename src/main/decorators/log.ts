import { Controller, HttpRequest, HttpResponse } from '../../presentation/protocols'

export class LogControllerDecorator implements Controller {
  private readonly controller: Controller

  constructor (controller: Controller) {
    this.controller = controller
  }

  async handle (httpResquest: HttpRequest): Promise<HttpResponse> {
    await this.controller.handle(httpResquest)
    return null
  }
}