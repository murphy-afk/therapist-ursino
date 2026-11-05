# Roadmap: Giulia Ursino Psychologist Website

## Project summary

Professional website for psychologist Giulia Ursino. She works in two studios. The site must be simple, clean, and use beach and sea colors. Content is written in Italian, code and comments in English.

## Tech stack

- Frontend: React (Vite)
- Backend: Express (only used if the site needs a server, otherwise kept minimal)
- Styling: plain CSS, no CSS framework
- No Prettier, no extra tooling. Minimal setup only.

## Available assets

Studio 1 photos, already in the project root:

- `image.jpeg` (wide shot of the consultation room)
- `WhatsApp Image 2026-11-05 at 12.30.52.jpeg`
- `WhatsApp Image 2026-11-05 at 12.30.53.jpeg`
- `WhatsApp Image 2026-11-05 at 12.30.54.jpeg`

## Pending content from client

- Photos of the second studio
- A quote she likes
- Description of the type of therapy she does
- Contact details (email, phone, address)

Until this arrives, use placeholders clearly marked in the content files.

## Site structure

1. Home: hero with name and profession, short intro, link to contacts
2. About: photo, biography, quote
3. Approach: description of the type of therapy
4. Studios: two studio sections with photos and addresses
5. Contacts: email, phone, address, simple contact form if backend allows

## Design direction

- Very simple and clean layout, lots of white space
- Beach and sea palette: soft sand, light blue, deep sea blue, white
- Calm typography, readable Italian body text
- Mobile first, responsive on all sizes
- Images optimized before use

## Current status

- Sessions 1 to 3 done and committed
- Graphics redesign committed, inspired by centroclinicoparacelso.org: flat dusty blue blocks, full width photo and text splits, blue headings, wave hero kept
- Visual check with a headless browser was unreliable because other projects occupied the preview ports, verify manually with `npm.cmd run dev`

## Phases (sessions)

### Session 1: project setup
- Initialize git repository
- Scaffold React app with Vite
- Add Express server skeleton if needed
- Set up basic folder structure: `src`, `public`, `server`
- Create content file for Italian text so text is easy to change later

### Session 2: base layout and pages
- Global styles with the beach palette
- Header with navigation
- Footer with contacts placeholder
- Page components: Home, About, Approach, Studios, Contacts
- Placeholder content in Italian for all pending client info

### Session 3: studios section
- Import and optimize the four Studio 1 photos
- Move photos into `public/images/studio1`
- Studio 1 gallery with lightbox or simple grid
- Studio 2 section with placeholder for future photos

### Session 4: content integration
- Replace placeholders when client sends: second studio photos, quote, therapy description, contacts
- Review all Italian copy

### Session 5: deployment
- Prepare build for GitHub Pages (static export of the React app)
- Deploy to GitHub Pages for client review
- After client approval, deploy to final hosting chosen by client
- If a backend is required for the final host, wire up Express there

## Rules

See `AGENTS.md` for the full rule set. Key points:

- No emdashes
- No emojis
- No lines that only contain `>` or `/>`
- Never commit without asking for permission
- Commit messages short, around 12 words, only important info
- Phases are called sessions
