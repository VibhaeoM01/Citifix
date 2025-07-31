
 "use client";
import { useState } from "react"
import { LoginCards } from "../components/LoginCards"
import { AdminLoginForm } from "../components/AdminLoginForm"
import { CitizenLoginForm } from "../components/CitizenLoginForm"
import "../styles/main.css"

export default function App() {
  const [loginType, setLoginType] = useState("selection")

  const handleSelectLoginType = (type) => {
    setLoginType(type)
  }

  const handleBackToSelection = () => {
    setLoginType("selection")
  }

  return (
    <div className="main-container">
      {loginType === "selection" && <LoginCards onSelect={handleSelectLoginType} />}
      {loginType === "admin" && <AdminLoginForm onBack={handleBackToSelection} />}
      {loginType === "citizen" && <CitizenLoginForm onBack={handleBackToSelection} />}
    </div>
  )
}
