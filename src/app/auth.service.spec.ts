// import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';

describe('AuthService', () => {
  let service: AuthService;
  beforeEach(() => {
    service = new AuthService();
    // TestBed.configureTestingModule();
    // this.service
    service.logout();
  }
  ); // TestBed.configureTestingModule({}));

  it('isLoggedIn should be false to start with', () => {
    // const service: AuthService = new AuthService();
    // Act
    expect(service.isLoggedIn()).toBeFalsy();
  });

  /* it('isLoggedIn should be true after successful authentication', () => {
    // Arrange
    let formBuilder: FormBuilder;
    const loginForm: FormGroup = formBuilder.group({
      email: ['hermans.stephen@gmail.com'],
      password: ['123456789']
    });
    this.service.login(loginForm);

    // Act
    expect(this.service.isLoggedIn()).toBeTruthy();
  });

  it('login & isLoggedIn should return true after successful authentication', () => {
    // Arrange
    let formBuilder: FormBuilder;
    const loginForm: FormGroup = formBuilder.group({
      email: ['hermans.stephen@gmail.com'],
      password: ['123456789']
    });
    this.service.login(this.loginForm);

    // Act
    expect(this.service.login(this.loginForm)).toBeTruthy();
    expect(this.service.isLoggedIn()).toBeTruthy();
  });

  it('login & isLoggedIn should return false after authentication with incorrect credentials', () => {
    // Arrange
    let formBuilder: FormBuilder;
    const loginForm: FormGroup = formBuilder.group({
      email: ['unauthorized@user.be'],
      password: ['123456789']
    });

    // Act
    expect(this.service.login(this.loginForm)).toBeFalsy();
    expect(this.service.isLoggedIn()).toBeFalsy();
  }); */
});
