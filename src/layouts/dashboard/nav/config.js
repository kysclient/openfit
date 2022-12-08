// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: '주식',
    path: '/home/app',
    icon: icon('ic_analytics'),
  },
  {
    title: '코인',
    path: '/home/user',
    icon: icon('ic_user'),
  },
  {
    title: '집',
    path: '/home/products',
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
