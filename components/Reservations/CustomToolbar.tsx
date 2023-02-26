import { GridToolbarContainer, GridToolbarColumnsButton } from "@mui/x-data-grid";

export default function CustomToolbar() {
    return(
        <GridToolbarContainer>
            <GridToolbarColumnsButton />
        </GridToolbarContainer>
    );
}