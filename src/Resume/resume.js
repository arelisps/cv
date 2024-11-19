// src/Resume.js
import React from 'react';
import '../css/Resume.css'; // Archivo de estilos personalizados

import tecLogo from '../images/tec.png';
import unaLogo from '../images/una.png';

import clarioLogo from '../images/clario.png';
import encoraLogo from '../images/encora.png';
import moptLogo from '../images/mopt.png';

function Resume() {
  return (
    <div className="resume-container">
      <section id="education" className="resume-section">
        <h2 className="section-title">Education</h2>
        <div className="card">
          <img src={tecLogo} alt="TEC Logo" className="card-logo" />
          <div className="card-content">
            <h3>Master’s Degree in Computer Science</h3>
            <p className="card-dates">Instituto Tecnológico de Costa Rica (2023 - Currently)</p>
          </div>
        </div>
        <div className="card">
          <img src={unaLogo} alt="UNA Logo" className="card-logo" />
          <div className="card-content">
            <h3>Bachelor’s Degree in University</h3>
            <p className="card-dates">Universidad Nacional de Costa Rica (2016 - 2021)</p>
          </div>
        </div>
        <div className="card">
          <img src={unaLogo} alt="UNA Logo" className="card-logo" />
          <div className="card-content">
            <h3>Diploma in Programming of Computer Applications</h3>
            <p className="card-dates">Universidad Nacional de Costa Rica (2016 - 2019)</p>
          </div>
        </div>
      </section>

      <section id="work_experience" className="resume-section">
        <h2 className="section-title">Work Experience</h2>
        <div className="card">
          <img src={clarioLogo} alt="Clario Logo" className="card-logo" />
          <div className="card-content">
            <h3>Software Development Engineer</h3>
            <p className="card-dates">2022 - 2024 | Clario</p>
            <p>
              At Clario, I worked on multiple projects leveraging internal APIs
              to deliver innovative solutions. I focused on enhancing features,
              ensuring timely delivery, and conducting unit testing to maintain
              quality. Collaborated with teams and adapted to diverse client
              requirements, including custom JavaScript functions for
              specialized solutions.
            </p>
            <p>
              <strong>Technologies:</strong> JavaScript, JSON, jQuery, CSS,
              HTML, SQL.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={encoraLogo} alt="Encora Logo" className="card-logo" />
          <div className="card-content">
            <h3>QA Engineer</h3>
            <p className="card-dates">2021 - 2022 | Encora</p>
            <p>
              Participated in Quality Assurance projects using Agile Scrum,
              ensuring the quality of systems through test case estimation,
              specification, and execution. Conducted regression and UI/UX
              testing while providing expert user support.
            </p>
            <p>
              <strong>Technologies:</strong> MTM, Microsoft TFS, Automation
              Anywhere, VMWare.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={moptLogo} alt="MOPT Logo" className="card-logo" />
          <div className="card-content">
            <h3>Software Developer Student</h3>
            <p className="card-dates">2019 - 2021 | MOPT</p>
            <p>
              Developed the HelpDesk system for incident management, working
              with Agile Scrum. Integrated UX/UI best practices and created
              incident statistics using JavaScript, C#, Bootstrap, and JQuery.
            </p>
            <p>
              <strong>Technologies:</strong> C#, ASP.NET MVC, Bootstrap, JQuery,
              SQL Server.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;