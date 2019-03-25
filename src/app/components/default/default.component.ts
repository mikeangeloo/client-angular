import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UserService} from '../../services/user.service';
import {Car} from '../../models/car';
import {CarService} from '../../services/car.service';

@Component({
  selector: 'default',
  templateUrl: './default.component.html',
  providers: [UserService, CarService]
})

export class DefaultComponent implements OnInit {
  public title: string;
  public token;
  public cars: Array<Car>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _carService: CarService
  ) {
    this.title = 'Inicio';
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    console.log('default.component cargado correctamente !!');
    this.getCars();
  }

  getCars(){
    this._carService.getCars(this.token).subscribe(
      response => {
        if(response.status == 'success') {
          this.cars = response.cars;
        }

      }, error => {
        console.log(error);
      }
    );
  }

  deleteCar(id) {
    this._carService.delete(this.token, id).subscribe(
      response => {
        this.getCars();
        //this._router.navigate['home'];
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
