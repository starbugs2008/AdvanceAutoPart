import React from "react";
import {Products} from "./products";
import ProductionItem from "./container/productitem";

export default  ()=>{
  const components = Products.map((item, i)=>{
    return (
      <div key = {i}>
        <ProductionItem  value ={item} />
      </div>)
      });
  return (
    <div>
      <h1>Products List</h1>
      {components}
    </div>);

}
