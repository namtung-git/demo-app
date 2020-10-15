## Installation
RobotFramework is an open source test automation. It follow test case styles- keyword-driven and data-driven for writing test cases. Robot Framework provides good support for external libraries. The most popular library used with Robot Framework is Selenium Library used for web development & UI testing.

1. Install robot framework and selnium library with pip command, Python3.7 or 3.8 is preferred
```bash
 pip install robotframework robotframework-seleniumlibrary
```
2. Verify with Robot Framework installation
```bash
 robot --version
```

3. Install operating specific browser drivers for all browses you want to use in the test

    - [Chrome driver](https://sites.google.com/a/chromium.org/chromedriver/downloads)
    - [Firefox driver](https://github.com/mozilla/geckodriver/releases)
    - [Safari driver](https://webkit.org/blog/6900/webdriver-support-in-safari-10/)

4. The general approach to install a browser driver is downloading a right driver, such as chromedriver for Chrome, and placing it into a directory that is in PATH.
    - Extract zip files and place the files to /usr/bin or /usr/local/bin

    - A video tutorial can be found [here](https://youtu.be/ZqqIRgNn1vM?t=598)

5. Verify with Firefox driver
```
geckodriver --version
```
6. Start the test
```
 robot TC0.robot
```
7. Last but not least, keep learning and exploring!
    - [Udemy course](https://www.udemy.com/course/robot-framework-level-1/) 