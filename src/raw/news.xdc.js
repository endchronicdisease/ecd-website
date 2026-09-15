
const CDN = '/assets/photos/news/';
const DATA = [
  {t:'Close the dementia gap',o:'The Washington Post',k:'Op-ed',d:'Sep 2026',u:'https://www.washingtonpost.com/opinions/2026/09/11/border-security-doesnt-have-destroy-big-bend/',i:'washington-post-close-the-dementia-gap.webp',g:['Neurodegenerative disease','Health data','Policy'],b:"In a letter to The Washington Post, Kelly McKenna explains how population-level data drives prevention, and how New York and California are filling the FTD data gap."},
  {t:"U.S. Surgeon General forum on children’s screen time",o:'FOX 5 DC',k:'TV',d:'Sep 2026',u:'https://www.youtube.com/watch?v=oSj4hPaauj8',i:'6aa1dff5d1e7abfd63bdae07-img-6055.webp',x:'brightness(1.2) contrast(.96) saturate(1.04)',g:['Screen use','Physical activity'],b:"Kelly McKenna joined FOX 5 DC to discuss the Surgeon General’s “Live Real Life” symposium on helping kids trade screen time for in-person, real life activities."},
  {t:"‘Yesteryear’ and the tradwife trend hold a message about our health",o:'New York Post',k:'Op-ed',d:'Aug 2026',u:'https://nypost.com/2026/08/14/opinion/yesteryear-and-the-tradwife-trend-hold-a-message-about-our-health/',i:'6a85f86a4134f58928558d21-amish-16x9-2.webp',L:['Ohio','Pennsylvania'],g:['Nutrition','Physical activity'],b:"In the New York Post, Kelly McKenna reflects on the tradwife trend and the Amish practices behind it: outdoor work, local food, and life built around family and community."},
  {t:'State Senator Tony Strickland discusses the Ready to Learn, Ready for Health Act',o:'FOX LA',k:'TV',d:'Aug 2026',u:'https://youtu.be/B7NvIg4TUBA',i:'6a83b25e92b505287304a305-strickland-fox-la.webp',g:['Health education','Policy'],b:"Senator Tony Strickland joined FOX LA after SB 1133, sponsored by End Chronic Disease, passed the legislature to create a preventive health education guide for grades 1–12."},
  {t:"Health education bill sent to Newsom’s desk after unanimous vote",o:'Sacramento Bee',k:'Article',d:'Aug 2026',u:'https://www.sacbee.com/news/politics-government/capitol-alert/article316832545.html',i:'6a7d081ac647520f0a7406fa-sacramento-bee.webp',g:['Health education','Policy'],b:"Kelly McKenna spoke with the Sacramento Bee about SB 1133, the Ready to Learn, Ready for Health Act, a framework for preventive health education in grades 1–12."},
  {t:'Advocates push for FTD diagnosis tracking in California',o:'Yahoo News',k:'Article',d:'Jul 2026',u:'https://www.yahoo.com/news/politics/articles/bruce-willis-wife-pushes-ftd-033213501.html',i:'6a82818e554e93b61122c1eb-vecteezy-ai-generated-medical-x-ray-image-of-the-human-brain-close-up-41041981-2.webp',g:['Neurodegenerative disease','Health data'],b:"Kelly McKenna joined Emma Heming Willis in support of SB 1047, a bipartisan bill to add frontotemporal dementia to California’s Neurodegenerative Disease Registry."},
  {t:"California SB 1047 would add FTD to the state’s disease registry",o:'FOX40',k:'TV',d:'Jul 2026',u:'https://www.youtube.com/watch?v=DH8Dv6ckoM0',i:'6a7628b22d330f9ec6f392b0-fox40-webflow.webp',g:['Neurodegenerative disease','Health data'],b:"Kelly McKenna told FOX40 how adding FTD to California’s disease registry could strengthen research into causes, treatments, and prevention, alongside Emma Heming Willis."},
  {t:"Strengthening California’s neurodegenerative disease registry",o:"Gold Mountain California News",k:'Article',d:'Jul 2026',u:'https://goldmountaincanews.com/news/372111/bruce-williss-wife-joins-lawmakers-and-advocates-to-support-legislation/',i:'6a77ee1938ffe76b49eb3cc9-vecteezy-top-view-of-documents-with-analytics-data-lying-on-10003188.webp',g:['Neurodegenerative disease','Health data'],b:"Kelly McKenna was quoted in support of SB 1047, which would give researchers and policymakers stronger data on frontotemporal degeneration."},
  {t:'Never doubt the importance of a jungle gym',o:'Wall Street Journal',k:'Op-ed',d:'Jul 2026',u:'https://www.wsj.com/opinion/never-doubt-the-importance-of-a-jungle-gym-e7a5e647',i:'6a682bd475b10031e70f7ad4-wsj-lte-edit-zoom.webp',g:['Recess','Physical activity'],b:"Kelly McKenna’s letter to The Wall Street Journal: support for recess crosses party lines and geography, because the need for daily movement does not change."},
  {t:"America’s next 250 years begin on the playground",o:'Fox News',k:'Op-ed',d:'Jul 2026',u:'https://www.foxnews.com/opinion/martha-maccallum-kelly-mckenna-americas-next-250-years-begin-playground',i:'6a67ae033420187bc27b4152-martha-kelly-fox.webp',K:['Radio','Podcast'],g:['Recess','Physical activity','Mental health'],b:"Martha MacCallum and Kelly McKenna explain how a decade of research shows recess matters for children’s physical health, cognitive development, and emotional well-being."},
  {t:'Screen time impacts in and out of the classroom',o:'Good Day Alabama',k:'TV',d:'Jul 2026',u:'https://www.wbrc.com/video/2026/07/20/how-screen-time-impacts-students-out-classroom/',i:'6a5ed7762ade0877ee53f1fd-picture1.webp',g:['Screen use','Mental health'],b:"Kelly McKenna joined Good Day Alabama to discuss the FOCUS Act’s limits on school-day phone use and shared an “ABC framework” families can use for healthy screen time."},
  {t:'Saving kids from screens, bad lunches, and chronic illness',o:'The Untold Story',k:'Podcast',d:'Jun 2026',u:'https://podcasts.apple.com/us/podcast/saving-kids-from-screens-bad-lunches-and-chronic-illness/id1446630562?i=1000776238678',i:'6a510d9b336d1d68fa6c3ba8-untoldstory-martha.webp',g:['Screen use','School food','Recess','Physical activity'],b:"Kelly McKenna joined Martha MacCallum to discuss outdoor time, recess, phone limits, and healthier school lunches as state-level tools for children’s health."},
  {t:'Turning prevention into action through education, policy, and partnerships',o:'Champions for Youth',k:'Podcast',d:'Jun 2026',u:'https://vfhy.org/podcast/turning-prevention-into-action-through-education-policy-and-partnerships-with-kelly-mckenna-of-end-chronic-disease/',i:'6a37f694274bb2917b8ee78a-picture1.webp',g:['Health education','Physical activity'],b:"On the Champions for Youth podcast, Kelly McKenna discussed how school nutrition, recess policy, and health education help young people build lasting healthy habits."},
  {t:'Pediatricians declared recess a health necessity; states should treat it that way',o:'Washington Examiner',k:'Op-ed',d:'Jun 2026',u:'https://www.washingtonexaminer.com/op-eds/4595586/american-academy-of-pediatrics-recess-health-necessity/',i:'6a37f7fe62107ddfa9f79912-picture3.webp',g:['Recess','Physical activity','Mental health'],b:"Kelly McKenna’s Washington Examiner op-ed on the American Academy of Pediatrics declaring recess essential to children’s health, and what it means for states."},
  {t:'How a student health bill got tangled in Kansas politics',o:'The 74',k:'Op-ed',d:'Jun 2026',u:'https://www.the74million.org/article/how-a-student-health-bill-got-tangled-in-kansas-politics/',i:'6a37f740907d3c6af16ace74-picture2.webp',g:['Policy'],b:"Kara Jones writes in The 74 about how bills to protect children’s health stalled in Kansas this session amid political turf battles and institutional influence."},
  {t:'Sharing screen time tips for summer break',o:'WUSA 9',k:'TV',d:'May 2026',u:'https://www.wusa9.com/video/tech/dialing-down-on-excessive-screen-use-among-children/65-15fbebf8-8807-42f5-b5d8-74d21d825a28',i:'6a28772f178b355c59a80dfd-wusa9.webp',g:['Screen use'],b:"Kelly McKenna joined WUSA 9 to discuss the Surgeon General’s statement on limiting kids’ screen time and shared tips for parents over summer break."},
  {t:"Former landscaper shares Parkinson’s battle",o:'Fox & Friends',k:'TV',d:'May 2026',u:'https://www.foxnews.com/video/6396741229112',i:'6a185513d3521b59039b37c3-fox-and-friends-mike.webp',L:['Vermont'],g:['Neurodegenerative disease','Environmental exposures'],b:"Mike Mooney had neurological symptoms for more than a decade before a Parkinson’s diagnosis at 49. End Chronic Disease secured this Fox News interview to share his story."},
  {t:'Vermont praised for becoming the first state to ban paraquat',o:'Rutland Herald',k:'Article',d:'May 2026',u:'https://www.rutlandherald.com/opinion/editorials/editorial-the-best-response/article_e235ee9e-3948-5493-9a5d-47a4b39f58c9.html',i:'6a39a0755651db385b7afa8a-aerial-farmland.webp',g:['Environmental exposures','Neurodegenerative disease'],b:"End Chronic Disease spoke with the Rutland Herald about Vermont’s first-in-the-nation paraquat ban, a historic step against Parkinson’s and toxic exposures."},
  {t:'Kansas governor vetoes daily recess bill',o:'KCTV 5',k:'TV',d:'Apr 2026',u:'https://www.youtube.com/watch?v=2FgquLv2vD8',i:'6a03849d1ddab4292d78ac24-img-2700.webp',g:['Recess','Policy','Physical activity'],b:"Kelly McKenna spoke with KCTV 5 about daily recess after Governor Laura Kelly vetoed a bill guaranteeing it for K–5 students and barring its use as punishment."},
  {t:'The debate over mandating recess',o:'Ballotpedia',k:'Article',d:'Apr 2026',u:'https://ballotpedia.org/Hall_Pass_-_May_27,_2026',i:'6a2874fc72951659b2a0f7d0-vecteezy-children-jumping-on-hopscotch-game-on-school-playground-79029065.webp',g:['Recess','Physical activity'],b:"Ballotpedia featured Kelly McKenna’s testimony for New York’s daily recess bill, citing research linking recess to better mental, physical, and academic outcomes."},
  {t:'How screen time limits protect students against chronic disease',o:'KTLA 5',k:'TV',d:'Mar 2026',u:'https://ktla.com/video/the-link-between-excessive-screen-time-and-chronic-disease/11735799/',i:'6a033384a09895ee9cc54b98-img-1770.webp',g:['Screen use','Mental health'],b:"Kelly McKenna joined KTLA 5 to discuss Los Angeles Unified’s tighter screen time limits for K–12 students and how excessive screen time contributes to chronic disease."},
  {t:"Exploring the links between harmful chemicals and Parkinson’s disease",o:'KABC',k:'Radio',d:'Mar 2026',u:'https://omny.fm/shows/the-kabc-news-blitz/people-are-stealing-your-identity-to-work-for-uber',i:'6a8282459d6c4574bf484d8e-vecteezy-a-man-stands-in-a-green-field-with-trees-as-he-uses-a-83986436.webp',g:['Environmental exposures','Neurodegenerative disease'],b:"Kelly McKenna joined KABC’s Randy Wang to discuss the scientific links between pesticides, common dry cleaning chemicals, and Parkinson’s disease."},
  {t:'Illinois lawmakers push to remove ultra-processed foods from schools',o:'WAND News',k:'TV',d:'Mar 2026',u:'http://web.archive.org/web/20260423062703/https://www.wandtv.com/news/illinois/illinois-lawmakers-push-to-phase-out-ultra-processed-foods-in-school-cafeterias/article_546a06b7-5d8f-4ede-b6d9-1c8ffe0b8168.html',i:'69fd406a43bab32dcbe9daec-img-8687.webp',g:['School food','Policy'],b:"As Illinois lawmakers move to remove ultra-processed foods from school lunches, Kelly McKenna spoke about how this kind of legislation protects against chronic disease risk."},
  {t:'Recess should be mandatory at elementary schools',o:'New York Post',k:'Op-ed',d:'Mar 2026',u:'https://nypost.com/2026/03/22/opinion/make-recess-mandatory-for-all-k-8-students/',i:'69dadc398cd9759404e56422-adobestock-104937055-jpg.webp',g:['Recess','Physical activity'],b:"Kelly McKenna’s New York Post op-ed on the state of recess in New York schools and the promise of a recess bill advancing through the legislature."},
  {t:'Talking recess in Utah with The Rod and Greg Show',o:'The Rod and Greg Show',k:'Radio',d:'Mar 2026',u:'https://www.iheart.com/podcast/420-the-rod-greg-show-20686511/episode/the-rod-and-greg-show-sen-mike-lee-and-speaker-mike-schultz-condemn-uvu-commencement-speaker-330289438',i:'6a87386b959aca797c9cf9c1-recess-kids-16x9.webp',g:['Recess','Physical activity'],b:"Kelly McKenna joined The Rod and Greg Show in Utah to discuss her New York Post piece calling for mandatory recess in every elementary school."},
  {t:'Nevada sees highest increase in obesity of any U.S. state',o:'KTNV',k:'TV',d:'Feb 2026',u:'https://www.youtube.com/watch?v=iUbcpTKGruw',i:'69dada58469118b3811280a2-img-9974.webp',g:['Nutrition','Health data','Obesity'],b:"Nevada had the largest increase in obesity of any state in 2024, per CDC data. End Chronic Disease joined KTNV to discuss the factors behind it and childhood interventions."},
  {t:"Indiana signs bill to ban cellphones from bell to bell",o:"WHAS 11",k:'TV',d:'Feb 2026',u:'https://www.youtube.com/watch?v=ZnlSxlxM07w',i:'69dad7aa3609d99766607ffa-img-0061.webp',g:['Screen use','Policy'],b:"End Chronic Disease spoke with WHAS 11 about Indiana’s bipartisan “bell-to-bell” cellphone law and what it means for chronic disease prevention."},
  {t:"End Chronic Disease joins the Ethan Suplee podcast",o:"LifeLONG with Ethan Suplee",k:'Podcast',d:'Feb 2026',u:'https://www.youtube.com/watch?v=s7Zz8xHRdTA',i:'69b9e08e4a40547038cbdd20-lifelong-podcast-screenshot.webp',g:['Nutrition'],b:"End Chronic Disease joined actor and health advocate Ethan Suplee and singer Joshua Ray Walker on the “LifeLONG with Ethan Suplee” podcast."},
  {t:"Autoimmune disease symptoms, pathology, and prevention",o:'FOX 5 DC',k:'TV',d:'Feb 2026',u:'https://www.fox5dc.com/video/fmc-ux2jde49rqw6bc2i',i:'69a3a70485be85fb320225fd-img-7795.webp',g:['Nutrition','Autoimmune disease'],b:"Kelly McKenna joined FOX 5 DC’s “Good Day DC” to explain autoimmune disease symptoms, pathology, and prevention."},
  {t:"New York’s K–5 recess bill “ought to be mandatory”",o:"CBS 6 Albany",k:'TV',d:'Feb 2026',u:'https://cbs6albany.com/news/local/it-ought-to-be-mandatory-bill-proposes-k-5-recess-every-school-day-exceeding-5-hours',i:'69a3a513c372519655c2bad0-recess.webp',g:['Recess','Policy','Physical activity'],b:"CBS 6 Albany covered New York’s proposed K–5 recess bill, which End Chronic Disease has championed. The idea began as a fourth grade student project."},
  {t:"New York needs to require recess",o:"City & State New York",k:'Op-ed',d:'Feb 2026',u:'https://www.cityandstateny.com/nyn-media/2026/02/opinion-new-york-needs-require-recess/411617/',i:'699cca47e8336113d55d2ba3-860x394.webp',g:['Recess','Policy','Physical activity'],b:"End Chronic Disease’s op-ed in City & State New York makes the case for AB 6939, which would require 30 minutes of daily recess in K–5 schools."},
  {t:'Testimony at the Arizona State House on PE and health education',o:'Arizona State House',k:'Testimony',d:'Feb 2026',u:'https://www.youtube.com/watch?v=eu9f1f9gFm8',i:'699ba8d949317009548c9d63-img-8713.webp',g:['Health education','Policy'],b:"Kelly McKenna testified at the Arizona State House on PE and preventive health education in K–12 schools, helping advance HCR2015 on a 12-0 vote."},
  {t:"Discussing the new federal Dietary Guidelines",o:"Spectrum News",k:'TV',d:'Jan 2026',u:'https://spectrumnews1.com/ca/southern-california/news/2026/01/09/new-dietary-guidelines-healthy-food-',i:'699babed50829d8c7c554288-picture4.webp',g:['Nutrition','Policy'],b:"Kelly McKenna joined Genevieve Glass of Spectrum News to discuss the newly released U.S. Federal Dietary Guidelines."},
  {t:"“Health is not a luxury”: why GLP-1 equity is essential",o:"Washington Examiner",k:'Article',d:'Nov 2025',u:'https://www.washingtonexaminer.com/policy/healthcare/3878788/maha-skeptical-trump-plan-curb-obesity-cheap-ozempic/',i:'690d455efd32d571f893259c-vecteezy-balancing-apples-and-oranges-on-a-scale-comparing-different-70108841.webp',g:['Access to care','Nutrition','Obesity'],b:"End Chronic Disease told the Washington Examiner why expanding access to GLP-1s matters for chronic diseases that disproportionately affect low income communities."},
  {t:"“Lock the clock” efforts gain momentum",o:"Washington Examiner",k:'Article',d:'Nov 2025',u:'https://www.washingtonexaminer.com/policy/healthcare/3871405/lock-the-clock-movement-seasonal-time-change-maha-boost/',i:'690c2c6d82e2b78e05368886-vecteezy-white-retro-alarm-clock-on-the-pink-background-with-copy-15178636.webp',g:['Sleep','Policy'],b:"End Chronic Disease spoke with the Washington Examiner about how twice-yearly clock changes contribute to chronic disease and why efforts to end them are gaining momentum."},
  {t:"Kelly McKenna and Assemblymember Jesse Gabriel discuss AB 1264",o:"KRON",k:'TV',d:'Nov 2025',u:'https://www.youtube.com/watch?v=og0mjQHS-hY',i:'6923994796bf689ce27f1004-image-11-23-25-at-6-31-pm.webp',g:['School food','Policy'],b:"Kelly McKenna and Assemblymember Jesse Gabriel joined Eytan Wallace to discuss California’s AB 1264."},
  {t:"Recapping Governor Newsom’s AB 1264 signing",o:'FOX 11 Los Angeles',k:'TV',d:'Oct 2025',u:'https://www.youtube.com/watch?v=POzydm8L6iw',i:'68f2fd9222e0827f308ad43d-img-2554.webp',g:['School food','Policy'],b:"Kelly McKenna joined FOX’s Marla Tellez to reflect on Governor Newsom signing AB 1264, what it means for chronic disease, and the path ahead."},
  {t:"Sweetgreen co-founder Nic Jammet reflects on the California bill win",o:"RealClearHealth",k:'Op-ed',d:'Oct 2025',u:'https://www.realclearhealth.com/articles/2025/10/08/on_harmful_processed_foods_democrats_and_republicans_agree_1139790.html',i:'68f2f84b3b74d5a9a7aef129-vecteezy-agricultural-field-with-rows-of-leafy-green-vegetable-crops-70870810.webp',g:['School food','Policy'],b:"Board member Nic Jammet reflects on AB 1264’s historic passage and how California policy often sets the tone for the nation."},
  {t:"An update on the California school lunch bill",o:"FOX LA",k:'TV',d:'Sep 2025',u:'https://www.foxla.com/video/1709559',i:'68d165b8e924b1a308cde176-img-2058.webp',g:['School food','Policy'],b:"Kelly McKenna joined FOX LA with an update on AB 1264, one of the most bipartisan bills in California history, then awaiting the Governor’s signature."},
  {t:"Health is wealth: why California must lead on children’s nutrition",o:"Los Angeles Daily News",k:'Op-ed',d:'Aug 2025',u:'https://www.dailynews.com/2025/08/28/health-is-wealth-why-california-must-lead-on-childrens-nutrition/',i:'68b468eb1a2476a7931d1f7d-vecteezy-healthy-snack-boxes-with-fresh-fruits-crackers-nuts-and-60117147-2.webp',g:['School food','Nutrition'],b:"Christina Pascucci writes on why California’s school lunch bill, AB 1264, matters and End Chronic Disease’s work supporting it."},
  {t:"Kelly McKenna on AB 1264 and ultra-processed school food",o:"FOX 11 Los Angeles",k:'TV',d:'Aug 2025',u:'https://www.foxla.com/video/1698519',i:'68b466c5a30c0622e7248f00-img-1488.webp',g:['School food','Policy'],b:"Kelly McKenna joined FOX 11 Los Angeles to discuss AB 1264, California’s bill to remove harmful ultra-processed foods from school lunches."},
  {t:'State policy efforts to combat chronic disease are "just beginning"',o:'Axios',k:'Article',d:'Aug 2025',u:'https://www.axios.com/2025/08/24/rfk-jr-maha-strategy-2026-midterms',i:'68b4637e81d1117304dd18fd-vecteezy-map-of-the-united-states-with-a-yellow-pushpin-location-66631989.webp',g:['Policy'],b:"Axios’ Alex Isenstadt surveys state efforts to curb chronic disease, including End Chronic Disease’s view that “this is just the beginning.”"},
  {t:"STAT News covers our Summer 2025 preventive health poll",o:"STAT News",k:'Article',d:'Aug 2025',u:'https://www.statnews.com/2025/08/25/rfk-maha-1-year-momentum-cracks-forming/',i:'68b464b02a632268648c5794-vecteezy-magnifying-glass-on-graph-paper-financial-development-39371536.webp',g:['Poll','Nutrition'],b:"In a deep dive on the MAHA movement, STAT News cited End Chronic Disease’s Summer 2025 Poll as evidence of broad, bipartisan support for food and nutrition reform."},
  {t:"Poll shows most voters agree on health and food reforms",o:"POLITICO",k:'Article',d:'Aug 2025',u:'https://www.politico.com/newsletters/politico-pulse/2025/08/08/for-some-in-maha-kennedy-falls-short-00499107',i:'68964f02dd0a6981af617b73-vecteezy-photo-of-girl-kids-running-race-sport-at-school-generative-ai-28124147.webp',g:['Poll'],b:"POLITICO exclusively covered End Chronic Disease’s Summer 2025 Preventive Health Poll, which found most Americans agree on the importance of preventive health reform."},
  {t:"Keeping children’s health in focus",o:"Fox News",k:'TV',d:'Aug 2025',u:'https://www.foxnews.com/video/6376560711112',i:'6892af05407ba8bbe811693c-img-0952.webp',g:['Health education'],b:"Christina Pascucci joined FOX’s Trace Gallagher to urge focus on pressing issues over divisive headlines, highlighting the fight for better nutrition for kids."},
  {t:"National Review highlights state wins on nutrition and education",o:"National Review",k:'Article',d:'Aug 2025',u:'https://www.nationalreview.com/news/maha-movement-quietly-stacks-up-state-level-wins/',i:'68929ed4bf49e746889a49a8-vecteezy-a-group-of-diverse-students-eagerly-raise-their-hands-in-a-28142210.webp',g:['Policy','School food'],b:"National Review covers End Chronic Disease’s role in state wins for preventive health, from school lunch to fitness improvements."},
  {t:"Kelly McKenna on diet and autoimmune disease",o:"Bruce Cook Show",k:'Podcast',d:'Aug 2025',u:'https://open.spotify.com/episode/1Hn1y9PyElRXDPcEEVsBk1',i:'6892be46eca362b9c61ef64c-picture15.webp',g:['Nutrition','Autoimmune disease'],b:"Kelly McKenna joins Bruce Cook’s podcast to share how changing her diet helped her overcome autoimmune disease, and how small changes add up to real health gains."},
  {t:'Americans overwhelmingly support preventive health policy concepts',o:'End Chronic Disease',k:'Poll',d:'Aug 2025',u:'https://www.endchronicdisease.org/poll-august2025',i:'690d499f678201a48725b77f-vecteezy-eight-colored-pencils-on-teal-wood-background-69646987.webp',g:['Poll','Environmental exposures','Health data','Health education','Mental health','Neurodegenerative disease','Nutrition','Physical activity','Policy','Recess','School food','Screen use','Sleep'],b:"End Chronic Disease polled voters on preventive health policies in schools, from nutrition education to recess and screen time limits, and found strong support across party lines."},
  {t:"How the ketogenic diet can improve mental health",o:"New York Post",k:'Op-ed',d:'Dec 2024',u:'https://nypost.com/2024/12/28/opinion/how-the-controversial-keto-diet-can-improve-mental-health/',i:'6892b7f0a6c1b1958a63401e-vecteezy-human-brain-tree-with-flowers-self-care-and-mental-health-22907001.webp',g:['Nutrition','Mental health'],b:"Nora Kenney Mittiga’s New York Post op-ed on the growing evidence linking the ketogenic diet to improved mental health."}
];

const LOC = {
  'Arizona State House':'Arizona','FOX 11 Los Angeles':'California','FOX LA':'California','FOX40':'California',
  'Gold Mountain California News':'California','KABC':'California','KRON':'California','KTLA 5':'California',
  'Los Angeles Daily News':'California','Sacramento Bee':'California','Fox 5 DC':'Washington, DC',
  'WUSA 9':'Washington, DC','CBS 6 Albany':'New York','City & State New York':'New York','New York Post':'New York',
  'KCTV 5':'Missouri','WHAS 11':'Indiana','KTNV':'Nevada','WAND News':'Illinois','Good Day Alabama':'Alabama',
  'Rutland Herald':'Vermont','Champions for Youth':'Virginia','Spectrum News':'New York'
};
const nationalDefault = 'National';

class Component extends DCLogic {
  state = {topic:[], type:'All types', outlet:'All outlets', place:'All locations', q:''};

  renderVals() {
    const topics = [];
    DATA.forEach(d => d.g.forEach(g => { if (topics.indexOf(g) < 0) topics.push(g); }));
    topics.sort();

    const {topic, type, outlet, place, q} = this.state;
    const locsOf = (d) => [LOC[d.o] || nationalDefault].concat(d.L || []);
    const kindsOf = (d) => [d.k].concat(d.K || []);
    const VERB = {TV:'Watch on', Testimony:'Watch on', Podcast:'Listen on', Radio:'Listen on', Article:'Read in', 'Op-ed':'Read in', Poll:'Read'};
    const THE = ['New York Post','Sacramento Bee','Wall Street Journal','Washington Examiner'];
    const ctaFor = (d) => d.o === 'End Chronic Disease' ? 'View poll'
      : (VERB[d.k] || 'Read in') + ' ' + (THE.indexOf(d.o) >= 0 ? 'the ' + d.o : d.o);
    const terms = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const hay = (d) => ({
      title: d.t.toLowerCase(),
      tags: d.g.join(' ').toLowerCase(),
      outlet: d.o.toLowerCase(),
      kind: kindsOf(d).join(' ').toLowerCase(),
      place: locsOf(d).join(' ').toLowerCase(),
      body: (d.b || '').toLowerCase()
    });
    const score = (d) => {
      if (!terms.length) return 1;
      const f = hay(d);
      let total = 0;
      for (const t of terms) {
        let s = 0;
        if (f.title.indexOf(t) >= 0) s += 100;
        if (f.tags.indexOf(t) >= 0) s += 40;
        if (f.outlet.indexOf(t) >= 0) s += 30;
        if (f.kind.indexOf(t) >= 0) s += 20;
        if (f.place.indexOf(t) >= 0) s += 15;
        if (f.body.indexOf(t) >= 0) s += 8;
        if (!s) return 0;
        total += s;
      }
      return total;
    };
    const matchTO = (d) => (type === 'All types' || kindsOf(d).indexOf(type) >= 0) && (outlet === 'All outlets' || d.o === outlet) && (place === 'All locations' || locsOf(d).indexOf(place) >= 0);

    const sel = Array.isArray(topic) ? topic : (topic === 'All' ? [] : [topic]);
    const chips = ['All'].concat(topics).map(label => {
      const on = label === 'All' ? sel.length === 0 : sel.indexOf(label) >= 0;
      const count = DATA.filter(d => (label === 'All' || d.g.indexOf(label) >= 0) && matchTO(d) && score(d) > 0).length;
      return {label, count, bg: on ? '#6FA4E2' : '#ffffff', fg: on ? '#ffffff' : '#757575', bd: on ? '#6FA4E2' : '#DBD6CE',
        onClick: () => this.setState({topic: label === 'All' ? [] :
          (sel.indexOf(label) >= 0 ? sel.filter(x => x !== label) : sel.concat([label]))})};
    });

    // Shared editorial finish for card thumbnails: ~5% perceptual lift, no colour cast.
    // Set the editorialFinish prop to false to compare against the raw source images.
    const BASE_FINISH = 'brightness(1.015) contrast(.972) saturate(.985)';
    const finishOn = this.props.editorialFinish !== false;
    const finish = (x) => {
      if (!finishOn) return x || 'none';
      return x ? x + ' ' + BASE_FINISH : BASE_FINISH;
    };

    let filtered = DATA.filter(d => (sel.length === 0 || sel.some(t => d.g.indexOf(t) >= 0)) && matchTO(d) && score(d) > 0);
    if (terms.length) filtered = filtered.slice().sort((a, b) => score(b) - score(a));
    const bits = [];
    if (sel.length) bits.push(sel.map(t => t.toLowerCase()).join(' + '));
    if (type !== 'All types') bits.push(type);
    if (outlet !== 'All outlets') bits.push(outlet);
    if (place !== 'All locations') bits.push(place);
    if (terms.length) bits.unshift('\u201c' + q.trim() + '\u201d');

    return {
      chips,
      q, hasQuery: q.trim().length > 0,
      onQuery: (e) => this.setState({q: e.target.value}),
      clearQuery: () => this.setState({q: ''}),
      emptyMsg: terms.length ? 'No stories match your search. Try another term or clear your filters.' : 'Nothing matches those filters yet',
      items: filtered.map(d => ({title:d.t, outlet:d.o, kind:d.k, date:d.d, url:d.u, img:CDN + d.i, blurb:d.b, cta:ctaFor(d), zoom: d.z ? 'scale(1.05) translateY(1.5%)' : 'none', filter: finish(d.x), fit: d.f ? 'contain' : 'cover'})),
      summary: filtered.length + (filtered.length === 1 ? ' story' : ' stories') + (bits.length ? ' · ' + bits.join(' · ') : ''),
      empty: filtered.length === 0,
      type, typeOptions: ['All types'].concat(DATA.reduce((a,d) => a.concat(kindsOf(d)), []).filter((k,i,a) => a.indexOf(k) === i).sort()),
      onType: (e) => this.setState({type: e.target.value}),
      outlet, outletOptions: ['All outlets'].concat(DATA.map(d => d.o).filter((k,i,a) => a.indexOf(k) === i).sort()),
      onOutlet: (e) => this.setState({outlet: e.target.value}),
      place, placeOptions: ['All locations'].concat(DATA.reduce((a,d) => a.concat(locsOf(d)), []).filter((k,i,a) => a.indexOf(k) === i).sort(function(a,b){ return a === 'National' ? -1 : b === 'National' ? 1 : a.localeCompare(b); })),
      onPlace: (e) => this.setState({place: e.target.value}),
      dirty: sel.length > 0 || type !== 'All types' || outlet !== 'All outlets' || place !== 'All locations' || q.trim().length > 0,
      reset: () => this.setState({topic:[], type:'All types', outlet:'All outlets', place:'All locations', q:''})
    };
  }
}

