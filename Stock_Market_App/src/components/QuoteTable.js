import '../index.js';
import React, {useState, useEffect } from 'react';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

// API Key linked to Financial Modeling Prep (FMP) - Could move this to env.
const API_KEY = "10efedb92ef961c39133c3db605725db";

//Includes the API fetch and setup details for the ag-grid-react table for quotes
function QuoteTable() { 
    const [rowData, setRowData] = useState([]);

    const columns = [
        {headerName: "Symbol", field: "symbol", resizable: true, width: 90},
        {headerName: "Price", field: "price", resizable: true, width: 90},
        {headerName: "Change", field: "change", resizable: true, width: 90},
        {headerName: "Daily Low", field: "dailyLow", resizable: true, width: 90},
        {headerName: "Daily High", field: "dailyHigh", resizable: true, width: 90},
        {headerName: "Open", field: "open", resizable: true, width: 90},
        {headerName: "Last Close", field: "lastClose", resizable: true, width: 90}
    ];

    useEffect(() => {
        fetch(`https://financialmodelingprep.com/api/v3/quote/SPLK?apikey=${API_KEY}`)
            .then(res => res.json())  
            .then(quote =>
                quote.map(quoteInfo => {
                    //console.log(quoteInfo)
                    return {
                        symbol: quoteInfo.symbol,
                        price: quoteInfo.price,
                        change: quoteInfo.change,
                        dailyLow: quoteInfo.dayLow,
                        dailyHigh: quoteInfo.dayHigh,
                        open: quoteInfo.open,
                        lastClose: quoteInfo.previousClose,
                    };
                })
            )            
            .then(quoteInfo => setRowData(quoteInfo));
    }, []);
    
    return(
        <div 
            className="ag-theme-balham"
            style={{
                height: "100px",
                width: "635px"
            }}
        >
            <AgGridReact
                columnDefs={columns}
                rowData={rowData}
                pagination={true}/>
        </div>
    );
}

export default QuoteTable;