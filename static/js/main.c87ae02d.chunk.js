(window["webpackJsonpmovie-app-v2"]=window["webpackJsonpmovie-app-v2"]||[]).push([[0],{19:function(e,t,a){e.exports=a(45)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(12),r=a.n(s),c=a(2),l=a.n(c),o=a(13),m=a(14),v=a(15),u=a(18),d=a(17),_=a(16),p=a.n(_),E=(a(42),function(e){e.id;var t=e.year,a=e.title,n=e.summary,s=(e.poster,e.genres);return i.a.createElement("div",{className:"detail"},i.a.createElement("div",{className:"movie__data"},i.a.createElement("h3",{className:"movie__title"},a),i.a.createElement("h5",{className:"movie__year"},t),i.a.createElement("ul",{className:"movie__genres"},s.map((function(e,t){return i.a.createElement("li",{key:t,className:"genres__genre"},e)}))),i.a.createElement("p",{className:"movie__summary"},n)))}),f=(a(43),function(e){var t=e.id,a=e.title,n=e.poster,s=e.clickHander;return i.a.createElement("div",{className:"title__movie"},i.a.createElement("img",{src:n,id:t,alt:a,title:a,onClick:s}))}),g=(a(44),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,isSelect:!0,movies:[],selectMovie:[]},e.getMovies=Object(o.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e.getSelectMovie=function(t){e.state.movies.map((function(a){if(a.id===Number(t)){var n=new Array;n.push(a),e.setState({selectMovie:n,isSelect:!1})}}))},e.selectMovie=function(t){e.setState({isSelect:!1}),e.getSelectMovie(t.target.id)},e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({isLoading:!1})}),6e3),this.getMovies()}},{key:"render",value:function(){var e=this,t=this.state,a=t.isLoading,n=t.isSelect,s=t.movies,r=t.selectMovie;return i.a.createElement("section",{className:"container"},a?i.a.createElement("div",{className:"loader"},i.a.createElement("span",{className:"loader__text"},"Loading...")):i.a.createElement("div",{className:"movies__board"},i.a.createElement("div",{className:"site__title"},i.a.createElement("h1",null,"Get Movie Data")),i.a.createElement("div",{className:"main__silder"},i.a.createElement("div",{className:"main__title"},s.map((function(t){return i.a.createElement(f,{key:t.id,id:t.id,title:t.title,poster:t.large_cover_image,clickHander:e.selectMovie})})))),n?i.a.createElement("div",{className:"site__click"},i.a.createElement("h1",null,"Plz Click Posters")):i.a.createElement("div",{className:"movie__detail"},r.map((function(e){return i.a.createElement(E,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,genres:e.genres})})))))}}]),a}(i.a.Component));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(g,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.c87ae02d.chunk.js.map