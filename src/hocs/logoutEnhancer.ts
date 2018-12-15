import {
	compose,
	withHandlers
} from 'recompose';
import { withRouter } from 'react-router-dom';
import { removeAccessToken } from '../utils/selectors';

const enhancer: any = compose(
	withRouter,
	withHandlers<any, any>({
		logout: ({ history }: any) => () => {
			removeAccessToken();
			history.push('/login');
		},
	})
);

export default enhancer;
