import { GridColDef } from "@mui/x-data-grid";

export const COLUMNS_TABLE: GridColDef[] = [
  { field: "id", headerName: "Id Reserva", width: 100, hide: false },
  {
    field: "guestName",
    headerName: "Nombre Inquilino",
    width: 200,
    hide: false,
  },
  { field: "totalPrice", headerName: "Presupuesto", width: 100, hide: true },
  {
    field: "aseoPpto",
    headerName: "Aseo Presupuesto",
    width: 100,
    hide: true,
  },
  {
    field: "comisionPpto",
    headerName: "Comision Presupuesto",
    width: 100,
    hide: true,
  },
  {
    field: "comisionReal",
    headerName: "Comision Real",
    width: 100,
    hide: true,
  },
  {
    field: "netoPropietario",
    headerName: "Neto Propietario",
    width: 100,
    hide: true,
  },
  {
    field: "presupuestoReal",
    headerName: "Presupuesto Real",
    width: 100,
    hide: true,
  },
  { field: "aseoReal", headerName: "Aseo Real", width: 100, hide: true },
  { field: "nights", headerName: "Noches", width: 100, hide: true },
  { field: "channelName", headerName: "Origen", width: 100, hide: true },
  { field: "negociacion", headerName: "Negociacion", width: 100, hide: true },
  { field: "mes", headerName: "Mes", width: 100, hide: false },
  { field: "anio", headerName: "Mes", width: 100, hide: false },
];
