import { Component, OnInit } from '@angular/core';
import { IChartProps, DashboardChartsData } from '../../../views/dashboard/dashboard-charts-data';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { SubscriberFetchTotal } from '../../subscribers/store/actions';
import { SubscriberState } from '../../subscribers/store/state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  currentDate = new Date();

  @Select(SubscriberState.subscriberGetTotal) subscribersTotal$: Observable<number>;

  constructor(private chartsData: DashboardChartsData, private store: Store) {
  }

  ngOnInit(): void {
    this.initCharts();

    this.store.dispatch(new SubscriberFetchTotal())
  }

  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }

}
