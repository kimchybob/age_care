import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridColumnMenu,
  GridColumnMenuContainer,
  GridFilterMenuItem,
  SortGridMenuItems,
  useGridApiRef,
  DataGridPro,
} from '@mui/x-data-grid-pro';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { DataGrid, GridToolbarContainer, GridToolbarExport, GridActionsCellItem,GridToolbarFilterButton, } from '@mui/x-data-grid';

const StyledGridColumnMenuContainer = styled(GridColumnMenuContainer)(
  ({ theme, ownerState }) => ({
    background: theme.palette[ownerState.color].main,
    color: theme.palette[ownerState.color].contrastText,
  }),
);

const StyledGridColumnMenu = styled(GridColumnMenu)(({ theme, ownerState }) => ({
  background: theme.palette[ownerState.color].main,
  color: theme.palette[ownerState.color].contrastText,
}));


function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function RegisterTable({chartData}) {
  const [color, setColor] = React.useState('primary');
  const apiRef = useGridApiRef();

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleCellFocusOut = (params, event) => {
    event.defaultMuiPrevented = true;
  };


  const handleEditClick = (id) => (event) => {
    console.log(id);
    event.stopPropagation();
  };

  const handleSaveClick = (id) => async (event) => {
    event.stopPropagation();

  };

  const handleDeleteClick = (id) => (event) => {
    event.stopPropagation();
  };

  const handleCancelClick = (id) => (event) => {
    event.stopPropagation();
  };

  return (
    <div style={{ height: 600, width: '100%', marginTop: 16 }}>
      <DataGrid
        columns={[
          { field: 'Role', width: 700 },
          { field: 'BeaconID', width: 700, editable: true },
          {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 200,
            cellClassName: 'actions',
            getActions: ({ id }) => {
              var isInEditMode = false;
              console.log(id+""+isInEditMode);
              if (isInEditMode) {
                return [
                  <GridActionsCellItem
                    icon={<SaveIcon />}
                    label="Save"
                    onClick={()=>{
                      isInEditMode = false;
                      // handleSaveClick(id);
                    }}
                    color="primary"
                  />,
                  <GridActionsCellItem
                    icon={<CancelIcon />}
                    label="Cancel"
                    className="textPrimary"
                    onClick={()=>{
                      isInEditMode = false;
                      // handleCancelClick(id);
                    }}
                    color="inherit"
                  />,
                ];
              }
      
              return [
                <GridActionsCellItem
                  icon={<EditIcon />}
                  label="Edit"
                  className="textPrimary"
                  onClick={()=>{
                    isInEditMode = true;
                    // handleEditClick(id);
                  }}
                  color="inherit"
                />,
                <GridActionsCellItem
                  icon={<DeleteIcon />}
                  label="Delete"
                  onClick={()=>{
                    // handleDeleteClick(id);
                  }}
                  color="inherit"
                />,
              ];
            },
          }
        ]}
        rows={chartData}
        editMode="row"
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        onCellFocusOut={handleCellFocusOut}
        components={{
          Toolbar: CustomToolbar
        }}
        componentsProps={{
          columnMenu: { color },
        }}
      />
    </div>
  );
}
