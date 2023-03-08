import { useEffect, useState } from "react";
import { Reservation } from "../../models/reservations.model";
import { DataGrid, GridColumns, GridSelectionModel } from "@mui/x-data-grid";
import CustomToolbar from "./CustomToolbar";
import { COLUMNS_TABLE } from "../../models/const/columns-table";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function ReservationsTable(props: {
  onSelectedRow: (row: Reservation) => void;
}) {
  const [reservations, setReservations] = useState([] as Reservation[]);
  const [selectionModel, setSelectionModel] = useState([] as string[]);
  const [columnsDisplayed, setColumnsDisplayed] = useState([] as GridColumns);

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/");
      return;
    }

    fetch("https://flaskapp-cr-v2-tjv7uu7ncq-ue.a.run.app/reservations")
      .then((res) => res.json())
      .then((reservations: Reservation[]) => {
        setReservations(reservations);
        setColumnsDisplayed(COLUMNS_TABLE);
      });
  }, []);

  const handleSelectionChange = (selectionModel: GridSelectionModel) => {
    setSelectionModel(selectionModel as string[]);
    props.onSelectedRow(
      reservations.find((reservation) => reservation.id === selectionModel[0])!
    );
  };

  return (
    <div
      style={{
        height: 650,
        width: "75%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <DataGrid
        sx={{
          padding: 1,
          bgcolor: "background.paper",
        }}
        rows={reservations}
        columns={columnsDisplayed}
        pageSize={10}
        rowsPerPageOptions={[10]}
        onSelectionModelChange={handleSelectionChange}
        selectionModel={selectionModel}
        components={{ Toolbar: CustomToolbar }}
      />
    </div>
  );
}
