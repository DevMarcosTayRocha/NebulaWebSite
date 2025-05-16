import "./botaoAdicionar.css";
import { useState } from "react";

type TodoItem = {
  text?: string; // texto da tarefa (pode estar vazio)
  imageUrl?: string; // imagem da tarefa (pode estar vazia)
  pdfUrl?: string; // Novo campo para PDF
  pdfName?: string; // Nome do arquivo PDF
};

function BotaoAdicionar() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  // Serve para mostrar ou esconder o formulário (a tela onde a pessoa preenche a tarefa)
  const [showForm, setShowForm] = useState(false);

  // Aqui guardamos o texto que a pessoa digita
  const [text, setText] = useState("");
  const limiteCaracter = 2000;

  // Aqui guardamos a imagem que a pessoa escolheu
  const [image, setImage] = useState<File | null>(null);

  // Aqui guardamos a imagem em formato que dá para mostrar na tela
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [pdf, setPdf] = useState<File | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [pdfName, setPdfName] = useState<string | null>(null);

  // Esta função é chamada quando a pessoa escolhe uma imagem
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Pega o primeiro arquivo da lista

    if (!file) {
      setImage(null);
      setImagePreview(null);
      return;
    }

    // Verifica se o tipo do arquivo começa com "image/"
    if (!file.type.startsWith("image/")) {
      alert("Por favor, selecione um arquivo de imagem válido.");
      e.target.value = ""; // Limpa o input
      setImage(null);
      setImagePreview(null);
      return;
    }

    setImage(file); // Salva o arquivo

    // Lê a imagem para mostrar na tela
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string); // Coloca a imagem pronta para visualizar
    };
    reader.readAsDataURL(file);
  };

  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      setPdf(null);
      setPdfUrl(null);
      setPdfName(null);
      return;
    }

    if (file.type !== "application/pdf") {
      alert("Por favor, selecione um arquivo PDF válido.");
      e.target.value = "";
      setPdf(null);
      setPdfUrl(null);
      setPdfName(null);
      return;
    }

    setPdf(file);
    setPdfUrl(URL.createObjectURL(file));
    setPdfName(file.name);
  };

  // Esta função é chamada quando a pessoa clica em "Adicionar"
  const handleSubmit = () => {
    // Se a pessoa não digitou nada e não colocou imagem, mostramos um aviso
    if (!text && !image && !pdf) {
      alert("Você precisa adicionar texto, imagem ou ambos.");
      return;
    }

    // Criamos um novo item com o texto e/ou a imagem
    const newTodo: TodoItem = {
      text: text.trim() || undefined,
      imageUrl: imagePreview || undefined,
      pdfUrl: pdfUrl || undefined,
      pdfName: pdfName || undefined,
    };

    // Colocamos a nova tarefa na lista de tarefas
    setTodos([newTodo, ...todos]);

    // Limpamos o formulário depois de adicionar
    setText("");
    setImage(null);
    setImagePreview(null);
    setPdf(null);
    setPdfUrl(null);
    setPdfName(null);
    setShowForm(false);
  };

  const MostrarTextoLimite = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const valor = e.target.value;
    if (valor.length <= limiteCaracter) {
      setText(valor);
    }
  };

  return (
    <>
      <div
        className={showForm ? "ant-botao-add ativo" : "ant-botao-add"}
        onClick={() => !showForm && setShowForm(true)}
      >
        <svg
          className={showForm ? "ant-svg-add ativo" : "ant-svg-add"}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#FFFFFF"
        >
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>

        {showForm && (
          <div className="ant-botoes-add">
            <div className="ant-add-imagem">
              <label className="ant-label" htmlFor="uploadImagem">
                <span>Escolha uma imagem</span>
                <input
                  id="uploadImagem"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  hidden
                />
              </label>
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Pré-visualização"
                  className="max-h-48 mb-2"
                />
              )}
            </div>
            <div className="ant-add-pdf">
              <label className="ant-label" htmlFor="uploadPDF">
                <span>Escolha um PDF</span>
                <input
                    id="uploadPDF"
                  type="file"
                  accept="application/pdf"
                  onChange={handlePdfChange}
                  hidden
                />
              </label>
              {pdfUrl && pdfName && (
                <div className="ant-pdf-preview">
                  <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                    <img src="./src/assets/pdfPreto.svg" alt="" />{pdfName}
                  </a>
                </div>
              )}
            </div>
            <div className="ant-add-texto">
              <textarea
                maxLength={limiteCaracter}
                placeholder="Coloque seu texto aqui..."
                value={text}
                onChange={MostrarTextoLimite}
              ></textarea>
              <span
                style={
                  limiteCaracter - text.length > 0
                    ? { fontFamily: "Questrial", color: "var(--barra-clara)" }
                    : { fontFamily: "Questrial", color: "red" }
                }
              >
                {limiteCaracter - text.length} / {limiteCaracter}
              </span>
            </div>
            <button
              onClick={() => {
                // Se clicar em cancelar, limpamos tudo e escondemos o formulário
                setText("");
                setImage(null);
                setImagePreview(null);
                setPdf(null);
                setPdfUrl(null);
                setPdfName(null);
                setShowForm(false);
              }}
            >
              CANCELAR
            </button>
            <button onClick={handleSubmit}>ADICIONAR</button>
          </div>
        )}
      </div>

      <div className="ant-container-anotacoes">
        {todos.map((todo, idx) => (
          <div key={idx} className="ant-anotacao">
            {todo.imageUrl && (
              <img src={todo.imageUrl} alt="Imagem" className="max-h-64" />
            )}
            {todo.text && <p className="ant-anotacao-texto">{todo.text}</p>}
            {todo.pdfUrl && todo.pdfName && (
              <div className="ant-pdf-view">
                <a href={todo.pdfUrl} target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M360-460h40v-80h40q17 0 28.5-11.5T480-580v-40q0-17-11.5-28.5T440-660h-80v200Zm40-120v-40h40v40h-40Zm120 120h80q17 0 28.5-11.5T640-500v-120q0-17-11.5-28.5T600-660h-80v200Zm40-40v-120h40v120h-40Zm120 40h40v-80h40v-40h-40v-40h40v-40h-80v200ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"/></svg>{todo.pdfName}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default BotaoAdicionar;
