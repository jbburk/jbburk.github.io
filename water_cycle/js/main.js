// set current year in footer
const currentDate = new Date();
document.querySelector("#year").textContent = currentDate.getFullYear();

// set date last modified in footer
document.querySelector("#lastmod").textContent = document.lastModified;