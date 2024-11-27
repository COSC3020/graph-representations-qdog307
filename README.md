# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

Runtime Complexity
The runtime complexity of the convertToAdjList function is $O(n^2)$, where $n$ is the number of vertices in the graph.
Dependency
The complexity depends solely on the number of vertices ($n$) and not on the number of edges ($e$).
Reasoning
The outer loop iterates over each vertex, running $n$ times. For each vertex, the inner loop iterates over all possible edges (columns in the adjacency matrix), running $n$ times per row. The function performs $n \times n = n^2$ iterations to process all elements of the adjacency matrix.
Conclusion
The runtime complexity is $O(n^2)$ because the function must traverse the entire adjacency matrix, regardless of the number of edges ($e$). This complexity arises from the size of the adjacency matrix, which is $n \times n$. While this approach works equally well for dense graphs, it is less efficient for sparse graphs, where $e \ll n^2$. For sparse graphs, alternative representations like edge lists or direct adjacency list construction would be more efficient.
Sources 
For this I used word doc to type up the read me, I looked at lecture slides.  I used Geeks for Geeks https://www.geeksforgeeks.org/graph-and-its-representations/ to get a better grasp on the graphs being used in these instances. 
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

