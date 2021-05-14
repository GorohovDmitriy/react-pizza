export const addPizzaToCart = (pizzaobj) => ({
	type: 'ADD_PIZZA_CART',
	payload: pizzaobj,
})

export const clearCart = () => ({
	type: 'CLEAR_CART',
})


export const removeCartItem = id => ({
	type: 'REMOVE_CART_ITEM',
	payload: id,
})
export const plusCartItem = id => ({
	type: 'PLUS_ITEM',
	payload: id,
})
export const minusCartItem = id => ({
	type: 'MINUS_ITEM',
	payload: id,
})