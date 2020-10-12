import React, { Component } from 'react';
import {connect} from 'react-redux'
import Products from '../components/Products'
import Product from '../components/Product'
import Proptypes from 'prop-types';
import * as action from '../actions/index'


class ProductContainer extends Component {
  render() {
    var {products} = this.props;
    return (
        <Products>
            {this.showProuducts(products)}
        </Products>
        );
  }
  showProuducts = (products) =>{
    var result = null;
    var {onAddToCart,onChangeMessage} = this.props;
    if(products.length > 0){
      result = products.map((product, index) =>{
        return <Product 
        key={index} 
        product={product}
        onAddToCart = {onAddToCart}
        onChangeMessage = {onChangeMessage} />
      })
    }
    return result;
  }
}

ProductContainer.propTypes = {
    products: Proptypes.arrayOf(
        Proptypes.shape({
            id: Proptypes.number.isRequired,
            name: Proptypes.string.isRequired,
            image: Proptypes.string.isRequired,
            description: Proptypes.string.isRequired,
            price: Proptypes.number.isRequired,
            inventory: Proptypes.number.isRequired,
            rating: Proptypes.number.isRequired,
        })
    ).isRequired,
    onChangeMessage: Proptypes.func.isRequired,
    onAddToCart: Proptypes.func.isRequired
}

const mapStateToProps = (state) =>{
  return {
    products: state.products
  };
}

const mapDispatchToProps = (dispatch, props) =>{
  return{
    onAddToCart: (product) =>{
      dispatch(action.actAddToCart(product, 1))
    },
    onChangeMessage: (message) =>{
      dispatch(action.changeMessage(message))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductContainer);
