
# 🌍 WanderLust

A full-stack Node.js/Express application for creating and browsing travel listings. Built with the MVC pattern, WanderLust supports user authentication, CRUD listings with images (Cloudinary), reviews, maps (Leaflet/Mapbox), and robust server-side validation.

⚡ Overview

**Tech Stack:**
Node.js · Express · MongoDB (Mongoose) · EJS · Passport · Cloudinary · Leaflet/MapTiler

**Key Features:**

- User signup/login with sessions
- CRUD listings with image uploads and geolocation
- Review system
- Owner-based edit/delete
- Flash messages & error handling
- Server-side validation

🧩 Project Structure (MVC)

- Model: `/models/` — Mongoose schemas for listings, reviews, users
- View: `/views/` — EJS templates & layouts
- Controller: `/controllers/` — route logic for listings, reviews, users

Other folders:

- `/routes/` — Express routers
- `/middleware/` — authentication & authorization
- `/utils/` — helpers (validation, Cloudinary config, custom errors)
- `/public/` — static assets
- `/init/` — seeding or setup scripts

`app.js` — main entry point and Express setup

🚀 Getting Started (Local)
Prerequisites

- Node.js (v16+)
- npm or yarn
- MongoDB (local or Atlas)
-- Optional: Cloudinary & MapTiler accounts

Installation

```powershell
# Clone repo & install dependencies
git clone https://github.com/harshsahu383/Airbnb-Clone
cd AIRBNB_CLONE
npm install
```

Environment Setup

Create a `.env` file in the root directory:

```text
MONGO_URI=mongodb://localhost:27017/wanderlust
PORT=3000
SECRET=your-session-secret
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_KEY=your-cloud-key
CLOUDINARY_SECRET=your-cloud-secret
MAPTILER_KEY=your-maptile-api-key
```

(Cloudinary/Mapbox are optional — provide mock values for local testing.)

🧠 Run the App

Development:

```powershell
npm run dev
```

Production:

```powershell
npm start
```

The app runs at http://localhost:8080 by default.



🗺️ Routes Summary

Below is a concise summary of the main routes. The `Auth` column indicates whether the route typically requires a logged-in user (Auth) or owner privileges (Owner).

Listings

| Method | Path | Description | Auth |
|---|---|---:|:---:|
| GET | /listings | View all listings | No |
| GET | /listings/new | Form to create a new listing | Yes |
| POST | /listings | Create a new listing | Yes |
| GET | /listings/:id | Show a single listing | No |
| GET | /listings/:id/edit | Form to edit a listing | Owner |
| PUT | /listings/:id | Update a listing | Owner |
| DELETE | /listings/:id | Delete a listing | Owner |

Reviews

| Method | Path | Description | Auth |
|---|---|---:|:---:|
| POST | /listings/:id/reviews | Add a review to a listing | Yes |
| DELETE | /listings/:id/reviews/:reviewId | Delete a review | Owner / Author |

Users

| Method | Path | Description | Auth |
|---|---|---:|:---:|
| GET | /register | Show registration form | No |
| POST | /register | Register a new user | No |
| GET | /login | Show login form | No |
| POST | /login | Log in | No |
| GET | /logout | Log out current user | Yes |

For exact implementations and middleware checks see the `routes/` and `controllers/` folders.

🧰 Troubleshooting

| Issue | Fix |
|---|---|
| MongoNetworkError | Check `MONGO_URI` and MongoDB service |
| Cloudinary upload fails | Verify `CLOUDINARY_*` credentials |
| Map not showing | Ensure `MAPTILER_KEY` (if using MapTiler) or Leaflet tile provider setup; check `public/JS/map.js` for the tile URL and key placement |
| Sessions not persisting | Confirm `SECRET` and session store config |

🤝 Contributing

1. Fork the repo
2. Create a feature branch
3. Commit and test your changes
4. Submit a PR with a clear description

Small, incremental PRs preferred.

📄 License

Licensed under the MIT License. See `LICENSE` for details.

👤 Author

Repository Owner: `@harshsahu383`
Check It Here : https://wonderlust-project-h2g6.onrender.com/
For questions or feature requests, open an issue on GitHub.
