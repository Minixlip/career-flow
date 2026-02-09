import { login } from './actions';
import { FaRegUserCircle } from 'react-icons/fa';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="flex flex-col items-center gap-6 border-2 border-accent p-6 rounded-2xl">
        <span>
          <FaRegUserCircle className="text-4xl md:text-6xl lg:text-8xl text-accent" />
        </span>
        <h1 className="text-2xl font-bold text-foreground">Welcome back</h1>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          required
        />
        <button formAction={login}>Log in</button>
      </form>
    </div>
  );
}
