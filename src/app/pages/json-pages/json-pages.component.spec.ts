import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPagesComponent } from './json-pages.component';

describe('JsonPagesComponent', () => {
  let component: JsonPagesComponent;
  let fixture: ComponentFixture<JsonPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
