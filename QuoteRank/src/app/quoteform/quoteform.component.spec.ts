import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteformComponent } from './quoteform.component';

describe('QuoteformComponent', () => {
  let component: QuoteformComponent;
  let fixture: ComponentFixture<QuoteformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
