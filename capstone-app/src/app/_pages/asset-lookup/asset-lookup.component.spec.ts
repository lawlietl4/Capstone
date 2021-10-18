import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetLookupComponent } from './asset-lookup.component';

describe('AssetLookupComponent', () => {
  let component: AssetLookupComponent;
  let fixture: ComponentFixture<AssetLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
