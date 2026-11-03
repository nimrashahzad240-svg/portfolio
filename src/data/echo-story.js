const shot=(name,alt,caption)=>({src:`media/${name}`,alt,caption});
export function echoStory(project){
  return {...project,
    kicker:'Mobile application design · Team of four',
    question:'Some memories are worth coming back for.',
    standfirst:'Echo Capsule is a mobile app concept for sending a memory into the future, and designing the moment it comes back. Our team explored time, place and shared presence as unlock conditions. I helped turn that idea into the navigation, interaction rules, visual themes and a working front-end prototype.',
    media:{type:'image',src:'media/echo-shared-overview.jpg',alt:'Echo Capsule’s memory creation interface, from the group prototype.',caption:'A memory has a recipient, a place and a moment to return. The interface makes those choices part of creating it.'},
    meta:[['My contribution','Conceptual model, information architecture, unlock logic, themes and front-end prototyping'],['Team','Nimra Shahzad, Ebi-Yaa Kwaw, Thad and Yushan'],['Tools','Figma · HTML · CSS · JavaScript'],['Module','CS4056 Mobile Application Design · University of Limerick']],
    summary:[['The idea','Create → wait → return → reveal.'],['My focus','Make an emotional concept understandable and interactive.'],['The outcome','Figma journeys and a browser prototype to explore the experience.']],
    galleryTitle:'Different moods. The same ritual.',
    gallery:[shot('ec-warm.jpg','Echo Capsule profile in the warm visual theme.','Warm: taupe, champagne and soft charcoal.'),shot('ec-neon.jpg','The same profile structure in the neon theme.','Neon: a more luminous atmosphere, with the same underlying structure.')],
    team:[{name:'Nimra',src:'media/echo-avatar-nimra.jpg'},{name:'Ebi-Yaa',src:'media/echo-avatar-ebi.jpg'},{name:'Thad',src:'media/echo-avatar-thad.jpg'},{name:'Yushan',src:'media/echo-avatar-yushan.jpg'}],
    links:[{label:'Explore our Figma prototype',url:'https://www.figma.com/proto/7WsGDDZ7HQlyaxYYdWb487/Echo-Capsule-Mobile-Design?node-id=2008-913&scaling=scale-down&page-id=13%3A4588'},{label:'Try our web prototype',url:'https://thadlubo.github.io/echo-capsule/'}],
    body:[
      {kind:'prose',heading:'The memory is only half the experience',text:[
        'A photo can sit in a camera roll for years without being seen again. We wanted to explore a different relationship with memory: deliberately leaving something for a future self, a friend, a partner or a group, then making its return mean something.',
        'A capsule could contain writing, photographs, voice notes or a short video. It might reopen on a date, on an anniversary, after returning to a place, or when people came back together. Opening it was part of the design, rather than an ordinary tap at the end.',
        'Our ambition was fairly modest: make the best app Simon had ever seen. The flipchart was optimistic. The work that followed was mostly about earning the idea by making it clearer.',
      ],images:[shot('echo-shared-brainstorm-1.jpg','The group’s first Echo Capsule brainstorming board.','The starting point: ambitious ideas, questions and a shared direction.')]},
      {kind:'prose',heading:'From saving the past to planning a future encounter',text:[
        'My interest was in slowing down the familiar capture–post–scroll rhythm. I wanted anticipation and reunion to have a place in the interface. Reframing the concept around future emotional encounters gave the project a much clearer centre.',
        'A student could leave a capsule on campus to reopen at graduation. Friends could gather memories from a trip and return to them on its anniversary. A couple could attach a message to a meaningful place. These scenarios helped us ask what a person needed to understand before sealing something away.',
        'The signature interaction became Hold to Unlock Together: people return to the same place and actively hold the unlock control on their own phones. The reveal becomes something they participate in together.',
      ]},
      {kind:'prose',heading:'What I contributed',text:[
        'I helped shape the conceptual model and the shift from an archive towards a designed encounter. My contribution covered the five-part navigation, capsule modes and unlock rules, visual themes, Figma behaviour and front-end development in HTML, CSS and JavaScript.',
        'I prioritised Hold to Unlock Together because it gave the app an interaction identity. A map and a collection of memories were familiar ingredients; coordinated presence made the experience something people would need to understand, anticipate and do together.',
        'Working in a group also meant making decisions together: comparing ideas, keeping the central promise clear and choosing which possibilities belonged in this prototype.',
      ]},
      {kind:'table',heading:'Research gave the idea a job to do',intro:'I reviewed adjacent memory, journaling and delayed-message products, looking at onboarding, media, sharing, retrieval and emotional tone. The gaps relevant to our concept became design questions.',columns:['What I noticed','What it changed'],rows:[
        ['Memories were often stored or resurfaced passively.','Let people choose the conditions of a future return.'],
        ['Sharing usually happened at different times.','Explore a reveal that requires a coordinated action.'],
        ['Location was often secondary information.','Make the return to a place part of the experience.'],
        ['A sentimental message could feel like an administrative task.','Give creation and reveal an atmosphere that matches the content.'],
      ]},
      {kind:'prose',heading:'The important design tool was subtraction',text:[
        'Brainstorming produced more possibilities than the prototype could responsibly hold. We considered future-self messages, memory maps, legacy messages, private information for loved ones and speculative avatar ideas. They raised very different questions about ownership, privacy and technical feasibility.',
        'We narrowed the work around delayed, place-based and shared unlocking. Sensitive legacy and AI-avatar directions were set aside. Deciding what to leave out made the interaction easier to explain and the build more coherent.',
      ],images:[shot('echo-shared-brainstorm-2.jpg','The group’s second planning and brainstorming board.','Working through possibilities before choosing the core experience.')]},
      {kind:'specs',heading:'Five places to go. One experience to understand.',items:[
        ['Moments','What is opening soon, what is waiting, and what has recently returned.'],
        ['Map','Where capsules belong and why a location matters.'],
        ['Create','Choose an intent, add memories, select people and set the conditions.'],
        ['Connections','Manage the relationships behind shared and group capsules.'],
        ['Me','Profile, privacy, notifications and archived material.'],
      ]},
      {kind:'prose',heading:'A locked capsule should not look like a broken app',text:[
        'Early wireframes exposed a problem: if every capsule type, condition and social scenario appeared at once, the idea became hard to follow. I reduced the visible choices and introduced information as it became relevant.',
        'Waiting states became part of the interface’s work. A person needed to know whether the capsule was waiting for a date, for a return to a location or for someone else to arrive and hold. Clear feedback made waiting feel intentional.',
        'Shared capsules also needed understandable roles. Who creates the capsule, who contributes and who receives it cannot be left ambiguous when the content is personal.',
      ],images:[shot('echo-shared-flow.jpg','The shared Echo Capsule navigation and user-flow diagram.','Mapping creation, waiting and reveal as a connected journey.'),shot('ec-unlock.jpg','The Unlock Together screen with both participants ready.','Shared presence becomes an explicit state the interface can explain.')]},
      {kind:'prose',heading:'Making the emotional idea visible',text:[
        'Figma was where wireframes, components and interactions became a visual system. I developed a warm palette of taupe, greige, champagne, blush-neutral and charcoal, alongside a darker neon treatment.',
        'Frosted panels, elongated capsule forms, thin borders and soft blur connected the screens to the idea of something sealed and waiting. The themes changed the atmosphere while keeping the navigation and interaction recognisable.',
        'The capsule identity carries the same thought: something tangible that holds fragments of a real moment, with something less tangible that continues to resonate. The visual language needed to support the memory rather than compete with it.',
      ],images:[shot('echo-shared-prototype.jpg','An overview of the Echo Capsule prototype screens.','The screens as a system: onboarding, creation, place, waiting and return.')]},
      {kind:'prose',heading:'Taking it out of Figma',text:[
        'I also developed a browser prototype in HTML, CSS and JavaScript and contributed to the Figma interactions. Building the experience made the state logic more concrete: what changes after a choice, what remains locked and what the interface needs to say next.',
        'The Figma and browser versions did not always agree. Colours, layouts and small interaction details drifted. That gap became a useful lesson in translating design intent into reusable rules and checking the build against the design.',
      ]},
      {kind:'broke',heading:'What needed another pass',items:[
        '**The concept could explain itself into a corner.** Too many conditions made the distinctive idea difficult to grasp. Progressive disclosure and clearer waiting states did more than another feature would have.',
        '**Scope kept growing.** Group discussions produced useful ideas faster than we could resolve them. A more explicit minimum prototype would have helped us protect the core journey sooner.',
        '**Most evaluation stayed inside the group.** Independent usability sessions were an important next step, especially for creation, waiting and coordinated unlocking.',
        '**The design and implementation drifted.** Shared components and a closer consistency check would have reduced the gap between Figma and the browser.',
      ]},
      {kind:'prose',heading:'Trust belongs inside the flow',text:[
        'Personal media and location made privacy a design concern from the beginning. A person needed control over who could receive a capsule and why permissions were being requested. Destructive actions needed particular care because a lost item could be emotionally irreplaceable.',
        'Nielsen’s heuristics helped me examine user control, error prevention and visual restraint. These were design requirements for the prototype, rather than claims that we had already solved long-term storage, data protection or reliable location verification.',
      ]},
      {kind:'list',heading:'What I learned',items:[
        'Turning an emotional premise into navigation, conditions and readable interface states.',
        'Designing for anticipation: the time between creation and use matters too.',
        'Connecting Figma exploration with front-end behaviour in HTML, CSS and JavaScript.',
        'Using scope decisions to strengthen a concept rather than dilute it.',
        'Keeping individual contribution clear while making a shared project work as a whole.',
      ]},
      {kind:'prose',heading:'Where I would take it next',text:[
        'The next round would test the hardest moments with people outside the team: creating a capsule, understanding why it is still closed and coordinating a shared reveal. I would use those sessions to refine the feedback and fallback paths before adding new conditions.',
        'Longer-term work would need to address storage, ownership and changing permissions over time. A memory may return years later; the trust built into the experience needs to last just as long.',
      ]},
    ],
  };
}
