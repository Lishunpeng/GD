import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/Home';
import routerData from './routerData';
console.log(routerData,'routerData');
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        {routerData && routerData.map((item,i)=>
        	<Switch key={i}>
	        	{item.child && item.child.map((c,j)=><Route path={item.path + c.path} key={i+':'+j} component={c.component} />)}
        		<Route path={item.path}  component={item.component} />
        	</Switch>
        )}

      </Switch>
    </Router>
  );
}

export default RouterConfig;
