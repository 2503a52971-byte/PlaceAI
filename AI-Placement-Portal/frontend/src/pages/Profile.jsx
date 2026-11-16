
import { useState } from 'react';

function Profile() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    branch: '',
    graduationYear: '',
    cgpa: '',
    skills: '',
    interests: ''
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setSaved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
  };

  return (
    <div className="profile-page">
      <h2>Student Profile</h2>
      <p>Enter your details to get better career recommendations.</p>

      <form onSubmit={handleSubmit} className="profile-form">

        <label>Full Name</label>
        <input name="name" value={form.name} onChange={handleChange}
          placeholder="Enter your name" required />

        <label>Email Address</label>
        <input name="email" type="email" value={form.email}
          onChange={handleChange} placeholder="Enter your email" required />

        <label>Phone Number</label>
        <input name="phone" value={form.phone} onChange={handleChange}
          placeholder="Enter phone number" />

        <label>College Name</label>
        <input name="college" value={form.college} onChange={handleChange}
          placeholder="Enter college name" />

        <label>Branch</label>
        <input name="branch" value={form.branch} onChange={handleChange}
          placeholder="Example: CSE, ECE, EEE" />

        <label>Graduation Year</label>
        <input name="graduationYear" value={form.graduationYear}
          onChange={handleChange} placeholder="Example: 2027" />

        <label>CGPA</label>
        <input name="cgpa" type="number" step="0.01"
          value={form.cgpa} onChange={handleChange}
          placeholder="Enter your CGPA" />

        <label>Skills</label>
        <textarea name="skills" value={form.skills}
          onChange={handleChange}
          placeholder="Example: Python, Java, HTML, CSS" />

        <label>Career Interests</label>
        <textarea name="interests" value={form.interests}
          onChange={handleChange}
          placeholder="Example: Software Developer, Data Analyst" />

        <button type="submit">Save Profile</button>

        {saved && <p>Profile details saved successfully!</p>}

      </form>
    </div>
  );
}

export default Profile;
