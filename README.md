# ✦ Vihaan Shah — Personal Web Hub

<p align="center">
  <strong>A minimal, dark, personal website built to be more than a Linktree.</strong>
</p>

<p align="center">
  <a href="https://linktree-replica.shahvihaan39.workers.dev/">Live Website</a>
  ·
  <a href="https://linktree-replica.shahvihaan39.workers.dev/portfolio/">Portfolio</a>
  ·
  <a href="https://github.com/shahvihaan21/Linktree-Replica">Repository</a>
</p>

---

## 🖤 What is this?

This project started as a simple idea:

> **Why use a generic link-in-bio page when I can build my own?**

Instead of simply recreating Linktree, this project turns that idea into a small personal web presence — a central place for my online identity, important links, and a dedicated portfolio.

The website is intentionally **minimal, dark, responsive, and personal**. It is designed to stay simple now while leaving room to evolve as I build more projects, write more, and develop my career.

---

## ✦ The Website

### Home

The homepage acts as a personal digital hub.

It brings together:

- 👤 Personal introduction
- 🐙 GitHub
- 💼 LinkedIn
- 🌐 Portfolio
- ✨ A clean, focused interface
- 📱 Responsive layout for different screen sizes

### Portfolio

The `/portfolio/` page goes a little deeper.

It currently includes:

- A short professional introduction
- Academic background
- Interests across **Business, Investing, Analytics, Technology, and Psychology**
- Experiences involving international virtual exchange and student coordination
- A local AI interface project using Ollama
- A section prepared for future certifications
- Direct GitHub and LinkedIn links

The goal isn't to make this a traditional résumé.

It is meant to answer a simpler question:

> **Who is Vihaan, and what is he interested in building and learning?**

---

## 🎨 Design Philosophy

The visual direction is deliberately restrained.

### Dark by default

A near-black interface creates a calm, focused environment without competing with the content.

### Minimal > crowded

There are no unnecessary dashboards, skill bars, giant statistics, or dozens of sections.

### Personal > generic

The website is built around my identity rather than trying to look like a template.

### Expandable

The current version is intentionally small. Future additions can include projects, writing, certifications, experiments, and other work without rebuilding the entire site.

---

## 🛠️ Tech Stack

This is a lightweight static website built with:

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure |
| **CSS3** | Styling, layout & responsive design |
| **JavaScript** | Interactions & dynamic behaviour |
| **Cloudflare Workers** | Production deployment |
| **GitHub** | Source control |

No large frontend framework is required for the current version.

The project keeps the frontend intentionally lightweight.

---

## 📁 Project Structure

```text
Linktree-Replica/
│
├── Assets/
│   ├── Vihaan.png
│   ├── Github.jpg
│   ├── linkedin.png
│   └── ...
│
├── portfolio/
│   ├── index.html
│   ├── portfolio.css
│   └── portfolio.js
│
├── src/
│   ├── script.js
│   ├── styles.css
│   └── site-data.js
│
├── index.html
├── .gitignore
└── README.md
```

The site is structured so that the main page and portfolio can evolve independently while sharing the same overall visual identity.

---

## 🚀 Run Locally

Clone the repository:

```bash
git clone https://github.com/shahvihaan21/Linktree-Replica.git
cd Linktree-Replica
```

Because this is a static site, it can be served with any simple local HTTP server.

### Python

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Windows

The repository also contains a `server.bat` helper for local development.

---

## ☁️ Deployment

The production website is deployed using **Cloudflare Workers** with Wrangler.

Deployment command:

```bash
npx wrangler deploy
```

Live:

**https://linktree-replica.shahvihaan39.workers.dev/**

Portfolio:

**https://linktree-replica.shahvihaan39.workers.dev/portfolio/**

---

## 🧭 Roadmap

This project is intentionally a work in progress.

Possible future additions:

- [ ] Project showcase
- [ ] Certifications
- [ ] Writing / blog section
- [ ] Resume / CV
- [ ] Better project case studies
- [ ] Analytics and visitor insights
- [ ] Custom domain
- [ ] More interactive visual elements
- [ ] Additional accessibility improvements

The idea is to add features only when they add genuine value.

---

## 🧠 About Me

I'm **Vihaan Shah**, a BBA student at Parul University, Vadodara.

I'm interested in:

**Business · Investing · Analytics · Technology · Psychology**

I enjoy going deeper into things that genuinely catch my attention, learning through experimentation, and building things along the way.

I'm still early in the journey — which is exactly why this website exists.

It is not meant to show that I've already figured everything out.

It is meant to document what I'm learning, what I'm building, and where the journey goes next.

---

## 🔗 Find Me

- **Website:** https://linktree-replica.shahvihaan39.workers.dev/
- **Portfolio:** https://linktree-replica.shahvihaan39.workers.dev/portfolio/
- **GitHub:** https://github.com/shahvihaan21
- **LinkedIn:** Connect through the website

---

## 📌 Why "Linktree Replica"?

The name reflects where the project started, not where it ends.

The original concept was to build a personal alternative to a link-in-bio service. The project has since become a custom personal web hub with its own visual identity and portfolio page.

So while the repository is called **Linktree-Replica**, the goal is not to permanently imitate Linktree.

> **Build your own corner of the internet.**

---

<p align="center">
  Built with curiosity, iteration, and a lot of late-night tweaking.
</p>

<p align="center">
  <sub>© 2026 Vihaan Shah</sub>
</p>
