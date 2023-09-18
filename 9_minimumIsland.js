// Minimum island size
const minimumIslandSize = (grid) => {
    const visited = new Set();

    let minSize = Infinity;

    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; c < grid[0].length; c += 1) {
            const size = exploreSize(grid, r, c, visited); // TODO
            if(size > 0 && size < minSize){
                minSize = size;
            }
        }
    }

    return minSize;
};

const exploreSize = (grid, r, c, visited) => {
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;
    if (!rowInbounds || !colInbounds) return 0;

    if (grid[r][c] === 'W') return 0;

    const pos = r + ',' + c;
    if(visited.has(pos)) return 0;

    visited.add(pos);

    let size = 1;

    size += exploreSize(grid, r - 1, c, visited); // up
    size += exploreSize(grid, r + 1, c, visited); // down
    size += exploreSize(grid, r, c - 1, visited); // left
    size += exploreSize(grid, r, c + 1, visited); // right

    return size;
};


const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
]  // -> 1

result = minimumIslandSize(grid);
console.log(result);


