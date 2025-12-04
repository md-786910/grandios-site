import React from "react";
import Layout from "../components/Layout";

const Bestellungen = () => {
  const orders = [
    {
      id: 1,
      orderNumber: "GRAND12345",
      totalValue: "€ 99,90",
      customerName: "Kundenname",
      customerNumber: "CustNo_1234",
      status: "Ausstehend",
      statusType: "pending",
      date: "04.12.2025",
    },
    {
      id: 2,
      orderNumber: "GRAND09867",
      totalValue: "€ 149,90",
      customerName: "Kundenname",
      customerNumber: "CustNo_5678",
      status: "Ausstehend",
      statusType: "pending",
      date: "03.12.2025",
    },
    {
      id: 3,
      orderNumber: "GRAND45678",
      totalValue: "€ 49,90",
      customerName: "Kundenname",
      customerNumber: "CustNo_9012",
      status: "Tilgen",
      statusType: "paid",
      date: "02.12.2025",
    },
    {
      id: 4,
      orderNumber: "GRAND54637",
      totalValue: "€ 192,40",
      customerName: "Kundenname",
      customerNumber: "CustNo_3456",
      status: "Eingelöst",
      statusType: "redeemed",
      date: "01.12.2025",
    },
  ];

  const getStatusStyles = (statusType) => {
    switch (statusType) {
      case "pending":
        return "text-red-500 border-red-300 bg-red-50";
      case "paid":
        return "text-green-500 border-green-300 bg-green-50";
      case "redeemed":
        return "text-orange-500 border-orange-300 bg-orange-50";
      default:
        return "text-gray-500 border-gray-300 bg-gray-50";
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Bestellungen</h1>
          <p className="text-gray-500 mt-1">Alle Bestellungen verwalten</p>
        </div>
        <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
          Neue Bestellung
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">
                Bestellnummer
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">
                Kunde
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">
                Datum
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">
                Betrag
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">
                Status
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">
                Aktion
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">
                  {order.orderNumber}
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">
                    {order.customerName}
                  </div>
                  <div className="text-sm text-gray-500">
                    {order.customerNumber}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{order.date}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {order.totalValue}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 text-xs font-medium border rounded-lg ${getStatusStyles(
                      order.statusType
                    )}`}
                  >
                    {order.status}
                  </span>
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

export default Bestellungen;
