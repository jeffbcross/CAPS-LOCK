# CAPS-LOCK

THIS MODULE TURNS ON AND OFF CAPS LOCK IN YOUR JAVASCRIPT PROGRAM.

# EXAMPLES

## LOG

``` js
require('caps-lock').ENGAGE();

console.log('beep boop');
```

***

```
BEEP BOOP
```

## ON/OFF

YOU CAN TURN CAPS LOCK OFF TOO BUT YOU SHOULD ONLY DO THAT SO YOU CAN TURN IT
ON.

``` js
var CAPSLOCK = require('caps-lock');
CAPSLOCK.ENGAGE();

console.log('you had better believe that caps lock is fucking engaged');

CAPSLOCK.DISENGAGE();

console.log('what is this lowercase noise');
```

***

```
YOU HAD BETTER BELIEVE THAT CAPS LOCK IS FUCKING ENGAGED
what is this lowercase noise
```

## HTTP SERVER

``` js
require('caps-lock').ENGAGE();

var http = require('http');
var server = http.createServer(function (req, res) {
    res.end('beep boop: ' + req.url + '\n');
});
server.listen(8001);
```

***

```
$ curl localhost:8001/abcdef
BEEP BOOP: /ABCDEF
```

# INSTALL

WITH [NPM](HTTP://NPMJS.ORG) DO:

```
npm install caps-lock
```

# LICENSE

MIT
