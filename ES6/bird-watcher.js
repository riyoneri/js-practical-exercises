function totalBirdCount(birdsPerDay) {
  let sum = 0;
  for (let bird of birdsPerDay) sum += bird;

  console.log(sum);
}

const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
totalBirdCount(birdsPerDay);
