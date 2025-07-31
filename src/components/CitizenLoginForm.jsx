"use client"
import "../styles/form.css"

// Simple SVG icon as component
const ArrowLeftIcon = () => (
  <svg className="back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
)

export function CitizenLoginForm({ onBack }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle citizen login logic here
    console.log("Citizen login submitted")
  }

  return (
    <div className="login-form-card">
      <div className="form-header">
        <h2 className="form-title">Citizen Login</h2>
        <p className="form-description">Enter your credentials to report or track issues.</p>
      </div>
      <div className="form-content">
        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-group">
            <label htmlFor="citizen-email" className="form-label">
              Email
            </label>
            <input id="citizen-email" type="email" placeholder="citizen@example.com" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="citizen-password" className="form-label">
              Password
            </label>
            <input id="citizen-password" type="password" className="form-input" required />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
      </div>
      <div className="form-footer">
        <button onClick={onBack} className="back-button">
          <ArrowLeftIcon />
          Back to Selection
        </button>
      </div>
    </div>
  )
}
