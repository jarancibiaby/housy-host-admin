import { RequestReservationsEdit } from "../models/request.reservations.edit";

export default async function edit(request: RequestReservationsEdit) {
    request.event = 'reservation.updated';
    try {
        const response = await fetch('https://flaskapp-cr-v2-tjv7uu7ncq-ue.a.run.app/unified-webhook', {
            method: 'POST',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('No hay respuesta del servidor.');
        };

        return response;

    } catch (error) {
        console.error('Hubo un problema al querer enviar la petición: ', error);
    }
} 