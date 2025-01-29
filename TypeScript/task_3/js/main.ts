/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// cree row
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// new ligne pour mettre l'id
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row ID: ${newRowID}`);

// mettre la ligne a jours avec l'age
const updatedRow: RowElement = {
  ...row,
  age: 23,
};
CRUD.updateRow(newRowID, updatedRow);

// delete la ligne
CRUD.deleteRow(newRowID);
