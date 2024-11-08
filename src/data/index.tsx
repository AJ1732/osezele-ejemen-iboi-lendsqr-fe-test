import axios from "axios";
import Dexie, { Table } from "dexie";
import { ApiDataRecord, ApiData } from "@/types/userRecords";

// INIT DEXIE DB
class ApiDataDB extends Dexie {
  apiDataStore!: Table<ApiDataRecord>;

  constructor() {
    super("APIStorageDB");
    this.version(1).stores({
      apiDataStore: "userKey",
    });
  }
}

const db = new ApiDataDB();

// STORE DATA IN INDEXEDDB
async function storeData(userKey: string, data: ApiData[]): Promise<void> {
  await db.apiDataStore.put({ userKey, data });
}

// RETRIEVE DATA FROM INDEXEDDB
async function getData(userKey: string): Promise<ApiData[] | null> {
  const record = await db.apiDataStore.get(userKey);
  return record ? record.data : null;
}

// FETCH, STORE, AND RETRIEVE DATA
export async function fetchUsersData(): Promise<ApiData[]> {
  const userKey = "apiData";

  const existingData = await getData(userKey);
  if (existingData) {
    return existingData;
  }

  try {
    const response = await axios.get<ApiData[]>(
      "https://run.mocky.io/v3/1afafccb-6139-4bd4-88ef-b7cb6b2c5f70"
    );
    const data = response.data;

    await storeData(userKey, data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
