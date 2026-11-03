export const reactPortfolioStory=p=>({
  ...p,title:'React Portfolio',year:'2025',kicker:'CS6041 · Individual portfolio assignment',
  question:'Designing and coding a place for my work.',
  standfirst:'For CS6041, I built my own portfolio in React. The first phase established six pages and a shared layout. In the second, I added painting likes with Redux, connected the contact form with EmailJS, and checked the site with Lighthouse and WAVE.',
  terminal:['React + Chakra UI + SCSS','Redux → painting likes','EmailJS → form feedback'],
  media:{type:'video',src:'media/react-portfolio-phase-two.mp4',poster:'media/react-portfolio-film.jpg',alt:'Nimra’s Phase 2 screen recording showing the original React portfolio, Meraki painting likes and the contact form.',caption:'My Phase 2 walkthrough of the CS6041 portfolio. The supplied screen recording is silent.'},
  meta:[['My role','Individual design, React development, evaluation and documentation'],['Module','CS6041 · Interactive Media Project'],['Development','Two assessed phases'],['Original build','React, Chakra UI, SCSS, Redux, EmailJS and Framer Motion']],
  stack:['React','Chakra UI','SCSS','Redux','EmailJS','Framer Motion','Lighthouse','WAVE','Responsive design','Interface evaluation'],
  summary:[['Phase one','Page structure, reusable navigation, artwork and responsive layouts.'],['Phase two','State, a working contact form and motion.'],['Evaluation','Device checks, accessibility findings and a list of improvements still to make.']],
  body:[
    {kind:'prose',heading:'The assignment was to build our own portfolio',text:[
      'I wanted an employer or client to be able to find both my front-end work and my art. I began with paper sketches, then planned Home, About, Projects, Meraki, Resume and Contact as separate pages.',
      'I built the interface in React with Chakra UI and SCSS. A shared navigation bar appeared across the site, and clicking the logo returned to Home. My paintings gave Meraki its own content; the illustrated avatar was AI-generated.',
    ]},
    {kind:'prose',heading:'Phase one: make the structure work',text:[
      'The first version focused on the page layout and navigation. Project cards introduced the work, Meraki displayed my paintings, and the Contact page had a form layout.',
      'The form could not send anything yet. I also found gaps in the About content, project organisation and smaller-screen layouts. Those became tasks for the next phase.',
    ],images:[{src:'media/react-portfolio-phase-one.jpeg',alt:'The first-phase homepage with Nimra’s illustrated avatar, name and shared navigation.',caption:'The earlier homepage, documented in the Phase 2 report before the updates.'}]},
    {kind:'prose',heading:'Phase two: give the interactions a purpose',text:[
      'I used Redux for painting likes on Meraki. Each painting could be liked or unliked, and the page updated the count and a short response. It gave me a small, visible way to practise shared state across components.',
      'I connected the form with EmailJS so someone could send a message. Framer Motion linked the floating images to scroll position, and I added moving text and clearer project sections.',
    ],images:[{src:'media/react-portfolio-phase-two.jpeg',alt:'The updated assignment homepage with floating illustrations around the avatar and outlined name treatment.',caption:'The Phase 2 homepage. This is the assignment version shown in the recording above.'}]},
    {kind:'prose',heading:'The form looked finished before it worked',text:[
      'My first sending tests kept failing. The template used {{full-name}}, while my form sent {{name}}. Once I made the field names match, the messages arrived.',
      'I added success and error feedback so a visitor would know whether the message had been sent. Testing delivery mattered as much as getting the form to look right.',
    ]},
    {kind:'prose',heading:'Checking more than the appearance',text:[
      'I checked the layouts on different devices and used Lighthouse and WAVE to inspect the website. WAVE flagged missing alternative text and contrast issues. I addressed some of them and darkened text from teal to a deeper shade where needed.',
      'Lighthouse also showed that performance needed more attention. The report records remaining accessibility warnings and tablet layout issues, so I treated the audit as a list of things to improve.',
    ],images:[{src:'media/react-portfolio-wave.jpeg',alt:'A WAVE accessibility check flagging a linked image with missing alternative text on the original portfolio.',caption:'One of the WAVE findings that made accessibility problems visible during evaluation.'}]},
    {kind:'list',heading:'What I took from the assignment',items:[
      'Planning pages and reusable components before styling each screen.',
      'Using Redux actions and shared state for an interaction I could test.',
      'Debugging the connection between form data, an email template and visitor feedback.',
      'Using accessibility and performance checks to find issues I had missed by looking at the page.',
    ]},
    {kind:'prose',heading:'This was an earlier version of my portfolio',text:[
      'The recording and screenshots show the portfolio I made for CS6041. The site you are browsing now is a later redesign. This case study keeps the original assignment and what I learned from it visible.',
    ]},
  ],gallery:undefined,video:undefined,videos:undefined,links:undefined,
});
