import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://gamek.mediacdn.vn/133514250583805952/2020/5/31/anh-4-15909430232362015900333.png"
                alt="Thai"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Nang Thai</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Nguyen Nang Thai</span>
            </div>
        </div>
    );
}

export default AccountItem;
