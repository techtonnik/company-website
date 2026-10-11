---
title: "Node.js - latest versions and features"
description: "See what's new in everyone's favorite runtime!"
pubDate: "2023-05-11"
author: "David Čuturilo"
readTime: 5
hero: "/blog/node-js-latest-versions-and-features-c3190b108b7e42df939fb28476075936mv2.webp"
---

Node.js is a popular JavaScript runtime that allows developers to build scalable and high-performance applications. With its frequent updates, Node.js keeps improving it’s performance and features. The latest releases, version **16**, **18**, and **20**, brought many exciting features for developers to explore. In this blog, we’ll take a look at some of the new features and why it’s essential to keep up with Node.js upgrades.

We will start with Node.js version 16 and the features that it brought up.

## Node.js Version 16

Node.js 16 is an LTS (Long Term Support) release, which means it will receive updates and security fixes for the next three years. Some of the notable features include:

### V8 version 9.0

Node.js version 16 includes the latest version of V8 (version 9.0), which brings several performance improvements and new language features such as optional chaining and nullish coalescing.

_Example before Node.js 16:_

```
    // Without optional chaining operator
    const user = {
    name: 'Example Name',
    address: {
        city: 'Belgrade',
        state: 'Serbia'
    }
    };

    const state = user.address && user.address.state;
    console.log(state); // Output: "Serbia"
```

_With Node.js 16:_

```
    // With optional chaining operator
    const user = {
    name: 'Example Name',
    address: {
        city: 'Belgrade',
        state: 'Serbia'
    }
    };

    const state = user.address?.state;
    console.log(state); // Output: "Serbia"
```

Another example is presented through calculation exponents.

```
    // Before Node.js 16:
    const result = Math.pow(3, 2); // 9

    // With Node.js 16, you can use code the '**' operator directly:*

    const result = 3 ** 2; // 9
```

### Web Crypto API

_Before Node.js 16_, if you wanted to perform cryptographic operations, you had to use third-party libraries like OpenSSL or CryptoJS. For example, if you wanted to encrypt a message with AES encryption, you would have to use a library like CryptoJS:

```
    // Without built-in support for cryptographic operations
    const crypto = require('crypto');

    function generateKey() {
    const key = crypto.randomBytes(32).toString('hex');
    console.log(key);
    }

    generateKey();
```

_With Node.js 16_, you can use the Web Crypto API directly:

```
    // With built-in support for cryptographic operations
    const crypto = require('crypto');

    async function generateKey() {
    const algorithm = 'AES-GCM';
    const length = 256;
    const key = await crypto.generateKey(algorithm, {
        length,
    });
    console.log(key);
    }

    generateKey();
```

## Node.js Version 18

Node.js version 18 was released in April 2022 and comes with several new features and improvements. Two notable features are:

### Async local storage

Async local storage is a new API that allows developers to store data that is scoped to a particular execution context, such as an HTTP request. This makes it easy to share data between functions that are called in the same execution context.

_Before Node.js 18_, if you wanted to pass data between functions in an asynchronous call chain, you had to use callback arguments or global variables. For example, if you wanted to pass a user ID from one asynchronous function to another, you would have to use a global variable:

```
    let userId;

    function processRequest(request, callback) {
        userId = getUserIdFromRequest(request);
        processRequestData(request.data, callback);
    }

    function processRequestData(data, callback) {
        // do something with data and userId
        callback();
    }

    function getUserIdFromRequest(request) {
        return request.headers['x-user-id'];
    }
```

_With Node.js 18_, you can use Async Local Storage to pass data between functions:

```
    const { AsyncLocalStorage } = require('async_hooks');

    const asyncLocalStorage = new AsyncLocalStorage();

    async function processRequest(request) {
    asyncLocalStorage.run(request, async () => {
        const userId = getUserIdFromRequest(request);
        await processRequestData(request.data, userId);
    });
    }

    async function processRequestData(data, userId) {
        // do something with data and userId
    }
```

### Stable Timers API

_Before Node.js 18_, the built-in timers in Node.js had an issue with precision that could cause them to fire later than expected. This was particularly problematic for applications that relied on precise timing, such as audio or video processing. _With Node.js 18_, the Stable Timers API was introduced, which provides timers with guaranteed accuracy and consistent behavior across different platforms. This means that you can rely on timers to fire exactly when you expect them to, without any variation.

```
    const { setStableTimeout } = require('timers');

    setStableTimeout(() => {
        console.log('Timeout fired!');
    }, 1000);
```

This code will fire the callback function exactly 1 second after the timer is started, regardless of any external factors that may affect the timing, such as system load or clock drift. This can be particularly useful for real-time applications that require precise timing, such as multimedia or game development.

By upgrading to Node.js 18 and using the Stable Timers API, you can ensure that your applications are performing at their best and providing a seamless user experience.

## Node.js Version 20

Node.js 20 is a major release that’s expected to have Long-Term Support (LTS) in October 2024. It comes with several performance optimization and security-related improvements. Though still in development stages, the developers have hinted at major changes and improvements, which will undoubtedly make it worth the wait.

### Performance improvements

Node.js 20 has several performance improvements that make it faster and more efficient. The updates include faster startup times, better memory management, and improved garbage collection.

_Before Node.js 20_, if you wanted to debug a performance issue or a crash in your application, you had to use external tools like the Chrome DevTools or the Node.js Inspector. This could be time-consuming and difficult to set up.

_With Node.js 20_, you can use the new Diagnostic Reports feature to automatically generate diagnostic reports that contain information about your application’s performance, memory usage, and other metrics. For example, you can generate a report like this:

```
    const { generateReport } = require('diagnostic_channel');

    generateReport('myapp', 'performance').then((report) => {
        console.log(report);
    });
```

### Promise.any()

_Before Node.js 20_, if you wanted to wait for any Promise in an array to resolve or reject, you had to use external libraries like Bluebird or Q. For example, if you had an array of Promises and you wanted to wait for the first one to resolve, you would have to use Bluebird like this:

```
    const Promise = require('bluebird');

    const promises = [promise1, promise2, promise3];

    Promise.any(promises).then((result) => {
        console.log(result);
    });
```

_With Node.js 20_, you can use the new Promise.any() method:

```
    const promises = [promise1, promise2, promise3];

    Promise.any(promises).then((result) => {
        console.log(result);
    });
```

This method returns a Promise that is resolved with the value of the first resolved Promise in the array. If all of the Promises are rejected, the method is rejected with an AggregateError containing all of the rejection reasons. The Promise.any() method provides a more concise and straightforward way to handle multiple Promises and wait for the first one to resolve or reject. This can be particularly useful in situations where you need to fetch data from multiple sources and want to use the fastest one that responds.

By upgrading to Node.js 20 and using the Promise.any() method, you can simplify your code and make it more efficient, without relying on external libraries.

To install the latest Node.js version, we can use the following command in terminal:

```
    nvm install 20.0.0
```

This command will download and install the latest stable version of Node.js 20 on your machine.

In today’s fast-paced world of programming and technology, it’s essential to stay up-to-date with the latest trends and innovations to ensure that you’re not left behind. Node.js versions **16**, **18**, and **20** have brought exciting new features that can revolutionize the way you approach programming, and it’s up to you to explore and implement them in your work. By keeping up with the latest Node.js versions and the trends within programming, you can stay relevant and competitive in the industry. So, what are you waiting for? Take the time to experiment with these newest versions of Node.js and see how they can help you innovate and grow your skills as a developer. Stay current with the latest advancements in Node.js and continue the journey!

If you want to find out more about all features that versions 16, 18 and 20 bring, check out these useful links:

“What’s new in Node.js 16: [https://www.howtogeek.com/devops/whats-new-in-node-js-16/](https://www.howtogeek.com/devops/whats-new-in-node-js-16/)

The Changelog podcast episode on Node.js 18: [https://changelog.com/podcast/477](https://changelog.com/podcast/477)

Node.js documentation: [https://nodejs.org/docs/latest-v20.x/api/](https://nodejs.org/docs/latest-v20.x/api/)
