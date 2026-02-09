import LoginForm from './loginForm';

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[linear-gradient(145deg,#c8d8ff_0%,#d9e4ff_35%,#ebdcf9_65%,#c7dcff_100%)] px-4 py-10 font-sans">
      <div className="pointer-events-none absolute -left-36 -top-28 h-80 w-80 rounded-full bg-white/35 blur-sm" />
      <div className="pointer-events-none absolute -bottom-28 -right-12 h-96 w-96 rounded-full bg-pink-100/35 blur-md" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-indigo-100/35 blur-2xl" />
      <div className="pointer-events-none absolute right-6 top-1/3 h-24 w-24 rounded-full bg-white/25 blur-sm" />
      <div className="pointer-events-none absolute left-10 top-[56%] h-14 w-14 rounded-full bg-sky-100/40 blur-sm" />

      <LoginForm />
    </div>
  );
}
