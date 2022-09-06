import { IAppState } from 'src/app/store/state/app.state';
import { PlaceService } from './services/place.service';
import { MarkerService } from './services/marker.service';
import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, HeaderComponent],
      providers: [provideMockStore({})],
    }).compileComponents();
  });

  it('should create the "App"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the "App Header"', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
