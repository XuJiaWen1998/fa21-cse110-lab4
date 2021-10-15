1. **What is printed by line 9? If the code returns an error, explain why.**
    values added:  20
2. **What is printed by line 13? If the code returns an error, explain why.**
    final result:  20
3. **What is printed by line 9? If the code returns an error, explain why.**
   values added:  20
4. **What is printed by line 13? If the code returns an error, explain why.**
```
   Debugger attached.
Waiting for the debugger to disconnect...
c:\Users\jiawe\Desktop\CSE110\fa21-cse110-lab4\expose\javascript\part1-question3&4.js:11
    console.log('final result: ', result);
                                  ^

ReferenceError: result is not defined
    at sumValues (c:\Users\jiawe\Desktop\CSE110\fa21-cse110-lab4\expose\javascript\part1-question3&4.js:11:35)
    at Object.<anonymous> (c:\Users\jiawe\Desktop\CSE110\fa21-cse110-lab4\expose\javascript\part1-question3&4.js:14:1)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
    at internal/main/run_main_module.js:17:47
```
An error occurs in line 13, because result is defined such that the scope is within the if block, which means it can't be accessed outside the block

5. **What is printed by line 9? If the code returns an error, explain why.**
```
Uncaught TypeError: Assignment to constant variable.
```
An error occurs in line 9, because result is being reassigned which is not supported by the const type

6. **What is printed by line 13? If the code returns an error, explain why**
```
Uncaught TypeError: Assignment to constant variable.
```
An error occurs in line 13, because result is being reassigned which is not supported by the const type
