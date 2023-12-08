# Assignment 4

10. What does the following scheme function do?

```lisp
( define (x lis)
  ( cond 
    ( ( null? lis ) 0 )
    ( ( not ( list? ( car lis ) ) )
      ( cond 
        ( ( eq? ( car lis ) #f ) ( x ( cdr lis ) ) )
        ( else ( + 1 ( x ( cdr lis ) ) ) )
      ) )
  ( else ( + ( x ( car lis ) )  ( x ( cdr lis ) ) ) )
  )) ; these brackets were probably cut off

```

**Reminder**
`CAR` takes a list parameter; <i>returns the first element of that list</i>
`CDR` takes a list parameter; <i>returns the list without its first element</i>
`LIST?` takes one parameter; <i>it returns #T if the parameter is a list; otherwise #F</i>
`EQ?` takes two symbolic atoms as parameters; <i>it returns #T if both parameters are atoms and the two are the same</i>

```lisp
( define (x lis) ; define a function called x that takes a lis as a parameter
  ( cond ; list predicates if true execute following expression
    ( ( null? lis ) 0 ) ; if lis is a empty list return 0

    ; if the first element in lis is not a list
    ( ( not ( list? ( car lis ) ) )
      ( cond 
        ; if the first element is false recursively call x without first element
        ( ( eq? ( car lis ) #f ) ( x ( cdr lis ) ) )
        ; else add one to recursive call to x
        ( else ( + 1 ( x ( cdr lis ) ) ) )
      ) )
  ; so if first element of lis is a list, call x on that list
  ; add result to result of calling x on the rest of the list
  ( else ( + ( x ( car lis ) )  ( x ( cdr lis ) ) ) )
  )) ; these brackets were probably cut off

```

> So it looks like the function `x` takes a list and counts the number of elements in that list 
> minus the elements that are simply false `#F`
> it also looks like the function can handle nested lists

5. Write a Scheme function that returns the number of zeros in a given simple list of numbers.
```lisp
(define (numOfZeros lis)
  (cond 
    ( ( null? lis ) 0 ) ; if lis is a empty list return 0
    
    ( ( not ( list? ( car lis ) ) )
      ( cond 
        ; if first element is not a 0 recursively call numOfZeros on remaining
        ( ( <> ( car lis ) 0 ) ( numOfZeros ( cdr lis ) ) )
        ; else add one to recursive call to numOfZeros
        ( else ( + 1 ( numOfZeros( cdr lis ) ) ) )
      ) )
    
    ; so if first element of lis is a list, call numOfZeros on that list
    ; add result to result of calling numOfZeros on the rest of the list
    ( else ( + ( numOfZeros( car lis ) )  ( numOfZeros( cdr lis ) ) ) )
  )
)
```

---

1. (10 points) Do problem 10 on page 675. *this is question 10 above??*
   Describe briefly what this function does
   For the following two function calls:
   what would each call return?

   ```scheme
   (x '(#f #f #t))        ; returns 1
   (x '((#t #f) (#t #t))) ; returns 3
   ```

2. (10 points) Do programming exercise 5 on page 676. *this is question 5 above??*

3. (10 points) Write the following statements in Prolog:
  <b>a.</b> If `X` is the father of `Y`, then `X` is an ancestor of `Y`

```prolog
father(X, Y).

ancestor(ANCESTOR, DESCENDANT) :- father(ANCESTOR, DESCENDANT)

QUERY: ancestor(X, Y).
```

  <b>b.</b> If `X` is the brother of `Y` and `Y` is the father of `Z`, then `X` is the uncle of `Z`

```prolog
brother(X, Y).
father(Y, Z).

uncle(UNCLE, NEPHEW) :- brother(UNCLE, BROTHER), father(BROTHER, NEPHEW).

QUERY: uncle(X, Y).
```