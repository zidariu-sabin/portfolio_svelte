---
date: 2025-5-6
title: Golang
---

## Golang

playground
- https://go.dev/play/

### Lifecyle functionality 
---
- panic()  stops the current function from proceeding and goes to the deferred functions

### File structure:
---
- go.mod file for dependencies(package.json)
	- In actual development, the module path will typically be the repository location where your source code will be kept. For example, the module path might be `github.com/mymodule`. If you plan to publish your module for others to use, the module path _must_ be a location from which Go tools can download your module. For more about naming a module with a module path, see [Managing dependencies](https://go.dev/doc/modules/managing-dependencies#naming_module).
- go.sum ( package-lock.json)
	- hashes of the packages

### usefull packages:
---
- flag
	- Description: 
		- flag package allows us to set flags that are variables that can be set when running a file through the command line
	- Methods 
		- IntVar() creates a variable
		- Parse() allows parsing through the commandline
- fmt
	- Description: 
		- fmt package is used for text formatting
	- Methods 

::codecard
```go [file.go]{2} meta-info=val
		- PrintF()
		- Println()
		- FprintF() // writes to specified writer parameter
		- SprintF() // returns written string
```
::
### usefull composables:
- chi
	- go router
		- chi.Mux = route handler

### Syntax
- func main()
- is made of packages and programs start running in main
- a name from a package is exported if it starts with a capital letter
- in a function with multiple declared parameters, symply writing return, all value of the parameters will be returned
- variables can be declard with var and const
	- if variable is attributed at creation, type can be omitted
	- in function scope, variables can be declared as  variables:=
- types:
::codecard
```go [file.go]{2} meta-info=val
	- bool
	- string
	- int  int8  int16  int32  int64
	- uint uint8 uint16 uint32 uint64 uintptr
	- byte // alias for uint8
	- rune // alias for int32
     // represents a Unicode code point
	- float32 float64
	- complex64 complex128
```
::
- bit shifting : "1<<64 - 1"
- if var = true {}
	- defining a variable withing an if statement with :+ will make it available in the else scope aswell
- "defer " statement
	- deferrs execution until other functions are done
	- multiple defered methods will be transfered in a stack structure
- array methods
	- array 1 = array2 [1:4] - scopre.slice from javascript, will copy elements of the array starting from index 1, but not including index 4
		- [1:4] will create a shallow copy of the elements from the initial array
- functions

::codecard
```go [file.go]{2} meta-info=val
- func (*receiver) functionName (parameter a, parameter b){}// will be called by object.functionName with paramaneters (a,b)

```
::
