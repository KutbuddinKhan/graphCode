// connected component Count
const connectedComponenetCount = (graph) => {
    const visited = new Set();
    let count = 0;
    for (let node in graph) {
        console.log(visited);
        
        if (explore(graph, node, visited) === true) {
            count += 1;
        }
    }

    return count;
};

const explore = (graph, current, visited) => {
    if (visited.has(String(current))) return false;

    visited.add(String(current));

    for (let neighbor of graph[current]) {
        explore(graph, neighbor, visited);
    }

    return true;
};

const graph = {
    0: [0, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}
result = connectedComponenetCount(graph)  // 2
console.log(result);



// const graph = {
//     3: [],
//     4: [6],
//     6: [4, 5, 7, 8],
//     8: [6],
//     7: [6],
//     5: [6],
//     1: [2],
//     2: [1]
// }

// Complexity
// n = # nodes
// e = # edges
// Time: O(e)
// space: O(n)