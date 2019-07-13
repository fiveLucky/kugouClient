import React from 'react';
import styles from './index.less';

const NAME = {

  netease: '609',
  // 播放顺序
  random: '665',
  single: '604',
  order: '639',
  cycle: '612',

  // 功能
  download: '63c',
  remove: '618',
  share: '646',
  like: '60f',
  playLine: '613',
  playFill: '606',
  prevLine: '600',
  prevFill: '615',
  nextLine: '602',
  nextFill: '616',
  pause: '60d',


  // 分类
  friend: '712',
  fm: '607',
  list: '614',
  music: '617',
  cloud: '608',
  collect: '61a',
  video: '69a',

  // 其他
  add: '61d',
  right: '611',
  left: '64c',
  up: '610',
  down: '74d',
  upFill: '60e',
  downFill: '60a',
  leftFill: '60c',
  rightFill: '60b',
  heartbeat: '633',
  folder: '6ea',
  lyric: '675',
  volume: '603',

};
export default function Icon(props) {
  const { name = 'music', className, onClick = () => { } } = props;
  return (
    NAME[name]
    && (
      /* eslint-disable react/no-danger */
      <span
        className={`${styles.icon} ${className}`}
        dangerouslySetInnerHTML={{
          __html: `&#xe${NAME[name]};`,
        }}
        onClick={onClick}
      />
    )
  );
}
