#!/usr/bin/env node

// const ejs = require('ejs')
const path = require('path')
// const
// const title = 'Test';
// ejs.renderFile(
//     path.resolve(__dirname, '../src/components/react-page.ejs'),
//      { name: title}, 
//      (err, data) => {
//     console.log(data, err);
// })
require('module-alias/register')

const packageJson = require('../package.json')

import {  program } from 'commander'
function start() {
    
    program
        .version(packageJson.version)
        .usage('<command> [option]')
        .command('init')
        .description('启动项目')
        .option('-f, --float <number>', 'float argument')
        .option('-i, --integer <number>', 'integer argument')
        .option('-v, --verbose', 'verbosity that can be increased')
        .option('-c, --collect <value>', 'repeatable value')
        .option('-l, --list <items>', 'comma separated list')

        .action( async (data) => {
            await Promise.resolve(222)
            console.log(111);
        })
        
       
        // 一定要加这句话不然action内部不会执行, 并且不放在链式调用中,才可以正常显示版本
        // .parse(process.argv)
        program.parse(process.argv)
}

start()

