/*
 * Copyright 2018 Alberto Martínez
 *
 * Licensed under the MIT License; you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 *
 * https://github.com/aMarCruz/react-native-android-log/blob/master/LICENSE
 */
package com.github.amarcruz.rnlog;

import android.util.Log;

import com.facebook.react.BuildConfig;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

class RNLogModule extends ReactContextBaseJavaModule {
    private static final String TAG = "RNLog";

    RNLogModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return TAG;
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();

        constants.put("VERBOSE", Log.VERBOSE);
        constants.put("DEBUG", Log.DEBUG);
        constants.put("INFO", Log.INFO);
        constants.put("WARN", Log.WARN);
        constants.put("ERROR", Log.ERROR);
        constants.put("ASSERT", Log.ASSERT);

        return constants;
    }

    /**
     * What a Terrible Failure: Report a condition that should never happen.
     * The error will always be logged at level ASSERT with the call stack.
     * Depending on system configuration, a report may be added to the
     * {@link android.os.DropBoxManager} and/or the process may be terminated
     * immediately with an error dialog.
     * @param tag Used to identify the source of a log message.
     * @param msg The message you would like logged.
     */
    @ReactMethod
    public void wtf(final String tag, final String msg) {
        android.util.Log.wtf(tag, msg);
    }

    /**
     * Checks to see whether or not a log for the specified tag is loggable at the specified level
     * and if so, outputs the message.
     *
     *  The default level of any tag is set to ALL. This means that all levels are going to be logged.
     *  You can change the log level of any tag by using:
     *      'setLevel(&lt;TAG&gt;, &lt;LEVEL&gt;)'
     *  Where level is either VERBOSE, DEBUG, INFO, WARN, ERROR, ASSERT, or SUPPRESS. SUPPRESS will
     *  turn off all logging for your tag.
     *
     * @param tag The tag.
     * @param level The level of this message.
     * @param msg Message to output.
     */
    @ReactMethod
    public void print(final int level, final String tag, final String msg) {
        android.util.Log.println(level, tag, msg);
    }
}
