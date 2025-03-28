import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Target, Building2, Heart, MapPin, ArrowRight } from 'lucide-react';

const STATES_WITH_SERVICE = [
  'Ceará', 'Rio Grande do Norte', 'Pernambuco', 'Sergipe', 'Bahia',
  'Piauí', 'Maranhão', 'Pará', 'Amazonas', 'Goiás', 'Mato Grosso',
  'Espírito Santo', 'Rio de Janeiro', 'São Paulo'
];

export function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img 
            src="https://static.wixstatic.com/media/15b2f2_7e947d70182c47938b42e83bdbb9a608~mv2.jpg"
            alt="Nordeste Emergências Ambulância"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-blue-600/90"></div>
        </div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl backdrop-blur-sm bg-black/30 p-8 rounded-lg">
            <h1 className="text-5xl font-bold mb-6 text-white">Nordeste Emergências</h1>
            <p className="text-xl mb-8 leading-relaxed text-white">
              Há mais de 15 anos oferecendo serviços de excelência em remoção e assistência médica.
              Atuamos com o que há de mais moderno em tecnologia para atendimento pré-hospitalar
              de urgência e emergência médica.
            </p>
            <Link 
              to="/documentacao" 
              className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Área do Colaborador
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white rounded-lg shadow-lg p-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quem Somos</h2>
              <p className="text-gray-600 leading-relaxed">
                A Nordeste Emergências é uma empresa moderna e equipada com a mais alta tecnologia para atendimento pré-hospitalar de urgência e
                emergência médica, preparada para atuar em todo o território nacional. Sua atuação visa suprir a carência no transporte terrestre
                e aéreo emergencial de qualidade, para atender em diversos segmentos, como: hospitais, planos de saúde, indústrias, serviço de saúde
                offshore e eventos, através de uma central de atendimento médico 24 horas.
              </p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img 
                src="https://static.wixstatic.com/media/1a1c95_f2964fc24a3843d7bb610c6a5bcb717b~mv2.jpg"
                alt="Equipe Nordeste Emergências"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="h-6 w-6 text-red-600" />
                <h3 className="text-xl font-semibold">Missão</h3>
              </div>
              <p className="text-gray-600">
                Prestar serviços diferenciados, visando sempre o bem-estar de nossos clientes e colaboradores,
                garantindo qualidade de atendimento, através de profissionais motivados e capacitados.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Building2 className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold">Visão</h3>
              </div>
              <p className="text-gray-600">
                Ser referência nacional no atendimento pré-hospitalar e ao mesmo tempo ser uma empresa inovadora,
                reconhecida pela qualidade no atendimento, eficiência e tecnologia.
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

          <div>
            <div className="flex items-center space-x-3 mb-6">
              <MapPin className="h-6 w-6 text-red-600" />
              <h3 className="text-2xl font-semibold">Onde Estamos</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {STATES_WITH_SERVICE.map((state) => (
                <div key={state} className="bg-gray-50 p-3 rounded-lg text-center">
                  {state}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white rounded-lg shadow-lg p-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nossos Serviços</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <img 
                  src="https://static.wixstatic.com/media/1a1c95_42a9a7b30a4c458bafbb747b977af4b1~mv2.jpg"
                  alt="Serviços Nordeste Emergências"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Atendimento 24h</h3>
                <p className="text-gray-600">
                  Oferecemos atendimento de emergência 24 horas por dia, 7 dias por semana,
                  com equipe altamente qualificada e equipamentos de última geração.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <img 
                  src="https://static.wixstatic.com/media/15b2f2_6abe59584b3d440c9ccef80f49036d5f~mv2.jpg"
                  alt="Frota Nordeste Emergências"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Frota Moderna</h3>
                <p className="text-gray-600">
                  Nossa frota de ambulâncias é equipada com tecnologia de ponta para
                  garantir o melhor atendimento em emergências médicas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-blue-600 rounded-lg p-12 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Faça Parte da Nossa Equipe</h2>
          <p className="text-lg mb-8">
            Junte-se a nós e faça parte de uma equipe comprometida com a excelência no atendimento
            e o bem-estar das pessoas.
          </p>
          <Link
            to="/documentacao"
            className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            <FileText className="mr-2 h-5 w-5" />
            Enviar Documentação
          </Link>
        </div>
      </section>
    </div>
  );
}