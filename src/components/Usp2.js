import React from "react";
import { useOverrides, Override, StackItem, Stack, Section } from "@quarkly/components";
import { Text, Link } from "@quarkly/widgets";
const defaultProps = {
	"quarkly-title": "USP",
	"padding": "75px 0 50px 0",
	"lg-padding": "25px 0 25px 0",
	"lg-height": "auto",
	"justify-content": "center"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "100%",
			"display": "flex"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center",
			"justify-content": "center",
			"height": "480px",
			"background": "linear-gradient(180deg,rgba(24, 29, 34, 0.5) 0%,transparent 100%) 0 0 no-repeat,--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/aOTBIioZV5k.jpg?v=2021-01-04T13:40:58.762Z) center center/cover no-repeat",
			"flex-direction": "column",
			"md-height": "360px",
			"padding": "36px 24px 36px 24px",
			"sm-height": "280px",
			"lg-height": "420px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "10px 0px 15px 0px",
			"font": "--headline2",
			"text-align": "center",
			"quarkly-title": "Title",
			"color": "--light",
			"md-font": "--headline3",
			"children": "Начать учить!"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 28px 0px",
			"font": "--lead",
			"opacity": "0.6",
			"text-align": "center",
			"quarkly-title": "Description",
			"color": "--light",
			"max-width": "720px",
			"children": "Уникальная система оценки качества запоминания"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "https://vk.com/app7657902",
			"color": "--darkL2",
			"padding": "8px 36px 8px 36px",
			"font": "--lead",
			"letter-spacing": "0.5px",
			"text-align": "center",
			"margin": "10px auto 0px auto",
			"background": "--color-light",
			"transition": "opacity .15s ease 0s",
			"hover-margin": "9px 0px 0px 0px",
			"hover-padding": "8px 18px 8px 18px",
			"width": "fit-content",
			"text-decoration-line": "initial",
			"position": "relative",
			"z-index": "5",
			"border-radius": "2px",
			"children": "Скачать!"
		}
	}
};

const Usp2 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			width="100%"
			margin="0px 32px 0px 32px"
			md-margin="0px 16px 0px 16px"
			min-width="auto"
		/>
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				{"        "}
				<Text {...override("text")} />
				<Text {...override("text1")} />
				<Link {...override("link")} />
				{"    "}
			</StackItem>
			{"    "}
		</Stack>
		{children}
	</Section>;
};

Object.assign(Usp2, { ...Section,
	defaultProps,
	overrides
});
export default Usp2;