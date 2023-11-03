export default function two_crystal_balls(breaks: boolean[]): number {
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));
  let drops = 0;

  // Phase 1: Find the approximate range.
  // find the first crystal ball when it's first going to break
  let i = jmpAmount;

  for(; i < breaks.length; i += jmpAmount) {
    drops++;
    if(breaks[i]) {
      break;
    }
  }

  // Phase 2: Fine-tune to get the exact floor
  //i -= jmpAmount; // jump back sqrt of N
  i = i - jmpAmount + 1;

  for(let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
    drops++;
    if (breaks[i]) {
      console.log(`The ball breaks on floor ${i}`);
      console.log(`Total number of drops: ${drops}`);
      return i;
    }
  }

  console.log("No breaking floor found");
  return -1;
}
