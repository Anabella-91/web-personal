import { React, useState } from "react";
import { bool, func } from "prop-types";
import styled from "styled-components";

export const StyledBurger = styled.button`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 37px;
	border: none;
	cursor: pointer;
	z-index: 10;
	background: ${({ open }) => (open ? "#dddddd" : "#fff")};

	&:focus {
		outline: none;
	}

	div {
		width: 35px;
		height: 5px;
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;
		background: #000;
		:first-child {
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}

		:nth-child(2) {
			opacity: ${({ open }) => (open ? "0" : "1")};
			transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
		}

		:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		}
	}
`;

const Burger = ({ open, setOpen }) => {
	return (
		<StyledBurger open={open} onClick={() => setOpen(!open)}>
			<div />
			<div />
			<div />
		</StyledBurger>
	);
};

Burger.propTypes = {
	open: bool.isRequired,
	setOpen: func.isRequired,
};

export default Burger;
