import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-800">
      <div className="p-4 flex items-center justify-center">
        <nav className="flex gap-6 text-white">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/posts/10">Posts 10</Link>
          <Link to="/redirect">Redirect</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
}
