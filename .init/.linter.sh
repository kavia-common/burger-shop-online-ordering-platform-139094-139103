#!/bin/bash
cd /home/kavia/workspace/code-generation/burger-shop-online-ordering-platform-139094-139103/burger_shop_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

