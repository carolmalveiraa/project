import React, { useState, useEffect } from 'react';
import { Users, FileText, Download, Search, Eye, X } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { toast } from 'react-hot-toast';

interface Employee {
  id: string;
  name: string;
  role: string;
  status: string;
  documents: Document[];
}

interface Document {
  id: string;
  name: string;
  file_url: string;
}

export function AdminDashboard() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const { data, error } = await supabase
        .from('employees')
        .select(`
          id,
          name,
          role,
          status,
          documents (
            id,
            name,
            file_url
          )
        `);

      if (error) throw error;

      setEmployees(data || []);
    } catch (error) {
      console.error('Error fetching employees:', error);
      toast.error('Erro ao carregar colaboradores');
    } finally {
      setLoading(false);
    }
  };

  const downloadAllDocuments = async (employee: Employee) => {
    try {
      toast.loading('Preparando documentos para download...');
      
      // Create a zip file containing all documents
      const { data, error } = await supabase.functions.invoke('download-documents', {
        body: { employeeId: employee.id }
      });

      if (error) throw error;

      // Download the zip file
      const link = document.createElement('a');
      link.href = data.downloadUrl;
      link.download = `documentos-${employee.name.toLowerCase().replace(/\s+/g, '-')}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success('Download iniciado com sucesso!');
    } catch (error) {
      console.error('Error downloading documents:', error);
      toast.error('Erro ao baixar documentos');
    }
  };

  const exportToGoogleSheets = async () => {
    try {
      toast.loading('Exportando dados para Google Sheets...');
      
      const { data, error } = await supabase.functions.invoke('export-to-sheets', {
        body: { employees: employees }
      });

      if (error) throw error;

      toast.success('Dados exportados com sucesso!');
      window.open(data.spreadsheetUrl, '_blank');
    } catch (error) {
      console.error('Error exporting to Google Sheets:', error);
      toast.error('Erro ao exportar dados');
    }
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Painel Administrativo
          </h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar colaborador..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
            <button
              onClick={exportToGoogleSheets}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center space-x-2"
            >
              <FileText className="h-5 w-5" />
              <span>Exportar para Sheets</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-red-50 p-6 rounded-lg border border-red-100">
            <div className="flex items-center space-x-3">
              <Users className="h-8 w-8 text-red-600" />
              <div>
                <p className="text-sm text-gray-600">Total de Colaboradores</p>
                <p className="text-2xl font-bold text-gray-900">{employees.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <div className="flex items-center space-x-3">
              <FileText className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Documentos Pendentes</p>
                <p className="text-2xl font-bold text-gray-900">
                  {employees.filter(e => e.status === 'Pendente').length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg border border-green-100">
            <div className="flex items-center space-x-3">
              <Download className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Documentos Completos</p>
                <p className="text-2xl font-bold text-gray-900">
                  {employees.filter(e => e.status === 'Completo').length}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">Carregando colaboradores...</p>
            </div>
          ) : employees.length === 0 ? (
            <div className="text-center py-8">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Nenhum colaborador cadastrado ainda.</p>
              <p className="text-sm text-gray-500">Os colaboradores aparecerão aqui após enviarem sua documentação.</p>
            </div>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nome
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cargo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{employee.role}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        employee.status === 'Completo' ? 'bg-green-100 text-green-800' :
                        employee.status === 'Pendente' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {employee.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-3">
                        <button
                          onClick={() => {
                            setSelectedEmployee(employee);
                            setShowModal(true);
                          }}
                          className="text-blue-600 hover:text-blue-900 flex items-center"
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          Visualizar
                        </button>
                        <button
                          onClick={() => downloadAllDocuments(employee)}
                          className="text-green-600 hover:text-green-900 flex items-center"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Baixar Docs
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Employee Details Modal */}
      {showModal && selectedEmployee && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                Detalhes do Colaborador
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Nome</p>
                <p className="text-lg">{selectedEmployee.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Cargo</p>
                <p className="text-lg">{selectedEmployee.role}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Status</p>
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  selectedEmployee.status === 'Completo' ? 'bg-green-100 text-green-800' :
                  selectedEmployee.status === 'Pendente' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {selectedEmployee.status}
                </span>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-500 mb-2">Documentos</p>
                <div className="space-y-2">
                  {selectedEmployee.documents.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <span>{doc.name}</span>
                      <a
                        href={doc.file_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 flex items-center"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Baixar
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => downloadAllDocuments(selectedEmployee)}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center"
              >
                <Download className="h-5 w-5 mr-2" />
                Baixar Todos os Documentos
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}