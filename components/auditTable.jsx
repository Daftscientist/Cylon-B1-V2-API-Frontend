export default function AuditTable() {
return (
<div className="overflow-x-auto relative shadow-md rounded-lg mt-2">
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="py-3 px-6">
          Action
        </th>
        <th scope="col" className="py-3 px-6">
          User
        </th>
        <th scope="col" className="py-3 px-6">
          Date
        </th>
        <th scope="col" className="py-3 px-6">
          User IP
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          API Key Created
        </th>
        <td className="py-4 px-6">
          leo@kraata.com
        </td>
        <td className="py-4 px-6">
          21/07/2022
        </td>
        <td className="py-4 px-6">
          0.0.0.0.0
        </td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Discord Linked
        </th>
        <td className="py-4 px-6">
          leo@kraata.com
        </td>
        <td className="py-4 px-6">
          21/07/2022
        </td>
        <td className="py-4 px-6">
          0.0.0.0.0
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Account Initiation
        </th>
        <td className="py-4 px-6">
          leo@kraata.com
        </td>
        <td className="py-4 px-6">
          21/07/2022
        </td>
        <td className="py-4 px-6">
          0.0.0.0.0
        </td>
      </tr>
    </tbody>
  </table>
</div>
)
};

