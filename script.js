

accordions.forEach((current) => {
  current.addEventListener("toggle", () => {
    if (!current.open) return;

    accordions.forEach((other) => {
      if (other !== current) other.open = false;
    });
  });
});