export interface MCUMovie {
  id: string;
  title: string;
  year: number;
  phase: number;
  synopsis: string;
  cast: string[];
  marvelSlug: string;
  hasSony?: boolean;
  posterUrl?: string;
}

export const MCU_MOVIES: MCUMovie[] = [
  // Phase 1
  {
    id: "iron-man",
    title: "Iron Man",
    year: 2008,
    phase: 1,
    synopsis:
      "Tony Stark, a billionaire industrialist and genius inventor, is captured by enemy forces and builds a powered armor suit to escape. He then upgrades the suit and becomes Iron Man, a technological superhero.",
    cast: [
      "Robert Downey Jr.",
      "Gwyneth Paltrow",
      "Jeff Bridges",
      "Terrence Howard",
    ],
    marvelSlug: "iron-man",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/78lPtwv72eTNqFW9COBF8l74vmT.jpg",
  },
  {
    id: "incredible-hulk",
    title: "The Incredible Hulk",
    year: 2008,
    phase: 1,
    synopsis:
      "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper. His quest puts him directly against the Abomination.",
    cast: ["Edward Norton", "Liv Tyler", "Tim Roth", "William Hurt"],
    marvelSlug: "incredible-hulk",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/gKzYx79y0AQTL4UAk1cZNhJopLx.jpg",
  },
  {
    id: "iron-man-2",
    title: "Iron Man 2",
    year: 2010,
    phase: 1,
    synopsis:
      "Tony Stark must contend with his declining health, government pressure to hand over the Iron Man technology, and a new enemy—Russian physicist Ivan Vanko—who has developed his own arc reactor.",
    cast: [
      "Robert Downey Jr.",
      "Gwyneth Paltrow",
      "Don Cheadle",
      "Mickey Rourke",
      "Scarlett Johansson",
    ],
    marvelSlug: "iron-man-2",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/6WBeq4tCfDeUraNmqKABs3BSbXd.jpg",
  },
  {
    id: "thor",
    title: "Thor",
    year: 2011,
    phase: 1,
    synopsis:
      "The powerful but arrogant Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he must learn humility and prove himself worthy of his magical hammer Mjolnir.",
    cast: [
      "Chris Hemsworth",
      "Natalie Portman",
      "Tom Hiddleston",
      "Anthony Hopkins",
    ],
    marvelSlug: "thor",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/prSfAi1xGrhLQNxVSUFh2xAqYEp.jpg",
  },
  {
    id: "captain-america-first-avenger",
    title: "Captain America: The First Avenger",
    year: 2011,
    phase: 1,
    synopsis:
      "Steve Rogers, a frail young man from Brooklyn, is transformed into super-soldier Captain America to aid the Allied effort against the Nazis and battles the HYDRA forces of the villainous Red Skull.",
    cast: ["Chris Evans", "Hayley Atwell", "Hugo Weaving", "Tommy Lee Jones"],
    marvelSlug: "captain-america-the-first-avenger",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/vSNfBHpgmurgn7MUhLqfDMBJUTd.jpg",
  },
  {
    id: "avengers",
    title: "The Avengers",
    year: 2012,
    phase: 1,
    synopsis:
      "Nick Fury and the spy agency S.H.I.E.L.D. recruit Iron Man, Captain America, Thor, the Hulk, Black Widow, and Hawkeye to form a team to stop Loki, Thor's brother, from conquering Earth.",
    cast: [
      "Robert Downey Jr.",
      "Chris Evans",
      "Chris Hemsworth",
      "Mark Ruffalo",
      "Scarlett Johansson",
      "Jeremy Renner",
    ],
    marvelSlug: "the-avengers",
    posterUrl: "https://image.tmdb.org/t/p/w342/RYMX2wcKCBAr24UyPD7KiyakRn.jpg",
  },
  // Phase 2
  {
    id: "iron-man-3",
    title: "Iron Man 3",
    year: 2013,
    phase: 2,
    synopsis:
      "Tony Stark is pitted against a powerful enemy called the Mandarin and must rely on his ingenuity and instincts to protect those he loves after his personal world is destroyed.",
    cast: [
      "Robert Downey Jr.",
      "Gwyneth Paltrow",
      "Ben Kingsley",
      "Guy Pearce",
    ],
    marvelSlug: "iron-man-3",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg",
  },
  {
    id: "thor-dark-world",
    title: "Thor: The Dark World",
    year: 2013,
    phase: 2,
    synopsis:
      "When an ancient enemy threatens to plunge the cosmos into darkness, Thor must embark on a perilous quest to protect his people and the Nine Realms, reuniting with Jane Foster.",
    cast: [
      "Chris Hemsworth",
      "Natalie Portman",
      "Tom Hiddleston",
      "Christopher Eccleston",
    ],
    marvelSlug: "thor-the-dark-world",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/bnsTiEBBM0lWFZX0oqKEYZHoFMJ.jpg",
  },
  {
    id: "captain-america-winter-soldier",
    title: "Captain America: The Winter Soldier",
    year: 2014,
    phase: 2,
    synopsis:
      "Steve Rogers struggles to embrace his role in the modern world and teams up with Black Widow and Falcon to uncover a far-reaching conspiracy within S.H.I.E.L.D. involving the mysterious Winter Soldier.",
    cast: [
      "Chris Evans",
      "Scarlett Johansson",
      "Sebastian Stan",
      "Anthony Mackie",
      "Robert Redford",
    ],
    marvelSlug: "captain-america-the-winter-soldier",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/5TQ6YDmymBpnF005OyoB7ohZps9.jpg",
  },
  {
    id: "guardians-of-the-galaxy",
    title: "Guardians of the Galaxy",
    year: 2014,
    phase: 2,
    synopsis:
      "An unlikely group of space misfits—including Star-Lord, Gamora, Drax, Rocket, and Groot—must band together to protect a powerful artifact from the fanatical villain Ronan.",
    cast: [
      "Chris Pratt",
      "Zoe Saldana",
      "Dave Bautista",
      "Vin Diesel",
      "Bradley Cooper",
    ],
    marvelSlug: "guardians-of-the-galaxy",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
  },
  {
    id: "avengers-age-of-ultron",
    title: "Avengers: Age of Ultron",
    year: 2015,
    phase: 2,
    synopsis:
      "When Tony Stark tries to jumpstart a dormant peacekeeping program called Ultron, the Avengers must stop the villainous artificial intelligence from enacting its terrible plan to wipe out humanity.",
    cast: [
      "Robert Downey Jr.",
      "Chris Evans",
      "Mark Ruffalo",
      "Chris Hemsworth",
      "Scarlett Johansson",
      "James Spader",
    ],
    marvelSlug: "avengers-age-of-ultron",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
  },
  {
    id: "ant-man",
    title: "Ant-Man",
    year: 2015,
    phase: 2,
    synopsis:
      "Scott Lang, a master thief, must embrace his inner hero and help his mentor Dr. Hank Pym protect the Ant-Man suit by pulling off a heist that will save the world.",
    cast: ["Paul Rudd", "Michael Douglas", "Evangeline Lilly", "Corey Stoll"],
    marvelSlug: "ant-man",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
  },
  // Phase 3
  {
    id: "captain-america-civil-war",
    title: "Captain America: Civil War",
    year: 2016,
    phase: 3,
    synopsis:
      "Political pressure mounts to install a system of accountability when the Avengers' actions lead to collateral damage. The team is fractured into two opposing factions—one led by Steve Rogers and the other by Tony Stark.",
    cast: [
      "Chris Evans",
      "Robert Downey Jr.",
      "Scarlett Johansson",
      "Sebastian Stan",
      "Chadwick Boseman",
    ],
    marvelSlug: "captain-america-civil-war",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/rAGiXaUfohXuzFPPdCHhZT0F7ZX.jpg",
  },
  {
    id: "doctor-strange",
    title: "Doctor Strange",
    year: 2016,
    phase: 3,
    synopsis:
      "A former neurosurgeon embarks on a journey of healing after a horrific car accident and becomes a powerful sorcerer defending the world against mystical threats.",
    cast: [
      "Benedict Cumberbatch",
      "Chiwetel Ejiofor",
      "Rachel McAdams",
      "Tilda Swinton",
    ],
    marvelSlug: "doctor-strange",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/uGBVAFb3PSv7Zt5bFAMzP7JBkth.jpg",
  },
  {
    id: "guardians-vol-2",
    title: "Guardians of the Galaxy Vol. 2",
    year: 2017,
    phase: 3,
    synopsis:
      "The Guardians struggle to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage in the outer reaches of our galaxy.",
    cast: [
      "Chris Pratt",
      "Zoe Saldana",
      "Dave Bautista",
      "Michael Rooker",
      "Kurt Russell",
    ],
    marvelSlug: "guardians-of-the-galaxy-vol-2",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/y4MBh0EjBlMuOzv9axM4godKONM.jpg",
  },
  {
    id: "spider-man-homecoming",
    title: "Spider-Man: Homecoming",
    year: 2017,
    phase: 3,
    synopsis:
      "Peter Parker balances his life as an ordinary high school student with his superhero alter-ego Spider-Man, while facing the Vulture—a new villain who threatens the safety of his city.",
    cast: [
      "Tom Holland",
      "Michael Keaton",
      "Robert Downey Jr.",
      "Marisa Tomei",
    ],
    marvelSlug: "spider-man-homecoming",
    hasSony: true,
    posterUrl:
      "https://image.tmdb.org/t/p/w342/c24sv2weTHPsmDa7jEMN0kzCCDe.jpg",
  },
  {
    id: "thor-ragnarok",
    title: "Thor: Ragnarok",
    year: 2017,
    phase: 3,
    synopsis:
      "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop the apocalyptic Ragnarok at the hands of Hela, the powerful goddess of death.",
    cast: [
      "Chris Hemsworth",
      "Tom Hiddleston",
      "Cate Blanchett",
      "Mark Ruffalo",
      "Tessa Thompson",
    ],
    marvelSlug: "thor-ragnarok",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
  },
  {
    id: "black-panther",
    title: "Black Panther",
    year: 2018,
    phase: 3,
    synopsis:
      "T'Challa, heir to the African kingdom of Wakanda, must step forward to lead his people after the death of his father and faces a powerful enemy who plans to destroy Wakanda.",
    cast: [
      "Chadwick Boseman",
      "Michael B. Jordan",
      "Lupita Nyong'o",
      "Danai Gurira",
      "Andy Serkis",
    ],
    marvelSlug: "black-panther",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
  },
  {
    id: "avengers-infinity-war",
    title: "Avengers: Infinity War",
    year: 2018,
    phase: 3,
    synopsis:
      "The Avengers and their allies unite to prevent Thanos from collecting the Infinity Stones and using them to destroy half of all living things in the universe.",
    cast: [
      "Robert Downey Jr.",
      "Chris Hemsworth",
      "Mark Ruffalo",
      "Chris Evans",
      "Scarlett Johansson",
      "Josh Brolin",
    ],
    marvelSlug: "avengers-infinity-war",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
  },
  {
    id: "ant-man-wasp",
    title: "Ant-Man and the Wasp",
    year: 2018,
    phase: 3,
    synopsis:
      "Scott Lang grapples with the consequences of his choices as both a superhero and a father while Hope van Dyne and Dr. Hank Pym present him with an urgent new mission.",
    cast: [
      "Paul Rudd",
      "Evangeline Lilly",
      "Michael Douglas",
      "Hannah John-Kamen",
    ],
    marvelSlug: "ant-man-and-the-wasp",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/e1ZSd0GgCbCp3njCfuHnvFzSKSB.jpg",
  },
  {
    id: "captain-marvel",
    title: "Captain Marvel",
    year: 2019,
    phase: 3,
    synopsis:
      "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s.",
    cast: ["Brie Larson", "Samuel L. Jackson", "Jude Law", "Annette Bening"],
    marvelSlug: "captain-marvel",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/AtsgWhDnHTq68L0lLsUrCnM7TXx.jpg",
  },
  {
    id: "avengers-endgame",
    title: "Avengers: Endgame",
    year: 2019,
    phase: 3,
    synopsis:
      "After the devastating events of Infinity War, the remaining Avengers assemble once more in order to undo Thanos's actions and restore order to the universe—whatever it takes.",
    cast: [
      "Robert Downey Jr.",
      "Chris Evans",
      "Mark Ruffalo",
      "Chris Hemsworth",
      "Scarlett Johansson",
      "Jeremy Renner",
    ],
    marvelSlug: "avengers-endgame",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
  {
    id: "spider-man-far-from-home",
    title: "Spider-Man: Far From Home",
    year: 2019,
    phase: 3,
    synopsis:
      "Following the events of Endgame, Spider-Man must step up to take on new threats in a world that has changed forever, aided by the mysterious Mysterio.",
    cast: ["Tom Holland", "Samuel L. Jackson", "Jake Gyllenhaal", "Zendaya"],
    marvelSlug: "spider-man-far-from-home",
    hasSony: true,
    posterUrl:
      "https://image.tmdb.org/t/p/w342/4q2hz2m7hubCH2ZH1xxGpFMBBzs.jpg",
  },
  // Phase 4
  {
    id: "black-widow",
    title: "Black Widow",
    year: 2021,
    phase: 4,
    synopsis:
      "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. She must work with allies to bring down the Red Room.",
    cast: [
      "Scarlett Johansson",
      "Florence Pugh",
      "David Harbour",
      "Rachel Weisz",
    ],
    marvelSlug: "black-widow",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
  },
  {
    id: "shang-chi",
    title: "Shang-Chi and the Legend of the Ten Rings",
    year: 2021,
    phase: 4,
    synopsis:
      "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization led by his powerful father Wenwu.",
    cast: ["Simu Liu", "Awkwafina", "Tony Leung", "Michelle Yeoh"],
    marvelSlug: "shang-chi-and-the-legend-of-the-ten-rings",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
  },
  {
    id: "eternals",
    title: "Eternals",
    year: 2021,
    phase: 4,
    synopsis:
      "A group of ancient aliens called Eternals, who have secretly lived on Earth for thousands of years, reunite to protect humanity from the resurgence of their ancient enemies the Deviants.",
    cast: [
      "Gemma Chan",
      "Richard Madden",
      "Angelina Jolie",
      "Kumail Nanjiani",
      "Salma Hayek",
    ],
    marvelSlug: "eternals",
    posterUrl: "https://image.tmdb.org/t/p/w342/bcCBq9N1EMo3n7stehVkUBNcpY.jpg",
  },
  {
    id: "spider-man-no-way-home",
    title: "Spider-Man: No Way Home",
    year: 2021,
    phase: 4,
    synopsis:
      "Peter Parker asks Doctor Strange to help make people forget he is Spider-Man, but when the spell goes wrong, dangerous foes from other worlds start to appear—and the multiverse is torn apart.",
    cast: [
      "Tom Holland",
      "Zendaya",
      "Benedict Cumberbatch",
      "Willem Dafoe",
      "Alfred Molina",
    ],
    marvelSlug: "spider-man-no-way-home",
    hasSony: true,
    posterUrl:
      "https://image.tmdb.org/t/p/w342/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
  },
  {
    id: "doctor-strange-multiverse",
    title: "Doctor Strange in the Multiverse of Madness",
    year: 2022,
    phase: 4,
    synopsis:
      "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
    cast: [
      "Benedict Cumberbatch",
      "Elizabeth Olsen",
      "Chiwetel Ejiofor",
      "Rachel McAdams",
    ],
    marvelSlug: "doctor-strange-in-the-multiverse-of-madness",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
  },
  {
    id: "thor-love-thunder",
    title: "Thor: Love and Thunder",
    year: 2022,
    phase: 4,
    synopsis:
      "Thor enlists the help of King Valkyrie, Korg and ex-girlfriend Jane Foster—now wielding Mjolnir as the Mighty Thor—to confront Gorr the God Butcher, who seeks the extinction of the gods.",
    cast: [
      "Chris Hemsworth",
      "Natalie Portman",
      "Tessa Thompson",
      "Christian Bale",
    ],
    marvelSlug: "thor-love-and-thunder",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
  },
  {
    id: "black-panther-wakanda-forever",
    title: "Black Panther: Wakanda Forever",
    year: 2022,
    phase: 4,
    synopsis:
      "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death, and a new threat from an underwater kingdom.",
    cast: [
      "Letitia Wright",
      "Lupita Nyong'o",
      "Danai Gurira",
      "Angela Bassett",
      "Tenoch Huerta",
    ],
    marvelSlug: "black-panther-wakanda-forever",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/sv1xJUazXoQuIQxYp5sVqW9RFGd.jpg",
  },
  // Phase 5
  {
    id: "ant-man-quantumania",
    title: "Ant-Man and the Wasp: Quantumania",
    year: 2023,
    phase: 5,
    synopsis:
      "Scott Lang and Hope Van Dyne are pulled into the Quantum Realm along with Hope's parents and Scott's daughter Cassie, where they encounter a powerful conqueror named Kang.",
    cast: [
      "Paul Rudd",
      "Evangeline Lilly",
      "Jonathan Majors",
      "Kathryn Newton",
      "Michael Douglas",
    ],
    marvelSlug: "ant-man-and-the-wasp-quantumania",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg",
  },
  {
    id: "guardians-vol-3",
    title: "Guardians of the Galaxy Vol. 3",
    year: 2023,
    phase: 5,
    synopsis:
      "Still reeling from the loss of Gamora, Peter Quill must rally his team to defend the universe along a difficult mission—one that, if not completed, could lead to the end of the Guardians.",
    cast: [
      "Chris Pratt",
      "Zoe Saldana",
      "Dave Bautista",
      "Bradley Cooper",
      "Vin Diesel",
      "Chukwudi Iwuji",
    ],
    marvelSlug: "guardians-of-the-galaxy-vol-3",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/r2J02Z6HmccN4QKxKgKJ58K3OWV.jpg",
  },
  {
    id: "the-marvels",
    title: "The Marvels",
    year: 2023,
    phase: 5,
    synopsis:
      "Carol Danvers, Monica Rambeau, and Kamala Khan find their powers entangled when they switch places each time they use them. They must work together to untangle their lives and stop a new threat.",
    cast: [
      "Brie Larson",
      "Teyonah Parris",
      "Iman Vellani",
      "Samuel L. Jackson",
    ],
    marvelSlug: "the-marvels",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/9GBhzXMFjgcZ3FdR9w3bqMMRKEn.jpg",
  },
  {
    id: "deadpool-wolverine",
    title: "Deadpool & Wolverine",
    year: 2024,
    phase: 5,
    synopsis:
      "Deadpool is recruited by the TVA and drags an unwilling Logan into the MCU's wildest adventure yet, bringing the two iconic characters together for a multiverse-hopping story.",
    cast: ["Ryan Reynolds", "Hugh Jackman", "Emma Corrin", "Matthew Macfadyen"],
    marvelSlug: "deadpool-and-wolverine",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
  },
  {
    id: "captain-america-brave-new-world",
    title: "Captain America: Brave New World",
    year: 2025,
    phase: 5,
    synopsis:
      "Sam Wilson's tenure as the new Captain America takes on global stakes after a fateful encounter with the U.S. President leads him into a complex and dangerous international incident.",
    cast: ["Anthony Mackie", "Harrison Ford", "Danny Ramirez", "Shira Haas"],
    marvelSlug: "captain-america-brave-new-world",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/6WH3A0VEuBDQKqRRFBHQHJUmNO7.jpg",
  },
  {
    id: "thunderbolts",
    title: "Thunderbolts*",
    year: 2025,
    phase: 5,
    synopsis:
      "A group of morally complex antiheroes are assembled by Valentina Allegra de Fontaine for a high-stakes mission—but they soon discover they may be fighting for more than survival.",
    cast: [
      "Florence Pugh",
      "David Harbour",
      "Wyatt Russell",
      "Sebastian Stan",
      "Julia Louis-Dreyfus",
    ],
    marvelSlug: "thunderbolts",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/b5BSRdJJXb8eLpRq2iFxT6qxrA1.jpg",
  },
  // Phase 6
  {
    id: "fantastic-four-first-steps",
    title: "The Fantastic Four: First Steps",
    year: 2025,
    phase: 6,
    synopsis:
      "Marvel's first family—Reed Richards, Sue Storm, Johnny Storm, and Ben Grimm—face their greatest challenge yet as they encounter a cosmic threat that tests the bonds of family and the limits of their extraordinary powers.",
    cast: [
      "Pedro Pascal",
      "Vanessa Kirby",
      "Joseph Quinn",
      "Ebon Moss-Bachrach",
      "Galactus",
    ],
    marvelSlug: "the-fantastic-four-first-steps",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/9l1eZiJHmhr5jIlthMdJN5WYoff.jpg",
  },
  {
    id: "avengers-doomsday",
    title: "Avengers: Doomsday",
    year: 2026,
    phase: 6,
    synopsis:
      "The Avengers face their most formidable enemy yet—Doctor Doom—in an epic confrontation that will determine the fate of the entire Marvel universe and shake its foundations forever.",
    cast: [
      "Robert Downey Jr.",
      "Pedro Pascal",
      "Vanessa Kirby",
      "Tom Holland",
      "Benedict Cumberbatch",
    ],
    marvelSlug: "avengers-doomsday",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/eaXe9UoFHgMCzJOxBzJnzDvCGRv.jpg",
  },
  {
    id: "avengers-secret-wars",
    title: "Avengers: Secret Wars",
    year: 2027,
    phase: 6,
    synopsis:
      "The ultimate culmination of the Multiverse Saga. Heroes and villains from across the multiverse converge in the most epic battle ever conceived, where the fate of all existence hangs in the balance.",
    cast: [
      "Robert Downey Jr.",
      "Pedro Pascal",
      "Tom Holland",
      "Benedict Cumberbatch",
      "Chris Hemsworth",
    ],
    marvelSlug: "avengers-secret-wars",
    posterUrl: "https://image.tmdb.org/t/p/w342/someSecretWarsPoster.jpg",
  },
];

export const PHASE_COLORS: Record<number, string> = {
  1: "#E0B24A",
  2: "#C0392B",
  3: "#8E44AD",
  4: "#2980B9",
  5: "#27AE60",
  6: "#E67E22",
};

export const PHASE_LABELS: Record<number, string> = {
  1: "Phase 1",
  2: "Phase 2",
  3: "Phase 3",
  4: "Phase 4",
  5: "Phase 5",
  6: "Phase 6",
};
