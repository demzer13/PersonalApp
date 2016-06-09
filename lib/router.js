Router.configure({
  layoutTemplate:'layout',
});
Router.route('/',{name:"home"});
Router.route('/comments',{name:"comments"});
Router.route('/about',{name:"about"});
