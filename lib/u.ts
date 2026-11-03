/** px of the 1920px design, scaled to the viewport width */
export const u = (n: number) => `calc(${n} * 100vw / 1920)`;

/** font size: scales like `u`, but never drops below its 1800px-wide size on notebook screens */
export const uf = (n: number) => `max(${u(n)}, ${(n * 0.9375).toFixed(1)}px)`;
