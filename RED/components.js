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

  // Handle deep links after components load while keeping hashes out of the URL
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }

  // Intercept in-page anchor clicks to scroll without adding hashes to the URL
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") {
        return;
      }

      const target = document.querySelector(hash);
      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
