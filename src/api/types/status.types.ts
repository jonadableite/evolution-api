export interface StatusKey {
  remoteJid: string;
  fromMe: boolean;
  id: string;
  participant?: string;
}

export interface StatusMessage {
  key: StatusKey;
  pushName: string | null;
  message: any;
  messageTimestamp: number | null;
  messageType: string | null;
}

export interface StatusListResponse {
  count: number;
  status: StatusMessage[];
}

export interface StatusDeleteResponse {
  success: boolean;
  message: string;
  deletedId: string;
  timestamp: number;
}

export interface StatusPostResponse {
  success: boolean;
  message: string;
  statusId: string;
  timestamp: number;
  recipients?: string[];
}

export type StatusType = 'text' | 'image' | 'video' | 'audio';

export interface StatusContent {
  type: StatusType;
  content: string;
  caption?: string;
  backgroundColor?: string;
  font?: number;
  media?: string;
  mimetype?: string;
  fileName?: string;
}

export interface StatusRecipients {
  statusJidList?: string[];
  allContacts?: boolean;
}

export interface StatusRequest extends StatusContent, StatusRecipients {
  instanceName: string;
}
