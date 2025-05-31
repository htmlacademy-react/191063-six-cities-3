export type LogoType = 'Header' | 'Footer';

export function getLogoClasses(logoType: LogoType) {
  switch (logoType) {
    case 'Footer':
      return {
        linkClass: 'footer__logo-link',
        imgClass: 'footer__logo',
      };
    default:
      return {
        linkClass: 'header__logo-link',
        imgClass: 'header__logo',
      };
  }
}

export function getLogoImageSize(logoType: LogoType) {
  switch (logoType) {
    case 'Footer':
      return {
        width: '64',
        height: '33',
      };
    default:
      return {
        width: '81',
        height: '41',
      };
  }
}
