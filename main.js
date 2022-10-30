/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{ZW:()=>Z});var t=document.querySelector(".profile__edit-button"),n=document.querySelector("#profile-name-input"),r=document.querySelector("#profile-occupation-input"),o=document.querySelector(".profile__add-button"),i=document.querySelector(".profile__edit-icon-container"),u={inputSelector:".popup__input",buttonSelector:".popup__save-button",errorSelector:".popup__input-error",inputErrorClass:"popup__input_type_error"};function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._validationConfig=t,this._formElement=n,this._buttonElement=n.querySelector(t.buttonSelector),this._inputsList=Array.from(n.querySelectorAll("input"))}var t,n;return t=e,(n=[{key:"_checkIsInputValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_showInputError",value:function(e){this._formElement.querySelector("#".concat(e.id,"-error")).textContent=e.validationMessage,e.classList.add(this._validationConfig.inputErrorClass)}},{key:"_hideInputError",value:function(e){this._formElement.querySelector("#".concat(e.id,"-error")).textContent="",e.classList.remove(this._validationConfig.inputErrorClass)}},{key:"_setEventListeners",value:function(){var e=this;this._inputsList.forEach((function(t){t.addEventListener("input",(function(t){e._checkIsInputValid(t.currentTarget),e._toggleSubmitButton()}))}))}},{key:"_toggleSubmitButton",value:function(){this._hasInvalidInput()?this._buttonElement.disabled=!0:this._buttonElement.disabled=!1}},{key:"_hasInvalidInput",value:function(){return this._inputsList.some((function(e){return!e.validity.valid}))}},{key:"enableValidation",value:function(){this._setEventListeners(),this._toggleSubmitButton()}},{key:"resetValidation",value:function(){var e=this;this._toggleSubmitButton(),this._inputsList.forEach((function(t){e._hideInputError(t)}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"appendItem",value:function(e){this._container.append(e)}},{key:"prependItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._element=document.querySelector(t),this._closeButton=this._element.querySelector(".popup__close-button"),this._handleEscButtonBound=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._element.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscButtonBound)}},{key:"close",value:function(){this._element.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscButtonBound)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){e.close()})),this._element.addEventListener("click",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function _(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function u(e,t){var n,r=t.handleSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleSubmitForm=r,n.formElement=n._element.querySelector("form"),n._inputsList=Array.from(n.formElement.querySelectorAll("input")),n._submitButtonElement=n._element.querySelector(".popup__save-button"),n}return t=u,(n=[{key:"_getInputsValues",value:function(){var e={};return this._inputsList.forEach((function(t){e[t.name]=t.value})),e}},{key:"showRendering",value:function(){this._submitButtonElement.textContent="Сохранение..."}},{key:"changeSubmitButtonText",value:function(e){this._submitButtonElement.textContent=e}},{key:"setEventListeners",value:function(){var e=this;y(b(u.prototype),"setEventListeners",this).call(this),this.formElement.addEventListener("submit",(function(t){t.preventDefault();var n=e._getInputsValues();e._handleSubmitForm(n)}))}},{key:"close",value:function(){y(b(u.prototype),"close",this).call(this),this.formElement.reset()}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(p);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=S(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function S(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},L(e,t)}function O(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._element.querySelector(".popup__image"),t._subtitle=t._element.querySelector(".popup__subtitle"),t}return t=u,(n=[{key:"open",value:function(e,t){this._image.src=e,this._image.alt=t,this._subtitle.textContent=t,k(j(u.prototype),"open",this).call(this)}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(p);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}function R(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return I(e)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function u(e,t){var n,r=t.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleSubmit=r,n._formElement=n._element.querySelector("form"),n._handleSubmitButtonBound=n._handleSubmitButton.bind(I(n)),n}return t=u,(n=[{key:"setCardData",value:function(e,t){this._cardId=e,this._cardElement=t}},{key:"_handleSubmitButton",value:function(e){e.preventDefault(),this._handleSubmit(this._cardId,this._cardElement)}},{key:"addSubmitListener",value:function(){var e=this;this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._cardId,e._cardElement)}),{once:!0})}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(p);function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t,n,r){var o=t.name,i=t.link,u=t.likes,a=t._id,c=t.owner,l=r.handleCardClick,s=r.putLikeRequest,f=r.deleteLikeRequest,p=r.handleDeleteButton;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=o,this._link=i,this._likes=u,this._id=a,this._owner=c,this._templateSelector=n,this._handleCardClick=l,this._putLikeRequest=s,this._deleteLikeRequest=f,this._handleDeleteButton=p}var t,n;return t=e,(n=[{key:"_getElement",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elements__item").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getElement(),this._elementImage=this._element.querySelector(".elements__image"),this._buttonLike=this._element.querySelector(".elements__like-button"),this._buttonDelete,this._isLiked()&&this._buttonLike.classList.add("elements__like-button_active"),this._likesCounter=this._element.querySelector(".elements__like-counter"),this._likesCounter.textContent=this._likes.length,this._elementImage.src=this._link,this._elementImage.alt=this._name,this._element.querySelector(".elements__title").textContent=this._name,this._buttonDelete=this._element.querySelector(".elements__delete-button"),Z._id!==this._owner._id&&this._buttonDelete.classList.add("elements__delete-button_hidden"),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._buttonLike.addEventListener("click",(function(){e._handleLikeButton()})),this._buttonDelete.addEventListener("click",(function(){e._handleDeleteButton(e._id)})),this._elementImage.addEventListener("click",(function(){e._handleCardClick()}))}},{key:"_isLiked",value:function(){return this._likes.some((function(e){return e._id===Z._id}))}},{key:"setLike",value:function(e){this._likes=e.likes,this._likesCounter.textContent=e.likes.length,this._buttonLike.classList.toggle("elements__like-button_active")}},{key:"_handleLikeButton",value:function(){var e="cards/".concat(this._id,"/likes");this._isLiked()?this._deleteLikeRequest(e):this._putLikeRequest(e)}},{key:"removeCardElement",value:function(){this._element.remove(),this._element=null}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(t){var n=t.userNameSelector,r=t.userOccupationSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._occupationElement=document.querySelector(r),this._avatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,occupation:this._occupationElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._nameElement.textContent=t,this._occupationElement.textContent=n}},{key:"setUserAvatar",value:function(e){var t=e.avatar;this._avatarElement.src=t}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function G(){G=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",u=r.toStringTag||"@@toStringTag";function a(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{a({},"")}catch(e){a=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),u=new k(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var u=n.delegate;if(u){var a=g(u,n);if(a){if(a===s)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=l(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,u),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var s={};function f(){}function p(){}function h(){}var d={};a(d,o,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(S([])));m&&m!==t&&n.call(m,o)&&(d=m);var v=h.prototype=f.prototype=Object.create(d);function _(e){["next","throw","return"].forEach((function(t){a(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function r(o,i,u,a){var c=l(e[o],e,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==F(f)&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,u,a)}),(function(e){r("throw",e,u,a)})):t.resolve(f).then((function(e){s.value=e,u(s)}),(function(e){return r("throw",e,u,a)}))}a(c.arg)}var o;this._invoke=function(e,n){function i(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(i,i):i()}}function g(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,g(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=h,a(v,"constructor",h),a(h,"constructor",p),p.displayName=a(h,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,a(e,u,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},_(b.prototype),a(b.prototype,i,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var u=new b(c(t,n,r,o),i);return e.isGeneratorFunction(n)?u:u.next().then((function(e){return e.done?e.value:u.next()}))},_(v),a(v,u,"Generator"),a(v,o,(function(){return this})),a(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=S,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return u.type="throw",u.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=e,u.arg=t,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(u)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}function H(e,t,n,r,o,i,u){try{var a=e[i](u),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,o)}var Y=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._init=t.init}var t,n;return t=e,n=[{key:"requestInitialCards",value:function(){return this.sendRequest("cards","GET")}},{key:"requestUserInfo",value:function(){return this.sendRequest("users/me","GET")}},{key:"sendRequest",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this._init.method=t;var r=this._baseUrl+e;return n&&(this._init.body=JSON.stringify(n)),fetch(r,this._init).then((function(e){return e.ok?e.json():Promise.reject("Сервер ответил ошибкой: "+e.status)}))}}],n&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-52/",init:{headers:{authorization:"a1ce3bf4-12b8-45c2-ab0a-cd13960bbeb4","Content-Type":"application/json"}}});function z(e,t){var n=e.name,r=e.link,o=e.likes,i=e._id,u=e.owner,a=new U({name:n,link:r,likes:o,_id:i,owner:u},t,{handleCardClick:function(){oe.open(r,n)},putLikeRequest:function(e){return Y.sendRequest(e,"PUT",Z).then((function(e){a.setLike(e)})).catch((function(e){console.error(e)}))},deleteLikeRequest:function(e){return Y.sendRequest(e,"DELETE",Z).then((function(e){a.setLike(e)})).catch((function(e){console.error(e)}))},handleDeleteButton:function(e){J.setCardData(e,a),J.addSubmitListener(),J.open()}});return a.generateCard()}var J=new T("#popup-delete-card",{handleSubmit:function(e,t){Y.sendRequest("cards/".concat(e),"DELETE").then((function(){t.removeCardElement(),J.close()})).catch((function(e){console.error(e)}))}});J.setEventListeners();var M=new N({userNameSelector:".profile__name",userOccupationSelector:".profile__occupation",userAvatarSelector:".profile__picture"}),W=new s({renderer:function(e){var t=z(e,"#place-card");W.appendItem(t)}},".elements__list"),Z={};Y.requestUserInfo().then((function(e){Z.name=e.name,Z.about=e.about,Z.avatar=e.avatar,Z._id=e._id,M.setUserInfo(Z),M.setUserAvatar(Z)})).then((function(){Y.requestInitialCards().then((function(e){W.renderItems(e)})).catch((function(e){console.error(e)}))})).catch((function(e){console.error(e)}));var K=new g("#popup-edit",{handleSubmitForm:function(e){K.changeSubmitButtonText("Сохранение..."),Y.sendRequest("users/me","PATCH",e).then((function(){M.setUserInfo(e),K.close()})).catch((function(e){console.error(e)})),K.changeSubmitButtonText("Сохранить")}});K.setEventListeners();var Q=new c(u,K.formElement);Q.enableValidation(),t.addEventListener("click",(function(){var e=M.getUserInfo();n.value=e.name,r.value=e.occupation,Q.resetValidation(),K.open()}));var X=new g("#popup-avatar-image",{handleSubmitForm:function(e){X.changeSubmitButtonText("Сохранение..."),Y.sendRequest("users/me/avatar","PATCH",e).then((function(){M.setUserAvatar(e),X.close()})).catch((function(e){console.error(e)})),X.changeSubmitButtonText("Сохранить")}});X.setEventListeners();var $=new c(u,X.formElement);$.enableValidation(),i.addEventListener("click",(function(){X.open(),X.formElement.reset(),$.resetValidation()}));var ee,te,ne=new g("#popup-add-post",{handleSubmitForm:(ee=G().mark((function e(t){var n,r,o;return G().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,ne.changeSubmitButtonText("Сохранение..."),(n={}).name=t.name,n.link=t.link,n.likes=[],n.owner=Z,e.next=9,Y.sendRequest("cards","POST",t);case 9:r=e.sent,n._id=r._id,o=z(n,"#place-card"),W.prependItem(o),ne.close(),ne.changeSubmitButtonText("Создать"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})),te=function(){var e=this,t=arguments;return new Promise((function(n,r){var o=ee.apply(e,t);function i(e){H(o,n,r,i,u,"next",e)}function u(e){H(o,n,r,i,u,"throw",e)}i(void 0)}))},function(e){return te.apply(this,arguments)})});ne.setEventListeners();var re=new c(u,ne.formElement);re.enableValidation(),o.addEventListener("click",(function(){ne.open(),ne.formElement.reset(),re.resetValidation()}));var oe=new P("#popup-image");oe.setEventListeners()})();