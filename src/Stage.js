import React from 'react';
import './Stage.css';

class Stage extends React.Component {
  constructor(props) {
    super(props);

    this.updateInput = this.updateInput.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.nextStage = this.nextStage.bind(this);

    this.state = {
      correct: false,
      empty: true
    };
  }

  updateInput(event) {
    const input = event.target.value.trim().toLowerCase();
    this.checkAnswer(input);
    if (this.state.empty) this.setState({ empty: false });
  }

  checkAnswer(answer) {
    let ref1 = this.props.stage.answer.toLowerCase();
    let ref2;
    let alt = this.props.stage.alternate ? true : false;
    if (alt) ref2 = this.props.stage.alternate.toLowerCase();
    if (answer === ref1 || (alt && answer === ref2)) {
      this.setState({ correct: true });
    } else if (this.state.correct) {
      this.setState({ correct: false });
    }
  }

  handleKeyDown(event) {
    if (event.keyCode === 13 && this.state.correct) this.nextStage();
  }

  nextStage() {
    this.input.value = '';
    this.props.nextStage();
    this.setState({
      correct: false,
      empty: true
    });
  }

  componentDidUpdate() {
    if (this.input) this.input.focus();
  }

  render() {
    return (
      <div className="Stage">
        <header className="Stage-header">
          <h1 className="Stage-title">{`Stage ${this.props.stageNumber}`}</h1>
        </header>
        <p className="Stage-intro">
          {this.props.stage.clue}
        </p>
        <p
          className="Stage-feedback"
          style={{ color: this.state.correct ? 'green' : 'red' }}
        >
          {this.state.empty ? <br/> : this.state.correct ? "You got it!" : "Sorry, try again"}
        </p>
        {this.props.nextStage ?
          <form action="#">
            <input
              type="text"
              className="Stage-input"
              autoFocus={true}
              onChange={this.updateInput}
              onKeyDown={this.handleKeyDown}
              ref={ref => this.input = ref}
            />
            {this.state.correct ?
              <div
                className="Stage-button"
                onClick={this.nextStage}
              >
                Next Stage
              </div>
              :
              null
            }
          </form>
          :
          null
        }
      </div>
    );
  }
}

export default Stage;
