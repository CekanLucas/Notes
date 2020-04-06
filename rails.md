<head>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="./color.css"/>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="./CSS.css"/>
  <link 
      href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
      rel="stylesheet">

<style> 
html > body{
  background-color: #000;
}

html>body, p {
  font-family: ubuntu;
  font-size: 1.1em;
  text-shadow:none;
}
h2>code, p>code, li>code, div>code {
    background-color: #09A;
    border-radius: 7px;
    box-shadow: 
      1px 1px 1px #000,
      -1px -1px 1px #FFF,
      -1px 1px 2px #000,
      1px -1px 2px #000;
    color: #00f;
    margin: 5px;
    padding: 2px;
    font-family: 'Fira Mono', monospace;
    text-shadow:none;
    font-size:0.8em
}
body ::selection {
  /*highlighting*/
  background: transparent;
  text-shadow: 
    1px  0px 1px ,
    0px  1px 1px ,
    -1px  0px 1px ,
    0px -1px 1px ,
    0px  1px black ,
    1px  0px black ,
    -1px  0px black ,
    0px -1px black ;
  text-outline: black;  
}
 .ruby {
  color:FireBrick;
  font-weight:bolder;
}
.img{
  position:sticky;
  left:70%;
  top:1px;
  width: 30%;
  float:right
}
.controller{
  font-weight: bold;
  color:blueviolet;
}
.view{
  font-weight: bold;
  color:green;
}
.route{
  color: steelblue;
}
.request{
  color:violet;
}
</style>
</head>    

# <span class="ruby">RUBY ON RAILS</span> 


 <img class=img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/411px-Ruby_On_Rails_Logo.svg.png">

    $ rails new blog 
File/Folder |	Purpose
-- | --
app/ |	Contains the controllers, models, views, helpers, mailers and assets for your application. You'll focus on this folder for the remainder of this guide.
bin/ |	Contains the rails script that starts your app and can contain other scripts you use to setup, deploy or run your application.
config/ |	Configure your application's routes, database, and more. This is covered in more detail in Configuring Rails Applications.
config.ru |	Rack configuration for Rack based servers used to start the application.
db/ |	Contains your current database schema, as well as the database migrations.
Gemfile Gemfile.lock |	These files allow you to specify what gem dependencies are needed for your Rails application. These files are used by the Bundler gem. For more information about Bundler, see the Bundler website.
lib/ | 	Extended modules for your application.
log/ | 	Application log files.
public/ | The only folder seen by the world as-is. Contains static files and compiled assets.
Rakefile | This file locates and loads tasks that can be run from the command line. The task definitions are defined throughout the components of Rails. Rather than changing Rakefile, you should add your own tasks by adding files to the lib/tasks directory of your application.
README.rdoc |	This is a brief instruction manual for your application. You should edit this file to tell others what your application does, how to set it up, and so on.
test/ | 	Unit tests, fixtures, and other test apparatus. These are covered in Testing Rails Applications.
tmp/ | 	Temporary files (like cache, pid, and session files).
vendor/ | 	A place for all third-party code. In a typical Rails application this includes vendored gems.


# Model-View-Controller (MVC)

 You might have noticed that the standard Rails application structure (Figure 1.11) has an application directory called app/, which includes subdirectories called models, views, and controllers (among others). This is a hint that Rails follows the model-view-controller (MVC) architectural pattern, which enforces a separation between the data in the application (such as user information) and the code used to display it, which is a common way of structuring a graphical user interface (GUI).

When interacting with a Rails application, a browser sends a request, which is received by a webserver and passed on to a Rails controller, which is in charge of what to do next. In some cases, the controller will immediately render a view, which is a template that gets converted to HTML and sent back to the browser. More commonly for dynamic sites, the controller interacts with a model, which is a Ruby object that represents an element of the site (such as a user) and is in charge of communicating with the database. After invoking the model, the controller then renders the view and returns the complete web page to the browser as HTML.
mvc_schematic


<img src="https://softcover.s3.amazonaws.com/636/ruby_on_rails_tutorial_6th_edition/images/figures/mvc_schematic.png" style="width:40%">

<img src="https://softcover.s3.amazonaws.com/636/ruby_on_rails_tutorial_6th_edition/images/figures/mvc_detailed.png" style="width:59%">

Click [here](https://www.railstutorial.org/book/toy_app#sec-mvc_in_action) for detailed explanation

### Summary steps shown in figure

1. browser issues a request for the /users URL.
1. Rails routes /users to the index action in the Users controller.
1. index action asks the User model to retrieve all users (User.all).
1. User model pulls all the users from the database.
1. User model returns the list of users to the controller.
1. Controller captures the users in the @users variable, which is passed to the index view
1. view uses embedded Ruby to render the page as HTML.
1. Controller passes the HTML back to the browser


<pre>
  Model       => DB => ActiveRecord
  
  View        => ERB Templates (think EJS)
  
  Controller  => Project Manager
</pre>

### Routing

```rb
root to: 'product#index' # current syntax
get '/' => 'product#index' # old syntax
# very old syntax which is more verbose 
get '/' => { controller:'products', actions:'index' } 

```

### Templates 
We use ERB (Embedded RuBy)

```erb
<!-- current syntax -->
<%= render 'product_details',
    product: @product %>
<!-- previous syntax -->
<%= render :partial => 'product_details', 
    locals: { product: @product } %>
```


A <span class="controller">controller's</span> purpose is to receive specific <span class="request">requests</span> for the application. <span class="route">Routing</span> decides which <span class="controller">controller</span> receives which <span class="request">requests</span>. Often, there is more than one <span class="route">route</span> to each <span class="controller">controller</span>, and different <span class="route">routes</span> can be served by different actions. Each action's purpose is to collect information to provide it to a <span class="view">view</span>.

A <span class="view">view's</span> purpose is to display this information in a human readable format. An important distinction to make is that it is the <span class="controller">controller</span>, not the <span class="view">view</span>, where information is collected. The <span class="view">view</span> should just display that information. By default, <span class="view">view templates</span> are written in a language called <span class="Red">eRuby (Embedded Ruby)</span> which is processed by the <span class="request">request cycle</span> in <span class="Red">Rails</span> before being sent to the user.

# Active Record
## Relations and Lazy Evaluation

Using `User.find(1)` will return an unambiguous object – it’s going to find the user with ID = 1 and give it to you as a Ruby object. But this behavior is actually unusual. Most queries don’t actually return a Ruby object, they just fake it. For example:
``` ruby
  User.where(id: 1)
```
Might look like it returns an array that contains a serialized User object, like:
``` ruby
  [#<User id: 1, email: "foo@bar.com">]
```
But try running `User.where(id: 1).class` and you’ll see that it isn’t an `Array`, it’s actually an instance of `ActiveRecord::Relation`. Relations are actually just really good at looking like arrays but they’ve got more going on.

Active Record queries return relations to be lazy. There’s basically no reason to actually tell the database to execute a query until the very last possible minute. What if you never actually needed to use that query at all? What if you want to make it more complex before executing it? Relations give you that flexibility and make much more efficient use of your database’s valuable time.

Relations only get executed when it becomes absolutely necessary to know what’s inside them. So if your controller grabs 5 blog posts using @posts = Post.limit(5), that is really passing your view a relation. It’s only when the code in the view actually calls a method on @posts (like @posts.first.title) that the query will be run and the relation will get stored as a real Ruby object in memory.



## Database Migrations
#### Example
``` ruby
class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.string :image
      t.integer :price_cents
      t.integer :quantity

      t.timestamps null: false
    end
  end
end
```
**t** short hand for table t.--- means add column

      bin/rake db:migrate # run all migrations
      bin/rails g migration add_discount_cents_to_products
      rails g model User first_name:string last_name:string email:string 
      bin/rake db:rollback # rollback migration
**g** is shorthand for generate 

>**Note** if you have migrations pending Rails throws error
>**Note** rails generates *both* a migration and model file with the generate model command