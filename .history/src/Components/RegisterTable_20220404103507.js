import * as React from 'react';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import { DataGrid, GridToolbarContainer, GridToolbarExport, GridActionsCellItem,GridToolbarFilterButton, } from '@mui/x-data-grid';


function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
var unvisited = true;

export default function RegisterTable({chartData}) {
  const [regData,setRegData] = React.useState([]);
  if(chartData.length>0&&regData.length==0&&unvisited){
    setRegData(chartData);
  }
  const [color, setColor] = React.useState('primary');
  const apiRef = useGridApiRef();

  const handleEditClick = (id)=> {
    apiRef.current.startCellEditMode({ id: id, field: 'BeaconID' });
  };

  const handleSaveClick = (id) => async (event) => {
    event.stopPropagation();

  };

  //delete the row by refreshing the register data stored in state
  const handleDeleteClick = (id)=> {
    var newRegData = [];
    for(let i=0; i<regData.length; i++){
      if(regData[i].id==id){
        continue;
      }
      newRegData.push(regData[i]);
    }
    if(newRegData.length==0)  unvisited=false;
    setRegData(newRegData);
    setEdits(new Array(regData.length).fill(false));
  };


  //assign a boolean value to each row to switch between edit and non-edit mode
  const [edits,setEdits] = React.useState([]);

  //stop page from rerendering too many times
  if(regData.length!=0&&edits.length==0){
    setEdits(new Array(regData.length).fill(false));
  }

  const changeEdits = (id) => {
    var temp;
    temp = edits;
    temp[id-1] = !temp[id-1];
    setEdits(temp);
  }

  return (
    <div style={{ height: 600, width: '100%'}}>
      <DataGrid
        columns={[
          { field: 'Role', width: 600 },
          { field: 'BeaconID', width: 600, editable: true },
          {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
              if (edits[id-1]) {
                return [
                  <GridActionsCellItem
                    icon={<SaveIcon />}
                    label="Save"
                    onClick={()=>{
                      changeEdits(id);
                      handleSaveClick(id);
                    }}
                    color="primary"
                  />,
                  <GridActionsCellItem
                    icon={<CancelIcon />}
                    label="Cancel"
                    className="textPrimary"
                    onClick={()=>{
                      changeEdits(id);
                    }}
                    color="inherit"
                  />,
                ];
              }
              else{
                return [
                  <GridActionsCellItem
                    icon={<EditIcon />}
                    label="Edit"
                    className="textPrimary"
                    onClick={()=>{
                      changeEdits(id);
                      handleEditClick(id);
                    }}
                    color="inherit"
                  />,
                  <GridActionsCellItem
                    icon={<DeleteIcon />}
                    label="Delete"
                    onClick={()=>{
                      handleDeleteClick(id);
                    }}
                    color="inherit"
                  />,
                ];
              }
            },
          }
        ]}
        rows={regData}
        editMode="row"
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
