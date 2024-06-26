#!/bin/bash

counter=0

while [ $counter -lt 15 ]; do
    echo "*** Starting webpack + swc build (iteration $((counter + 1)))..."
    yarn build
    echo "*** Webpack + swc build completed."
    counter=$((counter + 1))
    if [ $counter -lt 15 ]; then
        echo "*** Waiting for 5 seconds before the next build..."
        sleep 5
    fi
done

echo "*** Webpack + swc build loop completed."
