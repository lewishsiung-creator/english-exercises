/* Vocabulary and sentence data — CEFR A1, ages 7–10.
   Each topic holds 12 words. Keep emoji widely-supported so they render on
   school tablets as well as desktops. */

const TOPICS = [
  {
    id: 'animals',
    name: 'Animals',
    icon: '🐾',
    colour: 'green',
    words: [
      { word: 'cat', emoji: '🐱', article: 'a' },
      { word: 'dog', emoji: '🐶', article: 'a' },
      { word: 'bird', emoji: '🐦', article: 'a' },
      { word: 'fish', emoji: '🐠', article: 'a' },
      { word: 'rabbit', emoji: '🐰', article: 'a' },
      { word: 'frog', emoji: '🐸', article: 'a' },
      { word: 'duck', emoji: '🦆', article: 'a' },
      { word: 'horse', emoji: '🐴', article: 'a' },
      { word: 'pig', emoji: '🐷', article: 'a' },
      { word: 'cow', emoji: '🐮', article: 'a' },
      { word: 'lion', emoji: '🦁', article: 'a' },
      { word: 'bear', emoji: '🐻', article: 'a' },
    ],
    sentences: [
      { words: ['I', 'can', 'see', 'a', 'cat.'], emoji: '🐱' },
      { words: ['The', 'dog', 'is', 'big.'], emoji: '🐶' },
      { words: ['It', 'is', 'a', 'bird.'], emoji: '🐦' },
      { words: ['The', 'frog', 'can', 'jump.'], emoji: '🐸' },
      { words: ['I', 'like', 'rabbits.'], emoji: '🐰' },
      { words: ['The', 'lion', 'is', 'not', 'small.'], emoji: '🦁' },
    ],
  },
  {
    id: 'food',
    name: 'Food',
    icon: '🍎',
    colour: 'orange',
    words: [
      { word: 'apple', emoji: '🍎', article: 'an' },
      { word: 'banana', emoji: '🍌', article: 'a' },
      { word: 'cake', emoji: '🍰', article: 'a' },
      { word: 'egg', emoji: '🥚', article: 'an' },
      { word: 'milk', emoji: '🥛', article: 'some' },
      { word: 'bread', emoji: '🍞', article: 'some' },
      { word: 'rice', emoji: '🍚', article: 'some' },
      { word: 'pizza', emoji: '🍕', article: 'a' },
      { word: 'orange', emoji: '🍊', article: 'an' },
      { word: 'water', emoji: '💧', article: 'some' },
      { word: 'cheese', emoji: '🧀', article: 'some' },
      { word: 'carrot', emoji: '🥕', article: 'a' },
    ],
    sentences: [
      { words: ['I', 'like', 'apples.'], emoji: '🍎' },
      { words: ['It', 'is', 'a', 'cake.'], emoji: '🍰' },
      { words: ['The', 'pizza', 'is', 'hot.'], emoji: '🍕' },
      { words: ['I', 'want', 'some', 'milk.'], emoji: '🥛' },
      { words: ['This', 'is', 'my', 'bread.'], emoji: '🍞' },
      { words: ['The', 'carrot', 'is', 'orange.'], emoji: '🥕' },
    ],
  },
  {
    id: 'school',
    name: 'School',
    icon: '🎒',
    colour: 'blue',
    words: [
      { word: 'pen', emoji: '🖊️', article: 'a' },
      { word: 'book', emoji: '📚', article: 'a' },
      { word: 'bag', emoji: '🎒', article: 'a' },
      { word: 'ruler', emoji: '📏', article: 'a' },
      { word: 'pencil', emoji: '✏️', article: 'a' },
      { word: 'chair', emoji: '🪑', article: 'a' },
      { word: 'clock', emoji: '🕐', article: 'a' },
      { word: 'ball', emoji: '⚽', article: 'a' },
      { word: 'paint', emoji: '🎨', article: 'some' },
      { word: 'crayon', emoji: '🖍️', article: 'a' },
      { word: 'scissors', emoji: '✂️', article: 'some' },
      { word: 'desk', emoji: '🗄️', article: 'a' },
    ],
    sentences: [
      { words: ['This', 'is', 'my', 'pen.'], emoji: '🖊️' },
      { words: ['I', 'have', 'a', 'book.'], emoji: '📚' },
      { words: ['The', 'bag', 'is', 'red.'], emoji: '🎒' },
      { words: ['Where', 'is', 'my', 'ruler?'], emoji: '📏' },
      { words: ['It', 'is', 'a', 'big', 'clock.'], emoji: '🕐' },
      { words: ['I', 'can', 'draw', 'a', 'ball.'], emoji: '⚽' },
    ],
  },
];

const ACTIVITIES = [
  {
    id: 'listen',
    name: 'Listen and Click',
    icon: '👂',
    colour: 'blue',
    hint: 'Hear the word. Click the picture.',
  },
  {
    id: 'read',
    name: 'Read and Match',
    icon: '👀',
    colour: 'green',
    hint: 'See the picture. Choose the word.',
  },
  {
    id: 'spell',
    name: 'Missing Letter',
    icon: '🔤',
    colour: 'orange',
    hint: 'Which letter is missing?',
  },
  {
    id: 'build',
    name: 'Build a Sentence',
    icon: '🧩',
    colour: 'purple',
    hint: 'Tap the words in order.',
  },
];

const PRAISE = ['Great!', 'Well done!', 'Nice work!', 'Super!', 'Yes!', 'Perfect!'];
const ENCOURAGE = ['Try again!', 'Almost!', 'Have another go!', 'Nearly!'];
