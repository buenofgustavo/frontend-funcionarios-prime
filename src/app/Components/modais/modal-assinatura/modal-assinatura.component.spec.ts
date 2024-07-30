import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAssinaturaComponent } from './modal-assinatura.component';

describe('ModalAssinaturaComponent', () => {
  let component: ModalAssinaturaComponent;
  let fixture: ComponentFixture<ModalAssinaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAssinaturaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalAssinaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
