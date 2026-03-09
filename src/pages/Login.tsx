import React, { useState } from 'react';
import Button from '../components/Button';

export default function Login() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {
      username: '',
      email: '',
      password: '',
      password2: '',
    };

    if (!form.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (form.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!form.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (form.password !== form.password2) {
      newErrors.password2 = 'Passwords do not match';
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      console.log('Form submitted:', form);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black font-sans">
      <div className="w-full max-w-md bg-white p-6 rounded shadow border border-gray-300 mx-5">
        <h2 className="text-center text-xl font-semibold mb-6">Register</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block text-gray-500 text-sm mb-1"
            >
              Your User
            </label>

            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              type="text"
              placeholder="Your username"
              className={`w-full border rounded px-3 py-1 text-lg focus:outline-none ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
            />

            {errors.username && (
              <span className="text-red-500 text-sm italic mt-1">
                {errors.username}
              </span>
            )}
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-500 text-sm mb-1">
              Your Email
            </label>

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Your email"
              className={`w-full border rounded px-3 py-1 text-lg focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />

            {errors.email && (
              <span className="text-red-500 text-sm italic mt-1">
                {errors.email}
              </span>
            )}
          </div>

          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-gray-500 text-sm mb-1"
            >
              Your Password
            </label>

            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              placeholder="Your password"
              className={`w-full border rounded px-3 py-1 text-lg focus:outline-none ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            />

            {errors.password && (
              <span className="text-red-500 text-sm italic mt-1">
                {errors.password}
              </span>
            )}
          </div>

          <div className="mb-5">
            <label
              htmlFor="password2"
              className="block text-gray-500 text-sm mb-1"
            >
              Repeat Password
            </label>

            <input
              name="password2"
              value={form.password2}
              onChange={handleChange}
              type="password"
              placeholder="Repeat password"
              className={`w-full border rounded px-3 py-1 text-lg focus:outline-none ${errors.password2 ? 'border-red-500' : 'border-gray-300'}`}
            />

            {errors.password2 && (
              <span className="text-red-500 text-sm italic mt-1">
                {errors.password2}
              </span>
            )}
          </div>

          <div>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
