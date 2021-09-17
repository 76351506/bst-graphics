/*
 * @Author: heinan
 * @Date: 2021-09-17 09:15:37
 * @Last Modified by: heinan
 * @Last Modified time: 2021-09-17 10:43:17
 */

class CreateNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  clear() {
    this.root = null;
  }
  insert(key) {
    const node = new CreateNode(key);
    if (this.root != null) {
      this.insertNode(this.root, node);
    } else {
      this.root = node;
    }
  }
  insertNode(root, node) {
    // 左子树
    if (root.key > node.key) {
      if (root.left != null) {
        this.insertNode(root.left, node);
      } else {
        root.left = node;
      }
    }
    // 右子树
    else {
      if (root.right != null) {
        this.insertNode(root.right, node);
      } else {
        root.right = node;
      }
    }
  }
  print() {
    console.log(this.root);
  }
  format() {
    if (this.root === null) return {};
    return this.bstFormat({}, this.root);
  }
  bstFormat(result, root) {
    result.key = root.key;
    if (root.left || root.right) {
      result.children = [];
    }
    if (root.left) {
      result.children[result.children.length] = this.bstFormat({}, root.left);
    }
    if (root.right) {
      result.children[result.children.length] = this.bstFormat({}, root.right);
    }
    return result;
  }
}

export default BinarySearchTree;
