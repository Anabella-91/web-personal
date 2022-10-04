import { React, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Menu from "./components/Menu";
import Burger from "./components/Burger";

const Head = styled.div`
	width: 100%;
	height: 50px;
	position: fixed;
	background: #fff;
`;

const H2 = styled.div`
	display: flex;
	justify-content: flex-end;
	font-weight: ${(props) => (props.bold ? "700;" : "300;")};
	padding-right: ${(props) => (props.p20 ? "20px;" : "")};
	font-size: 24px;
	align-items: center;
`;

const Content = styled.div`
	color: #000;
	padding: 50px 20px 20px 20px;
	text-align: right;
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
	a {
		text-decoration: none;
		color: #000;
	}
`;
const ClickOutside = (ref, handler) => {
	useEffect(() => {
		const listener = (event) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			handler(event);
		};
		document.addEventListener("mousedown", listener);
		return () => {
			document.removeEventListener("mousedown", listener);
		};
	}, [ref, handler]);
};

const App = () => {
	const [open, setOpen] = useState(false);
	const node = useRef();
	ClickOutside(node, () => setOpen(false));

	return (
		<>
			<Head ref={node}>
				<Burger open={open} setOpen={setOpen} />
				<Menu open={open} setOpen={setOpen} />
				<H2 bold p20>
					Anabella
				</H2>
			</Head>
			<Content>
				<H2>
					Escribo código y me gusta trabajar en productos digitales para
					resolver necesidades del cliente. Vivo en Buenos Aires con mi perra
					Lobi
				</H2>
				<Section>
					<hr></hr>
					<h3>Introducción</h3>
				</Section>
				<H2>
					Me gusta mucho el cine y soy actriz de doblaje al neutro, disfruto
					mucho hacer voces e interpretar personajes. También amo ser parte de
					la comunidad del café, tengo un emprendimiento para aumentar el
					conocimiento y lograr un equilibrio sustentable en la industria
					cafetera
				</H2>
				<Section>
					<hr></hr>
					<h3>Trabajo</h3>
				</Section>
				<H2>
					En pandemia tuve mi primer paso como tutora de programación en Digital
					House e ingresé a trabajar en Technisys como desarrolladora frontend.
					Comencé a integrarme en la gestión de producto para comprender desde
					otra perspectiva las necesidades del mercado y pensar soluciones
					efectivas
				</H2>
				<Section displayBlock>
					<a href="/">
						<h1>QuéOnda</h1>
					</a>
					<a href="/">
						<h1>Proyecto 2</h1>
					</a>
					<a href="/">
						<h1>Proyecto 3</h1>
					</a>
				</Section>
			</Content>
		</>
	);
};

export default App;
