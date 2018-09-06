import {Component} from 'react'

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
                <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>
                <link href="https://fonts.googleapis.com/css?family=Rubik:300,500,700,900" rel="stylesheet"></link>
                <style jsx global>
                    {`
                        body *{
                            font-family: 'Rubik', sans-serif;
                            font-weight: 100;
                        }
                    `}
                </style>
            </header>
         );
    }
}
 
export default Header;