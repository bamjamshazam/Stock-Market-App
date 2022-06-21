import '../index.css';
import {Link} from 'react-router-dom';

//Navigation bar featured on top of all pages 
function Navigation() {
    const navigationStyle = {
        color: 'white'
    };

    return (
        <navigation>
            <ul className="navigation_links">
                <Link style={navigationStyle} to='/'>
                    <li>Home</li>
                </Link>
                <Link style={navigationStyle} to='/Stocks'>
                    <li>Stocks Summary</li>
                </Link>
                <Link style={navigationStyle} to='/Quote'>
                    <li>Quote Data</li>
                </Link>
                <Link style={navigationStyle} to='/PriceHistory'>
                    <li>Price History</li>
                </Link>         
            </ul>
        </navigation>
    )
}

export default Navigation
