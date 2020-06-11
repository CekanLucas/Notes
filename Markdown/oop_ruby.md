<head>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="../boilerplate/color"/>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="../boilerplate/CSS.css"/>
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

 .ruby {
  color:FireBrick;
  font-weight:bolder;
}
.img{
  position:sticky;
  left:70%;
  top:1px;
  width: 30%
}
</style>
</head>    

# <span class="ruby">RUBY</span> OOP
## Object Orientated Programming 
 
 <img class=img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/198px-Ruby_logo.svg.png">

#### Tenets of OOP
<img src="https://d2aw5xe2jldque.cloudfront.net/books/ruby/images/class_instance_diagram.jpg" style="float:right">

- Encapsulation 
- Inheritance  
- Polymorphism

Objects are defined by Classes through *instantiation*

``` ruby 
class GoodDog #class defined
end 

# sparky is a object created as a intance of GoodDog class 
sparky = GoodDog.new 
```
# Modules

modules are another way to achieve polymorphism in Ruby. A **module** is a collection of behaviors that is usable in other classes via **mixins**. A module is "mixed in" to a class using the include method invocation. Let's say we wanted our `GoodDog class` to have a `speak method` but we have other classes that we want to use a `speak method` with too.

``` ruby 
module Speak # define speak method
  def speak(sound)
    puts sound
  end
end

class GoodDog
  include Speak
end

class HumanBeing
  include Speak
end

sparky = GoodDog.new
# both unique classes have the speak method 
sparky.speak("Arf!")  # => Arf!
bob = HumanBeing.new
bob.speak("Hello!")   # => Hello!
```

# States and Behaviours
**states** track attributes for *individual objects* 

**behaviours** are what objects are capable of doing

```ruby 
class GoodDog
  def initialize(name)
    @name = name
  end

  def get_name 
    @name
  end

    def set_name=(name)
    @name = name
  end

  def speak
    "#{@name} says arf!"
  end
end

sparky = GoodDog.new("Sparky")
sparky.speak #=> "#Sparky says arf!"
sparky.set_name = "Spartacus"
puts sparky.get_name

```

The `@` is called the <span class="Lime">instance variable</span> it is a variable that exists as long as the object instance exists and it is one of the ways we tie data to objects

If we call `sparky.name` we will get a error. We need to crate a method which returns the name variable `sparky.get_name`

If we want to change `sparky` `name` then we need to use a setter instead of a getter  

ecause these methods are so commonplace, Ruby has a built-in way to automatically create these getter and setter methods for us, using the `attr_accessor` method. Check out this refactoring of the code from above.

```ruby 
class GoodDog
  attr_accessor :name #takes symbol as argument
  attr_reader   :name #if you only want getter
  attr_writer   :name #if you only want setter
  # to track more states 
  attr_accessor :name, :height, :weight

  def initialize(name)
    @name = name
  end

  def speak
    "#{@name} says arf!"
    #if we remove the @ we would be calling the instance method rather than the variable
  end
end

sparky = GoodDog.new("Sparky")
puts sparky.speak
puts sparky.name            # => "Sparky"
sparky.name = "Spartacus"
puts sparky.name            # => "Spartacus"
```

# Class Methods and Class Variables 
```ruby 
# prepend method with self to make class method
def self.what_am_i
  "I'm a GoodDog class!"
end
GoodDog.what_am_i #=> I'am a GoodDog class!

# to create class variables use @@
# for instance variables use @ 
@@number_of_dogs = 0
```

# Inheritance

```ruby
class GoodDog < Animal #GoodDog is inheriting from Animal class
  def speak
    super + " from GoodDog class"
  end
end
```
`super` allows us to call methods up the inheritance hierarchy When you call `super` from within a method, it will search the inheritance hierarchy for a method by the same name and then invoke it
