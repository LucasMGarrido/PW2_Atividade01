import { useState } from 'react';
import './App.css';
import Titulo from './componentes/Titulo/Titulo.jsx';
import MLA from './componentes/FuncoesMLA/FuncoesMLA.jsx';
import Mensagem from './componentes/Mensagens/Mensagens.jsx';
import Informacoes from './componentes/Informacoes/Informacoes.jsx';

function App() {
	return (
		<>
			<div className="Container">
				<div>
					<Titulo />
					<Informacoes />
					<MLA />
					<Mensagem />
				</div>
			</div>
		</>
	);
}

export default App;
