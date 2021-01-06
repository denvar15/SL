import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
import { MdMenu } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Наш продукт | Smart Learning
			</title>
			<meta name={"description"} content={"Smart Learning. Всё начиналось как идея. Мы - молодая команда разработчиков из Москвы. Благодаря уникальному стартап инкубатору ВШЭ мы получили возможность начать разработку своего продукта, который должен изменить индустрию обучения."} />
			<meta property={"og:title"} content={"Наш продукт | Smart Learning"} />
			<meta property={"og:description"} content={"Smart Learning. Всё начиналось как идея. Мы - молодая команда разработчиков из Москвы. Благодаря уникальному стартап инкубатору ВШЭ мы получили возможность начать разработку своего продукта, который должен изменить индустрию обучения."} />
			<meta property={"og:image"} content={"https://images.unsplash.com/photo-1579546928937-641f7ac9bced?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&h=2000"} />
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
				<Components.LinkCustom />
				{"    "}
			</Stack>
		</Section>
		<Section quarkly-title="Hero" padding="25px 0 75px 0" lg-padding="25px 0 25px 0" justify-content="center">
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Stack>
				{"    "}
				<StackItem width="100%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						height="480px"
						sm-height="180px"
						md-height="360px"
						background="#191C23 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/ekh.png?v=2021-01-06T18:03:16.443Z) center center/cover repeat scroll padding-box"
					/>
					{"        "}
					<Text
						font="--headline1"
						margin="0px 0px 0px 0px"
						display="flex"
						align-items="center"
						color="--light"
						justify-content="center"
						quarkly-title="Title"
						sm-font="normal 900 42px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
						sm-text-align="center"
						text-align="center"
						md-font="--headline2"
					>
						Наш проект
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			sm-padding="24px 0 24px 0"
			quarkly-title="About"
			box-sizing="border-box"
			padding="90px 0px 100px 0px"
			background="--color-lightD1"
			border-color="--color-lightD2"
			border-style="solid"
			border-width="1px 0px 1px 0px"
			lg-padding="50px 0px 50px 0px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				margin="0px 32px 0px 32px"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Text
				text-align="center"
				font="--base"
				opacity="0.6"
				letter-spacing="1px"
				margin="0px 0px 10px 0px"
				color="--dark"
				lg-margin="0px 0px 6px 0px"
				lg-text-align="center"
				quarkly-title="Title"
				text-transform="uppercase"
			>
				Smart Learning{"\n\n"}
			</Text>
			<Text
				font="--headline3"
				margin="0px 0px 0px 0px"
				letter-spacing="1px"
				color="--dark"
				text-align="center"
				width="85%"
				lg-font="--lead"
				sm-font="--base"
			>
				SmartLearning это первое приложение на рынки, которое учитывает индивидуальные особенности памяти пользователя.
			</Text>
		</Section>
		<Section padding="100px 0 80px 0" lg-padding="60px 0 60px 0" quarkly-title="Info" justify-content="center">
			<Override
				slot="SectionContent"
				margin="0px 32px 0px 32px"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Stack justify-content="space-between">
				{"    "}
				<StackItem
					width="40%"
					display="flex"
					lg-width="100%"
					lg-order="2"
					lg-margin="0px 0px 0px 0px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						justify-content="flex-start"
						lg-align-items="flex-start"
						align-items="flex-start"
						padding="0px 30px 0px 0px"
						lg-padding="0px 0px 0px 0px"
					/>
					{"        "}
					<Text
						font="--base"
						margin="0px 0px 10px 0px"
						letter-spacing="1px"
						color="--dark"
						opacity="0.6"
						lg-text-align="center"
						lg-margin="0px 0px 6px 0px"
						quarkly-title="Title"
						text-transform="uppercase"
					>
						Идея
					</Text>
					<Text
						font="--headline2"
						margin="0px 0px 28px 0px"
						color="--dark"
						lg-text-align="center"
						md-margin="0px 0px 16px 0px"
						md-font="--headline3"
					>
						Что нас вдохновляло?
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 20px 0px"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="left"
						md-font="--base"
					>
						Первый вопрос, который возникает перед исследователями нервной системы и когнитивных процессов это, что такое память? Что такое память в биологическом аспекте? Как проявляется память на уровне отдельного нейрона? И в какой форме хранится информация в нервной системе?{"\n\n"}
					</Text>
					<Link
						href="/contact"
						text-decoration-line="initial"
						color="--light"
						padding="8px 18px 8px 18px"
						font="--base"
						letter-spacing="0.5px"
						text-align="center"
						margin="9px 0px 0px 0px"
						background="--color-primary"
						hover-transform="translateY(-4px)"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
					>
						Присоединиться!
					</Link>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem
					width="60%"
					display="flex"
					padding="0px 0px 0px 0px"
					miniPk-width="59%"
					lg-width="100%"
					lg-order="1"
					lg-margin="0px 0px 10px 0px"
					quarkly-title="Illustration"
				>
					{"        "}
					<Box
						width="100%"
						background="--color-lightD2 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/333.png?v=2021-01-06T15:43:03.742Z) center center/100% no-repeat"
						margin="0px 0px 0px 0px"
						padding="0px 0px 60% 0px"
						height="0px"
						hover-background="#191C23 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/insp.png?v=2021-01-06T15:23:42.865Z) center center/cover repeat scroll padding-box"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					/>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Components.Usp1 />
		<Components.CustomFooter />
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