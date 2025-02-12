import { Component, OnInit } from '@angular/core';
import { Improvement } from '../../model/improvement';
import { VillageService } from '../../service/village.service';

@Component({
  selector: 'app-tile',
  standalone: false,
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.css',
})
export class TileComponent implements OnInit {
  grids: Improvement[] = [];

  constructor(private villageService: VillageService) {}

  ngOnInit(): void {
    let temp: any = this.villageService.getImprovements();
    this.grids = temp;
  }
}
