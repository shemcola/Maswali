import React, { useState } from 'react';
import axios from 'axios';

const TeacherPage = () => {
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState({ option1: '', option2: '', option3: '', option4: '' });
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const questionData = {
      question_text: questionText,
      option_1: options.option1,
      option_2: options.option2,
      option_3: options.option3,
      option_4: options.option4,
      correct_answer: correctAnswer,
    };

    try {
      await axios.post('http://127.0.0.1:5000/teacher', questionData);
      alert("Question added successfully!");
    } catch (error) {
      alert("Failed to add question.");
    }
  };

  return (
    <div>
      <h1>Teacher - Add New Question</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Question"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Option 1"
          value={options.option1}
          onChange={(e) => setOptions({ ...options, option1: e.target.value })}
        />
        <input
          type="text"
          placeholder="Option 2"
          value={options.option2}
          onChange={(e) => setOptions({ ...options, option2: e.target.value })}
        />
        <input
          type="text"
          placeholder="Option 3"
          value={options.option3}
          onChange={(e) => setOptions({ ...options, option3: e.target.value })}
        />
        <input
          type="text"
          placeholder="Option 4"
          value={options.option4}
          onChange={(e) => setOptions({ ...options, option4: e.target.value })}
        />
        <input
          type="text"
          placeholder="Correct Answer"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
        />
        <button type="submit">Submit Question</button>
      </form>
    </div>
  );
};

export default TeacherPage;
 
