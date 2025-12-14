"use client"

import { useState } from 'react';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: '' });
  };

  const validateEmail = (email: string) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    let isValid = true;

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required.';
      isValid = false;
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email.';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      alert('Form submitted successfully!');
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  };

  return (
    <div className="bg-background flex items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full animate-fade-in">
        <h2 className="text-2xl font-bold text-center text-indigo-800 mb-8">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {['username', 'email', 'password', 'confirmPassword'].map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-indigo-900 font-semibold mb-2 capitalize"
              >
                {field === 'confirmPassword' ? 'Confirm Password' : field}
              </label>
              <input
                type={field.includes('password') ? 'password' : field}
                id={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors[field as keyof typeof errors] ? 'border-red-500' : 'border-gray-200'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800 transition-all duration-300`}
                placeholder={`Enter your ${field === 'confirmPassword' ? 'password again' : field}`}
                required
              />
              {errors[field as keyof typeof errors] && (
                <p className="text-red-500 text-sm mt-2">{errors[field as keyof typeof errors]}</p>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-indigo-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02]"
          >
            Register
          </button>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <a
            href="#"
            className="text-indigo-800 font-semibold hover:text-blue-900 transition-colors duration-300"
          >
            Sign In
          </a>
        </p>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default RegistrationForm;
