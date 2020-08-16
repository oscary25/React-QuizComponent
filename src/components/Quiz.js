import React, { Component } from "react";
import "../App.css";

import quizData from "../quiz_data.json";
class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quiz_position: 1,
    };
  }
  render() {
    return (
      <div className="QuizQuestion">
        {quizData.quiz_questions.map((data, index) => (
          <div key={index}>
            <h3 ke>{data.instruction_text}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default Quiz;
