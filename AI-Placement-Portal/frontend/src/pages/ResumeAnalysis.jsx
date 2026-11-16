
import { useState } from 'react';

function ResumeAnalysis() {
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type !== 'application/pdf') {
      setResume(null);
      setMessage('Please upload a PDF file only.');
      return;
    }

    setResume(file);
    setMessage('');
  };

  const handleAnalyze = () => {
    if (!resume) {
      setMessage('Please upload your resume first.');
      return;
    }

    setMessage(
      'Resume uploaded successfully! Actual AI analysis will be connected in a later step.'
    );
  };

  return (
    <div className="resume-page">
      <div className="resume-heading">
        <h2>Resume Analysis</h2>
        <p>Upload your resume and prepare for your dream career.</p>
      </div>

      <div className="resume-upload-card">
        <h3>Upload Your Resume</h3>

        <div className="upload-area">
          <div className="upload-icon">📄</div>
          <h3>Choose your resume</h3>
          <p>Upload your resume in PDF format</p>

          <input
            type="file"
            accept=".pdf,application/pdf"
            onChange={handleFileChange}
          />

          {resume && (
            <p className="selected-file">
              Selected file: {resume.name}
            </p>
          )}
        </div>

        <button
          className="analyze-button"
          onClick={handleAnalyze}
        >
          Analyze Resume
        </button>

        {message && (
          <p className="resume-message">{message}</p>
        )}
      </div>

      <div className="resume-info-card">
        <h3>What will be analyzed?</h3>
        <ul>
          <li>Resume quality and structure</li>
          <li>Technical skills</li>
          <li>Education details</li>
          <li>Project experience</li>
          <li>Missing skills and improvements</li>
        </ul>
      </div>
    </div>
  );
}

export default ResumeAnalysis;
