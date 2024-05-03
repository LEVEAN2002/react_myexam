import Dexie from "dexie";
export const db = new Dexie('myDatabase');
db.version(1).stores({
  books: '++id, name, author,date' // Primary key and indexed props
});  
