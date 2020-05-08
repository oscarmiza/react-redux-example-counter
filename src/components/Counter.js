import React from "react";
import { connect } from 'react-redux'
import { sumar, restar, sumar2, restar2 } from '../redux/actions'
class Counter extends React.Component {
    state = {
        countState: 0,
    };
    handleAddState = () => {
        const { sumarRedux2 } = this.props
        sumarRedux2()
    };
    handleLessState = () => {
        const { restarRedux2 } = this.props
        restarRedux2()
    };
    handleLessRedux = () => {
        const { restarRedux } = this.props
        restarRedux()
    };
    handleAddRedux = () => {
        const { sumarRedux } = this.props
        sumarRedux()
    };
    render() {
        const { countRedux2 } = this.props;
        const { countRedux } = this.props
        console.log('render de countState: ', { state: this.state, props: this.props })
        return (
            <div>
                <h1>Contador de redux 2</h1>
                <p>{countRedux2}</p>
                <button onClick={this.handleLessState}>-</button>
                <button onClick={this.handleAddState}>+</button>
                <br />
                <h1>Contador de redux</h1>
                <p>{countRedux}</p>
                <button onClick={this.handleLessRedux}>-</button>
                <button onClick={this.handleAddRedux}>+</button>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        countRedux: state.counter_1,
        countRedux2: state.counter_2
    }
}
function mapDispatchToProps(dispatch) {
    return {
        sumarRedux: () => dispatch(sumar()),
        restarRedux: () => dispatch(restar()),
        sumarRedux2: () => dispatch(sumar2()),
        restarRedux2: () => dispatch(restar2())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)