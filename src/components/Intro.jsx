import React from 'react';
import MainSection from './MainSection';

export default function Intro() {
  return (
    <MainSection title="Intro" color="gules">
      <div>
        Full-stack software engineer using the latest technologies to build solutions for real people. With an eye for detail, a penchant for style, and an intuition for abstraction, I create concise, accurate, and reusable code.
      </div>
      <ul>
        <li>
          Languages & Frameworks: React, Express, Python, JavaScript, NodeJS, Django, AJAX, HTML, CSS, SASS, Bootstrap
        </li>
        <li>
          Management & Deployment: Git, GitHub, Heroku, AWS
        </li>
        <li>
          Databases: PostgreSQL, MongoDB
        </li>
      </ul>
    </MainSection>
  );
}
