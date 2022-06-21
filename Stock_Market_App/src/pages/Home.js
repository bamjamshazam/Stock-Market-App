import '../index.js';

//Homepage layout
function Home() {  
  return (  
    <div>      
      <h1 style={{display:'flex', justifyContent:'center'}}>Stock Market Viewer</h1>    
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <img src="/landingpageimage.png" alt="Stock Market Imagery"></img>
      </div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <p style={{textalign: 'center', width: '50%'}}>Welcome to the Stock Market Viewer website.
          You can click on the links on the top of the page to navigate between
          different pages. Available for your selection are, stocks, quote and 
          price history pages. You may search stocks featured in the overview 
          page by symbol on both the quote and price history page.</p> 
      </div>  
    </div>  
  )
}

export default Home;
