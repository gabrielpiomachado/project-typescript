import Button from '../components/Button';

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black font-sans">
      <div className="w-full max-w-md bg-white p-6 rounded shadow border border-gray-300 mx-5">
        <h2 className="text-center text-xl font-semibold mb-6">Register</h2>

        <form>
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block text-gray-500 text-sm mb-1"
            >
              Your User
            </label>

            <input
              id="username"
              name="username"
              type="text"
              placeholder="Your username"
              className="w-full border border-gray-300 rounded px-3 py-1 text-lg focus:border-gray-400 focus:outline-none"
            />

            <span className="hidden text-red-500 text-sm italic mt-1">
              Invalid field for some reason
            </span>
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-500 text-sm mb-1">
              Your Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 rounded px-3 py-1 text-lg focus:border-gray-400 focus:outline-none"
            />

            <span className="hidden text-red-500 text-sm italic mt-1">
              Invalid field for some reason
            </span>
          </div>

          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-gray-500 text-sm mb-1"
            >
              Your Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Your password"
              className="w-full border border-gray-300 rounded px-3 py-1 text-lg focus:border-gray-400 focus:outline-none"
            />

            <span className="hidden text-red-500 text-sm italic mt-1">
              Invalid field for some reason
            </span>
          </div>

          <div className="mb-5">
            <label
              htmlFor="password2"
              className="block text-gray-500 text-sm mb-1"
            >
              Repeat Password
            </label>

            <input
              id="password2"
              name="password2"
              type="password"
              placeholder="Repeat password"
              className="w-full border border-gray-300 rounded px-3 py-1 text-lg focus:border-gray-400 focus:outline-none"
            />

            <span className="hidden text-red-500 text-sm italic mt-1">
              Invalid field for some reason
            </span>
          </div>

          <div>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
