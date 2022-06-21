import '../index.js';
import QuoteTable from '../components/QuoteTable.js'
import Search from '../components/Search';
import { Button } from "reactstrap";

//Quote page layout
function Quote() {  
  return (  
    <div>      
      <h1 style={{display:'flex', justifyContent:'center'}}>Quote Data</h1>
      <Search /> 
      <h3 style={{display:'flex', justifyContent:'center'}}>Showing current quote data for Splunk Inc. (Symbol: SPLK)</h3>
      <div style={{display:'flex', justifyContent:'center'}}>
      <QuoteTable />
      </div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <Button class="btn btn-primary" href="https://financialmodelingprep.com/developer/docs/#Stock-Historical-Price">
          Data provided by Financial Modeling Prep
        </Button>
      </div>    
    </div>  
  )
}

export default Quote;
