import React, {Component} from "react";
import {connect} from 'react-redux';
import{bindActionCreators} from "redux";
import  * as actions from '../actions';

class Counter extends Component {

    render() {
        return (
            <div>
                <h2>{this.props.counter}</h2>

                <button onClick={this.props.inc}>INC</button>
                <button onClick={this.props.dec}>DEC</button>
                <button onClick={this.props.rnd}>RND</button>

            </div>
        )
    }
}

const mapStateToProps = (state) =>{
  return{
      counter : state
  }
};

const mapDispatchToProps = (dispatch) =>{
  const {inc,dec,rnd} = bindActionCreators(actions,dispatch);

  return{

      inc,
      dec,
      rnd : () => {
          rnd(10)
      }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);