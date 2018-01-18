### SLIKS-Alike Interactive Key Software Plus (SAIKS+)

Fork of SAIKS (http://www.galexander.org/saiks/acer.html)

#### V1
* Added most possible match by using plus sign (+) in dataset
* Switched to some basic Bootstrap HTML5 page
* Fixed table color height issue
* Fixed remove_mode

#### V2
* Bootstrap overhaul

Original README below this line

---

### SLIKS-Alike Interactive Key Software (SAIKS)

Derived from Stinger's Lightweight Interactive Key Software (SLIKS)
from http://stingersplace.com/SLIKS/ by Gerald F. Guala.

SAIKS is copyright (c) 2006 Greg Alexander, to be distributed under
the terms of GPLv2 (in COPYING), or the Apache License
(http://www.apache.org/licenses/LICENSE-2.0), at your discretion.

The idea is that you create a file like acer.js that contains your
dataset.  SAIKS uses the same format for this file as SLIKS does.
Then you copy acer.html to a new .html file and change it to load
your data.js instead.

You may also want to define the following values in your data.js file:

```
   var binary = false;
     ==> default, regular multiple states per characteristic mode
   var binary = true;
     ==> the states are just "Yes" and "No", so optimize for this

   var exclusive_mode = false;
     ==> allow selection of multiple states (inclusive or)
   var exclusive_mode = true;
     ==> default, only select one state per characteristic
```

Note that acer.js is directly cribbed from SLIKS (then modified
for testing).

There is one embrace-and-extend feature beyond SLIKS.
In SLIKS your taxon definition must match either one specific
characteristic ("1") or any of them ("?").  In SAIKS, you may
specify "23" to match characteristics 2 and 3 but not 1.  The cost
is that to use more than 9 possible selections for a characteristic,
you must use "A" for 10 (and "B" for 11, all the way to "Z" for 35),
because "10" would mean 1 or 0 instead.

SAIKS is tested on the following platforms:
* Firefox 1.5 for Mac -- no known problems
* MSIE 6.0 for Windows -- no known problems
* Safari 1.3.2 for Mac -- works, but is ever-so-slightly ugly
* MSIE 5.2 for Mac -- works, but is ugly due to wrong "height:100%"


TODO:
* make remove_mode work -- put taxa table elems in divs instead..
* make compute_taxa() faster, by keeping track of whether we are adding
  or subtracting a character, and only checking the ones from the previous
  taxa_flags[] that might have changed
* make compute_obviates() faster the same way??
* make load faster (!!!) - how??  use more cached values earlier??
* test on: Opera 9
