import {createStore, bindActionCreators}  from "redux";
import reducer from "./reducer";
import {inc,dec,rnd} from "./actions";


const store = createStore(reducer);
const {dispatch} = store;

const Dispatchers = bindActionCreators({
        incDispatch : inc,
        rndDispatch:  rnd,
        decDispatch : dec,
}, dispatch);

document
    .getElementById('INC')
    .addEventListener('click', () => Dispatchers.incDispatch());
document
    .getElementById('DEC')
    .addEventListener('click', () => Dispatchers.decDispatch());
document
    .getElementById('RND')
    .addEventListener('click', () => {
        const payLoad = Math.floor(Math.random() * 10);
        Dispatchers.rndDispatch(payLoad);
    });


const update = () => {
    document.getElementById('counter').innerHTML = store.getState();
};

store.subscribe(update);