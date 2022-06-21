import '../index.js';
import PriceHistoryTable from '../components/PriceHistoryTable';
import Search from '../components/Search';
import { Button } from "reactstrap";

//Quote page layout
function PriceHistory() {  
  return (  
    <div>      
      <h1 style={{display:'flex', justifyContent:'center'}}>Price History</h1>
      <Search />
      <h3 style={{display:'flex', justifyContent:'center'}}>Showing historical price data for Splunk Inc. (Symbol: SPLK)</h3>
      <p style={{display:'flex', justifyContent:'center'}}>To sort by Date or Volume number, click the corresponding column header.</p>
      <div style={{display:'flex', justifyContent:'center'}}>
        <PriceHistoryTable />
      </div> 
      <div style={{display:'flex', justifyContent:'center'}}>
        <Button class="btn btn-primary" href="https://financialmodelingprep.com/developer/docs/#Stock-Historical-Price">
          Data provided by Financial Modeling Prep
        </Button>
      </div>     
    </div>  
  )
}

export default PriceHistory;
