//import { HomePage } from "./Content";
import React from 'react';
import { useState } from "react";
import Link from "next/link";
import logo from './images/Kolkert_Logo.png';

const currentDate = new Date();
const options = { year: "numeric", month: "2-digit", day: "2-digit" };
const shortDate = currentDate.toLocaleDateString("en-US", options);

export function Header() {
  return (
    <div class="bg-[#02325d] flex items-center justify-between">
      <head>
        <title>Volkert Timesheet</title>
      </head>
      <header class="flex items-center">
        <div class="bg-white rounded-full m-3 flex justify-center">
          <img
            src="https://apps.volkert.com/images/Logo.jpg"
            alt="Logo Cannot Be Found"
            class="w-32 h-16 ml-3 mr-3 mt-1 mb-1 rounded-xl text-black"
          />
        </div>
        <div class="bg-white rounded-full ml-3">
          <Link href="/" class="ml-1 mr-1 text-black">
            Home
          </Link>
        </div>
        <Link href="/enter_time" class="ml-5">
          Enter Time
        </Link>
        <Link href="/weekly_summary" class="ml-5">
          Weekly Summary
        </Link>
        <Link href="/statistics" class="ml-5 mr-5">
          Statistics
        </Link>
      </header>
      <span class="relative mr-5">{shortDate}</span>
    </div>
  );
}
