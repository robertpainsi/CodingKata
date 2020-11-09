export default function loop_size(node) {
  let knownNodes = [];
  let currentNode = node;
  while (!knownNodes.includes(currentNode)) {
    knownNodes.push(currentNode);
    currentNode = currentNode.getNext();
  }

  return knownNodes.length - knownNodes.indexOf(currentNode);
}
