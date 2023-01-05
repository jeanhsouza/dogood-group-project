import React from "react";
import { StyledHomeHeader } from "./style";

const HomeHeader = () => {
	return (
		<StyledHomeHeader>
			<div className="hero-section">
				<p>NOS AJUDE A FAZER MAIS</p>
				<h1>DOE AGORA</h1>
			</div>

			<div className="stats-section">
				<div className="stats-item">
					<h2>Nossa Meta:</h2>
					<h3>$65.000</h3>
				</div>
				<div className="stats-item">
					<h2>Arrecadados:</h2>
					<h3>$45.000</h3>
				</div>
				<div className="stats-item">
					<h2>ONGs Cadastradas:</h2>
					<h3>10</h3>
				</div>
			</div>
		</StyledHomeHeader>
	);
};

export default HomeHeader;
