import React, { useState, useEffect } from "react";

const StudentPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [grade, setGrade] = useState("");

  // Fetch questions based on selected grade
  useEffect(() => {
    fetch(`/api/get_questions?grade=${grade}`)
      .then((response) => response.json())
      .then((data) => setQuestions(data.questions));
  }, [grade]);

  const handleAnswerSubmit = (answer) => {
    const question = questions[currentQuestionIndex];
    const correct = question.correct_answer === answer;

    setAnswers([...answers, { questionId: question.id, answer, correct }]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // After 10 questions, submit performance data
      submitPerformanceData();
    }
  };

  const submitPerformanceData = () => {
    fetch("/api/submit_answer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ student_id: 1, answers: answers }), // Example student_id = 1
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Performance data submitted", data);
      });
  };

  return (
    <div>
      <h1>Student Page</h1>
      <select onChange={(e) => setGrade(e.target.value)} value={grade}>
        <option value="">Select Grade</option>
        <option value="Grade 1">Grade 1</option>
        <option value="Grade 2">Grade 2</option>
        {/* Add more grades here */}
      </select>

      {questions.length > 0 && (
        <div>
          <h2>{questions[currentQuestionIndex].question_text}</h2>
          <button onClick={() => handleAnswerSubmit("a")}>
            {questions[currentQuestionIndex].choice_a}
          </button>
          <button onClick={() => handleAnswerSubmit("b")}>
            {questions[currentQuestionIndex].choice_b}
          </button>
          <button onClick={() => handleAnswerSubmit("c")}>
            {questions[currentQuestionIndex].choice_c}
          </button>
          <button onClick={() => handleAnswerSubmit("d")}>
            {questions[currentQuestionIndex].choice_d}
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentPage;
