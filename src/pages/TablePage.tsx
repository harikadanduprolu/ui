
import { sidebarItems } from "@/navigation";
import { MainLayout } from "@/components/MainLayout";
import ComponentShowcase from "@/components/ComponentShowcase";
import ComponentCard from "@/components/ComponentCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
];

const TablePage = () => {
  return (
    <MainLayout items={sidebarItems}>
      <div className="animate-fade-in">
        <h1 className="mb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">Table</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          A responsive table component for displaying tabular data.
        </p>

        <ComponentShowcase title="Table Examples">
          <ComponentCard
            title="Basic Table"
            description="A simple table with header and rows."
            code={`<Table>\n  <TableCaption>A list of your recent invoices.</TableCaption>\n  <TableHeader>\n    <TableRow>\n      <TableHead className="w-[100px]">Invoice</TableHead>\n      <TableHead>Status</TableHead>\n      <TableHead>Method</TableHead>\n      <TableHead className="text-right">Amount</TableHead>\n    </TableRow>\n  </TableHeader>\n  <TableBody>\n    {invoices.map((invoice) => (\n      <TableRow key={invoice.invoice}>\n        <TableCell className="font-medium">{invoice.invoice}</TableCell>\n        <TableCell>{invoice.paymentStatus}</TableCell>\n        <TableCell>{invoice.paymentMethod}</TableCell>\n        <TableCell className="text-right">{invoice.totalAmount}</TableCell>\n      </TableRow>\n    ))}\n  </TableBody>\n</Table>`}
          >
            <div className="w-full overflow-auto">
              <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                      <TableCell className="font-medium">{invoice.invoice}</TableCell>
                      <TableCell>{invoice.paymentStatus}</TableCell>
                      <TableCell>{invoice.paymentMethod}</TableCell>
                      <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </ComponentCard>

          <ComponentCard
            title="Table with Search and Actions"
            description="A table with search input and action buttons."
            code={`<div className="w-full">\n  <div className="flex items-center py-4">\n    <Input\n      placeholder="Search invoices..."\n      className="max-w-sm"\n    />\n    <Button className="ml-auto">Add Invoice</Button>\n  </div>\n  <Table>\n    <TableHeader>\n      <TableRow>\n        <TableHead className="w-[100px]">Invoice</TableHead>\n        <TableHead>Status</TableHead>\n        <TableHead>Method</TableHead>\n        <TableHead className="text-right">Amount</TableHead>\n      </TableRow>\n    </TableHeader>\n    <TableBody>\n      {invoices.map((invoice) => (\n        <TableRow key={invoice.invoice}>\n          <TableCell className="font-medium">{invoice.invoice}</TableCell>\n          <TableCell>\n            <div className={\`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold \${invoice.paymentStatus === 'Paid' ? 'bg-green-100 text-green-800' : invoice.paymentStatus === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}\`}>\n              {invoice.paymentStatus}\n            </div>\n          </TableCell>\n          <TableCell>{invoice.paymentMethod}</TableCell>\n          <TableCell className="text-right">{invoice.totalAmount}</TableCell>\n        </TableRow>\n      ))}\n    </TableBody>\n  </Table>\n</div>`}
          >
            <div className="w-full">
              <div className="flex items-center py-4">
                <Input
                  placeholder="Search invoices..."
                  className="max-w-sm"
                />
                <Button className="ml-auto">Add Invoice</Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                      <TableCell className="font-medium">{invoice.invoice}</TableCell>
                      <TableCell>
                        <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          invoice.paymentStatus === 'Paid' ? 'bg-green-100 text-green-800' : 
                          invoice.paymentStatus === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-red-100 text-red-800'
                        }`}>
                          {invoice.paymentStatus}
                        </div>
                      </TableCell>
                      <TableCell>{invoice.paymentMethod}</TableCell>
                      <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </ComponentCard>
        </ComponentShowcase>
      </div>
    </MainLayout>
  );
};

export default TablePage;
