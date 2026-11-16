/* PROJECT CONTENT
   Edit the titles and descriptions in nodes below. Keep the 22 entries in order;
   the optional number is its case flag, and the optional final string controls voting.
   Edit defaults for seven cases and the initial timer below. See README.md. */
window.COURTROOM_CONFIG = {
  // November 12 lesson script: 21 live beats plus the spreadsheet scene, including six votes.
  nodes: [
    ['John Oliver clip','Before we do anything else, watch this.'],
    ["Buc-ee’s Leadership Briefing: Pending Matters","You are Buc-ee’s leadership: decide which fights to pick. Bemidji State, a Minnesota public university, uses Beaver Bucks for campus dining. Buc-ee’s has filed a Beaver Bucks trademark application."],
    ['College Savings Bank v. Florida Prepaid','Team 7 presents. Consider sovereign immunity and the Lanham Act.',1],
    ['VOTE 1 · Sue Bemidji State: YES or NO?','One vote per team. Does Buc-ee’s proceed against Beaver Bucks?',0,'beaver'],
    ['Buc-ee’s v. Oliver · HYPOTHETICAL',"Plaintiff: Buc-ee’s, Ltd., headquartered in Lake Jackson, Texas. Defendants: John Oliver (New York) and HBO (Delaware corporation, New York headquarters). Claims: Lanham Act infringement, dilution and unfair competition. Relief: stop Buc-Off merchandise, profits, damages and fees totaling over $1 million. Sales: online nationwide, including Texas. The lawsuit does not exist; Buc-ee’s has said it has no interest in suing Oliver."],
    ['VOTE 2 · STATE or FEDERAL court?','Where should Buc-ee’s file?',0,'jurisdiction'],
    ['DISCOVERY · Interpace v. Lapp','Team 1 presents the factors used to assess likelihood of confusion.',2],
    ['Buc-ee’s, Ltd. v. Shepherd Retail, Inc.','Team 2 presents the Choke Canyon case.',3],
    ['Buc-ee’s enforcement record','Reveal each row as the enforcement pattern is discussed. Settlements, a letter and pending matters are not precedent.'],
    ['TRIAL · Opening Statements',"Buc-ee’s claims infringement and consumer confusion. Oliver argues the merchandise is parody and protected commentary. Listen to both scripted openings."],
    ['VOTE 3 · Which motion do you file?','Choose a motion to dismiss, for mistrial, or for directed verdict. There is no right answer.',0,'motion'],
    ["TRIAL COURT RULES FOR BUC-EE’S",'The jury finds for Buc-ee’s.'],
    ['VOTE 4 · APPEAL or WALK AWAY?','Will John Oliver appeal the trial ruling?',0,'appeal'],
    ['FIFTH CIRCUIT · Two Pesos v. Taco Cabana','Two Pesos team: you’re up. Rogers team: you’re on deck.',4],
    ['Rogers v. Grimaldi','Rogers team: you’re up.',5],
    ['VOTE 5 · TWO PESOS or ROGERS?','Which precedent will the Fifth Circuit apply? This choice decides the ruling.',0,'fifth'],
    ['Petition to the Supreme Court','The losing party petitions; the Supreme Court grants certiorari.'],
    ['SUPREME COURT · Mattel v. MCA Records','Mattel team: you’re up. Jack Daniel’s team: you’re on deck.',6],
    ["Jack Daniel’s v. VIP Products","Jack Daniel’s team: you’re up.",7],
    ['VOTE 6 · AFFIRM or REVERSE?','Did the Fifth Circuit apply the right precedent? This choice decides the final ruling.',0,'supreme'],
    ['THE REAL ANSWER: Still Open','After Jack Daniel’s, courts and scholars remain divided about parody on merchandise. Jack Daniel’s already bound federal courts; a different panel or jury could reach another result.'],
    ['Live spreadsheet', 'View the live spreadsheet below.', 0, 'spreadsheet']
  ],
  beatTimes: ['2 min','1–2 min','4–5 min + wrap-up','2 min','2–3 min','2 min','4–5 min + wrap-up','4–5 min + wrap-up','1 min','2–3 min','2 min','1 min','2 min','4–5 min + wrap-up','4–5 min + wrap-up','2 min','1 min','4–5 min + wrap-up','4–5 min + wrap-up','2 min','3–5 min','As needed'],
  trackerIndices: [3,5,10,11,15,16,19],
  voteLabels: {beaver:['YES','NO'],jurisdiction:['State court','Federal court'],motion:['Motion to dismiss','Motion for mistrial','Motion for directed verdict'],appeal:['APPEAL','WALK AWAY'],fifth:["TWO PESOS (Buc-ee’s)",'ROGERS (Oliver)'],supreme:['AFFIRM','REVERSE']},
  cases: [
  {
    "title": "College Savings Bank v. Florida Prepaid",
    "summary": "Team 7: sovereign immunity and whether a private party can sue a state under the Lanham Act.",
    "time": "",
    "background": "",
    "photos": [
      "",
      ""
    ],
    "a": "barred",
    "b": "sovereign immunity",
    "votes": [
      0,
      0
    ]
  },
  {
    "title": "Interpace, Inc. v. Lapp, Inc. (3rd Cir., 1983)",
    "summary": "insert student presentation here for team #1",
    "time": "",
    "background": "",
    "photos": [
      "",
      ""
    ],
    "a": "For",
    "b": "Against",
    "votes": [
      0,
      0
    ]
  },
  {
    "title": "Buc-ee’s, Ltd. v. Shepherd Retail, Inc. (Choke Canyon)",
    "summary": "insert student presentation here for team #2",
    "time": "",
    "background": "",
    "photos": [
      "assets/ChokeCanyon.jpg",
      "assets/Buc-ees.jpg"
    ],
    "a": "For",
    "b": "Against",
    "votes": [
      0,
      0
    ]
  },
  {
    "title": "Two Pesos, Inc. v. Taco Cabana, Inc. (5th Cir./SCOTUS, 1992)",
    "summary": "Add the case background, parties, and key question here for team #3",
    "time": "",
    "background": "",
    "photos": [
      "assets/Tacocabana.jpg",
      "assets/Twopesos.jpg"
    ],
    "a": "For",
    "b": "Against",
    "votes": [
      0,
      0
    ]
  },
  {
    "title": "Rogers v. Grimaldi (2nd Cir., 1989)",
    "summary": "Add the case background, parties, and key question here for team #4",
    "time": "",
    "background": "",
    "photos": [
      "assets/Ginger_Rogers_by_John_Miehle.jpg",
      ""
    ],
    "a": "For",
    "b": "Against",
    "votes": [
      0,
      0
    ]
  },
  {
    "title": "Mattel, Inc. v. MCA Records, Inc. (9th Cir.)",
    "summary": "Add the case background, parties, and key question here for team #5",
    "time": "",
    "background": "",
    "photos": [
      "assets/BarbieLogo.png",
      "assets/BarbiegirlAquaSingle.jpg"
    ],
    "a": "For",
    "b": "Against",
    "votes": [
      0,
      0
    ]
  },
  {
    "title": "Jack Daniel’s Properties, Inc. v. VIP Products LLC (SCOTUS, 2023)",
    "summary": "Add the case background, parties, and key question here for team #6.",
    "time": "",
    "background": "",
    "photos": [
      "assets/jack-daniels-bad-spaniels.jpg",
      ""
    ],
    "a": "For",
    "b": "Against",
    "votes": [
      0,
      0
    ]
  }
],
  // Optional zero-based timeline-node images (independent of the seven cases).
  // Paths can contain spaces; keep image files in the assets folder.
  nodeMedia: {
    1: { photos: ["assets/WTBuc-ky.png"] },
    4: { photos: ["assets/Buc-ees.jpg", "assets/Buc-off.png"] },
    9: { photos: ["assets/Buc-ees.jpg", "assets/Buc-off.png"] },
    11: { photos: ["assets/Buc-ees.jpg"] },
    20: { photos: ["assets/FinalSCOTUSVote.png"]}

  },
  timerMinutes: 5
};
