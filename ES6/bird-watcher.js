function totalBirdCount(birdsPerDay) {
  let sum = 0;
  for (let bird of birdsPerDay) sum += bird;

  console.log(sum);
}

function birdsInWeek(birdsInWeek, weekNumber) {
    let sum = 0;
    for(let i = (7*(weekNumber-1)); i<(weekNumber * 7); i++) sum+= birdsInWeek[i]

    console.log(sum)
}

const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];


// totalBirdCount(birdsPerDay);
birdsInWeek(birdsPerDay, 2)