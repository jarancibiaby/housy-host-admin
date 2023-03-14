import { Box, Button, FormControl, Grid, TextField } from "@mui/material";
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
  onSubmit: (reservation: Reservation) => void;
  selectedReservation: Reservation;
};

const handleEnter = (event: any) => {
  if (event.key == "Enter") {
    event.preventDefault();
    event.stopPropagation();
  }
};

export default function ReservationModal({
  onSubmit,
  selectedReservation,
}: props) {
  const [reservation, setReservation] =
    useState<Reservation>(selectedReservation);

  const handleSubmit = () => {
    onSubmit(reservation);
  };

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
                label="Id Reserva"
                variant="filled"
                value={reservation.id}
                onKeyPress={handleEnter}
                disabled={true}
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
                value={reservation.totalPrice}
                onKeyPress={handleEnter}
                disabled={true}
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
                label="Comisión Presupuesto"
                variant="filled"
                value={reservation.comisionPpto}
                onKeyPress={handleEnter}
                disabled={true}
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
                value={reservation.comisionReal}
                onKeyPress={handleEnter}
                disabled={true}
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
                label="Aseo Presupuesto"
                variant="filled"
                value={reservation.aseoPpto}
                onKeyPress={handleEnter}
                disabled={true}
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
                label="Negociación"
                variant="filled"
                value={reservation.negociacion}
                onChange={(event) => {
                  setReservation({
                    ...reservation,
                    negociacion: event.target.value,
                  });
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
                label="Aseo Real"
                variant="filled"
                value={reservation.aseoReal}
                onChange={(event) => {
                  setReservation({
                    ...reservation,
                    aseoReal: event.target.value,
                  });
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
  );
}
