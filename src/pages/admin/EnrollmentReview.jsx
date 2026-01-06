export default function EnrollmentReview() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm p-6">
        <h1 className="text-xl font-semibold text-[#0A1F44] mb-6">
          Enrollment Applications
        </h1>

        <table className="w-full text-sm">
          <thead className="border-b text-gray-500 text-left">
            <tr>
              <th className="py-2">Student</th>
              <th>Grade</th>
              <th>Parent</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            <EnrollmentRow />
            <EnrollmentRow />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EnrollmentRow() {
  return (
    <tr className="border-b last:border-0">
      <td className="py-3">—</td>
      <td>—</td>
      <td>—</td>
      <td className="text-orange-600">Pending</td>
      <td className="flex gap-3 py-3">
        <button className="text-green-600 hover:underline">Approve</button>
        <button className="text-red-600 hover:underline">Reject</button>
      </td>
    </tr>
  );
}
