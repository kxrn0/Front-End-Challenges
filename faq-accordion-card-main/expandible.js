import compute_node_height from "./compute_height.js";

export default function create_expandible(supContent, infContent, id) {
    const expandible = document.createElement("div");
    const sup = document.createElement("div");
    const supInfo = document.createElement("div");
    const inf = document.createElement("div");
    const expand = document.createElement("input");

    expandible.append(sup);
    sup.append(supInfo);
    supInfo.append(supContent);
    sup.append(expand);
    expandible.append(inf);
    inf.append(infContent);

    infContent.classList.add("expandible-content");
    expandible.classList.add("expandible");
    sup.classList.add("expandible-sup");
    supInfo.classList.add("expandible-info");
    inf.classList.add("expandible-inf");
    expand.classList.add("expandible-toggle");

    expand.setAttribute("type", "checkbox");
    expand.setAttribute("id", id);

    expand.addEventListener("click", resize_expandible);

    infContent.style.top = `-${compute_node_height(infContent)}px`;

    function resize_expandible() {
        const height = window.getComputedStyle(infContent).height;

        if (expand.checked) {
            infContent.style.top = 0;
            inf.style.height = height;
        }
        else {
            infContent.style.top = `-${height}`;
            inf.style.height = 0;
        }
    }

    return expandible;
}