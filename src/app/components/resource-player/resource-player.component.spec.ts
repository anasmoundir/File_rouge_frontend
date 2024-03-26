import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcePlayerComponent } from './resource-player.component';

describe('ResourcePlayerComponent', () => {
  let component: ResourcePlayerComponent;
  let fixture: ComponentFixture<ResourcePlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourcePlayerComponent]
    });
    fixture = TestBed.createComponent(ResourcePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
