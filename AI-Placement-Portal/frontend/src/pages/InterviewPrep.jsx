
import { useState } from 'react';

const interviewQuestions = {
  Technical: [
    {
      question: 'What is JavaScript?',
      answer: 'JavaScript is a programming language used to create interactive and dynamic web pages.'
    },
    {
      question: 'What is the difference between let, const and var?',
      answer: 'var is function-scoped, while let and const are block-scoped. const cannot be reassigned after initialization.'
    },
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library used to build reusable and interactive user interfaces.'
    },
    {
      question: 'What is a database?',
      answer: 'A database is an organized collection of information that can be stored, managed and retrieved.'
    },
    {
      question: 'What is an API?',
      answer: 'An API is an Application Programming Interface that allows different software applications to communicate.'
    }
  ],

  HR: [
    {
      question: 'Tell me about yourself.',
      answer: 'Introduce your name, education, technical skills, projects, achievements and career goals.'
    },
    {
      question: 'What are your strengths?',
      answer: 'Mention genuine strengths such as problem-solving, teamwork, communication and willingness to learn.'
    },
    {
      question: 'What is your weakness?',
      answer: 'Choose a genuine area for improvement and explain what you are doing to improve it.'
    },
    {
      question: 'Why should we hire you?',
      answer: 'Explain how your skills, knowledge, enthusiasm and willingness to learn can contribute to the organization.'
    },
    {
      question: 'Where do you see yourself in five years?',
      answer: 'Explain your career goals and your interest in growing professionally while contributing to the company.'
    }
  ]
};

function InterviewPrep() {
  const [category, setCategory] = useState('Technical');
  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [practised, setPractised] = useState([]);

  const questions = interviewQuestions[category];
  const question = questions[current];

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
    setCurrent(0);
    setShowAnswer(false);
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setShowAnswer(false);
    }
  };

  const previousQuestion = () => {
    if (current > 0) {
      setCurrent(current - 1);
      setShowAnswer(false);
    }
  };

  const markPractised = () => {
    const id = `${category}-${current}`;

    if (!practised.includes(id)) {
      setPractised([...practised, id]);
    }
  };

  return (
    <div className="interview-page">
      <div className="interview-heading">
        <h2>Interview Preparation</h2>
        <p>Improve your confidence and get ready for your next interview.</p>
      </div>

      <div className="interview-stats">
        <div className="interview-stat-card">
          <h3>{practised.length}</h3>
          <p>Questions Practised</p>
        </div>

        <div className="interview-stat-card">
          <h3>{interviewQuestions.Technical.length +
            interviewQuestions.HR.length}</h3>
          <p>Total Questions</p>
        </div>
      </div>

      <div className="interview-card">
        <div className="interview-tabs">
          <button
            className={category === 'Technical' ? 'active' : ''}
            onClick={() => changeCategory('Technical')}
          >
            Technical Questions
          </button>

          <button
            className={category === 'HR' ? 'active' : ''}
            onClick={() => changeCategory('HR')}
          >
            HR Questions
          </button>
        </div>

        <p className="question-number">
          Question {current + 1} of {questions.length}
        </p>

        <h3>{question.question}</h3>

        {showAnswer && (
          <div className="interview-answer">
            <h4>Suggested Answer</h4>
            <p>{question.answer}</p>
          </div>
        )}

        <button
          className="answer-button"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </button>

        <button
          className="practised-button"
          onClick={markPractised}
        >
          Mark as Practised
        </button>

        <div className="interview-navigation">
          <button onClick={previousQuestion} disabled={current === 0}>
            Previous
          </button>

          <button
            onClick={nextQuestion}
            disabled={current === questions.length - 1}
          >
            Next Question
          </button>
        </div>
      </div>

      <div className="interview-tips">
        <h3>Interview Preparation Tips</h3>
        <ul>
          <li>Research the company before attending an interview.</li>
          <li>Practise explaining your projects clearly.</li>
          <li>Improve your communication skills.</li>
          <li>Prepare answers for common HR questions.</li>
          <li>Be confident and honest in your answers.</li>
        </ul>
      </div>
    </div>
  );
}

export default InterviewPrep;
