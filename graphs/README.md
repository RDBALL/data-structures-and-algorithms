# Graphs

This challenge begins with establishing a `Graph` class that can be used to solve additional challenges.

> A graph is a non-linear data structure consisting of vertices and edges. The vertices are sometimes also referred to as nodes and the edges are lines or arcs that connect any two nodes in the graph.

[Geeks for Geeks](https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/)

## Challenge

* Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

* **add node**
  * Arguments: value
  * Returns: The added node
  * Add a node to the graph
* **add edge**
  * Arguments: 2 nodes to be connected by the edge, weight (optional)
  * Returns: nothing
  * Adds a new edge between two nodes in the graph
  * If specified, assign a weight to the edge
  * Both nodes should already be in the Graph
* **get vertices**
  * Arguments: none
  * Returns all of the nodes in the graph as a collection (set, list, or similar)
  * Empty collection returned if there are no nodes
* **get neighbors**
  * Arguments: node
  * Returns a collection of edges connected to the given node
  * Include the weight of the connection in the returned collection
  * Empty collection returned if there are no nodes
* **size**
  * Arguments: none
  * Returns the total number of nodes in the graph
  * 0 if there are none

## Approach & Efficiency

For my approach I relied on the in class demo to be able to begin creating my graph class. Once I had the `Graph` methods implemented I began writing the required tests. After writing the tests i noticed that I had a few syntax errors in my `Graph` class that I only noticed as my tests were failing. I combed back over my `Graph` class, identified the syntax errors, and was able to get all required tests to pass.

The efficiency of the `Graph` methods depends on the `Map` object that the graph will be passed to. An Adjacency list will be faster than an adjacency matrix with an O(1) efficiency in adding a vertex and removing a vertex. An adjacency matrix will be faster when removing an edge and performing query requests with an O(1) efficiency. Both will share similar efficiency of O(1) when adding an edge.

## API

* `addVertex`
  * Arguments: value
  * Returns: The added node
  * Add a node to the graph
* `addDirectedEdge`
  * Arguments: 2 nodes to be connected by the edge, weight (optional)
  * Returns: nothing
  * Adds a new edge between two nodes in the graph
  * If specified, assign a weight to the edge
  * Both nodes should already be in the Graph
* `getVertices`
  * Arguments: none
  * Returns all of the nodes in the graph as a collection (set, list, or similar)
  * Empty collection returned if there are no nodes
* `getNeighbors`
  * Arguments: node
  * Returns a collection of edges connected to the given node
  * Include the weight of the connection in the returned collection  *  Empty collection returned if there are no nodes
* `getSize`
  * Arguments: none
  * Returns the total number of nodes in the graph
  * 0 if there are none
