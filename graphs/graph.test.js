'use strict';

const Graph = require('./graph');

let testGraph = new Graph();
let firstVertex;
let firstNeighbor;
let secondNeighbor;
let secondVertex;

describe('Testing the graph class', () => {

  test('The proper size is returned, representing the number of nodes in the graph', () => {
    expect(testGraph.getSize()).toBe(null);
  });

  it('Vertex can be successfully added to the graph', () => {
    firstVertex = testGraph.addVertex(10);

    expect(testGraph.getVertices()).toContain(firstVertex);
  });

  test('A graph with only one node and edge can be properly returned', () => {
    expect(testGraph.getSize()).toBe(1);
  });

  it('An edge can be successfully added to the graph', () => {
    firstNeighbor = testGraph.addVertex(20);

    testGraph.addDirectedEdge(firstVertex, firstNeighbor, 1);
    const [firstNeighborEdge] = testGraph.getNeighbors(firstVertex);

    expect(firstNeighborEdge.vertex).toStrictEqual(firstNeighbor);
  });

  test('The size method returns its correct size with only 2 vertices and 1 edge', () => {
    expect(testGraph.getSize()).toBe(2);
  });

  it('Can retrieve a collection of vertices', () => {
    expect(testGraph.getVertices()).toContain(firstVertex, firstNeighbor);
  });

  it('All appropriate neighbors can be retrieved from the graph', () => {
    secondNeighbor = testGraph.addVertex(30);
    testGraph.addDirectedEdge(firstVertex, secondNeighbor, 2);

    const [firstNeighborEdge, secondNeighborEdge] = testGraph.getNeighbors(firstVertex);

    expect(firstNeighborEdge.vertex).toStrictEqual(firstNeighbor);
    expect(secondNeighborEdge.vertex).toStrictEqual(secondNeighbor);
  });

  test('Neighbors are returned with the weight between nodes included', () => {
    const [firstNeighborEdge] = testGraph.getNeighbors(firstVertex);

    expect(firstNeighborEdge.weight).toBe(1);
  });

  test('The size method returns its correct size with multiple edges and vertices', () => {
    secondVertex = testGraph.addVertex(45);
    testGraph.addDirectedEdge(secondNeighbor, secondVertex, 10);
    expect(testGraph.getSize()).toBe(4);
  });
});
