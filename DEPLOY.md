# Deploy Your Static Site to GitHub Pages

## 1. Create a New Repository
- Go to [GitHub](https://github.com/) and create a new public repository (e.g., `sauravprakash-site`).

## 2. Upload Files
- Upload the contents of the `sauravprakash-site` folder (`index.html`, `style.css`, `script.js`, and the `images` directory) to your new repo. (Drag-and-drop or use `git`.)

## 3. Enable GitHub Pages
- In your repo, go to **Settings > Pages**.
- Under **"Source"**, select the **main** branch (or `gh-pages` branch if using that).
- Choose the `/ (root)` folder.
- Click **Save**.

Your site will be published at `https://<your-username>.github.io/<repo-name>/`.

## 4. (Optional) Custom Domain
- In the **Pages** settings, add your custom domain and update DNS records as needed.

---

**Note:** To zip your folder locally, use `zip -r sauravprakash-site.zip sauravprakash-site/` (requires `zip` tool) or upload files directly via GitHub UI.