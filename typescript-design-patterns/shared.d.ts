type DataType = "value" | "increment";

export interface ClientChange {
  // lastModifiedTime: number;
  // value: string;
}

export interface ClientValueChange<T> extends ClientChange {
  type: "value";
  lastModifiedTime: number;
  value: T;
}

export interface ClientIncrementChange<T> extends ClientChange {
  type: "increment";
  synced: boolean;
  uid: string;
  increment: number;
}

export interface ClientChangeList<T extends ClientChange> {
  type: DataType;
  changes: T[];
}
export interface SyncingRequest {
  timestamp: number;
  clientTime: number;
  changeLists: {
    [id: string]: ClientChangeList<ClientChange>;
  };
}

export interface SyncingResponse {
  timestamp: number;
  changes: {
    [id: string]: any;
  };
}
# Moving Blazingly Fast with Vim Motions
