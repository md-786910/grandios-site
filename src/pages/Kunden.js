import React from "react";
import Layout from "../components/Layout";

const Kunden = () => {
  const customers = [
    {
      id: 1,
      name: "Maria Schmidt",
      email: "maria.schmidt@email.de",
      customerNumber: "CustNo_1234",
      orders: 5,
      totalSpent: "€ 499,50",
    },
    {
      id: 2,
      name: "Anna Müller",
      email: "anna.mueller@email.de",
      customerNumber: "CustNo_5678",
      orders: 3,
      totalSpent: "€ 299,70",
    },
    {
      id: 3,
      name: "Lisa Weber",
      email: "lisa.weber@email.de",
      customerNumber: "CustNo_9012",
      orders: 8,
      totalSpent: "€ 892,40",
    },
    {
      id: 4,
      name: "Sophie Fischer",
      email: "sophie.fischer@email.de",
      customerNumber: "CustNo_3456",
      orders: 2,
      totalSpent: "€ 149,90",
    },
  ];

  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kunden</h1>
          <p className="text-gray-500 mt-1">Kundenverwaltung</p>
        </div>
        <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
          Neuer Kunde
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">
                Kunde
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">
                Kundennummer
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">
                Bestellungen
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">
                Gesamtausgaben
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">
                Aktion
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="border-b border-gray-50 hover:bg-gray-50"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                      {customer.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {customer.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {customer.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {customer.customerNumber}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {customer.orders}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {customer.totalSpent}
                </td>
                <td className="px-6 py-4">
                  <button className="text-sm text-gray-500 hover:text-gray-900 hover:underline">
                    Anzeigen
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Kunden;
