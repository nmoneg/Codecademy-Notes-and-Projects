let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let betterWords = [];

/**This code splits the string "story" into an array "storyWords", where the string is divided based on spaces (" "), and then prints the length of the new array to the console, which is also the word count of the string. */
const storyWords = story.split(" "); 
console.log(`Initial word count: ${storyWords.length}`);

/** This code filters through the array "storyWords" and returns any values that DO NOT match any of the values in the "unnecessaryWords" filter. The returned values are added to the "betterWords" array, and a new word count (excluding unnecessary words) is printed to the console*/
betterWords = storyWords.filter(word => {
  return !unnecessaryWords.includes(word);
});
console.log(`New word count after removing unnecessary words: ${betterWords.length}`);  

/** This code counts the number of words in "betterWords" that match any of the values in "overusedWords", then prints the number of overused words to the console */
let overusedWordCount = 0;
betterWords.forEach(word => {
  if (overusedWords.includes(word)) {
    overusedWordCount++;
  }
});
console.log(`Number of overused words: ${overusedWordCount}`);

/** This code counts the number of sentences in "betterWords" by checking for values in "betterWords" that contain "." or "!", then prints the number to the console. */
let sentenceCount = 0;
betterWords.forEach(word => {
  if (word.includes(".") || word.includes("!")) {
    sentenceCount++;
  }
});
console.log(`Number of sentences: ${sentenceCount}`);

/** This code logs "betterWords" to the console as a single string */
console.log(betterWords.join(" "));