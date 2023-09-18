// depth first traversal
const hasPath = (graph, src, dst) => {
    if (src === dst) return true;

    for(let neighbor of graph[src]){
       if (hasPath(graph, neighbor, dst) === true){
        return true;
       }
    }
    return false;
}


// breath first traversal
const breathHashPath = (graph, src, dst) => {
    const queue = [ src ];
    while(queue.length > 0){
        const current = queue.shift();
        
        if(current === dst) return true;

        for (let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
    return false;
}

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}

console.log("depth first traversal Hash Path:");
result = hasPath(graph, 'f', 'k'); // true
console.log(result);

console.log("breath first traversal Hash Path:");
result = breathHashPath(graph, 'f', 'k'); // true
console.log(result);

// Time complexity:
// Depth-first traversal: O(|V| + |E|), where |V| is the number of vertices and |E| is the number of edges.
// Breadth-first traversal: O(|V| + |E|), same as above.

// Space complexity:
// Depth-first traversal: O(|V|) due to the recursion stack.
// Breadth-first traversal: O(|V|) due to the queue.

// Worst Case:
// In the worst case, if there are many edges, both traversals can become slower, but their complexities remain the same.