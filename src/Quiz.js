import React, { Component } from "react";

let quizData = require("./quiz_data.json");
class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quiz_position: 1,
    };
  }
  render() {
    return (
      <div>
        {quizData.quiz_questions.map((data, index) => (
          <div key={index} className="QuizQuestion">
            <h3 ke>{data.instruction_text}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default Quiz;
