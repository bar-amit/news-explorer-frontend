const cards = [
  {
    image:
      "https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    link: "https://www.treehugger.com/special-sit-spot-nature-5085811",
    text: 'Ever since I read Richard Louv\'s influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...',
    source: "Treehugger",
    date: "November 4, 2020",
  },
  {
    image:
      "https://images.unsplash.com/photo-1455218873509-8097305ee378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Nature makes you better",
    link: "https://www.nationalgeographic.com/travel/article/partner-content-nature-makes-you-better",
    text: "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.",
    source: "National geographic",
    date: "February 19, 2019",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500157287460-ea57183c1fb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGV0b24lMjBjcmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Grand Teton Renews Historic Crest Trail",
    link: "https://www.nationalparkstraveler.org/2020/10/grand-teton-renews-historic-crest-trail",
    text: "“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be enabled to visit that most fascinating region…In traversing this loop, one completely encircles the Three Tetons and adjacent high peaks, viewing them from all sides.",
    source: "National parks traveler",
    date: "October 19, 2020",
  },
  {
    image:
      "https://images.unsplash.com/photo-1593007791459-4b05e1158229?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhbmRlbWljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "The COVID generation: how is the pandemic affecting kids’ brains?",
    link: "https://www.nature.com/articles/d41586-022-00027-4",
    text: "Like many paediatricians, Dani Dumitriu braced herself for the impact of the SARS-CoV-2 coronavirus when it first surged in her wards. She was relieved when most newborn babies at her hospital who had been exposed to COVID-19 seemed to do just fine. Knowledge of the effects of Zika and other viruses that can cause birth defects meant that doctors were looking out for problems.",
    source: "Nature",
    date: "January 12, 2022",
  },
  {
    image:
      "https://images.unsplash.com/photo-1561328399-f94d2ce78679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoZW1pc3RyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title:
      "Chemically induced protein cage assembly with programmable opening and cargo release",
    link: "https://www.science.org/doi/10.1126/sciadv.abj9424",
    text: "Engineered protein cages are promising tools that can be customized for applications in medicine and nanotechnology. A major challenge is developing a straightforward strategy for endowing cages with bespoke, inducible disassembly. Such cages would allow release of encapsulated cargoes at desired timing and location.",
    source: "Science",
    date: "January 5, 2022",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523585559758-0a4a68774f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2VhJTIwbW9uc3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Giant 'sea monster' fossil is one of the largest of its kind",
    link: "https://www.nationalgeographic.com/science/article/giant-sea-monster-fossil-is-one-of-the-largest-of-its-kind",
    text: "The roughly 30-foot-long fossil found in England offers new clues to how ichthyosaurs evolved into marine titans.",
    source: "National Geographic",
    date: "January 10, 2022",
  },
  {
    image:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title:
      "China Is Finding Fewer Reliable Sources of Coal. That Could Be Bad News for the Climate",
    link: "https://time.com/6133129/china-coal-imports-indonesia-ban/",
    text: "Until this month, much of the coal China imports to power its massive economy sailed into Chinese ports from Indonesia. But on Jan. 1, the Southeast Asian nation announced a ban on coal exports amid concerns over local shortages, leaving the world’s second largest economy in a lurch.",
    source: "Time",
    date: "January 12, 2022",
  },
];

const savedCards = [
  {
    image:
      "https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    link: "https://www.treehugger.com/special-sit-spot-nature-5085811",
    text: 'Ever since I read Richard Louv\'s influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...',
    source: "Treehugger",
    date: "November 4, 2020",
    keyword: "Nature",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500157287460-ea57183c1fb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGV0b24lMjBjcmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Grand Teton Renews Historic Crest Trail",
    link: "https://www.nationalparkstraveler.org/2020/10/grand-teton-renews-historic-crest-trail",
    text: "“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be enabled to visit that most fascinating region…In traversing this loop, one completely encircles the Three Tetons and adjacent high peaks, viewing them from all sides.",
    source: "National parks traveler",
    date: "October 19, 2020",
    keyword: "Parks",
  },
  {
    image:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title:
      "China Is Finding Fewer Reliable Sources of Coal. That Could Be Bad News for the Climate",
    link: "https://time.com/6133129/china-coal-imports-indonesia-ban/",
    text: "Until this month, much of the coal China imports to power its massive economy sailed into Chinese ports from Indonesia. But on Jan. 1, the Southeast Asian nation announced a ban on coal exports amid concerns over local shortages, leaving the world’s second largest economy in a lurch.",
    source: "Time",
    date: "January 12, 2022",
    keyword: "Environment",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523585559758-0a4a68774f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2VhJTIwbW9uc3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Giant 'sea monster' fossil is one of the largest of its kind",
    link: "https://www.nationalgeographic.com/science/article/giant-sea-monster-fossil-is-one-of-the-largest-of-its-kind",
    text: "The roughly 30-foot-long fossil found in England offers new clues to how ichthyosaurs evolved into marine titans.",
    source: "National Geographic",
    date: "January 10, 2022",
    keyword: "Science",
  },
];

export { cards, savedCards };
