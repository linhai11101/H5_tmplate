/**
 * data {JSON} 配置参数
	* tips {String} 提示的内容
	* type {String} 类型
	* hideTime {Number} 消失的时间
	* position {String} 提示显示的位置
 * cb {FUNCTION} 回调函数
*/

let tip = function(data, cb = () => {}) {
	let mainColor = {
		primary: "rgba(0, 0, 0, 0.8)",
		warn: "rgba(250, 170, 50, 0.8)",
		error: "rgba(250, 0, 0, 0.8)",
		succes: "rgba(50, 250, 70, 0.8)",
	};
	let styleCnf = {
		backgroundColor: "rgba(0, 0, 0, 0.8)",
		transition: "all 0.2s",
		position: "fixed",
		zIndex: 999,
		padding: "2.5vw 3.2vw",
		borderRadius: "10vw",
		left: "50%",
		transform: "translate(-50%, 0)",
		fontSize: "3.6vw",
		maxWidth: "96%",
		color: "#fff",
		opacity: 0,
		letterSpacing: "0.4vw"
	};
	let default = {
		tips: "提示",
		type: "primary",
		hideTime: 3000,
		position: "top"
	};

	return new Promise((r, rj) => {
		try {
			let option = Object.assign({}, default, data);
			let styleCnf2 = Object.assign({}, styleCnf);
			
			styleCnf2.backgroundColor = mainColor[option.type];
			styleCnf2[option.position] = option.position == "top" ? "10vh" : "-10vh";

			let tipDom = document.createElement("div");
			let text = document.createTextNode(option.tips);

			tipDom.appendChild(text);

			Object.keys(styleCnf2).forEach(item => {
				tipDom.style[item] = styleCnf2[item];
			});

			document.body.appendChild(tipDom);

			r(tipDom);

			window.requestAnimationFrame(() => {
				tipDom.style.opacity = 1;
			});

			setTimeout(() => {
				tip.style.opacity = 0;

				window.requestAnimationFrame(() => {
					document.body.removeChild(tipDom);
					if (typeof(cb) == "function") cb();
				});

			}, option.hideTime);

		}catch(error) {
			rj(error);
		}
	})
}
