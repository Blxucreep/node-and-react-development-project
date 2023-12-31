import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  user: any = {};
  step10 = false;
  step20 = false;
  step30 = false;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    // get the user's achievements from the database
    // if the user has completed the step 10, 20, or 30, set the corresponding variable to true
    const user_id = '1';
    this.fetchAchievements(user_id);
  }

  fetchAchievements(user_id: string) {
    this.databaseService.getUserById(user_id).subscribe(
      (response) => {
        this.user = response;
        
        // set the corresponding variable to true if the user has completed the step 10, 20, or 30
        this.step10 = this.user.achieved >= 10;
        this.step20 = this.user.achieved >= 20;
        this.step30 = this.user.achieved >= 30;
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
  }
}
