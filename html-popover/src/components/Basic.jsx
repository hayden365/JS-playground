import React from "react";
import { styled } from "styled-components";

const Div = styled.div`
	width: 100px;
	height: 100px;
	margin: auto;
	background-color: aliceblue;
	button {
		background-color: aqua;
	}
`;

export default function Basic() {
	return (
		<>
			<button popovertarget="basic-popover">열기</button>

			<Div id="basic-popover" popover>
				<button popovertarget="basic-popover" popovertargetaction="hide">
					<span aria-hidden="true">X</span>
				</button>
				<p>잘 보이나요?</p>
			</Div>
		</>
	);
}
