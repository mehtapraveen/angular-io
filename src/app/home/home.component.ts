import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
     <div class="bg-img">
</div>
  <h1 class="text-start text-danger">META</h1>
     <button routerLink="/dashboard" type="button" class="btn btn-primary mx-2">Dashboard</button>
  <button type="button" class="btn btn-secondary">Heros</button>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
