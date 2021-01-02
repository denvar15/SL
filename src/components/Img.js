import React from "react";
import { useOverrides, StackItem } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
const defaultProps = {
	"width": "60%",
	"display": "flex",
	"padding": "0px 0px 0px 0px",
	"miniPk-width": "59%",
	"lg-width": "100%",
	"lg-order": "1",
	"lg-margin": "0px 0px 10px 0px",
	"quarkly-title": "Illustration"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"width": "100%",
			"background": "--color-lightD2 url(https://images.unsplash.com/photo-1579546928937-641f7ac9bced?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&h=2000) center center/100% no-repeat",
			"margin": "0px 0px 0px 0px",
			"padding": "0px 0px 60% 0px",
			"height": "0px",
			"hover-background": "--color-lightD2 url(https://artemzhigalin.ru/src/default-website-illustration-sea.svg) center center/110% no-repeat",
			"transition": "background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
		}
	}
};

const Img = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <StackItem {...rest}>
		{"        "}
		<Box {...override("box")} />
		{"    "}
		{children}
	</StackItem>;
};

Object.assign(Img, { ...StackItem,
	defaultProps,
	overrides
});
export default Img;