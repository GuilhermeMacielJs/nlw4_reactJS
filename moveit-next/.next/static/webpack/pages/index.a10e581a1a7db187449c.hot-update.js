webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/CountDown.module.css":
/*!****************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./src/styles/components/CountDown.module.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".CountDown_countDownContainer__1Fj-6{\r\n    display: flex;\r\n    align-items: center;\r\n    font-family: Rajdhani;\r\n    font-weight: 600;\r\n    color: var(--title);\r\n}\r\n\r\n.CountDown_countDownContainer__1Fj-6 > div{\r\n    flex: 1 1;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n\r\n    background: var(--white);\r\n    box-shadow: 0 0 60px rgba(0, 0, 0, .05);\r\n    border-radius: 5px;\r\n    font-size: 8.5rem;\r\n    text-align: center;\r\n\r\n}\r\n\r\n.CountDown_countDownContainer__1Fj-6 > div span {\r\n    flex: 1 1;\r\n}\r\n\r\n.CountDown_countDownContainer__1Fj-6 > div span:first-child{\r\n    border-right: 1px solid #f0f1f3 ;\r\n}\r\n\r\n.CountDown_countDownContainer__1Fj-6 > div span:last-child{\r\n    border-left: 1px solid #f0f1f3 ;\r\n}\r\n\r\n.CountDown_countDownContainer__1Fj-6 > span{\r\n    font-size: 6.25rem;\r\n    margin: 0  0.5rem;\r\n}\r\n\r\n.CountDown_startCountDownButton__1KMBy{\r\n    width: 100%;\r\n    height: 5rem;\r\n\r\n    margin-top: 2rem;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    border: 0;\r\n    border-radius: 5px;\r\n\r\n    background: var(--blue);\r\n    color: var(--white);\r\n\r\n    font-size: 1.25rem;\r\n    font-weight: 600;\r\n\r\n    transition: background-color 0.2s;\r\n}\r\n\r\n.CountDown_startCountDownButton__1KMBy:hover{\r\n    background: var(--blue-dark);\r\n}\r\n\r\n.CountDown_startCountDownActive__PDnzk{\r\n    background: var(--white);\r\n    color: var(--title);\r\n}", "",{"version":3,"sources":["webpack://src/styles/components/CountDown.module.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,SAAO;;IAEP,aAAa;IACb,mBAAmB;IACnB,6BAA6B;;IAE7B,wBAAwB;IACxB,uCAAuC;IACvC,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;;AAEtB;;AAEA;IACI,SAAO;AACX;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,gBAAgB;;IAEhB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,SAAS;IACT,kBAAkB;;IAElB,uBAAuB;IACvB,mBAAmB;;IAEnB,kBAAkB;IAClB,gBAAgB;;IAEhB,iCAAiC;AACrC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,wBAAwB;IACxB,mBAAmB;AACvB","sourcesContent":[".countDownContainer{\r\n    display: flex;\r\n    align-items: center;\r\n    font-family: Rajdhani;\r\n    font-weight: 600;\r\n    color: var(--title);\r\n}\r\n\r\n.countDownContainer > div{\r\n    flex: 1;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n\r\n    background: var(--white);\r\n    box-shadow: 0 0 60px rgba(0, 0, 0, .05);\r\n    border-radius: 5px;\r\n    font-size: 8.5rem;\r\n    text-align: center;\r\n\r\n}\r\n\r\n.countDownContainer > div span {\r\n    flex: 1;\r\n}\r\n\r\n.countDownContainer > div span:first-child{\r\n    border-right: 1px solid #f0f1f3 ;\r\n}\r\n\r\n.countDownContainer > div span:last-child{\r\n    border-left: 1px solid #f0f1f3 ;\r\n}\r\n\r\n.countDownContainer > span{\r\n    font-size: 6.25rem;\r\n    margin: 0  0.5rem;\r\n}\r\n\r\n.startCountDownButton{\r\n    width: 100%;\r\n    height: 5rem;\r\n\r\n    margin-top: 2rem;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    border: 0;\r\n    border-radius: 5px;\r\n\r\n    background: var(--blue);\r\n    color: var(--white);\r\n\r\n    font-size: 1.25rem;\r\n    font-weight: 600;\r\n\r\n    transition: background-color 0.2s;\r\n}\r\n\r\n.startCountDownButton:hover{\r\n    background: var(--blue-dark);\r\n}\r\n\r\n.startCountDownActive{\r\n    background: var(--white);\r\n    color: var(--title);\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"countDownContainer": "CountDown_countDownContainer__1Fj-6",
	"startCountDownButton": "CountDown_startCountDownButton__1KMBy",
	"startCountDownActive": "CountDown_startCountDownActive__PDnzk"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdW50RG93bi5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyx3Q0FBd0Msc0JBQXNCLDRCQUE0Qiw4QkFBOEIseUJBQXlCLDRCQUE0QixLQUFLLG1EQUFtRCxrQkFBa0IsMEJBQTBCLDRCQUE0QixzQ0FBc0MscUNBQXFDLGdEQUFnRCwyQkFBMkIsMEJBQTBCLDJCQUEyQixTQUFTLHlEQUF5RCxrQkFBa0IsS0FBSyxvRUFBb0UseUNBQXlDLEtBQUssbUVBQW1FLHdDQUF3QyxLQUFLLG9EQUFvRCwyQkFBMkIsMEJBQTBCLEtBQUssK0NBQStDLG9CQUFvQixxQkFBcUIsNkJBQTZCLDBCQUEwQiw0QkFBNEIsZ0NBQWdDLHNCQUFzQiwyQkFBMkIsb0NBQW9DLDRCQUE0QiwrQkFBK0IseUJBQXlCLDhDQUE4QyxLQUFLLHFEQUFxRCxxQ0FBcUMsS0FBSywrQ0FBK0MsaUNBQWlDLDRCQUE0QixLQUFLLE9BQU8sMkdBQTJHLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssV0FBVyxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLGFBQWEsV0FBVyxZQUFZLGNBQWMsV0FBVyxhQUFhLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLDhDQUE4QyxzQkFBc0IsNEJBQTRCLDhCQUE4Qix5QkFBeUIsNEJBQTRCLEtBQUssa0NBQWtDLGdCQUFnQiwwQkFBMEIsNEJBQTRCLHNDQUFzQyxxQ0FBcUMsZ0RBQWdELDJCQUEyQiwwQkFBMEIsMkJBQTJCLFNBQVMsd0NBQXdDLGdCQUFnQixLQUFLLG1EQUFtRCx5Q0FBeUMsS0FBSyxrREFBa0Qsd0NBQXdDLEtBQUssbUNBQW1DLDJCQUEyQiwwQkFBMEIsS0FBSyw4QkFBOEIsb0JBQW9CLHFCQUFxQiw2QkFBNkIsMEJBQTBCLDRCQUE0QixnQ0FBZ0Msc0JBQXNCLDJCQUEyQixvQ0FBb0MsNEJBQTRCLCtCQUErQix5QkFBeUIsOENBQThDLEtBQUssb0NBQW9DLHFDQUFxQyxLQUFLLDhCQUE4QixpQ0FBaUMsNEJBQTRCLEtBQUssbUJBQW1CO0FBQ3JtSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hMTBlNTgxYTFhN2RiMTg3NDQ5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkNvdW50RG93bl9jb3VudERvd25Db250YWluZXJfXzFGai02e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogUmFqZGhhbmk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxyXFxufVxcclxcblxcclxcbi5Db3VudERvd25fY291bnREb3duQ29udGFpbmVyX18xRmotNiA+IGRpdntcXHJcXG4gICAgZmxleDogMSAxO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgNjBweCByZ2JhKDAsIDAsIDAsIC4wNSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiA4LjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLkNvdW50RG93bl9jb3VudERvd25Db250YWluZXJfXzFGai02ID4gZGl2IHNwYW4ge1xcclxcbiAgICBmbGV4OiAxIDE7XFxyXFxufVxcclxcblxcclxcbi5Db3VudERvd25fY291bnREb3duQ29udGFpbmVyX18xRmotNiA+IGRpdiBzcGFuOmZpcnN0LWNoaWxke1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjBmMWYzIDtcXHJcXG59XFxyXFxuXFxyXFxuLkNvdW50RG93bl9jb3VudERvd25Db250YWluZXJfXzFGai02ID4gZGl2IHNwYW46bGFzdC1jaGlsZHtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjBmMWYzIDtcXHJcXG59XFxyXFxuXFxyXFxuLkNvdW50RG93bl9jb3VudERvd25Db250YWluZXJfXzFGai02ID4gc3BhbntcXHJcXG4gICAgZm9udC1zaXplOiA2LjI1cmVtO1xcclxcbiAgICBtYXJnaW46IDAgIDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLkNvdW50RG93bl9zdGFydENvdW50RG93bkJ1dHRvbl9fMUtNQnl7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuXFxyXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuXFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uQ291bnREb3duX3N0YXJ0Q291bnREb3duQnV0dG9uX18xS01CeTpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZS1kYXJrKTtcXHJcXG59XFxyXFxuXFxyXFxuLkNvdW50RG93bl9zdGFydENvdW50RG93bkFjdGl2ZV9fUERuemt7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRpdGxlKTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXMvY29tcG9uZW50cy9Db3VudERvd24ubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxTQUFPOztJQUVQLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCOztJQUU3Qix3QkFBd0I7SUFDeEIsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLFNBQU87QUFDWDs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTs7SUFFWixnQkFBZ0I7O0lBRWhCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCOztJQUV2QixTQUFTO0lBQ1Qsa0JBQWtCOztJQUVsQix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixrQkFBa0I7SUFDbEIsZ0JBQWdCOztJQUVoQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb3VudERvd25Db250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSYWpkaGFuaTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRpdGxlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50RG93bkNvbnRhaW5lciA+IGRpdntcXHJcXG4gICAgZmxleDogMTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDYwcHggcmdiYSgwLCAwLCAwLCAuMDUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogOC41cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jb3VudERvd25Db250YWluZXIgPiBkaXYgc3BhbiB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5jb3VudERvd25Db250YWluZXIgPiBkaXYgc3BhbjpmaXJzdC1jaGlsZHtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YwZjFmMyA7XFxyXFxufVxcclxcblxcclxcbi5jb3VudERvd25Db250YWluZXIgPiBkaXYgc3BhbjpsYXN0LWNoaWxke1xcclxcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmMGYxZjMgO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnREb3duQ29udGFpbmVyID4gc3BhbntcXHJcXG4gICAgZm9udC1zaXplOiA2LjI1cmVtO1xcclxcbiAgICBtYXJnaW46IDAgIDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0Q291bnREb3duQnV0dG9ue1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcblxcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcblxcclxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0Q291bnREb3duQnV0dG9uOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlLWRhcmspO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnRDb3VudERvd25BY3RpdmV7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRpdGxlKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY291bnREb3duQ29udGFpbmVyXCI6IFwiQ291bnREb3duX2NvdW50RG93bkNvbnRhaW5lcl9fMUZqLTZcIixcblx0XCJzdGFydENvdW50RG93bkJ1dHRvblwiOiBcIkNvdW50RG93bl9zdGFydENvdW50RG93bkJ1dHRvbl9fMUtNQnlcIixcblx0XCJzdGFydENvdW50RG93bkFjdGl2ZVwiOiBcIkNvdW50RG93bl9zdGFydENvdW50RG93bkFjdGl2ZV9fUERuemtcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9