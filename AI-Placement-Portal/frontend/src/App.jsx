
import React, { useState } from 'react';
import {
  LayoutDashboard,
  UserRound,
  FileText,
  Brain,
  MessageSquare,
  BriefcaseBusiness,
  BarChart3,
  Settings,
  Bell,
  Search,
  ChevronDown,
  GraduationCap,
  Target,
  TrendingUp,
  Award,
  ArrowUpRight,
  Sparkles,
  Menu,
  X,
  BookOpen
} from 'lucide-react';
import './App.css';
import Profile from './pages/Profile';
import ResumeAnalysis from './pages/ResumeAnalysis';
import AptitudeTest from './pages/AptitudeTest';
import InterviewPrep from './pages/InterviewPrep';
import CareerRecommendations from './pages/CareerRecommendations';
import SkillGapAnalysis from './pages/SkillGapAnalysis';
import Companies from './pages/Companies';
import PlacementAnalytics from './pages/PlacementAnalytics';
import SettingsPage from './pages/Settings';


const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard },
  { name: 'My Profile', icon: UserRound },
  { name: 'Resume Analysis', icon: FileText },
  { name: 'Aptitude Test', icon: Brain },
  { name: 'Interview Prep', icon: MessageSquare },
  { name: 'Career Recommendations', icon: BriefcaseBusiness },
  { name: 'Skill Gap Analysis', icon: Target },
  { name: 'Companies', icon: GraduationCap },
  { name: 'Placement Analytics', icon: BarChart3 },
];

function App() {
  const [activePage, setActivePage] = useState('Dashboard');
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="app-container">

      {/* Sidebar */}
      <aside className={`sidebar ${mobileMenu ? 'show-sidebar' : ''}`}>
        <div className="brand">
          <div className="brand-icon">
            <GraduationCap size={27} />
          </div>
          <div>
            <h2>PlaceAI</h2>
            <span>Placement Portal</span>
          </div>
          <button className="close-menu" onClick={() => setMobileMenu(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="menu-heading">MAIN MENU</div>

        <nav className="navigation">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                className={`nav-item ${activePage === item.name ? 'active' : ''}`}
                onClick={() => {
                  setActivePage(item.name);
                  setMobileMenu(false);
                }}
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
  <button
    className={`nav-item ${activePage === 'Settings' ? 'active' : ''}`}
    onClick={() => {
      setActivePage('Settings');
      setMobileMenu(false);
    }}
  >
    <Settings size={19} />
    <span>Settings</span>
  </button>

          <div className="sidebar-help">
            <Sparkles size={22} />
            <h4>AI Career Assistant</h4>
            <p>Get guidance for your placement journey.</p>
            <button onClick={() => setActivePage('Career Recommendations')}>
              Explore AI <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">

        {/* Top Navbar */}
        <header className="topbar">
          <div className="topbar-left">
            <button className="mobile-menu" onClick={() => setMobileMenu(true)}>
              <Menu size={22} />
            </button>
            <div>
              <h2>{activePage}</h2>
              <p>AI-Driven Placement Preparation Portal</p>
            </div>
          </div>

          <div className="topbar-right">
            <div className="search-box">
              <Search size={18} />
              <input placeholder="Search here..." />
            </div>
            <button className="notification">
              <Bell size={20} />
              <span></span>
            </button>
            <div className="user-profile">
              <div className="avatar">S</div>
              <div className="user-info">
                <strong>Student</strong>
                <span>Student Account</span>
              </div>
              <ChevronDown size={16} />
            </div>
          </div>
        </header>

        {activePage === 'Dashboard' ? (
          <div className="dashboard-content">

            {/* Welcome */}
            <section className="welcome-section">
              <div>
                <span className="welcome-label">
                  <Sparkles size={15} /> YOUR PLACEMENT JOURNEY
                </span>
                <h1>Welcome back, Student! 👋</h1>
                <p>Prepare smarter, improve your skills and achieve your dream career.</p>
              </div>
              <div className="welcome-illustration">
                <GraduationCap size={72} />
                <div className="illustration-star">✦</div>
              </div>
            </section>

            {/* Statistics */}
            <section className="stats-grid">
              <div className="stat-card">
                <div className="stat-top">
                  <div className="stat-icon purple"><FileText /></div>
                  <span className="stat-trend">Resume</span>
                </div>
                <h2>82<span>/100</span></h2>
                <p>Resume Score</p>
                <div className="progress-track">
                  <div className="progress-fill purple-fill" style={{width:'82%'}}></div>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-top">
                  <div className="stat-icon blue"><Brain /></div>
                  <span className="stat-trend">Aptitude</span>
                </div>
                <h2>75<span>/100</span></h2>
                <p>Aptitude Performance</p>
                <div className="progress-track">
                  <div className="progress-fill blue-fill" style={{width:'75%'}}></div>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-top">
                  <div className="stat-icon green"><Target /></div>
                  <span className="stat-trend">Skills</span>
                </div>
                <h2>80<span>%</span></h2>
                <p>Skill Match</p>
                <div className="progress-track">
                  <div className="progress-fill green-fill" style={{width:'80%'}}></div>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-top">
                  <div className="stat-icon orange"><BriefcaseBusiness /></div>
                  <span className="stat-trend">Companies</span>
                </div>
                <h2>12</h2>
                <p>Matching Companies</p>
                <div className="stat-footer">
                  <TrendingUp size={15} /> Based on your skills
                </div>
              </div>
            </section>

            {/* Middle Section */}
            <section className="middle-grid">

              <div className="panel performance-panel">
                <div className="panel-heading">
                  <div>
                    <h3>Placement Performance</h3>
                    <p>Track your preparation progress</p>
                  </div>
                  <span className="period-label">This Month</span>
                </div>

                <div className="chart">
                  {[45,65,55,80,68,92,75].map((height,index) => (
                    <div className="chart-column" key={index}>
                      <div
                        className={`chart-bar ${index === 5 ? 'highlight-bar' : ''}`}
                        style={{height: `${height}%`}}
                      ></div>
                      <span>{['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][index]}</span>
                    </div>
                  ))}
                </div>
                <div className="chart-caption">
                  <span><i className="legend-dot"></i> Preparation activity</span>
                  <strong>Good progress!</strong>
                </div>
              </div>

              <div className="panel profile-panel">
                <div className="panel-heading">
                  <div>
                    <h3>Profile Completion</h3>
                    <p>Complete your profile to get better matches</p>
                  </div>
                </div>

                <div className="profile-progress">
                  <div className="circular-progress">
                    <div className="circle-inner">
                      <strong>85%</strong>
                      <span>Completed</span>
                    </div>
                  </div>
                </div>

                <div className="profile-check">
                  <span>✓ Personal information</span>
                  <span>✓ Education details</span>
                  <span>✓ Skills information</span>
                  <span className="pending">○ Upload certificates</span>
                </div>

                <button className="outline-button" onClick={() => setActivePage('My Profile')}>
                  Complete Profile <ArrowUpRight size={16}/>
                </button>
              </div>
            </section>

            {/* Bottom Section */}
            <section className="bottom-grid">

              <div className="panel recommendation-panel">
                <div className="panel-heading">
                  <div>
                    <h3><Sparkles size={19} /> AI Career Recommendations</h3>
                    <p>Career paths suggested for your profile</p>
                  </div>
                  <button className="text-button" onClick={() => setActivePage('Career Recommendations')}>
                    View All <ArrowUpRight size={15}/>
                  </button>
                </div>

                <div className="career-item">
                  <div className="career-icon purple"><BriefcaseBusiness /></div>
                  <div className="career-info">
                    <strong>Software Developer</strong>
                    <span>Programming · Web Development</span>
                  </div>
                  <div className="match-score">92% Match</div>
                </div>

                <div className="career-item">
                  <div className="career-icon blue"><BarChart3 /></div>
                  <div className="career-info">
                    <strong>Data Analyst</strong>
                    <span>Python · SQL · Analytics</span>
                  </div>
                  <div className="match-score">85% Match</div>
                </div>

                <div className="career-item">
                  <div className="career-icon green"><Brain /></div>
                  <div className="career-info">
                    <strong>AI / ML Engineer</strong>
                    <span>Python · Machine Learning</span>
                  </div>
                  <div className="match-score">78% Match</div>
                </div>
              </div>

              <div className="panel activity-panel">
                <div className="panel-heading">
                  <div>
                    <h3>Recent Activities</h3>
                    <p>Your latest preparation activities</p>
                  </div>
                </div>

                <div className="activity-item">
                  <div className="activity-icon purple"><FileText size={17}/></div>
                  <div>
                    <strong>Resume Analysis</strong>
                    <span>Resume score: 82/100</span>
                  </div>
                </div>

                <div className="activity-item">
                  <div className="activity-icon blue"><Brain size={17}/></div>
                  <div>
                    <strong>Aptitude Test</strong>
                    <span>Test score: 75/100</span>
                  </div>
                </div>

                <div className="activity-item">
                  <div className="activity-icon green"><BookOpen size={17}/></div>
                  <div>
                    <strong>Interview Preparation</strong>
                    <span>Practice your next interview</span>
                  </div>
                </div>
              </div>

            </section>

            <footer className="footer">
              © 2026 PlaceAI · AI-Driven Placement Preparation and Career Recommendation Portal
            </footer>

          </div>
         
) : activePage === 'My Profile' ? (
  <Profile />

) : activePage === 'Resume Analysis' ? (
  <ResumeAnalysis />


) : activePage === 'Aptitude Test' ? (
  <AptitudeTest />
) : activePage === 'Interview Prep' ? (
  <InterviewPrep />
) : activePage === 'Career Recommendations' ? (
  <CareerRecommendations />
) : activePage === 'Skill Gap Analysis' ? (
  <SkillGapAnalysis />
) : activePage === 'Companies' ? (
  <Companies />
) : activePage === 'Placement Analytics' ? (
  <PlacementAnalytics />
) : activePage === 'Settings' ? (
  <SettingsPage />
) : (


          <div className="module-placeholder">
            <div className="placeholder-icon"><Sparkles size={34}/></div>
            <h2>{activePage}</h2>
            <p>This module will be developed in the next stage of your project.</p>
            <button onClick={() => setActivePage('Dashboard')}>
              Back to Dashboard
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
