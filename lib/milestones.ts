// Adapted from the CDC's "Learn the Signs. Act Early." milestone checklists
// (2022 revision). Each milestone is something most children (75% or more)
// can do by the listed age.

export type DomainKey = "social" | "talking" | "thinking" | "moving";

export const domains: Record<
  DomainKey,
  { label: string; emoji: string; tint: string }
> = {
  social: { label: "Feelings & friends", emoji: "💛", tint: "bg-terracotta-50 text-terracotta-600" },
  talking: { label: "Talking & listening", emoji: "💬", tint: "bg-sun-100 text-ink-800" },
  thinking: { label: "Thinking & problem-solving", emoji: "🧠", tint: "bg-sage-50 text-sage-700" },
  moving: { label: "Moving & doing", emoji: "🤸", tint: "bg-sky-50 text-sky-800" }
};

export type Stage = {
  id: string;
  age: string;
  short: string;
  nickname: string;
  vibe: string;
  milestones: Record<DomainKey, string[]>;
  play: string;
};

export const stages: Stage[] = [
  {
    id: "2-months",
    age: "2 months",
    short: "2m",
    nickname: "The Smiler",
    vibe: "Your face is their favourite show. Ratings are through the roof.",
    milestones: {
      social: ["Calms down when spoken to or picked up", "Looks at your face", "Smiles when you talk or smile at them"],
      talking: ["Makes sounds other than crying", "Reacts to loud sounds"],
      thinking: ["Watches you as you move", "Looks at a toy for several seconds"],
      moving: ["Holds head up during tummy time", "Moves both arms and both legs", "Opens hands briefly"]
    },
    play: "Get face-to-face, pull silly expressions and pause — watch them try to answer back."
  },
  {
    id: "4-months",
    age: "4 months",
    short: "4m",
    nickname: "The Giggler",
    vibe: "First laughs unlocked. You are officially the funniest person alive.",
    milestones: {
      social: ["Smiles on their own to get your attention", "Chuckles when you try to make them laugh"],
      talking: ["Coos — “oooo”, “aahh”", "Makes sounds back when you talk", "Turns head toward your voice"],
      thinking: ["Opens mouth when they see breast or bottle if hungry", "Looks at their hands with interest"],
      moving: ["Holds head steady when you hold them", "Holds a toy you put in their hand", "Brings hands to mouth", "Pushes up onto elbows on tummy"]
    },
    play: "Narrate your day like a sports commentator. Leave gaps so they can coo the replay."
  },
  {
    id: "6-months",
    age: "6 months",
    short: "6m",
    nickname: "The Roller",
    vibe: "Mirror selfies, raspberries, and rolling over like it’s nothing.",
    milestones: {
      social: ["Knows familiar people", "Likes looking at themselves in a mirror", "Laughs"],
      talking: ["Takes turns making sounds with you", "Blows raspberries", "Makes squealing noises"],
      thinking: ["Puts things in their mouth to explore", "Reaches to grab a toy they want", "Closes lips to say “no more food”"],
      moving: ["Rolls from tummy to back", "Pushes up with straight arms on tummy", "Leans on hands to support themselves when sitting"]
    },
    play: "Hold them up to a mirror and wave. Then let them win the staring contest."
  },
  {
    id: "9-months",
    age: "9 months",
    short: "9m",
    nickname: "The Explorer",
    vibe: "Peek-a-boo is now elite-level comedy. Strangers? Hard pass.",
    milestones: {
      social: ["Is shy, clingy or wary around strangers", "Shows several facial expressions", "Smiles or laughs at peek-a-boo"],
      talking: ["Babbles “mamama” and “bababa”", "Lifts arms up to be picked up"],
      thinking: ["Looks for things you drop out of sight", "Bangs two things together"],
      moving: ["Gets to sitting on their own", "Moves things from one hand to the other", "Sits without support"]
    },
    play: "Hide a toy under a cloth while they watch. Big celebration when they find it."
  },
  {
    id: "12-months",
    age: "1 year",
    short: "1y",
    nickname: "The Cruiser",
    vibe: "Furniture is a highway. “Mama” and “dada” are on the setlist.",
    milestones: {
      social: ["Plays games with you, like pat-a-cake"],
      talking: ["Waves bye-bye", "Calls a parent “mama”, “dada” or another special name", "Understands “no”"],
      thinking: ["Puts something in a container, like a block in a cup", "Looks for things they see you hide"],
      moving: ["Pulls up to stand", "Walks holding onto furniture", "Picks things up between thumb and pointer finger"]
    },
    play: "Fill-and-dump: a box, a few blocks, endless joy. Repeat 400 times."
  },
  {
    id: "15-months",
    age: "15 months",
    short: "15m",
    nickname: "The Toddler",
    vibe: "First wobbly steps and a growing vocabulary. Clear your schedule.",
    milestones: {
      social: ["Copies other children while playing", "Shows you an object they like", "Claps when excited", "Shows you affection"],
      talking: ["Tries to say one or two words besides “mama” or “dada”", "Looks at a familiar object when you name it", "Points to ask for something"],
      thinking: ["Uses things the right way — a phone, cup or book", "Stacks at least two small objects"],
      moving: ["Takes a few steps on their own", "Uses fingers to feed themselves"]
    },
    play: "Name everything. “That’s a spoon. A shiny spoon. A spoon for yoghurt.” You’re building their dictionary."
  },
  {
    id: "18-months",
    age: "18 months",
    short: "18m",
    nickname: "The Helper",
    vibe: "Wants to do what you do — chores included. Let them.",
    milestones: {
      social: ["Moves away but checks you’re still close", "Points to show you something interesting", "Helps you dress them"],
      talking: ["Tries to say three or more words besides “mama” or “dada”", "Follows one-step directions without gestures"],
      thinking: ["Copies you doing chores, like sweeping", "Plays with toys in simple ways, like pushing a car"],
      moving: ["Walks without holding on", "Scribbles", "Tries to use a spoon", "Climbs on and off a couch or chair"]
    },
    play: "Give them a real job: put socks in the basket. Applaud wildly."
  },
  {
    id: "2-years",
    age: "2 years",
    short: "2y",
    nickname: "The Negotiator",
    vibe: "Two-word sentences. Big opinions. Bigger hugs.",
    milestones: {
      social: ["Notices when others are hurt or upset", "Looks at your face to see how to react to something new"],
      talking: ["Points to things in a book when you ask", "Says at least two words together, like “more milk”", "Points to at least two body parts"],
      thinking: ["Holds something in one hand while using the other", "Tries switches, knobs and buttons", "Plays with more than one toy at once"],
      moving: ["Kicks a ball", "Runs", "Walks up a few stairs", "Eats with a spoon"]
    },
    play: "Offer two choices for everything (“red cup or blue cup?”). Independence, with guardrails."
  },
  {
    id: "3-years",
    age: "3 years",
    short: "3y",
    nickname: "The Questioner",
    vibe: "Why? Why? But why? Congratulations — you raised a scientist.",
    milestones: {
      social: ["Calms down within 10 minutes after you leave them at drop-off", "Notices other children and joins them to play"],
      talking: ["Has back-and-forth conversations", "Asks who, what, where or why questions", "Says their first name when asked", "Is understood by others most of the time"],
      thinking: ["Draws a circle when you show them how", "Avoids touching hot things when you warn them"],
      moving: ["Strings large beads or pasta", "Puts on some clothes by themselves", "Uses a fork"]
    },
    play: "Answer a “why” with “what do you think?” — then listen. Their theories are gold."
  },
  {
    id: "4-years",
    age: "4 years",
    short: "4y",
    nickname: "The Storyteller",
    vibe: "Superheroes, dragons, a full cast of characters. You’re in the show.",
    milestones: {
      social: ["Pretends to be something else — a teacher, superhero or dog", "Comforts others who are hurt or sad", "Likes to be a helper"],
      talking: ["Says sentences with four or more words", "Talks about something that happened during their day", "Answers simple questions like “What is a coat for?”"],
      thinking: ["Names a few colours", "Tells what comes next in a well-known story", "Draws a person with three or more body parts"],
      moving: ["Catches a large ball most of the time", "Pours water or serves food with supervision", "Holds a crayon between fingers and thumb"]
    },
    play: "At bedtime, take turns adding one sentence to a made-up story. Plot twists encouraged."
  },
  {
    id: "5-years",
    age: "5 years",
    short: "5y",
    nickname: "The Big Kid",
    vibe: "Counting to ten, hopping on one foot, telling you how it is.",
    milestones: {
      social: ["Follows rules and takes turns in games", "Sings, dances or acts for you", "Does simple chores at home"],
      talking: ["Tells a story with at least two events", "Keeps a conversation going for more than three back-and-forths", "Recognises simple rhymes, like bat–cat"],
      thinking: ["Counts to 10", "Uses time words like “yesterday” and “tomorrow”", "Writes some letters in their name"],
      moving: ["Buttons some buttons", "Hops on one foot"]
    },
    play: "Rhyme battles in the car. Loser has to make up a word that rhymes with “orange”."
  }
];
