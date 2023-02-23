import { useEffect, useState } from "react";
import { Payment } from "../models/payment.model";
import {
  collection,
  onSnapshot,
  Timestamp,
  orderBy,
  query,
  where,
} from "@firebase/firestore";
import { db } from "../firebase-config";
import {
  DataGrid,
  GridAlignment,
  GridCallbackDetails,
  GridSelectionModel,
} from "@mui/x-data-grid";
import { deletePayment, getUserId } from "../services/firebase";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { getAuth } from "firebase/auth";

const columns = [
  { field: "customId", headerName: "Id", width: 50 },
  { field: "project", headerName: "Obra", width: 250 },
  {
    field: "amount",
    headerName: "Monto",
    type: "number",
    width: 250,
    headerAlign: "left" as GridAlignment,
    align: "left" as GridAlignment,
  },
  {
    field: "date",
    headerName: "Fecha",
    width: 100,
    valueGetter: (value: any) =>
      `${new Timestamp(value.row.date?.seconds, value.row.date?.nanoseconds)
        .toDate()
        .toLocaleDateString()}`,
  },
];

const mockPayments: Payment[] = [
  {
    id: '100',
    customId: '200',
    project: 'Proyect0',
    amount: 1000,
    date: '01/01/2023'
  },
  {
    id: '101',
    customId: '201',
    project: 'Proyect1',
    amount: 1000,
    date: '01/02/2023'
  },
  {
    id: '102',
    customId: '202',
    project: 'Proyect2',
    amount: 1000,
    date: '01/03/2023'
  },
  {
    id: '104',
    customId: '204',
    project: 'Proyect4',
    amount: 1000,
    date: '01/05/2023'
  },
  {
    id: '105',
    customId: '205',
    project: 'Proyect5',
    amount: 1000,
    date: '01/06/2023'
  },
  {
    id: '106',
    customId: '206',
    project: 'Proyect6',
    amount: 1000,
    date: '01/07/2023'
  },
  {
    id: '107',
    customId: '207',
    project: 'Proyect7',
    amount: 1000,
    date: '01/08/2023'
  },
  {
    id: '108',
    customId: '208',
    project: 'Proyect8',
    amount: 1000,
    date: '01/09/2023'
  },
  {
    id: '109',
    customId: '209',
    project: 'Proyect9',
    amount: 1000,
    date: '01/10/2023'
  },
  {
    id: '110',
    customId: '210',
    project: 'Proyect10',
    amount: 1000,
    date: '01/11/2023'
  },
]

export default function PaymentsTable() {
  const [payments, setPayments] = useState([] as Payment[]);
  const [selectionModel, setSelectionModel] = useState([] as string[]);

  useEffect(() => {
    // getAuth().onAuthStateChanged((user) => {
    //   const q = query(
    //     collection(db, "payments"),
    //     where("uid", "==", user?.uid),
    //     orderBy("date", "desc")
    //   );

    //   onSnapshot(q, (querySnapshot) => {
    //     setPayments(
    //       querySnapshot.docs.map(
    //         (doc: any, index: number): Payment => ({
    //           ...doc.data(),
    //           id: doc.id,
    //           customId: (index += 1),
    //         })
    //       )
    //     );
    //   });
    // });

    setPayments(mockPayments);
  }, []);

  const deleteRows = () => {
    const filteredFileList = payments.filter((item) =>
      selectionModel.includes(item.id!)
    );

    filteredFileList.forEach((payment) => deletePayment(payment.id!));
  };

  const handleSelectionChange = (
    selectionModel: GridSelectionModel,
    _: GridCallbackDetails
  ) => {
    setSelectionModel(selectionModel as string[]);
  };

  const deleteButton = (
    <Button
      style={{ position: "absolute", bottom: 15, left: 135, zIndex: 1 }}
      color="error"
      size="large"
    >
      <DeleteIcon onClick={deleteRows} />
    </Button>
  );

  return (
    <div
      style={{
        height: 650,
        width: 750,
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {selectionModel.length > 0 && deleteButton}
      <DataGrid
        sx={{
          padding: 1,
          bgcolor: "background.paper",
        }}
        rows={payments}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        onSelectionModelChange={handleSelectionChange}
        selectionModel={selectionModel}
      />
    </div>
  );
}
