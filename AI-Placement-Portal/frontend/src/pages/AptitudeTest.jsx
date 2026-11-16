
import { useState, useEffect } from 'react';

const questions = [
  {
    question: 'What is 25% of 200?',
    options: ['25', '40', '50', '75'],
    answer: '50'
  },
  {
    question: 'Find the next number: 2, 4, 8, 16, ?',
    options: ['20', '24', '30', '32'],
    answer: '32'
  },
  {
    question: 'A train travels 120 km in 2 hours. What is its speed?',
    options: ['40 km/hr', '50 km/hr', '60 km/hr', '80 km/hr'],
    answer: '60 km/hr'
  },
  {
    question: 'Which of the following is a programming language?',
    options: ['HTML', 'Python', 'CSS', 'HTTP'],
    answer: 'Python'
  },
  {
    question: 'If 5 workers complete a task in 10 days, how many days will 10 workers take at the same rate?',
    options: ['2 days', '5 days', '10 days', '20 days'],
    answer: '5 days'
  }
];

function AptitudeTest() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    if (submitted || timeLeft <= 0) {
      if (timeLeft <= 0) setSubmitted(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(previous => previous - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [submitted, timeLeft]);

  const handleAnswer = (option) => {
    setAnswers({
      ...answers,
      [current]: option
    });
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  };

  const previousQuestion = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const score = questions.filter(
    (question, index) => answers[index] === question.answer
  ).length;

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const restartTest = () => {
    setCurrent(0);
    setAnswers({});
    setSubmitted(false);
    setTimeLeft(300);
  };

  if (submitted) {
    return (
      <div className="aptitude-page">
        <div className="aptitude-card result-card">
          <h2>Test Completed!</h2>
          <h1>{score} / {questions.length}</h1>
          <p>Your score: {Math.round((score / questions.length) * 100)}%</p>
          <p>
            {score >= 3
              ? 'Good job! Keep practising.'
              : 'Keep practising to improve your aptitude skills.'}
          </p>
          <button onClick={restartTest}>Try Again</button>
        </div>
      </div>
    );
  }

  const question = questions[current];

  return (
    <div className="aptitude-page">
      <div className="aptitude-heading">
        <h2>Aptitude Test</h2>
        <p>Test your logical thinking and problem-solving skills.</p>
      </div>

      <div className="aptitude-card">
        <div className="aptitude-top">
          <span>Question {current + 1} of {questions.length}</span>
          <span className="aptitude-timer">
            Time Left: {formatTime(timeLeft)}
          </span>
        </div>

        <div className="progress-track">
          <div
            className="progress-fill"
            style={{
              width: `${((current + 1) / questions.length) * 100}%`
            }}
          />
        </div>

        <h3>{question.question}</h3>

        <div className="aptitude-options">
          {question.options.map((option, index) => (
            <label
              key={index}
              className={
                answers[current] === option
                  ? 'aptitude-option selected'
                  : 'aptitude-option'
              }
            >
              <input
                type="radio"
                name={`question-${current}`}
                checked={answers[current] === option}
                onChange={() => handleAnswer(option)}
              />
              {option}
            </label>
          ))}
        </div>

        <div className="aptitude-buttons">
          <button
            onClick={previousQuestion}
            disabled={current === 0}
          >
            Previous
          </button>

          {current === questions.length - 1 ? (
            <button onClick={() => setSubmitted(true)}>
              Submit Test
            </button>
          ) : (
            <button onClick={nextQuestion}>
              Next Question
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AptitudeTest;
