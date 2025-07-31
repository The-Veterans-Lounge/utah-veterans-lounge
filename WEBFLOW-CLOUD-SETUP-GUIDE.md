
# Migrating from Netlify to Webflow Cloud


---

## Step 1: Install Webflow CLI

Install the CLI globally if you haven't already:

```bash
npm install -g @webflow/cli
```

---

## Step 2: Create a new app
#### The CLI will generate a project scaffold that's synced with your Webflow site's system through DevLink.

1. Initialize the project. In your terminal, run the command:

```bash
webflow cloud init
```
2. Name the app.
3. Select NextJS as the framework.
4. **Select your mount path**. When prompted in the terminal, enter the path where you plan to mount your app on your Webflow site (for example, /app → mysite.webflow.io/app).
5. When prompted, authenticate with Webflow and select the site for your Webflow Cloud project.
6. When prompted in the terminal, select the same Webflow site you used to authenticate. Once selected, the Webflow CLI will import any available styles, variables, and components via DevLink. DevLink will show a success message upon successful export to your app.
7. Publish your project to a GitHub repository.

Create a new repo
```bash
cd your-project-name
git init
git add .
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/brodel10/demo-site.git
git push -u origin master
```

Add an existing repo
```bash
git remote add origin https://github.com/your-repo/demo-site.git
git branch -M main
git push -u origin main
```

<img width="790" height="147" alt="Image" src="https://github.com/user-attachments/assets/70643249-ec12-4b76-a622-cc55015583fa" />

---

## Step 3: Create a New Webflow Cloud project

Connect GitHub to Webflow Cloud, create a project, and configure an environment for automated deployments.

1. **Open Webflow Cloud** In webflow, navigate to the site settings and select **Webflow Cloud** from the sidebar.
<img width="253" height="505" alt="Image" src="https://github.com/user-attachments/assets/141128c5-c095-4fe7-9030-0c76cdc2e5e9" />

2. Click the **Login to Github** button to connect your GitHub account. Then Click the **Install GitHub** button. Follow the instructions to enable Webflow Cloud.
<img width="562" height="320" alt="Image" src="https://github.com/user-attachments/assets/b3abaa9f-b7a5-47bd-8a4c-8556b531e743" />
<img width="464" height="277" alt="Image" src="https://github.com/user-attachments/assets/28d4a08e-37a5-4cbe-85b7-e23fdce918eb" />

3. Click **Create New Project**. Follow the prompts to add project details and repo.
<img width="494" height="400" alt="Image" src="https://github.com/user-attachments/assets/acb7972c-140a-465d-a720-a3d4300ca074" />

4. Create an Environment. Choose a branch to deploy from i.e. **main**. Then choose a mount path for the project, for example, /app -> mysite.webflow.io/app
<img width="422" height="319" alt="Image" src="https://github.com/user-attachments/assets/d13aa926-0ade-44c4-bf2e-930c0e1431f2" />
<img width="467" height="245" alt="Image" src="https://github.com/user-attachments/assets/f69e2966-32ca-47fe-9a33-9759ce2ffd20" />

5. Publish the Webflow Website

### Any changes made to the deploy branch selected in step 4 will automatically be deployed to the staging site, mysite.webflow.io. Any deployments to the live site will have to be triggered manually.
---


## Step 4: Migrate Netlify Functions and other docs to NextJS App

Move your Netlify functions from `netlify/functions` to the new directory (`src/app/api/`).
Move `docs` to the root folder.

<img width="332" height="768" alt="Image" src="https://github.com/user-attachments/assets/ed7db459-f8a3-4e04-8103-11f8274d63c9" />

Update each function to use the NextJS format:

### Netlify Format (Old):

```js
// netlify/functions/health-check.js
exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: "I'm healthy",
  };
};
```

### NextJS Format (New):

```js
// api/test/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const data = await response.json();
    return NextResponse.json({
      message: "CORS proxy working!",
      data: data,
      timestamp: new Date().toISOString(),
    });
  } catch (e) {
    return NextResponse.json({
      error: "Proxy failed",
      details: "Error",
    });
  }
}


```

---

## Step 5: Testing locally

1. Install dependencies and run your project locally

```bash
npm install
npm run dev
```

2. Navigate to the mount path provided in step 3.4. For example, localhost:3000/app

---


