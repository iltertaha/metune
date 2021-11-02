import React, {Component} from "react";
import {Container, TunerContainer,ToneName,Level,Cent, Freq} from "../styles/styles";
import { connect } from "react-redux";


class Tuner extends Component {
    render(){
        const currentNote = this.props.currentNote;
        return (
            <Container>

            </Container>
        )
    }
}

const mapStateToProps = store => ({
    currentNote: store.tuneReducer.currentNote
});

export default connect(mapStateToProps)(Tuner);

