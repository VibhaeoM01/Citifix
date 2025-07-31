"use client"
import "../styles/card.css"

// Simple SVG icons as components
const UsersIcon = () => (
  <svg className="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
    />
  </svg>
)

const ShieldCheckIcon = () => (
  <svg className="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
)

export function LoginCards({ onSelect }) {
  return (
    <div className="login-cards-container">
      <div className="login-card">
        <div className="card-header">
          <ShieldCheckIcon />
          <h2 className="card-title">Admin Login</h2>
          <p className="card-description">Access the department administration panel.</p>
        </div>
        <div className="card-content">
          <button onClick={() => onSelect("admin")} className="login-button">
            Login as Admin
          </button>
        </div>
      </div>
      <div className="login-card">
        <div className="card-header">
          <UsersIcon />
          <h2 className="card-title">Citizen Login</h2>
          <p className="card-description">Report civic issues and track your complaints.</p>
        </div>
        <div className="card-content">
          <button onClick={() => onSelect("citizen")} className="login-button">
            Login as Citizen
          </button>
        </div>
      </div>
    </div>
  )
}
