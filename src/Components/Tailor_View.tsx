import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Select } from "@/Components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table"
import { CheckCircleIcon, ClockIcon, XCircleIcon } from "lucide-react"

export default function TailorOrdersDashboard() {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Tailor Orders Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">New Orders</h2>
          <p className="text-4xl font-bold text-blue-600">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2 text-yellow-600">In Progress</h2>
          <p className="text-4xl font-bold text-yellow-600">8</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2 text-green-600">Completed</h2>
          <p className="text-4xl font-bold text-green-600">45</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">New Orders</h2>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="font-bold">Order ID</TableHead>
              <TableHead className="font-bold">Customer</TableHead>
              <TableHead className="font-bold">Item</TableHead>
              <TableHead className="font-bold">Deadline</TableHead>
              <TableHead className="font-bold">Price</TableHead>
              <TableHead className="font-bold">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3].map((order) => (
              <TableRow key={order} className="hover:bg-gray-50">
                <TableCell>#{order}2345</TableCell>
                <TableCell>Customer {order}</TableCell>
                <TableCell>Custom Suit</TableCell>
                <TableCell>July 1{order}, 2023</TableCell>
                <TableCell>${order}99.99</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                      <CheckCircleIcon className="h-4 w-4 mr-1" />
                      Accept
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                      <XCircleIcon className="h-4 w-4 mr-1" />
                      Reject
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ongoing Orders</h2>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="font-bold">Order ID</TableHead>
              <TableHead className="font-bold">Customer</TableHead>
              <TableHead className="font-bold">Item</TableHead>
              <TableHead className="font-bold">Status</TableHead>
              <TableHead className="font-bold">Deadline</TableHead>
              <TableHead className="font-bold">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3].map((order) => (
              <TableRow key={order} className="hover:bg-gray-50">
                <TableCell>#{order}1234</TableCell>
                <TableCell>Customer {order + 3}</TableCell>
                <TableCell>Dress Shirt</TableCell>
                <TableCell>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">In Progress</span>
                </TableCell>
                <TableCell>July 2{order}, 2023</TableCell>
                <TableCell>
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">Update Status</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Completed Orders</h2>
        <div className="flex justify-between items-center mb-4">
          <Input type="text" placeholder="Search orders..." className="max-w-xs" />
          <Select className="w-48">
            <option value="">Filter by date</option>
            <option value="today">Today</option>
            <option value="this-week">This Week</option>
            <option value="this-month">This Month</option>
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="font-bold">Order ID</TableHead>
              <TableHead className="font-bold">Customer</TableHead>
              <TableHead className="font-bold">Item</TableHead>
              <TableHead className="font-bold">Completion Date</TableHead>
              <TableHead className="font-bold">Rating</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3].map((order) => (
              <TableRow key={order} className="hover:bg-gray-50">
                <TableCell>#{order}0123</TableCell>
                <TableCell>Customer {order + 6}</TableCell>
                <TableCell>Trousers</TableCell>
                <TableCell>July {order}, 2023</TableCell>
                <TableCell className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`h-5 w-5 ${star <= 4 ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}