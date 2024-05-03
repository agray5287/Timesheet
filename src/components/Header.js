//import { HomePage } from "./Content";
import { useState } from "react";
import Link from "next/link";

const currentDate = new Date();
const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
const shortDate = currentDate.toLocaleDateString('en-US', options);

export function Header() {
  return (
    <div class="flex items-center justify-between">
      <head>
        <title>Volkert Timesheet</title>
      </head>
      <header class="flex items-center">
        <img
          src="https://apps.volkert.com/images/Logo.jpg"
          alt="Logo Cannot Be Found"
          class="top-0 left-0 w-32 h-16 mr-5"
        />
        <Link href="/" class="ml-5">Home</ Link>
        <Link href="/enter_time" class="ml-5">Enter Time</ Link>
        <Link href="/weekly_summary" class="ml-5">Weekly Summary</ Link>
        <Link href="/statistics" class="ml-5 mr-5">Statistics</ Link>
        
      </header>
      <span class="relative mr-5">{shortDate}</span>
    </div>
  );
};