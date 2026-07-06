import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

export function Login({ onLogin }: LoginProps) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro('');
    setCarregando(true);

    setTimeout(() => {
      if (usuario === 'Wiepz13' && senha === 'Yami.884!') {
        localStorage.setItem('mj_auth', '1');
        onLogin();
      } else {
        setErro('Usuário ou senha incorretos.');
      }
      setCarregando(false);
    }, 400);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header igual ao app */}
      <header className="h-16 bg-[#5A0B13] flex items-center justify-center px-4 shadow-md">
        <img src="/logo.png" alt="MJ Fitness" className="h-11 object-contain" />
      </header>

      {/* Conteúdo central */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h1 className="text-xl font-semibold text-gray-900 text-center mb-1">
              Bem-vindo
            </h1>
            <p className="text-sm text-gray-500 text-center mb-8">
              Entre com suas credenciais para continuar
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Usuário */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Usuário
                </label>
                <input
                  type="text"
                  value={usuario}
                  onChange={e => { setUsuario(e.target.value); setErro(''); }}
                  placeholder="Digite seu usuário"
                  autoComplete="username"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#5A0B13] focus:border-transparent transition"
                />
              </div>

              {/* Senha */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Senha
                </label>
                <div className="relative">
                  <input
                    type={mostrarSenha ? 'text' : 'password'}
                    value={senha}
                    onChange={e => { setSenha(e.target.value); setErro(''); }}
                    placeholder="Digite sua senha"
                    autoComplete="current-password"
                    className="w-full px-4 py-2.5 pr-11 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#5A0B13] focus:border-transparent transition"
                  />
                  <button
                    type="button"
                    onClick={() => setMostrarSenha(!mostrarSenha)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                    aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
                  >
                    {mostrarSenha ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Erro */}
              {erro && (
                <p className="text-sm text-red-600 text-center -mt-1">{erro}</p>
              )}

              {/* Botão */}
              <button
                type="submit"
                disabled={carregando || !usuario || !senha}
                className="w-full py-2.5 bg-[#5A0B13] text-white text-sm font-semibold rounded-lg hover:bg-[#4a0910] active:bg-[#3d080f] disabled:opacity-50 disabled:cursor-not-allowed transition-colors mt-1"
              >
                {carregando ? 'Verificando...' : 'Continuar'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
