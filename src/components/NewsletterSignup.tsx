// One place for the newsletter invitation used at the foot of the book pages and the
// bookstore. The wording is the home page's own. If the newsletter ever moves off
// Substack, change NEWSLETTER_URL here and every page follows.
export const NEWSLETTER_URL = 'https://substack.com/@miskwakimiwan'

export default function NewsletterSignup() {
  return (
    <section className="mood-shadow py-section-sm md:py-section border-t border-ash/20">
      <div className="section-narrow text-center">
        <h2 className="font-serif text-heading text-bone mb-4">
          Walk with me through the forest
        </h2>
        <p className="font-body text-body text-bone/60 mb-10 max-w-lg mx-auto">
          Writing on redemption, the body, and the practice of becoming more than what happened. Published on Substack as The Rainfall Newsletter.
        </p>
        <a
          href={NEWSLETTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 font-display text-sm md:text-base tracking-[0.25em] uppercase border border-glow text-glow transition-colors duration-300 hover:bg-glow/10 hover:text-sun"
        >
          Subscribe on Substack
        </a>
      </div>
    </section>
  )
}
