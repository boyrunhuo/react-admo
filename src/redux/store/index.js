import {createStore} from 'redux'
import reducer from  '../reducer'

//初始化数据
const state = {
    isSideBarVisual: true
}
let store = createStore(reducer, state)
console.log('store',store)
export default store
