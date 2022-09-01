# react-native-android-log

[![npm][npm-image]](https://www.npmjs.com/package/react-native-android-log)
[![License][license-image]](LICENSE)

Easy and useful log methods for Android apps in debug or release mode, with minimal impact.

In my country (México), software developers are poorly paid, so I have had to look for another job to earn a living and I cannot dedicate more time to maintaining this and other repositories that over the years have never generated any money for me. If anyone is interested in maintaining this repository, I'd be happy to transfer it to them, along with the associated npm package. |
:---: |
En mi país (México), los desarrolladores de software somos pésimamente pagados, por lo que he tenido que buscar otro trabajo para ganarme la vida y no puedo dedicar más tiempo a mantener éste y otros repositorios que a través de los años nunca me generaron dinero. Si a alguien le interesa dar mantenimiento a este repositorio, con gusto se lo transferiré, así como el paquete de npm asociado. |

Works with RN 0.50+, Gradle plugin 3.1.x and Gradle 4.4 or later.

Default build is for `minSdkVersion` 21 and `targetSdkVersion` 27, but you can [configure](#sdk-version-settings) this.

**NOTE:**

In iOS, the default level is `SUPPRESS`, which disables the output. If you change it, `console.log` will be used.

## Install

1. Install the module from npm and link it:
    ```bash
    $ yarn add react-native-android-log
    $ react-native link react-native-android-log
    ```

2. Replace 'compile' with 'implementation' in your android/app/build.gradle. It must looks like:
    ```gradle
    implementation project(':react-native-android-log')
    ```

#### For VS Code users

Optional: You can add the tag used by Log to the `logCatArguments` properties in .vscode/launch.json

This example will include React Native warnings and errors, and all the messages from App in the "OUTPUT" panel:
```json
    ...
    {
      "name": "Debug Android",
      "program": "${workspaceRoot}/.vscode/launchReactNative.js",
      "type": "reactnative",
      "request": "launch",
      "platform": "android",
      "sourceMaps": true,
      "outDir": "${workspaceRoot}/.vscode/.react",
      "logCatArguments": [
        "*:S",
        "ReactNative:W",
        "ReactNativeJS:W",
        "App:V"
      ]
    },
```

#### SDK version Settings

Optional: In your android/build.gradle file, set the SDK versions that your app is using.

Example with the predefined values:
```groovy
ext {
    def buildToolsVersion  = '27.0.3'
    def minSdkVersion      = 16
    def compileSdkVersion  = 27
    def targetSdkVersion   = 27
}
```

## Usage

Log messages in your JavaScript files:

```js
import Log from 'react-native-android-log'

// Set the default priority level (optional)
Log.setLevel(__DEV__ ? Log.VERBOSE : Log.WARN)

...
Log.v('Verbose message')    // no output in release builds
Log.w('Debugging')

// debugging message with amother tag:
Log.d('Proc2', 'warning')
```

...and see the output in the console through `adb`:

```bash
$ adb logcat -s App:V Proc2:V
```

or in the OUPUT panel of VS Code, if you are using the React Native Tools extension.

## API

### Contstants

Numeric levels, from most to least verbosity:

Constant | Description
---------|------------
`VERBOSE` | Used by `Log.v`, outputs nothing unless you use `Log.setLevel(Log.VERBOSE)`
`DEBUG` | Priority constant for `Log.d`
`INFO` | Priority constant for `Log.i`
`WARN` | Priority constant for `Log.w`
`ERROR` | Priority constant for `Log.e`
`SUPPRESS` |  This is a special constant used to disable logging

### Methods

- `setTag(tag: string)`

    Sets the tag to use by the logging methods without a tag parameter.

    The predefined tag is "App".

- `setLevel(tag: string | null, level: number)`

    Allows you to change the logging level for a specific tag or, if you pass a null tag, the default level for all the tags.

    The predefined level is `DEBUG` for debug builds and `ERROR` for release builds.

- `getLevel(tag?: string | null)`

    Return the level for a specific tag.

    If tag is `null`, not specified, or does not have a specific level, this method return the default level for all the tags.

- `print(level: string, tag: string, msg: string)`
- `print(level: string, msg: string)`

    Base method for all the one-letter logging methods.

- `v (VERBOSE)`
- `d (DEBUG)`
- `i (INFO)`
- `w (WARN)`
- `e (ERROR)`

    The above methods are one-letter shortcuts to the `print` method with the corresponding priority level and can be invoked with or without the `tag` parameter:

    `method(tag: string, msg: string)`

    `method(msg: string)`

    If you omit the `tag`, the one specified with `setTag` will be used, or the predefined tag "App".

### License

MIT &copy; 2018 Alberto Martínez

[npm-image]:      https://img.shields.io/npm/v/react-native-android-log.svg
[license-image]:  https://img.shields.io/npm/l/express.svg
