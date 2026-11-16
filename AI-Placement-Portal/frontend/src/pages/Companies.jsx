
import React, { useState } from 'react';

const companies = [
  { name: 'Google', role: 'Software Engineer', package: '25 LPA', eligibility: '8.0 CGPA', skills: 'Java, Python, DSA', status: 'Open' },
  { name: 'Microsoft', role: 'Software Developer', package: '20 LPA', eligibility: '7.5 CGPA', skills: 'C++, Java, DSA', status: 'Open' },
  { name: 'Amazon', role: 'Graduate Engineer', package: '18 LPA', eligibility: '7.0 CGPA', skills: 'Java, Python, SQL', status: 'Open' },
  { name: 'Infosys', role: 'Systems Engineer', package: '6 LPA', eligibility: '6.0 CGPA', skills: 'Java, SQL', status: 'Closed' },
  { name: 'TCS', role: 'Assistant System Engineer', package: '4.5 LPA', eligibility: '6.0 CGPA', skills: 'C, Java, Aptitude', status: 'Open' },
  { name: 'Accenture', role: 'Associate Software Engineer', package: '5.5 LPA', eligibility: '6.0 CGPA', skills: 'Python, SQL', status: 'Open' }
];

export default function Companies() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filtered = companies.filter(c =>
    (c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.role.toLowerCase().includes(search.toLowerCase())) &&
    (filter === 'All' || c.status === filter)
  );

  return (
    <div className="module-container">
      <h2>Companies</h2>
      <p>Explore placement opportunities and company requirements.</p>

      <div style={{ display: 'flex', gap: 12, margin: '20px 0', flexWrap: 'wrap' }}>
        <input
          placeholder="Search company or role..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="All">All Companies</option>
          <option value="Open">Applications Open</option>
          <option value="Closed">Applications Closed</option>
        </select>
      </div>

      <div className="module-grid">
        {filtered.map(company => (
          <div className="module-card" key={company.name}>
            <h3>{company.name}</h3>
            <p><strong>Role:</strong> {company.role}</p>
            <p><strong>Package:</strong> ₹{company.package}</p>
            <p><strong>Eligibility:</strong> {company.eligibility}</p>
            <p><strong>Skills:</strong> {company.skills}</p>
            <span style={{
              color: company.status === 'Open' ? 'green' : 'red',
              fontWeight: 'bold'
            }}>
              {company.status === 'Open' ? 'Applications Open' : 'Applications Closed'}
            </span>
          </div>
        ))}
      </div>

      {filtered.length === 0 && <p>No companies found.</p>}
    </div>
  );
}
