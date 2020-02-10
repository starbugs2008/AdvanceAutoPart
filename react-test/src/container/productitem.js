import ProductionItem from '../ProductItem'
import { addCart } from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		cart: state.cart
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onAddCart(item) {
			dispatch(
				addCart(item)
			)
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductionItem)
