#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// const ejs = require('ejs')
const path = require('path');
// const
// const title = 'Test';
// ejs.renderFile(
//     path.resolve(__dirname, '../src/components/react-page.ejs'),
//      { name: title}, 
//      (err, data) => {
//     console.log(data, err);
// })
require('module-alias/register');
const packageJson = require('../package.json');
const commander_1 = require("commander");
function start() {
    commander_1.program
        .version(packageJson.version)
        .usage('<command> [option]')
        .command('init')
        .description('启动项目')
        .option('-f, --float <number>', 'float argument')
        .option('-i, --integer <number>', 'integer argument')
        .option('-v, --verbose', 'verbosity that can be increased')
        .option('-c, --collect <value>', 'repeatable value')
        .option('-l, --list <items>', 'comma separated list')
        .action((data) => __awaiter(this, void 0, void 0, function* () {
        yield Promise.resolve(222);
        console.log(111);
    }));
    // 一定要加这句话不然action内部不会执行, 并且不放在链式调用中,才可以正常显示版本
    // .parse(process.argv)
    commander_1.program.parse(process.argv);
}
start();
