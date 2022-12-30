// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

// const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;
const icon = (name) => {
  switch (name) {
    case 'meet': return <>❤️</>
    default: return <>🖤</>
  }
}
const navConfig = [
  {
    title: '모임',
    path: '/meet',
    icon: icon('meet'),
  },
  {
    title: '내 모임',
    path: '/met',
    icon: icon('ic_analytics'),
  },
  {
    title: '자랑하기',
    path: '/we',
    icon: icon('ic_user'),
  },
  {
    title: '홍보하기',
    path: '/promotion',
    icon: icon('ic_cart'),
  },
  // {
  //   title: 'blog',
  //   path: '/home/blog',
  //   icon: icon('ic_blog'),
  // },
  {
    title: '로그인',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: '에러 페이지',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
