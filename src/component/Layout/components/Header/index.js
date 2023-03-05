import classNames from 'classnames';
import style from './Header.module.scss';

const cx = classNames.bind(style);

function Header() {
    return <header className={cx('wrapper')}></header>;
}

export default Header;
