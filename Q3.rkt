#lang racket

;Q3.1
;
;
;
(define vowels '(a e i o u))
; Signature: aux-syllables(newlist x)
; Type: [List(String) Number -> Number)]
; Purpose: it's an auxiliary method which takes a list and a key. 
; Pre-conditions: List is a list of letters and a number
; Tests: (count-syllables '(s o a r i n g)) -> 2
(define aux-syllables
  (lambda(newlist x)
    (if (empty? newlist)
        0
        (if(member (car newlist) vowels)
          (if(equal? x 1)
             (aux-syllables (cdr newlist) 1)
          (+ 1 (aux-syllables (cdr newlist) 1)))
    (aux-syllables (cdr newlist) 0)))))

; Signature: count-syllables(list)
; Type: [List(String) -> Number)]
; Purpose: Return the number of vowels, except that a group of consecutive vowels counts as one. .
; Pre-conditions: List is a list of letters
; Tests: (count-syllables '(s o a r i n g)) -> 2
;        (count-syllables '(o a s h i r o)) -> 3
;        (count-syllables '(a u)) -> 1 
(define count-syllables
  (lambda (list)
    (if(empty? list)
      0
     (aux-syllables list 0))))

; -------------------------------------------------------------Test of Q3.1--------------------------------------------------------------------------

(define count-syllables-test
  (lambda()
    ;1
    (if (equal? 2 (count-syllables '(s o a r i n g)))
        (display "Test 1 is OK")
        (display "Test 1 FAILED"))
        (newline)
    ;2
    (if (equal? 3 (count-syllables '(o a s h i r o)))
        (display "Test 2 is OK")
        (display "Test 2 FAILED"))
        (newline)
    ;3
    (if (equal? 1 (count-syllables '(a u)))
        (display "Test 3 is OK")
        (display "Test 3 FAILED"))
        (newline)
    ;4
    (if (equal? 0 (count-syllables '()))
        (display "Test 4 is OK")
        (display "Test 4 FAILED"))
        (newline)
    ;5
    (if (equal? 3 (count-syllables '(a a a u i s h i r e)))
        (display "Test 5 is OK")
        (display "Test 5 FAILED"))
        (newline)

    ;6
    (if (equal? 0 (count-syllables '(s h n r)))
        (display "Test 6 is OK")
        (display "Test 6 FAILED"))
        (newline)))

    
; ---------------------------------------------------------------------------------------------------------------------------------------------------

;Q3.2
;
;
;
; Signature: count-syllables(list comp)
; Type: [List(Number) procedure -> Boolean)]
; Purpose: Returns true is the given list is sorted according the comperator.
; Pre-conditions: List of numbers and a numeric procedure
; Tests: (sorted? '(1 3 5) <) -> #t
;        (sorted? '() <) -> #t
;        (sorted? '(10 8 2) =) -> #f
(define sorted?
  (lambda(list comp)
    (if (empty? list)
        #t
     (if (empty? (cdr list))
         #t
    (if(comp (car list) (cadr list))
       (sorted? (cdr list) comp)
       #f)))))

; ---------------------------------------------------------------------------------------------------------------------------------------------------


;Q3.3
;
;
;
; Signature: merge(listA listB)
; Type: [List(Number) List(Number) -> List(Number)]
; Purpose: Returns new list of numbers containing all numbers from listA and listB in increasing order .
; Pre-conditions: listA and listB should be sorted in increasing order
; Tests: (merge '(1 3 8) '(2 5 6)) -> '(1 2 3 5 6 8)
;        (merge '() '()) -> '()
;        (merge '(0 2 8 9 18) '(9 10 22 40)) -> '(0 2 8 9 10 18 22 40) 
(define merge
  (lambda(listA listB)
    (if (sorted? listA <)
        (if(sorted? listB <)
           (cond((empty? listA) listB)
                ((empty? listB) listA)
                ((< (car listA) (car listB))
                 (cons (car listA) (merge (cdr listA) listB)))
                ((= (car listA) (car listB))
                 (merge (cdr listA) listB))
                (else (cons (car listB) (merge listA (cdr listB)))))
        (error "pre condition of the second list does not match"))
        (error "pre condition of the first list does not match"))))


; -------------------------------------------------------------Test of Q3.3--------------------------------------------------------------------------

(define merge-test
  (lambda()
    ;1
    (if (equal? '(1 2 3 5 6 8) (merge '(1 3 8) '(2 5 6)))
        (display "Test 1 is OK")
        (display "Test 1 FAILED"))
        (newline)

    ;2
    (if (equal? '() (merge '() '()))
        (display "Test 3 is OK")
        (display "Test 3 FAILED"))
        (newline)

    ;3
    (if (equal? '(0 2 8 9 10 18 22 40) (merge '(0 2 8 9 18) '(9 10 22 40)))
        (display "Test 5 is OK")
        (display "Test 5 FAILED"))
        (newline)))

; ---------------------------------------------------------------------------------------------------------------------------------------------------

;Q3.4
;
;
;
; Signature: remove-adjacent-duplicates(list)
; Type: [List(any) -> List(any)]
; Purpose: Returns as value the same list with any sequence of repeated elements reduced to a single element .
; Pre-conditions: 
; Tests: (remove-adjacent-duplicates '(y a b b a d a b b a d o o)) -> '(y a b a d a b a d o)
;        (remove-adjacent-duplicates '(yeah yeah yeah)) -> '(yeah)
;        (remove-adjacent-duplicates '(shir)) -> '(shir)
(define remove-adjacent-duplicates
  (lambda(list)
    (if (empty? list)
        list
    (if (empty? (cdr list))
        list        
    (if (equal? (car list) (cadr list))
         (remove-adjacent-duplicates (cdr list))
        (cons (car list) (remove-adjacent-duplicates (cdr list))))))))

; -------------------------------------------------------------Test of Q3.4--------------------------------------------------------------------------

(define remove-adjacent-duplicates-test
  (lambda()
    ;1
    (if (equal? '(y a b a d a b a d o) (remove-adjacent-duplicates  '(y a b b a d a b b a d o o)))
        (display "Test 1 is OK")
        (display "Test 1 FAILED"))
        (newline)
    ;2
    (if (equal? '(yeah) (remove-adjacent-duplicates '(yeah yeah yeah)))
        (display "Test 2 is OK")
        (display "Test 2 FAILED"))
        (newline)
    ;3
    (if (equal? '() (remove-adjacent-duplicates '()))
        (display "Test 3 is OK")
        (display "Test 3 FAILED"))
        (newline)
    ;4
    (if (equal?  '(shir) (remove-adjacent-duplicates '(shir)))
        (display "Test 4 is OK")
        (display "Test 4 FAILED"))
        (newline)
    ;5
    (if (equal?  '(a b d c e f g) (remove-adjacent-duplicates '(a a b b d c e e e e f f g g g g g)))
        (display "Test 5 is OK")
        (display "Test 5 FAILED"))
        (newline)))

; ---------------------------------------------------------------------------------------------------------------------------------------------------