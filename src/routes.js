import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

import Index from './scenes/index';
import NoMatch from './components/nomatch';





export default () => {

	
		return (
			<div>
				<BrowserRouter>
					<div>
						<Switch>
							<Route exact={true} path="/" component={Index} />
							<Route path="*" component={NoMatch} />
						</Switch>
					</div>
				</BrowserRouter>
				
			</div>
		
		);
	};
