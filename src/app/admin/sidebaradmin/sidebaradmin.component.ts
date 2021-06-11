import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebaradmin',
  templateUrl: './sidebaradmin.component.html',
  styleUrls: ['./sidebaradmin.component.css']
})
export class SidebaradminComponent implements OnInit {
  states: string[] = [
    'gestion des annonces', 'gestion des utilisateurs',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
