import { Server, ClientChange } from "./";
import { ClientChangeList, ClientIncrementChange } from "./shared";

const hasOwnProperty = Object.prototype.hasOwnProperty;

export interface ClientDataItem<T> {
  id: string;
  value: T;
}

export interface ClientDataStore {
  timestamp: number;
  items: {
    [id: string]: ClientDataItem<any>;
  };
  changeLists: {
    [id: string]: ClientChangeList<ClientChange>;
  };
}

interface ClientChangeMap {
  [id: string]: ClientChange;
}
// const enum ClientChangeIndex {
//   lastModifiedTime,
//   value,
// }
// type ClientChange<T> = [number, T];

// let change: ClientChange<string> = [0, "foo"];
// let value = change[ClientChangeIndex.value];
type DataType = "value" | "increment";



export class Client {
  constructor(public server: Server) {}
  store: ClientDataStore = {
    timestamp: 0,
    items: Object.create(null),
    changeLists: Object.create(null),
  };

  synchronize(): void {
    let store = this.store;
    let clientItems = store.items;
    let clientChanges: ClientChangeMap = Object.create(null);
    let storedChangeLists = store.changeLists;

    for (let id of Object.keys(storedChangeLists)) {
      let changeList = storedChangeLists[id];

      if (changeList.type === 'increment') {
          let changes = changeList.changes;
          let lastChange = changes[changes.length - 1];

          (lastChange as ClientIncrementChange).synced = true;
      }
  }

    let response = this.server.synchronize({
      timestamp: store.timestamp,
      clientTime: Date.now(),
      changeLists: storedChangeLists,
    });
    
    let serverChanges = response.changes

    for (let id of Object.keys(serverChanges)) {
      let change = serverChanges[id];

      clientItems[id] = {
          id,
          type: change.type,
          value: change.value
      };
  }

  store.changeLists = Object.create(null);




    store.timestamp = response.timestamp;
  }

  update(id: string, type: "increment", increment: number): void;
  update<T>(id: string, type: "value", value: T): void;
  update<T>(id: string, type: DataType, value: T): void;
  update<T>(id: string, type: DataType, value: T): void {
    let store = this.store;
    let items = store.items;
    let storedChanges = store.changeLists;
    if (type === "value") {
      let change: ClientValueChange<T> = {
        lastModifiedTime: Date.now(),
        value,
      };
      storedChangeLists[id] = {
        type,
        changes: [change]
    };

      if (hasOwnProperty.call(items, id)) {
        items[id].value = value;
      } else {
        items[id] = {
          id,
          type,
          value,
        };
      }
    } else if (type === "increment") {
      let storedChange = storedChanges[id] as ClientIncrementChange;

      if (storedChange) {
        storedChange.increment += <any>value as number
      } else {
        storedChange = {
          type: 'increment'
          uid: Date.now().toString(), 
          increment: <any>value as number
        }
        storedChanges[id] = storedChange
      }
    } else {
      throw new TypeError("Invalid data type");
    }
  }
}
