import { Link } from "react-router-dom";
import AnimatedBanner from "../../../../components/AnimatedBanner";
import { StyledHomeList, StyledHomeCard } from "./style";

const HomeList = ({ users }) => {
	// const { name, description, img , id} = users;
	const user = [
		{
			id: 10,
			name: "Nome da ong",
			description: "lorem ipsum dolor sit amet, lorem ipsum",
			img: "https://dogood.qodeinteractive.com/wp-content/uploads/2022/04/causes-single-img10.jpg",
			raised: 30000,
			goal: 50000,
		},

		{
			id: 20,
			name: "Nome da ong",
			description: "lorem ipsum dolor sit amet, lorem ipsum",
			img: "https://dogood.qodeinteractive.com/wp-content/uploads/2022/04/causes-single-img10.jpg",
			raised: 60000,
			goal: 50000,
		},
		{
			id: 30,
			name: "Nome da ong",
			description: "lorem ipsum dolor sit amet, lorem ipsum",
			img: "https://dogood.qodeinteractive.com/wp-content/uploads/2022/04/causes-single-img10.jpg",
			raised: 60000,
			goal: 50000,
		},

		{
			id: 40,
			name: "Nome da ong",
			description: "lorem ipsum dolor sit amet, lorem ipsum",
			img: "https://dogood.qodeinteractive.com/wp-content/uploads/2022/04/causes-single-img10.jpg",
			raised: 30000,
			goal: 150000,
		},
	];

	return (
		<>
			<StyledHomeList>
				<h1>ESCOLHA SUA CAUSA</h1>
				<ul>
					{user.map(({ name, id, description, img, raised, goal }) => {
						const validatePercentage = (raised, goal) => {
							const result = (raised / goal) * 100;
							return result >= 100 ? 100 : result;
						};

						return (
							<StyledHomeCard as={Link} to={`/profile/${id}`} key={id}>
								<li className="card">
									<div className="card-header">
										<img src={img} alt={name} />
										<span className="cta">MAIS SOBRE</span>
									</div>
									<div className="card-body">
										<h2>{name}</h2>
										<p>{description}</p>
									</div>
									<div className="card-footer">
										<span className="percentage">
											{validatePercentage(raised, goal)}%
											<span
												className="bar-color"
												style={{
													width: `${validatePercentage(raised, goal)}%`,
												}}
											/>
											<span className="bar-grey" />
										</span>
										<div className="stats">
											<span>Arrecadados: ${raised.toLocaleString()}</span>
											<span>Meta: ${goal.toLocaleString()}</span>
										</div>
									</div>
								</li>
							</StyledHomeCard>
						);
					})}
				</ul>
			</StyledHomeList>
			<AnimatedBanner />
		</>
	);
};

export default HomeList;
