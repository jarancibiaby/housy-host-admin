import { Box, Button, FormControl, Grid, InputLabel, TextField } from "@mui/material";
import { useState } from "react";
import { Reservation } from "../../models/reservations.model";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2,
};

type props = {
    onSubmit: () => void,
    selectedReservation: Reservation
}

const handleEnter = (event: any) => {
    if (event.key == "Enter") {
      event.preventDefault();
      event.stopPropagation();
    }
  };

export default function ReservationModal({ onSubmit, selectedReservation }: props) {

    const [reservation, setReservation] = useState<Reservation>(selectedReservation)

    const handleSubmit = () => {
        onSubmit();
    }

    return (
        <>
            <Grid
                container
                sx={style}
                padding={1}
                justifyContent="center"
                alignItems="center"
            >

                <Grid item margin={1} sx={{ width: "100%" }}>
                    <Box component="form" noValidate autoComplete="off">
                        <FormControl fullWidth variant="filled">
                            <TextField
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                id="filled-basic"
                                type="text"
                                label="Inmueble"
                                variant="filled"
                                value={reservation.inmueble}
                                onChange={(event) => {
                                    setReservation({ ...reservation, inmueble: event.target.value });
                                }}
                                onKeyPress={handleEnter}
                            />
                        </FormControl>
                    </Box>
                </Grid>

                <Grid item margin={1} sx={{ width: "100%" }}>
                    <Box component="form" noValidate autoComplete="off">
                        <FormControl fullWidth variant="filled">
                            <TextField
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                id="filled-basic"
                                type="text"
                                label="Id Reserva"
                                variant="filled"
                                value={reservation.id_reserva}
                                onChange={(event) => {
                                    setReservation({ ...reservation, id_reserva: +event.target.value });
                                }}
                                onKeyPress={handleEnter}
                            />
                        </FormControl>
                    </Box>
                </Grid>

                <Grid item margin={1} sx={{ width: "100%" }}>
                    <Box component="form" noValidate autoComplete="off">
                        <FormControl fullWidth variant="filled">
                            <TextField
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                id="filled-basic"
                                type="text"
                                label="Presupuesto"
                                variant="filled"
                                value={reservation.presupuesto}
                                onChange={(event) => {
                                    setReservation({ ...reservation, presupuesto: +event.target.value });
                                }}
                                onKeyPress={handleEnter}
                            />
                        </FormControl>
                    </Box>
                </Grid>

                <Grid item margin={1} sx={{ width: "100%" }}>
                    <Box component="form" noValidate autoComplete="off">
                        <FormControl fullWidth variant="filled">
                            <TextField
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                id="filled-basic"
                                type="text"
                                label="Comisión Real"
                                variant="filled"
                                value={reservation.comision_real}
                                onChange={(event) => {
                                    setReservation({ ...reservation, comision_real: event.target.value });
                                }}
                                onKeyPress={handleEnter}
                            />
                        </FormControl>
                    </Box>
                </Grid>

                <Grid item margin={1} sx={{ width: "100%" }}>
                    <Button
                        fullWidth
                        variant="contained"
                        color="success"
                        sx={{
                            height: 45,
                        }}
                        onClick={handleSubmit}
                    >
                        Cargar
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}