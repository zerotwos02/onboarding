import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NavButtonComponent } from './nav-button.component';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'home', component: HomeComponent },
          { path: 'foo', component: HomeComponent }, // Assuming FooComponent is similar
        ]),
        HomeComponent, // Import the standalone component
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the home component', () => {
    expect(component).toBeTruthy();
  });

  it('should smooth scroll to bottom on button click', async () => {
    await router.navigate(['/home']);
    await fixture.whenStable();
    fixture.detectChanges();

    const bottomButton = fixture.debugElement.query(By.css('nav-button[fragment="bottom"] a'));
    bottomButton.nativeElement.click();
    await fixture.whenStable();
    expect(location.path()).toBe('/home#bottom');
  });

  it('should smooth scroll to top on button click', async () => {
    await router.navigate(['/home']);
    await fixture.whenStable();
    fixture.detectChanges();

    const topButton = fixture.debugElement.query(By.css('nav-button[fragment="top"] a'));
    topButton.nativeElement.click();
    await fixture.whenStable();
    expect(location.path()).toBe('/home#top');
  });
});
