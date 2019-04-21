import React, { Component } from "react";
import Routes from './Components/Routes'
import {BrowserRouter} from 'react-router-dom'
class App extends Component {
    render() {
        return (
            <BrowserRouter><Routes /></BrowserRouter>
        );
    }
}

export default App;
