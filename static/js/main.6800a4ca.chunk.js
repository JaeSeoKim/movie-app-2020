(this["webpackJsonpmovie-app-2020"]=this["webpackJsonpmovie-app-2020"]||[]).push([[0],{34:function(e,a,t){e.exports=t(66)},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(24),i=t.n(s),o=t(9),c=t(7),m=t(11),l=t.n(m),u=t(25),v=t(26),p=t(27),d=t(32),g=t(28),E=t(33),f=t(29),y=t.n(f),_=t(3),h=t.n(_);t(59);function b(e){var a=e.title,t=e.year,n=e.rating,s=e.summary,i=e.poster,o=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{className:"movie__img",src:i,alt:a,title:a}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},a),r.a.createElement("h5",{className:"movie__year_rating"},t," | ",n),r.a.createElement("ul",{className:"movie__genres"},o.map((function(e,a){return r.a.createElement("li",{key:a,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},s.slice(0,180),"...")))}b.prototype={id:h.a.number.isRequired,title:h.a.string.isRequired,year:h.a.number.isRequired,rating:h.a.number.isRequired,poster:h.a.string.isRequired,genres:h.a.arrayOf(h.a.string).isRequired};var N=b,w=(t(60),function(e){function a(){var e,t;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(d.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},t.getMovies=Object(u.a)(l.a.mark((function e(){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=e.sent,n=a.data.data.movies,t.setState({movies:n,isLoading:!1}),console.log(n);case 6:case"end":return e.stop()}}),e)}))),t}return Object(E.a)(a,e),Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{className:"container"},a?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Now Loading...")):r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(N,{key:e.id,id:e.id,title:e.title,year:e.year,summary:e.summary,rating:e.rating,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));t(61);var k=function(){return r.a.createElement("div",{className:"about__container"},r.a.createElement("h2",null,"The Movie App"),r.a.createElement("span",null,"Created by jaeseokim"),r.a.createElement("span",null,"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"),r.a.createElement("span",null,"\u2212 George Orwell, 1984"))};t(62);var j=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:"/about"},"About"))};var O=function(){return r.a.createElement(o.a,null,r.a.createElement(j,null),r.a.createElement(c.a,{path:"/",exact:!0,component:w}),r.a.createElement(c.a,{path:"/about",exact:!0,component:k}))};i.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.6800a4ca.chunk.js.map