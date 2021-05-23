import routes from '../routes';

describe('Routes', () => {
  it('should return dashboard', () => {
    const dashboardRoute = routes.get('DASHBOARD').path;

    expect(dashboardRoute).toBe('/dashboard');
  });
  it('should return landing', () => {
    const landingRoute = routes.get('LANDING').path;

    expect(landingRoute).toBe('/');
  });
  it('should return login', () => {
    const loginRoute = routes.get('LOGIN').path;

    expect(loginRoute).toBe('/login');
  });
  it('should return register', () => {
    const register = routes.get('REGISTER').path;

    expect(register).toBe('/register');
  });
  it('should return verification', () => {
    const verificationRoute = routes.get('VERIFICATION').path;

    expect(verificationRoute).toBe('/verification');
  });
})
