/* Renders the home page and project pages from js/content.js.
   You shouldn't need to edit this file to change words or work. */
(function () {
  const C = window.CONTENT;
  // Projects marked hidden: true stay in content.js but don't appear anywhere on the site.
  C.projects = C.projects.filter((p) => !p.hidden);
  const $= (sel) => document.querySelector(sel);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Shared bits: name, footer, mobile nav
  document.querySelectorAll("[data-name]").forEach((el) => (el.textContent = C.site.name));
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
  const toggle = $(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = $(".nav").classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
    document.querySelectorAll(".nav a").forEach((a) => a.addEventListener("click", () => $(".nav").classList.remove("open")));
  }

  if ($("#work-grid")) renderHome();
  if ($("#project")) renderProject();

  function renderHome() {
    const s = C.site;
    $("#hero-tagline").textContent = s.tagline;
    $("#hero-school").textContent = `${s.major} · ${s.school}`;

    // Work grid + filters
    const cats = ["All", ...new Set(C.projects.map((p) => p.category))];
    $("#filters").innerHTML = cats
      .map((c, i) => `<button class="chip" type="button" aria-pressed="${i === 0}" data-cat="${esc(c)}">${esc(c)}</button>`)
      .join("");
    $("#work-grid").innerHTML = C.projects
      .map(
        (p) => `
      <a class="card" href="project.html?id=${encodeURIComponent(p.id)}" data-cat="${esc(p.category)}">
        <div class="cover${p.coverFit === "contain" ? " contain" : ""}"><img src="${esc(p.cover)}" alt="" loading="lazy">${p.badge ? `<span class="badge">${esc(p.badge)}</span>` : ""}</div>
        <h3>${esc(p.title)}</h3>
        <p class="meta">${esc([p.category, p.client, p.year].filter(Boolean).join(" · "))}</p>
      </a>`
      )
      .join("");
    $("#filters").addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      document.querySelectorAll(".chip").forEach((b) => b.setAttribute("aria-pressed", b === btn));
      const cat = btn.dataset.cat;
      document.querySelectorAll(".card").forEach((card) => (card.hidden = cat !== "All" && card.dataset.cat !== cat));
    });

    // About
    const a = C.about;
    $("#headshot").src = a.headshot;
    $("#headshot").alt = `Portrait of ${s.name}`;
    $("#bio").innerHTML = a.bio.map((p) => `<p>${esc(p)}</p>`).join("");
    $("#facts").innerHTML = a.facts.map((f) => `<div><dt>${esc(f.label)}</dt><dd>${esc(f.value)}</dd></div>`).join("");

    // Resume
    const r = C.resume;
    const entry = (e) => `
      <div>
        <div class="row"><strong>${esc(e.title)}</strong><span class="muted">${esc(e.dates)}</span></div>
        <div class="muted">${esc(e.org)}</div>
        ${e.points && e.points.length ? `<ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
      </div>`;
    $("#resume").innerHTML = `
      <h3>Education</h3><div class="entries">${r.education.map(entry).join("")}</div>
      <h3>Experience</h3><div class="entries">${r.experience.map(entry).join("")}</div>
      <h3>Honors</h3><div class="entries"><div><ul style="padding-left:1.1rem;margin:0;color:inherit">${r.honors.map((h) => `<li>${esc(h)}</li>`).join("")}</ul></div></div>
      <h3>Skills</h3><div class="skills">${r.skills.map((k) => `<span>${esc(k)}</span>`).join("")}</div>`;
    if (r.pdf) $("#resume-pdf").innerHTML = `<a class="btn ghost" href="${esc(r.pdf)}" download>Download PDF</a>`;

    // Contact
    $("#email").href = `mailto:${s.email}`;
    $("#email").textContent = s.email;
    $("#socials").innerHTML = [
      s.linkedin && `<a href="${esc(s.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`,
      s.instagram && `<a href="${esc(s.instagram)}" target="_blank" rel="noopener">Instagram</a>`,
    ].filter(Boolean).join("");
  }

  function renderProject() {
    const id = new URLSearchParams(location.search).get("id");
    const i = C.projects.findIndex((p) => p.id === id);
    const p = C.projects[i];
    if (!p) {
      $("#project").innerHTML = `<div class="wrap project-hero"><a class="back" href="index.html#work">← All work</a><h1>Project not found</h1></div>`;
      return;
    }
    document.title = `${p.title} | ${C.site.name}`;
    const next = C.projects[(i + 1) % C.projects.length];

    const meta = [
      ["Client", p.client],
      ["Year", p.year],
      ["Team", p.team],
      ["My role", p.role || null],
    ];
    const metaHtml = meta
      .filter(([k, v]) => v || k === "My role")
      .map(([k, v]) => `<div><dt>${k}</dt><dd>${v ? esc(v) : `<span class="todo">Add your role in content.js</span>`}</dd></div>`)
      .join("");

    const galleryClass = ["gallery", p.columns === 3 && "cols-3", p.layout === "contain" && "contain"].filter(Boolean).join(" ");

    $("#project").innerHTML = `
      <div class="wrap project-hero">
        <a class="back" href="index.html#work">← All work</a>
        <p class="eyebrow" style="margin-top:1.5rem">${esc(p.category)}</p>
        <h1>${esc(p.title)}</h1>
        <p class="summary">${esc(p.summary)}</p>
        <dl class="project-meta">${metaHtml}</dl>
      </div>
      ${p.book ? bookHtml(p.book) : ""}
      <div class="wrap">
        ${p.stats && p.stats.length ? `<div class="stats">${p.stats.map((s) => `<div><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("")}</div>` : ""}
        ${p.story && p.story.length ? `<div class="story">${p.story.map((s) => `<h2>${esc(s.heading)}</h2><p>${esc(s.text)}</p>`).join("")}</div>` : ""}
        ${p.media.length ? `<div class="${galleryClass}">${p.media.map(mediaHtml).join("")}</div>` : ""}
        ${(p.groups || []).map(groupHtml).join("")}
        ${p.links && p.links.length ? `<div class="links">${p.links.map((l) => `<a class="btn ghost" href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}</div>` : ""}
        <a class="next" href="project.html?id=${encodeURIComponent(next.id)}">
          <p class="eyebrow">Next project</p>
          <h2>${esc(next.title)} →</h2>
        </a>
      </div>`;

    // Lightbox for images
    const box = $("#lightbox");
    document.querySelectorAll("img[data-zoom]").forEach((img) =>
      img.addEventListener("click", () => {
        box.querySelector("img").src = img.src;
        box.querySelector("img").alt = img.alt;
        box.hidden = false;
      })
    );
    box.addEventListener("click", () => (box.hidden = true));
    document.addEventListener("keydown", (e) => e.key === "Escape" && (box.hidden = true));
  }

  function bookHtml(b) {
    const [cover, ...rest] = b.pages;
    return `
      <section class="book">
        <div class="wrap">
          <div class="book-feature">
            <a class="book-cover" href="${esc(b.pdf)}" target="_blank" rel="noopener"><img src="${esc(cover)}" alt="Plans book cover"></a>
            <div>
              <p class="eyebrow">${b.pages.length} spreads</p>
              <h2>${esc(b.title)}</h2>
              <p class="muted">${esc(b.text)}</p>
              <div class="actions">
                <a class="btn" href="${esc(b.pdf)}" target="_blank" rel="noopener">Read the plans book ↗</a>
                <a class="btn ghost" href="${esc(b.pdf)}" download>Download PDF</a>
              </div>
            </div>
          </div>
          <div class="book-strip" aria-label="Plans book spreads">
            ${rest.map((src, i) => `<figure><img src="${esc(src)}" alt="Plans book spread ${i + 2}" loading="lazy" data-zoom><figcaption>${String(i + 2).padStart(2, "0")}</figcaption></figure>`).join("")}
          </div>
        </div>
      </section>`;
  }

  function groupHtml(g) {
    const head = g.title ? `<div class="group-head"><h2>${esc(g.title)}</h2>${g.text ? `<p class="muted">${esc(g.text)}</p>` : ""}</div>` : "";
    if (g.layout === "split") {
      return `<div class="group group-split">${head}<div class="gallery">${g.media.map(mediaHtml).join("")}</div></div>`;
    }
    const cls = ["gallery", g.columns === 3 && "cols-3", g.tone].filter(Boolean).join(" ");
    return `<div class="group${g.title ? "" : " group-cont"}">${head}<div class="${cls}">${g.media.map(mediaHtml).join("")}</div></div>`;
  }

  function mediaHtml(m) {
    if (m.hidden) return ""; // media marked hidden: true stays in content.js but isn't shown
    const cls = m.wide ? ' class="wide"' : "";
    const cap = m.caption ? `<figcaption>${esc(m.caption)}</figcaption>` : "";
    if (m.type === "image") {
      return `<figure${cls}><img src="${esc(m.src)}" alt="${esc(m.alt || m.caption || "")}" loading="lazy" data-zoom>${cap}</figure>`;
    }
    if (m.type === "video") {
      return `<figure${cls}><video src="${esc(m.src)}" poster="${esc(m.poster || "")}" controls playsinline preload="none"${m.vertical ? ' class="vertical"' : ""}></video>${cap}</figure>`;
    }
    if (m.type === "linkedin") {
      const src = `https://www.linkedin.com/embed/feed/update/${esc(m.urn)}?collapsed=1`;
      return `<figure${cls}><div class="li-embed"><iframe src="${src}" title="${esc(m.caption || "LinkedIn post")}" style="height:${Number(m.height) || 600}px" loading="lazy" allowfullscreen></iframe></div>${cap}</figure>`;
    }
    if (m.type === "embed") {
      const src = embedUrl(m.url);
      if (!src) {
        return `<figure${cls}><div class="embed pending"><img src="${esc(m.poster || "")}" alt=""><span class="badge">Video coming soon</span></div>${cap}</figure>`;
      }
      // Show the poster with a play button; the real player only loads when clicked.
      return `<figure${cls}><button type="button" class="embed play" data-src="${esc(src)}" data-title="${esc(m.caption || "Video")}" aria-label="Play ${esc(m.caption || "video")}">
          <img src="${esc(m.poster || "")}" alt=""><span class="play-icon" aria-hidden="true"></span>
        </button>${cap}</figure>`;
    }
    return "";
  }

  // Turns a normal YouTube or Vimeo link into an embeddable player URL.
  function embedUrl(url) {
    if (!url) return "";
    let m = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/);
    if (m) return `https://www.youtube-nocookie.com/embed/${m[1]}?rel=0&autoplay=1`;
    m = url.match(/vimeo\.com\/(?:video\/)?(\d+)(?:\/(\w+))?/);
    if (m) return `https://player.vimeo.com/video/${m[1]}?autoplay=1${m[2] ? `&h=${m[2]}` : ""}`;
    return url;
  }

  // Swap a poster for the real player when someone clicks play.
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".embed.play");
    if (!btn) return;
    const frame = document.createElement("iframe");
    frame.src = btn.dataset.src;
    frame.title = btn.dataset.title;
    frame.allow = "autoplay; encrypted-media; fullscreen; picture-in-picture";
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    frame.allowFullscreen = true;
    const box = document.createElement("div");
    box.className = "embed";
    box.appendChild(frame);
    btn.replaceWith(box);
  });
})();
