export function renderStars(rating: number) {
  const full = Math.floor(rating);
  const empty = 5 - full;

  return `<span><i class="fa-solid fa-star"></i></span>`.repeat(full) +
    `<span><i class="fa-regular fa-star"></i></span>`.repeat(empty);
}