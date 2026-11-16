
import { useState } from 'react';

const careerSkills = {
  'Software Developer': [
    'Java',
    'Python',
    'Data Structures',
    'Problem Solving',
    'SQL'
  ],
  'Web Developer': [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js'
  ],
  'Data Analyst': [
    'Python',
    'SQL',
    'Excel',
    'Statistics',
    'Power BI'
  ],
  'AI / ML Engineer': [
    'Python',
    'Machine Learning',
    'Statistics',
    'SQL',
    'Deep Learning'
  ],
  'Cybersecurity Analyst': [
    'Networking',
    'Linux',
    'Python',
    'Cybersecurity',
    'Security Tools'
  ]
};

function SkillGapAnalysis() {
  const [career, setCareer] = useState('Software Developer');
  const [skills, setSkills] = useState('');
  const [analyzed, setAnalyzed] = useState(false);

  const requiredSkills = careerSkills[career];

  const studentSkills = skills
    .split(',')
    .map(skill => skill.trim().toLowerCase())
    .filter(Boolean);

  const matchedSkills = requiredSkills.filter(skill =>
    studentSkills.includes(skill.toLowerCase())
  );

  const missingSkills = requiredSkills.filter(skill =>
    !studentSkills.includes(skill.toLowerCase())
  );

  const percentage = Math.round(
    (matchedSkills.length / requiredSkills.length) * 100
  );

  return (
    <div className="skill-gap-page">
      <div className="skill-gap-heading">
        <h2>Skill Gap Analysis</h2>
        <p>Identify your strengths and discover which skills you need to improve.</p>
      </div>

      <div className="skill-gap-card">
        <h3>Analyze Your Skills</h3>

        <label>Select your target career</label>
        <select
          value={career}
          onChange={(e) => {
            setCareer(e.target.value);
            setAnalyzed(false);
          }}
        >
          {Object.keys(careerSkills).map(item => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>

        <label>Enter your current skills</label>
        <textarea
          rows="4"
          value={skills}
          onChange={(e) => {
            setSkills(e.target.value);
            setAnalyzed(false);
          }}
          placeholder="Example: Java, Python, SQL"
        />

        <button onClick={() => setAnalyzed(true)}>
          Analyze Skill Gap
        </button>
      </div>

      {analyzed && (
        <div className="skill-results">
          <h3>Your Skill Analysis: {career}</h3>

          <div className="skill-score-card">
            <h2>{percentage}%</h2>
            <p>Skill Match</p>
            <div className="skill-progress">
              <div style={{ width: `${percentage}%` }} />
            </div>
          </div>

          <div className="skill-result-card">
            <h3>Matched Skills ({matchedSkills.length})</h3>
            {matchedSkills.length > 0 ? (
              matchedSkills.map(skill => (
                <p className="matched-skill" key={skill}>
                  ✅ {skill}
                </p>
              ))
            ) : (
              <p>No matching skills found yet.</p>
            )}
          </div>

          <div className="skill-result-card">
            <h3>Skills You Need to Learn ({missingSkills.length})</h3>
            {missingSkills.length > 0 ? (
              missingSkills.map(skill => (
                <p className="missing-skill" key={skill}>
                  📚 {skill}
                </p>
              ))
            ) : (
              <p>Excellent! You have all the listed skills.</p>
            )}
          </div>

          <div className="skill-result-card">
            <h3>Suggested Learning Plan</h3>
            {missingSkills.length > 0 ? (
              <ol>
                {missingSkills.map(skill => (
                  <li key={skill}>
                    Learn and practise {skill}.
                  </li>
                ))}
              </ol>
            ) : (
              <p>Continue practising your skills and building projects.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SkillGapAnalysis;
