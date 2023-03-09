import { GridColDef } from "@mui/x-data-grid";

export const COLUMNS_TABLE: GridColDef[] = [
  { field: "id", headerName: "Id Reserva", hide: false },
  {
    field: "guestName",
    headerName: "Nombre Inquilino",
    width: 200,
    hide: false,
  },
  { field: "totalPrice", headerName: "Presupuesto", hide: true },
  {
    field: "aseoPpto",
    headerName: "Aseo Presupuesto",
    hide: true,
  },
  { field: "aseoReal", headerName: "Aseo Real", hide: false },
  { field: "mes", headerName: "Mes", hide: false },
  { field: "anio", headerName: "Año", hide: false },

  { field: "nights", headerName: "Noches", hide: false },
  { field: "channelName", headerName: "Origen", hide: false },
  {
    field: "comisionPpto",
    headerName: "Comision Presupuesto",
    hide: false,
  },
  {
    field: "comisionReal",
    headerName: "Comision Real",
    hide: false,
  },
  {
    field: "netoPropietario",
    headerName: "Neto Propietario",
    hide: false,
  },
  {
    field: "presupuestoReal",
    headerName: "Presupuesto Real",
    hide: false,
  },
  { field: "negociacion", headerName: "Negociacion", hide: false },
];
