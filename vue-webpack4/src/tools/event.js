/**
 * 绑定事件监听
 * @param {Element} node 节点
 * @param {String} type 绑定的事件类型
 * @param {Function} handler 监听函数
 * @param {Boolean} isCatch 是否捕获
 */
export function on (node, type, handler, isCatch = false) {
  node.addEventListener(type, handler, isCatch);
}

/**
 * 移除事件监听
 * @param {Element} node 节点
 * @param {String} type 移除的事件类型
 * @param {Function} handler 移除的函数
 * @param {Boolean} isCatch 是否捕获
 */
export function off (node, type, handler, isCatch = false) {
  node.removeEventListener(type, handler, isCatch);
}
