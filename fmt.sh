#!/bin/bash

prettier --write 'html/**/*.{js,jsx,ts,tsx,html,css}'

find . -type f -exec grep -l '^#![[:blank:]]*/bin/\(bash\|sh\)' {} \; | xargs shfmt -l -w
