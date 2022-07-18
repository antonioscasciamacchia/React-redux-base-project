import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import actions from "./redux/test/actions"

const {increment, decrement, incrementAsync, decrementAsync} = actions

function App() {

    const counter = useSelector(state => state.testReducer.counter)
    const dispatch = useDispatch()

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>{"Counter: " + counter}</p>
                <div>
                    <button onClick={() => {dispatch(increment())}}>Increment</button>
                    <button onClick={() => {dispatch(decrement())}}>Decrement</button>
                    <button onClick={() => {dispatch(incrementAsync())}}>Increment async</button>
                    <button onClick={() => {dispatch(decrementAsync())}}>Decrement async</button>
                </div>
            </header>
        </div>
    );
}

export default App;
