/**
 * Reducer 数据处理
 */
import {type} from '../action'

export default (state,action) => {
    console.log('state',state,'action',action)
    switch(action.type) {
        case type.TOGGLE_SIDEBAR:
                

            console('isSideBarVisual',state)
            state.isSideBarVisual = !state.isSideBarVisual
    }
}