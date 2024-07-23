import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobServiceService } from 'src/app/job-service.service';
import { Job } from 'src/app/models/job';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  selectedJob: number = 0;
  displayJob? : Job;

  constructor(private myJobService: JobServiceService, private actRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    console.log(this.actRoute.snapshot.params['id']);
    this.selectedJob = parseInt(this.actRoute.snapshot.paramMap.get("id") ?? "");
    this.myJobService.getJob(this.selectedJob)
    .subscribe(response => {
      console.log(response);
      this.displayJob = response;
    });
  }

}
