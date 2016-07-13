"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var MailsService = (function () {
    function MailsService(http) {
        this.http = http;
    }
    MailsService.prototype.getMails = function (id) {
        var url = "/api/folders/" + id;
        return this.http.get(url)
            .toPromise()
            .then(this.handleResponse);
    };
    MailsService.prototype.handleResponse = function (data) {
        var folder = data.json().folder;
        return folder;
    };
    MailsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MailsService);
    return MailsService;
}());
exports.MailsService = MailsService;