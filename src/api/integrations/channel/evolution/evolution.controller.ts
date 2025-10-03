import { InstanceDto } from '@api/dto/instance.dto';
import { PrismaRepository } from '@api/repository/repository.service';
import { WAMonitoringService } from '@api/services/monitor.service';
import { StatusDeleteResponse, StatusListResponse } from '@api/types/status.types';
import { Logger } from '@config/logger.config';
import { BadRequestException } from '@exceptions';

import { ChannelController, ChannelControllerInterface } from '../channel.controller';

export class EvolutionController extends ChannelController implements ChannelControllerInterface {
  private readonly logger = new Logger('EvolutionController');

  constructor(prismaRepository: PrismaRepository, waMonitor: WAMonitoringService) {
    super(prismaRepository, waMonitor);
  }

  integrationEnabled: boolean;

  public async receiveWebhook(data: any): Promise<{ status: string }> {
    const numberId = data.numberId;

    if (!numberId) {
      this.logger.error('WebhookService -> receiveWebhookEvolution -> numberId not found');
      return { status: 'error' };
    }

    const instance = await this.prismaRepository.instance.findFirst({
      where: { number: numberId },
    });

    if (!instance) {
      this.logger.error('WebhookService -> receiveWebhook -> instance not found');
      return { status: 'error' };
    }

    await this.waMonitor.waInstances[instance.name].connectToWhatsapp(data);

    return {
      status: 'success',
    };
  }

  public async fetchAllStatus(instance: InstanceDto): Promise<StatusListResponse> {
    try {
      const { instanceName } = instance;

      if (!instanceName) {
        throw new BadRequestException('Instance name is required');
      }

      if (!this.waMonitor.waInstances[instanceName]) {
        throw new BadRequestException(`Instance '${instanceName}' not found or not connected`);
      }

      return await this.waMonitor.waInstances[instanceName].fetchAllStatus();
    } catch (error) {
      this.logger.error(`Error fetching all status: ${error.message}`);
      throw error;
    }
  }

  public async deleteStatus(instance: InstanceDto, statusId: string): Promise<StatusDeleteResponse> {
    try {
      const { instanceName } = instance;

      if (!instanceName) {
        throw new BadRequestException('Instance name is required');
      }

      if (!this.waMonitor.waInstances[instanceName]) {
        throw new BadRequestException(`Instance '${instanceName}' not found or not connected`);
      }

      if (!statusId || typeof statusId !== 'string') {
        throw new BadRequestException('Valid status ID is required');
      }

      return await this.waMonitor.waInstances[instanceName].deleteStatus(statusId);
    } catch (error) {
      this.logger.error(`Error deleting status: ${error.message}`);
      throw error;
    }
  }
}
