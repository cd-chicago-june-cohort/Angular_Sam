import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotelistComponent } from './quotelist.component';

describe('QuotelistComponent', () => {
  let component: QuotelistComponent;
  let fixture: ComponentFixture<QuotelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
