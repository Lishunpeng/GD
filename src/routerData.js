import personal from './routes/Personal';
import personDetail from './routes/Personal/PersonDetail';

/*注册*/
import Login from './routes/Login/Login';
import Register from './routes/Login/Register';

export default 
	[
		{
			path:'/personal',
			component:personal,
			child:
			[	
				{
					path:'/:id',
					component:personDetail,
				}
			]	
		},
		{
			path:'/Login',
			component:Login,
		},
		{
			path:'/Register',
			component:Register,
		}
	]





