import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <div class="m-10 bg-[#ccc] h-[30rem] p-6 rounded-md flex items-center justify-around">
      <input type="text" name="name" class="block border border-gray-400">

      <div class="flex gap-2">
        <button class="bg-black text-white rounded-md px-3 py-1.5">
          Button
        </button>

        <button class="bg-black text-white rounded-md px-3 py-1.5">
          Button
        </button>
      </div>
    </div>
  `,
})
export class ButtonComponent {

}
