import { GridColDef } from "@mui/x-data-grid";

export const COLUMNS_TABLE: GridColDef[] = [
    { field: "inmueble", headerName: "Inmueble", width: 200, hide: false },
    { field: "mes", headerName: "Mes", width: 100, hide: false },
    { field: "id_reserva", headerName: "Id Reserva", width: 100, hide: false },
    { field: "concepto", headerName: "Concepto", width: 100, hide: true },
    { field: "asseo_ppto", headerName: "asseo_ppto", width: 100, hide: true },
    { field: "asseo_real", headerName: "asseo_real", width: 100, hide: true },
    { field: "comision_ppto", headerName: "Comision_ppto", width: 100, hide: true },
    { field: "comision_real", headerName: "Comision_real", width: 100, hide: true },
    { field: "negociacion", headerName: "Negociacion", width: 100, hide: true },
    { field: "neto_propietario", headerName: "Neto Propietario", width: 100, hide: true },
    { field: "noches", headerName: "Noches", width: 100, hide: true },
    { field: "origen", headerName: "Origen", width: 100, hide: true },
    { field: "presupuesto", headerName: "Presupuesto", width: 100, hide: true },
    { field: "real", headerName: "Real", width: 100, hide: true },
    { field: "tipo", headerName: "Tipo", width: 100, hide: true },
    { field: "TRM", headerName: "TRM", width: 100, hide: true },
]