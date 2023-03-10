import EditIcon from "@mui/icons-material/Edit";
import { Box, Fab, Modal } from "@mui/material";
import { useState } from "react";
import ReservationModal from "../../components/Reservations/ReservationModal";
import ReservationsTable from "../../components/Reservations/ReservationsTable";
import { Reservation } from "../../models/reservations.model";
import edit from "../../services/reservations.service";

export default function Payments() {
  const [open, setOpen] = useState(false);
  const [rowSelected, setRowSelected] = useState({} as Reservation);
  const [buttonEditDisabled, setButtonEditDisable] = useState(true);

  const handleRowSelected = (row: Reservation) => {
    setRowSelected(row);
    setButtonEditDisable(!rowSelected)
  }

  const handleOnSubmitModal = (reservation: Reservation) => {
    setOpen(false);
    //edit()
  }

  return (
    <>
      <div className="flex-container">
        <ReservationsTable onSelectedRow={handleRowSelected} />

        <Box
          sx={{
            position: "absolute",
            bottom: 50,
            right: 50,
          }}
        >
          <Fab
            color="primary"
            aria-label="edit"
            onClick={() => {
              setOpen(true);
            }}
            disabled={buttonEditDisabled}
          >
            <EditIcon />
          </Fab>
        </Box>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ReservationModal selectedReservation={rowSelected} onSubmit={(reservation) => handleOnSubmitModal(reservation)}></ReservationModal>
      </Modal>
    </>
  );
}
