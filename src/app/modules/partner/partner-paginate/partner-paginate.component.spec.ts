import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerPaginateComponent } from './partner-paginate.component';

describe('PartnerPaginateComponent', () => {
  let component: PartnerPaginateComponent;
  let fixture: ComponentFixture<PartnerPaginateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerPaginateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerPaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
