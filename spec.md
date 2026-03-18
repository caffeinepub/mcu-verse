# MCU Verse

## Current State
Fully built MCU fan site with hero section, about MCU, developer spotlight (showing 'Alex Marvel Fan'), movie grid with gradient placeholders, official links, feedback form, and footer with copyright. Movie cards use a film-icon gradient placeholder instead of real poster images.

## Requested Changes (Diff)

### Add
- Disclaimer & Credits section between the feedback section and the footer
  - Fan disclaimer: site is not affiliated with Marvel or Sony
  - Data sources credit: movie information sourced from official Marvel and TMDB
  - Credits to site creator Piyush Patil
  - Trademark acknowledgements for Marvel and Sony
- Official movie poster thumbnails on movie cards using TMDB image CDN (`https://image.tmdb.org/t/p/w342/[poster_path]`) with onError fallback to existing gradient placeholder

### Modify
- Developer name: change "Alex Marvel Fan" from all occurrences to "Piyush Patil"
- Developer alt text and bio to reference Piyush Patil
- Movie card poster area: show actual `<img>` tag with TMDB poster URL, fallback to gradient+icon if image fails
- Add `posterUrl` field to MCUMovie interface and movies data

### Remove
- Nothing removed

## Implementation Plan
1. Update `src/frontend/src/data/movies.ts`:
   - Add `posterUrl?: string` to MCUMovie interface
   - Add TMDB poster URL `https://image.tmdb.org/t/p/w342/[path]` for each film
2. Update `src/frontend/src/App.tsx`:
   - Fix developer name "Alex Marvel Fan" -> "Piyush Patil" and update bio
   - Update MovieCard to use `<img src={movie.posterUrl}>` with onError fallback to current gradient+icon
   - Add Disclaimer & Credits section just before the footer
