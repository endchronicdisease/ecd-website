
const CDN = '/assets/photos/news/';
const DATA = [
  {t:'Close the dementia gap',o:'The Washington Post',k:'Op-ed',d:'Sep 2026',u:'https://www.washingtonpost.com/opinions/2026/09/11/border-security-doesnt-have-destroy-big-bend/',i:'washington-post-close-the-dementia-gap.webp',g:['Neurodegenerative disease','Health data','Policy'],b:"In a letter to the editor in The Washington Post, Kelly McKenna highlights the importance of population-level data in understanding disease causes, risk factors, and potential prevention, as well as how states can help fill critical data gaps. New York has established the nation’s first statewide FTD registry, while California is close to adding FTD to its existing neurodegenerative disease registry."},
  {t:"U.S. Surgeon General forum on children’s screen time",o:'FOX 5 DC',k:'TV',d:'Sep 2026',u:'https://www.youtube.com/watch?v=oSj4hPaauj8',i:'6aa1dff5d1e7abfd63bdae07-img-6055.webp',x:'brightness(1.2) contrast(.96) saturate(1.04)',g:['Screen use','Physical activity'],b:"Kelly McKenna spoke with FOX 5 DC about the Office of the U.S. Surgeon General’s “Live Real Life” symposium last week, which convened researchers, lawmakers, technology company leaders, and other advocates to discuss the importance of working together to help reduce the amount of times kids spends on screens and replace that time with in-person, real life activities."},
  {t:"‘Yesteryear’ and the tradwife trend hold a message about our health",o:'New York Post',k:'Op-ed',d:'Aug 2026',u:'https://nypost.com/2026/08/14/opinion/yesteryear-and-the-tradwife-trend-hold-a-message-about-our-health/',i:'6a85f86a4134f58928558d21-amish-16x9-2.webp',L:['Ohio','Pennsylvania'],g:['Nutrition','Physical activity'],b:'Kelly McKenna on the research behind ways of life in Amish communities (working outdoors, eating locally grown food, and building daily life around community) and their measurably lower rates of chronic disease.'},
  {t:'State Senator Tony Strickland discusses the Ready to Learn, Ready for Health Act',o:'FOX LA',k:'TV',d:'Aug 2026',u:'https://youtu.be/B7NvIg4TUBA',i:'6a83b25e92b505287304a305-strickland-fox-la.webp',g:['Health education','Policy'],b:'California SB 1133, sponsored by our affiliated 501(c)(4), creates a preventive health education guide for grades 1–12. We secured this interview for Senator Strickland.'},
  {t:"Health education bill sent to Newsom’s desk after unanimous vote",o:'Sacramento Bee',k:'Article',d:'Aug 2026',u:'https://www.sacbee.com/news/politics-government/capitol-alert/article316832545.html',i:'6a7d081ac647520f0a7406fa-sacramento-bee.webp',g:['Health education','Policy'],b:'Kelly McKenna spoke with the Bee about SB 1133, the Ready to Learn, Ready for Health Act. Our affiliated 501(c)(4) sponsored the bill, which passed the legislature unanimously.'},
  {t:'Advocates push for FTD diagnosis tracking in California',o:'Yahoo News',k:'Article',d:'Jul 2026',u:'https://www.yahoo.com/news/politics/articles/bruce-willis-wife-pushes-ftd-033213501.html',i:'6a82818e554e93b61122c1eb-vecteezy-ai-generated-medical-x-ray-image-of-the-human-brain-close-up-41041981-2.webp',g:['Neurodegenerative disease','Health data'],b:'Kelly spoke alongside Emma Heming Willis for SB 1047, adding FTD to the state disease registry.'},
  {t:"California SB 1047 would add FTD to the state’s disease registry",o:'FOX40',k:'TV',d:'Jul 2026',u:'https://www.youtube.com/watch?v=DH8Dv6ckoM0',i:'6a7628b22d330f9ec6f392b0-fox40-webflow.webp',g:['Neurodegenerative disease','Health data'],b:'Kelly McKenna spoke alongside Emma Heming Willis about how extending the registry to cover FTD would strengthen understanding of causes, treatments, and prevention. The segment aired on stations across California.'},
  {t:"Strengthening California’s neurodegenerative disease registry",o:"Gold Mountain California News",k:'Article',d:'Jul 2026',u:'https://goldmountaincanews.com/news/372111/bruce-williss-wife-joins-lawmakers-and-advocates-to-support-legislation/',i:'6a77ee1938ffe76b49eb3cc9-vecteezy-top-view-of-documents-with-analytics-data-lying-on-10003188.webp',g:['Neurodegenerative disease','Health data'],b:"Kelly McKenna quoted in support of SB 1047, which would give researchers and clinicians stronger data on frontotemporal degeneration."},
  {t:'Never doubt the importance of a jungle gym',o:'Wall Street Journal',k:'Op-ed',d:'Jul 2026',u:'https://www.wsj.com/opinion/never-doubt-the-importance-of-a-jungle-gym-e7a5e647',i:'6a682bd475b10031e70f7ad4-wsj-lte-edit-zoom.webp',g:['Recess','Physical activity'],b:'Kelly McKenna published an opinion letter in the Wall Street Journal on how support for recess transcends party lines and geography.'},
  {t:"America’s next 250 years begin on the playground",o:'Fox News',k:'Op-ed',d:'Jul 2026',u:'https://www.foxnews.com/opinion/martha-maccallum-kelly-mckenna-americas-next-250-years-begin-playground',i:'6a67ae033420187bc27b4152-martha-kelly-fox.webp',K:['Radio','Podcast'],g:['Recess','Physical activity','Mental health'],b:'Martha MacCallum and Kelly McKenna on why recess is part of how children learn, not a break from it.'},
  {t:'Screen time impacts in and out of the classroom',o:'Good Day Alabama',k:'TV',d:'Jul 2026',u:'https://www.wbrc.com/video/2026/07/20/how-screen-time-impacts-students-out-classroom/',i:'6a5ed7762ade0877ee53f1fd-picture1.webp',g:['Screen use','Mental health'],b:"Alabama’s FOCUS Act limits phone use during the school day, and schools are seeing the difference."},
  {t:'Saving kids from screens, bad lunches, and chronic illness',o:'The Untold Story',k:'Podcast',d:'Jun 2026',u:'https://podcasts.apple.com/us/podcast/saving-kids-from-screens-bad-lunches-and-chronic-illness/id1446630562?i=1000776238678',i:'6a510d9b336d1d68fa6c3ba8-untoldstory-martha.webp',g:['Screen use','School food','Recess','Physical activity'],b:'On outdoor time, recess, and screen limits as levers for health and academic performance.'},
  {t:'Turning prevention into action through education, policy, and partnerships',o:'Champions for Youth',k:'Podcast',d:'Jun 2026',u:'https://vfhy.org/podcast/turning-prevention-into-action-through-education-policy-and-partnerships-with-kelly-mckenna-of-end-chronic-disease/',i:'6a37f694274bb2917b8ee78a-picture1.webp',g:['Health education','Physical activity'],b:'How school nutrition, recess policy, and health education create lasting behavior change.'},
  {t:'Pediatricians declared recess a health necessity; states should treat it that way',o:'Washington Examiner',k:'Op-ed',d:'Jun 2026',u:'https://www.washingtonexaminer.com/op-eds/4595586/american-academy-of-pediatrics-recess-health-necessity/',i:'6a37f7fe62107ddfa9f79912-picture3.webp',g:['Recess','Physical activity','Mental health'],b:"End Chronic Disease’s Kara Jones shared an op-ed in The 74 about how a handful of bill efforts aiming to protect children’s health were stalled in Kansas this session due to political turf battles and institutional influence."},
  {t:'How a student health bill got tangled in Kansas politics',o:'The 74',k:'Op-ed',d:'Jun 2026',u:'https://www.the74million.org/article/how-a-student-health-bill-got-tangled-in-kansas-politics/',i:'6a37f740907d3c6af16ace74-picture2.webp',g:['Policy'],b:"Kelly McKenna joined Washington, D.C.'s WUSA 9 to discuss the Surgeon General’s recent statement on the importance of limiting screen time for kids, and to share tips for parents on balancing screen time during summer break."},
  {t:'Sharing screen time tips for summer break',o:'WUSA 9',k:'TV',d:'May 2026',u:'https://www.wusa9.com/video/tech/dialing-down-on-excessive-screen-use-among-children/65-15fbebf8-8807-42f5-b5d8-74d21d825a28',i:'6a28772f178b355c59a80dfd-wusa9.webp',g:['Screen use'],b:"On the Surgeon General’s statement and how parents can balance screens over the summer."},
  {t:"Former landscaper shares Parkinson’s battle",o:'Fox & Friends',k:'TV',d:'May 2026',u:'https://www.foxnews.com/video/6396741229112',i:'6a185513d3521b59039b37c3-fox-and-friends-mike.webp',L:['Vermont'],g:['Neurodegenerative disease','Environmental exposures'],b:"End Chronic Disease spoke with the Rutland Herald about Vermont’s ban on paraquat and how it’s a historic step forward in the fight against Parkinson’s disease and toxic environmental exposure."},
  {t:'Vermont praised for becoming the first state to ban paraquat',o:'Rutland Herald',k:'Article',d:'May 2026',u:'https://www.rutlandherald.com/opinion/editorials/editorial-the-best-response/article_e235ee9e-3948-5493-9a5d-47a4b39f58c9.html',i:'6a39a0755651db385b7afa8a-aerial-farmland.webp',g:['Environmental exposures','Neurodegenerative disease'],b:"Ballotpedia featured Kelly McKenna’s written testimony in support of New York’s bill to provide daily recess for elementary students, highlighting how research shows it improves children’s mental and physical health and academic performance."},
  {t:'Kansas governor vetoes daily recess bill',o:'KCTV 5',k:'TV',d:'Apr 2026',u:'https://www.youtube.com/watch?v=2FgquLv2vD8',i:'6a03849d1ddab4292d78ac24-img-2700.webp',g:['Recess','Policy','Physical activity'],b:"Kelly McKenna joined KTLA 5’s Sunday Morning team to discuss Los Angeles Unified School District’s decision to heighten screen time limits for K-12 students and how excessive screen time contributes to chronic disease development. ‍"},
  {t:'The debate over mandating recess',o:'Ballotpedia',k:'Article',d:'Apr 2026',u:'https://ballotpedia.org/Hall_Pass_-_May_27,_2026',i:'6a2874fc72951659b2a0f7d0-vecteezy-children-jumping-on-hopscotch-game-on-school-playground-79029065.webp',g:['Recess','Physical activity'],b:"Our written testimony supporting New York’s daily recess bill for elementary students."},
  {t:'How screen time limits protect students against chronic disease',o:'KTLA 5',k:'TV',d:'Mar 2026',u:'https://ktla.com/video/the-link-between-excessive-screen-time-and-chronic-disease/11735799/',i:'6a033384a09895ee9cc54b98-img-1770.webp',g:['Screen use','Mental health'],b:"Illinois lawmakers are pushing to remove ultra-processed foods from school lunches. End Chronic Disease CEO Kelly McKenna spoke about the importance of this kind of legislation in protecting against chronic disease risk."},
  {t:"Exploring the links between harmful chemicals and Parkinson’s disease",o:'KABC',k:'Radio',d:'Mar 2026',u:'https://omny.fm/shows/the-kabc-news-blitz/people-are-stealing-your-identity-to-work-for-uber',i:'6a8282459d6c4574bf484d8e-vecteezy-a-man-stands-in-a-green-field-with-trees-as-he-uses-a-83986436.webp',g:['Environmental exposures','Neurodegenerative disease'],b:"Kelly McKenna joined The Rod and Greg Show in Utah for a conversation about her piece in the New York Post advocating for recess to be mandatory for all elementary school students."},
  {t:'Illinois lawmakers push to remove ultra-processed foods from schools',o:'WAND News',k:'TV',d:'Mar 2026',u:'https://www.wandtv.com/news/illinois/illinois-lawmakers-push-to-phase-out-ultra-processed-foods-in-school-cafeterias/article_546a06b7-5d8f-4ede-b6d9-1c8ffe0b8168.html',i:'69fd406a43bab32dcbe9daec-img-8687.webp',g:['School food','Policy'],b:"Nevada had the highest increase in obesity of any state in 2024, per CDC data. End Chronic Disease joined KTNV to talk about wide-ranging factors that can drive obesity risk and the promise of childhood interventions."},
  {t:'Recess should be mandatory at elementary schools',o:'New York Post',k:'Op-ed',d:'Mar 2026',u:'https://nypost.com/2026/03/22/opinion/make-recess-mandatory-for-all-k-8-students/',i:'69dadc398cd9759404e56422-adobestock-104937055-jpg.webp',g:['Recess','Physical activity'],b:'The landscape of recess in New York schools and the bill advancing through the legislature.'},
  {t:'Talking recess in Utah with The Rod and Greg Show',o:'The Rod and Greg Show',k:'Radio',d:'Mar 2026',u:'https://www.iheart.com/podcast/420-the-rod-greg-show-20686511/episode/the-rod-and-greg-show-sen-mike-lee-and-speaker-mike-schultz-condemn-uvu-commencement-speaker-330289438',i:'6a87386b959aca797c9cf9c1-recess-kids-16x9.webp',g:['Recess','Physical activity'],b:'A Utah radio conversation on making recess mandatory for all elementary students.'},
  {t:'Nevada sees highest increase in obesity of any U.S. state',o:'KTNV',k:'TV',d:'Feb 2026',u:'https://www.youtube.com/watch?v=iUbcpTKGruw',i:'69dada58469118b3811280a2-img-9974.webp',g:['Nutrition','Health data','Obesity'],b:"CBS 6 Albany covered New York’s proposed K-5 recess bill, which End Chronic Disease has been advocating for closely. The idea for the bill initially came out of a fourth grade student project."},
  {t:"Indiana signs bill to ban cellphones from bell to bell",o:"WHAS 11",k:'TV',d:'Feb 2026',u:'https://www.youtube.com/watch?v=ZnlSxlxM07w',i:'69dad7aa3609d99766607ffa-img-0061.webp',g:['Screen use','Policy'],b:"End Chronic Disease published an op-ed in City & State New York advocating for AB 6939, a bill currently advancing through the State Legislature that would require 30 minutes of recess in K-5 New York schools."},
  {t:"End Chronic Disease joins the Ethan Suplee podcast",o:"LifeLONG with Ethan Suplee",k:'Podcast',d:'Feb 2026',u:'https://www.youtube.com/watch?v=s7Zz8xHRdTA',i:'69b9e08e4a40547038cbdd20-lifelong-podcast-screenshot.webp',g:['Nutrition'],b:"End Chronic Disease’s Kelly McKenna delivered testimony about the importance of PE and preventive health education in K-12 schools, driving a 12-0 vote to advance HCR2015 forward"},
  {t:"Autoimmune disease symptoms, pathology, and prevention",o:"Fox 5 DC",k:'TV',d:'Feb 2026',u:'https://www.fox5dc.com/video/fmc-ux2jde49rqw6bc2i',i:'69a3a70485be85fb320225fd-img-7795.webp',g:['Nutrition','Autoimmune disease'],b:"Kelly McKenna joined Good Day DC to discuss how autoimmune disease develops and what can slow it."},
  {t:"New York’s K–5 recess bill “ought to be mandatory”",o:"CBS 6 Albany",k:'TV',d:'Feb 2026',u:'https://cbs6albany.com/news/local/it-ought-to-be-mandatory-bill-proposes-k-5-recess-every-school-day-exceeding-5-hours',i:'69a3a513c372519655c2bad0-recess.webp',g:['Recess','Policy','Physical activity'],b:"The bill we have advocated for closely began as a fourth grade student project."},
  {t:"New York needs to require recess",o:"City & State New York",k:'Op-ed',d:'Feb 2026',u:'https://www.cityandstateny.com/nyn-media/2026/02/opinion-new-york-needs-require-recess/411617/',i:'699cca47e8336113d55d2ba3-860x394.webp',g:['Recess','Policy','Physical activity'],b:"End Chronic Disease spoke with the Washington Examiner about how seasonal clock changing contributes to chronic disease development, and how efforts to do away with the changes once and for all are gaining momentum"},
  {t:'Testimony at the Arizona State House on PE and health education',o:'Arizona State House',k:'Testimony',d:'Feb 2026',u:'https://www.youtube.com/watch?v=eu9f1f9gFm8',i:'699ba8d949317009548c9d63-img-8713.webp',g:['Health education','Policy'],b:"End Chronic Disease’s Kelly McKenna and Assemblymember Jesse Gabriel (Encino) joined Eytan Wallace to discuss California Bill AB 1264."},
  {t:"Discussing the new federal Dietary Guidelines",o:"Spectrum News",k:'TV',d:'Jan 2026',u:'https://spectrumnews1.com/ca/southern-california/news/2026/01/09/new-dietary-guidelines-healthy-food-',i:'699babed50829d8c7c554288-picture4.webp',g:['Nutrition','Policy'],b:"Kelly McKenna joined FOX’s Marla Tellez to reflect on Governor Newsom’s signing of AB 1264, what this means for chronic disease, and the promising path ahead"},
  {t:"“Health is not a luxury”: why GLP-1 equity is essential",o:"Washington Examiner",k:'Article',d:'Nov 2025',u:'https://www.washingtonexaminer.com/policy/healthcare/3878788/maha-skeptical-trump-plan-curb-obesity-cheap-ozempic/',i:'690d455efd32d571f893259c-vecteezy-balancing-apples-and-oranges-on-a-scale-comparing-different-70108841.webp',g:['Access to care','Nutrition','Obesity'],b:"Kelly McKenna joined FOX LA to give an update on AB 1264, one of the most bipartisan bills in the history of California, which is now on Governor Newsom’s desk for signature"},
  {t:"“Lock the clock” efforts gain momentum",o:"Washington Examiner",k:'Article',d:'Nov 2025',u:'https://www.washingtonexaminer.com/policy/healthcare/3871405/lock-the-clock-movement-seasonal-time-change-maha-boost/',i:'690c2c6d82e2b78e05368886-vecteezy-white-retro-alarm-clock-on-the-pink-background-with-copy-15178636.webp',g:['Sleep','Policy'],b:"End Chronic Disease’s Christina Pascucci writes about the importance of California school lunch bill AB 1264 and End Chronic Disease’s work in supporting the bill"},
  {t:"Kelly McKenna and Assemblymember Jesse Gabriel discuss AB 1264",o:"KRON",k:'TV',d:'Nov 2025',u:'https://www.youtube.com/watch?v=og0mjQHS-hY',i:'6923994796bf689ce27f1004-image-11-23-25-at-6-31-pm.webp',g:['School food','Policy'],b:"On California’s law removing ultra-processed foods from school meals."},
  {t:"Recapping Governor Newsom’s AB 1264 signing",o:'FOX 11 Los Angeles',k:'TV',d:'Oct 2025',u:'https://www.youtube.com/watch?v=POzydm8L6iw',i:'68f2fd9222e0827f308ad43d-img-2554.webp',g:['School food','Policy'],b:"Kelly McKenna and Marla Tellez on what the signing means and the path ahead."},
  {t:"Sweetgreen co-founder Nic Jammet reflects on the California bill win",o:"RealClearHealth",k:'Op-ed',d:'Oct 2025',u:'https://www.realclearhealth.com/articles/2025/10/08/on_harmful_processed_foods_democrats_and_republicans_agree_1139790.html',i:'68f2f84b3b74d5a9a7aef129-vecteezy-agricultural-field-with-rows-of-leafy-green-vegetable-crops-70870810.webp',g:['School food','Policy'],b:"KABC Radio host Frank Mottek and Environmental Working Group’s Bernadette Del Chiaro recapped a successful lobbying day in Sacramento as End Chronic Disaese joined advocates and stakeholders to discuss school lunch bill AB 1264"},
  {t:"An update on the California school lunch bill",o:"FOX LA",k:'TV',d:'Sep 2025',u:'https://www.foxla.com/video/1709559',i:'68d165b8e924b1a308cde176-img-2058.webp',g:['School food','Policy'],b:"AB 1264, one of the most bipartisan bills in California history, reaches the governor’s desk."},
  {t:"Health is wealth: why California must lead on children’s nutrition",o:"Los Angeles Daily News",k:'Op-ed',d:'Aug 2025',u:'https://www.dailynews.com/2025/08/28/health-is-wealth-why-california-must-lead-on-childrens-nutrition/',i:'68b468eb1a2476a7931d1f7d-vecteezy-healthy-snack-boxes-with-fresh-fruits-crackers-nuts-and-60117147-2.webp',g:['School food','Nutrition'],b:"Christina Pascucci reminded viewers of FOX’s Trace Gallagher the importance of not being distracted by divisive headlines and keeping in mind the more pressing issues our country faces, highlighting End Chronic Disease’s work in fighting for better nutrition for our nation’s kids"},
  {t:"Kelly McKenna on AB 1264 and ultra-processed school food",o:"FOX 11 Los Angeles",k:'TV',d:'Aug 2025',u:'https://www.foxla.com/video/1698519',i:'68b466c5a30c0622e7248f00-img-1488.webp',g:['School food','Policy'],b:"On the bill that would ban harmful ultra-processed foods from California school lunches."},
  {t:'State policy efforts to combat chronic disease are "just beginning"',o:'Axios',k:'Article',d:'Aug 2025',u:'https://www.axios.com/2025/08/24/rfk-jr-maha-strategy-2026-midterms',i:'68b4637e81d1117304dd18fd-vecteezy-map-of-the-united-states-with-a-yellow-pushpin-location-66631989.webp',g:['Policy'],b:"An article for National Review covers End Chronic Disease’s efforts in helping drive state wins for preventive health, such as school lunch and fitness improvements"},
  {t:"Recapping a lobbying day in Sacramento",o:"KABC",k:'Radio',d:'Aug 2025',u:'https://podcasts.apple.com/us/podcast/mottek-on-money-08-19-25/id1575581516?i=1000722722440',i:'68b461036d6e3cbbb6f345f4-vecteezy-sacramento-city-limit-sign-16159200.webp',g:['School food','Policy'],b:"Frank Mottek and EWG’s Bernadette Del Chiaro on the advocacy day for AB 1264."},
  {t:"STAT News covers our Summer 2025 preventive health poll",o:"STAT News",k:'Article',d:'Aug 2025',u:'https://www.statnews.com/2025/08/25/rfk-maha-1-year-momentum-cracks-forming/',i:'68b464b02a632268648c5794-vecteezy-magnifying-glass-on-graph-paper-financial-development-39371536.webp',g:['Poll','Nutrition'],b:"End Chronic Disaese commissioned a poll to examine voter views on preventive health policy concepts, especially in schools - such as mandating nutrition education, toxin reduction, recess requirements, screen time limits, and more. Respondents substantially supported the concepts polled across demographics and party lines"},
  {t:"Poll shows most voters agree on health and food reforms",o:"POLITICO",k:'Article',d:'Aug 2025',u:'https://www.politico.com/newsletters/politico-pulse/2025/08/08/for-some-in-maha-kennedy-falls-short-00499107',i:'68964f02dd0a6981af617b73-vecteezy-photo-of-girl-kids-running-race-sport-at-school-generative-ai-28124147.webp',g:['Poll'],b:"Exclusive coverage of our Summer 2025 Preventive Health Poll."},
  {t:"Keeping children’s health in focus",o:"Fox News",k:'TV',d:'Aug 2025',u:'https://www.foxnews.com/video/6376560711112',i:'6892af05407ba8bbe811693c-img-0952.webp',g:['Health education'],b:"Christina Pascucci on why children’s health deserves more attention than it gets."},
  {t:"Talking the Presidential Fitness Test",o:"KABC",k:'Radio',d:'Aug 2025',u:'https://open.spotify.com/episode/3ctLRczbXbEVCHZnCuHZnB?t=2199',i:'6890e56dcfa6a980c2249583-fitness-news-ecd-v1.webp',g:['Physical activity','Policy'],b:"Kelly McKenna joined KABC’s Mottek on Money to discuss the executive order re-establishing the Presidential Fitness Test."},
  {t:"National Review highlights state wins on nutrition and education",o:"National Review",k:'Article',d:'Aug 2025',u:'https://www.nationalreview.com/news/maha-movement-quietly-stacks-up-state-level-wins/',i:'68929ed4bf49e746889a49a8-vecteezy-a-group-of-diverse-students-eagerly-raise-their-hands-in-a-28142210.webp',g:['Policy','School food'],b:"Coverage of our work driving state wins for preventive health, from school lunch to fitness."},
  {t:"Kelly McKenna on diet and autoimmune disease",o:"Bruce Cook Show",k:'Podcast',d:'Aug 2025',u:'https://open.spotify.com/episode/1Hn1y9PyElRXDPcEEVsBk1',i:'6892be46eca362b9c61ef64c-picture15.webp',g:['Nutrition','Autoimmune disease'],b:"On overcoming chronic autoimmune disease through diet, and small changes that compound."},
  {t:'Americans overwhelmingly support preventive health policy concepts',o:'End Chronic Disease',k:'Poll',d:'Aug 2025',u:'https://www.endchronicdisease.org/poll-august2025',i:'690d499f678201a48725b77f-vecteezy-eight-colored-pencils-on-teal-wood-background-69646987.webp',g:['Poll','Environmental exposures','Health data','Health education','Mental health','Neurodegenerative disease','Nutrition','Physical activity','Policy','Recess','School food','Screen use','Sleep'],b:'Our poll found broad support across demographics and party lines for prevention in schools.'},
  {t:"How the ketogenic diet can improve mental health",o:"New York Post",k:'Op-ed',d:'Dec 2024',u:'https://nypost.com/2024/12/28/opinion/how-the-controversial-keto-diet-can-improve-mental-health/',i:'6892b7f0a6c1b1958a63401e-vecteezy-human-brain-tree-with-flowers-self-care-and-mental-health-22907001.webp',g:['Nutrition','Mental health'],b:"Nora Kenney Mittiga on the growing body of evidence linking the ketogenic diet to mental health."}
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

