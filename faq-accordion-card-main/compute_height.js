export default function compute_node_height(node) {
    const clone = node.cloneNode(true);
    let height;

    clone.style.cssText = "position:fixed; top:-9999px; opacity:0";
    document.body.append(clone);
    height = clone.clientHeight;
    document.body.removeChild(clone);
    return height;
}