
import { useState } from 'react';

const careers = [
  {
    title: 'Software Developer',
    description: 'Design, develop and maintain software applications.',
    skills: ['Java', 'Python', 'Data Structures', 'Problem Solving'],
    interest: 'Programming',
    icon: '💻'
  },
  {
    title: 'Web Developer',
    description: 'Build interactive and responsive websites.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    interest: 'Web Development',
    icon: '🌐'
  },
  {
    title: 'Data Analyst',
    description: 'Analyze data and generate useful business insights.',
    skills: ['Python', 'SQL', 'Excel', 'Statistics', 'Power BI'],
    interest: 'Data Analytics',
    icon: '📊'
  },
  {
    title: 'AI / ML Engineer',
    description: 'Build intelligent applications using AI and machine learning.',
    skills: ['Python', 'Machine Learning', 'Statistics', 'SQL'],
    interest: 'Artificial Intelligence',
    icon: '🤖'
  },
  {
    title: 'Cybersecurity Analyst',
    description: 'Protect computer systems, networks and information.',
    skills: ['Networking', 'Linux', 'Python', 'Cybersecurity'],
    interest: 'Cybersecurity',
    icon: '🔐'
  }
];

function CareerRecommendations() {
  const [skills, setSkills] = useState('');
  const [interest, setInterest] = useState('Programming');
  const [showResults, setShowResults] = useState(false);

  const recommendations = careers
    .map((career) => {
      const studentSkills = skills
        .split(',')
        .map(skill => skill.trim().toLowerCase())
        .filter(Boolean);

      const matchedSkills = career.skills.filter(skill =>
        studentSkills.includes(skill.toLowerCase())
      );

      const interestMatch = career.interest === interest ? 30 : 0;
      const skillScore = career.skills.length
        ? (matchedSkills.length / career.skills.length) * 70
        : 0;

      return {
        ...career,
        matchedSkills,
        score: Math.round(skillScore + interestMatch)
      };
    })
    .sort((a, b) => b.score - a.score);

  return (
    <div className="career-page">
      <div className="career-heading">
        <h2>AI Career Recommendations</h2>
        <p>Discover career paths based on your skills and interests.</p>
      </div>

      <div className="career-form-card">
        <h3>Tell us about yourself</h3>

        <label>Enter your current skills</label>
        <textarea
          value={skills}
          onChange={(e) => {
            setSkills(e.target.value);
            setShowResults(false);
          }}
          placeholder="Example: Python, HTML, CSS, Java"
          rows="4"
        />

        <label>Select your career interest</label>
        <select
          value={interest}
          onChange={(e) => {
            setInterest(e.target.value);
            setShowResults(false);
          }}
        >
          <option value="Programming">Programming</option>
          <option value="Web Development">Web Development</option>
          <option value="Data Analytics">Data Analytics</option>
          <option value="Artificial Intelligence">Artificial Intelligence</option>
          <option value="Cybersecurity">Cybersecurity</option>
        </select>

        <button onClick={() => setShowResults(true)}>
          Find My Career
        </button>
      </div>

      {showResults && (
        <div className="career-results">
          <h3>Recommended Career Paths</h3>

          {recommendations.map((career) => (
            <div className="career-card" key={career.title}>
              <h3>{career.icon} {career.title}</h3>
              <p>{career.description}</p>

              <h4>Career Match: {career.score}%</h4>

              <div className="career-progress">
                <div
                  style={{ width: `${career.score}%` }}
                />
              </div>

              <p>
                <strong>Matching skills:</strong>{' '}
                {career.matchedSkills.length
                  ? career.matchedSkills.join(', ')
                  : 'No matching skills entered yet'}
              </p>

              <p>
                <strong>Skills to learn:</strong>{' '}
                {career.skills.filter(skill =>
                  !career.matchedSkills.includes(skill)
                ).join(', ') || 'You have all listed skills!'}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CareerRecommendations;
