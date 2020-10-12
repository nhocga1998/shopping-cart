import React, { Component } from 'react';
import { connect } from 'react-redux'
import Proptypes from 'prop-types';
import Cart from '../components/Cart'
import * as Message from '../constants/Message'
import CartResult from '../components/CartResult'
import CartItem from '../components/CartItem'
import * as action from '../actions/index'


class CartContainer extends Component {
    render() {
        var {cart} = this.props
        console.log(cart);
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }
    showCartItem = (cart) =>{
        var result = <tr><td> {Message.MSG_CART_EMPTY} </td></tr>;
        var {onDeleteProductInCart, onChangeMessage, onUpdateProductInCart} = this.props
        if(cart.length > 0){
            result = cart.map((item, index) =>{
                return(
                    <CartItem 
                    key={index} 
                    item={item}
                    index={index}
                    onDeleteProductInCart = {onDeleteProductInCart}
                    onChangeMessage = {onChangeMessage}
                    onUpdateProductInCart = {onUpdateProductInCart}
                    />
                );
            })
        }
        return result
    }
    showTotalAmount = (cart) =>{
        var result = '';
        if(cart.length > 0){
            result = <CartResult cart={cart} />
        }
        return result
    }
}

CartContainer.propTypes = {
    cart: Proptypes.arrayOf(
        Proptypes.shape({
            product: Proptypes.shape({
                id: Proptypes.number.isRequired,
                name: Proptypes.string.isRequired,
                image: Proptypes.string.isRequired,
                description: Proptypes.string.isRequired,
                price: Proptypes.number.isRequired,
                inventory: Proptypes.number.isRequired,
                rating: Proptypes.number.isRequired,
            }).isRequired,
            quantity: Proptypes.number.isRequired
        })
    ).isRequired,
    onDeleteProductInCart: Proptypes.func.isRequired,
    onChangeMessage: Proptypes.func.isRequired,
    onUpdateProductInCart: Proptypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    };
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onDeleteProductInCart : (product) =>{
            dispatch(action.actRemoveProductInCart(product))
        },
        onChangeMessage: (message) =>{
            dispatch(action.changeMessage(message))
          },
        onUpdateProductInCart: (product, quantity) =>{
            dispatch(action.actUpdateProductInCart(product, quantity))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
