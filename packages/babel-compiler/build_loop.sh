#!/bin/bash

counter=0

while [ $counter -lt 15 ]; do
    echo "*** Starting webpack + babel $BUILD_COMMAND (iteration $((counter + 1)))..."
    yarn $BUILD_COMMAND
    echo "*** Webpack + babel $BUILD_COMMAND completed."
    counter=$((counter + 1))
    if [ $counter -lt 15 ]; then
        echo "*** Waiting for 5 seconds before the next build..."
        sleep 5
    fi
done

echo "*** Webpack + babel $BUILD_COMMAND loop completed."
