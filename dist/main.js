(() => {
  "use strict";
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  var t = (function () {
      function t(e, n) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this._validationConfig = e),
          (this._formElement = n),
          (this._buttonElement = n.querySelector(e.buttonSelector)),
          (this._inputsList = Array.from(n.querySelectorAll("input")));
      }
      var n, r;
      return (
        (n = t),
        (r = [
          {
            key: "_checkIsInputValid",
            value: function (e) {
              e.validity.valid
                ? this._hideInputError(e)
                : this._showInputError(e);
            },
          },
          {
            key: "_showInputError",
            value: function (e) {
              (this._formElement.querySelector(
                "#".concat(e.id, "-error")
              ).textContent = e.validationMessage),
                e.classList.add(this._validationConfig.inputErrorClass);
            },
          },
          {
            key: "_hideInputError",
            value: function (e) {
              (this._formElement.querySelector(
                "#".concat(e.id, "-error")
              ).textContent = ""),
                e.classList.remove(this._validationConfig.inputErrorClass);
            },
          },
          {
            key: "_setEventListeners",
            value: function () {
              var e = this;
              this._inputsList.forEach(function (t) {
                t.addEventListener("input", function (t) {
                  e._checkIsInputValid(t.currentTarget),
                    e._toggleSubmitButton();
                });
              });
            },
          },
          {
            key: "_toggleSubmitButton",
            value: function () {
              this._hasInvalidInput()
                ? (this._buttonElement.disabled = !0)
                : (this._buttonElement.disabled = !1);
            },
          },
          {
            key: "_hasInvalidInput",
            value: function () {
              return this._inputsList.some(function (e) {
                return !e.validity.valid;
              });
            },
          },
          {
            key: "enableValidation",
            value: function () {
              this._setEventListeners(), this._toggleSubmitButton();
            },
          },
          {
            key: "resetValidation",
            value: function () {
              var e = this;
              this._toggleSubmitButton(),
                this._inputsList.forEach(function (t) {
                  e._hideInputError(t);
                });
            },
          },
        ]) && e(n.prototype, r),
        Object.defineProperty(n, "prototype", { writable: !1 }),
        t
      );
    })(),
    n = {
      inputSelector: ".popup__input",
      buttonSelector: ".popup__save-button",
      errorSelector: ".popup__input-error",
      inputErrorClass: "popup__input_type_error",
    };
  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  var o = (function () {
    function e(t, n, r) {
      var o = r.handleCardClick;
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, e),
        (this._name = t.name),
        (this._link = t.link),
        (this._templateSelector = n),
        (this._handleCardClick = o);
    }
    var t, n;
    return (
      (t = e),
      (n = [
        {
          key: "_getElement",
          value: function () {
            return document
              .querySelector(this._templateSelector)
              .content.querySelector(".elements__item")
              .cloneNode(!0);
          },
        },
        {
          key: "generateCard",
          value: function () {
            return (
              (this._element = this._getElement()),
              (this._elementImage =
                this._element.querySelector(".elements__image")),
              (this._buttonLike = this._element.querySelector(
                ".elements__like-button"
              )),
              (this._elementImage.src = this._link),
              (this._elementImage.alt = this._name),
              (this._element.querySelector(".elements__title").textContent =
                this._name),
              this._setEventListeners(),
              this._element
            );
          },
        },
        {
          key: "_setEventListeners",
          value: function () {
            var e = this;
            this._buttonLike.addEventListener("click", function () {
              e._handleLikeButton();
            }),
              this._element
                .querySelector(".elements__delete-button")
                .addEventListener("click", function () {
                  e._handleDeleteButton();
                }),
              this._elementImage.addEventListener("click", function () {
                e._handleCardClick();
              });
          },
        },
        {
          key: "_handleLikeButton",
          value: function () {
            this._buttonLike.classList.toggle("elements__like-button_active");
          },
        },
        {
          key: "_handleDeleteButton",
          value: function () {
            this._element.remove(), (this._element = null);
          },
        },
      ]) && r(t.prototype, n),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      e
    );
  })();
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  var u = (function () {
    function e(t, n) {
      var r = t.items,
        o = t.renderer;
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, e),
        (this._initialArray = r),
        (this._renderer = o),
        (this._container = document.querySelector(n));
    }
    var t, n;
    return (
      (t = e),
      (n = [
        {
          key: "addItem",
          value: function (e) {
            this._container.append(e);
          },
        },
        {
          key: "renderItems",
          value: function () {
            var e = this;
            this._initialArray.forEach(function (t) {
              e._renderer(t);
            });
          },
        },
      ]) && i(t.prototype, n),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      e
    );
  })();
  function a(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  var l = (function () {
    function e(t) {
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, e),
        (this._element = document.querySelector(t)),
        (this._image = this._element.querySelector(".popup__image")),
        (this._subtitle = this._element.querySelector(".popup__subtitle")),
        (this._handleEscButtonBound = this._handleEscClose.bind(this));
    }
    var t, n;
    return (
      (t = e),
      (n = [
        {
          key: "open",
          value: function () {
            this._element.classList.add("popup_opened"),
              document.addEventListener("keydown", this._handleEscButtonBound);
          },
        },
        {
          key: "close",
          value: function () {
            this._element.classList.remove("popup_opened"),
              document.removeEventListener(
                "keydown",
                this._handleEscButtonBound
              );
          },
        },
        {
          key: "_handleEscClose",
          value: function (e) {
            "Escape" === e.key && this.close();
          },
        },
        {
          key: "setEventListeners",
          value: function () {
            var e = this;
            this._element
              .querySelector(".popup__close-button")
              .addEventListener("click", function () {
                e.close();
              }),
              this._element.addEventListener("click", function (t) {
                t.target === t.currentTarget && e.close();
              });
          },
        },
      ]) && a(t.prototype, n),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      e
    );
  })();
  function c(e) {
    return (
      (c =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      c(e)
    );
  }
  function s(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function f() {
    return (
      (f =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get.bind()
          : function (e, t, n) {
              var r = p(e, t);
              if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get
                  ? o.get.call(arguments.length < 3 ? e : n)
                  : o.value;
              }
            }),
      f.apply(this, arguments)
    );
  }
  function p(e, t) {
    for (
      ;
      !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = h(e));

    );
    return e;
  }
  function y(e, t) {
    return (
      (y = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          }),
      y(e, t)
    );
  }
  function d(e, t) {
    if (t && ("object" === c(t) || "function" == typeof t)) return t;
    if (void 0 !== t)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return (function (e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    })(e);
  }
  function h(e) {
    return (
      (h = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
      h(e)
    );
  }
  var m = (function (e) {
    !(function (e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && y(e, t);
    })(u, e);
    var t,
      n,
      r,
      o,
      i =
        ((r = u),
        (o = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            t = h(r);
          if (o) {
            var n = h(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return d(this, e);
        });
    function u(e, t) {
      var n,
        r = t.handleSubmitForm;
      return (
        (function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, u),
        ((n = i.call(this, e))._handleSubmitForm = r),
        (n.formElement = n._element.querySelector("form")),
        (n._inputsList = Array.from(n.formElement.querySelectorAll("input"))),
        n
      );
    }
    return (
      (t = u),
      (n = [
        {
          key: "_getInputsValues",
          value: function () {
            return this._inputsList.map(function (e) {
              return e.value;
            });
          },
        },
        {
          key: "setEventListeners",
          value: function () {
            var e = this;
            f(h(u.prototype), "setEventListeners", this).call(this),
              this.formElement.addEventListener("submit", function (t) {
                e._handleSubmitForm(t);
              });
          },
        },
        {
          key: "close",
          value: function () {
            f(h(u.prototype), "close", this).call(this),
              this.formElement.reset();
          },
        },
      ]) && s(t.prototype, n),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      u
    );
  })(l);
  function _(e) {
    return (
      (_ =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      _(e)
    );
  }
  function v(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function b() {
    return (
      (b =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get.bind()
          : function (e, t, n) {
              var r = g(e, t);
              if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get
                  ? o.get.call(arguments.length < 3 ? e : n)
                  : o.value;
              }
            }),
      b.apply(this, arguments)
    );
  }
  function g(e, t) {
    for (
      ;
      !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = w(e));

    );
    return e;
  }
  function k(e, t) {
    return (
      (k = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          }),
      k(e, t)
    );
  }
  function E(e, t) {
    if (t && ("object" === _(t) || "function" == typeof t)) return t;
    if (void 0 !== t)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return (function (e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    })(e);
  }
  function w(e) {
    return (
      (w = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
      w(e)
    );
  }
  var S = (function (e) {
    !(function (e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && k(e, t);
    })(u, e);
    var t,
      n,
      r,
      o,
      i =
        ((r = u),
        (o = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            t = w(r);
          if (o) {
            var n = w(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return E(this, e);
        });
    function u(e) {
      return (
        (function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, u),
        i.call(this, e)
      );
    }
    return (
      (t = u),
      (n = [
        {
          key: "open",
          value: function (e, t) {
            b(w(u.prototype), "open", this).call(this),
              (this._image.src = e),
              (this._image.alt = t),
              (this._subtitle.textContent = t);
          },
        },
      ]) && v(t.prototype, n),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      u
    );
  })(l);
  function O(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  var j = (function () {
      function e(t) {
        var n = t.userNameSelector,
          r = t.userOccupationSelector;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._name = document.querySelector(n)),
          (this._occupation = document.querySelector(r));
      }
      var t, n;
      return (
        (t = e),
        (n = [
          {
            key: "getUserInfo",
            value: function () {
              return {
                name: this._name.textContent,
                occupation: this._occupation.textContent,
              };
            },
          },
          {
            key: "setUserInfo",
            value: function (e, t) {
              (this._name.textContent = e), (this._occupation.textContent = t);
            },
          },
        ]) && O(t.prototype, n),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        e
      );
    })(),
    L = document.querySelector(".page"),
    C = L.querySelector(".elements__list"),
    P = new u(
      {
        items: [
          {
            name: "Архыз",
            link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
          },
          {
            name: "Челябинская область",
            link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
          },
          {
            name: "Иваново",
            link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
          },
          {
            name: "Камчатка",
            link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
          },
          {
            name: "Холмогорский район",
            link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
          },
          {
            name: "Байкал",
            link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
          },
        ],
        renderer: function (e) {
          var t = new o(e, "#place-card", {
            handleCardClick: function () {
              A.open(e.link, e.name);
            },
          }).generateCard();
          P.addItem(t);
        },
      },
      ".elements__list"
    );
  P.renderItems();
  var I = new j({
      userNameSelector: ".profile__name",
      userOccupationSelector: ".profile__occupation",
    }),
    q = new m("#popup-edit", {
      handleSubmitForm: function (e) {
        e.preventDefault();
        var t = q._getInputsValues();
        I.setUserInfo(t[0], t[1]), q.close();
      },
    });
  q.setEventListeners();
  var x = new t(n, q.formElement);
  x.enableValidation();
  var B = L.querySelector(".profile__edit-button"),
    R = q.formElement.querySelector("#profile-name-input"),
    T = q.formElement.querySelector("#profile-occupation-input");
  B.addEventListener("click", function () {
    var e = I.getUserInfo();
    (R.value = e.name), (T.value = e.occupation), x.resetValidation(), q.open();
  });
  var V = new m("#popup-add-post", {
    handleSubmitForm: function (e) {
      e.preventDefault();
      var t = V._getInputsValues(),
        n = (function (e, t) {
          return new o(e, "#place-card", {
            handleCardClick: function () {
              A.open(e.link, e.name);
            },
          }).generateCard();
        })({ name: t[0], link: t[1] });
      C.prepend(n), V.close();
    },
  });
  V.setEventListeners();
  var D = new t(n, V.formElement);
  D.enableValidation(),
    L.querySelector(".profile__add-button").addEventListener(
      "click",
      function () {
        V.open(), V.formElement.reset(), D.resetValidation();
      }
    );
  var A = new S("#popup-image");
  A.setEventListeners();
})();