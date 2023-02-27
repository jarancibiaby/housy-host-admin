import EditIcon from "@mui/icons-material/Edit";
import { Box, Fab, Modal } from "@mui/material";
import { useState } from "react";
import PaymentsModal from "../../components/PaymentsModal";
import ReservationsTable from "../../components/Reservations/ReservationsTable";
import { Reservation } from "../../models/reservations.model";

export default function Payments() {
  const [open, setOpen] = useState(false);
  const [rowSelected, setRowSelected] = useState({} as Reservation);
  const [buttonEditDisabled, setButtonEditDisable] = useState(true);

  const handleRowSelected = (row: Reservation) => {
    setRowSelected(row);
    setButtonEditDisable(!rowSelected)
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
        <PaymentsModal onSubmit={() => setOpen(false)}></PaymentsModal>
      </Modal>
    </>
  );
}
