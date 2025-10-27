const Cars = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Available Cars</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {["SUV", "Sedan", "Hatchback"].map((type, idx) => (
        <div key={idx} className="border rounded p-4 shadow bg-white">
          <h3 className="font-semibold">{type}</h3>
          <p>Rent starts at ₹1000/day</p>
          <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded">
            Book
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default Cars;
