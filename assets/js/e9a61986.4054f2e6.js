"use strict";(self.webpackChunkmy_open_source=self.webpackChunkmy_open_source||[]).push([[799],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,b=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return t?n.createElement(b,o(o({ref:r},d),{},{components:t})):n.createElement(b,o({ref:r},d))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9302:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const i={sidebar_position:1},o=void 0,l={unversionedId:"mariaDB/install",id:"mariaDB/install",title:"install",description:"Get the source code",source:"@site/docs/mariaDB/install.md",sourceDirName:"mariaDB",slug:"/mariaDB/install",permalink:"/docs/mariaDB/install",draft:!1,editUrl:"https://github.com/arun-esh/publicBlog/edit/main/docs/mariaDB/install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial Intro",permalink:"/docs/intro"},next:{title:"commands",permalink:"/docs/mariaDB/commands"}},s={},c=[{value:"Get the source code",id:"get-the-source-code",level:2},{value:"Build the Server",id:"build-the-server",level:2},{value:"Configure the build",id:"configure-the-build",level:2},{value:"Compile",id:"compile",level:2},{value:"Starting MariaDB after build",id:"starting-mariadb-after-build",level:2}],d={toc:c};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-the-source-code"},"Get the source code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Created a directory for my Project\nmkdir mariaDB\ncd mariaDB\n\nmariaDB $ git clone git@github.com:arun-esh/mariaDBServer.git\nmariaDB $ mv myDBServer server\n")),(0,a.kt)("h2",{id:"build-the-server"},"Build the Server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install build-essential libncurses5-dev gnutls-dev bison zlib1g-dev ccache libssl-dev\n\n# Get cmake\n# Downloaded under ~/\nwget https://github.com/Kitware/CMake/releases/download/v3.25.2/cmake-3.25.2.tar.gz\n\ncd cmake-3.25.2\n~/cmake-3.25.2 $ ./bootstrap\n~/cmake-3.25.2 $  make\n~/cmake-3.25.2 $  sudo make install\n\n")),(0,a.kt)("h2",{id:"configure-the-build"},"Configure the build"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mariaDB $ mkdir build-mariadb-server-debug\nmariaDB $ cd build-mariadb-server-debug\n\n# configure mariaDB by\nbuild-mariadb-server-debug $ cmake ../server -DCMAKE_BUILD_TYPE=Debug\n")),(0,a.kt)("h2",{id:"compile"},"Compile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"build-mariadb-server-debug $ cmake --build . --parallel 5\n")),(0,a.kt)("h2",{id:"starting-mariadb-after-build"},"Starting MariaDB after build"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-\xa0bash"},"# Create a directory \nmkdir data-dir\n\n# create ~/mariadb.cnf\n# The MariaDB server group\n\n[mariadb]\ndatadir           = ~/mariaDB/data-dir\n# path to source dir + sql/share\nlc_messages_dir   = source/sql/share\n\n\n\n# Now that you have created your own config file you can call it with flag `--defaults-file` while installing the system tables. To install the system tables call following from the build folder:\n./scripts/mariadb-install-db --srcdir=../server --defaults-file=~/mariadb.cnf\n\n# Run the DB Server\nsql/mariadbd --defaults-file=~/mariadb.cnf\n\n# Run client command line\nclient/mariadb\n\nCREATE TABLE property (\nId INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,\nTitle VARCHAR(255) NOT NULL,\nDescription VARCHAR(255) NOT NULL,\nPropertyType VARCHAR(255) NOT NULL,\nPrice INTEGER NOT NULL,\nNumber INTEGER NOT NULL,\nStreet VARCHAR(255) NOT NULL,\nPostal VARCHAR(255) NOT NULL\n);\n\nINSERT INTO property VALUES(1,'Property 1','This is very nice property near the Riverside drive.','House',200000,2323,'Property1Street','S9J2A3');\nINSERT INTO property VALUES(2,'Property 2','This is very nice property near the Riverside drive.','House',300000,2424,'Property2Street','R9J2A3');\nINSERT INTO property VALUES(3,'Property 3','This is very nice property near the Riverside drive.','Apartment',250000,2525,'Property3Street','P9J2A3');\nINSERT INTO property VALUES(4,'Property 4','This is very nice property near the Riverside drive.','House',200000,2626,'Property4Street','W9J2A3');\nINSERT INTO property VALUES(5,'Property 5','This is very nice property near the Riverside drive.','Apartment',450000,2121,'Property5Street','N9J2A3');\n\n\n\n\n")))}u.isMDXComponent=!0}}]);