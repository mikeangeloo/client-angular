import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UserService} from '../../services/user.service';
import {Car} from '../../models/car';
import {CarService} from '../../services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  providers: [UserService, CarService]
})
export class CarDetailComponent implements OnInit {
  public car: Car;
  public title: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _carService: CarService
  ) {
    this.title = 'Detalle de Car';

  }

  ngOnInit() {
    this.getCar();
  }

  getCar() {
    this._route.params.subscribe(params => {
      const id = +params['id'];
      this._carService.getCar(id).subscribe(
        response => {
          if (response.status == 'success') {
            this.car = response.car;
          } else {
            this._router.navigate(['home']);
          }
        },
        error => {
          console.log(<any> error);
        }
      );
    });
  }

}
