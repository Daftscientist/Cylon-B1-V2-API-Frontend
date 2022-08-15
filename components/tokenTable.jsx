import Link from "next/link"

export default function TokenTable() {
return (
<div className="overflow-x-auto relative shadow-md rounded-lg mt-2">
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="py-3 px-6">
          Token Name
        </th>
        <th scope="col" className="py-3 px-6">
          Total Requests
        </th>
        <th scope="col" className="py-3 px-6">
          Date Created
        </th>
        <th scope="col" className="py-3 px-6">
          Maximum Requests
        </th>
        <th scope="col" className="py-3 px-6">
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Discord Bot
        </th>
        <td className="py-4 px-6">
          102
        </td>
        <td className="py-4 px-6">
          21/07/2022
        </td>
        <td className="py-4 px-6">
          1000
        </td>
        <td className="py-4 px-6 text-right">
          <Link href="/dashboard/tokens/1"><a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a></Link>
        </td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-600">
        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Discord Bot
        </th>
        <td className="py-4 px-6">
          102
        </td>
        <td className="py-4 px-6">
          21/07/2022
        </td>
        <td className="py-4 px-6">
          1000
        </td>
        <td className="py-4 px-6 text-right">
          <Link href="/dashboard/tokens/1"><a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a></Link>
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Discord Bot
        </th>
        <td className="py-4 px-6">
          102
        </td>
        <td className="py-4 px-6">
          21/07/2022
        </td>
        <td className="py-4 px-6">
          1000
        </td>
        <td className="py-4 px-6 text-right">
          <Link href="/dashboard/tokens/1"><a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a></Link>
        </td>
      </tr>
    </tbody>
  </table>
</div>
)
};

