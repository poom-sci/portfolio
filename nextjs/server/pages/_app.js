(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__(4047);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./hoc/Layout/Layout.module.css
var Layout_module = __webpack_require__(9049);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Slide/Slide.js
var Slide = __webpack_require__(2285);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AppBar/AppBar.js
var AppBar = __webpack_require__(5258);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js
var Toolbar = __webpack_require__(8358);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Menu/Menu.js + 3 modules
var Menu = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 1 modules
var Box = __webpack_require__(2014);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(3901);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(7812);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/Navigation/NavigationItems/NavigationItems.module.css
var NavigationItems_module = __webpack_require__(5032);
var NavigationItems_module_default = /*#__PURE__*/__webpack_require__.n(NavigationItems_module);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__(2822);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(998);
;// CONCATENATED MODULE: external "@material-ui/icons/Restore"
const Restore_namespaceObject = require("@material-ui/icons/Restore");
// EXTERNAL MODULE: ./components/Navigation/NavigationItems/NavigationItem/NavigationItem.module.css
var NavigationItem_module = __webpack_require__(6772);
var NavigationItem_module_default = /*#__PURE__*/__webpack_require__.n(NavigationItem_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Navigation/NavigationItems/NavigationItem/NavigationItem.js
 // import { NavLink } from "react-router-dom";

 // import Link from '../../../UI/Link/Link';








const navigationItem = props => {
  let className = [(NavigationItem_module_default()).NavigationItem];
  const router = (0,router_.useRouter)(); // if (router.asPath === props.link) {
  // className.push(classes.active);
  // }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: className.join(' '),
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: props.link,
      exact: props.exact,
      onClick: props.onClick,
      scroll: true,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: router.asPath === props.link ? (NavigationItem_module_default()).active : null,
        children: props.children
      })
    })
  });
}; // export async function getServerSideProps(context) {
//   return {
//     props: {}, // Will be passed to the page component as props
//   };
// }


/* harmony default export */ const NavigationItem = (navigationItem);
;// CONCATENATED MODULE: ./components/Navigation/NavigationItems/NavigationItems.js



 // import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';




const navigationItems = props => {
  let data = [{
    name: 'Home',
    link: '/'
  }, {
    name: 'AboutMe',
    link: '/aboutMe'
  }, {
    name: 'Contact',
    link: '/contact'
  }];

  if (props.isAuthenticated) {
    data = [{
      name: 'Home',
      link: '/'
    }, {
      name: 'Reserve',
      link: '/reserve'
    }, {
      name: 'AboutMe',
      link: '/aboutMe'
    }, {
      name: 'Contact',
      link: '/contact'
    }];
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx(List/* default */.Z, {
      className: (NavigationItems_module_default()).NavigationItems,
      children: data.map((element, index) => /*#__PURE__*/jsx_runtime_.jsx(ListItem/* default */.Z, {
        style: {
          textAlign: 'center '
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(NavigationItem, {
          link: element.link,
          exact: true,
          onClick: props.onClick,
          children: element.name
        })
      }, element.name))
    })
  });
};

/* harmony default export */ const NavigationItems = (navigationItems);
// EXTERNAL MODULE: ./axios-orders.js
var axios_orders = __webpack_require__(8306);
;// CONCATENATED MODULE: ./store/actions/order.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};
const purchaseBurgerFail = error => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  };
};
const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  };
};
const purchaseBurger = (orderData, token) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios.post('/orders.json?auth=' + token, orderData).then(response => {
      dispatch(purchaseBurgerSuccess(response.data.name, orderData));
    }).catch(error => {
      dispatch(purchaseBurgerFail(error));
    });
  };
};
const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};
const fetchOrdersSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  };
};
const fetchOrdersFail = error => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
  };
};
const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};
const fetchOrders = (token, userId) => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios.get('/orders.json' + queryParams).then(res => {
      const fetchedOrders = [];

      for (let key in res.data) {
        fetchedOrders.push(_objectSpread(_objectSpread({}, res.data[key]), {}, {
          id: key
        }));
      }

      dispatch(fetchOrdersSuccess(fetchedOrders));
    }).catch(err => {
      dispatch(fetchOrdersFail(err));
    });
  };
};
;// CONCATENATED MODULE: ./store/actions/auth.js


const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};
const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  };
};
const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};
const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userId');
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};
const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};
const auth = (email, password, isSignup, username) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
      username: username
    };
    let url = '/auth/login';

    if (!isSignup) {
      url = '/auth/signup';
    }

    axios.post(url, authData).then(response => {
      const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('expirationDate', expirationDate);
      localStorage.setItem('userId', response.data.userId); // sessionStorage.setItem("jwtToken", response.data.token);

      dispatch(authSuccess(response.data.token, response.data.userId));
      dispatch(checkAuthTimeout(response.data.expiresIn));
    }).catch(err => {
      console.log(err.response.data);
      dispatch(authFail(err.response.data));
    });
  };
};
const setAuthError = path => {
  return {
    type: actionTypes.SET_AUTH_ERROR
  };
};
const setAuthRedirectPath = path => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  };
};
const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');

    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));

      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem('userId');
        dispatch(authSuccess(token, userId));
        dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
      }
    }
  };
};
;// CONCATENATED MODULE: ./store/actions/index.js



// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
;// CONCATENATED MODULE: external "@material-ui/icons/Menu"
const Menu_namespaceObject = require("@material-ui/icons/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: ./components/Navigation/Toolbar/Toolbar.js









 // import Image from 'next/image';

 // import Classes from './Toolbar.module.css';




 // import AccountCircle from '@material-ui/icons/AccountCircle';



const useStyles = (0,makeStyles/* default */.Z)(theme => ({
  root: {
    flexGrow: 1 // textDecoration: "none",

  },
  menuButton: {
    '@media (min-width:501px)': {
      display: 'none'
    },
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  navButton: {
    '@media (max-width:500px)': {
      display: 'none'
    }
  },
  logoButton: {
    display: 'inline-Block',
    textDecoration: 'none',
    '&:hover': {
      transform: 'scale(1.1)',
      transition: 'all 100ms ease-in'
    }
  },
  box: {
    flexGrow: 1
  }
}));
function AppToolbar(props) {
  const classes = useStyles();
  const router = (0,router_.useRouter)();
  const dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
  const [anchorEl, setAnchorEl] = external_react_default().useState(null);
  const open = Boolean(anchorEl); // const logout = useCallback(() => dispatch(actions.logout()));
  // const handleChange = (event) => {
  //   //   setAuth(event.target.checked);
  // };
  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleClose = () => {
    setAnchorEl(null);
  }; // const trigger = useScrollTrigger();


  const trigger = false;
  return /*#__PURE__*/jsx_runtime_.jsx(Slide/* default */.Z, {
    appear: false,
    direction: "down",
    in: !trigger,
    children: /*#__PURE__*/jsx_runtime_.jsx(AppBar/* default */.Z, {
      position: "fixed",
      style: {
        background: '#ffd883',
        justifyContent: 'space-between'
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Toolbar/* default */.Z, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
          edge: "end",
          className: classes.menuButton,
          color: "inherit",
          "aria-label": "menu",
          onClick: props.drawerToggleClicked,
          children: /*#__PURE__*/jsx_runtime_.jsx((Menu_default()), {
            style: {
              fill: 'black'
            }
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Box/* default */.Z, {
          className: classes.box,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx(Avatar/* default */.Z, {
                className: classes.logoButton,
                variant: "circular",
                alt: "logo",
                src: "/poom-logo.jpg"
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Box/* default */.Z, {
          className: classes.navButton,
          children: /*#__PURE__*/jsx_runtime_.jsx(NavigationItems, {
            isAuthenticated: props.isAuth
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Box/* default */.Z, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Menu/* default */.Z, {
            id: "menu-appbar",
            anchorEl: anchorEl,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right'
            },
            keepMounted: true,
            transformOrigin: {
              vertical: 'top',
              horizontal: 'right'
            },
            open: open,
            onClose: handleClose
          })
        })]
      })
    })
  });
}
// EXTERNAL MODULE: ./components/Navigation/SideDrawer/SideDrawer.module.css
var SideDrawer_module = __webpack_require__(7390);
var SideDrawer_module_default = /*#__PURE__*/__webpack_require__.n(SideDrawer_module);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Drawer/Drawer.js + 2 modules
var Drawer = __webpack_require__(1958);
;// CONCATENATED MODULE: ./components/Navigation/SideDrawer/SideDrawer.js
 // import Logo from '../../Logo/Logo';


 // import Backdrop from '../../UI/Backdrop/Backdrop';
// import Aux from '../../../hoc/ReactAux/ReactAux';
// import poomLogoLabel from '../../../assets/poom.jpg';

 // import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';



const sideDrawer = props => {
  let attachedClasses = [(SideDrawer_module_default()).SideDrawer, (SideDrawer_module_default()).Close];

  if (props.open) {
    attachedClasses = [(SideDrawer_module_default()).SideDrawer, (SideDrawer_module_default()).Open];
  }

  return /*#__PURE__*/jsx_runtime_.jsx(Drawer/* default */.ZP // anchor={anchor}
  , {
    color: "inherit",
    open: props.open,
    onClose: props.closed,
    onClick: props.closed,
    children: /*#__PURE__*/jsx_runtime_.jsx(NavigationItems, {
      isAuthenticated: props.isAuth,
      onClick: props.closed
    })
  });
};

/* harmony default export */ const SideDrawer = (sideDrawer);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
// EXTERNAL MODULE: ./components/Navigation/Footer/Footer.module.css
var Footer_module = __webpack_require__(6378);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
// EXTERNAL MODULE: ./components/Navigation/Footer/FooterSocial/FooterSocial.module.css
var FooterSocial_module = __webpack_require__(804);
var FooterSocial_module_default = /*#__PURE__*/__webpack_require__.n(FooterSocial_module);
;// CONCATENATED MODULE: external "@material-ui/icons/Facebook"
const Facebook_namespaceObject = require("@material-ui/icons/Facebook");
var Facebook_default = /*#__PURE__*/__webpack_require__.n(Facebook_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Instagram"
const Instagram_namespaceObject = require("@material-ui/icons/Instagram");
var Instagram_default = /*#__PURE__*/__webpack_require__.n(Instagram_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/GitHub"
const GitHub_namespaceObject = require("@material-ui/icons/GitHub");
var GitHub_default = /*#__PURE__*/__webpack_require__.n(GitHub_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Email"
const Email_namespaceObject = require("@material-ui/icons/Email");
var Email_default = /*#__PURE__*/__webpack_require__.n(Email_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/LinkedIn"
const LinkedIn_namespaceObject = require("@material-ui/icons/LinkedIn");
var LinkedIn_default = /*#__PURE__*/__webpack_require__.n(LinkedIn_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Phone"
const Phone_namespaceObject = require("@material-ui/icons/Phone");
;// CONCATENATED MODULE: ./components/Navigation/Footer/FooterSocial/FooterSocial.js









const style = {
  color: '#ffd883',
  width: 40,
  height: 40
};
const socialFooterData = {
  data1: {
    alt: 'githubLogo',
    link: 'https://github.com/poom-sci',
    icon: /*#__PURE__*/jsx_runtime_.jsx((GitHub_default()), {
      style: style
    })
  },
  data2: {
    alt: 'facebookLogo',
    link: 'https://www.facebook.com/poom.suchaoin/',
    icon: /*#__PURE__*/jsx_runtime_.jsx((Facebook_default()), {
      style: style
    })
  },
  data3: {
    alt: 'instagramLogo',
    link: 'https://www.instagram.com/poom.sci/',
    icon: /*#__PURE__*/jsx_runtime_.jsx((Instagram_default()), {
      style: style
    })
  },
  data4: {
    alt: 'mailLogo',
    link: 'mailto:poom.suchaoin@gmail.com',
    icon: /*#__PURE__*/jsx_runtime_.jsx((Email_default()), {
      style: style
    })
  },
  data5: {
    alt: 'linkinedLogo',
    link: 'https://www.linkedin.com/in/poom-sci/',
    icon: /*#__PURE__*/jsx_runtime_.jsx((LinkedIn_default()), {
      style: style
    })
  }
};
const Icons = Object.keys(socialFooterData).map(data => {
  return /*#__PURE__*/jsx_runtime_.jsx("a", {
    href: socialFooterData[data].link,
    children: socialFooterData[data].icon
  }, data);
});

const footerSocial = props => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: (FooterSocial_module_default()).FooterSocial,
  children: Icons
});

/* harmony default export */ const FooterSocial = (footerSocial);
;// CONCATENATED MODULE: ./components/Navigation/Footer/Footer.js









const Footer_useStyles = (0,makeStyles/* default */.Z)(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

class Footer extends external_react_.Component {
  // state = {
  //   columnData1: {
  //     data: {
  //       data1: {
  //         // link: "/",
  //         text: "ที่อยู่",
  //       },
  //       data2: {
  //         // link: "/",
  //         text:
  //           "220/1 หมู่ 4 ถ.แจ้งวัฒนะ ต.ปากเกร็ด อ.ปากเกร็ด จ.นนทบุรี 11120",
  //       },
  //     },
  //   },
  //   columnData2: {
  //     data: {
  //       data1: {
  //         // link: "/",
  //         text: "ติดต่อ",
  //       },
  //       data2: {
  //         // link: "/",
  //         text: "081-343-4433 (คุณวิชัย)",
  //       },
  //     },
  //   },
  //   columnData3: {
  //     data: {
  //       data1: {
  //         // link: "/",
  //         text: "เวลาเปิด-ปิด",
  //       },
  //       data2: {
  //         // link: "/",
  //         text: "ทุกวัน 8:00 - 16:00 ",
  //       },
  //     },
  //   },
  // };
  render() {
    // const classes = useStyles();
    return /*#__PURE__*/jsx_runtime_.jsx("footer", {
      className: (Footer_module_default()).Footer,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
        container: true,
        spacing: 1,
        className: (Footer_module_default()).Grid,
        alignItems: "center",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
          container: true // align="center"
          ,
          direction: "column" // alignItems="center"
          ,
          justifyContent: "center",
          children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
            variant: "h6",
            component: "h5",
            className: (Footer_module_default()).FooterText,
            children: "Contacts"
          }), /*#__PURE__*/jsx_runtime_.jsx(FooterSocial, {}, "FooterSocial")]
        }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          style: {
            margin: '30px 0 0 0'
          },
          item: true,
          xs: 12,
          align: "center" // alignItems="center"
          // justifyContent="center"
          ,
          children: /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
            className: (Footer_module_default()).FooterText,
            children: "COPYRIGHT \xA9 2020. ALL RIGHTS RESERVED."
          })
        })]
      })
    });
  }

}

/* harmony default export */ const Footer_Footer = (Footer);
;// CONCATENATED MODULE: ./hoc/Layout/Layout.js
function Layout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // const FacebookMessenger = dynamic(() => import('../../components/FacebookPlugin/FacebookMessenger'));




class Layout extends external_react_.Component {
  constructor(...args) {
    super(...args);

    Layout_defineProperty(this, "state", {
      showSideDrawer: false
    });

    Layout_defineProperty(this, "sideDrawerClosedHandler", () => {
      this.setState({
        showSideDrawer: false
      });
    });

    Layout_defineProperty(this, "sideDrawerToggleHandler", () => {
      this.setState(prevState => {
        return {
          showSideDrawer: !prevState.showSideDrawer
        };
      });
    });
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(AppToolbar, {
        isAuth: false,
        drawerToggleClicked: this.sideDrawerToggleHandler
      }), /*#__PURE__*/jsx_runtime_.jsx(SideDrawer, {
        open: this.state.showSideDrawer,
        isAuth: false,
        closed: this.sideDrawerClosedHandler
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Layout_module_default()).Content,
        children: this.props.children
      }), /*#__PURE__*/jsx_runtime_.jsx(Footer_Footer, {})]
    });
  }

}

const mapStateToProps = state => {
  return {// isAuthenticated: state.auth.token !== null
  };
};

/* harmony default export */ const Layout_Layout = ((0,external_react_redux_namespaceObject.connect)(mapStateToProps)(Layout));
;// CONCATENATED MODULE: ./store/actions/actionTypes.js
// export const ADD_INGREDIENT = "ADD_INGREDIENT";
// export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
// export const SET_INGREDIENTS = "SET_INGREDIENTS";
// export const FETCH_INGREDIENTS_FAILED = "FETCH_INGREDIENTS_FAILED";
const PURCHASE_BURGER_START = 'PURCHASE_BURGER_START';
const PURCHASE_BURGER_SUCCESS = 'PURCHASE_BURGER_SUCCESS';
const PURCHASE_BURGER_FAIL = 'PURCHASE_BURGER_FAIL';
const PURCHASE_INIT = 'PURCHASE_INIT';
const FETCH_ORDERS_START = 'FETCH_ORDERS_START';
const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
const FETCH_ORDERS_FAIL = 'FETCH_ORDERS_FAIL';
const AUTH_START = 'AUTH_START';
const AUTH_SUCCESS = 'AUTH_SUCCESS';
const AUTH_FAIL = 'AUTH_FAIL';
const AUTH_LOGOUT = 'AUTH_LOGOUT';
const SET_AUTH_ERROR = 'SET_AUTH_ERROR';
const SET_AUTH_REDIRECT_PATH = 'SET_AUTH_REDIRECT_PATH';
;// CONCATENATED MODULE: ./shared/utility.js
function utility_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function utility_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { utility_ownKeys(Object(source), true).forEach(function (key) { utility_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { utility_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function utility_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const updateObject = (oldObject, updatedProperties) => {
  return utility_objectSpread(utility_objectSpread({}, oldObject), updatedProperties);
};
const checkValidity = (value, rules) => {
  let isValid = true;

  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }

  return isValid;
};
;// CONCATENATED MODULE: ./store/reducers/auth.js


const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: '/'
};

const auth_authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const auth_authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false
  });
};

const auth_authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null,
    userId: null
  });
};

const authSetError = (state, action) => {
  return updateObject(state, {
    error: null
  });
};

const auth_setAuthRedirectPath = (state, action) => {
  return updateObject(state, {
    authRedirectPath: action.path
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return auth_authStart(state, action);

    case AUTH_SUCCESS:
      return auth_authSuccess(state, action);

    case AUTH_FAIL:
      return auth_authFail(state, action);

    case AUTH_LOGOUT:
      return authLogout(state, action);

    case SET_AUTH_ERROR:
      return authSetError(state, action);

    case SET_AUTH_REDIRECT_PATH:
      return auth_setAuthRedirectPath(state, action);

    default:
      return state;
  }
};

/* harmony default export */ const reducers_auth = (reducer);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "react-gtm-module"
const external_react_gtm_module_namespaceObject = require("react-gtm-module");
// EXTERNAL MODULE: ./components/UI/Spinner/Spinner.js
var Spinner = __webpack_require__(4042);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
;// CONCATENATED MODULE: ./pages/_app.js
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












 // import firebaseAnalytic from '../container/Function/FirebaseAnalytic';







const composeEnhancers =  false || external_redux_namespaceObject.compose;
const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
  // burgerBuilder: burgerBuilderReducer,
  // order: orderReducer,
  auth: reducers_auth
});
const store = (0,external_redux_namespaceObject.createStore)(rootReducer, composeEnhancers((0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default())))); // const theme = createTheme({
//   typography: {
//     fontFamily: ['Quicksand', 'sans-serif'].join(','),
//   },
// });
// const cache = createCache({
//   key: 'css',
//   prepend: true,
// });

function MyApp({
  Component,
  pageProps
}) {
  const router = (0,router_.useRouter)(); // const [pageLoading, setPageLoading] = useState(false);
  // useEffect(() => {
  //   const handleStart = () => {
  //     console.log('start');
  //     setPageLoading(true);
  //   };
  //   const handleComplete = () => {
  //     setPageLoading(false);
  //   };
  //   TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID });
  //   router.events.on('routeChangeStart', handleStart);
  //   router.events.on('routeChangeComplete', handleComplete);
  //   router.events.on('routeChangeError', handleComplete);
  //   return () => {
  //     router.events.off('routeChangeStart', handleStart);
  //     router.events.off('routeChangeComplete', handleComplete);
  //     router.events.off('routeChangeError', handleComplete);
  //   };
  // }, []);
  // useEffect(() => {
  //   TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID });
  // });

  return /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_namespaceObject.Provider, {
    store: store,
    children: /*#__PURE__*/jsx_runtime_.jsx(styles_.StylesProvider, {
      injectFirst: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).StrictMode, {
        children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
          children: /*#__PURE__*/jsx_runtime_.jsx("title", {
            children: "Poom Suchao-in"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Layout_Layout, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
        })]
      })
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 6378:
/***/ ((module) => {

// Exports
module.exports = {
	"Footer": "Footer_Footer__2DWA8",
	"Grid": "Footer_Grid__2CRb3"
};


/***/ }),

/***/ 804:
/***/ ((module) => {

// Exports
module.exports = {
	"FooterSocial": "FooterSocial_FooterSocial__2ogCs"
};


/***/ }),

/***/ 6772:
/***/ ((module) => {

// Exports
module.exports = {
	"NavigationItem": "NavigationItem_NavigationItem__1lcrf",
	"active": "NavigationItem_active__ajPnB"
};


/***/ }),

/***/ 5032:
/***/ ((module) => {

// Exports
module.exports = {
	"NavigationItems": "NavigationItems_NavigationItems__1VQ9A"
};


/***/ }),

/***/ 7390:
/***/ ((module) => {

// Exports
module.exports = {
	"SideDrawer": "SideDrawer_SideDrawer__YRuzV",
	"Open": "SideDrawer_Open__1CsSZ",
	"Close": "SideDrawer_Close__GKjM3",
	"Logo": "SideDrawer_Logo__qTLVr"
};


/***/ }),

/***/ 9049:
/***/ ((module) => {

// Exports
module.exports = {
	"Content": "Layout_Content__3doy1"
};


/***/ }),

/***/ 4047:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/styles");

/***/ }),

/***/ 9137:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/system");

/***/ }),

/***/ 2958:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/utils");

/***/ }),

/***/ 2376:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 3536:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 2307:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 4229:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2268:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 3857:
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ 3810:
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [811,318,895,664,749,711,521,202], () => (__webpack_exec__(878)));
module.exports = __webpack_exports__;

})();