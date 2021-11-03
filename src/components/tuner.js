import React, {Component} from "react";
import {Container, TunerContainer,ToneName,Level,Cent, Freq} from "../styles/styles";
import { connect } from "react-redux";

import "../utils/note-analyzer";

class Tuner extends Component {
    render(){
        const currentTone = this.props.currentNote;
        return (
            <Container>
                <TunerContainer tuned={-5 <= currentTone.cent && currentTone.cent <= 5}>
                <ToneName>
                    {currentTone.toneName}
                    <Level>
                        {currentTone.octave}
                    </Level>
                </ToneName>
                <Cent></Cent>
                <Freq>{Math.round(currentTone.freq)} Hertz</Freq>
                </TunerContainer>
            </Container>
        )
    }
}

const mapStateToProps = store => ({
    currentNote: store.toneReducer.currentTone
});

export default connect(mapStateToProps)(Tuner);

