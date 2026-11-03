export const hackathonAward = {
  title:'Special Award: Top Designer',
  note:'For User Experience & Interface Design. I joined the hackathon as the designer, then helped with front-end development alongside six developers. A lot of decisions, very little time, and a team I loved building with.',
  image:'media/hackathon-top-designer.jpeg',
  alt:'Nimra at the hackathon award presentation, standing beside two men beneath the Top Designer award announcement.',
  link:'https://www.linkedin.com/posts/nimra-shahzad-a35b24169_hackathon-uxdesign-frontenddevelopment-activity-7434267874078167040-jrNQ',
};

export function vanGoghStory(p){
  return {...p,
    media:{...p.media,caption:'My individual Blender animation, with its original soundtrack. The still above is from this film.'},
    question:'A ghost, a piano, and a lot of candlelight.',
    standfirst:'My first semester learning digital modelling became a small tribute to Van Gogh. A glass ghost plays the piano in a candlelit amphitheatre, and yellow flowers come back to life around him. I made this individual project in Blender, learning as I went.',
    body:p.body.map(b=>{
      if(b.heading==='Where it came from') return {...b,text:[
        'I love Van Gogh’s use of colour. When I heard Van Gogh by Virginio Aiello, I began imagining a scene around the music: a pianist, an old amphitheatre, candles and flowers growing through the ground.',
        'Blue and yellow became the thread running through it. The flowers bring life back into the scene, while the glass figure lets the light become part of the ghost.',
      ]};
      if(b.heading==='The cloak disaster that saved the project') return {
        kind:'prose',heading:'The ghost was supposed to wear a cloak',
        text:[
          'These were my attempts to make one. I wanted fabric around the character, but the cloth kept falling off. Other tests pulled it into spikes instead of the shape I wanted. I kept adjusting it, and the deadline kept getting closer.',
          'With the time I had left, I tried another way to make the figure feel like a ghost: glass. Its blue reflections fitted the scene and the Van Gogh colours beautifully. That became the final material.',
          'I did not solve the cloth simulation. I found a different solution that worked for this film, and learned when to stop fighting one approach.',
        ],
        images:[
          {src:'media/vangogh-cloak-start.jpeg',alt:'Blender viewport showing the intended cloak around the character in a T-pose.',caption:'The starting idea: a cloth cloak around the character.'},
          {src:'media/vangogh-cloak-failed.jpeg',alt:'Blender viewport showing the cloak pulled into sharp, stretched geometry around the character.',caption:'One of the failed tests. The cloth would fall away or distort instead of staying on the figure.'},
        ],
      };
      return b;
    }),
  };
}

export function pocketGalleryStory(p){
  const shot=(name,alt,caption)=>({src:`media/gallery-${name}.jpeg`,alt,caption});
  return {...p,galleryTitle:'Inside the gallery, on my phone.',gallery:[
    shot('saudade-info','Saudade painting with its translucent information panel open on an iPhone.','Saudade, with the painting’s story opened over the artwork.'),
    shot('dream','The Dream car painting displayed in the virtual gallery on an iPhone.','The Dream on the gallery wall.'),
    shot('dream-info','The Dream painting with the information panel open.','A tap brings up the title and the story behind the painting.'),
    shot('batman','Batman painting on the wall of the virtual gallery.','Another of my paintings, lit within the room.'),
    shot('batman-info','Batman painting with its description and yellow close button visible.','The same work with its information panel open.'),
    shot('messi-info','Messi and trophy painting with its information panel open.','Each painting has its own title and description.'),
    shot('painting-canvas','Create your own masterpiece canvas showing coloured strokes and eight colour buttons.','The visitor gets a turn: pick a colour and paint on the canvas.'),
  ]};
}

export const jblStory = {
  id:'jbl-advert',lens:'designer',title:'JBL Advert',year:'Student production',
  kicker:'Group film · Three eras · A1',
  question:'The outfits change. The music stays.',
  standfirst:'Our group made a JBL headphone advert about enjoying music across different eras. Three outfits carry the story through time; the headphones and the feeling stay with the same girl. I worked on the project and also modelled in the film. We received an A1.',
  media:{type:'video',src:'media/jbl-advert-sound.mp4',poster:'media/jbl-advert.jpg',alt:'Nimra modelling in the group’s JBL headphone advert.',caption:'The finished student advert, with its original soundtrack. Group project, graded A1.'},
  stack:['On-camera modelling','Performance','Collaboration','Visual storytelling'],
  meta:[['My role','Group project contributor; on-camera model'],['Result','A1'],['Idea','Music and headphones across three eras'],['Format','Student advertisement featuring JBL']],
  body:[
    {kind:'prose',heading:'One girl, three eras',text:[
      'We wanted to show how music stays with you even as everything around it changes. The film moves through three different looks, using outfits and the shift from black and white to colour to make those changes visible.',
      'In every version, the girl is happy and lost in the music. The headphones connect the scenes, so the idea is easy to follow without needing an explanation on screen.',
    ]},
    {kind:'prose',heading:'My part, in front of the camera too',text:[
      'I was part of the group making the advert and played the girl in all three looks. That meant carrying the same enjoyment through different outfits and settings so the scenes still felt connected.',
      'Working on both sides of the camera made me think about how an idea reads through a person: expression, movement, and what the audience can understand from a short shot.',
    ]},
  ],
  galleryTitle:'Three looks. One thread.',
  eras:[
    {
      n:1,
      year:'1958',
      word:'SILVER GELATIN',
      tag:'INTERIOR · NIGHT · MONOCHROME',
      src:'media/jbl-first-look.jpg',
      alt:'Nimra in the first black-and-white look, wearing headphones and long gloves at a dining table.',
      caption:'The opening look: shot indoors, graded to black and white, long gloves and the headphones already on.',
      lead:'We start with everything drained out of the frame except the light.',
      text:[
        'The first chapter had to feel like something you would find in an archive, so we shot it indoors at night against a window and took the colour out completely. Long gloves, hair down, the room barely lit, the only thing with any shine in it is the headphone cup.',
        'Taking the colour away was the whole point. If the audience cannot tell what decade it is from the palette, they read it from the styling, and the headphones become the one object that does not belong to the period.',
      ],
      spec:[['Palette','Warm grey, near-black, one highlight'],['Styling','Gloves, evening hair, interior'],['Grade','Full desaturation, contrast lifted'],['Reads as','Late fifties']],
    },
    {
      n:2,
      year:'1974',
      word:'SUN THROUGH A SKYLIGHT',
      tag:'STAIRWELL · DAY · FLORAL',
      src:'media/jbl-second-look.jpg',
      alt:'Nimra in a floral dress on a grand staircase under a skylight, moving to the music.',
      caption:'Colour arrives: a floral dress on the staircase, daylight falling from the skylight above.',
      lead:'Then colour comes back, and it comes back warm.',
      text:[
        'The second chapter is where the film turns. We moved to the staircase so the daylight from the skylight does the lighting for us, and put her in a long floral print, the one garment that dates a frame faster than anything else.',
        'She is mid-movement here rather than posed. That was deliberate: the first look is composed and still, this one is loose, because the era changed and so did how people were allowed to behave on camera.',
      ],
      spec:[['Palette','Cream, soft brown, burnt orange'],['Styling','Floral maxi, loose hair'],['Grade','Warm, slightly faded'],['Reads as','Mid seventies']],
    },
    {
      n:3,
      year:'NOW',
      word:'PRESENT DAY',
      tag:'EXTERIOR · DAY · FULL COLOUR',
      src:'media/jbl-third-look.jpg',
      alt:'Nimra outside in a brown suit and sunglasses, wearing the headphones, walking in bright daylight.',
      caption:'The last look: outside, full colour, brown tailoring and sunglasses, walking straight through the shot.',
      lead:'And then we step outside, into now.',
      text:[
        'The final chapter goes outdoors in hard daylight. Brick, slate, a blue sky, tailoring and sunglasses, nothing softened, nothing graded away. After two interiors it opens the film right up.',
        'It is also the only look where she is walking towards somewhere rather than sitting with the music. The idea lands there: the product has arrived in the present, and it is portable now in a way it could not have been in either of the other two frames.',
      ],
      spec:[['Palette','Brick orange, slate, sky blue, black'],['Styling','Brown tailoring, sunglasses'],['Grade','Clean, saturated, no filter'],['Reads as','Today']],
    },
  ],
  links:[{label:'Watch the advert on YouTube',url:'https://www.youtube.com/watch?v=LjICgww-RY4'}],
};
