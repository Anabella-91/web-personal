import { React, useState } from "react";
import styled from "styled-components";

const Head = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 20px 0 20px;
	ul {
		list-style: none;
		a {
			text-decoration: none;
			color: #000;
		}
	}
`;

const Menu = styled.div``;

const Burger = styled.div``;

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<Head>
			<h1>Anabella</h1>
			<Burger open={open} handleClick={handleClick}>
				{!open ? (
					<div onClick={handleClick}>=</div>
				) : (
					<div onClick={handleClick}>X</div>
				)}
			</Burger>
			<Menu open={open}>
				<li>
					<a href="/linkedin">Linkedin</a>
				</li>
				<li>
					<a href="/github">Github</a>
				</li>
			</Menu>
		</Head>
	);
};

export default Navbar;
