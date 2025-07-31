import {LoginCards} from '../components/LoginCards'
import {CitizenLoginForm} from '../components/CitizenLoginForm'
import { AdminLoginForm } from '../components/AdminLoginForm';
function CivicIssuePage() {
  return (
    <div>
      <CitizenLoginForm />
      <LoginCards />
      < AdminLoginForm/>
    </div>
  )
}

export default CivicIssuePage;
