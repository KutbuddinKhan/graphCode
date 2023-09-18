
const depthFirstPrint = (graph, source) => {
    const stack = [source];

    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);

        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }

};

// Recursion method
const depthFirstRecursion = (graph, source) =>{
    if (source < 0 || source === 1){
        return;
    }
    console.log(source);
    for(let neighbor of graph[source]){
        depthFirstRecursion(graph, neighbor);
    }
}


const graph = {
    // a: ['c', 'b'],
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

const graph2 = {
    a: ['c']
}

// it follow stack method -> LIFO
console.log("Using iterative method:");
depthFirstPrint(graph, 'a');  // abdfce

console.log("Using Recursion:");
depthFirstRecursion(graph, 'a')
