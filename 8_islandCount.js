// island count
const islandCount = (grid) => {
    const visited = new Set();

    let count = 0;
    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; c < grid[0].length; c += 1) {
            if (explore(grid, r, c, visited) === true){
                count += 1; 
            }
        }
    }
    return count;
};

// r = 12
// c = 4
// pos = "12,4"

// r = 1
// c = 4
// pos = "1,4"

const explore = (grid, r, c, visited) => {
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;
    if(!rowInbounds || !colInbounds) return false;

    if(grid[r][c] === 'W') return false;

    const pos = r + "," + c;
    if(visited.has(pos)) return false;
    visited.add(pos);

    explore(grid, r - 1, c, visited);  // up
    explore(grid, r + 1, c, visited);  // down
    explore(grid, r, c - 1, visited);  // left
    explore(grid, r, c + 1, visited);  // right

    return true;
};

// const s = new Set();
// s.add('1', '3');
// console.log(s.has('1', '3'));


const grid = [
    ['W', 'L', 'W', 'W', 'L'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
]  // -> 4

result = islandCount(grid);
console.log(result);



