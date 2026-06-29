# Portfolio UI — TODO / Improvements

A backlog of UI improvements from a full review of the site. The headline
initiative is a move to a **black-and-white modern tone**.

**Design decisions (locked in):**
- **Tone:** Soft monochrome — off-white background, near-black ink, light-grey
  borders. Black is the accent (buttons / active states).
- **Imagery:** Photos and project screenshots stay **full color** — the only
  color on an otherwise monochrome canvas.

---

## A. Black & white modern theme (headline)

- [ ] A1. Define a neutral palette in `src/index.css` (replace the indigo accent
  and blue-tinted neutrals — see palette table below).
- [ ] A2. Swap both logo gradients (navbar + footer, `#033392 → #027add`) for
  solid black / mono.
- [ ] A3. Re-tone the floating navbar glass (`rgba(26, 89, 157, .3)`) and the
  nav-dot active color to neutral.
- [ ] A4. Hero CTAs → black / outline buttons with neutral shadows
  (drop the indigo glow `rgba(49, 59, 172, …)`).
- [ ] A5. Portfolio filters + Contact form/button (incl. hover `#2430af`) → black.
- [ ] A6. Tinted card backgrounds (`#fef4f5`, `#f2f7fb`, `#edf2f8`) → true greys.
- [ ] A7. Hero / mobile-menu background textures (`bgIMG.png`, `bgWhite.png`)
  carry color — replace with a neutral pattern or remove.
- [ ] A8. Keep imagery full color (confirm no stray filters once the theme lands).

### Proposed palette (soft monochrome)

| Token | Now (indigo/blue) | → Soft monochrome |
|---|---|---|
| `--secondary-color` (accent) | `#313bac` | `#111111` |
| `--primary-color` (page bg) | `#edf2f8` | `#fafafa` |
| `--black-color` | `#030303` | `#111111` |
| `--gray-color` (muted text) | `#6b7688` | `#71717a` |
| `--lightGray-color` (borders) | `#e4e4e4` | `#e5e5e5` |
| card tints `#fef4f5` / `#f2f7fb` | pink / blue | `#f4f4f5` (neutral grey) |
| logo gradients, floating nav, nav dots, buttons, filters, form | blue | black / neutral |

---

## B. Bugs / cleanup

- [ ] B9. **Fix the broken Footer CSS variables** — `src/components/Footer/Footer.scss`
  uses `var(--color-primary)` / `var(--color-bg)`, which don't exist (real names
  are `--primary-color`, etc.), so the footer background and copyright color
  never apply.
- [ ] B10. Remove the dead `src/container/Experience/Experience.scss` (~125 lines
  styling `.app__experience-category/-skill` classes that the timeline-based
  `Experience.jsx` never renders). Also drop the commented-out Testimonial
  wiring / `Testimonial.scss` if it isn't returning.
- [ ] B11. Replace remaining hardcoded hex with CSS variables
  (`NavigationDots.jsx` inline `#313BAC`, `Contact.scss` `#2430af`).

---

## C. Layout / spacing

- [ ] C12. Portfolio cards are `width: 40%` + margins (the same "wasted desktop
  space" the About grid had) → convert to a responsive grid; fix the overlapping
  floating tag.
- [ ] C13. Theme the Experience `VerticalTimeline` to match the new tone
  (currently the library default look + inline white).
- [ ] C14. Contact: tidy the form container and add `<label>`s.

---

## D. Polish & accessibility

- [ ] D15. Unify card radius / shadow / padding into shared tokens; settle on one
  consistent button style across hero, contact, and portfolio filters.
- [ ] D16. Add `aria-current` to the active nav item, labels / `aria-label` to
  form inputs, and verify muted-grey text contrast (WCAG AA).
- [ ] D17. Ensure the hamburger menu works below 500px (today it only shows
  between 500–800px; under 500px there's only the floating navbar).

---

## Done

- [x] Hero: fix profile photo disappearing below 1200px; balance paddings;
  real CTA buttons; tech circles clear the floating navbar.
- [x] Global: `scroll-padding-top` so section headings clear the fixed navbar.
- [x] About: full-width 2×2 card grid on desktop.
- [x] Skills: compact horizontal rows (far less vertical space on desktop).
- [x] Remove the section hover animations from the About / Skills redesign.
