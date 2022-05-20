"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[710],{7710:(q,s,i)=>{i.r(s),i.d(s,{ProductosModule:()=>x});var d=i(9808),c=i(4100),t=i(5e3);let f=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:2,vars:0,template:function(o,n){1&o&&(t.TgZ(0,"div"),t._UZ(1,"router-outlet"),t.qZA())},directives:[c.lC],styles:[""]}),e})();var p=i(3900),l=i(4893),h=i(2523),C=i(5226),u=i.n(C),v=i(4209),g=i(7423);let m=(()=>{class e{transform(o){return o.id||o.alt_img?o.alt_img?o.alt_img:`assets/productos/${o.id}.jpg`:"assets/productos/no-image.png"}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275pipe=t.Yjl({name:"imagen",type:e,pure:!0}),e})();const P=function(e){return["/productos/detalle",e]};let A=(()=>{class e{constructor(o,n){this._productoService=o,this._updateCartService=n}ngOnInit(){}addToCarrito(o){this._productoService.addArticleToCart(o).subscribe(n=>{console.log(n),this._updateCartService.setUpdatedCart$(o),"true"===n.ok&&u().fire({position:"center",icon:"success",title:"Producto a\xf1adido al carrito",showConfirmButton:!1,timer:1500})})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(l.k),t.Y36(v.K))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-card-producto"]],inputs:{producto:"producto"},decls:23,vars:10,consts:[[1,"card"],[1,"card-img",3,"src"],[1,"card-img-overlay","d-flex","justify-content-end"],["href","#",1,"card-link","text-danger","like"],[1,"fas","fa-heart",2,"color","white"],[1,"card-body","d-flex","flex-column"],[1,"content"],[1,"card-title"],[1,"card-subtitle","mb-2","text-muted"],[1,"price","text-success"],[1,"mt-2"],[1,"card-text"],[1,"buy","d-flex","justify-content-between","align-items-center"],["mat-raised-button","","color","primary",1,"mt-3",3,"routerLink"],["mat-raised-button","","color","warn",1,"mt-3",3,"click"],[1,"fas","fa-shopping-cart"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.ALo(2,"imagen"),t.TgZ(3,"div",2),t.TgZ(4,"a",3),t._UZ(5,"i",4),t.qZA(),t.qZA(),t.TgZ(6,"div",5),t.TgZ(7,"div",6),t.TgZ(8,"h4",7),t._uU(9),t.qZA(),t.TgZ(10,"h6",8),t._uU(11),t.qZA(),t.TgZ(12,"div",9),t.TgZ(13,"h5",10),t._uU(14),t.qZA(),t.qZA(),t.TgZ(15,"p",11),t._uU(16),t.qZA(),t.qZA(),t.TgZ(17,"div",12),t.TgZ(18,"button",13),t._uU(19,"Detalle"),t.qZA(),t.TgZ(20,"button",14),t.NdJ("click",function(){return n.addToCarrito(n.producto)}),t._UZ(21,"i",15),t._uU(22," A\xf1adir al carrito"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(1),t.Q6J("src",t.lcZ(2,6,n.producto),t.LSH),t.xp6(8),t.Oqu(n.producto.nombre),t.xp6(2),t.hij("Style: ",n.producto.familia,""),t.xp6(3),t.hij("Precio: ",n.producto.precio," \u20ac"),t.xp6(2),t.hij(" ",n.producto.descripcion," "),t.xp6(2),t.Q6J("routerLink",t.VKq(8,P,n.producto.id)))},directives:[g.lW,c.rH],pipes:[m],styles:[".content[_ngcontent-%COMP%]{flex:1 1 auto}img[_ngcontent-%COMP%]{height:450px}.card[_ngcontent-%COMP%]{cursor:pointer}.btn-link[_ngcontent-%COMP%]{background:none!important;border:none;padding:0!important;font-family:arial,sans-serif;color:#069;text-decoration:underline;cursor:pointer}"]}),e})();function T(e,r){if(1&e&&(t.TgZ(0,"div",5),t._UZ(1,"app-card-producto",6),t.qZA()),2&e){const o=r.$implicit;t.xp6(1),t.Q6J("producto",o)}}const M=[{path:"",component:f,children:[{path:"catalogo",component:(()=>{class e{constructor(o,n,a){this._productoService=o,this._route=n,this._activedRoute=a,this.titulo="Cat\xe1logo",this.productos=[]}ngOnInit(){this._route.url.includes("filter")&&this._activedRoute.queryParams.pipe((0,p.w)(o=>this._productoService.getFilterByFamily(o.filter))).subscribe(),this._productoService.get("list").subscribe(o=>{this.productos=o})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(l.k),t.Y36(c.F0),t.Y36(c.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-list"]],decls:5,vars:2,consts:[[1,"mt-3"],[3,"titulo"],[1,"container"],[1,"row"],["class","col-12 col-sm-8 col-md-6 col-lg-4 my-3 page-wrapper",4,"ngFor","ngForOf"],[1,"col-12","col-sm-8","col-md-6","col-lg-4","my-3","page-wrapper"],[1,"page-inner",3,"producto"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"app-title",1),t.qZA(),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.YNc(4,T,2,1,"div",4),t.qZA(),t.qZA()),2&o&&(t.xp6(1),t.Q6J("titulo",n.titulo),t.xp6(3),t.Q6J("ngForOf",n.productos))},directives:[h.r,d.sg,A],styles:[".page-wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.page-wrapper[_ngcontent-%COMP%]   .page-inner[_ngcontent-%COMP%]{display:-webkit-flex}"]}),e})()},{path:"detalle/:id",component:(()=>{class e{constructor(o,n,a){this._productoService=o,this._activedRoute=n,this._router=a,this.producto={familia:"",serie:"",modelo:"",nombre:"",descripcion:"",color:"",precio:0,talla:"",stock:0,alt_img:""},this.titleProd="Detalles del producto"}ngOnInit(){!this._router.url.includes("detalle")||this._activedRoute.params.pipe((0,p.w)(({id:o})=>this._productoService.getProduct(o))).subscribe(o=>{this.producto=o})}addToCarrito(o){this._productoService.addArticleToCart(o).subscribe(n=>{"OK"===n.resultado&&u().fire({position:"center",icon:"success",title:"Producto a\xf1adido al carrito",showConfirmButton:!1,timer:1500})})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(l.k),t.Y36(c.gz),t.Y36(c.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-producto"]],decls:41,vars:24,consts:[[1,"sproduct","my-2","pt-3"],[1,"text-center"],[1,"row","mt-3"],[1,"col-lg-5","col-md-12","col-12"],["alt","",1,"img-fluid","w-100","pb-1",3,"src"],[1,"small-img-group"],[1,"small-img-col"],["alt","","width","100%",1,"small-img",3,"src"],[1,"mt-2"],[1,"py-1"],["type","number","value","1"],["mat-raised-button","","color","primary",3,"click"],[1,"mt-3"],[1,"mt-1","mb-3"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h1"),t._uU(3,"Detalles del producto"),t.qZA(),t.qZA(),t.TgZ(4,"div",2),t.TgZ(5,"div",3),t._UZ(6,"img",4),t.ALo(7,"imagen"),t.TgZ(8,"div",5),t.TgZ(9,"div",6),t._UZ(10,"img",7),t.ALo(11,"imagen"),t.qZA(),t.TgZ(12,"div",6),t._UZ(13,"img",7),t.ALo(14,"imagen"),t.qZA(),t.TgZ(15,"div",6),t._UZ(16,"img",7),t.ALo(17,"imagen"),t.qZA(),t.TgZ(18,"div",6),t._UZ(19,"img",7),t.ALo(20,"imagen"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"div",3),t.TgZ(22,"div",8),t.TgZ(23,"h1"),t._uU(24),t.qZA(),t.qZA(),t.TgZ(25,"h3",9),t._uU(26,"Tipo: "),t.TgZ(27,"b"),t._uU(28),t.qZA(),t.qZA(),t.TgZ(29,"h3"),t._uU(30),t.ALo(31,"currency"),t.qZA(),t._UZ(32,"input",10),t.TgZ(33,"button",11),t.NdJ("click",function(){return n.addToCarrito(n.producto)}),t._uU(34,"A\xf1adir al carrito"),t.qZA(),t.TgZ(35,"div",12),t.TgZ(36,"h1"),t._uU(37,"Descripcion"),t.qZA(),t.qZA(),t.TgZ(38,"div",13),t.TgZ(39,"span"),t._uU(40),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(6),t.Q6J("src",t.lcZ(7,9,n.producto),t.LSH),t.xp6(4),t.Q6J("src",t.lcZ(11,11,n.producto),t.LSH),t.xp6(3),t.Q6J("src",t.lcZ(14,13,n.producto),t.LSH),t.xp6(3),t.Q6J("src",t.lcZ(17,15,n.producto),t.LSH),t.xp6(3),t.Q6J("src",t.lcZ(20,17,n.producto),t.LSH),t.xp6(5),t.Oqu(n.producto.nombre),t.xp6(4),t.Oqu(n.producto.familia),t.xp6(2),t.hij("Precio: ",t.gM2(31,19,n.producto.precio,"EUR","symbol-narrow","1.0-4"),""),t.xp6(10),t.Oqu(n.producto.descripcion))},directives:[g.lW],pipes:[m,d.H9],styles:['.small-img-group[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.small-img-col[_ngcontent-%COMP%]{flex-basis:24%;cursor:pointer}.sproduct[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{display:block;padding:5px 10px}.sproduct[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:50px;height:40px;padding-left:10px;font-size:16px;margin-right:10px}.buy-btn[_ngcontent-%COMP%]{background-color:#7b1fa2;opacity:1;transition:.3s all}.header[_ngcontent-%COMP%]{width:100%;margin:auto}.header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .header-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .header-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .header-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;font-size:25px;font-weight:300;color:#222;letter-spacing:1px;text-transform:uppercase;display:grid;grid-template-columns:1fr max-content 1fr;grid-template-rows:27px 0;grid-gap:10px;align-items:center}.header-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:after, .header-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:before, .header-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after, .header-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:before, .header-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:after, .header-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:before{content:" ";display:block;border-bottom:1px solid #c50000;border-top:1px solid #c50000;height:5px;background-color:#f8f8f8}']}),e})()}]}];let O=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.Bz.forChild(M)],c.Bz]}),e})();var _=i(2297),y=i(4466),Z=i(3075),b=i(6631);let x=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.ez,O,_.UiModuleModule,y.m,Z.u5,Z.UX,b.q]]}),e})()}}]);