import '../index.js';
import React, {useState, useEffect } from 'react';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

// Includes the API fetch and setup details for the ag-grid-react table for an overview of stocks on Nasdaq 100

// API Key linked to Financial Modeling Prep (FMP) - Could move this to env.
const API_KEY = "10efedb92ef961c39133c3db605725db";

function StocksTable() { 
    const [rowData, setRowData] = useState([]);

    const columns = [
        {headerName: "Symbol", field: "symbol", sortable: true, filter:true },
        {headerName: "Name", field: "name", sortable: true, filter:true },
        {headerName: "Industry", field: "industry", sortable: true, filter:true  },
    ];

    useEffect(() => {
        // Fetches data from Financial Modeling Prep 
        fetch(`https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=${API_KEY}`)
            .then(res => res.json())            
            .then(stocks => stocks.map(stockInfo => {
                return stockInfo.symbol
                ?   {                     
                        symbol: stockInfo.symbol,
                        name: stockInfo.name,
                        industry: stockInfo.sector
                }   :   {
                    symbol: null,
                    name: null,
                    industry: null
                }                    
            })
            )
            .then(stockInfo => setRowData(stockInfo));
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
                pagination={true}                
            />
        </div>
    );
}

export default StocksTable;