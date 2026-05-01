# Miskwa Kimiwan Website

## Project Overview

This is a Next.js 14 website for miskwakimiwan.com, replacing an existing WordPress site. It deploys to Vercel.

**Author/Brand:** Miskwa Kimiwan (Peter Bernard) - author, healer, and teacher of spiritual healing and energy medicine.
**Tagline:** "Writing for the Soul's Journey"

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4
- **Fonts:** Cinzel (display/headings) + Lora/Playfair Display (subheadings) + Crimson Pro (body) via Google Fonts
- **Deployment:** Vercel
- **Domain:** miskwakimiwan.com

## Getting Started

```bash
npm install
# Place images in public/images/ per IMAGE-GUIDE.md
npm run dev
```

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout with nav + footer, metadata, fonts
    page.tsx            # Homepage - split-panel hero (shadow/light) + journey bar
    globals.css         # Design system: palette, typography, components
    about/page.tsx      # About page - parchment/shadow alternating
    red-rain/page.tsx   # Red Rain book page - shadow mood
    book-of-questions/page.tsx  # Book of Questions page - parchment/night alternating
    programs/page.tsx   # LTL program + private sessions
    contact/page.tsx    # Contact form + sidebar (newsletter, booking, social)
  components/
    Navigation.tsx      # Fixed nav with books dropdown, mobile menu, subtitle
    Footer.tsx          # Three-column footer
public/
  images/
    IMAGE-GUIDE.md      # Exact filenames and sources for all required images
```

## Design System

Based on the Miskwa Kimiwan brand board. Dark, sacred, atmospheric aesthetic. The site defaults to dark backgrounds. The overall feel is described as: spacious, timeless, sacred.

### Color Palette (defined in tailwind.config.ts)

**Shadow register (dark backgrounds):**
- `night` #0A0A0A - primary dark background
- `charcoal` #141414 - secondary dark
- `ash` #2A2420 - warm dark

**Bridge / warm accent:**
- `glow` #D4A853 - primary gold accent
- `sun` #C49A3C - secondary gold
- `golden-grass` #A07828 - deep gold
- `bridge` #B8864E - warm amber connector

**Light register:**
- `bone` #E8DFD0 - primary light text on dark backgrounds
- `mist` #F2EDE4 - secondary light
- `parchment` #F5F0E6 - light section backgrounds

**Ember / heartfire accent:**
- `ember` #8B2500 - deep red
- `heartfire` #C43A1A - bright red accent

**Cool accent (used sparingly):**
- `river` #5A8A8F
- `deep-teal` #3A6A70

### Typography (three font families)

1. **`font-display`** = Cinzel - Used for h1, h2, navigation items, labels, buttons. Always uppercase with wide letter-spacing. Monumental, inscribed quality.
2. **`font-serif`** = Lora / Playfair Display - Used for h3, h4, subheadings, pull quotes, book titles. Elegant and contemplative.
3. **`font-body`** = Crimson Pro - Used for all body text, paragraphs, descriptions. Warm, readable, timeless.

Display headings use positive letter-spacing (0.04em - 0.08em). Body text uses generous line-height (1.8).

### Page Moods (CSS classes in globals.css)

- `.mood-shadow` - Dark pages: night bg, bone text
- `.mood-threshold` - Bridge pages: ash bg, bone text
- `.mood-light` - Light pages: parchment bg, charcoal text

Most sections alternate between night and parchment backgrounds. The site is dark by default.

### Component Classes (globals.css)

- `.btn-primary` - Gold border, gold text on dark backgrounds
- `.btn-secondary` - Bone border on dark backgrounds
- `.btn-light` - Charcoal border on parchment backgrounds
- `.section-container` - Max-width with responsive padding
- `.section-narrow` - Prose-width container
- `.card-shadow` / `.card-light` - Book cards with bridge accent borders
- `.pull-quote` - Serif italic blockquote styling
- `.divider-warm` - Gradient gold line accent
- `.divider-cool` - Gradient river line accent
- `.divider-bridge` - Full-width amber gradient divider
- `.text-label` - Cinzel caps label style
- `.text-contemplative` - Serif italic subtitle style
- `.texture-overlay` - Subtle radial gradient for depth

### Design Rules

**Aesthetic:** Raw. Organic. Elemental. Ethereal. Real. The brand should feel earned, not decorative.

**Keep:** Textured darkness (not flat black), warm light with softness, symbolic figures and thresholds, quiet serif hierarchy, one strong accent at a time, generous negative space, spacious layouts.

**Avoid:** Glossy wellness cliches, overcrowded mystical symbols, neon colors, corporate minimalism without warmth, horror tropes, too many visual metaphors.

### Five-Stage Journey (visible on homepage)

1. Trauma & Shadow - Honoring the wounds
2. The Question - Opening to wisdom
3. Transformation - The alchemy within
4. Wisdom & Clarity - Walking with the soul
5. Wholeness - Living the answer

This appears as a visual element on the homepage between the philosophy quote and the about preview.

## Pages and Their Moods

| Page | Route | Key Sections |
|------|-------|-------------|
| Home | `/` | Split hero (shadow/parchment), philosophy quote, journey bar, about preview, books, programs preview, testimonials, newsletter |
| About | `/about` | Parchment hero + bio, night work section, shadow philosophy, parchment audience |
| Red Rain | `/red-rain` | Shadow hero + cover, night about section, shadow quote, parchment reader reflections |
| Book of Questions | `/book-of-questions` | Parchment hero + cover, night beginning, parchment quote, night inside the book, shadow twelve months, parchment who this is for, night order |
| Programs | `/programs` | Shadow LTL hero, night curriculum, parchment how it works, shadow dates + pricing, parchment private sessions |
| Contact | `/contact` | Parchment form (dark inputs) + night sidebar cards |

## Integrations

- **Newsletter:** Substack (URL TBD - currently placeholder). Search for `TODO: Replace # with Substack URL` in the codebase.
- **Booking:** Calendly at `https://calendly.com/the8thfire` - external link, no embed.
- **Book purchases:** Amazon, Chapters Indigo, Singing Pebble Books (Ottawa) - all external links.
- **Social:** Facebook `/MiskwaKimiwan`, Instagram `@miskwakimiwan`
- **Contact form:** Currently client-side only. Needs a backend handler. Recommended: Formspree (add action URL to form), or create a Next.js API route at `app/api/contact/route.ts`.

## Images

All images go in `public/images/`. See `public/images/IMAGE-GUIDE.md` for exact filenames required:

1. `red-rain-cover.png` - Red Rain front cover
2. `red-rain-bg.jpg` - Dark atmospheric art for hero background
3. `book-of-questions-cover.png` - Book of Questions front cover
4. `book-of-questions-bg.jpg` - River/sun art for hero background
5. `author-portrait.jpg` - Author photo
6. `all-healed.png` - Golden meditation/ancestral artwork
7. `ltl-program.png` - Living The Light program image

Source images are in the parent directory of this project. Map them by visual content to the correct filenames.

## TODOs

- [ ] Place images in `public/images/` per IMAGE-GUIDE.md
- [ ] Wire up contact form backend (Formspree or API route)
- [ ] Replace Substack placeholder with actual URL when ready
- [ ] Add favicon and OG image
- [ ] Connect custom domain on Vercel
- [ ] Set up analytics (Vercel Analytics or Plausible recommended over Google Analytics)

## Deployment

```bash
# Build locally to verify
npm run build

# Deploy via Vercel CLI
npx vercel

# Or push to GitHub and connect repo to Vercel dashboard
# Vercel auto-detects Next.js and deploys on push
```

### Custom Domain Setup

1. In Vercel dashboard: Settings > Domains > Add `miskwakimiwan.com`
2. Update DNS at your registrar:
   - A record: `76.76.21.21`
   - CNAME for www: `cname.vercel-dns.com`
3. Vercel provisions SSL automatically

## Brand Context

This site is the **Miskwa Kimiwan** author platform (Domain 1 in the brand architecture). It covers books, the author's philosophy, and programs. The teaching/certification ecosystem operates under **The 8th Fire** (the8thfire.com) as a separate but complementary brand. Programs currently live on this site but may migrate to the8thfire.com in the future.

The site does NOT serve: quick-fix seekers, wellness tourists, guru-worship, or performative spirituality. The copy is deliberately written to filter for the right audience.
