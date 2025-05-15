import React, { useState } from 'react';

// Aqui a gente define o formato de cada tarefa (To-do).
// Ela pode ter um texto, uma imagem, ou os dois.
type TodoItem = {
  text?: string; // texto da tarefa (pode estar vazio)
  imageUrl?: string; // imagem da tarefa (pode estar vazia)
};

function TodoApp() {
  // Aqui a gente guarda todas as tarefas que já foram adicionadas
  const [todos, setTodos] = useState<TodoItem[]>([]);

  // Serve para mostrar ou esconder o formulário (a tela onde a pessoa preenche a tarefa)
  const [showForm, setShowForm] = useState(false);

  // Aqui guardamos o texto que a pessoa digita
  const [text, setText] = useState('');

  // Aqui guardamos a imagem que a pessoa escolheu
  const [image, setImage] = useState<File | null>(null);

  // Aqui guardamos a imagem em formato que dá para mostrar na tela
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Esta função é chamada quando a pessoa escolhe uma imagem
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Pega o primeiro arquivo da lista
    setImage(file || null); // Salva o arquivo

    if (file) {
      // Se tem imagem, vamos ler ela para mostrar na tela
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string); // Coloca a imagem pronta para visualizar
      };
      reader.readAsDataURL(file); // Lê a imagem
    } else {
      setImagePreview(null); // Se não tem imagem, não mostra nada
    }
  };

  // Esta função é chamada quando a pessoa clica em "Adicionar"
  const handleSubmit = () => {
    // Se a pessoa não digitou nada e não colocou imagem, mostramos um aviso
    if (!text && !image) {
      alert('Você precisa adicionar texto, imagem ou ambos.');
      return;
    }

    // Criamos um novo item com o texto e/ou a imagem
    const newTodo: TodoItem = {
      text: text.trim() || undefined,
      imageUrl: imagePreview || undefined,
    };

    // Colocamos a nova tarefa na lista de tarefas
    setTodos([newTodo, ...todos]);

    // Limpamos o formulário depois de adicionar
    setText('');
    setImage(null);
    setImagePreview(null);
    setShowForm(false); // Esconde o formulário
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      {/* Título do app */}
      <h1 className="text-2xl font-bold mb-4">Minha Lista de Tarefas</h1>

      {/* Botão para abrir o formulário */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => setShowForm(true)}
      >
        Adicionar Tarefa
      </button>

      {/* Aqui aparece o formulário se showForm for true */}
      {showForm && (
        <div className="bg-gray-100 p-4 rounded shadow mb-4">
          {/* Campo de texto para digitar a tarefa */}
          <textarea
            placeholder="Digite sua tarefa..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 mb-2 border rounded"
          />

          {/* Campo para escolher imagem */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-2"
          />

          {/* Se a pessoa escolheu uma imagem, mostramos ela aqui */}
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Pré-visualização"
              className="max-h-48 mb-2"
            />
          )}

          {/* Botões para Adicionar ou Cancelar */}
          <div className="flex gap-2">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={handleSubmit}
            >
              Adicionar
            </button>
            <button
              className="bg-gray-400 text-white px-4 py-2 rounded"
              onClick={() => {
                // Se clicar em cancelar, limpamos tudo e escondemos o formulário
                setShowForm(false);
                setText('');
                setImage(null);
                setImagePreview(null);
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Aqui mostramos todas as tarefas adicionadas */}
      <div className="space-y-4">
        {todos.map((todo, idx) => (
          <div key={idx} className="border p-4 rounded shadow">
            {/* Se tiver texto, mostramos o texto */}
            {todo.text && <p className="mb-2">{todo.text}</p>}

            {/* Se tiver imagem, mostramos a imagem */}
            {todo.imageUrl && (
              <img src={todo.imageUrl} alt="Imagem" className="max-h-64" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;