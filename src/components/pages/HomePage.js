export function HomePage() {
  return (
    <div class="grid grid-cols-2">
      <div class="flex justify-center p-5 overflow-x-auto">
        <table class="table-auto w-full text-sm text-left text-gray-200" id="mainTable">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <th class="border w-20 px-6 py-3 cursor-pointer" onclick="sortTable(0, 'mainTable')">Day</th>
            <th class="border w-60 px-6 py-3 cursor-pointer" onclick="sortTable(1, 'mainTable')">Project</th>
            <th class="border w-20 px-6 py-3 cursor-pointer" onclick="sortTable(2, 'mainTable')">Hours</th>
            <th class="border w-60 px-6 py-3 cursor-pointer" onclick="sortTable(3, 'mainTable')">Comment</th>
          </thead>
          <tbody class="">
          <tr class="">
            <td class="border text-center">Mon</td>
            <td class="border">Northern Beltline</td>
            <td class="border text-center">8</td>
            <td class="border">Plans Assembly</td>
          </tr>
          <tr class="">
            <td class="border text-center">Tues</td>
            <td class="border">Ft. Morgan</td>
            <td class="border text-center">8</td>
            <td class="border">Eating Beach Mice</td>
          </tr>
          <tr class="">
            <td class="border text-center">Wed</td>
            <td class="border">Airbus EW</td>
            <td class="border text-center">8</td>
            <td class="border">Fixing corrupted files</td>
          </tr>
          <tr class="">
            <td class="border text-center">Thur</td>
            <td class="border">Airbus DOKU</td>
            <td class="border text-center">8</td>
            <td class="border">Also fixing corrupted files</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class=" flex justify-center p-5">
        <table>
          <tr>
            <th class="col-span-2 text-center">Weekly Hours</th>
          </tr>
          <tr>
            <td class="border text-center w-15">Mon</td>
            <td class="border text-center w-10">8</td>
          </tr>
          <tr>
            <td class="border text-center">Tues</td>
            <td class="border text-center">8</td>
          </tr>
          <tr>
            <td class="border text-center">Wed</td>
            <td class="border text-center">8</td>
          </tr>
          <tr>
            <td class="border text-center">Thur</td>
            <td class="border text-center">8</td>
          </tr>
          <tr>
            <td class="border text-center">Fri</td>
            <td class="border text-center">8</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
