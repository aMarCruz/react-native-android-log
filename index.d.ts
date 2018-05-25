declare module "react-native-android-log" {

  const Log: {

    readonly VERBOSE: number,
    readonly DEBUG: number,
    readonly INFO: number,
    readonly WARN: number,
    readonly ERROR: number,
    readonly ASSERT: number,

    /**
     * SUPPRESS is a special constant that can be used to turn off logging.
     * This level is initialized to integer maximum value.
     */
    readonly SUPPRESS: number,

    /**
     * Sets the tag to use by the logging methods without a tag parameter.
     * The predefined tag is "App".
     * @param tag Default tag
     */
    setTag(tag: string): void;

    /**
     * Allows you to change the logging level for a specific tag or, if you pass
     * a null tag, the default level for all the tags.
     * @param tag The specific tag, or `null` to set the default level.
     * @param level The desired level, either VERBOSE, DEBUG, INFO, WARN, ERROR, ASSERT, or SUPPRESS.
     */
    setLevel(tag: string | null, level: number): void;

    /**
     * Return the level for a specific tag.
     * If tag is `null`, not specified, or does not have a specific level,
     * this method return the default level for all the tags.
     * @param tag Tag name or `null`.
     * @returns Level
     */
    getLevel(tag?: string | null): number;

    /**
     * Send a `VERBOSE` log message.
     * @param tag Used to identify the source of a log message.  It usually identifies
     *        the class or activity where the log call occurs.
     * @param msg The message you would like logged.
     */
    v(msg: string): void,
    v(tag: string, msg: string): void,

    /**
     * Send a `DEBUG` log message.
     * @param tag Used to identify the source of a log message.  It usually identifies
     *        the class or activity where the log call occurs.
     * @param msg The message you would like logged.
     */
    d(msg: string): void,
    d(tag: string, msg: string): void,

    /**
     * Send an `INFO` log message.
     * @param tag Used to identify the source of a log message.  It usually identifies
     *        the class or activity where the log call occurs.
     * @param msg The message you would like logged.
     */
    i(msg: string): void,
    i(tag: string, msg: string): void,

    /**
     * Send a `WARN` log message.
     * @param tag Used to identify the source of a log message.  It usually identifies
     *        the class or activity where the log call occurs.
     * @param msg The message you would like logged.
     */
    w(msg: string): void,
    w(tag: string, msg: string): void,

    /**
     * Send an `ERROR` log message.
     * @param tag Used to identify the source of a log message.  It usually identifies
     *        the class or activity where the log call occurs.
     * @param msg The message you would like logged.
     */
    e(msg: string): void,
    e(tag: string, msg: string): void,

    /**
     * Base method for all the one-letter logging methods.
     * @param level
     * @param tag Used to identify the source of a log message.  It usually identifies
     *        the class or activity where the log call occurs.
     * @param msg The message you would like logged.
     */
    print(level: number, msg: string): void;
    print(level: number, tag: string, msg: string): void;
  }

  export default Log;
}
