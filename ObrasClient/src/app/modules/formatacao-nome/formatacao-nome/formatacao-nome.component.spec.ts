import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatacaoNomeComponent } from './formatacao-nome.component';

describe('FormatacaoNomeComponent', () => {
  let component: FormatacaoNomeComponent;
  let fixture: ComponentFixture<FormatacaoNomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatacaoNomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatacaoNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
