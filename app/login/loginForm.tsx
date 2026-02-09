import { login } from './actions';
import Link from 'next/link';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiEye, FiEyeOff, FiLock, FiMail } from 'react-icons/fi';

export default function LoginForm({
  showPassword,
  setShowPassword,
}: {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <form
      action={login}
      className="relative z-10 w-full max-w-xl rounded-[2.5rem] border border-white/45 bg-primary-foreground/55 p-6 shadow-[0_20px_80px_-32px_rgba(81,102,197,0.65)] backdrop-blur-md md:p-10"
    >
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-sky-300 shadow-lg shadow-indigo-300/40">
        <FaRegUserCircle className="text-5xl text-white" />
      </div>

      <h1 className="mt-7 text-center text-4xl font-semibold tracking-tight text-slate-700 md:text-5xl">
        Welcome Back
      </h1>

      <div className="mt-9 space-y-5">
        <div className="flex items-center gap-3 rounded-full bg-white/95 px-5 py-4 shadow-[0_10px_20px_-15px_rgba(88,105,185,0.7)]">
          <FiMail className="text-xl text-slate-400" />
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full bg-transparent text-lg text-slate-600 placeholder:text-slate-400 focus:outline-none"
            placeholder="Email"
          />
        </div>

        <div className="flex items-center gap-3 rounded-full bg-white/95 px-5 py-4 shadow-[0_10px_20px_-15px_rgba(88,105,185,0.7)]">
          <FiLock className="text-xl text-slate-400" />
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            required
            className="w-full bg-transparent text-lg text-slate-600 placeholder:text-slate-400 focus:outline-none"
            placeholder="Password"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="text-slate-400 transition hover:text-slate-600 cursor-pointer"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            aria-pressed={showPassword}
          >
            {showPassword ? (
              <FiEyeOff className="text-xl" />
            ) : (
              <FiEye className="text-xl" />
            )}
          </button>
        </div>
      </div>

      <div className="mt-3 text-right">
        <Link
          href="#"
          className="text-base font-medium text-blue-500/90 transition hover:text-blue-600"
        >
          Forgot password?
        </Link>
      </div>

      <button
        type="submit"
        className="mt-9 w-full rounded-full bg-gradient-to-r from-indigo-400 to-blue-500 px-6 py-4 text-4xl font-medium text-white shadow-[0_16px_28px_-18px_rgba(52,93,214,0.9)] transition hover:brightness-105 cursor-pointer"
      >
        Log In
      </button>

      <p className="mt-10 text-center text-xl text-slate-500">
        Don&apos;t have an account?{' '}
        <Link
          href="#"
          className="font-semibold text-blue-500 transition hover:text-blue-600"
        >
          Sign Up
        </Link>
      </p>
    </form>
  );
}
