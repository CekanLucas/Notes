# Types of Relationships

## Diagraming Relationships
``` mermaid
classDiagram
direction RL 
  
BaseClass <|-- SubClass : <strong>Implements</strong> <hr> Inheritance Relationship
interface <|.. SubClass : <strong>Realization</strong> <hr> Inheritance Relationship 

class interface["I"]{
<<Interface>>
 +I_DATA_FIELDS: Type$
 +IMethods() Type*
}

class BaseClass {
  BaseClassDatafield: Type
  BaseClassMethod() ReturnType
}

class SubClass["SubClass<code>class SubClass extends BaseClass implements I</code>"] {
 +I_DATA_FIELDS: Type$
  BaseClassDatafields: Type
  SubClassDatafields: Type
 +IMethods()* ReturnType
  BaseClassMethods() ReturnType
  SubClassMethods() ReturnType
}

Address"0..*"  --* Person: <strong>Composition</strong> <hr><i>has-a</i> relation
Car"1"  --o Person: <strong>Aggregation</strong> <hr><i>has-a</i> relation

class Address {
  Each person has exactly one address
}
class Car {
  A person can own zero or more cars
}
class Person {
  address: Address
  cars: Car[]
}

classA --> classB : <strong>Association</strong><hr>Any form of interaction
classA -- classB : Also can represent a <strong>Association</strong

Car"1" ..> Engine : <strong>Dependency</strong>
Car"1" .. Engine : Also can represent a <strong>Dependency</strong>

class Car {
  engine : Engine
  (can't turn on without engine)
  turnOn() : void
}

Room <--> Occupant : Two Way Relation <strong>Association</strong>
Chapter *--* Book : Two Way Relation <strong>Composition</strong>
Account o--o Customer : Two Way Relation <strong>Aggregation</strong>
MathLibrary <..> Calculator : Two Way Relation <strong>Dependency</strong>
```


## Inheritance/Implementation

### Short Description
A class that is **derived** from another class (**base class**) is said to be an **inheritance** or **implementation**
### Detailed Description
- Inheritance or Implementation refers to the capability of a class to inherit properties and characteristics of another class, which serves as its base
- The child/subclass can access all members (fields, methods, inner classes) inherited from its parent/superclass while adding new features specific to itself
###  Java Example 

```java
public abstract class Vehicle {
    protected int speed;

    public void setSpeed(int s) {
        speed = s;
    }
}

public interface Rideable {
  public void ride();
}

public final Class Car extends Vehicle implements Rideable{
   private String model;

   public Car(String model){
     this.model=model;
   }

   @Override
   public void ride() {
      System.out.println("Riding in "+model+" at "+speed+" mph");
  }
}
```
## Realization

### Short Description
A realization relationship *connects interfaces* to the *classes that implement them*

### Detailed Description
It represents a contract of services provided by one or more classes to another class which realizes its interfaces

It is used when we want to show that some class implements certain interface(s) in the code.

###  Java Example 
```java
public interface InterfaceOne{
  //InterfaceOne methods
}

public Class MyClass implements InterfaceOne{
  //Class definition here
}
```

## Composition

### Short Description
**Composition** is a strong form of **Aggregation** where parts are exclusive to a whole object and cannot exist independently
### Detailed Description
Composition represents *part-of-a* relationship between two objects in which one object contains other dependent objects as parts such that *when owner object dies so does the contained objects* too.
###  Java Example 
```java
public Class Engine {
  //Engine code here
}

public Class Car {
  private Engine engine; //composition

  public Car(Engine engine){
    this.engine=engine; 
  }
}
```

## Aggregation

### Short description: 
> Aggregation differs from composition in that it *does not imply ownership*

### Detailed description
It represents *has-a relationship* between two entities where entity `B` may exist without Entity `A`

> The contained object is not exclusively owned by the owner object\
> and can be shared with other objects.

###  Java Example 

```java
public Class Wheel{
  //Wheel code here
}

public Class Car{
  private List<Wheel> wheels; //aggregation
  
  public Car(List<Wheel> wheels){
      this.wheels=wheels;
  } 
}
```

## Association

### Short Description
An association defines a relationship between two or more classes where the objects have their *independent existence*

### Detailed Description
It describes how different entities interact with each other, providing meaningful information about their dependencies and interactions

###  Java Example
```java
public class Student {
  private String name;
  private int id;

  public void setName(String name) {
    this.name = name;
  }

  public void setId(int id) {
    this.id = id;
  }
}

class School {
  Set<Student> students;

  School() {
      students = new HashSet<>();
  }

  void addStudent(Student student) {
      students.add(student);
      System.out.println(student.getName() + " got admitted to school");
  }
}
```

## Dependency

### Short Description
> A dependency is when one class depends on another class but does not own it

### Detailed Description
In simple words, if changes made in one component may affect others then we say there exists dependency between those components

> The dependent object is only used temporarily within method scope and is not stored as an instance variable

###  Java Example 
```java
public class Car {
  private Engine engine;

  public void start() {
      this.engine = new Engine();
      engine.turnOn();
  }
}

class Engine {
  public void turnOn() {
      System.out.println("Engine turned on");
  }
}
```
## Link (Solid Line) or (Dashed Line)

### Short Description
These do not represents a connection without any specific semantic meaning in UML but in Mermaid they represent their associated relation when no direction need be specified

### Detailed description
Solid lines are used to represent an unspecified relationship between classes in UML diagrams that do not fall into any of the specific categories described above.

But in mermaid these represent without specify direction of relation:
 - Solid line represents **Association**
 - Dashed line represents **Dependency**

### Two Way Relation

### Short Description
A two-way relation shows that both classes have a bidirectional relation with each other

### Detailed Description
In Java only **associations**, **dependency**, **composition** and **aggregation** can have bi-directionality as **implementation** and **realization** type relations can only be unidirectional however there are languages like C++ where these are allowed

> You can also use solid or dashed links since those don't specify direction
