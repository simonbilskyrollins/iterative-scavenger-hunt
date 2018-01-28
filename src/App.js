import React, { Component } from 'react';
import './App.css';
import stages from './stages.json';
import final from './final.json';
import Intro from './Intro';
import Stage from './Stage';

class App extends Component {
  constructor(props) {
    super(props);

    this.startAction = this.startAction.bind(this);
    this.nextStage = this.nextStage.bind(this);

    this.numStages = 4;
    this.selectedStages = [];

    this.state = {
      started: false,
      finished: false
    };
  }

  startAction() {
    this.selectedStages = stages.sort(() => 0.5 - Math.random()).slice(0, this.numStages);
    this.setState({
      started: true,
      stageNumber: 0
    });
  }

  nextStage() {
    this.setState(prevState => {
      const nextStageNumber = prevState.stageNumber + 1;
      if (nextStageNumber >= this.numStages) {
        return { finished: true };
      } else {
        return { stageNumber: nextStageNumber };
      }
    });
  }

  renderContent() {
    if (!this.state.started) {
      return (
        <Intro startAction={this.startAction} />
      );
    } else if (!this.state.finished) {
      return (
        <Stage
          stageNumber={this.state.stageNumber}
          stage={this.selectedStages[this.state.stageNumber]}
          nextStage={this.nextStage}
        />
      );
    } else {
      return (
        <Stage
          stageNumber="n"
          stage={final}
        />
      );
    }
  }

  render() {
    return (
      <div className="App">
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
