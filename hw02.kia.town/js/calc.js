class Calc {
	constructor(last_num, opr, curr_num) {
		this.last_num = last_num;
		this.opr = opr;
		this.curr_num = curr_num;
	}

	clear_values() {
		this.last_num = "";
		this.opr = "";
		this.curr_num = "_";
	}

	calculate() {
		var answer;
		var n1 = parseFloat(this.last_num);
		var n2 = parseFloat(this.curr_num);

		if (this.opr === "+") {
			answer = n1 + n2;
		} else if (this.opr === "-") {
			answer = n1 - n2;
		} else if (this.opr === "x") {
			answer = n1 * n2;
		} else if (this.opr === "/") {
			answer = n1 / n2;
		}

		return answer.toString();
	}

	update_display(value) {
		document.getElementById("display").innerText = value;
	}

	num_help(num) {
		if (num === "decimal") {
			if (this.curr_num === "_") {
				this.curr_num = "0.";
				this.update_display(this.curr_num);
			} else if (this.curr_num.includes(".")) {
				//only one . allowed :(
			} else {
				this.curr_num += ".";
				this.update_display(this.curr_num);
			}
		} else {
			if (this.curr_num === "_") {
				this.curr_num = num;
				this.update_display(this.curr_num);
			} else {
				this.curr_num += num;
				this.update_display(this.curr_num);
			}
		}
	}

	opr_help(opr) {
		if (opr === "clear") {
			this.clear_values();
			this.update_display(this.curr_num);
		} else if (opr === "plusEq") {
			this.plusEq_help();
		} else if (opr === "minus") {
			this.minus_help();
		} else if (opr === "mult") {
			this.mult_help();
		} else if (opr === "divide") {
			this.divide_help();
		}
	}

	plusEq_help() {
		if (this.last_num !== "" && this.opr !== "" && this.curr_num !== "_") {
			this.last_num = this.calculate();
			this.update_display(this.last_num);
			this.curr_num = "_";
			this.opr = "";
		} else if (this.last_num === "" && this.opr === "" && this.curr_num !== "_") {
			this.last_num = this.curr_num;
			this.opr = "+";
			this.curr_num = "_";
			this.update_display(this.opr);
		} else if (this.last_num !== "" && this.opr === "" && this.curr_num === "_") {
			this.opr = "+";
			this.update_display(this.opr);
		} else if (this.last_num !== "" && this.opr === "" && this.curr_num !== "_") {
			this.last_num = this.curr_num;
			this.curr_num = "_";
			this.opr = "+";
			this.update_display(this.opr);
		}
	}

	minus_help() {
		if (this.last_num !== "" && this.opr !== "" && this.curr_num !== "_") {
			this.last_num = this.calculate();
			this.opr = "-";
			this.curr_num = "_";
			this.update_display(this.opr);
		} else if (this.last_num === "" && this.opr === "" && this.curr_num !== "_") {
			this.last_num = this.curr_num;
			this.opr = "-";
			this.curr_num = "_";
			this.update_display(this.opr);
		} else if (this.last_num !== "" && this.opr === "" && this.curr_num === "_") {
			this.opr = "-";
			this.update_display(this.opr);
		} else if (this.last_num !== "" && this.opr === "" && this.curr_num !== "_") {
			this.last_num = this.curr_num;
			this.curr_num = "_";
			this.opr = "-";
			this.update_display(this.opr);
		}
	}

	mult_help() {
		if (this.last_num !== "" && this.opr !== "" && this.curr_num !== "_") {
			this.last_num = this.calculate();
			this.opr = "x";
			this.curr_num = "_";
			this.update_display(this.opr);
		} else if (this.last_num === "" && this.opr === "" && this.curr_num !== "_") {
			this.last_num = this.curr_num;
			this.opr = "x";
			this.curr_num = "_";
			this.update_display(this.opr);
		} else if (this.last_num !== "" && this.opr === "" && this.curr_num === "_") {
			this.opr = "x";
			this.update_display(this.opr);
		} else if (this.last_num !== "" && this.opr === "" && this.curr_num !== "_") {
			this.last_num = this.curr_num;
			this.curr_num = "_";
			this.opr = "x";
			this.update_display(this.opr);
		}
	}

	divide_help() {
		if (this.last_num !== "" && this.opr !== "" && this.curr_num !== "_") {
			this.last_num = this.calculate();
			this.opr = "/";
			this.curr_num = "_";
			this.update_display(this.opr);
		} else if (this.last_num === "" && this.opr === "" && this.curr_num !== "_") {
			this.last_num = this.curr_num;
			this.opr = "/";
			this.curr_num = "_";
			this.update_display(this.opr);
		} else if (this.last_num !== "" && this.opr === "" && this.curr_num === "_") {
			this.opr = "/";
			this.update_display(this.opr);
		} else if (this.last_num !== "" && this.opr === "" && this.curr_num !== "_") {
			this.last_num = this.curr_num;
			this.curr_num = "_";
			this.opr = "/";
			this.update_display(this.opr);
		}
	}
}

var c = new Calc("", "", "_");

var nums = document.getElementsByClassName("num");
for (var i = 0; i < nums.length; i++) {
	nums[i].addEventListener('click', function() {
		c.num_help(this.id);
	});
}

var oprs = document.getElementsByClassName("opr");
for (var i = 0; i < oprs.length; i++) {
	oprs[i].addEventListener('click', function() {
		c.opr_help(this.id);
	});
}

// use of loops and html classes/ids inspired by this video: https://youtu.be/CI2GwL--ll8
// use of a class and helper methods inspired by this video: https://youtu.be/j59qQ7YWLxw
