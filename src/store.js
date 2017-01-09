import CategoriesCollection from './collections/CategoriesCollection';
import Score from './models/Score';
// import session from './models/Session';

const store = {
	categories: new CategoriesCollection(),
	score: new Score(),
	authtoken: '',
	settings: {
		appKey: 'kid_r1PCAO_h',
		appSecret: '4fdb19a119aa4b50874bae33837ceb30',
		basicAuth: btoa('kid_r1PCAO_h:4fdb19a119aa4b50874bae33837ceb30')
	}
}

export default store;