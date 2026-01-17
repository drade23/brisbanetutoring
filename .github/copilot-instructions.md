# Internal Linking Strategy & Best Practices

## Why Add Internal Links Early?
Google discovers and understands pages through links, not just sitemaps. Internal links:
- Help Google crawl and index new pages faster
- Signal that a page is important (pillar content)
- Provide context about what the page is about
- There is no downside to adding them early

**Best practice:** Add internal links as soon as a page is live.

## Internal Link Timing
- Add 2–3 strong internal links from existing pages to a new important page (e.g., the comparison page) as soon as it is published
- Add a contextual link from the homepage if relevant
- Add links from category/hub pages and any related articles
- Every new article should contain 1 contextual link to the comparison page, using natural, varied anchor text

## Anchor Text Guidelines
- Do not repeat the exact same anchor every time
- Do not force keywords
- Use descriptive, natural language that matches the surrounding sentence intent
- Example anchors: "compare local tutoring companies", "local tutoring companies in North Brisbane", "tutoring company comparison", "choosing a tutoring company"

## Placement for Maximum Impact
- Place links within the first 2–3 paragraphs, in a "Related resources" or "Helpful guides" section, or inside FAQs
- Avoid footer-only or sitewide keyword-stuffed nav links

## How Many Links?
- For a new local site: 3–5 internal links is good, 6–10 is strong, more than 15 is unnecessary early on
- Quality and context matter more than quantity

## Internal Link Hierarchy (Hub & Spoke Model)
**Homepage**
	↓
**Comparison Page (Pillar)**
	↔
**Supporting Articles (Spokes)**

This structure signals to Google that the site is about helping parents choose tutoring services locally.

## What NOT to Do
- Do not link to the comparison page from every page immediately
- Do not use identical anchor text everywhere
- Do not bury the link in footers only
- Do not change URLs, <title>, or H1s once linked (let Google stabilise the page)

## Action Plan
**Today:**
- Add 2–3 internal links from existing pages to the comparison page

**Next 30–60 days:**
- Add links naturally as you publish new articles

**After rankings start:**
- Consider a homepage feature block or "Popular guide" link

**Ongoing:**
- Review anchor text variety and internal linking map
- Add hub sections and related links as the site grows
# Copilot Instructions for North Brisbane & Moreton Bay Education Guide

## Project Overview
Jekyll-powered static website providing impartial education guidance for parents in North Brisbane & Moreton Bay. Hosted on GitHub Pages with custom domain. Audience: Parents seeking school, NAPLAN, and tutoring insights.

## Architecture
- **Jekyll site structure**: Uses layouts, includes, and Markdown/HTML content files
- **_layouts/**: Page templates (e.g., default.html)
- **_includes/**: Reusable partials (e.g., head.html, header.html)
- **Content files**: Pages use front matter and can be .html or .md
- **Central stylesheet**: All CSS is in [styles.css](/styles.css) at the repo root (not in .github/)
- **Jekyll build process**: Site is built with Jekyll (locally or by GitHub Pages)
- **Hosting**: GitHub Pages with CNAME for custom domain
- **Minimal JavaScript for search**: Client-side search is enabled using [search.html](/search.html), [search.js](/search.js), and [search-index.js](/search-index.js). No external libraries or frameworks.

## Key Patterns
- **Front matter**: All content pages start with YAML front matter (layout, title, description, etc.)
- **Jekyll templating**: Use Liquid tags for includes, variables, and logic
- **CSS Variables**: Use `:root` defined properties in [styles.css](/styles.css) for theming (e.g., --primary: #2563eb)
- **Responsive Typography**: Employ `clamp()` for fluid sizes in [styles.css](/styles.css)
- **Grid Layout**: Features use CSS Grid in [styles.css](/styles.css) with `repeat(auto-fit, minmax(220px, 1fr))` for responsive cards
- **System Fonts**: Font stack defined in [styles.css](/styles.css)

## Conventions
- **External Styles**: All CSS in [styles.css](/styles.css) at the repo root; layouts and includes link to this stylesheet in `<head>`
- **Semantic Classes**: Sections use `.hero`, `.features`, `.cta`; CTAs use `.button`
- **Minimal JavaScript**: Only for client-side search (see below); otherwise, interactivity via links only
- **Minimal Meta Tags**: Includes canonical URL, robots, description for SEO (in head.html include)
- **Structured Data & Social Tags**: head.html includes JSON-LD, Open Graph, and Twitter Card tags using Jekyll variables

## Workflows
- **Local Development**: Edit content, includes, layouts, and [styles.css](/styles.css) in VS Code. Preview with `jekyll serve --livereload` at `http://127.0.0.1:4000` (auto-refreshes on save)
- **Deployment**: Commit to main branch; GitHub Pages auto-builds and deploys
- **No Direct Edits**: Avoid editing files on GitHub; use local workflow
- **No Testing**: Visual browser inspection; no automated tests or linters
## Search Functionality

The site uses a simple, privacy-friendly client-side search:
- **[search.html](/search.html)**: Dedicated search results page. Users are redirected here with their query (e.g., `search.html?q=maths`).
- **[search.js](/search.js)**: Handles search logic, filtering, and highlighting results on the client side.
- **[search-index.js](/search-index.js)**: Contains a manually maintained array of article metadata (title, URL, summary) for searching.

**How it works:**
- All search boxes in the site header and articles submit to `search.html?q=your+query`.
- The search page loads the index and script, displays matching results, and highlights search terms.
- No data is sent to external services; all search is local and privacy-friendly.

**To add new articles to search:**
- Update `search-index.js` with new entries (title, url, summary).

**Accessibility:**
- Search form uses proper ARIA roles and labels.

**No other JavaScript is permitted** except for this search functionality.

## Site Positioning Principles
- Neutral, calm, non-commercial tone
- No brand names on homepage
- No popups, banners, or aggressive CTAs
- Trust first, clarity second, conversion last
- Editorial > marketing

## Current Structure
- **Homepage**: Hero section, resources grid (Learning Tips, Local Schools, etc.), subtle CTA with placeholder affiliate link, footer with neutrality disclaimer
- **Planned**: Hub pages (e.g., `/guides.html`) with article grids; individual article pages addressing parent questions

## Images
- Style: Natural light, realistic settings, neutral palette
- Avoid: Staged photos, logos, uniforms, marketing imagery
- Purpose: Supportive, not decorative (none implemented yet)

## Integration Points
- **GitHub Pages**: Auto-deployment from repo root; CNAME points to `northbrisbaneeducationguide.com.au`; HTTPS enforced
- **Custom Domain**: Managed via VentraIP; DNS A records to GitHub IPs
- **Footer**: Reinforces neutrality ("General guidance only")
- **External Links**: Placeholder affiliate link in CTA section

## Conversion Funnel Strategy
**Key insight**: Build trust through educational content → funnel to comparison resource → subtle positioning of own business

**Primary conversion page**: "How to Choose a Tutor in North Brisbane & Moreton Bay" (internal title: choose-tutor-comparison.html or similar)

**What makes this work:**
- Factual, comprehensive comparison of 10–15 local tutoring providers
- Evaluated on key criteria: qualified teachers only, no student tutors, years in industry, personalized learning approach, pricing models, flexibility, trial sessions, communication with parents, location/online options
- Naturally showcases company strengths without sales language
- Updated periodically to maintain credibility

**Internal linking strategy** (drives traffic to comparison page):
1. "Does tutoring really help my child?" (Choosing Support hub) → links to comparison as next step in decision-making
2. "When should I get a tutor?" (Choosing Support hub) → transitions to "now that you've decided, here's how to evaluate"
3. "How do I know if my child needs extra learning support?" (Choosing Support hub) → after identifying need, comparison helps with provider selection
4. Future articles on tutoring types/costs/formats → all converge on comparison page as decision-making resource

**Tone & neutrality:**
- Comparison page remains educational and impartial
- Honest about competitors' strengths and limitations
- Own company positioned through data (qualified staff, track record, methodology) not claims
- No direct CTA linking to business—readers self-select based on fit

## Out of Scope
 - Analytics, SEO tooling, CMS/Jekyll, comments, lead capture, paid adverts, social media pages, or any paid promotion
 - The site will be found only via organic search (Google, Bing, etc.), so keyword strategy is important for discoverability
 - No official social media pages or paid advertising campaigns will be created or managed for the site
 - Users may share the site to their own social media feeds using share links/buttons, but the site itself will not maintain any social media presence

## Keyword Strategy – Parent-Intent Research
**Approach**: Question-driven, not volume-chasing. Focus on how parents phrase concerns, confusion, and questions. Avoids marketing-style SEO and commercial intent optimization.

**Note:** Since the site will be found only via organic search and not promoted through paid ads or social media pages, keyword selection and on-page SEO are critical for visibility. Content should be optimized for real parent queries and natural sharing.

### 1. Guides — General Parent Questions
**Informational / Support Intent:**
- How can I support my child's learning at home?
- What is normal homework for primary/high school kids?
- How should I talk to teachers about my child's progress?
- What does good parent engagement look like in school?
- How do I help my child with reading and maths if they're struggling?
- When should I contact the school about my child's learning?

**Reassurance / Understanding Intent:**
- Is my child behind for their age level?
- What should I expect academically at each year level?
- How do I talk to my child about school stress?

**Practical How-To:**
- What to ask at parent-teacher interviews
- How to set a homework routine that works
- Why teachers assess learning in different ways than tests

### 2. Year Levels — Stage-Specific Parent Queries
**Primary School:**
- What reading skills should my Year 2 child have?
- Is Year 3 maths harder than Year 2?
- What does Year 5 learn in writing and maths?

**Secondary School:**
- What changes academic expectations in Year 7?
- How much homework is normal in Year 9?
- Is Year 10 core to future pathways?

**Cross-Stage:**
- How do school expectations change between primary and high school?
- What growth should I see in learning year-to-year?

### 3. NAPLAN — Real Parent Concerns (Trust-Building Focus)
- What is NAPLAN and how does it work?
- Does NAPLAN matter for my child's future?
- Should I prepare my child for NAPLAN?
- How do I understand my child's NAPLAN results?
- Can NAPLAN results be wrong?
- Is NAPLAN stressful for kids?
- Does NAPLAN affect high school entry?
- When is NAPLAN this year in Queensland?
- What do Queensland NAPLAN results mean for my school?

### 4. Choosing Support — Decision-Making Queries
**Support Need Assessment:**
- Does tutoring really help my child?
- How do I know if my child needs extra learning support?
- What alternatives to tutoring are there?
- How to help my child catch up after learning gaps?

**Contextual Concerns:**
- How do I find schools that support additional needs?
- What should I do if my child is excluded because of behaviour or learning differences?

## Keyword Strategy – Parent-Intent Research
**Approach**: Question-driven, not volume-chasing. Focus on how parents phrase concerns, confusion, and questions. Avoids marketing-style SEO and commercial intent optimization.

### 1. Guides — General Parent Questions
**Informational / Support Intent:**
- How can I support my child's learning at home?
- What is normal homework for primary/high school kids?
- How should I talk to teachers about my child's progress?
- What does good parent engagement look like in school?
- How do I help my child with reading and maths if they're struggling?
- When should I contact the school about my child's learning?

**Reassurance / Understanding Intent:**
- Is my child behind for their age level?
- What should I expect academically at each year level?
- How do I talk to my child about school stress?

**Practical How-To:**
- What to ask at parent-teacher interviews
- How to set a homework routine that works
- Why teachers assess learning in different ways than tests

### 2. Year Levels — Stage-Specific Parent Queries
**Primary School:**
- What reading skills should my Year 2 child have?
- Is Year 3 maths harder than Year 2?
- What does Year 5 learn in writing and maths?

**Secondary School:**
- What changes academic expectations in Year 7?
- How much homework is normal in Year 9?
- Is Year 10 core to future pathways?

**Cross-Stage:**
- How do school expectations change between primary and high school?
- What growth should I see in learning year-to-year?

### 3. NAPLAN — Real Parent Concerns (Trust-Building Focus)
- What is NAPLAN and how does it work?
- Does NAPLAN matter for my child's future?
- Should I prepare my child for NAPLAN?
- How do I understand my child's NAPLAN results?
- Can NAPLAN results be wrong?
- Is NAPLAN stressful for kids?
- Does NAPLAN affect high school entry?
- When is NAPLAN this year in Queensland?
- What do Queensland NAPLAN results mean for my school?

### 4. Choosing Support — Decision-Making Queries
**Support Need Assessment:**
- Does tutoring really help my child?
- How do I know if my child needs extra learning support?
- What alternatives to tutoring are there?
- How to help my child catch up after learning gaps?

**Contextual Concerns:**
- How do I find schools that support additional needs?
- What should I do if my child is excluded because of behaviour or learning differences?

### Usage Guidelines
- **Hub pages**: Use these themes in introductions and descriptions
- **Article titles**: Convert phrases directly into human, search-friendly titles (e.g., "How NAPLAN works (and what it really measures)")
- **Internal linking**: Group related questions across year levels, support types, and NAPLAN
- **Styling**: All styling must be done in [styles.css](/styles.css); do not use inline or embedded CSS
- **Tone**: Always answer as calm, reassuring guide—never sales-oriented

## Content Length & SEO Guidelines
**Key Principles:**
- No single "optimal" word count; focus on quality, depth, and satisfying user intent
- Average top-ranking Google pages: 1,400–2,500 words
- Write as much as needed to cover topics comprehensively without fluff
- Prioritize E-E-A-T (Expertise, Experience, Authoritativeness, Trustworthiness)

**Content Type Guidelines:**
- **Pillar Pages/Ultimate Guides**: 2,500+ words (build authority, attract backlinks)
- **How-to Guides & Tutorials**: 1,800–2,500 words (detailed step-by-step)
- **General Informational Articles**: 1,500–2,500 words (competitive keywords)
- **Listicles & Roundups**: 1,000–1,800 words (shareable, skimmable)
- **Product/Service Pages & Reviews**: 500–1,000 words (informative without overwhelming)
- **News & Updates**: 400–700 words (timely, focused)

**Structure for Engagement:**
- Clear headings (H1, H2, H3)
- Short paragraphs
- Bullet points and lists
- Scannable format for mobile
- Natural internal linking to comparison page

Focus on clean, educational tone and responsive design when making changes.