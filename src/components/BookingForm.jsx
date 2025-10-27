const BookingForm = () => (
  <div className="bg-white p-4 rounded-xl shadow space-y-4 max-w-md mx-auto">
    <h2 className="text-lg font-bold text-center">Book Your Car</h2>
    <input
      className="w-full p-2 border rounded"
      placeholder="Pickup Location"
    />
    <input className="w-full p-2 border rounded" type="date" />
    <input className="w-full p-2 border rounded" type="date" />
    <button className="w-full bg-blue-600 text-white py-2 rounded">
      Book Now
    </button>
  </div>
);

export default BookingForm;
