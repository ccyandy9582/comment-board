import LandingPage from './components/landingPage/index';
import Blog from './components/blog/index';

const routes = [
	{
		path      : '/',
		exact     : true,
		component : LandingPage
	},
	{
		path      : '/blog',
		exact     : true,
		component : Blog
	}
];

export default routes;
