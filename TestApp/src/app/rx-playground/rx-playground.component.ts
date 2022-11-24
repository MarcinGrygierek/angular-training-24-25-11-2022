import { Component, OnInit } from '@angular/core';
import { Observable, timer,  of, from } from 'rxjs';
import { startWith, takeUntil, delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-rx-playground',
  templateUrl: './rx-playground.component.html',
  styleUrls: ['./rx-playground.component.scss']
})
export class RxPlaygroundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(10)
      }, 5000)
    })

    const obs = new Observable<number>(observer => {
      const interval = setInterval(() => {

        observer.next(Math.round(Math.random() * 100));
      }, 500)

      return {
        unsubscribe() {
          clearInterval(interval);
        }
      }
    })

    // const subscription = obs.pipe(
    //   startWith(100000),
    //   takeUntil(timer(2000))
    // ).subscribe(val => {
    //   console.log(val);
    // })

    // setTimeout(() => {
    //   promise.then(val => {
    //     console.log('Promise', val)
    //   })

    //   obs.subscribe(val => {
    //     console.log('Observable', val)
    //   })
    // }, 4000);

    const arr = [1, 2, 3, 4];

    of(arr).subscribe(val => { console.log(val) });

    from(arr).pipe(
      map(val => of(val)
      .pipe(delay(Math.random() * 1000))
      .subscribe(val => console.log(val)))
    ).subscribe(val => { //console.log(val)
     });

  }

  
}
