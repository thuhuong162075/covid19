import React from 'react';
import "../assets/css/Country.css"
import imgSearch from '../assets/image/search.svg'
import Nation from './Nation';

function Country(props) {
  const {nation} = props
  const PrevButton = () => {
    return (
      <button 
        className="pg btn-prev" 
      >
        Prev
      </button>    
    )
  }
  const NextButton = () => {
    return (
      <button 
        className="pg btn-next" 
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
                    <img src={imgSearch} width={20} height={20} alt="imgSearch"/> 
                    {/* <InputSearch /> */}
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
              {nation.map((item, index) => (
                <Nation key={index} item={item}/>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
            <PrevButton />
              <button className= 'pg active'>
                1
              </button>
            <NextButton />
            <button className="total">2 /page</button>
        </div>
    </div>
  );
}

export default Country;
