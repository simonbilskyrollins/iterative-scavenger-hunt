import React from 'react';
import './Intro.css';
import Latex from 'react-latex';
import '../node_modules/katex/dist/katex.css';

class Intro extends React.Component {
  render() {
    return (
      <div className="Intro">
        <header className="Intro-header">
          <h1 className="Intro-title">Iterative Scavenger Hunt</h1>
        </header>
        <p className="Intro-intro">
          <Latex>Some set $C$ of $n$ codewords has been scattered around various
            rooms in the Weitz. Given a set of vertices $V \subseteq$ rooms in
            the Weitz, and a function searchRoom(), design, implement, and run
            an algorithm that constructs a weighted graph $G=\langle V, E\rangle$
            such that $C \subseteq V$ and you find all codewords $c \in C$
            before anyone else.
          </Latex>
        </p>
        <div
          className="Intro-button"
          onClick={this.props.startAction}
        >
          Start
        </div>
      </div>
    );
  }
}

export default Intro;
