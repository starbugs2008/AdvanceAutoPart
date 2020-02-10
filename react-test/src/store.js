import { createStore } from 'redux';
	
const addCart = (item) =>{
	const x = {
	  partNo: item.number,
	  price: item.pricing 
	};
  
	console.log(x);
  }
 
  
const addCartReducer = (state = [], action) => {
	switch(action.type) {
	  case 'ADD_CART':
		  addCart(action.payload.item);
		return [...state,action.payload.item]
	  default:
		return state;
	}
  }


const store = createStore(addCartReducer);

export default store;