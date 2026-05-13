import React, { useState, useEffect } from "react";

const Home = () => {
	const [seconds, setSeconds] = useState(0);
	const [run, setRun] = useState(true);

	useEffect(() => {
		let timer = null;

		if (run == true) {
			timer = setInterval(() => {
				setSeconds(seconds => seconds + 1);
			}, 1000);
		}

		return () => clearInterval(timer);
	}, [run]);

	useEffect(() => {
		if (seconds == 5) {
			alert("You reached 5 seconds");
		}
	}, [seconds]);

	function stopCounter() {
		setRun(false);
	}

	function startCounter() {
		setRun(true);
	}

	function resetCounter() {
		setSeconds(0);
	}

	function countDown() {
		let num = prompt("Write a number");

		if (num != null) {
			setSeconds(Number(num));
			setRun(false);

			let timer2 = setInterval(() => {
				setSeconds(value => {
					if (value > 0) {
						return value - 1;
					} else {
						clearInterval(timer2);
						return 0;
					}
				});
			}, 1000);
		}
	}

	let text = seconds.toString();

	while (text.length < 6) {
		text = "0" + text;
	}

	return (
		<div className="container text-center mt-5">

			<div className="counter d-flex justify-content-center">

				<div className="box">
					<i className="far fa-clock"></i>
				</div>

				<div className="box">{text[0]}</div>
				<div className="box">{text[1]}</div>
				<div className="box">{text[2]}</div>
				<div className="box">{text[3]}</div>
				<div className="box">{text[4]}</div>
				<div className="box">{text[5]}</div>

			</div>

			<div className="mt-4">

				<button
					className="btn btn-danger m-1"
					onClick={stopCounter}>
					Stop
				</button>

				<button
					className="btn btn-success m-1"
					onClick={startCounter}>
					Start
				</button>

				<button
					className="btn btn-warning m-1"
					onClick={resetCounter}>
					Reset
				</button>

				<button
					className="btn btn-primary m-1"
					onClick={countDown}>
					Countdown
				</button>

			</div>

		</div>
	);
};

export default Home;