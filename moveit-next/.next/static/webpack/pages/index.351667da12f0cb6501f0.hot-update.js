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
___CSS_LOADER_EXPORT___.push([module.i, ".CountDown_countDownContainer__1Fj-6{\r\n    display: flex;\r\n    align-items: center;\r\n    font-family: Rajdhani;\r\n    font-weight: 600;\r\n    color: var(--title);\r\n}\r\n\r\n.CountDown_countDownContainer__1Fj-6 > div{\r\n    flex: 1 1;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n\r\n    background: var(--white);\r\n    box-shadow: 0 0 60px rgba(0, 0, 0, .05);\r\n    border-radius: 5px;\r\n    font-size: 8.5rem;\r\n    text-align: center;\r\n\r\n}\r\n\r\n.CountDown_countDownContainer__1Fj-6 > div span {\r\n    flex: 1 1;\r\n}\r\n\r\n.CountDown_countDownContainer__1Fj-6 > div span:first-child{\r\n    border-right: 1px solid #f0f1f3 ;\r\n}\r\n\r\n.CountDown_countDownContainer__1Fj-6 > div span:last-child{\r\n    border-left: 1px solid #f0f1f3 ;\r\n}\r\n\r\n.CountDown_countDownContainer__1Fj-6 > span{\r\n    font-size: 6.25rem;\r\n    margin: 0  0.5rem;\r\n}\r\n\r\n.CountDown_startCountDownButton__1KMBy{\r\n    width: 100%;\r\n    height: 5rem;\r\n\r\n    margin-top: 2rem;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    border: 0;\r\n    border-radius: 5px;\r\n\r\n    background: var(--blue);\r\n    color: var(--white);\r\n\r\n    font-size: 1.25rem;\r\n    font-weight: 600;\r\n\r\n    transition: background-color 0.2s;\r\n}\r\n\r\n.CountDown_startCountDownButton__1KMBy:hover{\r\n    background: var(--blue-dark);\r\n}\r\n\r\n.CountDown_startCountDownActive__PDnzk{\r\n    background: var(--white);\r\n}", "",{"version":3,"sources":["webpack://src/styles/components/CountDown.module.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,SAAO;;IAEP,aAAa;IACb,mBAAmB;IACnB,6BAA6B;;IAE7B,wBAAwB;IACxB,uCAAuC;IACvC,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;;AAEtB;;AAEA;IACI,SAAO;AACX;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,gBAAgB;;IAEhB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,SAAS;IACT,kBAAkB;;IAElB,uBAAuB;IACvB,mBAAmB;;IAEnB,kBAAkB;IAClB,gBAAgB;;IAEhB,iCAAiC;AACrC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,wBAAwB;AAC5B","sourcesContent":[".countDownContainer{\r\n    display: flex;\r\n    align-items: center;\r\n    font-family: Rajdhani;\r\n    font-weight: 600;\r\n    color: var(--title);\r\n}\r\n\r\n.countDownContainer > div{\r\n    flex: 1;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n\r\n    background: var(--white);\r\n    box-shadow: 0 0 60px rgba(0, 0, 0, .05);\r\n    border-radius: 5px;\r\n    font-size: 8.5rem;\r\n    text-align: center;\r\n\r\n}\r\n\r\n.countDownContainer > div span {\r\n    flex: 1;\r\n}\r\n\r\n.countDownContainer > div span:first-child{\r\n    border-right: 1px solid #f0f1f3 ;\r\n}\r\n\r\n.countDownContainer > div span:last-child{\r\n    border-left: 1px solid #f0f1f3 ;\r\n}\r\n\r\n.countDownContainer > span{\r\n    font-size: 6.25rem;\r\n    margin: 0  0.5rem;\r\n}\r\n\r\n.startCountDownButton{\r\n    width: 100%;\r\n    height: 5rem;\r\n\r\n    margin-top: 2rem;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    border: 0;\r\n    border-radius: 5px;\r\n\r\n    background: var(--blue);\r\n    color: var(--white);\r\n\r\n    font-size: 1.25rem;\r\n    font-weight: 600;\r\n\r\n    transition: background-color 0.2s;\r\n}\r\n\r\n.startCountDownButton:hover{\r\n    background: var(--blue-dark);\r\n}\r\n\r\n.startCountDownActive{\r\n    background: var(--white);\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"countDownContainer": "CountDown_countDownContainer__1Fj-6",
	"startCountDownButton": "CountDown_startCountDownButton__1KMBy",
	"startCountDownActive": "CountDown_startCountDownActive__PDnzk"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdW50RG93bi5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyx3Q0FBd0Msc0JBQXNCLDRCQUE0Qiw4QkFBOEIseUJBQXlCLDRCQUE0QixLQUFLLG1EQUFtRCxrQkFBa0IsMEJBQTBCLDRCQUE0QixzQ0FBc0MscUNBQXFDLGdEQUFnRCwyQkFBMkIsMEJBQTBCLDJCQUEyQixTQUFTLHlEQUF5RCxrQkFBa0IsS0FBSyxvRUFBb0UseUNBQXlDLEtBQUssbUVBQW1FLHdDQUF3QyxLQUFLLG9EQUFvRCwyQkFBMkIsMEJBQTBCLEtBQUssK0NBQStDLG9CQUFvQixxQkFBcUIsNkJBQTZCLDBCQUEwQiw0QkFBNEIsZ0NBQWdDLHNCQUFzQiwyQkFBMkIsb0NBQW9DLDRCQUE0QiwrQkFBK0IseUJBQXlCLDhDQUE4QyxLQUFLLHFEQUFxRCxxQ0FBcUMsS0FBSywrQ0FBK0MsaUNBQWlDLEtBQUssT0FBTywyR0FBMkcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxXQUFXLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsYUFBYSxXQUFXLFlBQVksY0FBYyxXQUFXLGFBQWEsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLDhDQUE4QyxzQkFBc0IsNEJBQTRCLDhCQUE4Qix5QkFBeUIsNEJBQTRCLEtBQUssa0NBQWtDLGdCQUFnQiwwQkFBMEIsNEJBQTRCLHNDQUFzQyxxQ0FBcUMsZ0RBQWdELDJCQUEyQiwwQkFBMEIsMkJBQTJCLFNBQVMsd0NBQXdDLGdCQUFnQixLQUFLLG1EQUFtRCx5Q0FBeUMsS0FBSyxrREFBa0Qsd0NBQXdDLEtBQUssbUNBQW1DLDJCQUEyQiwwQkFBMEIsS0FBSyw4QkFBOEIsb0JBQW9CLHFCQUFxQiw2QkFBNkIsMEJBQTBCLDRCQUE0QixnQ0FBZ0Msc0JBQXNCLDJCQUEyQixvQ0FBb0MsNEJBQTRCLCtCQUErQix5QkFBeUIsOENBQThDLEtBQUssb0NBQW9DLHFDQUFxQyxLQUFLLDhCQUE4QixpQ0FBaUMsS0FBSyxtQkFBbUI7QUFDaGlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM1MTY2N2RhMTJmMGNiNjUwMWYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQ291bnREb3duX2NvdW50RG93bkNvbnRhaW5lcl9fMUZqLTZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSYWpkaGFuaTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRpdGxlKTtcXHJcXG59XFxyXFxuXFxyXFxuLkNvdW50RG93bl9jb3VudERvd25Db250YWluZXJfXzFGai02ID4gZGl2e1xcclxcbiAgICBmbGV4OiAxIDE7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCA2MHB4IHJnYmEoMCwgMCwgMCwgLjA1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDguNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uQ291bnREb3duX2NvdW50RG93bkNvbnRhaW5lcl9fMUZqLTYgPiBkaXYgc3BhbiB7XFxyXFxuICAgIGZsZXg6IDEgMTtcXHJcXG59XFxyXFxuXFxyXFxuLkNvdW50RG93bl9jb3VudERvd25Db250YWluZXJfXzFGai02ID4gZGl2IHNwYW46Zmlyc3QtY2hpbGR7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMGYxZjMgO1xcclxcbn1cXHJcXG5cXHJcXG4uQ291bnREb3duX2NvdW50RG93bkNvbnRhaW5lcl9fMUZqLTYgPiBkaXYgc3BhbjpsYXN0LWNoaWxke1xcclxcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmMGYxZjMgO1xcclxcbn1cXHJcXG5cXHJcXG4uQ291bnREb3duX2NvdW50RG93bkNvbnRhaW5lcl9fMUZqLTYgPiBzcGFue1xcclxcbiAgICBmb250LXNpemU6IDYuMjVyZW07XFxyXFxuICAgIG1hcmdpbjogMCAgMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uQ291bnREb3duX3N0YXJ0Q291bnREb3duQnV0dG9uX18xS01CeXtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG5cXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5Db3VudERvd25fc3RhcnRDb3VudERvd25CdXR0b25fXzFLTUJ5OmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlLWRhcmspO1xcclxcbn1cXHJcXG5cXHJcXG4uQ291bnREb3duX3N0YXJ0Q291bnREb3duQWN0aXZlX19QRG56a3tcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdW50RG93bi5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQU87O0lBRVAsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7O0lBRTdCLHdCQUF3QjtJQUN4Qix1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksU0FBTztBQUNYOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztJQUVaLGdCQUFnQjs7SUFFaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7O0lBRXZCLFNBQVM7SUFDVCxrQkFBa0I7O0lBRWxCLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0lBRWhCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY291bnREb3duQ29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogUmFqZGhhbmk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxyXFxufVxcclxcblxcclxcbi5jb3VudERvd25Db250YWluZXIgPiBkaXZ7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCA2MHB4IHJnYmEoMCwgMCwgMCwgLjA1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDguNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uY291bnREb3duQ29udGFpbmVyID4gZGl2IHNwYW4ge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnREb3duQ29udGFpbmVyID4gZGl2IHNwYW46Zmlyc3QtY2hpbGR7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMGYxZjMgO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnREb3duQ29udGFpbmVyID4gZGl2IHNwYW46bGFzdC1jaGlsZHtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjBmMWYzIDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50RG93bkNvbnRhaW5lciA+IHNwYW57XFxyXFxuICAgIGZvbnQtc2l6ZTogNi4yNXJlbTtcXHJcXG4gICAgbWFyZ2luOiAwICAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5zdGFydENvdW50RG93bkJ1dHRvbntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG5cXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5zdGFydENvdW50RG93bkJ1dHRvbjpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZS1kYXJrKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0Q291bnREb3duQWN0aXZle1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvdW50RG93bkNvbnRhaW5lclwiOiBcIkNvdW50RG93bl9jb3VudERvd25Db250YWluZXJfXzFGai02XCIsXG5cdFwic3RhcnRDb3VudERvd25CdXR0b25cIjogXCJDb3VudERvd25fc3RhcnRDb3VudERvd25CdXR0b25fXzFLTUJ5XCIsXG5cdFwic3RhcnRDb3VudERvd25BY3RpdmVcIjogXCJDb3VudERvd25fc3RhcnRDb3VudERvd25BY3RpdmVfX1BEbnprXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==