import { useState } from 'react';

export default function Login() {
  const [signInState, setSignInState] = useState({ error: null });
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    
    try {
      const formData = new FormData(event.currentTarget);
      
      // Convertir FormData a objeto JSON
      const data = Object.fromEntries(formData.entries());
      
      // Realizar la petición al backend
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Error en el inicio de sesión');
      }

      const result = await response.json();
      setSignInState(result);
    } catch (error) {
      setSignInState({
        error: error.message || 'Error desconocido'
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (

    <main>
      <div className='container'>
      <h1>Sign-in</h1>
      <h2>Email + Password</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            autoCapitalize="off"
            autoComplete="username"
            autoFocus
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoCapitalize="off"
            autoComplete="current-password"
            required
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Iniciando...' : 'Sign-in'}
        </button>
      </form>

      <pre>{JSON.stringify(signInState, null, 2)}</pre>
      </div>
    </main>
  );
}