import styled from "styled-components";
import { bool } from "prop-types";

export const StyledMenu = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #2a2b25;
	text-align: left;
	padding: 50% 10%;
	position: absolute;
	top: 0;
	left: 0;
	transition: transform 0.3s ease-in-out;
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

	a {
		padding: 20px 0;
		letter-spacing: 3px;
		color: #fff;
		text-decoration: none;
		transition: color 0.3s linear;
		text-align: center;
	}
	@media only screen and (min-width: 1024px) {
		padding: 24% 10%;
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
