let Animal = [
  // category land
  {
    name: "Cat",
    id: Math.floor(Math.random() * 5000000000 + 1),
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
    category: "land",
    legNumbers: 4,
    isInIsrael: true,
  },
  {
    name: "Dog",
    id: Math.floor(Math.random() * 5000000000 + 1),
    picture:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg",
    category: "land",
    legNumbers: 4,
    isInIsrael: true,
  },
  {
    name: "Wolf",
    id: Math.floor(Math.random() * 5000000000 + 1),
    picture:
      "https://play-lh.googleusercontent.com/iGIMssQACw5vq2SkVq45rcKfmpZ7bldxXbboAmzmT0mnoAEmmIFWphJKS9arE8s_LU4",
    category: "land",
    legNumbers: 4,
    isInIsrael: true,
  },
  {
    name: "Tiger",
    id: Math.floor(Math.random() * 5000000000 + 1),
    picture:
      "https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg",
    category: "land",
    legNumbers: 4,
    isInIsrael: false,
  },
  {
    name: "Ostrich",
    id: Math.floor(Math.random() * 5000000000 + 1),
    picture:
      "https://www.pbs.org/wnet/nature/files/2021/09/catherine-merlin-qeGHu5Jdy5s-unsplash-scaled-e1631640316457.jpg",
    category: "land",
    legNumbers: 2,
    isInIsrael: false,
  },
  // category sea
  {
    name: "Sea turtle",
    id: Math.floor(Math.random() * 5000000000 + 1),
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/7/7d/Chelonia_Mydas.JPG",
    category: "sea",
    legNumbers: 4,
    isInIsrael: true,
  },
  {
    name: "Dolphin",
    id: Math.floor(Math.random() * 5000000000 + 1),
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tursiops_truncatus_01.jpg/330px-Tursiops_truncatus_01.jpg",
    category: "sea",
    legNumbers: 0,
    isInIsrael: true,
  },
  {
    name: "Jellyfish",
    id: Math.floor(Math.random() * 5000000000 + 1),
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Jelly_cc11.jpg/330px-Jelly_cc11.jpg",
    category: "sea",
    legNumbers: 0,
    isInIsrael: true,
  },
  {
    name: "Killer whale",
    id: Math.floor(Math.random() * 5000000000 + 1),
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Killerwhales_jumping.jpg/330px-Killerwhales_jumping.jpg",
    category: "sea",
    legNumbers: 0,
    isInIsrael: false,
  },
  {
    name: "shark",
    id: Math.floor(Math.random() * 5000000000 + 1),
    picture:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/13766/production/_124981797_megalodongettyimages-1004792742.jpg.webp",
    category: "sea",
    legNumbers: 0,
    isInIsrael: true,
  },
  {
    name: "Seal",
    id: Math.floor(Math.random() * 5000000000 + 1),
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/7/74/California_sea_lion_in_La_Jolla_%2870568%29.jpg",
    category: "sea",
    legNumbers: 0,
    isInIsrael: false,
  },

  // category air
  {
    name: "Eagle",
    id: Math.floor(Math.random() * 5000000000 + 1),
    picture:
      "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/306062281/1800",
    category: "air",
    legNumbers: 2,
    isInIsrael: true,
  },
  {
    name: "Dove",
    id: Math.floor(Math.random() * 5000000000 + 1),
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Treron_vernans_male_-_Kent_Ridge_Park.jpg/330px-Treron_vernans_male_-_Kent_Ridge_Park.jpg",
    category: "air",
    legNumbers: 2,
    isInIsrael: true,
  },
  {
    name: "Owl",
    id: Math.floor(Math.random() * 5000000000 + 1),
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Northern_Spotted_Owl.USFWS.jpg/640px-Northern_Spotted_Owl.USFWS.jpg",
    category: "air",
    legNumbers: 2,
    isInIsrael: true,
  },
  {
    name: "Bat",
    id: Math.floor(Math.random() * 5000000000 + 1),
    picture:
      "https://cdn.britannica.com/21/75121-050-8CF5E1DB/Bats-structures-organs-sound-frequencies-signals-contexts.jpg",
    category: "air",
    legNumbers: 2,
    isInIsrael: true,
  },
  {
    name: "Parrot",
    id: Math.floor(Math.random() * 5000000000 + 1),
    picture:
      "https://www.mpg.de/18490336/original-1656406663.webp?t=eyJ3aWR0aCI6MzQxLCJmaWxlX2V4dGVuc2lvbiI6IndlYnAiLCJxdWFsaXR5Ijo4Niwib2JqX2lkIjoxODQ5MDMzNn0%3D--6a87917de238ccb8635b6e45cac742788505ae92",
    category: "air",
    legNumbers: 2,
    isInIsrael: true,
  },
  {
    name: "Flamingo",
    id: Math.floor(Math.random() * 5000000000 + 1),
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Phoenicopterus_ruber_Bonaire_2.jpg/800px-Phoenicopterus_ruber_Bonaire_2.jpg",
    category: "air",
    legNumbers: 2,
    isInIsrael: false,
  },
];

let allAnimals = Animal;
export default allAnimals
// console.log("allAnimals:", allAnimals);
