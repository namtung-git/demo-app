## Installation
To clarify the concept, RobotFramework is an open source test automation. It follow test case styles- keyword-driven and data-driven for writing test cases. Robot Framework provides good support for external libraries. The most popular library used with Robot Framework is Selenium Library used for web development & UI testing.

1. Install robot framework and selnium library with pip command 
```bash
 pip install robotframework robotframework-seleniumlibrary
```
2. After a successful installation with python, you should be able to execute following comamnd to verify
```bash
 robot --version
```

3. Next you still need to install operating specific browser drivers for all browses you want to use in the test

[Chrome driver](https://sites.google.com/a/chromium.org/chromedriver/downloads)
[Firefox driver](https://github.com/mozilla/geckodriver/releases)
[Safari driver](https://webkit.org/blog/6900/webdriver-support-in-safari-10/)

4. The general approach to install a browser driver is downloading a right driver, such as chromedriver for Chrome, and placing it into a directory that is in PATH.

A video tutorial can be found [here](https://youtu.be/ZqqIRgNn1vM?t=598)