export interface ClientChange {
  lastModifiedTime: number;
  value: string;
}
export interface SyncingRequest {
  timestamp: number;
	clientTime: number;
  changes: {
    [id: string]: string;
  };
}

export interface SyncingResponse {
  timestamp: number;
  changes: {
    [id: string]: string;
  };
}
