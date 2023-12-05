import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { useState } from 'react';
import { ColDef, ColGroupDef } from "ag-grid-community";
import 'ag-grid-enterprise';

function TableComp() {
    interface MockDataInt {
        pName: string;
        pCountry: string;
        pRating: number;
        pBalance: number;
    }

    const [mockData, setMockData] = useState<MockDataInt[]>([
        { pName: 'Ngolo Kante', pCountry: 'United-Kingdom', pRating: 5, pBalance: 11700 },
        { pName: 'Jr Neymar', pCountry: 'United-Kingdom', pRating: 4, pBalance: 178 },
        { pName: 'Md Sala', pCountry: 'Japan', pRating: 2, pBalance: 3655 },
        { pName: 'Jude Belingum', pCountry: 'Brazil', pRating: 2, pBalance: 39051 },
        { pName: 'Cristiano Ronaldo', pCountry: 'Colombia', pRating: 4, pBalance: 28028 },
        { pName: 'Karim Benzema', pCountry: 'Brazil', pRating: 4, pBalance: 23219 },
        { pName: 'Sunil Chetri', pCountry: 'India', pRating: 3, pBalance: 2800 },
        { pName: 'Sergio Ramos', pCountry: 'Brazil', pRating: 2, pBalance: 5380 },
    ])

    const defaultColDef = {
        resizable: true,
        sortable: true,
        filter: true,
        flex: 1,
        enableRowGroup: true
    };

    const flagRenderFunc = (params: any) => {
        const country = params.value;
        const flagImage = `https://www.countryflags.com/wp-content/uploads/${country.toLowerCase()}-flag-png-large.png`;
        return (<div style={{ display: 'flex', alignItems: 'center' }}><img src={flagImage} alt={country} style={{ width: '20px', height: '15px', marginRight: '1rem' }} />{params.value}</div>)
    };

    const colDefs: (ColDef<MockDataInt> | ColGroupDef<MockDataInt>)[] = [
        { field: "pCountry", headerName: "Country", cellRenderer: flagRenderFunc, checkboxSelection: true, headerCheckboxSelection: true },
        {
            headerName: "Participant",
            children: [
                { field: "pName", headerName: "Name" }
            ]
        },
        { field: "pRating", headerName: "Rating" },
        {
            headerName: "Monthly Breakdown",
            children: [
                { field: "pBalance", headerName: "Balance" }
            ]
        }
    ];
    return (
        <div className='ag-theme-quartz' style={{ height: '80vh', width: '100%' }}>
            table component
            <AgGridReact
                rowGroupPanelShow='always'
                sideBar={true}
                rowSelection='multiple'
                rowData={mockData}
                columnDefs={colDefs}
                defaultColDef={defaultColDef}
            />
        </div>
    );
}

export default TableComp;
