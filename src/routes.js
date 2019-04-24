import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

import Index from './scenes/index';
import About from './scenes/about';
import Account from './scenes/account';
import Cart from './scenes/cart';
import Contact from './scenes/contact';
import Faq from './scenes/faq';
import Privacy from './scenes/privacy-policy';
import Product from './scenes/product';
import Shop from './scenes/shop';
import Tac from './scenes/terms-and-conditions';
import Wishlist from './scenes/wishlist';


import NoMatch from './components/nomatch';





export default () => {

	
		return (
			<div>
				<BrowserRouter>
					<div>
						<Switch>
							<Route exact={true} path="/" component={Index} />
							<Route exact={true} path="/shop" component={Shop} />
							<Route exact={true} path="/product" component={Product} />
							<Route exact={true} path="/cart" component={Cart} />
							<Route exact={true} path="/wishlist" component={Wishlist} />
							<Route exact={true} path="/account" component={Account} />
							<Route exact={true} path="/contact" component={Contact} />
							<Route exact={true} path="/about" component={About} />
							<Route exact={true} path="/faq" component={Faq} />
							<Route exact={true} path="/privacy-policy" component={Privacy} />
							<Route exact={true} path="/terms-and-conditions" component={Tac} />
							<Route path="*" component={NoMatch} />
						</Switch>
					</div>
				</BrowserRouter>
				
			</div>
		
		);
	};
