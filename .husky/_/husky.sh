#!/bin/sh
# Internal script for husky
# Execute command in husky context

command_exists () {
  command -v "$1" >/dev/null 2>&1
}

# Windows 10, Git Bash and Yarn workaround
if command_exists winpty && test -t 1; then
  exec < /dev/tty
fi

if [ -z "$husky_skip_init" ]; then
  debug () {
    [ "$HUSKY_DEBUG" = "1" ] && echo "husky (debug) - $1"
  }

  readonly hook_name="$(basename "$0")"
  debug "starting $hook_name..."

  if [ "$HUSKY" = "0" ]; then
    debug "HUSKY env variable is set to 0, skipping hook"
    exit 0
  fi

  if [ -f ~/.huskyrc ]; then
    debug "sourcing ~/.huskyrc"
    . ~/.huskyrc
  fi

  export readonly husky_skip_init=1
  sh -e "$0" "$@"
  exitCode="$?"

  if [ $exitCode -ne 0 ]; then
    debug "$hook_name hook failed (exit code $exitCode)"
  fi

  exit $exitCode
fi
