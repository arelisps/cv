/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Clario',
    position: 'Software Development Engineer',
    url: 'https://clario.com/',
    startDate: '2022-12-05',
    endDate: '2024-09-26',
    summary: `Collaborated with global teams to implement client-requested designs and updates for eCOA (electronic Clinical Outcome Assessment) projects,
    I proviusing JavaScript, JSON, jQuery, CSS, HTML, and SQL. Focused on delivering high-quality solutions aligned with study specifications while ensuring smooth deployment.`,
    highlights: [
      'Managed the implementation of new features and changes, ensuring delivery aligned with project specifications and timelines.',
      'Developed and maintained semi-custom solutions for clients by updating existing code libraries and integrating databases (SQL) as needed.',
      'Performed unit testing to validate functionality and ensure compliance with quality standards.',
      'Worked closely with multidisciplinary teams, including Clinical Study Design and Data Delivery, to align technical solutions with client goals.',
      'Collaborated on improving functionality for complex mobile-web applications.',
    ],
  },
  {
    name: 'Encora',
    position: 'Quality Assurance Engineer',
    url: 'https://www.encora.com/',
    startDate: '2021-02-01',
    endDate: '2022-12-07',
    summary: `Participated in Quality Assurance projects, ensuring the delivery of high-quality systems
    by leveraging the Agile Scrum framework. Focused on test case estimation, specification, and execution
    while providing expert user support during testing phases.`,
    highlights: [
      'Create and executed detailed test cases to certify system quality, identifying and documenting issues for resolution.',
      'Conducted comprehensive regression testing and UI/UX testing to validate system functionality and user experience.',
      'Provided expert support to end-users during test execution.',
      'Delivered consistent quality assurance for multiple systems managed by client technologies, aligning outcomes with stakeholder expectations.',
      'Collaborated with a 10-member Agile team, contributing to sprint planning, backlog grooming, and iterative testing cycles.',
    ],
  },
  {
    name: 'Ministerio de Obras Públicas y Transporte (MOPT)',
    position: 'Software Developer Student',
    url: 'https://www.mopt.go.cr/',
    startDate: '2019-07-07',
    endDate: '2020-11-30',
    summary: `Developed and delivered a HelpDesk system for incident management within the IT Department of the Human Resources Unit. 
    Worked in a small Agile Scrum team to design, develop, and implement solutions based on user needs, 
    enhancing efficiency in handling user-reported incidents.`,
    highlights: [
      'Designed and implemented an interactive statistics module using JavaScript, C#, Bootstrap, and jQuery, enabling efficient data visualization and analysis.',
      'Created a responsive pop-up window system for data entry and retrieval, optimizing the workflow for incident management.',
      'Collaborated with a 4-member Agile team, conducting user interviews to gather requirements and translate them into software solutions.',
      'A system was implemented that improved incident notification and resolution, significantly improving response time and user satisfaction.',
    ],
  },
  {
    name: 'Universidad Nacional de Costa Rica (UNA)',
    position: 'Teaching Assistant',
    url: 'https://www.escinf.una.ac.cr/',
    startDate: '2019-07-07',
    endDate: '2020-11-30',
    summary: `Assisted the professor in handling course activities and
    supporting students to ensure a smooth learning experience.`,
    highlights: [
      'Reviewed and provided feedback on student projects and assignments, ensuring adherence to course requirements.',
      'Supervised students during exams, maintaining a fair and organized testing environment.',
    ],
  },
];

export default work;
