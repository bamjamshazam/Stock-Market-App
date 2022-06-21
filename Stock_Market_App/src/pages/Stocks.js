import '../index.js';
import StocksTable from '../components/StocksTable';
import { Button } from "reactstrap";

//Stocks overview page layout
function Stocks() {  
  return (  
    <div>      
      <h1 style={{display:'flex', justifyContent:'center'}}>Stocks Summary</h1>
      <p style={{display:'flex', justifyContent:'center'}}>
        Click on the column names to sort contents.
        To search by Symbol, Name, or Industry hover
        column header and click the hamburger icon.</p>
      <div style={{display:'flex', justifyContent:'center'}}>
        <StocksTable />
      </div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <Button class="btn btn-primary" href="https://financialmodelingprep.com/developer/docs/#Stock-Historical-Price">
          Data provided by Financial Modeling Prep
        </Button>
      </div>    

    </div>  
  )
}

export default Stocks;
