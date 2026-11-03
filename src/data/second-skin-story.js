export function secondSkinStory(p){
  return {...p,
    kicker:'Group project · Emotions, connection and a speculative wearable',
    question:'Could you send someone a hug?',
    standfirst:'Second Skin is a group concept for a dress connected to an exhibition dummy. Hug the dummy, and the person wearing the dress would feel warmth, with lights acknowledging the touch. We wanted to explore how you could be there for someone when a physical hug is not possible, or not welcome.',
    media:{...p.media,alt:'Concept illustration of a visitor embracing the exhibition dummy, with light indicating a connection.',caption:'An imagined interaction, shown through concept illustrations. This was a group proposal, not a working electronic garment.'},
    meta:[['Format','Group project: speculative wearable and exhibition interaction'],['My role','Group concept development'],['Brief','Turn an idea about emotions and people into a possible interaction; explore its benefits and problems'],['Stage','Concept and visual narrative; warmth and remote feedback proposed']],
    stack:['Speculative design','Emotional design','Concept development','Storyboarding','Interaction design','Design ethics'],
    summary:[['The starting point','Wanting to comfort someone does not always mean you can physically reach them.'],['The idea','A hug at a dummy becomes warmth and light in a connected dress.'],['The assignment','Explore the possibility and question what it could mean, without needing to build the full system.']],
    galleryTitle:'The idea, drawn as an interaction.',
    gallery:[{...p.gallery[1],alt:'Concept storyboard showing the connected wearer and dummy, public interaction, touch transmission and light feedback.',caption:'The storyboard explores a connection between the wearer and the exhibition dummy. The sensors, wireless link and feedback are proposed parts of the idea.'}],
    body:[
      {kind:'prose',heading:'An emotion first, a dress second',text:[
        'Our brief was to develop a group idea about emotions and people, then discuss what might be possible and what could go wrong. We began with how difficult it can be to connect with someone, even when you want to help.',
        'Seeing a stranger sad or crying does not automatically make a hug welcome. There are boundaries, misunderstandings and reasons someone may not want to be touched. We wondered if there could be another way to offer that small feeling of support.',
      ]},
      {kind:'prose',heading:'When being there was impossible',text:[
        'We also thought about the isolation of COVID: people separated from loved ones, including people facing their last moments without someone there to hold them.',
        'Images of water-filled gloves placed around patients’ hands stayed with us. Such a simple object was trying to stand in for another person’s touch. That feeling, wanting someone to know they are not completely alone, became the starting point for Second Skin.',
      ]},
      {kind:'steps',heading:'How we imagined it working',items:[
        '**A person wears the dress.** It is connected to a separate dummy in an exhibition space.',
        '**A visitor hugs or touches the dummy.** The dummy offers a place to express support without directly touching the wearer.',
        '**The dress responds with warmth.** The proposed connection carries that gesture to the person wearing it.',
        '**Light acknowledges the touch.** The feedback makes the connection noticeable: someone has reached out.',
      ],after:['The important part was the gesture behind the response. You would not have to physically hug someone to offer a sense of being there.']},
      {kind:'prose',heading:'What the assignment asked us to make',text:[
        'This was a speculative group project. We developed the possibility and used a visual story to explain it; we were not expected to produce a finished, functioning dress.',
        'Pressure sensing at the dummy, a link to the garment, warmth and lights describe the system we imagined. We did not demonstrate a working remote-heating system or establish that it would make someone feel less alone.',
      ]},
      {kind:'table',heading:'The questions that make the idea interesting',columns:['Question','What it asks of the design'],rows:[
        ['Who chooses to receive a hug?','The wearer should choose when the connection is active and be able to pause or stop it.'],
        ['Is indirect touch still personal?','A dummy changes where the touch happens; it does not remove the need for consent.'],
        ['What does the light reveal?','A public signal could invite care, but it could also expose a private feeling or draw unwanted attention.'],
        ['Would the warmth feel comforting?','Intensity, duration and comfort would need careful prototyping with the person wearing it.'],
        ['Can a system understand an emotion?','A signal or sensor reading should not be treated as proof of how someone feels.'],
        ['What if the connection fails?','Both people need an honest indication of whether the gesture has been received.'],
      ]},
      {kind:'prose',heading:'Why I still think about it',text:[
        'I think the idea has room to grow, particularly around separation from family, long-distance relationships and exhibitions that invite people to support one another.',
        'I would start with a small, opt-in prototype: one linked object, one simple response, and a person who can control it. I would want to learn whether the gesture feels meaningful, comfortable or awkward before making the system more elaborate.',
        'The part I want to keep is simple: making care something you can notice, even when the person offering it cannot be beside you.',
      ]},
    ],
  };
}
