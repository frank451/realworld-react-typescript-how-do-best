import { BaseAction } from '../../../types'
import { Login } from './action-types'

const login = (): BaseAction => {
    console.log('action login');
    return {
        type: Login.do,
        payload: null,
    }
};

export default login