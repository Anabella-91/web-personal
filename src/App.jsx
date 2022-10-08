import { React, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Menu from "./components/Menu";
import Burger from "./components/Burger";

const Head = styled.div`
	width: 100%;
	height: 50px;
	position: fixed;
	background: #2a2b25;
	display: flex;
`;

const H2 = styled.div`
	width: 100%;
	height: 100%;
	position: ${(props) => (props.absolute ? "absolute" : "")};
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: ${(props) => (props.bold ? "700;" : "300;")};
	font-size: 18px;
	color: ${(props) => (props.whiteColor ? "#fff" : "#2A2B25")};
	@media only screen and (min-width: 1024px) {
		font-size: 25px;
	}
`;

const Content = styled.div`
	color: #000;
	padding: 90px 20px 10px 20px;
	text-align: right;
	h3 {
		font-weight: 700;
	}
	svg {
		width: 10%;
	}
`;

const Switch = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	font-size: 14px;
	color: white;
	margin-right: 20px;
	input {
		position: relative;
		width: 12%;
		bottom: 5px;
		@media only screen and (min-width: 1024px) {
			width: 2%;
		}
	}
	input:before {
		content: "";
		position: absolute;
		width: 40px;
		height: 20px;
		background-image: linear-gradient(to left, #867198, #b9c2d6);
		border-radius: 30px;
	}
	input:after {
		content: "";
		position: absolute;
		width: 20px;
		height: 20px;
		background: white;
		border-radius: 25px;
		transition: 0.25s;
		border: 2px solid #000;
		box-sizing: border-box;
	}
	input:checked:after {
		left: 25px;
		border: 2px solid white;
		background: black;
	}
	input:checked:before {
		background-image: linear-gradient(
			to left,
			#ffd700,
			#7b68ee,
			#3498db,
			#2ecc71,
			#ffd700
		);
	}
`;

const Section = styled.div`
	${(props) => (props.displayBlock ? "display: block;" : "")};
	${(props) => (props.alignCenter ? "text-align: center;" : "")};

	div {
		display: flex;
		align-items: center;
	}
	hr {
		height: 1px;
		width: 100%;
		background: #000;
		margin: 0 20px 0 0;
		border: none;
	}
	a {
		text-decoration: none;
		color: #000;
		:hover {
			font-weight: bold;
		}
	}
	@media only screen and (min-width: 1024px) {
		margin: 50px 400px;
	}
`;

const LongText = styled.div`
	width: 100%;
	overflow: hidden;
	margin: auto;
	background-image: linear-gradient(
		to left,
		#ffd700,
		#7b68ee,
		#3498db,
		#2ecc71,
		#ffd700
	);
	span {
		width: 100%;
		display: inline-block;
		text-transform: uppercase;
		white-space: nowrap;
		color: black;
		font-size: 11px;
		letter-spacing: 1.2px;
		line-height: 37px;
		background-size: 100% 100%;
		animation: 30s LongText linear infinite;

		@keyframes LongText {
			from {
				transform: translateX(100%);
			}
			to {
				transform: translateX(-100%);
			}
		}
	}
	@media only screen and (min-width: 1024px) {
		position: absolute;
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
	const [lang, setLang] = useState(false);

	return (
		<>
			<Head ref={node}>
				<Burger open={open} setOpen={setOpen} />
				<Menu open={open} setOpen={setOpen} />
				<H2 whiteColor bold absolute>
					Anabella
				</H2>
				<Switch onClick={() => setLang(!lang)}>
					<span>es</span>
					<input type="checkbox" />
					<span>en</span>
				</Switch>
			</Head>
			<Content>
				{!lang ? (
					<Section>
						<H2>
							{" "}
							Escribo código y disfruto de trabajar en productos digitales
							resolviendo las necesidades del cliente. Vivo en Buenos Aires con
							mi perra Lobi
						</H2>
						<div>
							<hr></hr>
							<h3>Introducción</h3>
						</div>
						<H2>
							Me gusta mucho el cine y soy actriz de voz doblada al neutro,
							disfruto mucho hacer voces e interpretar personajes. También amo
							ser parte de la comunidad del café, tengo un emprendimiento para
							aumentar el conocimiento y lograr un equilibrio sustentable en la
							industria cafetera
						</H2>
						<div>
							<hr></hr>
							<h3>Trabajo</h3>
						</div>
						<H2>
							En pandemia tuve mi primer paso como tutora de programación en
							Digital House e ingresé a trabajar en Technisys como
							desarrolladora frontend. Comencé a integrarme en la gestión de
							producto para comprender desde otra perspectiva las necesidades
							del mercado y desarrollar soluciones efectivas
						</H2>
					</Section>
				) : (
					<Section>
						<H2>
							{" "}
							I code and I enjoy to work in digital products to solve the needs
							of the customer. I live in Buenos Aires with my dog Lobi
						</H2>
						<div>
							<hr></hr>
							<h3>Introduction</h3>
						</div>
						<H2>
							I really like movies; I am an actress and dubbing artist. I also
							love being part of the coffee community. That's why I have a
							coffee stall, to increase people's knowledge and be a sustainable
							part of the industry
						</H2>
						<div>
							<hr></hr>
							<h3>Work</h3>
						</div>
						<H2>
							During the pandemic I got my first job as a programming tutor at
							Digital House and I started to work for Technisys as a frontend
							developer. I am interested in learning about product management to
							gain insight into the needs of the market and develop effective
							solutions
						</H2>
					</Section>
				)}
				<Section alignCenter>
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
			<LongText>
				<span>
					"La toma de riesgos es la piedra angular de los imperios - Estée
					Lauder" / "La inteligencia es la habilidad de adaptarse a los cambios"
					- Stephen Hawking / "No se trata de dónde vienes, sino a dónde vas" -
					Ella Fitzgerald / "El diseño no es solo lo que se ve o siente, es cómo
					funciona" - Steve Jobs{" "}
				</span>
			</LongText>
		</>
	);
};

export default App;
