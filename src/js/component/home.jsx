import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			todos: [
				{ title: "eat", id: Math.random() * 10, done: false },
				{ title: "sleep", id: Math.random() * 10, done: false },
				{ title: "code", id: Math.random() * 10, done: false },
				{ title: "repeat", id: Math.random() * 10, done: false }
			]
		};
	}

	handlerFormSubmit(e) {
		this.setState({
			todos: this.state.todos.concat([
				{
					title: e,
					done: false,
					id: Math.random() * 10
				}
			])
		});
		document.getElementById("placeholder").value = "";
	}

	deleteTask(id) {
		this.setState({
			todos: this.state.todos.filter(todo => todo.id != id)
		});
	}

	render() {
		return (
			<div className="container">
				<h1 className="header">ToDo List</h1>
				<div className="input-group mb-3">
					<input
						id="placeholder"
						type="text"
						name="taskInput"
						className="form-control"
						placeholder="Add To List Here!"
						aria-label="Recipient's username"
						aria-describedby="button-addon2"
					/>
					<div className="input-group-append">
						<button
							onClick={() =>
								this.handlerFormSubmit(
									document.querySelector("[name= taskInput]")
										.value
								)
							}
							className="btn btn-outline-secondary"
							type="button"
							id="button-addon2">
							ADD
						</button>
					</div>
				</div>
				<div>
					<ul className="list-group mb-3">
						{this.state.todos.map((item, index) => {
							return (
								<li className="list-group-item" key={index}>
									{item.title}
									<button
										className="float-right"
										onClick={() =>
											this.deleteTask(item.id)
										}>
										<i className="far fa-trash-alt" />
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}
