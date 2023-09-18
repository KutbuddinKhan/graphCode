// UnDirected graph
const UnDirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    // console.log(graph);

    // Depth first
    return hasPath(graph, nodeA, nodeB, new Set());
    
}

const hasPath = (graph, src, dst, visited) => {
    if (src === dst) return true;
    if(visited.has(src)) return false;

    visited.add(src);  // Mark the current node as visited

    for (let neighbor of graph[src]){
        if (hasPath(graph, neighbor, dst, visited)){
            return true;
        }
    }
    return false;
}

const buildGraph = (edges) => {
    const graph = {};

    for (let edge of edges){
        const[ a, b ] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]
result = UnDirectedPath(edges,'j','m'); // true
console.log(result);


// Time complextity
// n = # nodes 
// e = # edges
// Time: O(e)
// Space complextiy: O(n)


// Edges
// edges: [
//     [i, j],
//     [k, i],
//     [m, k],
//     [k, l],
//     [o, n]
// ]

// Adjacency List
// graph: {
//     i: [j, k],
//     j: [i],
//     k: [i, m, l],
//     m: [k],
//     l: [k],
//     o: [n],
//     n: [o]
// }