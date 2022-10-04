import styled from "styled-components";
import { bool } from "prop-types";

export const StyledMenu = styled.nav`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #dddddd;
	text-align: left;
	padding: 10px;
	position: absolute;
	top: 0;
	left: 0;
	transition: transform 0.3s ease-in-out;
	transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};

	a {
		padding: 20px 0;
		font-weight: bold;
		letter-spacing: 4px;
		color: #000;
		text-decoration: none;
		transition: color 0.3s linear;
		text-align: center;
	}
`;

const Menu = ({ open }) => {
	return (
		<StyledMenu open={open}>
			<a href="/">Linkedin</a>
			<a href="/">Github</a>
		</StyledMenu>
	);
};

Menu.propTypes = {
	open: bool.isRequired,
};

export default Menu;
