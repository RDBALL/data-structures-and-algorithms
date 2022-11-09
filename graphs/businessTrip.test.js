'use strict';

const businessTrip = require('./businessTrip');
const Graph = require('./graph');

describe('Testing businessTrip function', () => {
  let tripGraph = new Graph();
  let seattle = tripGraph.addVertex('seattle');
  let phoenix = tripGraph.addVertex('phoenix');
  let dallas = tripGraph.addVertex('dallas');
  let orlando = tripGraph.addVertex('orlando');
  let miami = tripGraph.addVertex('miami');
  let newYork = tripGraph.addVertex('new york');
  let yakima = tripGraph.addVertex('yakima');

  tripGraph.addDirectedEdge(seattle, phoenix, 100);
  tripGraph.addDirectedEdge(phoenix, dallas, 50);
  tripGraph.addDirectedEdge(seattle, newYork, 50);
  tripGraph.addDirectedEdge(dallas, orlando, 75);
  tripGraph.addDirectedEdge(orlando, miami, 25);
  tripGraph.addDirectedEdge(miami, dallas, 50);


  it('Should return true and total cost for a single direct vertex connection', () => {
    let results = businessTrip(tripGraph, [seattle, newYork]);
    expect(results).toStrictEqual([true, 50]);
  });

  it('Should return true and total cost of multi vertex trip', () => {
    let results = businessTrip(tripGraph, [seattle, phoenix, dallas, orlando, miami]);
    expect(results).toStrictEqual([true, 250]);
  });

  it('Should return false and 0 due to vertex without a connecting edge', () => {
    let results = businessTrip(tripGraph, [seattle, phoenix, miami]);
    expect(results).toStrictEqual([false, 0]);
  });

  it('Should return false and 0 due to unreachable island', () => {
    let results = businessTrip(tripGraph, [seattle, yakima]);
    expect(results).toStrictEqual([false, 0]);
  });
});
