# 🎬 movieFinder

**movieFinder** is a responsive React web application that allows users to search for movies, actors, and genres, and build a personalized watchlist.  
It uses **Redux Toolkit** for state management and features a **debounced search input** for smooth and optimized performance.

---

## 🌟 Features

- 🔍 **Search Functionality:** Type in the search bar to find movies (default query is “War”). The search uses debouncing to prevent unnecessary API calls.  
- ⚡ **Default Fallback:** If the search box is cleared and focus is lost, it automatically reverts to the default query (“War”).  
- 🧭 **Watchlist Navigation:** Easily navigate to your watchlist with a clean, responsive button that displays the total count of movies saved.  
- 📱 **Responsive Design:** The entire layout—including the count badge—scales beautifully across mobile, tablet, and desktop.  
- 🧠 **Redux State Management:** All search data and UI states are managed efficiently through Redux slices.  
- 🎨 **Clean UI/UX:** Built with accessibility and simplicity in mind using TailwindCSS.  

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite or CRA)  
- **State Management:** Redux Toolkit  
- **Routing:** React Router  
- **Styling:** TailwindCSS  
- **Language:** JavaScript (ES6+)  
- **Build Tool:** Vite / CRA (depending on setup)  

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Rohanhumane/movieFinder.git
cd movieFinder
npm install
# or
yarn install


---

## Folder Structure 

movieFinder/
│
├── src/
│   ├── api/      
│   ├── assets/            # Images, icons, etc.
│   ├── components/        # Reusable UI components (Search, Buttons, etc.)
│   ├── hook/  
│   ├── layouts/    
│   ├── pages/             # Route-based pages (Home, Watchlist)
│   ├── store/             # Redux store and slices (searchSlice, etc.)           
│   ├── App.jsx            # Main App entry
│   └── main.jsx           # ReactDOM render and provider setup
│   └── utils.jsx          # Helper functions
│
├── package.json
├── README.md
└── .gitignore


🔮 Future Enhancements

🔗 Integrate with TMDb API for real movie data

💾 Persist watchlist in local storage or backend

🧑‍💻 Add user login and authentication

🧩 Add sorting, filtering, and pagination

🎞️ Include movie details and trailers


🪪 License

This project is licensed under the MIT License — feel free to use and modify it.

👨‍💻 Author

Rohan Humane
Frontend Developer | React | Redux | UI/UX
🔗 GitHub