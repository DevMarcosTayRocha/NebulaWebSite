import "./botaoAdicionar.css"
import { useState } from "react";

type TodoItem = {
    text?: string; // texto da tarefa (pode estar vazio)
    imageUrl?: string; // imagem da tarefa (pode estar vazia)
};

function BotaoAdicionar() {

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
    
        if (!file) {
            setImage(null);
            setImagePreview(null);
            return;
        }
    
        // Verifica se o tipo do arquivo começa com "image/"
        if (!file.type.startsWith("image/")) {
            alert("Por favor, selecione um arquivo de imagem válido.");
            e.target.value = ''; // Limpa o input
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

    const limiteCaracter = 2000;
    const [antTexto, setAntTexto] = useState("")

    const MostrarTextoLimite = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const valor = e.target.value;
        if (valor.length <= limiteCaracter) {
          setAntTexto(valor);
        }
      };

    return (
        <>
            <div className={showForm ? "ant-botao-add ativo" : "ant-botao-add"} onClick={() => !showForm && setShowForm(true)} >
                <svg className={showForm ? "ant-svg-add ativo" : "ant-svg-add"} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>

                {showForm && (
                    <div className="ant-botoes-add">
                        <div className="ant-add-imagem">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                            {imagePreview && (
                                <img
                                    src={imagePreview}
                                    alt="Pré-visualização"
                                    className="max-h-48 mb-2"
                                />
                            )}
                        </div>
                        <div className="ant-add-texto"><textarea maxLength={limiteCaracter} placeholder="Coloque seu texto aqui..." value={antTexto} 
                            onChange={MostrarTextoLimite}></textarea><span style={limiteCaracter-antTexto.length > 0 ? {fontFamily:"Questrial", color:"var(--barra-clara)"} : {fontFamily:"Questrial", color:"red"}}>{limiteCaracter - antTexto.length} / {limiteCaracter}</span></div>
                        <button onClick={() => {
                            // Se clicar em cancelar, limpamos tudo e escondemos o formulário
                            setShowForm(false);
                            setText('');
                            setImage(null);
                            setImagePreview(null);
                        }}>CANCELAR</button>
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
                    </div>
                ))}
            </div>
        </>
    )
}

export default BotaoAdicionar;