import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosNaoEncontradoComponent } from './usuarios-nao-encontrado.component';

describe('UsuariosNaoEncontradoComponent', () => {
  let component: UsuariosNaoEncontradoComponent;
  let fixture: ComponentFixture<UsuariosNaoEncontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosNaoEncontradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosNaoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
