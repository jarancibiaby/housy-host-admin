import { Reservation } from "./reservations.model"

export type RequestReservationsEdit = {
    event: string | null,
    data: Reservation
}