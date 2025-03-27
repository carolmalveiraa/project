import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Ambulance, User, Home } from 'lucide-react';

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-red-600 to-blue-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 text-white hover:opacity-90 transition-opacity">
              <Ambulance className="h-8 w-8" />
              <h1 className="text-2xl font-bold">
                Nordeste Emergências
              </h1>
            </Link>
            <nav className="flex items-center space-x-6">
              <Link 
                to="/" 
                className="text-white hover:opacity-90 transition-opacity flex items-center space-x-2"
              >
                <Home className="h-5 w-5" />
                <span>Início</span>
              </Link>
              <Link 
                to="/login" 
                className="text-white hover:opacity-90 transition-opacity flex items-center space-x-2"
              >
                <User className="h-5 w-5" />
                <span>Área do RH</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <p>Telefone: (81) 3726-3018</p>
              <p>Email: contato@nordesteemergencias.com.br</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Endereço</h3>
              <p>Rua Severino Pereira da Silva, 68</p>
              <p>Centro, Carpina - PE</p>
              <p>CEP: 55815-140</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
              <div className="space-y-2">
                <a href="https://www.instagram.com/nordesteemergencias/" target="_blank" rel="noopener noreferrer" className="block hover:text-red-400">
                  Instagram
                </a>
                <a href="https://www.facebook.com/nordesteemergencias" target="_blank" rel="noopener noreferrer" className="block hover:text-red-400">
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; {new Date().getFullYear()} Nordeste Emergências. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}