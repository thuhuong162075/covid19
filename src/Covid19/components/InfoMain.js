import React from 'react';
import "../assets/css/InfoMain.css";

function InfoMain(props) {
    const { tableWorld } = props
    return (
        <div className="InfoMain">
            <h2 className="title">
                Covid-19 trên thế giới
            </h2>
            <div className="detail">
                <div className="item confirmed">
                    <label>Nhiễm</label>
                    <strong>{tableWorld.total_cases}</strong>
                    <p>+ {tableWorld.new_cases} (mới nhiễm)</p>
                </div>
                <div className="item deaths">
                    <label>Tử vong</label>
                    <strong>{tableWorld.total_deaths}</strong>
                    <p>+ {tableWorld.new_deaths} (mới chết)</p>
                </div>
                <div className="item recovered">
                    <label>Khỏi</label>
                    <strong>
                        {tableWorld.total_recovered}
                    </strong>
                    <p>+ {tableWorld.new_recovered} (mới khỏi)</p>
                </div>
            </div>
        </div>
  );
}

export default InfoMain;
