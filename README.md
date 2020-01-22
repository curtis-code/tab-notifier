# Tab Notifier

<img src="https://img.shields.io/npm/v/tab-notifier.svg" alt="Travis CI Build Status" /> <img src="https://api.travis-ci.org/curtistimson/tab-notifier.svg?branch=master" /> [![Coverage Status](https://coveralls.io/repos/github/curtistimson/tab-notifier/badge.svg?branch=ci)](https://coveralls.io/github/curtistimson/tab-notifier?branch=ci)

## Usage

```
import TabNotifier from 'tab-notifier';
```

test ci

### `notify()`

Prefixes the document title with a number

```
TabNotifier.notify(); // prefixes title with (1)
TabNotifier.notify(1); // prefixes title with (1)
TabNotifier.notify(2); // prefixes title with (2)
```

### `notifyMessage()`

Updates the document title to a specific message and alternates every 1 second by default

```
TabNotifier.notifyMessage('New Message Received!');
```

Options:

```
TabNotifier.notifyMessage('New Message Received!', {
  intervalSpeed: 1000
});
```

### `reset()`

Resets the title back to the original document title

```
TabNotifier.reset();
```

## Development

```
npm start
```

## Build

```
npm run build
```
