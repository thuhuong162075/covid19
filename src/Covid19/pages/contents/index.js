import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Spinner } from 'react-bootstrap';
import InfoMain from '../../components/InfoMain';
import Area from '../../components/Area';
import Country from '../country/index';
import { loadingCovid, fetchArea, fetchTableWorld, fetchTableCountry } from './reselect'
import { getData } from './action'

function Content() {
    const {loading, area, tableWorld, tableCountry } = useSelector(createStructuredSelector({
        loading: loadingCovid,
        area: fetchArea,
        tableWorld: fetchTableWorld,
        tableCountry: fetchTableCountry
    }));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getData());
    }, []);
   
    if (loading) {
        return (
            <div className="loading">
                <Spinner className="my-3" animation="border" />
            </div>
        ) 
    } else {
        return (
            <div className="Content">
                <InfoMain tableWorld = {tableWorld}/>
                <Area area = {area}/>
                <Country nation={tableCountry}/>
            </div>
            );
        }
    }

export default Content;
