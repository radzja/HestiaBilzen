// import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';

describe('AuthService', () => {
  let service: AuthService;
  beforeEach(() => {
    service = new AuthService();
    service.logout(); // Always call logout before running any tests (to set the state to the correct initiation state)
    }
  );

  // Test if state at initiation is correct, isLoggedIn => should return false
  it('isLoggedIn should return false to start with', () => {
    // Act
    expect(service.isLoggedIn()).toBeFalsy();
  });

  // Test if the user is logged in after a successful login.
  it('isLoggedIn should return true after a successful login', () => {
    // Arrange simulated input in login form
    const formBuilder = new FormBuilder();
    const loginForm  =  formBuilder.group({
      email: ['hermans.stephen@gmail.com'],
      password: ['123456789']
    });

    // Arrange a login with the simulated login form input
    service.login(loginForm.value);

    // Act: check if login was successful by calling method isLoggedIn => should return true
    expect(service.isLoggedIn()).toBeTruthy();
  });

  // Test if the user is not logged in after an unsuccessful login (using unauthorized credentials)
  it('isLoggedIn should return false after a unsuccessful login', () => {
    // Arrange simulated input in login form with unauthorized credentials
    const formBuilder = new FormBuilder();
    const loginForm  =  formBuilder.group({
      email: ['user@wrong.com'],
      password: ['notAuthorized']
    });

    // Arrange a login with the simulated login form input (unauthorized credentials)
    service.login(loginForm.value);

    // Act: check if login was unsuccessful by calling method isLoggedIn => should return false
    expect(service.isLoggedIn()).toBeFalsy();
  });
});
