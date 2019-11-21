import React from 'react';
import { Route, Redirect} from 'react-router-dom';

function AuthRoute ({ component: Component, ...rest }) {
	const isAuthenticated = localStorage.getItem("userID") !== null;
	console.log("in authRoute", isAuthenticated);

	return (
		<Route
			{...rest}
			render={ props => 
				isAuthenticated ? (
					<Component {...props} />
				) : (
					<Redirect to ="/" />
				)
			}
		/>
	);
}

export default AuthRoute;