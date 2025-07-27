import { Link } from 'react-router-dom'

export default function RegisterPage() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Username" required /><br />
        <input type="email" placeholder="Email" required /><br />
        <input type="password" placeholder="Password" required /><br />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  )
}
