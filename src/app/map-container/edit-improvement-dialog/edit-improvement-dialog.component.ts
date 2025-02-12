import { Component, OnInit } from '@angular/core';
import { Improvement } from '../../model/improvement';
import { Resource } from '../../model/Resource';
//import { ResourceService } from '../../service/resource.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VillageService } from '../../service/village.service';

@Component({
  selector: 'app-edit-improvement-dialog',
  standalone: false,
  templateUrl: './edit-improvement-dialog.component.html',
  styleUrl: './edit-improvement-dialog.component.css',
})
export class EditImprovementDialogComponent implements OnInit {
  improvement: Improvement | undefined;
  resources: Resource[] | undefined = [];
  benefit: Resource | undefined;
  keyName: string = '';
  index: number = -1;
  enableUpgrade: boolean = false;
  enableDowngrade: boolean = false;
  enableRemove: boolean = false;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private routing: Router,
    private villageService: VillageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.index = params['id'];
    });
    if (this.index >= 0) {
      this.improvement = this.villageService
        .getImprovements()
        .find((data) => data?.index == this.index);
      let requirements = this.villageService.getRequiredMapDB(
        this.improvement!.type
      );
      this.resources = requirements?.required;
      this.benefit = requirements?.benefit;
      if (this.improvement) {
        this.enableDowngrade =
          this.improvement.level <= 1
            ? false
            : true &&
              this.villageService.isResourceAvailable(this.improvement.type);
        this.enableUpgrade = this.villageService.isResourceAvailable(
          this.improvement.type
        );
      }

      console.log(this.improvement);
      this.enableRemove = this.villageService.isResourceAvailable(
        this.improvement!.type,
        this.improvement?.level
      );
    }
  }

  upgrade() {
    console.log('Upgrade called');
    if (this.index >= 0 && this.villageService.upgradeImprovement(this.index)) {
      if (!this.errorMessage) {
        this.routing.navigate(['./home']);
      }
    } else {
      this.errorMessage = 'Upgrade failed';
      console.log('Error while upgrading improvement');
    }
  }

  downgrade() {
    if (this.index >= 0) {
      this.errorMessage = this.villageService.downgradeImprovement(this.index);
      this.routing.navigate(['./home']);
    } else {
      this.errorMessage = 'Downgrade failed';
      console.log('Error while downgrading improvement');
    }
  }

  cancel() {
    this.routing.navigate(['./home']);
  }

  remove() {
    if (this.index >= 0) {
      console.log('Remove Improvement called');
      this.errorMessage = this.villageService.removeImprovement(this.index);

      if (!this.errorMessage) {
        this.routing.navigate(['./home']);
      }
    } else {
      this.errorMessage = 'Remove failed';
      console.log('Error while Removing improvement');
    }
  }
}
