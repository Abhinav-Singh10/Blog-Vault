// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">
          MyBlog
        </a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className="post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2018/12/GettyImages-1071785306.jpg?resize=768,519"
            alt="Sundar Pichai Closeup"
          />
        </div>
        <div className="texts">
          <h2>
            Google&apos;s revised ad targeting plan triggers fresh competition
            concerns in UK
          </h2>
          <p className="info">
            <a href="" className="author">
              Natasha Lomas
            </a>
            <time>2023-01-06 16:46</time>
          </p>
          <p className="summary">
            What is going on with Google&apos;s long-touted migration to an
            alternative adtech stack (aka its Privacy Sandbox proposal)?
          </p>
        </div>
      </div>{" "}
      <div className="post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2018/12/GettyImages-1071785306.jpg?resize=768,519"
            alt="Sundar Pichai Closeup"
          />
        </div>
        <div className="texts">
          <h2>
            Google&apos;s revised ad targeting plan triggers fresh competition
            concerns in UK
          </h2>
          <p className="info">
            <a href="" className="author">
              Natasha Lomas
            </a>
            <time>2023-01-06 16:46</time>
          </p>
          <p className="summary">
            What is going on with Google&apos;s long-touted migration to an
            alternative adtech stack (aka its Privacy Sandbox proposal)?
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
