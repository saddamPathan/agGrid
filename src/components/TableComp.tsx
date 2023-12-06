import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { memo } from "react";
import { ColDef, ColGroupDef } from "ag-grid-community";
import "ag-grid-enterprise";
import { mockData, MockDataInt } from "./MockData";
import { flagRenderFunc, starRenderFunc, balanceRenderFunc } from "./commonFunction";

function TableComp() {
  const rowData: MockDataInt[] = mockData;

  const defaultColDef = {
    resizable: true,
    sortable: true,
    filter: true,
    floatingFilter: true,
    flex: 1,
    enableRowGroup: true,
  };

  const colDefs: (ColDef<MockDataInt> | ColGroupDef<MockDataInt>)[] = [
    {
      field: "pCountry",
      headerName: "Country",
      checkboxSelection: true,
      headerCheckboxSelection: true,
      aggFunc: "first",
      filter: "agTextColumnFilter",
      cellRenderer: memo(flagRenderFunc),
    },
    {
      headerName: "Participant",
      children: [
        {
          field: "pName",
          headerName: "Name",
          // aggFunc: "first",
          filter: "agTextColumnFilter",
        },
      ],
    },
    {
      field: "pRating",
      headerName: "Rating",
      aggFunc: "avg",
      filter: "agNumberColumnFilter",
      cellRenderer: memo(starRenderFunc),
    },
    {
      headerName: "Monthly Breakdown",
      children: [
        {
          field: "pBalance",
          headerName: "Balance",
          aggFunc: "sum",
          filter: "agNumberColumnFilter",
          cellRenderer: balanceRenderFunc,
        },
      ],
    },
  ];

  return (
    <div className="ag-theme-quartz" style={{ height: "90vh", width: "100%" }}>
      <AgGridReact
        rowGroupPanelShow="always"
        sideBar={true}
        rowSelection="multiple"
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        autoGroupColumnDef={{
          field: "pName",
          headerCheckboxSelection: true,
          cellRendererParams: { checkbox: true },
        }}
      />
    </div>
  );
}

export default TableComp;
