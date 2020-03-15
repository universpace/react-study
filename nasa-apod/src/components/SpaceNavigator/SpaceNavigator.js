import React from 'react';
import styles from './SpaceNavigator.scss';
import classNames from 'classnames/bind';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const cx = classNames.bind(styles);

const SpaceNavigator = ({ onPrev, onNext }) => (
  <div className={cx('space-navigator')}>
    <div className={cx('left', 'end')}>
      <div className={cx('circle')} onClick={onPrev}>
        <FiChevronLeft/>
      </div>
    </div>
    <div className={cx('right', 'end')}>
      <div className={cx('circle')} onClick={onNext}>
        <FiChevronRight/>
      </div>
    </div>
  </div>
);

export default SpaceNavigator;