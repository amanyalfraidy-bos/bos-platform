import { Routes, Route } from 'react-router-dom';

function HomePage() {
  return (
    <div className="bos-home">
      <h1>BOS Platform</h1>

      <h2>Executive Decision Intelligence</h2>

      <p>
        Behavioural Operating System
      </p>

      <div className="status-card">
        <strong>Foundation Status</strong>

        <p>Project successfully initialized.</p>

        <p>
          Ready for Module 1:
          Authentication
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
    </Routes>
  );
}
