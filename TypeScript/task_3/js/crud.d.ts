import { RowID, Row_element } from './interface';

export function insertRow(row: Row_element): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: Row_element): RowID;
