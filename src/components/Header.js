export function Header({ pageName }) {
  return (
    <div>
      <head>
        <title>Timesheet</title>
      </head>
      <header class="flex items-center">
        <img
          src="https://apps.volkert.com/images/Logo.jpg"
          alt="Logo Cannot Be Found"
          class="top-0 left-0 w-32 h-16 mr-4"
        />
        <h1 class="ml-4">{pageName}</h1>
      </header>
    </div>
  );
}

export function Links() {
  <div>
    <span>Home</span>
    <span>Enter Time</span>
    <span>Weekly Summary</span>
    <span>Entries</span>
  </div>
};