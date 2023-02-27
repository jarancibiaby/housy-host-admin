import { createContext } from "react";
import { Reservation } from "../../models/reservations.model";

export interface IColumnSelectedContext {
    columnSelected: Reservation | {},
    setColumnSelected: (reservation: Reservation) => void
}

export const ColumnSelectedContext = createContext<IColumnSelectedContext>({
    columnSelected: {},
    setColumnSelected: () => {},
});