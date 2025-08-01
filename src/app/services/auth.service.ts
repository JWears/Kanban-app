import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: 'Developer' | 'Project Manager' | 'Designer' | 'Tester' | 'Admin';
  avatar?: string;
  token: string;
}

export interface AuthResponse {
  user: AuthUser;
  token: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = ''; // TODO: Configure API base URL
  private currentUserSubject = new BehaviorSubject<AuthUser | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  // Mock users for development
  private mockUsers: AuthUser[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Developer',
      token: 'mock-jwt-token-1'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Project Manager',
      token: 'mock-jwt-token-2'
    },
    {
      id: 3,
      name: 'Admin User',
      email: 'admin@example.com',
      role: 'Admin',
      token: 'mock-jwt-token-3'
    }
  ];

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    // Check if user is already logged in on service initialization
    this.checkStoredAuth();
  }

  private checkStoredAuth(): void {
    const storedUser = localStorage.getItem('currentUser');
    const storedToken = localStorage.getItem('authToken');
    
    if (storedUser && storedToken) {
      const user: AuthUser = JSON.parse(storedUser);
      this.currentUserSubject.next(user);
      this.isAuthenticatedSubject.next(true);
    }
  }

  login(credentials: LoginRequest): Observable<AuthResponse> {
    // In production, this would be an HTTP call to your backend
    // return this.http.post<AuthResponse>(`${this.baseUrl}/auth/login`, credentials);
    
    // Mock implementation for development
    return this.mockLogin(credentials);
  }

  private mockLogin(credentials: LoginRequest): Observable<AuthResponse> {
    // Simulate API delay
    return of(null).pipe(
      map(() => {
        // Find user by email
        const user = this.mockUsers.find(u => u.email === credentials.email);
        
        if (!user) {
          throw new Error('User not found');
        }
        
        // In real implementation, you'd verify password hash
        // For demo, we'll accept any password for existing users
        if (credentials.password.length < 6) {
          throw new Error('Password must be at least 6 characters');
        }

        const response: AuthResponse = {
          user: user,
          token: user.token,
          message: 'Login successful'
        };

        // Store auth data
        this.setAuthData(user, user.token);
        
        return response;
      }),
      catchError(error => {
        return throwError(() => new Error(error.message || 'Login failed'));
      })
    );
  }

  register(userData: RegisterRequest): Observable<AuthResponse> {
    // In production: return this.http.post<AuthResponse>(`${this.baseUrl}/auth/register`, userData);
    
    return this.mockRegister(userData);
  }

  private mockRegister(userData: RegisterRequest): Observable<AuthResponse> {
    return of(null).pipe(
      map(() => {
        // Validate passwords match
        if (userData.password !== userData.confirmPassword) {
          throw new Error('Passwords do not match');
        }

        if (userData.password.length < 6) {
          throw new Error('Password must be at least 6 characters');
        }

        // Check if user already exists
        const existingUser = this.mockUsers.find(u => u.email === userData.email);
        if (existingUser) {
          throw new Error('User with this email already exists');
        }

        // Create new user
        const newUser: AuthUser = {
          id: this.mockUsers.length + 1,
          name: userData.name,
          email: userData.email,
          role: 'Developer', // Default role
          token: `mock-jwt-token-${this.mockUsers.length + 1}`
        };

        // Add to mock users
        this.mockUsers.push(newUser);

        const response: AuthResponse = {
          user: newUser,
          token: newUser.token,
          message: 'Registration successful'
        };

        // Store auth data
        this.setAuthData(newUser, newUser.token);

        return response;
      }),
      catchError(error => {
        return throwError(() => new Error(error.message || 'Registration failed'));
      })
    );
  }

  logout(): void {
    // In production, you might want to call an API endpoint to invalidate the token
    // this.http.post(`${this.baseUrl}/auth/logout`, {}).subscribe();
    
    this.clearAuthData();
    this.router.navigate(['/user-login']);
  }

  private setAuthData(user: AuthUser, token: string): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('authToken', token);
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  private clearAuthData(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('authToken');
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
  }

  getCurrentUser(): AuthUser | null {
    return this.currentUserSubject.value;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Helper method to check if user has specific role
  hasRole(role: string): boolean {
    const user = this.getCurrentUser();
    return user ? user.role === role : false;
  }

  // Helper method to check if user is admin
  isAdmin(): boolean {
    return this.hasRole('Admin');
  }
}
