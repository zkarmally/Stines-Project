$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/new_account.feature");
formatter.feature({
  "line": 1,
  "name": "New Account Page",
  "description": "As a user I want a New Account Page so that accounts can\nbe created",
  "id": "new-account-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 17045640000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "C234 - New Account page should display with error",
  "description": "",
  "id": "new-account-page;c234---new-account-page-should-display-with-error",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "a user with username \"techfiosdemo@gmail.com\" and password \"abc123\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user navigates to New Account Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "New Account page should display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "techfiosdemo@gmail.com",
      "offset": 22
    },
    {
      "val": "abc123",
      "offset": 60
    }
  ],
  "location": "NewAccountSteps.a_user_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 274677300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#username\"}\n  (Session info: chrome\u003d81.0.4044.92)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-C7EUEJE\u0027, ip: \u0027192.168.184.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.92, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: C:\\Users\\ZKARM_~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:49351}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 9fcd7dad0076c862402daee5e7e5fe74\n*** Element info: {Using\u003did, value\u003dusername}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat page.LoginPage.login(LoginPage.java:27)\r\n\tat steps.NewAccountSteps.a_user_with_username_and_password(NewAccountSteps.java:35)\r\n\tat ✽.Given a user with username \"techfiosdemo@gmail.com\" and password \"abc123\"(./src/test/java/features/new_account.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NewAccountSteps.user_navigates_to_New_Account_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewAccountSteps.new_Account_page_should_display()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 7973151600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "C235 - Create a new account",
  "description": "",
  "id": "new-account-page;c235---create-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "a user with username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user navigates to New Account Page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user creates a new account using title \"\u003ctitle\u003e\" Description \"\u003cdescription\u003e\" Amount \"\u003camount\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "new-account-page;c235---create-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "title",
        "description",
        "amount"
      ],
      "line": 15,
      "id": "new-account-page;c235---create-a-new-account;;1"
    },
    {
      "cells": [
        "techfiosdemo@gmail.com",
        "abc123",
        "Calzone",
        "two topping",
        "10"
      ],
      "line": 16,
      "id": "new-account-page;c235---create-a-new-account;;2"
    },
    {
      "cells": [
        "techfiosdemo@gmail.com",
        "abc123",
        "Sandwich",
        "Beef",
        "5"
      ],
      "line": 17,
      "id": "new-account-page;c235---create-a-new-account;;3"
    },
    {
      "cells": [
        "techfiosdemo@gmail.com",
        "abc123",
        "noodles",
        "Beef",
        "5"
      ],
      "line": 18,
      "id": "new-account-page;c235---create-a-new-account;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10442219200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "C235 - Create a new account",
  "description": "",
  "id": "new-account-page;c235---create-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "a user with username \"techfiosdemo@gmail.com\" and password \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user navigates to New Account Page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user creates a new account using title \"Calzone\" Description \"two topping\" Amount \"10\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "techfiosdemo@gmail.com",
      "offset": 22
    },
    {
      "val": "abc123",
      "offset": 60
    }
  ],
  "location": "NewAccountSteps.a_user_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 30891700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#username\"}\n  (Session info: chrome\u003d81.0.4044.92)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-C7EUEJE\u0027, ip: \u0027192.168.184.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.92, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: C:\\Users\\ZKARM_~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:49451}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: d1937c48c2833ed5357f3346109894e9\n*** Element info: {Using\u003did, value\u003dusername}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat page.LoginPage.login(LoginPage.java:27)\r\n\tat steps.NewAccountSteps.a_user_with_username_and_password(NewAccountSteps.java:35)\r\n\tat ✽.Given a user with username \"techfiosdemo@gmail.com\" and password \"abc123\"(./src/test/java/features/new_account.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NewAccountSteps.user_navigates_to_New_Account_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Calzone",
      "offset": 40
    },
    {
      "val": "two topping",
      "offset": 62
    },
    {
      "val": "10",
      "offset": 83
    }
  ],
  "location": "NewAccountSteps.user_creates_a_new_account_using_title_Description_Amount(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 7931474100,
  "status": "passed"
});
formatter.before({
  "duration": 12383233100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "C235 - Create a new account",
  "description": "",
  "id": "new-account-page;c235---create-a-new-account;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "a user with username \"techfiosdemo@gmail.com\" and password \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user navigates to New Account Page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user creates a new account using title \"Sandwich\" Description \"Beef\" Amount \"5\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "techfiosdemo@gmail.com",
      "offset": 22
    },
    {
      "val": "abc123",
      "offset": 60
    }
  ],
  "location": "NewAccountSteps.a_user_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 31250200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#username\"}\n  (Session info: chrome\u003d81.0.4044.92)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-C7EUEJE\u0027, ip: \u0027192.168.184.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.92, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: C:\\Users\\ZKARM_~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:49543}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 7474a0e388ca5e65ce11d72e7b1b5236\n*** Element info: {Using\u003did, value\u003dusername}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat page.LoginPage.login(LoginPage.java:27)\r\n\tat steps.NewAccountSteps.a_user_with_username_and_password(NewAccountSteps.java:35)\r\n\tat ✽.Given a user with username \"techfiosdemo@gmail.com\" and password \"abc123\"(./src/test/java/features/new_account.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NewAccountSteps.user_navigates_to_New_Account_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sandwich",
      "offset": 40
    },
    {
      "val": "Beef",
      "offset": 63
    },
    {
      "val": "5",
      "offset": 77
    }
  ],
  "location": "NewAccountSteps.user_creates_a_new_account_using_title_Description_Amount(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 7915431400,
  "status": "passed"
});
formatter.before({
  "duration": 21383739800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "C235 - Create a new account",
  "description": "",
  "id": "new-account-page;c235---create-a-new-account;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "a user with username \"techfiosdemo@gmail.com\" and password \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user navigates to New Account Page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user creates a new account using title \"noodles\" Description \"Beef\" Amount \"5\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "techfiosdemo@gmail.com",
      "offset": 22
    },
    {
      "val": "abc123",
      "offset": 60
    }
  ],
  "location": "NewAccountSteps.a_user_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 21314900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#username\"}\n  (Session info: chrome\u003d81.0.4044.92)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-C7EUEJE\u0027, ip: \u0027192.168.184.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.92, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: C:\\Users\\ZKARM_~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:49626}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 5c08bfe422d844a91bbb20a3ee0c6c60\n*** Element info: {Using\u003did, value\u003dusername}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat page.LoginPage.login(LoginPage.java:27)\r\n\tat steps.NewAccountSteps.a_user_with_username_and_password(NewAccountSteps.java:35)\r\n\tat ✽.Given a user with username \"techfiosdemo@gmail.com\" and password \"abc123\"(./src/test/java/features/new_account.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NewAccountSteps.user_navigates_to_New_Account_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "noodles",
      "offset": 40
    },
    {
      "val": "Beef",
      "offset": 62
    },
    {
      "val": "5",
      "offset": 76
    }
  ],
  "location": "NewAccountSteps.user_creates_a_new_account_using_title_Description_Amount(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 7945549000,
  "status": "passed"
});
});atter.after({
  "duration": 8015909800,
  "status": "passed"
});
formatter.before({
  "duration": 11280587900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "C235 - Create a new account",
  "description": "",
  "id": "new-account-page;c235---create-a-new-account;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "a user with username \"techfiosdemo@gmail.com\" and password \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user navigates to New Account Page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user creates a new account using title \"noodles\" Description \"Beef\" Amount \"5\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "techfiosdemo@gmail.com",
      "offset": 22
    },
    {
      "val": "abc123",
      "offset": 60
    }
  ],
  "location": "NewAccountSteps.a_user_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 65382700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#username\"}\n  (Session info: chrome\u003d81.0.4044.92)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-C7EUEJE\u0027, ip: \u0027192.168.184.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.92, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: C:\\Users\\ZKARM_~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:49515}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: ab2c857574bc2f08ceea85cd40749e7b\n*** Element info: {Using\u003did, value\u003dusername}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat page.LoginPage.login(LoginPage.java:27)\r\n\tat steps.NewAccountSteps.a_user_with_username_and_password(NewAccountSteps.java:35)\r\n\tat ✽.Given a user with username \"techfiosdemo@gmail.com\" and password \"abc123\"(./src/test/java/features/new_account.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NewAccountSteps.user_navigates_to_New_Account_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "noodles",
      "offset": 40
    },
    {
      "val": "Beef",
      "offset": 62
    },
    {
      "val": "5",
      "offset": 76
    }
  ],
  "location": "NewAccountSteps.user_creates_a_new_account_using_title_Description_Amount(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 8137954300,
  "status": "passed"
});
});