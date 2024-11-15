#!/bin/bash

######################################################################
# Initialize

# Setup the environment
timestamp=$(date '+%Y%m%d%H%M%S')
cmdname=$(basename $0)
tmp=/tmp/$cmdname.$timestamp.$$

cat src/hello.py |
sed 's/^/<td class="code-content"><code>/' |
sed 's;$;</code></td></tr>;' |
awk '{print "<tr><td class=\"line-number\"><code>" NR "</code></td>" $0}' > $tmp-hello.py

cat src/index.html |
filehame -l___CODE___ - $tmp-hello.py > src/test.html
