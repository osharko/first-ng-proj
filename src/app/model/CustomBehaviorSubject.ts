import { BehaviorSubject, Observable } from "rxjs";

export class CustomBehaviorSubject<T>{
  private value: BehaviorSubject<T>;
  public value$: Observable<T>;
  public get Value(): T { return this.value.getValue(); }
  public set Value(value: T) { this.value.next(value); }

  public constructor(value: T) {
    this.value = new BehaviorSubject<T>(value);
    this.value$ = this.value.asObservable();
  }
}