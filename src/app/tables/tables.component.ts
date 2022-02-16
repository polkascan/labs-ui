import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { kusamaData, polkadotData } from './tables.data';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TablesComponent implements OnInit {
  dataSource: unknown[] = [];
  displayedColumns = ['date', 'polkadot', 'kusama'];

  constructor() { }

  ngOnInit(): void {
    const dates = kusamaData.map((v) => v[0]);
    const kd = kusamaData.map((v) => v[1]);
    const pd = polkadotData.map((v) => v[1]);

    this.dataSource = dates.map((v, i) => {
      return {
        date: new Date(v),
        polkadot: pd[i],
        kusama: kd[i]
      }
    });
  }



}
