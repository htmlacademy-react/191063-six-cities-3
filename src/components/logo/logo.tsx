import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/app-const';
import { getLogoClasses, getLogoImageSize, LogoType } from './logo-utils';

type LogoProps = {
  logoType: LogoType;
};

function Logo(props: LogoProps): JSX.Element {
  const { logoType } = props;
  const classes = getLogoClasses(logoType);
  const imageSize = getLogoImageSize(logoType);

  return (
    <Link className={classes.linkClass} to={AppRoute.Root}>
      <img
        className={classes.imgClass}
        src="img/logo.svg"
        alt="6 cities logo"
        width={imageSize.width}
        height={imageSize.height}
      />
    </Link>
  );
}

export default Logo;
