# JoshDaws.com

Single-page personal brand hub. Static HTML, no build step, deployed to Vercel.

## Design Context

### Users
People encountering Josh Daws for the first time, or existing followers looking for his properties. They arrive from X, YouTube, podcast appearances, or word of mouth. The job is simple: understand who Josh is in 3 seconds and find the right link to go deeper.

### Brand Personality
**Bold, grounded, sharp.** Confident voice rooted in conviction, intellectually precise. Not performative, not flashy. The design should feel like a man who knows what he stands for.

### Emotional Goal
"I want to hear more." The site should spark curiosity. Enough presence and credibility to pull visitors into the content, not enough to overwhelm or lecture. Intrigue over information.

### Aesthetic Direction
- **Dark, clean, no fluff.** Deep blacks, warm off-white text, gold accent. Diagonal stripe texture from the Canva banner carried through as a subtle CSS motif.
- **Not generic.** No Linktree templates, no cookie-cutter creator pages. This should feel designed, not generated.
- **Typography:** Raleway 800 for the name (Gotham substitute), Open Sans for tagline, Inter for body/cards. Matches the Canva banner aesthetic.
- **Theme:** Dark mode only. No light mode.

### Design Principles
1. **Weight without noise.** Bold typography, strong hierarchy, but minimal elements. Every pixel earns its place.
2. **Gold is sacred.** The gold accent (#c8a86e) is the signature. Use it for emphasis, interaction states, and the divider. Never dilute it with other accent colors.
3. **Cards over lists.** Links presented as tactile cards with icons, not flat text lists. Two tiers: primary (large, content platforms) and secondary (inline icon+title, project descriptions below).
4. **Let the content speak.** No hero images, no carousels, no animations beyond subtle hover states. The name, tagline, and links are the entire message.
5. **Accessible by default.** WCAG AA contrast, semantic HTML, keyboard navigable. Standard best practices, no special requirements.

## Design System

- **Palette:** Deep black (#0d0d0d) background, warm off-white (#f0ece4) text, gold (#c8a86e) accent
- **Typography:** Raleway 800 (name), Open Sans 400 (tagline), Inter 400-600 (body/cards)
- **Motif:** Diagonal stripe texture via CSS repeating-linear-gradient, subtle gold radial glow at top
- **Cards:** Two tiers. Primary: icon stacked above title/subtitle. Secondary: icon+title inline, description on its own line below.
- **Responsive:** 2-column grid on desktop, single-column stacked on mobile
- **Footer:** "Soli Deo Gloria"

## Link Cards

| Card | URL | Tier |
|------|-----|------|
| YouTube | youtube.com/@JoshDawsTV | Primary |
| X / Twitter | x.com/JoshDaws | Primary |
| Substack | joshdaws.substack.com | Primary |
| Taking Dominion | taking-dominion-web.vercel.app | Primary |
| Daws Brothers | youtube.com/@dawsbrothers | Secondary |
| Homeschool Happy | homeschoolhappy.com | Secondary |
| The Yum Book | theyumbook.com | Secondary |
| Scorched Earth | scorched-earth.vercel.app | Secondary |

## Deploy

Vercel static site. Domain: joshdaws.com. DNS in Vercel. GitHub repo: joshdaws/joshdaws.com.
