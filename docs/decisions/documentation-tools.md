# Documentation Tools Evaluation

We compared three options for documentation platforms that could serve both public and internal use cases, especially for non-technical volunteers and developers.

---

## ✅ GitBook (Community Plan for Nonprofits)

**Overview:**  
GitBook is a cloud-based documentation platform with a clean interface, intuitive editing experience, and built in collaboration features. It supports both Markdown and text editing and is ideal for teams who want a plug and play solution without managing infrastructure.

**Hosting:**  
✅ Fully hosted by GitBook — no need to manage your own server.  
🌱 Free under the [Community Plan](https://www.gitbook.com/docs/account-management/plans/community) for qualifying non-profits.

**Pros:**
- Free for nonprofits via Community Plan
- Easy to use for non technical contributors
- Beautiful GUI and navigation
- Real time collaboration and access control
- Shareable links and search
- No build or deployment steps required

**Cons:**
- Limited customization (e.g., branding, styling)
- Content is hosted on GitBook's domain (unless you pay for custom domain)
- Exporting or migrating content later can be harder
- Vendor lock in for platform features

---

## 🔧 Docusaurus

**Overview:**  
Docusaurus is an open source static site generator by Meta, optimized for documentation websites. It's built with React, supports Markdown and custom components, and gives full control over the site. Ideal for technical teams that want custom workflows, styling, or versioning.

**Hosting:**  
🚀 Can be deployed for free using GitHub Pages, Netlify, or Vercel  
💻 Requires local development setup (Node.js, npm/yarn)

**Pros:**
- Fully customizable (theme, components, structure)
- Excellent Markdown and code block support
- Built in versioning and localization
- Free to host (via GitHub Pages, Netlify, Vercel)
- Own your code and content

**Cons:**
- Requires developer setup and maintenance
- Contributors need Git or GitHub knowledge to edit docs
- No collaboration tools or inline editing
- Higher learning curve for non-technical team members

---

## 🧾 GitHub Markdown (Native Docs)

**Overview:**  
This approach keeps documentation as Markdown files directly in your GitHub repository. It’s ideal for developer that want docs close to code, without setting up external tools or platforms.

**Hosting:**  
✅ Free and fully hosted on GitHub  
🗂️ No separate server or hosting setup needed

**Pros:**
- Docs live with the codebase (low friction for devs)
- Free hosting with GitHub
- Easy versioning with Git history
- Markdown support with syntax highlighting
- Works well with GitHub Issues, Discussions, and Projects

**Cons:**
- No site-like navigation or search without extra tools
- Less friendly for non-technical users
- No real time collaboration or access control
- Requires GitHub access for editing

---

## 🌟 Summary

| Tool         | Hosting Required | Free Option | Easy for Non-Tech | Customizable | Best For                      |
|--------------|------------------|-------------|-------------------|--------------|-------------------------------|
| GitBook      | ❌               | ✅ (Nonprofit Plan) | ✅                | 🚫 Limited   | Nonprofits, quick publishing |
| Docusaurus   | ✅ (self-host)    | ✅ (Netlify, etc.) | 🚫                | ✅ Full      | Dev teams, custom docs sites |
| GitHub Docs  | ❌               | ✅           | 🚫                | 🚫 Minimal   | Internal/dev documentation   |



