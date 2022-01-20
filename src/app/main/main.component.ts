import { Component, OnInit } from '@angular/core';
import {LoaderService} from "../loader/loader.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {



  constructor(public loaderService: LoaderService) { }

  ngOnInit(): void {
  }

}
