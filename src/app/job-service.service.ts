import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job } from './models/job';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  jobList: Job[] = [
    {
      id: 1,
      title: "Qaulity Control",
      description: "Uncanny abiltiy to expose manufacting flaws in books of all shapes and sizes. Unwaving commitment to the life-cycle of a book.",
      duration: "2 years",
      employer: "Top Shelf Book Co."
  },
  {
      id: 2,
      title: "Public Relations",
      description: "Displayes an extremely high drive to shout things like 'Hello' and 'How is it going' to all passers by!",
      duration: "6 months",
      employer: "Weiler Inc."
  },
  {
    id: 3,
    title: "Supervisior",
    description: "Supervisor for all clean up assignments. Able to motiveate brother's to complete tasks.",
    duration: "1 year",
    employer: "Toys B Cleaned"
  }
  ];

  datasource: string = "assets/jobdata.json";

  title: String = "Work History";

  constructor() { }

  getAllJobs(): Observable<Job[]> {
    return of(this.jobList);
  }

  getJob(id: number): Observable<Job> {
    let job = new Job;
    this.jobList.forEach(j => {
      if (j.id === id) {
        job = j;
      }
    });
    return of(job);
  }


}
