const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
  // Contoh data hari-hari dalam bulan
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="p-4 max-w-lg mx-auto">
      {/* Header Hari */}
      <div className="grid grid-cols-7 gap-2 text-center font-bold">
        {daysOfWeek.map((day, idx) => (
          <div key={idx} className="text-gray-600">
            {day}
          </div>
        ))}
      </div>

      {/* Grid Tanggal */}
      <div className="grid grid-cols-7 gap-2 mt-2">
        {/* Menambahkan kotak kosong untuk hari pertama jika diperlukan */}
        {Array(3)
          .fill("")
          .map((_, idx) => (
            <div key={idx}></div>
          ))}

        {daysInMonth.map((day) => (
          <div
            key={day}
            className="border p-2 text-center hover:bg-blue-500 hover:text-white transition duration-200"
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
