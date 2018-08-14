import { Component } from '@angular/core';
import { User } from './user';
import { HttpService } from './http.service';
import { Statement } from '../../node_modules/@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})

export class AppComponent {

  private _sortField: string=null;
  private _sortReverse: boolean=false;
  private _users: User[]=[];
  private _filterList: Object={ gender: [], department: [], city: [] };
     
  constructor(private http: HttpService){}
    
  ngOnInit() {
    // Подписываемся на изменения входящих данных
    this.http.getData().subscribe((data: User[]) => this._users = data.slice(), error => console.error(error));
  }

  // Изменение в фильтрах
  changeFilter(type: string, title: string) {
    const idx = this._filterList[type].findIndex(filter => filter === title)
    if (idx < 0) {
      this._filterList[type].push(title)
    } else {
      this._filterList[type].splice(idx, 1)
    }
  }

  // Выбран ли фильтр
  isChecked(group: string, title: string) {
    return this._filterList[group].some(item => item === title)
  }

  private getInObjectByPath(obj: object, path: string) {
    try {
      const listParams = path.split('.')
      return listParams.reduce((state, way) => {
        return state = state[way]
      }, obj)
    }
    catch(e) {
      return undefined
    }
  }

  // Получить список отфильтрованных и отсортированных данных
  get usersView() {
    let result = this._users.slice()
    for (let field in this._filterList) {
      if (this._filterList[field].length) {
        result = result.filter(user => {
          return this._filterList[field].some(param => {
            return field.toString() in user ? param === user[field] : param === user.address[field]
          })
        })
      }
    }
    if (!this._sortField) {
      return result; // Нет сортировки
    }
    return result.sort((prevUser: User, curUser: User) => {
      if (this.getInObjectByPath(prevUser,this._sortField) < this.getInObjectByPath(curUser,this._sortField)) {
        return this._sortReverse ? -1 : 1
      } else {
        return this._sortReverse ? 1 : -1
      }
    })
  }

  // Вспомогательная функция поиска уникальных значений в массиве и их суммирование
  private _uniqueSum(arr: any[]) {
    let result = [];
    arr.forEach(item => {
      let index = result.findIndex(enter => enter.title === item)
      if (index < 0) {
        // Не найдено совпадений
        result.push({ 
          title: item,
          length: 1
        })
      } else {
        result[index].length++;
      }
    })
    // Без сортировки постоянно меняется положение фильтров
    return result.sort((prev, cur) => {
        return prev.title < cur.title ? 1 : -1
    })
  }

  // Список фильтров с количеством вхождений
  get getFilters() {
    return [{
        title: 'Gender',
        group: 'gender',
        list: this._uniqueSum(this.usersView.map(user => user.gender))
      },
      {
        title: 'City',
        group: 'city',
        list: this._uniqueSum(this.usersView.map(user => user.address.city)),
      },
      {
        title: 'Department',
        group: 'department',
        list: this._uniqueSum(this.usersView.map(user => user.department))
      }]
  }

  // Обработка события сортировки
  onSortTable(path: string) {
    this._sortField = path
    this._sortReverse = this._sortField === path && !this._sortReverse
  }
}