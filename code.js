function convertToAdjList(adjMatrix) {
    if (!Array.isArray(adjMatrix) || adjMatrix.length === 0) {
        return []; 
    }

    const adjList = [];
    for (let i = 0; i < adjMatrix.length; i++) {
        const neighbors = [];
        for (let j = 0; j < adjMatrix[i].length; j++) {
            if (adjMatrix[i][j] === 1) {
                neighbors.push(j);
            }
        }
        adjList.push(neighbors);
    }
    return adjList;
}