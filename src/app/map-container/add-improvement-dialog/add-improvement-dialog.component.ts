import { Component, OnInit } from '@angular/core';
import { Resource } from '../../model/Resource';
import { VillageService } from '../../service/village.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequirementMap } from '../../model/improvement';

@Component({
  selector: 'app-add-improvement-dialog',
  standalone: false,
  templateUrl: './add-improvement-dialog.component.html',
  styleUrl: './add-improvement-dialog.component.css',
})
export class AddImprovementDialogComponent implements OnInit {
  improvements: string[] | undefined;
  resources: Resource[] | undefined = [];
  benefit: Resource | undefined;
  enableAdd: boolean = false;
  errorMessage = '';
  index: number = 0;

  constructor(
    private villageService: VillageService,
    private route: Router,
    private routeParam: ActivatedRoute
  ) {
    this.routeParam.params.subscribe((params) => {
      this.index = params['id'];
    });
  }

  ngOnInit(): void {
    this.improvements = this.villageService.getImprovementType();
  }

  getResourcesRequired(key: string) {
    let requirement = this.villageService.getRequiredMapDB(key);
    this.benefit = requirement?.benefit;
    this.resources = requirement?.required;
    this.enableAdd = this.villageService.isResourceAvailable(key);
  }

  add(key: string) {
    console.log('Add called');
    if (
      this.villageService.addImprovement({
        index: this.index,
        type: key,
        level: 1,
      })
    ) {
      this.route.navigate(['./home']);
    } else {
      console.log('Something went wrong while adding improvemnt');
      this.errorMessage = 'Something went wrong while adding improvemnt';
    }
  }
  cancel() {
    this.route.navigate(['./home']);
  }
}
