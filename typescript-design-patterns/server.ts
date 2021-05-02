import { SyncingRequest, SyncingResponse } from "./shared";

export class Server {
  store: ServerDataStore = {
    timestamp: 0,
    items: Object.create(null),
  };

  constructor(public server: Server) {}

  getData(clientTimestamp: number): ServerDataStore {
    if (clientTimestamp < this.store.timestamp) {
      return this.store;
    } else {
      return undefined;
    }
  }

    synchronize(request: SyncingRequest): SyncingResponse {
      let lastTimestamp = request.timestamp;
      let now = Date.now();
      let serverChanges = Object.create(null);
      let items = this.store.items;
      for (let id of Object.keys(items)) {
        let item = items[id];
        if (item.timestamp > lastTimestamp) {
          serverChanges[id] = item.value;
        }
      }
      return {
        timestamp: now,
        changes: serverChanges,
      };
    }
}

export interface ServerDataItem {
  id: string;
  timestamp: number;
  lastModifiedTime: number;
  value: string;
}
export interface ServerDataStore {
  timestamp: number;
  items: {
    [id: string]: ServerDataItem;
  };
}
