import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({
    rows,
    columns,
    loading,
    sx
}) => {
    const [pageSize, setPageSize] = useState(10);

    return (
        <DataGrid 
            getRowId={(row) => row.team_id}
            rows={rows}
            columns={columns}
            loading={loading}
            sx={sx}
            checkboxSelection
            pagination
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[2, 5, 10]}
        />
    );
};

export default DataTable