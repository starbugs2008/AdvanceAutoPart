//@flow
import React from 'react';

export   default (props)=> {
  const p = props.value;
  return (
    <div key ={"1"} className="row"> 
       <div>
            <img alt="" src={p.img}></img>
        </div>
        <div className="detail">
            <div className="title">{p.name}</div>
            <div>partNo:<span className="title">{p.number}</span></div>
            <div className="price">{p.pricing}</div>
            <button className="button" onClick={()=>props.onAddCart(p)}> Add to Cart</button>
        </div>
    </div>
    )
}

