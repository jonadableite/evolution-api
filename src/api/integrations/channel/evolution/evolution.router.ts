import { RouterBroker } from '@api/abstract/abstract.router';
import { InstanceDto } from '@api/dto/instance.dto';
import { HttpStatus } from '@api/routes/index.router';
import { evolutionController } from '@api/server.module';
import { ConfigService } from '@config/env.config';
import { instanceSchema } from '@validate/instance.schema';
import { Router } from 'express';

export class EvolutionRouter extends RouterBroker {
  constructor(readonly configService: ConfigService) {
    super();

    this.router.post(this.routerPath('webhook/evolution', false), async (req, res) => {
      const { body } = req;
      const response = await evolutionController.receiveWebhook(body);

      return res.status(200).json(response);
    });

    this.router.get(this.routerPath('status/all'), async (req, res) => {
      const response = await this.dataValidate<InstanceDto>({
        request: req,
        schema: instanceSchema,
        ClassRef: InstanceDto,
        execute: (instance) => evolutionController.fetchAllStatus(instance),
      });

      res.status(HttpStatus.OK).json(response);
    });

    this.router.delete(this.routerPath('status/:statusId'), async (req, res) => {
      const response = await this.dataValidate<InstanceDto>({
        request: req,
        schema: instanceSchema,
        ClassRef: InstanceDto,
        execute: (instance) => evolutionController.deleteStatus(instance, req.params.statusId),
      });

      res.status(HttpStatus.OK).json(response);
    });
  }

  public readonly router: Router = Router();
}
