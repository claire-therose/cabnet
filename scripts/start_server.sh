#! /bin/bash
source ${HOME}/.bashrc

cd /root/cabnet/
npm install
npm run build
npm run start