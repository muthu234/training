import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFrondendComponent } from './crud-frondend.component';

describe('CrudFrondendComponent', () => {
  let component: CrudFrondendComponent;
  let fixture: ComponentFixture<CrudFrondendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudFrondendComponent]
    });
    fixture = TestBed.createComponent(CrudFrondendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
