/*
 * @Author: heinan
 * @Date: 2021-09-17 10:27:00
 * @Last Modified by: heinan
 * @Last Modified time: 2021-09-17 11:00:01
 */

const defaultOptions = {
  container: "wraper",
  width: 800,
  height: 500,
  linkCenter: true,
  modes: {
    default: [
      {
        type: "collapse-expand",
        onChange: (item, collapsed) => {
          console.log(item);
          //   const data = item.getModel();
          //   data.collapsed = collapsed;
          return true;
        },
      },
      "drag-canvas",
      "zoom-canvas",
    ],
  },
  defaultNode: {
    size: 50,
  },
  defaultEdge: {
    type: "line",
  },
  layout: {
    type: "compactBox",
    direction: "TB",
    getId: function getId(d) {
      return d.id;
    },
    getHeight: function getHeight() {
      return 16;
    },
    getWidth: function getWidth() {
      return 100;
    },
    getVGap: function getVGap() {
      return 50;
    },
    getHGap: function getHGap() {
      return 20;
    },
  },
};
class Tree {
  constructor() {
    this.container = document.getElementById("wraper");
    this.width = this.container.width || 800;
    this.height = this.container.height || 500;
    this.graph = null;
    this.init();
  }
  clear() {
    this.graph.clear();
  }
  addEvent() {
    window.onresize = () => {
      console.log(123);
      if (!this.graph || this.graph.get("destroyed")) return;
      if (!this.container || !this.container.width || !this.container.height)
        return;
      this.graph.changeSize(this.container.width, this.container.height);
    };
    this.graph.fitView();
  }
  nodeStyle() {
    this.graph.node(function (node) {
      return {
        label: node.key,
      };
    });
  }
  init(opts = {}) {
    this.graph = new G6.TreeGraph(Object.assign(defaultOptions, opts));
    this.nodeStyle();
    this.addEvent();
  }
  render(data) {
    this.data = data;
    this.clear();
    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();
  }
}

export default Tree;
