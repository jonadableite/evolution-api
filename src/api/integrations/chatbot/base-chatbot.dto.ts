import { TriggerOperator, TriggerType } from '@api/types/prisma.types';
export class BaseChatbotDto {
  enabled?: boolean;
  description: string;
  expire?: number;
  keywordFinish?: string;
  delayMessage?: number;
  unknownMessage?: string;
  listeningFromMe?: boolean;
  stopBotFromMe?: boolean;
  keepOpen?: boolean;
  debounceTime?: number;
  triggerType: TriggerType;
  triggerOperator?: TriggerOperator;
  triggerValue?: string;
  ignoreJids?: string[];
  splitMessages?: boolean;
  timePerChar?: number;
}
export class BaseChatbotSettingDto {
  expire?: number;
  keywordFinish?: string;
  delayMessage?: number;
  unknownMessage?: string;
  listeningFromMe?: boolean;
  stopBotFromMe?: boolean;
  keepOpen?: boolean;
  debounceTime?: number;
  ignoreJids?: any;
  splitMessages?: boolean;
  timePerChar?: number;
  fallbackId?: string;
}
