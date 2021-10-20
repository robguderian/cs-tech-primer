Brute Force Challenge
========================

Now that you've learned how to add some control logic to your
programs, it's time to test your skills by running a brute-force
attack against a server!

The Goal
------------

You are given the file `Server.class`. This is a pre-compiled java
program that you will run on your computer, and will act as the
server you are trying to break into.

You will write another program that will attempt to guess the 4
character passcode of this server (which will be different every
time it is run!).

Before You Start
--------------------

* Read up on what ASCII is (LINK TO THAT ONCE DONE)
* Ensure you are using Java version 8 or greater (Major version 52 or greater).

There are 2 pre-compiled java classes in this challenge, both were
compiled on the UManitoba rodents machines. If you use an older
java version, you will run into annoying errors!

How to Proceed
------------------

You are given 2 starting files, `Skeleton.java` and `Client.class`.
The `Client.class` file is more pre-compiled java that will run
behind the scenes of your final program.

`Skeleton.java` contains a few lines of code to get you started,
and the 2 special lines that will allow you to communicate with the
Server program. These 2 special lines of code are a bit beyond what
we've covered...

1. `Client client = new Client();` is setting up an *object*
   thatyou will use to interact with the server. Leave this line at
   the beginning of your program.
2. `boolean response = client.sendMessage(c1, c2, c3, c4);` is
   sending a password to the server, then storing the result of the
   password in the boolean variable `response`.

If `response` is true, that means the password you sent was correct!

If `response` is false, then the password you sent was incorrect.

`c1, c2, c3, c4` are all `char` type variables. You will need to
modify these variables to send different passwords to the server.
For example...

```java
Client client = new Client();
c1 = 'l';
c2 = '3';
c3 = '3';
c4 = 't';
boolean response = client.sendMessage(c1, c2, c3, c4);
```

The above would send the password `l33t` to the server and store
the response in `response`.

Password Details
--------------------

The password is a 4 ASCII-character code, where each character is
in the range [32, 126] inclusive. We also know the following...

* The first two characters (c1 and c2) are both numbers. (But still
  type `char`!!)
* The last two characters (c3 and c4) cannot be the same character.
  If you send a password that violates this rule, the server will
  terminate.
* The last character (c4) has an *even **ASCII value***
* If you send more than 446500 attempts, the server will finally
  decide you are maybe being malicious and terminate. (The server
  is indeed rather lenient)

Output
----------

For this challenge, you should not have to print any output. All
needed output will be handled for you every time you send the
server a message (using the `client.sendMessage` line)

Running Your Code
---------------------

Once you've written a program you think will work, follow these
steps...

1. If you are not using an IDE, open a terminal (Powershell on
   Windows or terminal-app on Mac)
2. Run the Server program (`java Server`)
3. If you're not using an IDE, open a second terminal
4. Compile and run your program (`javac YOUR_PROGRAM.java` then
   `java YOUR_PROGRAM`)
5. Your program should now be talking to the Server running in the
   first terminal!
6. Both the server and your program will terminate once one of the
   following conditions are met...
   * Your program finishes running
   * The server detects a break-in attempt

If you are succesful, a special message will be printed in the
second terminal.

Note that the Server program will need to be re-run every time you
want to run your program.

Good luck!!
