import React, { useState } from 'react';
import { FileText, CheckSquare, Upload, AlertCircle, Building2, Target, Heart, MapPin, Phone, Mail, Send } from 'lucide-react';

const AVAILABLE_ROLES = [
  'Enfermeiro',
  'Técnico de Enfermagem',
  'Socorrista',
  'Condutor de Ambulância',
  'Médico',
  'Auxiliar Administrativo',
  'Coordenador',
  'Outro'
];

const STATES_WITH_SERVICE = [
  'Ceará',
  'Rio Grande do Norte',
  'Pernambuco',
  'Sergipe',
  'Bahia',
  'Piauí',
  'Maranhão',
  'Pará',
  'Amazonas',
  'Goiás',
  'Mato Grosso',
  'Espírito Santo',
  'Rio de Janeiro',
  'São Paulo'
];

export function FileUpload() {
  const [selectedRole, setSelectedRole] = useState('');
  const [customRole, setCustomRole] = useState('');
  const [hasDependent, setHasDependent] = useState(false);
  const [dependentCount, setDependentCount] = useState(0);
  const [maritalStatus, setMaritalStatus] = useState('solteiro');

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-blue-600 text-white py-16 rounded-lg shadow-xl">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Nordeste Emergências</h1>
          <p className="text-xl mb-8">
            Há mais de 15 anos oferecendo serviços de excelência em remoção e assistência médica
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <AlertCircle className="h-8 w-8" />
              <span>Atendimento 24h</span>
            </div>
            <div className="flex items-center space-x-3">
              <FileText className="h-8 w-8" />
              <span>Profissionais Qualificados</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckSquare className="h-8 w-8" />
              <span>Certificações e Qualidade</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quem Somos</h2>
            <p className="text-gray-600 leading-relaxed">
              A Nordeste Emergências é uma empresa moderna e equipada com a mais alta tecnologia para atendimento pré-hospitalar de urgência e
              emergência médica, preparada para atuar em todo o território nacional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="h-6 w-6 text-red-600" />
                <h3 className="text-xl font-semibold">Missão</h3>
              </div>
              <p className="text-gray-600">
                Prestar serviços diferenciados, visando sempre o bem-estar de nossos clientes e colaboradores, garantindo qualidade de atendimento, através de profissionais motivados e capacitados.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Building2 className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold">Visão</h3>
              </div>
              <p className="text-gray-600">
                Ser referência nacional no atendimento pré-hospitalar e ao mesmo tempo ser uma empresa inovadora, reconhecida pela qualidade no atendimento, eficiência e tecnologia.
              </p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="h-6 w-6 text-red-600" />
                <h3 className="text-xl font-semibold">Valores</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Ética e transparência</li>
                <li>• Respeito à vida</li>
                <li>• Sustentabilidade</li>
                <li>• Excelência no atendimento</li>
                <li>• Valorização de colaboradores</li>
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <MapPin className="h-6 w-6 text-red-600" />
              <h3 className="text-2xl font-semibold">Onde Estamos</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {STATES_WITH_SERVICE.map((state) => (
                <div key={state} className="bg-gray-50 p-3 rounded-lg text-center">
                  {state}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Document Upload Section */}
      <section className="bg-white shadow-lg rounded-lg p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-6">
            <Upload className="h-8 w-8 text-red-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              Envio de Documentação
            </h2>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Documentação Pessoal</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Digite seu nome completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Função/Cargo
                </label>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Selecione um cargo</option>
                  {AVAILABLE_ROLES.map((role) => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
                {selectedRole === 'Outro' && (
                  <input
                    type="text"
                    value={customRole}
                    onChange={(e) => setCustomRole(e.target.value)}
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Digite seu cargo"
                  />
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Estado Civil
                </label>
                <select
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="solteiro">Solteiro(a)</option>
                  <option value="casado">Casado(a)</option>
                  <option value="divorciado">Divorciado(a)</option>
                  <option value="viuvo">Viúvo(a)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Possui Dependentes?
                </label>
                <div className="space-y-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-red-600"
                      name="hasDependent"
                      checked={!hasDependent}
                      onChange={() => {
                        setHasDependent(false);
                        setDependentCount(0);
                      }}
                    />
                    <span className="ml-2">Não</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      className="form-radio text-red-600"
                      name="hasDependent"
                      checked={hasDependent}
                      onChange={() => setHasDependent(true)}
                    />
                    <span className="ml-2">Sim</span>
                  </label>
                </div>
                {hasDependent && (
                  <div className="mt-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Número de Dependentes
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={dependentCount}
                      onChange={(e) => setDependentCount(parseInt(e.target.value))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Documentos Necessários</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'RG',
                'Foto 3x4',
                'CNH',
                'Título de Eleitor',
                'CTPS',
                'PIS',
                'Reservista',
                'Currículo',
                'Certidão de Nascimento/Casamento',
                'Cartão do SUS',
                'Comprovante de Vacinação',
                'Dados Bancários',
                'Certidão Negativa do Conselho de Classe',
                'Carteira da Classe',
              ].map((doc) => (
                <div key={doc} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <FileText className="h-5 w-5 text-red-600" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{doc}</p>
                  </div>
                  <label className="cursor-pointer bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
                    Upload
                    <input type="file" className="hidden" accept=".pdf,.jpg,.png" />
                  </label>
                </div>
              ))}
            </div>
          </div>

          {hasDependent && dependentCount > 0 && (
            <div className="mt-8 space-y-6">
              <h3 className="text-xl font-semibold">Documentos dos Dependentes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Certidão de Nascimento',
                  'RG',
                  'CPF',
                  'Carteira de Vacinação',
                  'Declaração Escolar',
                ].map((doc) => (
                  <div key={doc} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{doc}</p>
                    </div>
                    <label className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                      Upload
                      <input type="file" className="hidden" accept=".pdf,.jpg,.png" />
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8">
            <button className="w-full bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition-colors font-medium">
              Enviar Documentação
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white shadow-lg rounded-lg p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Entre em Contato</h2>
            <p className="text-gray-600 mt-2">Estamos à disposição para atender você</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Unidade Caucaia</h3>
              <div className="space-y-3">
                <p className="flex items-center">
                  <MapPin className="h-5 w-5 text-red-600 mr-2" />
                  Avenida Central, 2521 - Icaraí, Caucaia/CE
                </p>
                <p className="flex items-center">
                  <Phone className="h-5 w-5 text-red-600 mr-2" />
                  4007-2286
                </p>
                <p className="flex items-center">
                  <Phone className="h-5 w-5 text-red-600 mr-2" />
                  WhatsApp: (85) 98177-4004
                </p>
                <p className="flex items-center">
                  <Mail className="h-5 w-5 text-red-600 mr-2" />
                  sac@nordesteemergencias.com.br
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Unidade Cuiabá</h3>
              <div className="space-y-3">
                <p className="flex items-center">
                  <MapPin className="h-5 w-5 text-red-600 mr-2" />
                  Rua Desembargador Milton Figueiredo Ferreira Mendes, S/N - Jardim Petrópolis, Cuiabá - MT
                </p>
                <p className="flex items-center">
                  <Phone className="h-5 w-5 text-red-600 mr-2" />
                  4007-2286
                </p>
                <p className="flex items-center">
                  <Mail className="h-5 w-5 text-red-600 mr-2" />
                  sac@nordesteemergencias.com.br
                </p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mensagem
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Digite sua mensagem"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition-colors font-medium flex items-center justify-center"
            >
              <Send className="h-5 w-5 mr-2" />
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}