"use strict"

// // -- dark-theme -------------------------------------
const toggleThemeBox = document.querySelectorAll('.toggle-theme-box');
const html = document.querySelector('.html');

toggleThemeBox.forEach(function (item) {
   item.addEventListener('click', () => {
      if (html.classList.contains('light')) {
         html.classList.remove('light')
         html.classList.add('dark')
         localStorage.theme = 'dark'
      } else {
         html.classList.remove('dark')
         html.classList.add('light')
         localStorage.theme = 'light'
      }
   }) 
   
   if (localStorage.theme == 'light') {
      document.body.classList.add('light')
   } 
})
// // -- /dark-theme -------------------------------------


// // -- dark-theme -------------------------------------
const toggleThemeBox2 = document.querySelectorAll('.toggle-theme-wrapper');
const html2 = document.querySelector('.html');
toggleThemeBox2.forEach(function (item) {
   item.addEventListener('click', () => {
      if (html2.classList.contains('light')) {
         html2.classList.remove('light')
         html2.classList.add('dark')
         localStorage.theme = 'dark'
      } else {
         html2.classList.remove('dark')
         html2.classList.add('light')
         localStorage.theme = 'light'
      }
   }) 
   
   if (localStorage.theme == 'light') {
      document.body.classList.add('light')
   } 
})
// // -- /dark-theme -------------------------------------



const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let editArrows = document.querySelectorAll('.edit__link');
	
   if (editArrows.length > 0) {
		for (let index = 0; index < editArrows.length; index++) {
			const editArrow = editArrows[index];
			editArrow.addEventListener("click", function (e) {
				editArrow.parentElement.classList.toggle('_active');
			});
		}
	}

} else {
	document.body.classList.add('_pc');
}


// -- burger ----------------------------------------------
const asideMenuBurger = document.querySelector('.header-burger');
// const controlsWrapper = document.querySelector('.controls-wrapper');

if (asideMenuBurger) {
	asideMenuBurger.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		// asideMenuBurger.classList.toggle('_active');
		// controlsWrapper.classList.toggle('open');
	});
}
// -- /burger ------------------------------------------------

// -- languages ----------------------------------------------
const langBox = document.querySelector('.lang__box');
const langItem = document.querySelectorAll('.lang__item');
const header = document.querySelector('.header');


if (langBox) {
   langBox.addEventListener('click', function() { 
      this.classList.toggle('lang-open');
      header.classList.toggle('lang-open');
   })
}

if (langItem.length > 0) {
   langItem.forEach(item => {
      item.addEventListener("click", onItemClick());
   });
}

document.addEventListener('click', e => {
   let target = e.target;
   let its_menu = target == langBox || langBox.contains(target);
   let its_hamburger = target == langItem;
   let menu_is_active = langBox.classList.contains('lang-open');
   let header_is_active = langBox.classList.contains('lang-open');
   
   if (!its_menu && !its_hamburger && menu_is_active && header_is_active) {
      onItemClick();
   }
})

function onItemClick() {
   if (langBox.classList.contains('lang-open')) {
      langBox.classList.toggle('lang-open');
      header.classList.toggle('lang-open');
   }
}
// -- /languages ------------------------------------------------------

// -- search-list ----------------------------------------------
const searchListBtn = document.querySelector('.search__btn');
const searchListBody = document.querySelector('.search-list__body');
const searchListItem = document.querySelectorAll('.search-list__item');
const header2 = document.querySelector('.header');

if (searchListBtn) {
   searchListBtn.addEventListener('click', function() { 
      searchListBody.classList.toggle('search-open');
      header.classList.toggle('search-open');
   })
}

if (searchListItem.length > 0) {
   searchListItem.forEach(item => {
      item.addEventListener("click", onItemClick2());
   });
}

document.addEventListener('click', e => {
   let target = e.target;
   let its_menu = target == searchListBtn || searchListBtn.contains(target);
   let its_hamburger = target == searchListItem;
   let menu_is_active = searchListBody.classList.contains('search-open');
   let header_is_active = searchListBody.classList.contains('search-open');
   
   if (!its_menu && !its_hamburger && menu_is_active && header_is_active) {
      onItemClick2();
   }
})

function onItemClick2() {
   if (searchListBody.classList.contains('search-open')) {
      searchListBody.classList.toggle('search-open');
      header.classList.toggle('search-open');
   }
}
// -- /search-list ----------------------------------------------

// -- search-list-mobile ----------------------------------------------
const searchMobileBtn = document.querySelector('.mobile__search-btn');
const searchMobileBody = document.querySelector('.header-search__wrapper');
const searchLinkItem = document.querySelectorAll('.search__mobile-link');

if (searchMobileBtn) {
   searchMobileBtn.addEventListener('click', function() { 
      searchMobileBody.classList.toggle('search-mobile-open');
      this.classList.toggle('search-mobile-open2');
   })
}

if (searchLinkItem.length > 0) {
   searchLinkItem.forEach(item => {
      item.addEventListener("click", onItemClick3());
   });
}

document.addEventListener('click', e => {
   let target = e.target;
   let searchMobileInput = document.querySelector('.search__input') !== e.target;
   let its_menu = target == searchMobileBtn || searchMobileBtn.contains(target) ;
   let its_hamburger = target == searchLinkItem;
   let menu_is_active = searchMobileBody.classList.contains('search-mobile-open');
   let header_is_active = searchMobileBody.classList.contains('search-mobile-open');
   
   if (!its_menu && !its_hamburger && menu_is_active && header_is_active && searchMobileInput) {
      onItemClick3();
   }
})

function onItemClick3() {
   if (searchMobileBody.classList.contains('search-mobile-open')) {
      searchMobileBody.classList.toggle('search-mobile-open');
      searchMobileBtn.classList.toggle('search-mobile-open2');
   }
}
// -- /search-list-mobile ----------------------------------------------

// -- controls-body-1 ----------------------------------------------
const controlsBtn1 = document.querySelector('.controls-btn-item--1');
const controlsBody1 = document.querySelector('.controls-body-1');
const controlsLinkItem = document.querySelectorAll('.controls-body-1 a');

if (controlsBtn1) {
   controlsBtn1.addEventListener('click', function() { 
      controlsBody1.classList.toggle('controls-body--open1');
      this.classList.toggle('controls-btn--open1');
   })
}

if (controlsLinkItem.length > 0) {
   controlsLinkItem.forEach(item => {
      item.addEventListener("click", onItemClick4());
   });
}

document.addEventListener('click', e => {
   let target = e.target;
   let its_menu = target == controlsBtn1 || controlsBtn1.contains(target);
   let its_hamburger = target == controlsLinkItem;
   let menu_is_active = controlsBody1.classList.contains('controls-body--open1');
   let header_is_active = controlsBody1.classList.contains('controls-body--open1');
   
   if (!its_menu && !its_hamburger && menu_is_active && header_is_active) {
      onItemClick4();
   }
})

function onItemClick4() {
   if (controlsBody1.classList.contains('controls-body--open1')) {
      controlsBody1.classList.toggle('controls-body--open1');
      controlsBtn1.classList.toggle('controls-btn--open1');
   }
}
// -- /controls-body-1 ----------------------------------------------

// -- controls-body-2 ----------------------------------------------
const controlsBtn2 = document.querySelector('.controls-btn-item--2');
const controlsBody2 = document.querySelector('.controls-body-2');
const controlsLinkItem2 = document.querySelectorAll('.controls-body-2 a');

if (controlsBtn2) {
   controlsBtn2.addEventListener('click', function() { 
      controlsBody2.classList.toggle('controls-body--open2');
      this.classList.toggle('controls-btn--open2');
   })
}

if (controlsLinkItem2.length > 0) {
   controlsLinkItem2.forEach(item => {
      item.addEventListener("click", onItemClick5());
   });
}

document.addEventListener('click', e => {
   let target = e.target;
   let its_menu = target == controlsBtn2 || controlsBtn2.contains(target);
   let its_hamburger = target == controlsLinkItem2;
   let menu_is_active = controlsBody2.classList.contains('controls-body--open2');
   let header_is_active = controlsBody2.classList.contains('controls-body--open2');
   
   if (!its_menu && !its_hamburger && menu_is_active && header_is_active) {
      onItemClick5();
   }
})

function onItemClick5() {
   if (controlsBody2.classList.contains('controls-body--open2')) {
      controlsBody2.classList.toggle('controls-body--open2');
      controlsBtn2.classList.toggle('controls-btn--open2');
   }
}
// -- /controls-body-2 ----------------------------------------------


// -- controls-body-3 ----------------------------------------------
const controlsBtn3 = document.querySelector('.controls-btn-item--3');
const controlsBody3 = document.querySelector('.controls-body-3');
const controlsLinkItem3 = document.querySelectorAll('.controls-body-3 a');

if (controlsBtn3) {
   controlsBtn3.addEventListener('click', function() { 
      controlsBody3.classList.toggle('controls-body--open3');
      this.classList.toggle('controls-btn--open3');
   })
}

if (controlsLinkItem3.length > 0) {
   controlsLinkItem3.forEach(item => {
      item.addEventListener("click", onItemClick6());
   });
}

document.addEventListener('click', e => {
   let target = e.target;
   let its_menu = target == controlsBtn3 || controlsBtn3.contains(target);
   let its_hamburger = target == controlsLinkItem3;
   let menu_is_active = controlsBody3.classList.contains('controls-body--open3');
   let header_is_active = controlsBody3.classList.contains('controls-body--open3');
   
   if (!its_menu && !its_hamburger && menu_is_active && header_is_active) {
      onItemClick6();
   }
})

function onItemClick6() {
   if (controlsBody3.classList.contains('controls-body--open3')) {
      controlsBody3.classList.toggle('controls-body--open3');
      controlsBtn3.classList.toggle('controls-btn--open3');
   }
}
// -- /controls-body-3 ----------------------------------------------


// -- controls-body-4 ----------------------------------------------
const controlsBtn4 = document.querySelector('.controls-btn-item--4');
const controlsBody4 = document.querySelector('.controls-body-4');
const controlsLinkItem4 = document.querySelectorAll('.controls-body-4 a');

if (controlsBtn4) {
   controlsBtn4.addEventListener('click', function() { 
      controlsBody4.classList.toggle('controls-body--open4');
      this.classList.toggle('controls-btn--open4');
   })
}

if (controlsLinkItem4.length > 0) {
   controlsLinkItem4.forEach(item => {
      item.addEventListener("click", onItemClick7());
   });
}

document.addEventListener('click', e => {
   let target = e.target;
   let its_menu = target == controlsBtn4 || controlsBtn4.contains(target);
   let its_hamburger = target == controlsLinkItem4;
   let menu_is_active = controlsBody4.classList.contains('controls-body--open4');
   let header_is_active = controlsBody4.classList.contains('controls-body--open4');
   
   if (!its_menu && !its_hamburger && menu_is_active && header_is_active) {
      onItemClick7();
   }
})

function onItemClick7() {
   if (controlsBody4.classList.contains('controls-body--open4')) {
      controlsBody4.classList.toggle('controls-body--open4');
      controlsBtn4.classList.toggle('controls-btn--open4');
   }
}
// -- /controls-body-4 ----------------------------------------------

// -- controls-body-5 ----------------------------------------------
const controlsBtn5 = document.querySelector('.controls-btn-item--5');
const controlsBody5 = document.querySelector('.controls-body-5');
const controlsLinkItem5 = document.querySelectorAll('.controls-body-5 a');

if (controlsBtn5) {
   controlsBtn5.addEventListener('click', function() { 
      controlsBody5.classList.toggle('controls-body--open5');
      this.classList.toggle('controls-btn--open5');
   })
}

if (controlsLinkItem5.length > 0) {
   controlsLinkItem5.forEach(item => {
      item.addEventListener("click", onItemClick8());
   });
}

document.addEventListener('click', e => {
   let target = e.target;
   let its_menu = target == controlsBtn5 || controlsBtn5.contains(target);
   let its_hamburger = target == controlsLinkItem5;
   let menu_is_active = controlsBody5.classList.contains('controls-body--open5');
   let header_is_active = controlsBody5.classList.contains('controls-body--open5');
   
   if (!its_menu && !its_hamburger && menu_is_active && header_is_active) {
      onItemClick8();
   }
})

function onItemClick8() {
   if (controlsBody5.classList.contains('controls-body--open5')) {
      controlsBody5.classList.toggle('controls-body--open5');
      controlsBtn5.classList.toggle('controls-btn--open5');
   }
}
// -- /controls-body-5 ----------------------------------------------



// -- burger-menu ----------------------------------------------
const headerBurger2 = document.querySelector('.header-burger');
const burgerMenu = document.querySelector('.controls-wrapper');
const burgerMobileItem = document.querySelectorAll('.burger__mobile-item');

if (headerBurger2) {
   headerBurger2.addEventListener('click', function() { 
      burgerMenu.classList.toggle('open-burger-body');
      this.classList.toggle('_active');
   })
}

if (burgerMobileItem.length > 0) {
   burgerMobileItem.forEach(item => {
      item.addEventListener("click", onItemClick8());
   });
}

document.addEventListener('click', e => {
   let target = e.target;
   let controlsBtnItem1 = document.querySelector('.controls-btn__item1') !== target;
   let controlsBtnItem2 = document.querySelector('.controls-btn__item2') !== target;
   let controlsBtnItem3 = document.querySelector('.controls-btn__item3') !== target;
   let controlsBtnItem4 = document.querySelector('.controls-btn__item4') !== target;
   let controlsBtnItem5 = document.querySelector('.controls-btn__item5') !== target;
   let controlsBtnItem6 = document.querySelector('.toggle-theme-wrapper') !== target;
   let its_menu = target == headerBurger2 || headerBurger2.contains(target);
   let its_hamburger = target == burgerMobileItem;
   let menu_is_active = burgerMenu.classList.contains('open-burger-body');
   let header_is_active = burgerMenu.classList.contains('open-burger-body');
   
   if (!its_menu && !its_hamburger && menu_is_active && header_is_active && controlsBtnItem1 && controlsBtnItem2 && controlsBtnItem3 && controlsBtnItem4 && controlsBtnItem5 && controlsBtnItem6) {
      onItemClickBurger();
   }

})

function onItemClickBurger() {
   if (burgerMenu.classList.contains('open-burger-body')) {
      burgerMenu.classList.toggle('open-burger-body');
      headerBurger2.classList.toggle('_active');
   }
}
// -- /burger-menu ----------------------------------------------

// -- like-btn -------------------------------------------------------------
const likeBtn = document.querySelectorAll('.heart-label');

let likeBtnArray = [];
likeBtn.forEach((el) => {
  likeBtnArray.push(el);
})

for (let i = 0; i < likeBtnArray.length; i++) {
  if (likeBtn) {
    likeBtnArray[i].addEventListener("click", function (e) {
      e.preventDefault();
      likeBtnArray[i].classList.toggle('liked');
    });
  }
}
// -- /like-btn -------------------------------------------------------------

// -- time-btn -------------------------------------------------------------
const timeBtn = document.querySelectorAll('.time-label');

let timeBtnArray = [];
timeBtn.forEach((el) => {
   timeBtnArray.push(el);
})

for (let i = 0; i < timeBtnArray.length; i++) {
  if (timeBtn) {
   timeBtnArray[i].addEventListener("click", function (e) {
      e.preventDefault();
      timeBtnArray[i].classList.toggle('active');
    });
  }
}
// -- /time-btn -------------------------------------------------------------

// -- video -------------------------------------------------------------
const videoWrapper = document.querySelector('.video-wrapper');
const videoBtn = document.querySelector('.video-btn');
const video = document.querySelector('.video');

videoWrapper.addEventListener('click', function() {
   videoBtn.classList.toggle('active');
   video.toggleAttribute('controls', 'disabled');
})
// -- /video -------------------------------------------------------------

// -- video-cotrols -------------------------------------------------------------
const videoCotrolsBtn = document.querySelector('.video-cotrols__btn');
const videoCotrolsBody = document.querySelector('.video-cotrols__body');
const videoBodyItem = document.querySelectorAll('.video-cotrols__body-item');

if (videoCotrolsBtn) {
   videoCotrolsBtn.addEventListener('click', function() { 
      videoCotrolsBody.classList.toggle('active');
      this.classList.toggle('btn-active');
   })
}

if (videoBodyItem.length > 0) {
   videoBodyItem.forEach(item => {
      item.addEventListener("click", onItemClickBtn());
   });
}

document.addEventListener('click', e => {
   let target = e.target;
   let its_menu = target == videoCotrolsBtn || videoCotrolsBtn.contains(target);
   let its_hamburger = target == videoBodyItem;
   let menu_is_active = videoCotrolsBody.classList.contains('active');
   let header_is_active = videoCotrolsBody.classList.contains('active');
   
   if (!its_menu && !its_hamburger && menu_is_active && header_is_active) {
      onItemClickBtn();
   }
})

function onItemClickBtn() {
   if (videoCotrolsBody.classList.contains('active')) {
      videoCotrolsBody.classList.toggle('active');
      videoCotrolsBtn.classList.toggle('btn-active');
   }
}
// -- /video-cotrols -------------------------------------------------------------














// // -- languages mobile burger ----------------------------------------------
// const langBox2 = document.querySelector('.lang__box');
// const langItem2 = document.querySelectorAll('.lang__item');

// if (langBox2) {
//    langBox2.addEventListener('click', function() { 
//       this.classList.toggle('lang-open');
//    })
// }

// if (langItem2.length > 0) {
//    langItem2.forEach(item => {
//       item.addEventListener("click", onItemClickLang());
//    });
// }

// document.addEventListener('click', e => {
//    let target = e.target;
//    let its_menu = target == langBox2 || langBox2.contains(target);
//    let its_hamburger = target == langItem2;
//    let menu_is_active = langBox2.classList.contains('lang-open');
//    let header_is_active = langBox2.classList.contains('lang-open');
   
//    if (!its_menu && !its_hamburger && menu_is_active && header_is_active) {
//       onItemClickLang();
//    }
// })

// function onItemClickLang() {
//    if (langBox2.classList.contains('lang-open')) {
//       langBox2.classList.toggle('lang-open');
//    }
// }
// // -- /languages mobile burger ------------------------------------------------------




// // -- aside-languages ----------------------------------------------
// const asidelangBox = document.querySelector('.aside-lang__box');
// const asidelangItem = document.querySelectorAll('.aside-lang__item');

// if (asidelangBox) {
//    asidelangBox.addEventListener('click', function() { 
//       this.classList.toggle('aside__lang-open')
//    })
// }

// if (asidelangItem.length > 0) {
//    asidelangItem.forEach(item => {
//       item.addEventListener("click", onAsideItemClick());
//    });
// }

// document.addEventListener('click', e => {
//    let target = e.target;
//    let its_menu = target == asidelangBox || asidelangBox.contains(target);
//    let its_hamburger = target == asidelangItem;
//    let menu_is_active = asidelangBox.classList.contains('aside__lang-open');
   
//    if (!its_menu && !its_hamburger && menu_is_active) {
//       onAsideItemClick();
//    }
// })

// function onAsideItemClick() {
//    if (asidelangBox.classList.contains('aside__lang-open')) {
//       asidelangBox.classList.toggle('aside__lang-open');
//    }
// }
// // -- /aside-languages ----------------------------------------------

// // -- user-menu ----------------------------------------------
// const userBox = document.querySelector('.user__box');
// const userMenuItem = document.querySelectorAll('.user-menu__item');
// const userHeader = document.querySelector('.header');

// if (userBox) {
//    userBox.addEventListener('click', function() { 
//       this.classList.toggle('user-open');
//       userHeader.classList.toggle('user-open');
//    })
// }

// if (userMenuItem.length > 0) {
//    userMenuItem.forEach(item => {
//       item.addEventListener("click", onUserItemClick());
//    });
// }

// document.addEventListener('click', e => {
//    let targetUser = e.target;
//    let its_menuUser = targetUser == userBox || userBox.contains(targetUser);
//    let its_hamburgerUser = targetUser == userMenuItem;
//    let menu_is_activeUser = userBox.classList.contains('user-open');
//    let header_is_activeUser = userBox.classList.contains('user-open');
   
//    if (!its_menuUser && !its_hamburgerUser && menu_is_activeUser && header_is_activeUser) {
//       onUserItemClick();
//    }
// })

// function onUserItemClick() {
//    if (userBox.classList.contains('user-open')) {
//       userBox.classList.toggle('user-open');
//       userHeader.classList.toggle('user-open');
//    }
// }
// // -- /user-menu ----------------------------------------------

// // -- notification ----------------------------------------------
// const notifyBtn = document.querySelector('.notification');
// const notifyBox = document.querySelector('.notification-box');
// const notifyClose = document.querySelector('.notification-body__close');
// const notifyBottomClose = document.querySelector('.notification-body__bottom-btn');
// const notifyHeader = document.querySelector('.header');

// if (notifyBtn) {
//    notifyBtn.addEventListener('click', function(e) {
//       notifyBox.classList.toggle('notify-open');
//       notifyHeader.classList.toggle('notify-open');
//    });
   
//    notifyClose.addEventListener('click', function(e) {
//       notifyBox.classList.remove('notify-open');
//       notifyHeader.classList.remove('notify-open');
//    });
   
//    notifyBottomClose.addEventListener('click', function(e) {
//       notifyBox.classList.remove('notify-open');
//       notifyHeader.classList.remove('notify-open');
//    });
// }
// // -- /notification ----------------------------------------------i

// // -- mobile-notification ----------------------------------------------
// const mobileNotifyBtn = document.querySelector('.mobile-notification');
// const mobileNotifyBox = document.querySelector('.mobile-notification-box');
// const mobileNotifyClose = document.querySelector('.mobile-notification-body__close');
// const mobileNotifyBottomClose = document.querySelector('.mobile-notification-body__bottom-btn');
// const mobileNotifyHeader = document.querySelector('.header');

// if (mobileNotifyBtn) {
//    mobileNotifyBtn.addEventListener('click', function(e) {
//       mobileNotifyBox.classList.toggle('notify-open');
//       mobileNotifyHeader.classList.toggle('notify-open');
//    });
   
//    mobileNotifyClose.addEventListener('click', function(e) {
//       mobileNotifyBox.classList.remove('notify-open');
//       mobileNotifyHeader.classList.remove('notify-open');
//    });
   
//    mobileNotifyBottomClose.addEventListener('click', function(e) {
//       mobileNotifyBox.classList.remove('notify-open');
//       mobileNotifyHeader.classList.remove('notify-open');
//    });
// }
// // -- /mobile-notification ----------------------------------------------i


// // -- checkbox-body-toggle ----------------------------------------------
// const filterBtn = document.querySelector('.btn-filter');
// const filterBody = document.querySelector('.filter-body');
// const filterClose = document.querySelector('.filter-body__close');

// if (filterBtn) {
//    filterBtn.addEventListener('click', function(e) {
//       this.classList.toggle('_active');
//       filterBody.classList.toggle('filter-open');
//    });
   
//    filterClose.addEventListener('click', function(e) {
//       filterBody.classList.remove('filter-open');
//       filterBtn.classList.remove('_active');
//    });
// }
// // -- /checkbox-body-toggle ----------------------------------------------

// //  -- mobile show/hide main filters -----------------------------------
// const mainFilterBtn = document.querySelector('.search-mobile__filter');
// // const contentSelects = document.querySelector('.content__selects');
// // const contentFilters = document.querySelector('.content__filters');
// const content = document.querySelector('.content');

// if(mainFilterBtn) {
//    mainFilterBtn.addEventListener('click', function (e) {
//       mainFilterBtn.classList.toggle('show');
//       // contentSelects.classList.toggle('show');
//       // contentSelects.classList.toggle('show');
//       content.classList.toggle('show');
//    })
// }

// //  -- / mobile show/hide main filters-----------------------------------

// // -- aside-show ----------------------------------------------
// const list = document.querySelectorAll('.aside-item');
// const selectShow = document.querySelector('.dropdown__button');
// function activeLink(){
//    list.forEach((item) =>
//    item.classList.remove('active'));
//    this.classList.add('active');
// }
// list.forEach((item) =>
// item.addEventListener('click', activeLink));

// if (selectShow) {
//    selectShow.addEventListener('click', function() {
//       document.querySelector('.aside').classList.remove('_active');
//    });
// }
// // -- /aside-show ----------------------------------------------

// //  -- choose only one checkbox in a group -----------------------------------
// function checkedOnClick(el){

//    // Select all checkboxes by class
//    var checkboxesList = document.getElementsByClassName("filter-body__checkbox");
//    for (var i = 0; i < checkboxesList.length; i++) {
//       checkboxesList.item(i).checked = false; // Uncheck all checkboxes
//    }

//    el.checked = true; // Checked clicked checkbox
// }
// //  -- /choose only one checkbox in a group -----------------------------------

// //  -- choose all checkbox in a group -----------------------------------
// function checkedAllOnClick(el){

//    // Select all checkboxes by class
//    var checkboxesAllList = document.getElementsByClassName("filter-body__checkbox");
//    for (var i = 0; i < checkboxesAllList.length; i++) {
//       checkboxesAllList.item(i).checked = true; 
//    }
// }
// //  -- /choose all checkbox in a group -----------------------------------


// //  -- choose all checkbox in a table group -----------------------------------
// function checkedAllInTable(el){
//    var checkboxesAllList = document.getElementsByClassName("table__input");
//    for (var i = 0; i < checkboxesAllList.length; i++) {
//       checkboxesAllList.item(i).checked = true; 

//       if (el.checked === false) {
//          checkboxesAllList.item(i).checked = false; 
//       } 
     
//       if (checkboxesAllList.item(i).checked = true) {
//          el.checked === true; 
//       }

//       if (el.checked === false) {
//          checkboxesAllList.item(i).checked = false
//       }
//    }
// }
// //  -- /choose all checkbox in a table group -----------------------------------


// //-- popup-1 ------------------------------------------------------------------------------------------------
// let popupBg = document.querySelector('.popup__bg-1'); // Фон попап окна
// let popup = document.querySelector('.popup-1'); // Само окно
// let openPopupButtons = document.querySelectorAll('.open-popup-1'); // Кнопки для показа окна
// let closePopupButton = document.querySelector('.close-popup-1'); // Кнопка для скрытия окна


// openPopupButtons.forEach((button) => { // Перебираем все кнопки
//    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
//       e.preventDefault(); // Предотвращаем дефолтное поведение браузера
//       popupBg.classList.add('active'); // Добавляем класс 'active' для фона
//       popup.classList.add('active'); // И для самого окна
//    })
// });


// closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
//    popupBg.classList.remove('active'); // Убираем активный класс с фона
//    popup.classList.remove('active'); // И с окна
// });


// document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
//    if(e.target === popupBg) { // Если цель клика - фот, то:
//       popupBg.classList.remove('active'); // Убираем активный класс с фона
//       popup.classList.remove('active'); // И с окна
//    }
// });
// //-- /popup-1 ------------------------------------------------------------------------------------------------


























