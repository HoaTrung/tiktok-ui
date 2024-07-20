import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/448887782_1856301911464446_4723686743638754010_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=HAJNZ_RVsfcQ7kNvgGQaOQq&_nc_ht=scontent.fsgn2-5.fna&oh=00_AYAFko7KxPLzENFHg4u1mAkChF4ioBspUw3428OLtUOXnQ&oe=66A16B87"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Duong Trung Hoa</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>duongtrunghoa</span>
            </div>
        </div>
    );
}

export default AccountItem;
