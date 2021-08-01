import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishablekey='pk_test_51JJbB7D51D2UO7Mz2xX2KlRIcHf7axzB58DHrvvEIYqFWtO7JL68wR96vuDJb0qIJAKrlaGRRqk9jwX1SEBnyeY600SG5LgjV0'

	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	}

	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN CLothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is ${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishablekey}
		/>
	);
};

export default StripeCheckoutButton;