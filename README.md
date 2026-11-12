# Davis Sussner: Creative Portfolio

A plain HTML/CSS/JS site with no build step. It's hosted free on GitHub Pages.

## Change words or projects
Everything you'd want to edit is in **`js/content.js`**: your bio, links, projects, and resume. Search for `TODO` to find the spots only you can fill in.

- **Add a project:** copy one of the `{ id: ..., }` blocks in `projects`, give it a new `id`, and point `cover` and `media` at your images.
- **Add images:** put them in `assets/img/...`, ideally JPGs about 2000px wide or smaller.
- **Add a video:** upload it to YouTube (Unlisted is fine) or Vimeo, then paste the link into that video's `url: ""`. Until you add a link, the site shows the thumbnail with a "Video coming soon" label.

## Change the look
- **Switch themes:** in `index.html` *and* `project.html`, change `css/themes/minimal.css` to `editorial.css` or `husker.css`.
- **Tweak a theme:** open the file in `css/themes/`. Every color, font, corner radius, and size is a named variable at the top, like `--accent: #1a1a1a;`.
- **Make your own theme:** copy a theme file, rename it, edit the values, and point both HTML files at it.

## Preview on your computer
```bash
cd ~/Documents/Portfolio/website && python3 -m http.server 8000
```
Then open http://localhost:8000.

## Put it online (first time)
```bash
cd ~/Documents/Portfolio/website && gh repo create portfolio --public --source . --push
```
Then on GitHub go to the repo's **Settings → Pages**, set Source to **Deploy from a branch**, and pick **main** / **root**. After about a minute the site is live at **https://davissussner.github.io/portfolio/**.

## Update it later
```bash
cd ~/Documents/Portfolio/website && git add -A && git commit -m "Update portfolio" && git push
```

Your original full-size files stay in the folders outside `website/` and are never uploaded.
