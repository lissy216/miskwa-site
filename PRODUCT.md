# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: readers who find Miskwa Kimiwan (Peter Bernard) through a book, a
podcast, or word of mouth, and want to know whether the work is for them.
Often arriving in difficulty — grief, trauma, a stuck pattern — frequently on
a phone, frequently late at night. Their job is to decide whether to trust
this writer enough to read him.

Secondary, confirmed and served by real surfaces:
- Booksellers and wholesale buyers ordering trade quantities.
- Media and event bookers looking for a bio, credentials, and contact.

No longer a primary audience: prospective students of the teaching programs.
See Capabilities and Constraints.

## Product Purpose

The author platform for Miskwa Kimiwan: the books, the writing, and the
philosophy behind them. Success is a reader who understands what the work is,
believes the author has actually been where he writes from, and either buys a
book or subscribes to keep reading.

The site deliberately narrows its audience rather than widening it. It does
not serve quick-fix seekers, wellness tourists, guru-worship, or performative
spirituality, and the copy is written to filter them out.

## Positioning

The guide has bled too. The work is written from inside the experience rather
than about it, and it refuses the teacher-above-student posture the category
runs on — "No masters here. No pedestals. No gurus." The stated aim is
sovereignty rather than dependency. A competitor cannot copy this claim
without lying about their own history.

## Operating Context

Readers reach the site from a book jacket, a podcast mention, a Substack post,
or social. They leave for a retailer (Amazon, Chapters Indigo, Singing Pebble
Books) to buy, or to Substack to keep reading. Booksellers arrive needing trade
terms. The site is a decision surface, not a store: no transaction completes on
it.

## Capabilities and Constraints

- Next.js 16 (App Router), React 19, Tailwind 4, TypeScript, deployed on Vercel.
- Four titles: The Re-Membering (forthcoming), The Signal, Red Rain: A Soul
  Shattered, The Book of Questions. Book sales are external retailer links.
- Contact form delivers via the Resend HTTPS API through `/api/contact`.
  Vercel cannot do outbound SMTP.
- **Programs migrate to the8thfire.com.** Living The Light and the teaching
  and certification ecosystem move to the sibling brand. Program surfaces on
  this site become pointers, not sales pages, and should be kept structurally
  separable so the move is cheap.
- Living The Light is delivered **fully online, live over video**. The
  specific platform is **undecided** and must not be invented.
- Newsletter is Substack. Private-session booking is Calendly, currently on a
  `calendly.com/the8thfire` URL that is visible to visitors — a cross-brand
  leak flagged for resolution, not yet decided.

## Brand Commitments

- Name and pen name: Miskwa Kimiwan (Anishinaabemowin, "red rain"). Legal name
  Peter Bernard. Tagline: "Writing for the Soul's Journey."
- Voice: plain, unhurried, unsentimental about pain. Filters rather than sells.
- **No cultural iconography.** Binding, confirmed 2026-09-06. The site carries
  no symbolic or ceremonial imagery. The current triquetra, Eye of Providence,
  spiral, mandala and lotus-posture figure are to be removed rather than
  replaced with more culturally accurate symbols. Refusing to decorate is the
  position, and it is consistent with refusing the guru posture.
- Brand silo: this is the Miskwa Kimiwan author platform. The 8th Fire
  (the8thfire.com) is a separate brand and its voice must not bleed in.

## Evidence on Hand

Real: four book covers and an author portrait in `public/images/`; published
retailer listings; reader reflections quoted on `/red-rain`; a Substack.

Absent, and not to be fabricated: graduate testimonials, press quotes, sales
figures, awards, cohort sizes, certification claims, and the video platform
for Living The Light. The author portrait is a placeholder and needs
replacing. "The Quiet Fire — an ICBCH-aligned hypnosis certification" is named
on `/about` and has no page; it is unverified here.

## Product Principles

1. Filter, don't funnel. Narrowing the audience is the proof of the claim.
2. Say the number. Where a fact is uncomfortable — a price, a limitation, a
   book that isn't out yet — publish it rather than routing to a "discovery
   call."
3. Never perform authority. No pedestal, no credentials-first framing, and no
   borrowed sacred imagery standing in for earned trust.
4. The reader arrives hurt. Entry to the most graphic material should be
   gentle, and no path should end in silence.
5. One brand per surface. Miskwa Kimiwan is the author; The 8th Fire teaches.

## Accessibility & Inclusion

Readers frequently arrive on phones, at night, in distress. WCAG AA contrast
is a floor, not an aspiration — three primary CTAs shipped at 1.11:1 before
2026-09-06. Motion must respect `prefers-reduced-motion`. Keyboard and screen
reader users must reach every book. Graphic trauma content needs a gentle
on-ramp.
