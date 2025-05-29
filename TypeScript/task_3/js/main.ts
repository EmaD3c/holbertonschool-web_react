/// <reference path="./crud.d.ts" />

import { RowID, Row_element } from './interface';
import * as CRUD from './crud';

const row: Row_element = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: Row_element = {
  ...row,
  age: 23
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
