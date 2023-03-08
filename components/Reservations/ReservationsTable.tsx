import { useEffect, useState } from "react";
import { Reservation } from "../../models/reservations.model";
import {
    DataGrid,
    GridColumns,
    GridSelectionModel,
} from "@mui/x-data-grid";
import CustomToolbar from "./CustomToolbar";
import { COLUMNS_TABLE } from "../../models/const/columns-table";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

/* TODO: Cambiar origen de datos cuando esté disponible la db */
const mockReservations: Reservation[] =
    [
        {
            "id": 1,
            "inmueble": "Aliquet Proin Consulting",
            "mes": 11,
            "concepto": "rhoncus. Donec est. Nunc ullamcorper, velit",
            "id_reserva": 100,
            "asseo_ppto": "R2T 6P8",
            "asseo_real": "M8R 2Y8",
            "comision_ppto": '37317',
            "comision_real": '35784',
            "negociacion": '58225',
            "neto_propietario": '91844',
            "noches": 2,
            "origen": "molestie tellus. Aenean",
            "presupuesto": 8129,
            "real": "felis eget varius",
            "tipo": "magna. Sed",
            "TRM": "tempor, est"
        },
        {
            "id": 2,
            "inmueble": "Pellentesque Habitant LLC",
            "mes": 1,
            "concepto": "molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper,",
            "id_reserva": 101,
            "asseo_ppto": "O7A 2F1",
            "asseo_real": "I1Y 1S7",
            "comision_ppto": '76616',
            "comision_real": '33041',
            "negociacion": '75653',
            "neto_propietario": '02578',
            "noches": 7,
            "origen": "Phasellus fermentum",
            "presupuesto": 982,
            "real": "amet, consectetuer",
            "tipo": "vel, mauris. Integer",
            "TRM": "ultrices, mauris ipsum"
        },
        {
            "id": 3,
            "inmueble": "Libero Morbi Ltd",
            "mes": 7,
            "concepto": "augue, eu tempor erat neque non quam. Pellentesque habitant morbi",
            "id_reserva": 102,
            "asseo_ppto": "T2X 3O2",
            "asseo_real": "Q6T 1W7",
            "comision_ppto": '37332',
            "comision_real": '18773',
            "negociacion": '65442',
            "neto_propietario": '40755',
            "noches": 8,
            "origen": "nisi dictum",
            "presupuesto": 1369,
            "real": "mauris, aliquam eu,",
            "tipo": "sagittis",
            "TRM": "vulputate, lacus."
        },
        {
            "id": 4,
            "inmueble": "Non Company",
            "mes": 6,
            "concepto": "risus. Donec nibh",
            "id_reserva": 103,
            "asseo_ppto": "A6J 4J3",
            "asseo_real": "C7N 9E4",
            "comision_ppto": '13626',
            "comision_real": '53487',
            "negociacion": '43717',
            "neto_propietario": '70884',
            "noches": 2,
            "origen": "penatibus et magnis",
            "presupuesto": 9415,
            "real": "nec ante",
            "tipo": "amet risus.",
            "TRM": "Morbi"
        },
        {
            "id": 5,
            "inmueble": "Pharetra Foundation",
            "mes": 6,
            "concepto": "eros non enim commodo hendrerit. Donec porttitor tellus",
            "id_reserva": 104,
            "asseo_ppto": "O2X 7U4",
            "asseo_real": "J3J 7K7",
            "comision_ppto": '51456',
            "comision_real": '71518',
            "negociacion": '44032',
            "neto_propietario": '41766',
            "noches": 10,
            "origen": "enim. Nunc",
            "presupuesto": 3676,
            "real": "sapien imperdiet",
            "tipo": "erat volutpat.",
            "TRM": "mi felis, adipiscing"
        },
        {
            "id": 6,
            "inmueble": "Lorem Associates",
            "mes": 6,
            "concepto": "sem ut dolor dapibus gravida. Aliquam",
            "id_reserva": 105,
            "asseo_ppto": "Z0Y 7W6",
            "asseo_real": "N5Y 8H7",
            "comision_ppto": '41524',
            "comision_real": '49913',
            "negociacion": '48367',
            "neto_propietario": '34736',
            "noches": 1,
            "origen": "viverra. Maecenas",
            "presupuesto": 4467,
            "real": "nulla. In",
            "tipo": "ullamcorper. Duis",
            "TRM": "Mauris blandit enim"
        },
        {
            "id": 7,
            "inmueble": "Molestie Tortor Inc.",
            "mes": 3,
            "concepto": "accumsan convallis, ante lectus convallis est, vitae sodales",
            "id_reserva": 106,
            "asseo_ppto": "J4M 8S6",
            "asseo_real": "C1F 2J4",
            "comision_ppto": '76037',
            "comision_real": '72436',
            "negociacion": '49762',
            "neto_propietario": '57938',
            "noches": 6,
            "origen": "egestas a,",
            "presupuesto": 9661,
            "real": "Morbi neque",
            "tipo": "tempor augue",
            "TRM": "Phasellus elit"
        },
        {
            "id": 8,
            "inmueble": "Nec Incorporated",
            "mes": 6,
            "concepto": "urna. Nullam lobortis quam a",
            "id_reserva": 107,
            "asseo_ppto": "B3G 4K8",
            "asseo_real": "Q7K 4E2",
            "comision_ppto": '02984',
            "comision_real": '85265',
            "negociacion": '55961',
            "neto_propietario": '77574',
            "noches": 7,
            "origen": "libero. Proin",
            "presupuesto": 4616,
            "real": "tellus id",
            "tipo": "euismod in,",
            "TRM": "montes, nascetur"
        },
        {
            "id": 9,
            "inmueble": "Dui Nec Incorporated",
            "mes": 2,
            "concepto": "sodales at, velit. Pellentesque ultricies dignissim",
            "id_reserva": 108,
            "asseo_ppto": "Q1H 6P5",
            "asseo_real": "T2T 5B8",
            "comision_ppto": '33558',
            "comision_real": '11737',
            "negociacion": '30759',
            "neto_propietario": '14187',
            "noches": 5,
            "origen": "quam. Curabitur",
            "presupuesto": 9560,
            "real": "Curae Phasellus ornare.",
            "tipo": "odio vel",
            "TRM": "vitae sodales nisi"
        },
        {
            "id": 10,
            "inmueble": "Proin Vel Incorporated",
            "mes": 8,
            "concepto": "malesuada malesuada. Integer",
            "id_reserva": 109,
            "asseo_ppto": "B2D 7F4",
            "asseo_real": "H3V 6M1",
            "comision_ppto": '19357',
            "comision_real": '72608',
            "negociacion": '60330',
            "neto_propietario": '12529',
            "noches": 3,
            "origen": "vulputate mauris",
            "presupuesto": 6647,
            "real": "pede nec ante",
            "tipo": "metus eu",
            "TRM": "dui, in"
        }
    ]

export default function ReservationsTable(props: { onSelectedRow: (row: Reservation) => void }) {
    const [reservations, setReservations] = useState([] as Reservation[]);
    const [selectionModel, setSelectionModel] = useState([] as string[]);
    const [columnsDisplayed, setColumnsDisplayed] = useState([] as GridColumns);
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session) router.push("/"); 
        setReservations(mockReservations);
        setColumnsDisplayed(COLUMNS_TABLE);
    }, []);

    const handleSelectionChange = (selectionModel: GridSelectionModel) => {
        setSelectionModel(selectionModel as string[]);
        props.onSelectedRow(mockReservations.find(reservation => reservation.id === selectionModel[0])!);
    };

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