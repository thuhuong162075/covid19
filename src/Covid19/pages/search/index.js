import React , {useRef, useEffect, useState} from 'react';
import "../../assets/css/InputSearch.css"
import { onShowInput } from '../country/action'
import { handleSearchTerm } from './action'
import {useDispatch, useSelector} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SearchTerm } from './reselect'

function InputSearch(props) {
    const node = useRef();
    const dispatch = useDispatch();
    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => {
        document.removeEventListener("mousedown", handleClick);
        };
    }, []);
    const handleClick = e => {
        if (node.current.contains(e.target)) {
        // inside click
        return;
        }
        dispatch(onShowInput(false))
        
    };
    const {searchItem } = useSelector(createStructuredSelector({
        searchItem: SearchTerm,
    }));
    
    function handleSearchTermChange(e) {
        dispatch(handleSearchTerm(e.target.value))
    }
    const onClickSearch = () => {
        console.log('search')
    }
    const onClickReset = () => {
        console.log('reset')
    }

    return (
        <div className="dropdown-content" ref={node}>
        <input 
            className="input"
            placeholder="Search country" 
            type="text"
            onChange={handleSearchTermChange}
            />
            <div className="search">
                <button className="button btn-search" onClick={onClickSearch}>Search</button>
                <button className="button btn-reset"  onClick={onClickReset}>Reset</button>
            </div>

        </div>
        
    );
}

export default InputSearch;
