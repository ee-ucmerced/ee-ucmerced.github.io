const includeTargets = Array.from(document.querySelectorAll("[data-include]"));

Promise.all(
  includeTargets.map(async (placeholder) => {
    const src = placeholder.getAttribute("data-include");
    if (!src) {
      return;
    }

    try {
      const response = await fetch(src);
      if (!response.ok) {
        throw new Error(`Failed to load ${src}: ${response.status}`);
      }

      const markup = await response.text();
      placeholder.outerHTML = markup;
    } catch (error) {
      console.error(error);
      placeholder.innerHTML = `<p>Unable to load component: ${src}</p>`;
    }
  })
).then(() => {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
