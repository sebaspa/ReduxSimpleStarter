import React from 'react';
import ReactDOM from 'react-dom';
 
import SearchBar from './components/search_bar';
 
const API_KEY = 'AIzaSyALKZGCOfeqe_aiEZ8JVV91g4U3HM3XlNI';
 
//Create a new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
}
 
//Take this component generated html and put it on the page (in DOM)
 
ReactDOM.render(<App/>, document.querySelector('.container'));