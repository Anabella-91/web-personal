import styled from "styled-components";
import Navbar from "./components/Navbar";

const Content = styled.div`
	color: #000;
	padding: 0 20px;
	text-align: right;
	h2 {
		font-weight: 300;
	}
	h3 {
		font-weight: 700;
	}
`;

const Section = styled.div`
	display: ${(props) => (props.displayBlock ? "block;" : "flex;")};
	align-items: center;
	hr {
		height: 1px;
		width: 100%;
		background: #000;
		margin: 0 20px 0 0;
		border: none;
	}
	h1 {
		text-align: center;
	}
`;

const App = () => {
	return (
		<>
			<Navbar />
			<Content>
				<h2>
					Escribo código y me gusta trabajar en productos digitales para
					resolver necesidades del cliente. Vivo en Buenos Aires con mi perra
					Lobi
				</h2>
				<Section>
					<hr></hr>
					<h3>Introducción</h3>
				</Section>
				<h2>
					Me gusta mucho el cine y soy actriz de doblaje al neutro, disfruto
					mucho hacer voces e interpretar personajes. También amo ser parte de
					la comunidad del café, tengo un emprendimiento para aumentar el
					conocimiento y lograr un equilibrio sustentable en la industria
					cafetera
				</h2>
				<Section>
					<hr></hr>
					<h3>Trabajo</h3>
				</Section>
				<h2>
					En pandemia tuve mi primer paso como tutora de programación en Digital
					House e ingresé a trabajar en Technisys como desarrolladora frontend.
					Comencé a integrarme en la gestión de producto para comprender desde
					otra perspectiva las necesidades del mercado y pensar soluciones
					efectivas
				</h2>
				<Section displayBlock>
					<a>
						<h1>QuéOnda</h1>
					</a>
					<h1>Proyecto 2</h1>
					<h1>Proyecto 3</h1>
				</Section>
			</Content>
		</>
	);
};

export default App;
