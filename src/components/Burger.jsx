import { React, useState } from "react";
import { bool, func } from "prop-types";
import styled from "styled-components";

export const StyledBurger = styled.button`
	position: absolute;
	height: 80%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	border: none;
	cursor: pointer;
	z-index: 10;
	background: ${({ open }) => (open && "#2A2B25") || "#2A2B25"};
	margin: 5px 0 0 14px;

	&:focus {
		outline: none;
	}

	div {
		width: 30px;
		height: 5px;
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;
		background: #fff;
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
