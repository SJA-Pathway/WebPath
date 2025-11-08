import './globals.css';
import Image from 'next/image';

export default function Home() {
  const projects = [
    { name: 'TaskBoard', description: 'Trello-style task management tool' },
    { name: 'BlogSphere', description: 'Multi-user blogging platform' },
    { name: 'ChatNest', description: 'Real-time chat app' },
    { name: 'QuizHub', description: 'Interactive quiz app' },
    { name: 'Portfolio Builder', description: 'No-code personal site creator' }
  ];

  return (
    <div className="container">
      <main className="main">
        <div className="intro-container">
          <Image
            src="/sjapathway_logo.png"
            alt="WebPath Logo"
            width={120}
            height={40}
            priority
          />
          <div className="intro-text">
            <h1>Welcome to WebPath by SJA Pathway</h1>
            <p>
              An open-source platform to create, share, and collaborate on web projects. 
              Learn, contribute, and grow with hands-on development experience.
            </p>
          </div>
        </div>

        <section className="projects-section">
          <h2>Featured Mini Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.name} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}