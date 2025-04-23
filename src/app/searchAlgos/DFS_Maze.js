const maze = [
    ["#", " ", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", " ", "#", " ", "#", " ", " ", " ", " ", " ", "#"],
    ["#", " ", " ", " ", "#", " ", "#", "#", "#", " ", "#"],
    ["#", " ", "#", " ", " ", " ", " ", " ", "#", " ", "#"],
    ["#", " ", "#", "#", "#", "#", "#", " ", "#", " ", "#"],
    ["#", " ", " ", " ", " ", " ", " ", " ", "#", " ", "#"],
    ["#", "#", "#", "#", "#", " ", "#", " ", "#", " ", "#"],
    ["#", " ", " ", " ", "#", " ", "#", " ", " ", " ", "#"],
    ["#", " ", "#", " ", "#", " ", "#", "#", "#", " ", "#"],
    ["#", " ", " ", " ", " ", " ", " ", " ", " ", " ", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#", "#", "X", "#"]
];

function getStringPos(pos) {
  return `${pos[0]},${pos[1]}`
}

function getNeighbors(arr, x, y) {
  const neighbors = [];
  
  
  // up
  if (y >= 1 && arr[y - 1][x] !== "#") neighbors.push([y - 1,x]);
  
  //left
  if (x >= 1 && arr[y][x - 1] !== "#") neighbors.push([y,x - 1]);
  // down
  if (y < arr.length - 1 && arr[y + 1][x] !== "#") 
    neighbors.push([y + 1,x]);
  // right
  if (x < arr[y].length - 1 && arr[y][x + 1] !== "#") 
    neighbors.push([y,x + 1]);
  

  

  return neighbors;
}

function dfsTraverse(array) {
// function bfsTraverse(array)  {}
  const visited = new Set();
  const stack = [[0, 1]]; // y,x
  // const queue = [[0,0]]
  
  
  while (stack.length > 0) {
  // while (queue.length > 0) {}
    const pos = stack.pop();
    // const pos = queue.shift();
    console.log(pos);
    const [y, x] = pos;
    
    if (array[y][x] === "X") {
      break;
    };
    
    const strPos = getStringPos(pos);
    visited.add(strPos)

    const neighbors = getNeighbors(array, x, y);
    for (const neighbor of neighbors) {
      // checking if already visited
      const strNeighbor = getStringPos(neighbor)
      if (visited.has(strNeighbor)) continue; // Skip, don't want to visit again
      stack.push(neighbor);
      // queue.push(neighbor);
    }
  }

  return visited;
}

function printMaze(maze) {
  let mazeString = "";
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      mazeString += maze[i][j] + " "
    }
    mazeString += "\n";
  }
  console.log(mazeString);
}

const path = dfsTraverse(maze);
// const path = bfsTraverse(maze);z
console.log(path);

for (const pos of path) {
  const [y, x] = pos.split(",");
  maze[y][x] = ".";
}

printMaze(maze)