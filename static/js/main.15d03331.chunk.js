(this.webpackJsonpmesto=this.webpackJsonpmesto||[]).push([[0],{21:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var s=n(1),i=n.n(s),o=n(23),a=n.n(o),c=(n(21),n(26)),r=n(4),p=n(5),u=n(10),l=n(9),h=n.p+"static/media/logo.a307e1c4.svg",d=n(12),m=n(2),j=n(0);var b=Object(m.g)((function(t){return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("img",{src:h,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"}),t.isLoggedIn?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:"header__email",children:t.currentEmail}),Object(j.jsx)(d.b,{to:"/sign-in",className:"header__status",onClick:t.onSignOut,children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(j.jsx)(d.b,{to:"/sign-up",className:"header__status",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})})),f=i.a.createContext(),O=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(r.a)(this,n),(s=e.call(this,t)).handleClick=function(){s.props.handleCardClick({link:s.props.card.link,title:s.props.card.name})},s.onCardLike=function(){s.props.onCardLike(s.props.card)},s.onCardDelete=function(){s.props.onCardDelete(s.props.card)},s}return Object(p.a)(n,[{key:"render",value:function(){var t=this;return this.isOwn=this.props.card.owner._id===this.context._id,this.cardDeleteButtonClassName="".concat(this.isOwn?"element__delete-button_visible":"element__delete-button_hidden"),this.isLiked=this.props.card.likes.some((function(e){return e._id===t.context._id})),this.cardLikeButtonClassName="".concat(this.isLiked?"element__heart-button_theme_pushed":""),Object(j.jsxs)("li",{className:"elements__item element",children:[Object(j.jsx)("img",{src:this.props.card.link,alt:this.props.card.name,className:"element__image",onClick:this.handleClick}),Object(j.jsx)("p",{className:"element__title",children:this.props.card.name}),Object(j.jsxs)("div",{className:"element__group",children:[Object(j.jsx)("button",{onClick:this.onCardLike,type:"button",className:"element__heart-button ".concat(this.cardLikeButtonClassName)}),Object(j.jsx)("p",{className:"element__likes",children:this.props.card.likes.length})]}),Object(j.jsx)("button",{onClick:this.onCardDelete,type:"button",className:"element__delete-button ".concat(this.cardDeleteButtonClassName)})]})}}]),n}(i.a.Component);O.contextType=f;var g=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){return Object(r.a)(this,n),e.call(this,t)}return Object(p.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("main",{className:"main",children:[Object(j.jsxs)("section",{className:"profile",children:[Object(j.jsx)("img",{className:"profile__avatar",src:this.context.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"}),Object(j.jsx)("div",{className:"profile__avatar-overlay",children:Object(j.jsx)("button",{type:"button",className:"profile__avatar-button",onClick:this.props.onEditAvatar})}),Object(j.jsxs)("div",{className:"profile__info",children:[Object(j.jsx)("h1",{className:"profile__name",children:this.context.name}),Object(j.jsx)("button",{type:"button",className:"profile__edit-button",onClick:this.props.onEditProfile}),Object(j.jsx)("p",{className:"profile__description",children:this.context.about})]}),Object(j.jsx)("button",{type:"button",className:"profile__add-button",onClick:this.props.onAddPlace})]}),Object(j.jsx)("section",{className:"elements-section",children:Object(j.jsx)("ul",{className:"elements",children:this.props.cards.map((function(e){return Object(j.jsx)(O,{onCardDelete:t.props.onCardDelete,onCardLike:t.props.onCardLike,card:e,handleCardClick:t.props.handleCardClick},e._id)}))})})]})})}}]),n}(i.a.Component);function x(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})}g.contextType=f;var _=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(r.a)(this,n),(s=e.call(this,t)).isOpen="",s}return Object(p.a)(n,[{key:"render",value:function(){return this.props.isOpen?this.isOpen="popup_opened":this.isOpen="",Object(j.jsxs)("div",{className:"popup popup_type_".concat(this.props.name," ").concat(this.isOpen," "),id:"popup-".concat(this.props.name),children:[Object(j.jsxs)("form",{onSubmit:this.props.onSubmit,className:"form form-".concat(this.props.name,'" name="form-').concat(this.props.name),id:"form-".concat(this.props.name),children:[Object(j.jsx)("h2",{className:"form__title form-new-avatar__title",children:this.props.title}),this.props.children]}),Object(j.jsx)("button",{type:"button",className:"popup__close-button popup-".concat(this.props.name,"__close-button"),onClick:this.props.onClose})]})}}]),n}(i.a.Component),v=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(r.a)(this,n),(s=e.call(this,t)).isOpen="",s}return Object(p.a)(n,[{key:"render",value:function(){return this.props.card.isImagePopupOpen?this.isOpen="popup_opened":this.isOpen="",Object(j.jsxs)("div",{className:"popup popup-image ".concat(this.isOpen),id:"popup-image",children:[Object(j.jsx)("img",{src:this.props.card.link,alt:"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430",className:"popup-image__image"}),Object(j.jsx)("button",{type:"button",className:"popup__close-button popup-image__close-button",onClick:this.props.onClose}),Object(j.jsx)("p",{className:"popup-image__image-title",children:this.props.card.title})]})}}]),n}(i.a.Component),C=new(function(){function t(e){Object(r.a)(this,t),this._options=e,this._key=this._options.headers.authorization,this._url=this._options.baseUrl}return Object(p.a)(t,[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(t.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._key}}).then(this._checkResponse)}},{key:"getUserInformation",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._key}}).then(this._checkResponse)}},{key:"setUserInformation",value:function(t,e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._key,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:e})}).then(this._checkResponse)}},{key:"makeNewCard",value:function(t,e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._key,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:e})}).then(this._checkResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._key,"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"like",value:function(t){return fetch("".concat(this._url,"/cards/likes/").concat(t),{method:"PUT",headers:{authorization:this._key}}).then(this._checkResponse)}},{key:"unlike",value:function(t){return fetch("".concat(this._url,"/cards/likes/").concat(t),{method:"DELETE",headers:{authorization:this._key}}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._key,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then(this._checkResponse)}}]),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-19",headers:{authorization:"903df890-7445-4454-b32e-ead2e8ee9036","Content-Type":"application/json"}}),A=n(6);function y(t){var e=i.a.useState(""),n=Object(A.a)(e,2),s=n[0],o=n[1],a=i.a.useState(""),c=Object(A.a)(a,2),r=c[0],p=c[1],u=i.a.useContext(f);return i.a.useEffect((function(){o(u.name||""),p(u.about||"")}),[u]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(_,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t.isOpen,onClose:t.onClose,onSubmit:function(e){e.preventDefault(),t.onUpdateUser(s,r),t.onClose()},children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{value:s,onChange:function(t){t.preventDefault(),o(t.target.value)},id:"name-input",required:!0,minLength:2,maxLength:40,type:"text",className:"form__input input input_type_name",name:"name-input",placeholder:"\u0418\u043c\u044f"}),Object(j.jsx)("span",{id:"name-input-error",className:"form__input-error"}),Object(j.jsx)("input",{value:r,onChange:function(t){t.preventDefault(),p(t.target.value)},id:"description-input",minLength:2,maxLength:200,required:!0,type:"text",className:"form__input input input_type_description",name:"description-input",placeholder:"\u041e \u0441\u0435\u0431\u0435"}),Object(j.jsx)("span",{id:"description-input-error",className:"form__input-error"}),Object(j.jsx)("button",{type:"submit",className:"form__submit-button",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})})}function k(t){var e=i.a.useState(""),n=Object(A.a)(e,2),s=n[0],o=n[1];return Object(j.jsx)(_,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",onClose:t.onClose,isOpen:t.isOpen,name:"new-avatar",onSubmit:function(e){e.preventDefault(),t.onUpdateAvatar(s),t.onClose()},children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{value:s,onChange:function(t){o(t.target.value)},type:"url",id:"new-avatar",required:!0,className:"form__input form-new-avatar__input input input_type_avatar",name:"url-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}),Object(j.jsx)("span",{id:"new-avatar-error",className:"form__input-error"}),Object(j.jsx)("button",{type:"submit",className:"form__submit-button form-new-avatar__submit-button",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})}function N(t){var e=i.a.useState(""),n=Object(A.a)(e,2),s=n[0],o=n[1],a=i.a.useState(""),c=Object(A.a)(a,2),r=c[0],p=c[1];return Object(j.jsx)(_,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",onClose:t.onClose,name:"new-place",isOpen:t.isOpen,onSubmit:function(e){e.preventDefault(),t.onAddCard(s,r),t.onClose(),p(""),o("")},children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{value:s,onChange:function(t){o(t.target.value)},id:"title-input",required:!0,type:"text",maxLength:30,className:"form__input form-new-place__input input input_type_title",name:"title-input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(j.jsx)("span",{id:"title-input-error",className:"form__input-error"}),Object(j.jsx)("input",{value:r,onChange:function(t){p(t.target.value)},type:"url",id:"url-input",required:!0,className:"form__input form-new-place__input input input_type_url",name:"url-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}),Object(j.jsx)("span",{id:"url-input-error",className:"form__input-error"}),Object(j.jsx)("button",{type:"submit",className:"form__submit-button form-new-place__submit-button",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})})}function w(t){var e=i.a.useState(""),n=Object(A.a)(e,2),s=n[0],o=n[1],a=i.a.useState(""),c=Object(A.a)(a,2),r=c[0],p=c[1];return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.onLogin(r,s)},className:"form form-auth",children:[Object(j.jsx)("h2",{className:"form__title form-auth__title",children:"\u0412\u0445\u043e\u0434"}),Object(j.jsx)("input",{value:s,onChange:function(t){o(t.target.value)},className:"form__input input form-auth__input",required:!0,type:"email",id:"email-input",name:"email-input",placeholder:"Email"}),Object(j.jsx)("input",{value:r,onChange:function(t){p(t.target.value)},minLength:4,maxLength:20,className:"form__input input form-auth__input",required:!0,type:"password",id:"password-input",name:"password-input",placeholder:"Password"}),Object(j.jsx)("button",{type:"submit",className:"form__submit-button form-auth__submit-button",children:"\u0412\u043e\u0439\u0442\u0438"})]})}function P(t){var e=i.a.useState(""),n=Object(A.a)(e,2),s=n[0],o=n[1],a=i.a.useState(""),c=Object(A.a)(a,2),r=c[0],p=c[1];return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.onRegister(r,s)},className:"form form-auth",children:[Object(j.jsx)("h2",{className:"form__title form-auth__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(j.jsx)("input",{value:s,onChange:function(t){o(t.target.value)},className:"form__input input form-auth__input",required:!0,type:"email",id:"email-input",name:"email-input",placeholder:"Email"}),Object(j.jsx)("input",{value:r,onChange:function(t){p(t.target.value)},minLength:4,maxLength:20,className:"form__input input form-auth__input",required:!0,type:"password",id:"password-input",name:"password-input",placeholder:"Password"}),Object(j.jsx)("button",{type:"submit",className:"form__submit-button form-auth__submit-button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})}var S=n(27),L=n(28);function T(t){var e=t.component,n=Object(L.a)(t,["component"]);return Object(j.jsx)(m.b,{children:function(){return n.loggedIn?Object(j.jsx)(e,Object(S.a)({},n)):Object(j.jsx)(m.a,{to:"/sign-in"})}})}var W=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(r.a)(this,n),(s=e.call(this,t)).isOpen="",s}return Object(p.a)(n,[{key:"render",value:function(){return this.props.isOpen?this.isOpen="popup_opened":this.isOpen="",Object(j.jsxs)("div",{className:"popup ".concat(this.isOpen),children:[Object(j.jsxs)("div",{className:"popup-tooltip",children:[Object(j.jsx)("img",{className:"popup-tooltip__image",src:this.props.isAccept?"data:image/png;base64,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":"data:image/png;base64,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",alt:this.props.isAccept?"accept":"unaccept"}),Object(j.jsxs)("p",{className:"popup-tooltip__title",children:[" ",this.props.isAccept?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!"]})]}),Object(j.jsx)("button",{type:"button",className:"popup__close-button",onClick:this.props.onClose})]})}}]),n}(i.a.Component),I=new(function(){function t(e){Object(r.a)(this,t),this._options=e,this._key=this._options.headers.authorization,this._url=this._options.baseUrl}return Object(p.a)(t,[{key:"register",value:function(t,e){return fetch("".concat(this._url,"/signup"),{method:"POST",headers:{authorization:this.key,Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})})}},{key:"login",value:function(t,e){return fetch("".concat(this._url,"/signin"),{method:"POST",headers:{authorization:"903df890-7445-4454-b32e-ead2e8ee9036",Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})})}},{key:"authentification",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))}})}}]),t}())({baseUrl:"https://auth.nomoreparties.co",headers:{authorization:"903df890-7445-4454-b32e-ead2e8ee9036","Content-Type":"application/json"}}),F=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(r.a)(this,n),(s=e.call(this,t)).onRegister=function(t,e){I.register(t,e).then((function(t){return t.json()})).then((function(t){t.data?s.setState({isTooltipPopupOpen:!0,infoTooltipisAccept:!0}):s.setState({isTooltipPopupOpen:!0,infoTooltipisAccept:!1})})).catch((function(t){console.log(t)})),s.props.history.push("/")},s.onLogin=function(t,e){I.login(t,e).then((function(t){return t.json()})).then((function(t){t.token&&(localStorage.setItem("token",t.token),s.setState({loggedIn:!0}),s.props.history.push("/"),s.setState({currentEmail:e}))}))},s.onSignOut=function(){localStorage.removeItem("token"),s.setState({loggedIn:!1})},s.handleUpdateUser=function(t,e){C.setUserInformation(t,e).then((function(t){s.setState({currentUser:t})})).catch((function(t){console.log(t)}))},s.handleUpdateAvatar=function(t){C.setUserAvatar(t).then((function(t){s.setState({currentUser:t})})).catch((function(t){console.log(t)}))},s.handleCardDelete=function(t){C.deleteCard(t._id).then((function(){C.getInitialCards().then((function(t){s.setState({cards:t})})).catch((function(t){console.log(t)}))})).catch((function(t){console.log(t)}))},s.handleCardLike=function(t){t.likes.some((function(t){return t._id===s.state.currentUser._id}))?C.unlike(t._id).then((function(e){s.setState({cards:s.state.cards.map((function(n){return n._id===t._id?e:n}))})})).catch((function(t){console.log(t)})):C.like(t._id).then((function(e){s.setState({cards:s.state.cards.map((function(n){return n._id===t._id?e:n}))})})).catch((function(t){console.log(t)}))},s.handleCardClick=function(t){var e=t.link,n=t.title;s.setState({selectedCard:{isImagePopupOpen:!0,link:e,title:n}})},s.handleAddCard=function(t,e){C.makeNewCard(t,e).then((function(t){s.setState({cards:[t].concat(Object(c.a)(s.state.cards))})})).catch((function(t){console.log(t)}))},s.popupFunctions={onEditProfile:function(){s.setState({isEditProfilePopupOpen:!0})},onAddPlace:function(){s.setState({isAddPlacePopupOpen:!0})},onEditAvatar:function(){s.setState({isEditAvatarPopupOpen:!0})},closeAllpopups:function(){s.setState({isEditProfilePopupOpen:!1,isAddPlacePopupOpen:!1,isEditAvatarPopupOpen:!1,isConfirmPopupOpen:!1,isTooltipPopupOpen:!1,selectedCard:{isImagePopupOpen:!1,src:""}})}},s.state={infoTooltipisAccept:!1,currentEmail:"",loggedIn:!1,cards:[],currentUser:{},isTooltipPopupOpen:!1,isEditProfilePopupOpen:!1,isAddPlacePopupOpen:!1,isEditAvatarPopupOpen:!1,isConfirmPopupOpen:!1,selectedCard:{isImagePopupOpen:!1,src:""}},s}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=this;C.getUserInformation().then((function(e){return t.setState({currentUser:e})})).catch((function(t){console.log(t)})),C.getInitialCards().then((function(e){t.setState({cards:e})})).catch((function(t){console.log(t)})),I.authentification().then((function(t){return t.json()})).then((function(e){e.data&&(t.setState({loggedIn:!0,currentEmail:e.data.email}),t.props.history.push("/"))})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(f.Provider,{value:this.state.currentUser,children:Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)(b,{isLoggedIn:this.state.loggedIn,currentEmail:this.state.currentEmail,onSignOut:this.onSignOut}),Object(j.jsxs)(m.d,{children:[Object(j.jsx)(m.b,{path:"/sign-up",children:Object(j.jsx)(P,{onRegister:this.onRegister})}),Object(j.jsx)(m.b,{path:"/sign-in",children:Object(j.jsx)(w,{onLogin:this.onLogin})}),Object(j.jsx)(T,{exact:!0,path:"/",loggedIn:this.state.loggedIn,component:g,onEditProfile:this.popupFunctions.onEditProfile,onAddPlace:this.popupFunctions.onAddPlace,onEditAvatar:this.popupFunctions.onEditAvatar,cards:this.state.cards,onCardDelete:this.handleCardDelete,handleCardClick:this.handleCardClick,onCardLike:this.handleCardLike})]}),Object(j.jsx)(x,{}),Object(j.jsx)(W,{isAccept:this.state.infoTooltipisAccept,onClose:this.popupFunctions.closeAllpopups,isOpen:this.state.isTooltipPopupOpen}),Object(j.jsx)(N,{onAddCard:this.handleAddCard,onClose:this.popupFunctions.closeAllpopups,name:"new-place",isOpen:this.state.isAddPlacePopupOpen}),Object(j.jsx)(y,{onUpdateUser:this.handleUpdateUser,onClose:this.popupFunctions.closeAllpopups,isOpen:this.state.isEditProfilePopupOpen}),Object(j.jsx)(_,{onClose:this.popupFunctions.closeAllpopups,isOpen:this.state.isConfirmPopupOpen,name:"confirm",children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"form__title form-confirm__title",children:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"}),Object(j.jsx)("button",{type:"submit",className:"form__submit-button form-confirm__submit-button",children:"\u0414\u0430"})]})}),Object(j.jsx)(k,{onUpdateAvatar:this.handleUpdateAvatar,isOpen:this.state.isEditAvatarPopupOpen,onClose:this.popupFunctions.closeAllpopups}),Object(j.jsx)(v,{onClose:this.popupFunctions.closeAllpopups,card:this.state.selectedCard})]})})})}}]),n}(i.a.Component),E=Object(m.g)(F),H=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(e){var n=e.getCLS,s=e.getFID,i=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),s(t),i(t),o(t),a(t)}))};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(d.a,{basename:".",children:Object(j.jsx)(E,{})})}),document.getElementById("root")),H()}},[[39,1,2]]]);
//# sourceMappingURL=main.15d03331.chunk.js.map