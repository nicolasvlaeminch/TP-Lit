export const AuthMixin = (Base) =>
    class extends Base {
      login(email, password) {
        if (email === 'admin@admin' && password === 'admin') {
          localStorage.setItem('authToken', 'fakeToken');
          return { success: true };
        }
        return { success: false, error: 'Email o contraseña incorrecta' };
      }
  
      isAuthenticated() {
        return !!localStorage.getItem('authToken');
      }
  
      logout() {
        localStorage.removeItem('authToken');
      }
  
      redirectTo(path) {
        import('@vaadin/router').then(({ Router }) => Router.go(path));
      }
    };
  