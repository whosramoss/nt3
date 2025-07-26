import React from "react";
import { Hero } from "src/shared/ui/hero";
import Text from "src/shared/ui/text";
import GeometryBody from "src/modules/geometry/components/GeometryBody";
import { NavBar } from "src/shared/ui/navbar";
import { Button } from "src/shared/ui/buttons";
import { threeLinks } from "src/shared/utils/utils";
import { Structure } from "@ui/structure";
import { FadeIn } from "src/shared/ui/fade-in";
import SmoothScroll from "src/shared/ui/smooth-scroll";
import AppI18nConfig, { LocaleProps } from "src/shared/utils/app-i18n-config";
import AppText from "src/shared/utils/app-text";
import LanguageSelector from "src/shared/ui/language-selector";

export const generateStaticParams = AppI18nConfig.setLanguagesParams;

interface HomePageProps extends LocaleProps {}

export default function HomePage({ params: { lang } }: HomePageProps) {
  const i18n = new AppI18nConfig(lang);
  const { hero, end } = AppText.home;

  return (
    <React.Fragment>
      <NavBar.Root>
        <NavBar.Left>
          <Text tag="div" className="text-[14px] font-semibold text-third">
            NT3
          </Text>
        </NavBar.Left>
        <NavBar.Right>
          <Button.Link href="https://github.com/whosramoss/nt3">
            GITHUB
          </Button.Link>
          <LanguageSelector currentLanguage={lang} />
        </NavBar.Right>
      </NavBar.Root>
      <Button.Theme />
      <SmoothScroll>
        <FadeIn.Root>
          <Hero.Root>
            <FadeIn.Item delay={0} duration={1.3}>
              <Hero.Title>{i18n.getTextByLocale(hero.title)}</Hero.Title>
            </FadeIn.Item>
            <FadeIn.Item delay={0.25} duration={1.5}>
              <Hero.SubTitle>
                {i18n.getTextByLocale(hero.subtitle)}
              </Hero.SubTitle>
            </FadeIn.Item>
            <FadeIn.Item
              className="flex flex-row py-2"
              delay={0.25}
              duration={1.5}
            >
              {threeLinks.map(({ title, href }, index) => (
                <Button.Link
                  key={index}
                  href={href}
                  className="rounded-full px-4 py-2 font-semibold text-primary hover:bg-[#696c71]"
                >
                  {title}
                </Button.Link>
              ))}
            </FadeIn.Item>
          </Hero.Root>
          <Structure.Center>
            <GeometryBody />
          </Structure.Center>
          <Structure.Center className="py-16 tracking-wide">
            <FadeIn.Item delay={0.4} duration={1.5}>
              <Text tag="div" className="py-2 text-base font-bold sm:text-4xl">
                {i18n.getTextByLocale(end.text)}
              </Text>
            </FadeIn.Item>
            <FadeIn.Item
              className="cursor-pointer py-4 text-xl sm:text-3xl"
              delay={0.6}
              duration={1.5}
            >
              <Button.Link
                className="flex rounded-full bg-secondary px-6 py-2 sm:py-4 "
                href="https://threejs.org/manual/#en/primitives"
              >
                {i18n.getTextByLocale(end.button)}
              </Button.Link>
            </FadeIn.Item>
          </Structure.Center>
        </FadeIn.Root>
      </SmoothScroll>
    </React.Fragment>
  );
}
