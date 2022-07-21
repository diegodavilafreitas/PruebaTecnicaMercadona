import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditadoComponent } from './editado.component';

describe('EditadoComponent', () => {
  let component: EditadoComponent;
  let fixture: ComponentFixture<EditadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
