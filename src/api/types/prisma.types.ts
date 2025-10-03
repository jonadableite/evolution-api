import { JsonValue } from '@prisma/client/runtime/library';

export interface Contact {
  id: string;
  remoteJid: string;
  pushName?: string;
  profilePicUrl?: string;
  instanceId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  id: string;
  key: JsonValue;
  pushName?: string;
  message?: JsonValue;
  messageTimestamp?: number;
  owner: string;
  source?: string;
  messageType?: string;
  chatwootMessageId?: number;
  chatwootConversationId?: number;
  chatwootContactInboxSourceId?: string;
  chatwootIsRead?: boolean;
  instanceId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MessageUpdate {
  id: string;
  remoteJid: string;
  fromMe: boolean;
  participant?: string;
  updatedMessage: JsonValue;
  instanceId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Instance {
  id: string;
  name: string;
  connectionStatus?: string;
  ownerJid?: string;
  profileName?: string;
  profilePicUrl?: string;
  integration?: string;
  number?: string;
  businessId?: string;
  token?: string;
  clientName?: string;
  disconnectionReasonCode?: number;
  disconnectionObject?: JsonValue;
  disconnectionAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IntegrationSession {
  id: string;
  sessionId: string;
  remoteJid: string;
  status: string;
  awaitUser: boolean;
  pushName: string;
  type: string;
  botId?: string;
  instanceId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Chatwoot {
  id: string;
  enabled: boolean;
  accountId: string;
  token: string;
  url: string;
  signMsg?: boolean;
  reopenConversation?: boolean;
  conversationPending?: boolean;
  instanceId: string;
  nameInbox?: string;
  mergeBrazilContacts?: boolean;
  importContacts?: boolean;
  importMessages?: boolean;
  daysLimitImportMessages?: number;
  signDelimiter?: string;
  autoCreate?: boolean;
  organization?: string;
  logo?: string;
  ignoreJids?: JsonValue;
  createdAt: Date;
  updatedAt: Date;
}

export interface Webhook {
  id: string;
  enabled: boolean;
  url: string;
  events: JsonValue;
  headers?: JsonValue;
  webhookBase64: boolean;
  webhookByEvents: boolean;
  instanceId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Proxy {
  id: string;
  host: string;
  port: number;
  protocol: string;
  username?: string;
  password?: string;
  instanceId: string;
  createdAt: Date;
  updatedAt: Date;
}

// Enums do Prisma
export enum TriggerType {
  all = 'all',
  keyword = 'keyword',
  none = 'none',
  advanced = 'advanced',
}

export enum TriggerOperator {
  contains = 'contains',
  equals = 'equals',
  startsWith = 'startsWith',
  endsWith = 'endsWith',
  regex = 'regex',
}

export enum OpenaiBotType {
  assistant = 'assistant',
  chatCompletion = 'chatCompletion',
}

export enum DifyBotType {
  chatBot = 'chatBot',
  textGenerator = 'textGenerator',
  agent = 'agent',
  workflow = 'workflow',
}

// Chatbot interfaces
export interface Typebot {
  id: string;
  enabled: boolean;
  url: string;
  typebot: string;
  expire?: number;
  keywordFinish?: string;
  delayMessage?: number;
  unknownMessage?: string;
  listeningFromMe?: boolean;
  stopBotFromMe?: boolean;
  keepOpen?: boolean;
  debounceTime?: number;
  triggerType?: TriggerType;
  triggerOperator?: TriggerOperator;
  triggerValue?: string;
  instanceId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OpenaiBot {
  id: string;
  enabled: boolean;
  description: string;
  botType: string;
  assistantId?: string;
  functionUrl?: string;
  model?: string;
  systemMessages?: JsonValue;
  assistantMessages?: JsonValue;
  userMessages?: JsonValue;
  maxTokens?: number;
  temperature?: number;
  topP?: number;
  n?: number;
  stop?: JsonValue;
  presencePenalty?: number;
  frequencyPenalty?: number;
  openaiCredsId?: string;
  instanceId: string;
  triggerType: string;
  triggerOperator: string;
  triggerValue: string;
  expire?: number;
  keywordFinish?: string;
  delayMessage?: number;
  unknownMessage?: string;
  listeningFromMe?: boolean;
  stopBotFromMe?: boolean;
  keepOpen?: boolean;
  debounceTime?: number;
  ignoreJids?: JsonValue;
  createdAt: Date;
  updatedAt: Date;
}

export interface OpenaiSetting {
  id: string;
  openaiBot: OpenaiBot;
  openaiCredsId?: string;
  expire?: number;
  keywordFinish?: string;
  delayMessage?: number;
  unknownMessage?: string;
  listeningFromMe?: boolean;
  stopBotFromMe?: boolean;
  keepOpen?: boolean;
  debounceTime?: number;
  instanceId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Dify {
  id: string;
  enabled: boolean;
  description?: string;
  botType?: string;
  apiUrl?: string;
  apiKey?: string;
  expire?: number;
  keywordFinish?: string;
  delayMessage?: number;
  unknownMessage?: string;
  listeningFromMe?: boolean;
  stopBotFromMe?: boolean;
  keepOpen?: boolean;
  debounceTime?: number;
  triggerType?: TriggerType;
  triggerOperator?: TriggerOperator;
  triggerValue?: string;
  instanceId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface DifySetting {
  id: string;
  difyBot: Dify;
  expire?: number;
  keywordFinish?: string;
  delayMessage?: number;
  unknownMessage?: string;
  listeningFromMe?: boolean;
  stopBotFromMe?: boolean;
  keepOpen?: boolean;
  debounceTime?: number;
  instanceId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Evoai {
  id: string;
  enabled: boolean;
  description: string;
  agentUrl: string;
  apiKey?: string;
  instanceId: string;
  triggerType: string;
  triggerOperator: string;
  triggerValue: string;
  expire?: number;
  keywordFinish?: string;
  delayMessage?: number;
  unknownMessage?: string;
  listeningFromMe?: boolean;
  stopBotFromMe?: boolean;
  keepOpen?: boolean;
  debounceTime?: number;
  ignoreJids?: JsonValue;
  createdAt: Date;
  updatedAt: Date;
}

export interface EvoaiSetting {
  id: string;
  evoaiBot: Evoai;
  expire?: number;
  keywordFinish?: string;
  delayMessage?: number;
  unknownMessage?: string;
  listeningFromMe?: boolean;
  stopBotFromMe?: boolean;
  keepOpen?: boolean;
  debounceTime?: number;
  instanceId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface EvolutionBot {
  id: string;
  enabled: boolean;
  description?: string;
  apiUrl?: string;
  apiKey?: string;
  expire?: number;
  keywordFinish?: string;
  delayMessage?: number;
  unknownMessage?: string;
  listeningFromMe?: boolean;
  stopBotFromMe?: boolean;
  keepOpen?: boolean;
  debounceTime?: number;
  triggerType?: TriggerType;
  triggerOperator?: TriggerOperator;
  triggerValue?: string;
  instanceId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface EvolutionBotSetting {
  id: string;
  evolutionBot: EvolutionBot;
  expire?: number;
  keywordFinish?: string;
  delayMessage?: number;
  unknownMessage?: string;
  listeningFromMe?: boolean;
  stopBotFromMe?: boolean;
  keepOpen?: boolean;
  debounceTime?: number;
  instanceId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Flowise {
  id: string;
  enabled: boolean;
  description?: string;
  apiUrl?: string;
  apiKey?: string;
  expire?: number;
  keywordFinish?: string;
  delayMessage?: number;
  unknownMessage?: string;
  listeningFromMe?: boolean;
  stopBotFromMe?: boolean;
  keepOpen?: boolean;
  debounceTime?: number;
  triggerType?: TriggerType;
  triggerOperator?: TriggerOperator;
  triggerValue?: string;
  instanceId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface N8n {
  id: string;
  enabled: boolean;
  description: string;
  webhookUrl: string;
  basicAuthUser?: string;
  basicAuthPass?: string;
  instanceId: string;
  triggerType: string;
  triggerOperator: string;
  triggerValue: string;
  expire?: number;
  keywordFinish?: string;
  delayMessage?: number;
  unknownMessage?: string;
  listeningFromMe?: boolean;
  stopBotFromMe?: boolean;
  keepOpen?: boolean;
  debounceTime?: number;
  ignoreJids?: JsonValue;
  createdAt: Date;
  updatedAt: Date;
}

export interface N8nSetting {
  id: string;
  n8nBot: N8n;
  expire?: number;
  keywordFinish?: string;
  delayMessage?: number;
  unknownMessage?: string;
  listeningFromMe?: boolean;
  stopBotFromMe?: boolean;
  keepOpen?: boolean;
  debounceTime?: number;
  instanceId: string;
  createdAt: Date;
  updatedAt: Date;
}

// Prisma query types
export interface ContactWhereInput {
  id?: string;
  remoteJid?: string;
  pushName?: string;
  instanceId?: string;
  AND?: ContactWhereInput[];
  OR?: ContactWhereInput[];
  NOT?: ContactWhereInput[];
}

export interface MessageWhereInput {
  id?: string;
  pushName?: string;
  instanceId?: string;
  source?: string;
  messageType?: string;
  AND?: MessageWhereInput[];
  OR?: MessageWhereInput[];
  NOT?: MessageWhereInput[];
}

export interface ContactFindManyArgs {
  where?: ContactWhereInput;
  orderBy?: any;
  take?: number;
  skip?: number;
  select?: any;
  include?: any;
}

export interface MessageFindManyArgs {
  where?: MessageWhereInput;
  orderBy?: any;
  take?: number;
  skip?: number;
  select?: any;
  include?: any;
}

// Prisma namespace with sql function
export const Prisma = {
  sql: (strings: TemplateStringsArray, ...values: any[]) => {
    let result = strings[0];
    for (let i = 1; i < strings.length; i++) {
      result += String(values[i - 1]) + strings[i];
    }
    return result;
  },
};

// $Enums object for compatibility
export const $Enums = {
  TriggerType,
  TriggerOperator,
  OpenaiBotType,
  DifyBotType,
};

// Export JsonValue for compatibility
export { JsonValue };
