import {
  ClientValueChange,
  DataType,
  SyncingRequest,
  SyncingResponse,
} from "./shared";

const hasOwnProperty = Object.prototype.hasOwnProperty;

export class Server {
  store: ServerDataStore;

  synchronize(request: SyncingRequest): SyncingResponse {
    let lastTimestamp = request.timestamp;
    let items = this.store.items;
    // let serverChanges = Object.create(null);
    let clientChangeLists = request.changeLists;
    let now = Date.now();
    let clientTimeOffset = now - request.clientTime;

    for (let id of Object.keys(clientChangeLists)) {
      let clientChangeList = clientChangeLists[id];
      let type = clientChangeList.type;
      let clientChanges = clientChangeList[id];

      if (type === "value") {
        let clientChange = clientChanges[0] as ClientValueChange<any>;
        let lastModifiedTime = Math.min(
          clientChange.lastModifiedTime + clientTimeOffset,
          now
        );

        if (
          hasOwnProperty.call(items, id) &&
          items[id].lastModifiedTime > lastModifiedTime
        ) {
          delete clientChangeLists[id];
          continue;
        }

        items[id] = {
          id,
          type,
          timestamp: now,
          lastModifiedTime,
          value: clientChange.value,
        };
      } else if (type === "increment") {
        let item: ServerDataItem<any>;

        if (hasOwnProperty.call(items, id)) {
          item = items[id];
          item.timestamp = now;
        } else {
          item = items[id] = {
            id,
            type,
            timestamp: now,
            uids: [],
            value: 0,
          };
        }

        for (let clientChange of clientChanges as ClientIncrementChange[]) {
          let { uid, increment } = clientChange;

          if (item.uids.indexOf(uid) < 0) {
            item.value += increment;
            item.uids.push(uid);
          }
        }

        delete clientChangeLists[id];
      }

      if (
        this.hasOwnProperty.call(items, id) &&
        items[id].lastModifiedTime > clientChange[id]
      ) {
        continue;
      }

      items[id] = {
        id,
        timestamp: now,
        lastModifiedTime,
        value: clientChange.value,
      };
    }

    for (let id of Object.keys(items)) {
      let item = items[id];
      if (item.timestamp > lastTimestamp && item.timestamp !== now) {
        serverChanges[id] = item.value;
      }
    }

    return {
      timestamp: now,
      changes: serverChanges,
    };
  }
}

export interface ServerDataItem<T> {
  id: string;
  type: DataType;
  timestamp: number;
  lastModifiedTime?: number;
  value: string;
}
export interface ServerDataStore {
  timestamp: number;
  items: {
    [id: string]: ServerDataItem<any>;
  };
}

interface ServerChangeMap {
  [id: string]: any;
}
