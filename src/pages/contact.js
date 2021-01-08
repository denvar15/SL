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
				Связаться | Smart Learning
			</title>
			<meta name={"description"} content={"Smart Learning. Всё начиналось как идея. Мы - молодая команда разработчиков из Москвы. Благодаря уникальному стартап инкубатору ВШЭ мы получили возможность начать разработку своего продукта, который должен изменить индустрию обучения."} />
			<meta property={"og:title"} content={"Связаться | Smart Learning"} />
			<meta property={"og:description"} content={"Smart Learning. Всё начиналось как идея. Мы - молодая команда разработчиков из Москвы. Благодаря уникальному стартап инкубатору ВШЭ мы получили возможность начать разработку своего продукта, который должен изменить индустрию обучения."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
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
		<Section quarkly-title="Hero" padding="25px 0 75px 0" lg-padding="25px 0 25px 0" justify-content="center">
			<Override
				slot="SectionContent"
				min-width="auto"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
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
						background="#191C23 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/ffff.png?v=2021-01-06T12:58:59.089Z) center center/cover repeat scroll padding-box"
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
						Связаться с нами
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			box-sizing="border-box"
			quarkly-title="Contacts"
			padding="50px 0px 50px 0px"
			lg-padding="25px 0px 25px 0px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				min-width="auto"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
			/>
			<Stack justify-content="flex-start" align-items="stretch" gap="--cmp-stack-gap-default">
				{"    "}{"    "}
				<StackItem width="35%" display="flex" quarkly-title="Side" md-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						sm-margin="0px 0px 0px 0px"
						margin="0px 0px 0px 50px"
						align-items="flex-start"
						justify-content="flex-start"
						lg-margin="0px 0px 0px 0px"
						md-align-items="stretch"
					/>
					{"        "}
					<Box margin="0px 0px 36px 0px" xl-margin="0px 0px 24px 0px">
						<Text
							font="--base"
							letter-spacing="1px"
							margin="0px 0px 10px 0px"
							quarkly-title="Title"
							color="--dark"
							text-transform="uppercase"
							xl-margin="0px 0px 4px 0px"
						>
							Our location
						</Text>
						<Text
							font="--base"
							margin="0px 0px 0px 0px"
							display="inline-block"
							opacity="0.6"
							quarkly-title="Description"
							color="--dark"
						>
							Москва
						</Text>
					</Box>
					<Box margin="0px 0px 36px 0px" quarkly-title="Working Hours" xl-margin="0px 0px 24px 0px">
						<Text
							font="--base"
							letter-spacing="1px"
							margin="0px 0px 10px 0px"
							quarkly-title="Title"
							color="--dark"
							text-transform="uppercase"
							xl-margin="0px 0px 4px 0px"
						>
							WORKING HOURS
						</Text>
						<Text
							font="--base"
							margin="0px 0px 0px 0px"
							display="inline-block"
							opacity="0.6"
							quarkly-title="Description"
							color="--dark"
						>
							6:00 a.m. - 10:00 p.m.
						</Text>
					</Box>
					<Box margin="0px 0px 36px 0px" quarkly-title="Contact" xl-margin="0px 0px 24px 0px">
						<Text
							font="--base"
							letter-spacing="1px"
							margin="0px 0px 10px 0px"
							quarkly-title="Title"
							color="--dark"
							text-transform="uppercase"
							xl-margin="0px 0px 4px 0px"
						>
							Contact us
						</Text>
						<Link
							href="mailto:hello@company.com"
							color="--dark"
							opacity="0.6"
							target="_blank"
							quarkly-title="Email"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							transition="opacity .15s ease 0s"
							hover-opacity="0.6"
							font="--base"
							text-decoration-line="initial"
							hover-text-decoration-line="underline"
						>
							SL@some_mail.com
						</Link>
					</Box>
					<Box margin="0px 0px 36px 0px" quarkly-title="Working Hours" xl-margin="0px 0px 24px 0px">
						<Text
							font="--base"
							letter-spacing="1px"
							margin="0px 0px 10px 0px"
							quarkly-title="Title"
							color="--dark"
							text-transform="uppercase"
							xl-margin="0px 0px 4px 0px"
						>
							Call us
						</Text>
						<Link
							href="tel:+1(234)567-89-00"
							target="_blank"
							quarkly-title="Phone"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							display="block"
							color="--dark"
							text-decoration-line="initial"
							hover-opacity=".5"
							opacity="0.6"
							transition="opacity .15s ease 0s"
							font="--base"
						>
							+1(234)567-89-00
						</Link>
					</Box>
					<Text
						font="--lead"
						display="inline-block"
						quarkly-title="Description"
						color="--dark"
						text-align="center"
						background="--color-lightD1"
						padding="14px 24px 14px 24px"
						margin="0px 0px 0px 0px"
						md-width="auto"
						xl-font="--base"
					>
						Мы всегда рады новым контактам!
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="60%"
					display="flex"
					padding="0px 0px 0px 0px"
					miniPk-width="59%"
					lg-width="100%"
					lg-order="1"
					lg-margin="0px 0px 10px 0px"
					quarkly-title="Illustration"
					margin="0px 0px 0px 60px"
				>
					{"        "}
					<Box
						width="100%"
						background="--color-lightD2 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/nnnnn.png?v=2021-01-06T15:19:15.357Z) center center/100% no-repeat"
						margin="0px 0px 0px 0px"
						padding="0px 0px 60% 0px"
						height="0px"
						hover-background="#191C23 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/nnnnn.png?v=2021-01-06T15:19:15.357Z) center center/cover repeat scroll padding-box"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					/>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="50px 0px 50px 0px"
			quarkly-title="Team"
			box-sizing="border-box"
			lg-padding="25px 0px 25px 0px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				sm-min-width="none"
				sm-justify-content="flex-start"
				sm-flex-direction="column"
				sm-align-items="flex-start"
				min-width="auto"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
			/>
			<Text
				text-align="center"
				font="--base"
				opacity="0.5"
				letter-spacing="1px"
				margin="0px 0px 10px 0px"
				color="--dark"
				text-transform="uppercase"
				lg-margin="0px 0px 6px 0px"
			>
				Наша команда
			</Text>
			<Text
				font="--headline2"
				margin="0px 0px 55px 0px"
				color="--dark"
				text-align="center"
				width="100%"
				md-margin="0px 0px 16px 0px"
				lg-margin="0px 0px 30px 0px"
				md-font="--headline3"
				sm-text-align="left"
			>
				Meet Our Experts.
			</Text>
			<Stack
				lg-align-items="flex-start"
				lg-justify-content="center"
				quarkly-title="Cards"
				justify-content="space-between"
				md-justify-content="flex-start"
				sm-width="100%"
				sm-margin="-16px 0px -16px 0px"
			>
				<StackItem width="25%" lg-width="100%" lg-margin="0px 0px 0px 0px" quarkly-title="Description">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					<Text
						font="--headline3"
						margin="0px 0px 8px 0px"
						text-align="left"
						color="--dark"
						quarkly-title="Name"
						md-font="--lead"
						sm-font="--base"
						lg-font="--lead"
						sm-margin="0px 0px 0px 0px"
					>
						Мы работаем каждый день для того, чтобы вы получили свой уникальный опыт.
					</Text>
				</StackItem>
				<StackItem
					lg-width="33.33%"
					sm-width="100%"
					width="18.75%"
					quarkly-title="Card"
					md-width="100%"
					sm-padding="16px 0px 16px 0px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						md-flex-direction="row"
						sm-flex-direction="row"
						md-align-items="stretch"
						md-max-height="100%"
					/>
					<Box
						background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/aalexey.png?v=2021-01-06T12:59:50.796Z) center center/100%"
						width="100%"
						quarkly-title="Image"
						padding="0px 0px 121% 0px"
						md-margin="0px 0px 0px 0px"
						md-padding="0px 0px 0px 0px"
						md-width="200px"
						hover-background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/aalexey.png?v=2021-01-06T12:59:50.796Z) center center/120%"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						md-height="250px"
						sm-height="auto"
						xl-background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/aalexey.png?v=2021-01-06T12:59:50.796Z) center center/100%"
						xl-hover-background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/aalexey.png?v=2021-01-06T12:59:50.796Z) center center/120%"
						sm-background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/aalexey.png?v=2021-01-06T12:59:50.796Z) center center/100%"
						sm-hover-background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/aalexey.png?v=2021-01-06T12:59:50.796Z) center center/120%"
						lg-background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/aalexey.png?v=2021-01-06T12:59:50.796Z) center center/100%"
					/>
					<Box
						md-margin="0px 0px 0px 24px"
						md-display="flex"
						md-flex-direction="column"
						md-width="50%"
						sm-margin="0px 0px 0px 0px"
						sm-width="100%"
						sm-padding="0px 0px 10% 18px"
					>
						<Text
							font="--headline3"
							margin="24px 0px 8px 0px"
							color="--dark"
							quarkly-title="Name"
							md-margin="0px 0px 4px 0px"
							md-font="--lead"
							sm-margin="0px 0px 4px 0px"
						>
							Алексей
						</Text>
						<Text
							font="--base"
							margin="0px 0px 0px 0px"
							opacity="0.6"
							color="--dark"
							quarkly-title="Position"
							md-margin="0px 0px 0px 0px"
						>
							Android
						</Text>
						<Text
							font="--base"
							margin="18px 0px 0px 0px"
							display="inline-block"
							opacity="0.6"
							quarkly-title="Contacts"
							color="--dark"
							sm-margin="10px 0px 0px 0px"
						>
							<Link
								href="mailto:dev@company.com"
								color="--dark"
								opacity="0.6"
								target="_blank"
								quarkly-title="Email"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								transition="opacity .15s ease 0s"
								font="--base"
								text-decoration-line="initial"
								hover-text-decoration-line="underline"
							>
								some@company.com
							</Link>
							<Link
								href="tel:+1(234)567-89-03"
								target="_blank"
								quarkly-title="Phone"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								display="block"
								color="--dark"
								text-decoration-line="initial"
								hover-opacity="1"
								opacity="1"
								transition="opacity .15s ease 0s"
								font="--base"
								hover-text-decoration-line="underline"
							>
								+1(234)567-89-03
							</Link>
						</Text>
					</Box>
				</StackItem>
				<StackItem
					width="18.75%"
					lg-width="33.33%"
					sm-width="100%"
					lg-margin="0px 0px 30px 0px"
					quarkly-title="Card"
					md-width="100%"
					md-margin="0px 0px 0px 0px"
					sm-padding="16px 0px 16px 0px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						md-flex-direction="row"
						md-align-items="stretch"
						md-justify-content="flex-start"
						sm-flex-direction="row"
						md-max-height="100%"
					/>
					<Box
						background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/den.png?v=2021-01-06T13:00:16.007Z) center center/100%"
						width="100%"
						quarkly-title="Image"
						padding-bottom="(4 / 3) * 100%"
						padding="0px 0px 121% 0px"
						md-margin="0px 0px 0px 0px"
						hover-background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/den.png?v=2021-01-06T13:00:16.007Z) center center/120%"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						md-width="200px"
						md-padding="0px 0px 0px 0px"
						md-height="250px"
						sm-height="auto"
						sm-background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/den.png?v=2021-01-06T13:00:16.007Z) center center/100%"
						sm-hover-background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/den.png?v=2021-01-06T13:00:16.007Z) center center/120%"
						xl-hover-background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/den.png?v=2021-01-06T13:00:16.007Z) center center/120%"
						xl-background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/den.png?v=2021-01-06T13:00:16.007Z) center center/100%"
						lg-background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/den.png?v=2021-01-06T13:00:16.007Z) center center/100%"
					/>
					<Box
						md-width="50%"
						md-margin="0px 0px 0px 24px"
						md-display="flex"
						md-flex-direction="column"
						sm-margin="0px 0px 0px 0px"
						sm-width="100%"
						sm-padding="0px 0px 10% 18px"
					>
						<Text
							font="--headline3"
							margin="24px 0px 8px 0px"
							text-align="left"
							color="--dark"
							quarkly-title="Name"
							md-margin="0px 0px 4px 0px"
							sm-margin="0px 0px 4px 0px"
							md-font="--lead"
						>
							Денис
						</Text>
						<Text
							font="--base"
							margin="0px 0px 0px 0px"
							text-align="left"
							opacity="0.6"
							color="--dark"
							quarkly-title="Position"
							md-margin="0px 0px 0px 0px"
						>
							Frontend/Backend
						</Text>
						<Text
							font="--base"
							margin="18px 0px 0px 0px"
							display="inline-block"
							opacity="0.6"
							quarkly-title="Contacts"
							text-align="left"
							color="--dark"
							sm-margin="10px 0px 0px 0px"
						>
							<Link
								href="mailto:head@company.com"
								color="--dark"
								opacity="0.6"
								target="_blank"
								quarkly-title="Email"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								transition="opacity .15s ease 0s"
								font="--base"
								text-decoration-line="initial"
								hover-text-decoration-line="underline"
							>
								some@company.com
							</Link>
							<Link
								href="tel:+1(234)567-89-01"
								target="_blank"
								quarkly-title="Phone"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								display="block"
								color="--dark"
								text-decoration-line="initial"
								hover-opacity="1"
								opacity="1"
								transition="opacity .15s ease 0s"
								font="--base"
								hover-text-decoration-line="underline"
							>
								+1(234)567-89-01
							</Link>
						</Text>
					</Box>
				</StackItem>
				<StackItem
					lg-width="33.33%"
					sm-width="100%"
					width="18.75%"
					quarkly-title="Card"
					md-width="100%"
					sm-padding="16px 0px 16px 0px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						md-flex-direction="row"
						sm-flex-direction="row"
						md-align-items="stretch"
						md-max-height="100%"
					/>
					<Box
						background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/nik.png?v=2021-01-06T13:00:06.740Z) center center/100%"
						width="100%"
						quarkly-title="Image"
						padding="0px 0px 121% 0px"
						md-margin="0px 0px 0px 0px"
						md-padding="0px 0px 0px 0px"
						md-width="200px"
						hover-background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/nik.png?v=2021-01-06T13:00:06.740Z) center center/120%"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						md-height="250px"
						sm-height="auto"
						xl-background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/nik.png?v=2021-01-06T13:00:06.740Z) center center/100%"
						xl-hover-background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/nik.png?v=2021-01-06T13:00:06.740Z) center center/120%"
						sm-background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/nik.png?v=2021-01-06T13:00:06.740Z) center center/100%"
						sm-hover-background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/nik.png?v=2021-01-06T13:00:06.740Z) center center/120%"
						lg-background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/nik.png?v=2021-01-06T13:00:06.740Z) center center/100%"
					/>
					<Box
						md-margin="0px 0px 0px 24px"
						md-display="flex"
						md-flex-direction="column"
						md-width="50%"
						sm-margin="0px 0px 0px 0px"
						sm-width="100%"
						sm-padding="0px 0px 10% 18px"
					>
						<Text
							font="--headline3"
							margin="24px 0px 8px 0px"
							text-align="left"
							color="--dark"
							quarkly-title="Name"
							md-margin="0px 0px 4px 0px"
							md-font="--lead"
							sm-margin="0px 0px 4px 0px"
						>
							Никита
						</Text>
						<Text
							font="--base"
							margin="0px 0px 0px 0px"
							text-align="left"
							opacity="0.6"
							color="--dark"
							quarkly-title="Position"
							md-margin="0px 0px 0px 0px"
						>
							Основатель/android
						</Text>
						<Text
							font="--base"
							margin="18px 0px 0px 0px"
							display="inline-block"
							opacity="0.6"
							quarkly-title="Contacts"
							text-align="left"
							color="--dark"
							sm-margin="10px 0px 0px 0px"
						>
							<Link
								href="mailto:design@company.com"
								color="--dark"
								opacity="0.6"
								target="_blank"
								quarkly-title="Email"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								transition="opacity .15s ease 0s"
								font="--base"
								text-decoration-line="initial"
								hover-text-decoration-line="underline"
							>
								some@company.com
							</Link>
							<Link
								href="tel:+1(234)567-89-02"
								target="_blank"
								quarkly-title="Phone"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								display="block"
								color="--dark"
								text-decoration-line="initial"
								hover-opacity="1"
								opacity="1"
								transition="opacity .15s ease 0s"
								font="--base"
								hover-text-decoration-line="underline"
							>
								+1(234)567-89-02
							</Link>
						</Text>
					</Box>
				</StackItem>
				<StackItem
					width="18.75%"
					lg-width="33.33%"
					sm-width="100%"
					lg-margin="0px 0px 30px 0px"
					quarkly-title="Card"
					md-width="100%"
					md-margin="0px 0px 0px 0px"
					sm-padding="16px 0px 16px 0px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						md-flex-direction="row"
						md-align-items="stretch"
						md-justify-content="flex-start"
						sm-flex-direction="row"
						md-max-height="100%"
					/>
					<Box
						background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/n.png?v=2021-01-06T13:00:43.550Z) center center/100%"
						width="100%"
						quarkly-title="Image"
						padding-bottom="(4 / 3) * 100%"
						padding="0px 0px 121% 0px"
						md-margin="0px 0px 0px 0px"
						hover-background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/n.png?v=2021-01-06T13:00:43.550Z) center center/120%"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						md-width="200px"
						md-padding="0px 0px 0px 0px"
						md-height="250px"
						sm-height="auto"
						sm-background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/n.png?v=2021-01-06T13:00:43.550Z) center center/100%"
						sm-hover-background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/n.png?v=2021-01-06T13:00:43.550Z) center center/120%"
						xl-hover-background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/n.png?v=2021-01-06T13:00:43.550Z) center center/120%"
						xl-background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/n.png?v=2021-01-06T13:00:43.550Z) center center/100%"
						lg-background="--color-lightD1 url(https://uploads.quarkly.io/5fa7b2b92c4ef2001e31e59d/images/n.png?v=2021-01-06T13:00:43.550Z) center center/100%"
					/>
					<Box
						md-width="50%"
						md-margin="0px 0px 0px 24px"
						md-display="flex"
						md-flex-direction="column"
						sm-margin="0px 0px 0px 0px"
						sm-width="100%"
						sm-padding="0px 0px 10% 18px"
					>
						<Text
							font="--headline3"
							margin="24px 0px 8px 0px"
							text-align="left"
							color="--dark"
							quarkly-title="Name"
							md-margin="0px 0px 4px 0px"
							sm-margin="0px 0px 4px 0px"
							md-font="--lead"
						>
							Анастасия
						</Text>
						<Text
							font="--base"
							margin="0px 0px 0px 0px"
							text-align="left"
							opacity="0.6"
							color="--dark"
							quarkly-title="Position"
							md-margin="0px 0px 0px 0px"
						>
							SMM/Design
						</Text>
						<Text
							font="--base"
							margin="18px 0px 0px 0px"
							display="inline-block"
							opacity="0.6"
							quarkly-title="Contacts"
							text-align="left"
							color="--dark"
							sm-margin="10px 0px 0px 0px"
						>
							<Link
								href="mailto:head@company.com"
								color="--dark"
								opacity="0.6"
								target="_blank"
								quarkly-title="Email"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								transition="opacity .15s ease 0s"
								font="--base"
								text-decoration-line="initial"
								hover-text-decoration-line="underline"
							>
								some@company.com
							</Link>
							<Link
								href="tel:+1(234)567-89-01"
								target="_blank"
								quarkly-title="Phone"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								display="block"
								color="--dark"
								text-decoration-line="initial"
								hover-opacity="1"
								opacity="1"
								transition="opacity .15s ease 0s"
								font="--base"
								hover-text-decoration-line="underline"
							>
								+1(234)567-89-01
							</Link>
						</Text>
					</Box>
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Components.Usp2 />
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