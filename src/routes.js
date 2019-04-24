import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

import App from './scenes/app';
import NoMatch from './components/nomatch';





export default () => {

	
		return (
			<div>
				<BrowserRouter>
					<div>
						<Switch>
							<Route exact={true} path="/" component={App} />
							<Route path="*" component={NoMatch} />
						</Switch>
					</div>
				</BrowserRouter>
				
			</div>
		
		);
	};
