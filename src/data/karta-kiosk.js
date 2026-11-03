const image=(name,alt,caption)=>({src:`media/karta-${name}.jpeg`,alt,caption});
export const kartaKiosk={
  id:'karta-kiosk',lens:'designer',title:'Karta Kiosk',year:'2026',
  kicker:'CS6431 · From group cardboard prototype to my Blender redesign',
  question:'How do you carry a week’s shopping with no car?',
  standfirst:'We started with a problem all four of us knew: getting groceries and heavy bags across campus. Our group built a cardboard cart-rental kiosk and tested the journey. After professor feedback, I developed my own version in Blender, using what people had struggled with to change the design.',
  media:{type:'video',src:'media/karta-walkthrough.mp4',poster:'media/karta-walkthrough.jpg',alt:'Nimra’s individual Blender walkthrough showing the revised Karta kiosk, visible cart storage and rent-and-return journey.',caption:'My individual redesign after the group assignment. I assembled prebuilt BlenderKit elements to demonstrate the service. This supplied walkthrough has no audio track.'},
  meta:[['My work','User research, interface design and group prototyping; individual redesign and Blender walkthrough'],['Phase one team','Baoxian Zhang, Nimra Shahzad, Yushan Zhang, Ebi-Yaa Kwaw'],['Phase two','Individual work by Nimra Shahzad after professor feedback'],['Module','CS6431 · University of Limerick'],['Status','Tested cardboard prototype; proposed redesign visualised in Blender']],
  stack:['Think-aloud testing','Co-discovery','Cardboard prototyping','Figma','Hand sketches','Blender 4.5','BlenderKit','Service design'],
  summary:[['Together','A cardboard kiosk, screen flow and small cart prototype.'],['With users','Two rounds of interviews: four in the first, five in the second; think-aloud tasks and a paired walkthrough.'],['On my own','A revised physical layout and clearer rental journey, shown in the Blender film above.']],
  body:[
    {kind:'prose',heading:'We had all carried those bags',text:[
      'As international students, we had all struggled with move-in day and the walk from the bus stop with shopping in both hands. We explored seven logistics problems, from deliveries to temporary storage, then focused on groceries and moving heavy things across campus.',
      'Our idea was a shared cart system at the student village: identify yourself, leave a deposit, take a cart and get the deposit back when you return it. The detachable handle could be pulled by hand or attached to a bicycle.',
    ]},
    {kind:'prose',heading:'Phase one: cardboard first',text:[
      'We built a reduced-scale kiosk with six compartments, transparent doors and printed Figma screens. A facilitator swapped the screens as people moved through the flow. That let us test the service before building working payments or locks.',
      'We added explicit Rent and Return buttons, kept a Return button to explain where the rear return point was, made payment details easier to scan and kept the student ID visible. The original screen height was fixed; my later version revisits that decision.',
    ],images:[
      image('cardboard','The original group cardboard kiosk with transparent doors and paper labels.','Our group prototype: inexpensive materials, enough detail to try the rental journey.'),
      image('group-screens','Printed interface screens used with the cardboard Karta kiosk.','The screen flow we could swap by hand while someone tried the tasks.'),
    ]},
    {kind:'prose',heading:'What we asked people to do',text:[
      'We held two rounds of interviews: four in the first and five in the second, with bachelor’s and master’s students living on and off campus. They tried finding an available cart, accessing the app, logging in, renting and returning to the right place.',
      'We asked people to think aloud and noted hesitation, mistakes, task completion, time and comments. We also invited a pair to explore together. Hearing them question each other made unclear steps easier to spot.',
      'The cardboard did not need to work electronically to reveal a problem. People could follow a screen and still be unsure which cart to take or whether the system had finished.',
    ]},
    {kind:'iterations',individual:true,heading:'Phase two: what I fixed in my own version',intro:'After our professor’s feedback, we were asked to improve the project individually. These were the changes I developed from the testing findings.',items:[
      {title:'Can I see a cart before I sign in?',issue:'The vertical compartments made availability hard to judge. Someone coming with friends could not tell whether enough carts were there.',change:'I moved the carts into horizontal rows in a glass-walled room beside the kiosk.',reason:'People can see the available carts before starting a rental, and the layout can hold more than the original six.',image:image('visible-carts','Blender view of carts arranged visibly beside the kiosk inside the glass-walled space.','My revised layout puts availability in view.')},
      {title:'Where do I get the app?',issue:'Our test phone already had the app open. Real first-time users would not have that help.',change:'I added a prominent QR code and a short instruction explaining how to download the app.',reason:'The entry point needs to be there when someone reaches the kiosk, rather than relying on an explanation from us.',image:image('app-qr','Revised kiosk with a QR code and app download instruction.','An explicit starting point for the companion app.')},
      {title:'Why does it not recognise my student card?',issue:'Some people expected a card-based login. They also needed a record if a payment or refund went wrong.',change:'I added labelled tap-or-insert card options and a receipt collection point.',reason:'The action matches a familiar campus routine, with a transaction record to keep.',image:image('card-login','Blender kiosk view showing the labelled card login and receipt collection areas.','Card login and a place to collect a receipt.')},
      {title:'Did it work, and which cart is mine?',issue:'The original red and green LEDs did not clearly connect the screen action to the cart.',change:'I coordinated the proposed payment-success message with a beep and a green light on the outermost available cart.',reason:'The screen, sound and light should point to the same next action.',image:image('cart-cues','Blender cart close-up illustrating the light and card-tap interaction.','The cart gives feedback where the next action happens.')},
      {title:'How do I know I have returned it?',issue:'Return confirmation was unclear, and comments about the low deposit raised questions about timely returns.',change:'I proposed separate rent and return rows, a card-tap lock with light and sound feedback, clear return terms and an “I HAVE RETURNED” screen.',reason:'The person needs to know where to leave the cart and whether it has been registered. The time limits and fees in the film are concept proposals, not university policy.',image:image('return-screen','Revised return screen with an I HAVE RETURNED button.','A visible confirmation step instead of leaving someone guessing.')},
    ]},
    {kind:'prose',heading:'The fixed screen needed another look',text:[
      'The first proposal put an 11-inch screen 140–150 cm above the ground on a 170 cm kiosk. In my redesign, I added a control to adjust the screen position, with seated users and different reaches in mind.',
      'That is an accessibility intention shown in the model. I would still need to test the mechanism and reach with the people using it.',
    ],images:[image('adjustable-screen','Blender close-up of the proposed screen adjustment control.','A proposed adjustable screen, replacing one fixed position.')]},
    {kind:'prose',heading:'What the film demonstrates',text:[
      'The walkthrough is my individual work. I built the scene in Blender 4.5 using mostly free, prebuilt BlenderKit models, including the kiosk and carts. My contribution here is the revised service, the layout, the interaction details and the way the film explains them.',
      'The electronic locks, payments, sensors and coordinated feedback are proposed behaviour. I have not retested this redesigned version, so the film shows how I intended to address the findings rather than a proven improvement in task performance.',
    ]},
    {kind:'prose',heading:'Still unfinished: the companion app',text:[
      'We sketched account access, wallet top-ups and password recovery, but ran out of time to finish the app prototype. Adding a QR code makes it easier to find; it does not finish the app behind it.',
      'That would be an important next step, alongside testing the revised return journey and adjustable screen. This project taught me to follow the whole task, from spotting a cart to knowing it is safely returned.',
    ],images:[image('app-sketches','Hand-drawn companion app screens from the group prototype.','The companion app remained at the sketch stage.')]},
  ],
};
