import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="sticky top-0 z-50 glass dark:glass-dark px-4 py-3 flex items-center justify-between border-b border-primary/10">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-2xl">
            menu
          </span>
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            ANIRUDH
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-slate-700 dark:text-slate-300">
              share
            </span>
          </button>
          <button className="p-2 rounded-full hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-slate-700 dark:text-slate-300">
              search
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
