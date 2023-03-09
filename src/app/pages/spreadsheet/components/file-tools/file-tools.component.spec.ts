import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileToolsComponent } from './file-tools.component';

describe('FileToolsComponent', () => {
  let component: FileToolsComponent;
  let fixture: ComponentFixture<FileToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
