import React, { useEffect } from 'react';
import "../../assets/css/Country.css"
import imgSearch from '../../assets/image/search.svg'
import Nation from '../../components/Nation';
import InputSearch from '../search/index';
import {useDispatch, useSelector} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { showInputData, onPagination, ArrPagi, ArrFilter } from './reselect'
import { onShowInput, onPaginationAction, onArrPagiChange, onFilters } from './action'
import Paginator from './pagination'
import PrevImg from '../../assets/image/prev.svg'
import NextImg from '../../assets/image/next.svg'

function Country(props) {
  const {nation} = props
  const {showInput, pagination, arrPagi, filter } = useSelector(createStructuredSelector({
    showInput: showInputData,
    pagination: onPagination,
    arrPagi: ArrPagi,
    filter: ArrFilter
  }));
  function funPagination(n, arr) {
    return arr.slice((n-1)*pagination.limit,(n-1)*pagination.limit + pagination.limit)
  }

  const dispatch = useDispatch();
  const showInputSearch = () => dispatch(onShowInput(!showInput))
  //dispatch action pagination
  useEffect(() => {
    dispatch(onPaginationAction({
      ...pagination,
      ...{
        totalRow: Math.ceil(nation.length/pagination.limit)
      }
    }))
    dispatch(onFilters(nation.slice(0,10)))
  }, []);
  useEffect(() => {
    dispatch(onArrPagiChange(Paginator(pagination.totalRow, 5, pagination.page)))
  }, [pagination]);

  function handlePageChange(newPage) {
    dispatch(onPaginationAction({
      ...pagination,
      ...{
        page: newPage
      }
    }))
    dispatch(onFilters(funPagination(newPage, nation)))
  }
  function handlePositionPage(value) {
    dispatch(onPaginationAction({
      ...pagination,
      ...{
        page: value
      }
    }))
    dispatch(onFilters(funPagination(value, nation)))
  }

  const PrevButton = () => {
    return (
      <button 
        disabled={pagination.page <=1} 
        className="pg btn-prev" 
        onClick={() => handlePageChange(pagination.page-1)}
      >
        Prev
      </button>  
    )
  }
  const NextButton = () => {
    return (
      <button 
        disabled={pagination.page >= pagination.totalRow}
        className="pg btn-next" 
        onClick={() => handlePageChange(pagination.page+1)}
      >
        Next
      </button>   
    )
  }
  return (
    <div className="Country">
        <h2 className="title">Covid-19 các quốc gia</h2>
        <div className="detail">
          <table className="table country-covid19">
            <thead>
              <tr>
                <th className="nation">
                  <span>Quốc gia</span>
                  <span className="filter dropdown">
                    <img src={imgSearch} width={20} height={20} onClick={showInputSearch} alt="imgSearch"/> 
                    {showInput ? <InputSearch /> : null}
                  </span>
                </th>
                <th>Nhiễm</th>
                <th>Mới nhiễm</th>
                <th>Tử vong</th>
                <th>Mới tử vong</th>
                <th>Khỏi bệnh</th>
              </tr>
            </thead>
            <tbody>
              {filter.map((item, index) => (
                <Nation key={index} item={item}/>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
        <PrevButton />
            {arrPagi.map((item, index) => 
              item === 'prev' ?  
              <div
                disabled={pagination.page <=1} 
                className="btn-change prev" 
                onClick={() => {
                  handlePageChange(pagination.page-1)
                }}
                key={index}
              >
                <img  src={PrevImg} width={12} height={13} alt="prev-icon"/> 
                <p className="text">...</p>
              </div> : item === 'next' ?  
              <div 
                disabled={pagination.page >= pagination.totalRow}
                className="btn-change next" 
                onClick={() => handlePageChange(pagination.page+1)}
                key={index}
              >
                <img  src={NextImg} width={12} height={13} alt="next-icon"/> 
                <p className="text">...</p>
              </div> : 
              <button className= {pagination.page === item ? 'pg active' : 'pg'}
                      key={index}
                      onClick={()=> handlePositionPage(item)}>
                {item}
              </button>
            )}
            
            <NextButton />
            <button className="total">{pagination.totalRow} /page</button>
        </div>
    </div>
  );
}

export default Country;
