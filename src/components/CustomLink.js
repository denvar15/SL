import React from "react";
import { useOverrides, Override, StackItem } from "@quarkly/components";
import { Link } from "@quarkly/widgets";
const defaultProps = {
	"display": "flex",
	"quarkly-title": "Side",
	"width": "25%",
	"md-display": "none",
	"children": <>
		<Link
			href="/contact"
			text-decoration-line="initial"
			color="--light"
			padding="12px 24px 12px 24px"
			font="--base"
			letter-spacing="0.5px"
			background="--color-primary"
		>
			Связаться с нами
		</Link>
		{"   "}
	</>
};
const overrides = {};

const CustomLink = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <StackItem {...rest}>
		<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
		{children}
	</StackItem>;
};

Object.assign(CustomLink, { ...StackItem,
	defaultProps,
	overrides
});
export default CustomLink;