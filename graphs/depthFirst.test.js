const Graph = require('./graph');

describe('Testing the depthFirst method for the Graph class', () => {

  test('Should return a new set of vertices using the depthFirst method', () => {
    let graph = new Graph();
    let a = graph.addVertex(1);
    let b = graph.addVertex(2);
    let c = graph.addVertex(3);
    let d = graph.addVertex(4);
    graph.addDirectedEdge(a, b);
    graph.addDirectedEdge(b, c);
    graph.addDirectedEdge(c, d);
    let results = graph.depthFirst(a);
    expect(results.size).toBe(4);
  });

  test('Should return only unique vertices even when multiple edges originate from a single vertex', () => {
    let graph = new Graph();
    let a = graph.addVertex(1);
    let b = graph.addVertex(2);
    let c = graph.addVertex(3);
    let d = graph.addVertex(4);
    graph.addDirectedEdge(a, b);
    graph.addDirectedEdge(b, c);
    graph.addDirectedEdge(c, d);
    graph.addDirectedEdge(c, a);
    graph.addDirectedEdge(d, a);

    let results = graph.depthFirst(a);
    expect(results.size).toBe(4);
  });

  test('Should return vertices in the order they are visited', () => {
    let graph = new Graph();
    let a = graph.addVertex('A');
    let b = graph.addVertex('B');
    let c = graph.addVertex('C');
    let d = graph.addVertex('D');
    let e = graph.addVertex('E');
    let f = graph.addVertex('F');
    let g = graph.addVertex('G');
    let h = graph.addVertex('H');
    graph.addDirectedEdge(a, b);
    graph.addDirectedEdge(b, c);
    graph.addDirectedEdge(c, g);
    graph.addDirectedEdge(g, d);
    graph.addDirectedEdge(d, e);
    graph.addDirectedEdge(e, h);
    graph.addDirectedEdge(h, f);

    let results = graph.depthFirst(a);
    let values = Array.from(results);
    expect(values).toStrictEqual([a, b, c, g, d, e, h, f]);
  });
});
