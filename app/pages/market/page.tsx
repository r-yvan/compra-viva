"use client";
import React, { useState } from "react";
import data from "./data";

const Market = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="bg-[#0a0a0a] w-full">
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        className="text-black"
      />
      <ul>
        {data
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.first_name.toLowerCase().includes(search) ||
                  item.last_name.toLowerCase().includes(search) ||
                  item.email.toLowerCase().includes(search) ||
                  item.password.toLowerCase().includes(search);
          })
          .map((datum) => (
            <li key={datum.id} className="flex flex-row gap-36 ">
              <div>{datum.first_name}</div>
              <div>{datum.last_name}</div>
              <div>{datum.email}</div>
              <div>{datum.password}</div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Market;
