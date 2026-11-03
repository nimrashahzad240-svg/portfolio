# Nimra Shahzad — Portfolio

A React portfolio for product design, front-end engineering and creative development. Includes a scroll-driven character introduction, dedicated project case studies, film players and the Meraki art gallery.

## Run locally

Use Node.js 22 and npm. From this folder:

```bash
npm ci
npm run check
npm run dev
```

Build and preview the production site:

```bash
npm run build
npm run preview
```

The production files are written to `dist/` with a script-integrity and browser security policy. See SECURITY.md for the checks and their limits. Keep `public/media/` with the source; the build copies these assets automatically. No backend, API key or password is required.

## Upload to GitHub and publish

For the shortest instructions, open **START_HERE.md**.

1. Create an empty GitHub repository. Extract this ZIP and upload the **contents** of `nimra-portfolio/` into the repository root, including `.github/` and `.gitignore`.
2. In the repository, open **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
3. Open **Actions → Deploy portfolio → Run workflow**, selecting the default branch. Later pushes to the default branch deploy automatically. The Pages settings show the published URL when deployment finishes.

The included workflow uses the built-in repository token; do not add a personal token to the code. Your account must support Pages for the repository visibility you choose. A public repository exposes all included source media. Use a private repository if you do not want visitors browsing the source files, subject to your hosting plan. A public website still exposes the media it displays.

If uploading through the browser hides dotfolders, use Git from the extracted folder instead. Replace the example repository address with yours:

```bash
git init
git add .
git commit -m "Add portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Authenticate through GitHub's normal sign-in flow. Never put a password or access token into a repository URL or a source file.

Vite uses a relative asset base and the application uses hash navigation, so the same build supports a repository subpath. You can also deploy `dist/` to another static host or connect a custom domain through your host.

## Character journey and interactions

The header uses native scrolling through Hello, Build, Design and Make chapters. Chapter buttons seek within the introduction, and Skip to the work bypasses it. Reduced-motion preferences show all four chapters as a normal static sequence. No scroll hijacking or animation dependency is needed.

Frosty, recreated from the supplied photos, rests beside the character’s shoes. Scroll adds a small seven-pixel shift and gentle settling movement, with no full-body rotation or orbit. Reduced-motion preferences keep her still.

The About section includes a personal FAQ and a clickable mini character. The contact footer contains 24 smaller skill tiles grounded in the professional and project record. Explore mode supports dragging and keyboard movement. Stack with Frosty starts a timing game: tap or click the screen to drop eight tiles onto the stack, use the paw, or use Left/Right and Space. A missed tile ends the round; restart deals another set of skills. Best score is held only in the current page session. Animation pauses off screen, and reduced motion keeps the aiming tile still and snaps drops into place.

- `src/components/NimraJourney.jsx`: scroll progress and character poses.
- `src/components/BeforeYouAsk.jsx`: personal FAQ and character response.
- `src/components/SkillPlayground.jsx`: draggable skill cards.
- `src/character-journey.css`: responsive layouts and reduced-motion alternatives.
- `public/media/nimra-character-poses-v3.webp`: generated character sheet based on Nimra’s supplied photos, used as four CSS sprites. The source photographs are identity references, not new public uploads.

## Meraki and recognition

Meraki has an illustrated peach-and-blue studio theme, paint-pot colour controls, the existing artist character and real artwork displayed in large paper frames. The colour controls only affect the studio decoration. The original paintings and candle photographs remain unchanged. Gallery artwork opens in the existing viewer.

Recognition photos and certificates use large image areas. Personal award photographs are static: no enlarge button, viewer or zoom interaction. The research-paper image and certificate previews retain their in-page fit/zoom viewer with Escape/Close controls. They do not link directly to downloadable files.

- `src/studio-refresh.css`: recognition layout, Frosty, and the Meraki studio theme.
- `src/components/Frosty.jsx`: cat asset wrapper.
- `src/components/EvidenceViewer.jsx`: recognition image viewing and zoom.
- `public/media/frosty-portrait-v2.webp`: generated companion artwork.

## Edit the portfolio

- `src/App.jsx`: navigation, filters and page state.
- `src/data/portfolio.js`: assembled project content.
- `src/opportunities.css`: current home-page styling and image interaction restrictions.
- `src/components/MediaPlayer.jsx`: video controls.
- `public/media/`: artwork, project photographs, films and decorative assets.

Project routes such as `#project=echo-capsule` and `#meraki` support direct links and browser history. Preserve the existing filenames if replacing media.

## Passwords and media

There is no active login or password form in this static site, and the source scan found no embedded passwords, API keys or private keys. Descriptions of password recovery and a password vault refer to case-study concepts. Do not put secrets into front-end code or `VITE_` environment variables: anything sent to a browser is public. Future authentication must use a suitable server or authentication service.

The site has no Save Image buttons or direct media-download links. It suppresses media context menus and dragging, and asks compatible video players to hide their download and remote-playback controls. These are deterrents, not copy protection: browser tools, screenshots, screen recording and direct asset requests remain possible. Fully preventing downloads is incompatible with displaying the original media in a visitor's browser. Publish only versions you are comfortable displaying; lower-resolution or watermarked copies can further discourage reuse.

`npm run check` checks common credential patterns without printing their values. It is also run before deployment. This is a guard against accidental disclosure, not a complete security audit. Environment files, private-key files, build output and dependencies are ignored by Git.

## Credits and use

Portfolio content and project materials retain their existing authorship and team credits. No permission to reuse portfolio imagery or films is granted by providing this source package. Third-party materials remain subject to their owners' rights and applicable licences.


## Contact page

All contact calls to action open `#contact`. The primary form sends through FormSubmit to **nimra.shahzad240@gmail.com**, with required name, reply email, subject and message fields. CAPTCHA stays enabled on the provider’s page, alongside a honeypot. No mail-service password or API key is included. The direct-email draft link is a fallback.

**Activate delivery before launch:** submit a test from the hosted site, complete the spam check, then click the activation link in the recipient’s inbox. Submit another test and confirm receipt. This code update does not verify that activation or inbox delivery has happened. See START_HERE.md.

Visitors are told that FormSubmit processes their message. Its documentation states 30-day submission retention. The entered email address is a reply address, not verified ownership. The site never claims a message was delivered; submission and confirmation are handled by the provider.

## Current character scenes and footer game

Hello uses `public/media/nimra-holding-frosty-v3.webp`, a cartoon holding Frosty with refined eyes. Design uses `nimra-design-flows-v2.webp`, working on a tablet with user flows and a VR kit. Only Frosty’s ears and forehead peek from behind the knee as the chapter scrolls; there is no floating board. Make uses `nimra-leiriu-workbench.webp`: a standing cartoon maker at an adult-height bench, assembling an upright Léiriú with visible servos, controller boards and wiring. A small Frosty watches the loose parts. The illustrations are decorative, not technical construction drawings. Build retains the unchanged original coder sprite in `nimra-character-poses-v3.webp`. Meraki retains the separate painting scene in `nimra-design-studio.webp`. Contact and About use the updated Hello character.

`src/character-scenes.css` positions the illustrations. `src/components/SkillPlayground.jsx` contains the explore/stack modes; `src/skill-stacker.css` defines smaller tiles, the paw control, game states and Meraki footer contrast. The game has pointer and keyboard controls, a score out of eight, missed-drop feedback and restart.


Frosty has a reserved row beneath the skill arena, so tiles never cover her face. The game listens for normal clicks/taps only while its arena is visible and ignores buttons, links and form controls; scrolling a touch screen does not intentionally drop a tile. Keyboard controls remain available. Scroll-linked cat movement has a still reduced-motion alternative.

Ubuntu retains its original project media and whale video. The background adds a transparent cartoon jellyfish, manta ray and fish school with violet/cyan glow, depth-separated particles and scroll-driven movement. Reduced motion keeps these layers still.
# portfolio
