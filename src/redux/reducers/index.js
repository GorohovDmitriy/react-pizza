import { combineReducers } from 'redux';
import filtersReduser from './filters';
import pizzasReduser from './pizzas';

const rootReduser = combineReducers({
	filters: filtersReduser,
	pizzas: pizzasReduser,
});
export default rootReduser;