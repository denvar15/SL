import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
import { MdMenu } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				404 Smart Learning
			</title>
			<meta name={"description"} content={"404 Smart Learning page"} />
			<meta property={"og:title"} content={"404 Smart Learning"} />
			<meta property={"og:description"} content={"404 Smart Learning page"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/1.png?v=2021-01-02T21:27:31.809Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/2.png?v=2021-01-02T21:29:25.860Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/2.png?v=2021-01-02T21:29:25.860Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/2.png?v=2021-01-02T21:29:25.860Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/2.png?v=2021-01-02T21:29:25.860Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/3.png?v=2021-01-02T21:30:42.166Z"} />
			<meta name={"msapplication-TileColor"} content={"#044BD9"} />
		</Helmet>
		<Section
			margin="0 0 0 0"
			padding="16px 0 16px 0"
			box-sizing="border-box"
			quarkly-title="Header"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Stack>
				{"    "}
				<StackItem display="flex" quarkly-title="Logo" md-width="75%" width="25%">
					<Override slot="StackItemContent" align-items="center" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/New%20Project%20(1).png?v=2021-01-02T21:23:33.638Z" width="50px" z-index="3" />
					<Link
						href="/"
						font="32px Roboto"
						margin="0px 0px 0px 10px"
						color="--dark"
						text-decoration-line="initial"
					>
						Smart Learning
					</Link>
				</StackItem>
				<StackItem width="50%" display="block" quarkly-title="Menu" md-width="25%">
					<Override slot="StackItemContent" align-items="center" justify-content="center" md-justify-content="flex-end" />
					{"        "}
					<Components.BurgerMenu>
						<Override
							slot="menu"
							lg-transform="translateY(0px) translateX(0px)"
							lg-transition="transform 400ms ease 0s"
							md-position="fixed"
							display="flex"
							md-left={0}
							md-top={0}
							md-width="100%"
							md-height="100%"
							padding="0px 0 0px 0"
						>
							<Override
								slot="item"
								text-transform="uppercase"
								text-align="center"
								padding="8px 20px 8px 20px"
								md-padding="16px 40px 16px 40px"
								display="list-item"
							/>
							<Override slot="item-404" lg-display="none" display="none" />
							<Override slot="item-index" lg-display="none" display="none" />
							<Override
								slot="link"
								md-color="--dark"
								md-opacity=".5"
								md-transition="opacity .15s ease 0s"
								md-hover-opacity="1"
								md-active-opacity="1"
								md-font="16px/24px sans-serif"
								font="--base"
								text-decoration-line="initial"
								color="--dark"
								opacity=".5"
								transition="opacity .15s ease 0s"
								hover-opacity="1"
								letter-spacing="0.5px"
								text-transform="initial"
							/>
							<Override
								slot="link-active"
								md-opacity="1"
								md-cursor="default"
								opacity="1"
								color="--primary"
								cursor="default"
							/>
							<Override slot="link-about">
								О нас
							</Override>
							<Override slot="link-work">
								Наш проект
							</Override>
							<Override slot="link-contact">
								Контакты
							</Override>
						</Override>
						<Override slot="icon,icon-close" category="md" icon={MdMenu} />
						<Override slot="icon" category="md" icon={MdMenu} size="36px" />
						<Override
							slot="menu-open"
							md-top={0}
							md-bottom={0}
							md-display="flex"
							md-flex-direction="column"
							md-align-items="center"
							md-justify-content="center"
						/>
						<Override slot="icon-open" md-position="fixed" md-top="24px" md-right="calc(4% + 4px)" />
					</Components.BurgerMenu>
					{"    "}
				</StackItem>
				<Components.CustomLink />
				{"    "}
			</Stack>
		</Section>
		<Section quarkly-title="Hero" padding="25px 0 75px 0" lg-padding="25px 0 25px 0">
			<Stack>
				{"    "}
				<StackItem width="100%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						height="480px"
						md-height="360px"
						flex-direction="column"
						background="linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 36.2%,rgba(57, 12, 150, 0.63) 100%) 0 0 no-repeat,#191C23 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/404.png?v=2021-01-06T16:37:23.935Z) center center/cover repeat scroll padding-box"
					/>
					{"        "}
					<Text
						color="--light"
						font="--headline1"
						margin="16px 0px 0px 0px"
						sm-text-align="center"
						sm-width="80%"
						text-align="center"
						padding="0px 16px 0px 16px"
					>
						404
					</Text>
					<Text
						font="--lead"
						color="--light"
						margin="10px 0px 35px 0px"
						sm-text-align="center"
						sm-width="80%"
						opacity="0.7"
						text-align="center"
						padding="0px 16px 0px 16px"
					>
						Это страницы не существует.
					</Text>
					<Link
						href="/"
						text-decoration-line="initial"
						color="--darkL2"
						background="--color-light"
						padding="12px 24px 12px 24px"
						font="--base"
						letter-spacing="0.5px"
						hover-transform="translateY(-4px)"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
					>
						Home Page
					</Link>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Components.FooterNew />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});