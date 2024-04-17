import apolloLogo from "./assets/apollo-logo.jpeg";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://www.apollo.io/tech-blog" target="_blank">
          <img src={apolloLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Thanks for interviewing with Apollo!</h1>
    </>
  );
}

export default App;
