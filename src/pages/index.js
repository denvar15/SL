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
				Home | Smart Learning
			</title>
			<meta name={"description"} content={"Smart Learning. Всё начиналось как идея. Мы - молодая команда разработчиков из Москвы. Благодаря уникальному стартап инкубатору ВШЭ мы получили возможность начать разработку своего продукта, который должен изменить индустрию обучения."} />
			<meta property={"og:title"} content={"Home | Smart Learning"} />
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
		<Section
			padding="25px 0 75px 0"
			sm-align-items="center"
			sm-justify-content="center"
			quarkly-title="Hero"
			lg-padding="25px 0 25px 0"
			sm-padding="0px 0 25px 0"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				background="linear-gradient(180deg,rgba(57, 12, 150, 0.63) 0%,rgba(0,0,0,0) 100%) 0 0 no-repeat,#191C23 url(https://images.unsplash.com/photo-1579546928937-641f7ac9bced?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&h=2000) center center/cover repeat scroll padding-box"
				height="620px"
				align-items="center"
				justify-content="center"
				sm-width="100%"
				lg-height="520px"
				md-height="420px"
				md-padding="0px 24px 0px 24px"
				md-margin="0px 16px 0px 16px"
				margin="0px 32px 0px 32px"
				min-width="auto"
			/>
			<Text
				color="--light"
				font="--headline1"
				margin="16px 0px 0px 0px"
				sm-text-align="center"
				sm-width="80%"
				lg-text-align="center"
				lg-font="--headline2"
			>
				Учитесь по-новому!
			</Text>
			<Text
				font="--lead"
				color="--light"
				margin="10px 0px 35px 0px"
				sm-text-align="center"
				sm-width="80%"
				opacity="0.7"
				md-text-align="center"
			>
				Сверхбыстрое обучение новым словам, формулам и другим знаниям!
			</Text>
			<Link
				href="/about"
				text-decoration-line="initial"
				color="--darkL2"
				background="--color-light"
				padding="12px 24px 12px 24px"
				font="--base"
				letter-spacing="0.5px"
				hover-transform="translateY(-4px)"
				transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
			>
				Начать учиться
			</Link>
		</Section>
		<Section
			padding="90px 0px 100px 0px"
			sm-padding="24px 0 24px 0"
			quarkly-title="About"
			border-color="#ffffff"
			border-style="solid"
			border-width="1px 0px 1px 0px"
			box-sizing="border-box"
			lg-padding="50px 30px 50px 30px"
			justify-content="center"
			background="--color-lightD1"
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
				Наша миссия
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
				Мы собираемся изменить подход к обучению
				<br />
				новым данным, путём индивидуального подхода
				<br />
				к человеку и его памяти.
			</Text>
		</Section>
		<Section
			padding="70px 0 70px 0"
			quarkly-title="Info"
			lg-padding="50px 0px 50px 0px"
			md-padding="25px 0px 25px 0px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				margin="0px 32px 0px 32px"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Stack>
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
						Команда
					</Text>
					<Box position="relative">
						<Box
							background="rgba(25, 226, 85, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0% 0% /100% no-repeat scroll padding-box"
							position="absolute"
							width="185px"
							height="53px"
							display="inline-block"
							top="7px"
							bottom="auto"
							right="-50px"
							left="auto"
							filter="sepia(1000%) invert(100%)"
							z-index="-1"
							sm-z-index="-1"
							sm-bottom="auto"
							sm-left="auto"
							sm-right="-24px"
							sm-top="7px"
							sm-width="100px"
							sm-height="30px"
						/>
						<Text
							font="--headline2"
							margin="0px 0px 28px 0px"
							color="--dark"
							lg-text-align="center"
							lg-margin="0px 0px 18px 0px"
							sm-font="--headline3"
							md-font="--headline3"
						>
							Кто мы?
						</Text>
					</Box>
					<Text
						font="--lead"
						margin="0px 0px 20px 0px"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="left"
						lg-margin="0px 0px 18px 0px"
						sm-font="--base"
					>
						Всё начиналось как идея. Мы - молодая команда разработчиков из Москвы. Благодаря уникальному стартап инкубатору ВШЭ мы получили возможность начать разработку своего продукта, который должен изменить индустрию обучения.
					</Text>
					<Link
						href="/about"
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
						Узнать больше
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
						background="linear-gradient(140deg,rgba(57, 12, 150, 0.63) 0%,rgba(0,0,0,0) 100%) 0 0 no-repeat,#191C23 url(https://images.unsplash.com/photo-1579546928937-641f7ac9bced?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&h=2000) center center/cover repeat scroll padding-box"
						margin="0px 0px 0px 0px"
						padding="0px 0px 60% 0px"
						height="0px"
						hover-background="linear-gradient(180deg,rgba(57, 12, 150, 0.63) 0%,rgba(0,0,0,0) 100%) 0 0 no-repeat,#191C23 url(https://images.unsplash.com/photo-1579546928937-641f7ac9bced?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&h=2000) center center/cover repeat scroll padding-box"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					/>
					{"    "}
				</StackItem>
			</Stack>
			<Stack margin="80px -16px -16px -16px" lg-margin="50px -16px -16px -16px" md-margin="30px -16px -16px -16px">
				{"        "}
				<StackItem
					width="60%"
					display="flex"
					padding="0px 0px 0px 0px"
					miniPk-width="59%"
					lg-width="100%"
					lg-margin="0px 0px 10px 0px"
					quarkly-title="Illustration"
				>
					<Override slot="StackItemContent" lg-width="100%" />
					{"        "}
					<Box
						width="100%"
						background="linear-gradient(120deg,rgba(57, 12, 150, 0.63) 0%,rgba(0,0,0,0) 100%) 0 0 no-repeat,#191C23 url(https://images.unsplash.com/photo-1579546928937-641f7ac9bced?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&h=2000) center center/cover repeat scroll padding-box"
						margin="0px 0px 0px 0px"
						padding="0px 0px 60% 0px"
						height="0px"
						hover-background="linear-gradient(160deg,rgba(57, 12, 150, 0.63) 0%,rgba(0,0,0,0) 100%) 0 0 no-repeat,#191C23 url(https://images.unsplash.com/photo-1579546928937-641f7ac9bced?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&h=2000) center center/cover repeat scroll padding-box"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					/>
					{"    "}
				</StackItem>
				<StackItem width="40%" display="flex" lg-margin="0px 0px 0px 0px" lg-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						justify-content="flex-start"
						lg-align-items="flex-start"
						align-items="flex-start"
						padding="0px 0px 0px 30px"
						lg-padding="0px 0px 0px 0px"
					/>
					{"        "}
					<Text
						font="--base"
						margin="0px 0px 10px 0px"
						letter-spacing="1px"
						color="--dark"
						opacity="0.6"
						lg-margin="0px 0px 6px 0px"
						lg-text-align="center"
						quarkly-title="Title"
						text-transform="uppercase"
					>
						Smart Learning
					</Text>
					<Box position="relative">
						<Box
							background="rgba(25, 226, 85, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0% 0% /100% no-repeat scroll padding-box"
							width="185px"
							height="53px"
							display="inline-block"
							position="absolute"
							bottom="auto"
							left="auto"
							right="-57px"
							top="7px"
							z-index="-1"
							filter="sepia(1000%) invert(100%)"
							sm-bottom="auto"
							sm-left="auto"
							sm-right="-25px"
							sm-top="7px"
							sm-z-index="-1"
							sm-width="100px"
							sm-height="30px"
						/>
						<Text
							font="--headline2"
							margin="0px 0px 28px 0px"
							color="--dark"
							lg-text-align="center"
							lg-margin="0px 0px 18px 0px"
							sm-font="--headline3"
							md-font="--headline3"
						>
							Почему мы?
						</Text>
					</Box>
					<Text
						font="--lead"
						margin="0px 0px 20px 0px"
						color="--darkL2"
						opacity="0.6"
						sm-text-align="left"
						lg-text-align="left"
						lg-margin="0px 0px 18px 0px"
						sm-font="--base"
					>
						Наш продукт предлагает иновационные и востребованные функции, а потому значительно превосходит конкурентов.{" "}
					</Text>
					<Link
						href="/team"
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
						Узнать больше
					</Link>
					{"    "}
				</StackItem>
			</Stack>
			<Stack margin="80px -16px -16px -16px" lg-margin="50px -16px -16px -16px" md-margin="30px -16px -16px -16px">
				{"    "}
				<StackItem
					width="40%"
					display="flex"
					lg-width="100%"
					lg-order="2"
					lg-margin="0px 0px 0px 0px"
					box-sizing="border-box"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						justify-content="flex-start"
						lg-align-items="flex-start"
						align-items="flex-start"
						box-sizing="border-box"
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
						Контакты
					</Text>
					<Box position="relative">
						<Box
							position="absolute"
							background="rgba(25, 226, 85, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0% 0% /100% no-repeat scroll padding-box"
							z-index="-1"
							width="185px"
							height="53px"
							display="inline-block"
							right="-55px"
							top="6px"
							filter="sepia(1000%) invert(100%)"
							bottom="auto"
							left="auto"
							sm-z-index="-1"
							sm-bottom="auto"
							sm-left="auto"
							sm-right="-21px"
							sm-top="7px"
							sm-width="100px"
							sm-height="30px"
							xl-z-index="-1"
							xl-bottom="19px"
							xl-left="auto"
							xl-right="69px"
							xl-top="auto"
						/>
						<Text
							font="--headline2"
							margin="0px 0px 28px 0px"
							color="--dark"
							lg-text-align="center"
							lg-margin="0px 0px 18px 0px"
							sm-text-align="left"
							sm-font="--headline3"
							md-font="--headline3"
						>
							Как мы работаем
						</Text>
					</Box>
					<Text
						font="--lead"
						margin="0px 0px 20px 0px"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="left"
						lg-margin="0px 0px 18px 0px"
						sm-font="--base"
					>
						Разработка для нас - крайне ответственный процесс. Подходить к написанию кода, созданию интерфейсов и функций с уверенностью и изяществом - наше кредо.
					</Text>
					<Link
						href="/contact"
						text-decoration-line="initial"
						color="--light"
						padding="8px 18px 8px 18px"
						font="--base"
						letter-spacing="0.5px"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
						text-align="center"
						margin="9px 0px 0px 0px"
						background="--color-primary"
						hover-transform="translateY(-4px)"
					>
						Узнать больше
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
						background="linear-gradient(100deg,rgba(57, 12, 150, 0.63) 0%,rgba(0,0,0,0) 100%) 0 0 no-repeat,#191C23 url(https://images.unsplash.com/photo-1579546928937-641f7ac9bced?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&h=2000) center center/cover repeat scroll padding-box"
						margin="0px 0px 0px 0px"
						padding="0px 0px 60% 0px"
						height="0px"
						hover-background="linear-gradient(200deg,rgba(57, 12, 150, 0.63) 0%,rgba(0,0,0,0) 100%) 0 0 no-repeat,#191C23 url(https://images.unsplash.com/photo-1579546928937-641f7ac9bced?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&h=2000) center center/cover repeat scroll padding-box"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					/>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="90px 0px 100px 0px"
			sm-padding="24px 0 24px 0"
			quarkly-title="FAQ"
			background="--color-lightD1"
			border-color="--color-lightD2"
			border-style="solid"
			border-width="1px 0px 1px 0px"
			box-sizing="border-box"
			lg-padding="50px 30px 50px 30px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				margin="0px 48px 0px 48px"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Text
				font="--base"
				margin="0px 0px 10px 0px"
				letter-spacing="1px"
				color="--dark"
				opacity="0.6"
				text-align="center"
				text-transform="uppercase"
				lg-text-align="center"
				lg-margin="0px 0px 6px 0px"
				quarkly-title="Title"
			>
				Ответы на вопросы
			</Text>
			<Text
				font="--headline2"
				margin="0px 0px 64px 0px"
				color="--dark"
				text-align="center"
				lg-text-align="center"
				lg-margin="0px 0px 36px 0px"
				sm-font="--headline3"
				md-font="--headline3"
			>
				FAQ
			</Text>
			<Stack>
				{"    "}
				<StackItem
					width="25%"
					display="flex"
					padding="16px 16px 16px 16px"
					margin="0px 0px 0px 0px"
					lg-width="50%"
					lg-align-items="center"
					lg-justify-content="center"
					md-width="100%"
				>
					<Override slot="StackItemContent" flex-direction="column" lg-align-items="center" md-align-items="flex-start" />
					{"        "}
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						color="--dark"
						text-align="center"
						md-text-align="left"
					>
						Для кого?
					</Text>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
					>
						Для каждого
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="25%"
					display="flex"
					padding="16px 45px 16px 16px"
					lg-width="50%"
					md-width="100%"
				>
					<Override slot="StackItemContent" flex-direction="column" lg-align-items="center" md-align-items="flex-start" />
					{"        "}
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						color="--dark"
						text-align="center"
						md-text-align="left"
					>
						Почему мы?
					</Text>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
					>
						Потому что не имеем аналогов
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						lg-width="100%"
						lg-align-items="center"
						md-align-items="flex-start"
					/>
					{"        "}
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						color="--dark"
						text-align="center"
						md-text-align="left"
					>
						Почему сейчас?
					</Text>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
					>
						Потому что нет поводов откладывать
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						lg-width="100%"
						lg-align-items="center"
						md-align-items="flex-start"
					/>
					{"        "}
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						color="--dark"
						text-align="center"
						md-text-align="left"
					>
						Зачем?
					</Text>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
					>
						Ради знаний
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Components.Usp />
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