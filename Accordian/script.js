document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
  trigger.addEventListener("click", function () {
    const accordionItem = this.parentElement;
    const content = accordionItem.querySelector(".accordion-content");

    if (accordionItem.classList.contains("active")) {
      accordionItem.classList.remove("active");
      content.style.maxHeight = null;
    } else {
      accordionItem.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
