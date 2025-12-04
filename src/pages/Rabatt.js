import React from "react";
import Layout from "../components/Layout";

const Rabatt = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Rabatt</h1>
        <p className="text-gray-500 mt-1">Rabatte und Gutscheine verwalten</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <p className="text-gray-500">Rabatt-Inhalt kommt hier...</p>
      </div>
    </Layout>
  );
};

export default Rabatt;
