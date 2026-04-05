export default function SignupForm() {
  return (
    <div className="bg-gray-900 p-8 rounded-xl w-96">
      <h2 className="text-2xl mb-6">Request Access</h2>

      <input placeholder="Full Name" className="w-full mb-3 p-3 bg-black border border-gray-700 rounded" />
      <input placeholder="Government Email" className="w-full mb-3 p-3 bg-black border border-gray-700 rounded" />
      <input placeholder="Department" className="w-full mb-6 p-3 bg-black border border-gray-700 rounded" />

      <button className="w-full py-3 bg-purple-600 rounded">
        Submit Request
      </button>
    </div>
  );
}