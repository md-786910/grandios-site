import React from "react";
import Layout from "../components/Layout";

const Dashboard = () => {
  const stats = [
    {
      label: "Gesamter gewährter Rabatt",
      value: "€ 1.139,25",
      bgColor: "bg-blue-100",
      labelColor: "text-blue-500",
    },
    {
      label: "Anzahl der verkauften Artikel",
      value: "1065",
      bgColor: "bg-green-100",
      labelColor: "text-green-500",
    },
    {
      label: "Gesamtzahl Der Kunden",
      value: "2577",
      bgColor: "bg-red-100",
      labelColor: "text-red-500",
    },
  ];

  const orders = [
    {
      id: 1,
      orderNumber: "GRAND12345",
      totalValue: "€ 99,90",
      customerName: "Kundenname",
      customerNumber: "CustNo_1234",
      status: "Ausstehend",
      statusType: "pending",
    },
    {
      id: 2,
      orderNumber: "GRAND09867",
      totalValue: "€ 149,90",
      customerName: "Kundenname",
      customerNumber: "CustNo_5678",
      status: "Ausstehend",
      statusType: "pending",
    },
    {
      id: 3,
      orderNumber: "GRAND45678",
      totalValue: "€ 49,90",
      customerName: "Kundenname",
      customerNumber: "CustNo_9012",
      status: "Tilgen",
      statusType: "paid",
    },
    {
      id: 4,
      orderNumber: "GRAND54637",
      totalValue: "€ 192,40",
      customerName: "Kundenname",
      customerNumber: "CustNo_3456",
      status: "Eingelöst",
      statusType: "redeemed",
    },
    {
      id: 5,
      orderNumber: "GRAND12345",
      totalValue: "€ 68,80",
      customerName: "Kundenname",
      customerNumber: "CustNo_7890",
      status: "Eingelöst",
      statusType: "redeemed",
    },
    {
      id: 6,
      orderNumber: "GRAND76543",
      totalValue: "€ 149,90",
      customerName: "Kundenname",
      customerNumber: "CustNo_2345",
      status: "Eingelöst",
      statusType: "redeemed",
    },
  ];

  const getStatusStyles = (statusType) => {
    switch (statusType) {
      case "pending":
        return "text-red-500 border-red-300 bg-white";
      case "paid":
        return "text-green-500 border-green-300 bg-white";
      case "redeemed":
        return "text-orange-500 border-orange-300 bg-white";
      default:
        return "text-gray-500 border-gray-300 bg-white";
    }
  };

  return (
    <Layout>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bgColor} rounded-2xl p-8 text-center`}
          >
            <p className={`${stat.labelColor} text-sm font-medium mb-3`}>
              {stat.label}
            </p>
            <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        {orders.map((order, index) => (
          <div
            key={order.id}
            className={`flex items-center justify-between px-6 py-5 ${
              index !== orders.length - 1 ? "border-b border-gray-100" : ""
            }`}
          >
            {/* Order Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-sm font-semibold text-gray-900">
                  Bestellnummer -
                </span>
                <span className="text-sm text-gray-600">
                  {order.orderNumber}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm font-semibold text-gray-900">
                  Gesamtbestellwert -
                </span>
                <span className="text-sm text-gray-600">{order.totalValue}</span>
              </div>
            </div>

            {/* Customer Info */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 mb-1">
                {order.customerName}
              </p>
              <div className="flex items-center gap-1">
                <span className="text-sm font-semibold text-gray-900">
                  Kundennummer -
                </span>
                <span className="text-sm text-gray-600">
                  {order.customerNumber}
                </span>
              </div>
            </div>

            {/* Status & Action */}
            <div className="flex items-center gap-6">
              <button
                className={`px-5 py-2 text-sm font-medium border rounded-lg cursor-pointer transition-all hover:opacity-80 active:scale-95 ${getStatusStyles(
                  order.statusType
                )}`}
              >
                {order.status}
              </button>
              <button className="text-sm text-gray-500 hover:text-gray-700 hover:underline whitespace-nowrap">
                Mehr Anzeigen
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Dashboard;
