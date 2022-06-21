import React from 'react'
import { Button } from "reactstrap";

//Searchbar for symbols used by the Quote and Price History Pages
const Search = () => {
    return (
        <div style={{display:'flex', width: '35%', margin: '0 auto' }}>
            <div class = "input-group mb-3">
                <div class= "input-group-prepend">
                    <span class= "input-group-text" id="basic-addon1">||</span>                    
                </div>
                <input type="text" class="form-control" placeholder="Stock Search..." aria-label="Stock Symbol" aria-describedby="basic-addon1"></input>
                <Button class="btn btn-primary">Search</Button>
            </div>         
        </div>
    )
}

export default Search
