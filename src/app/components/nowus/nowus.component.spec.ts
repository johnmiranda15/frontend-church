import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowUsComponent } from './nowus.component';

describe('NowUsComponent', () => {
  let component: NowUsComponent;
  let fixture: ComponentFixture<NowUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NowUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NowUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
