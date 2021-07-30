import React from 'react'


export default function Publication (props) {
    return (
    <div className="main_box">
      
      <div className="publication1">
        <div className="box_top">
          <div >
            <img src={props.photo} alt="" className="user_photo" />
          </div>
          <div className="info">
              <div className="user_info">
                  <div className="user_name">{props.name}</div>
                  <div className="user_nickname">{props.nickname}</div>
                  <div className="date">{props.date}</div>
              </div>
              <div className="user_content">{props.content}</div>
          </div>
          <div className="menu"></div>
        </div>
        <div className="box_middle">
            <img src={props.image} alt="" className="img" />
        </div>
        <div className="box_botton">
          <div className="icons"></div>
        </div>
      </div>
        
    </div>
    )
}