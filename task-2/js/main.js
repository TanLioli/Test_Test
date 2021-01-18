window.addEventListener('DOMContentLoaded', () => {

  const url = "http://любой_домен/filter?size=M&color=2,4&manufacturer=aaa,eee";

  let filter = url.split("?")[1].split("&");
  let size, color, manufacture, sales;
  filter.forEach(el => {
    if (el.includes("size")) {
      size = el.split("=")[1].split(",");
    }
    if (el.includes("color")) {
      color = el.split("=")[1].split(",");
    }
    if (el.includes("manufacture")) {
      manufacture = el.split("=")[1].split(",");
    }
    if (el.includes("распродажа")) {
      sales = el.split("=")[1].split(",");
    }
  });

  if (size && size.length) {
    let name = "size" + size[0];
    document.getElementById(name).checked = true;
  }
  if (color && color.length) {
    color.forEach((item, i) => {
      let name = "color" + color[i];
      document.getElementById(name).checked = true;
    });
  }
  if (manufacture && manufacture.length) {
    manufacture.forEach((item, i) => {
      document.getElementById(item).selected = true;
    });
  }
  if (sales && sales.length) {
    let name = "sales" + sales[0];
    document.getElementById(name).checked = true;
  }
});
