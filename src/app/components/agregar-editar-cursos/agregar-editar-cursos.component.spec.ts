import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarCursosComponent } from './agregar-editar-cursos.component';

describe('AgregarEditarCursosComponent', () => {
  let component: AgregarEditarCursosComponent;
  let fixture: ComponentFixture<AgregarEditarCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEditarCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
