import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';

export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

/**
 * @title Sorting overview
 */
@Component({
  selector: 'sort-table',
  templateUrl: 'sort-table.component.html',
  styleUrls: ['sort-table.component.css'],
})
export class sortTable {
  desserts: Dessert[] = [
    { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
    {
      name: 'Ice cream sandwich',
      calories: 237,
      fat: 9,
      carbs: 37,
      protein: 4,
    },
    { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
    { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
    { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
  ];

  table: any[] = [
    {
      createdBy: 'Connie Tanner',
      title: '353114_01',
      callTye: 'Initial Call',
      callerType: 'Health Navigator (RN)',
      date: '19 Sep 2021 07:06 PM',
    },
    {
      createdBy: 'Stacy Cheng',
      title: '353114_11',
      callTye: 'Initial Call',
      callerType: 'Dietician',
      date: '21 Sep 2021 07:17 PM',
    },
    {
      createdBy: 'Connie Tanner',
      title: '353114_21',
      callTye: 'Other Interactions',
      callerType: 'Health Navigator (RN)',
      date: '23 Sep 2021 02:29 PM ',
    },
  ];

  sortedData: Dessert[];

  constructor() {
    this.sortedData = this.desserts.slice();
  }

  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'calories':
          return compare(a.calories, b.calories, isAsc);
        case 'fat':
          return compare(a.fat, b.fat, isAsc);
        case 'carbs':
          return compare(a.carbs, b.carbs, isAsc);
        case 'protein':
          return compare(a.protein, b.protein, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
