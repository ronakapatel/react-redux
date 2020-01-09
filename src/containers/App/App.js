import React,{useState} from 'react';
import './App.css';
import User from './../User';
import Header from './../../components/Header';

const App = ()=> {

    //states for search filter
    const [searchText,setSearchText]=useState('');

    return (
        <div className="App">
            <Header searchText={searchText} setSearchText={setSearchText}/>
            <User searchText={searchText}/>
        </div>
    );
}

export default App;
