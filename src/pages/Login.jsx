const Login = () => (
  <div className="max-w-sm mx-auto bg-white p-6 rounded shadow space-y-4">
    <h2 className="text-xl font-bold text-center">Login</h2>
    <input
      className="w-full p-2 border rounded"
      placeholder="Email"
      type="email"
    />
    <input
      className="w-full p-2 border rounded"
      placeholder="Password"
      type="password"
    />
    <input
      className="w-full p-2 border rounded"
      placeholder="Phone Number"
      type="tel"
    />
    <button className="w-full bg-blue-600 text-white py-2 rounded">
      Sign In
    </button>
  </div>
);

export default Login;
