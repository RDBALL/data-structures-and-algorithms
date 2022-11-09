'use strict';

function businessTrip(graph, citiesArray) {
  let current = citiesArray.shift();
  let totalCost = 0;
  while (citiesArray.length > 0) {
    const neighbors = graph.getNeighbors(current);
    current = citiesArray.shift();
    for (let i = 0; i < neighbors.length; i++) {
      if (neighbors[i].vertex === current) {
        totalCost += neighbors[i].weight;
        break;
      } else if (i+1 === neighbors.length) {
        return [false, 0];
      }
    }
  }
  return [true, totalCost];
}

module.exports = businessTrip;
