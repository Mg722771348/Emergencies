# MSSG Emergencies - Project Documentation

This project is a high-performance, AI-powered landing page for MSSG-Gas, specialized in emergency boiler breakdowns in the Fareham area.

## 🚀 Deployment Guide (The Steps We Discussed)

### Step 1: Put the code in the "Locker" (GitHub)
1. Go to [GitHub.com](https://github.com) and sign in.
2. Click the **"+"** at the top and pick **"New repository"**.
3. Name it `mssg-emergencies`.
4. Click **"Create repository"**.
5. Click **"uploading an existing file"**.
6. Drag and drop all the project files into the box.
7. Scroll down, type "Initial Commit", and click **"Commit changes"**.

### Step 2: Getting your AI API Key
1. Go to [aistudio.google.com](https://aistudio.google.com/).
2. Click **"Get API key"** on the left.
3. Click **"Create API key in new project"**.
4. **Copy** the key (it starts with `AIza...`).

### Step 3: Hosting on the Internet (Vercel)
1. Go to [Vercel.com](https://vercel.com) and log in with GitHub.
2. Click **"Add New..."** -> **"Project"**.
3. **Import** your `mssg-emergencies` repository.
4. Open the **"Environment Variables"** section:
   - Key: `API_KEY`
   - Value: (Paste your key from Step 2)
   - Click **"Add"**.
5. Click **"Deploy"**.

### Step 4: Connecting your Domain
1. In Vercel, go to **Settings** -> **Domains**.
2. Add `mssggas.co.uk`.
3. Follow the "Move" or "Add" prompts to point your live domain to this new code.

## 🛠 Project Features
- **AI Assistant**: Specialized for PO14, PO15, and PO16 postcodes.
- **Emergency Focus**: High-visibility contact buttons and safety instructions.
- **Performance**: Built with Vite for sub-second loading times on mobile.
- **SEO**: Localized metadata for "Emergency Boiler Repair Fareham".

## 📞 Support Contacts
- **Primary Phone**: 07415120877
- **Email**: Matt.greentree@btinternet.com
