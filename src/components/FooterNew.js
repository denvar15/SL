import React from "react";
import { useOverrides, Override, StackItem, SocialMedia, Stack, Section } from "@quarkly/components";
import { Image, Link } from "@quarkly/widgets";
const defaultProps = {
	"margin": "0 0 0 0",
	"padding": "16px 0 16px 0",
	"box-sizing": "border-box",
	"quarkly-title": "Footer",
	"justify-content": "center",
	"background-coloe": "#FF7C22"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"display": "flex",
			"quarkly-title": "Logo",
			"md-width": "50%",
			"width": "25%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "28px",
			"height": "28px",
			"src": "https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-quarkly-logo-grey.svg?v=2020-11-06T17:24:35.270Z"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "https://quarkly.io/",
			"font": "--base",
			"color": "--dark",
			"opacity": "0.6",
			"text-decoration-line": "initial",
			"text-align": "left",
			"margin": "1px 0px 0px 10px",
			"hover-text-decoration-line": "underline",
			"white-space": "nowrap",
			"children": "Made on Quarkly"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"display": "flex",
			"quarkly-title": "Side",
			"width": "75%",
			"md-width": "50%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center",
			"justify-content": "flex-end"
		}
	},
	"socialMedia": {
		"kind": "SocialMedia",
		"props": {
			"vkontakte": "https://vk.com/smart_learning"
		}
	},
	"socialMediaOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"background": "none",
			"border-radius": "50%"
		}
	},
	"socialMediaOverride1": {
		"kind": "Override",
		"props": {
			"slot": "icon",
			"color": "--dark"
		}
	}
};

const FooterNew = props => {
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
				<Image {...override("image")} />
				<Link {...override("link")} />
				{"        "}
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				<SocialMedia {...override("socialMedia")}>
					<Override {...override("socialMediaOverride")} />
					<Override {...override("socialMediaOverride1")} />
				</SocialMedia>
				{"   "}
			</StackItem>
			{"    "}
		</Stack>
		{children}
	</Section>;
};

Object.assign(FooterNew, { ...Section,
	defaultProps,
	overrides
});
export default FooterNew;