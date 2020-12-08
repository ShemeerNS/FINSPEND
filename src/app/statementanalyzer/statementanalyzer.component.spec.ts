import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementanalyzerComponent } from './statementanalyzer.component';

describe('StatementanalyzerComponent', () => {
  let component: StatementanalyzerComponent;
  let fixture: ComponentFixture<StatementanalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatementanalyzerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementanalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
