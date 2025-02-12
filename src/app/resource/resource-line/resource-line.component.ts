import { Component, Input, OnInit } from '@angular/core';
import { Resource } from '../../model/Resource';
import { VillageService } from '../../service/village.service';

@Component({
  selector: 'app-resource-line',
  standalone: false,
  templateUrl: './resource-line.component.html',
  styleUrl: './resource-line.component.css',
})
export class ResourceLineComponent implements OnInit {
  resources: Resource[] = [];
  constructor(private villageService: VillageService) {}

  ngOnInit(): void {
    this.resources = this.villageService.getResourceDB();
  }
}
