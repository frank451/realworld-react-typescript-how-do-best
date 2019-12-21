import { BaseAction } from '../../../types'
import { Login } from './action-types'

export default function login(state = '', action: BaseAction) {
    switch (action.type) {
        case Login.do:
            console.log('reducer do')
            return 'logged in'
        case 'DECREMENT':
            return ''
        default:
            return state
    }
}