import '../index.js';
import React, {useState, useEffect } from 'react';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const API_KEY = "10efedb92ef961c39133c3db605725db";

//Includes the API fetch and setup details for the ag-grid-react table for the historical details of a stock

function PriceHistoryTable() { 
    const [rowData, setRowData] = useState([]);

    const columns = [
        {headerName: "Date", field: "date", resizable: true, sortable: true, width: 150},
        {headerName: "Open", field: "open", resizable: true, sortable: true, width: 90},
        {headerName: "High", field: "high", resizable: true, sortable: true, width: 90},
        {headerName: "Low", field: "low", resizable: true, sortable: true, width: 90},
        {headerName: "Close", field: "close", resizable: true, sortable: true, width: 90},
        {headerName: "Volumes", field: "volumes", resizable: true, sortable: true, width: 90},
    ];

    useEffect(() => {
        fetch(`https://financialmodelingprep.com/api/v3/historical-price-full/SPLK?apikey=${API_KEY}`)
            .then(res => res.json())     
            .then(data => data.historical)       
            .then(history =>
                history.map(historyInfo => {
                    // console.log(historyInfo)
                    return {
                        date: historyInfo.date,
                        open: historyInfo.open,
                        high: historyInfo.high,
                        low: historyInfo.low,
                        close: historyInfo.close,
                        volumes: historyInfo.volume,
                    };
                })
            )            
            .then(historyInfo => setRowData(historyInfo));
    }, []);
    
    return(
        <div
            className="ag-theme-balham"
            style={{
                
                height: "600px",
                width: "625px"
            }}
        >
            <AgGridReact
                columnDefs={columns}
                rowData={rowData}
                pagination={true}/>
        </div>
    );
}

export default PriceHistoryTable;