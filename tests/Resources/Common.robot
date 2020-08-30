*** Settings ***
Library  SeleniumLibrary

*** Keywords ***
Begin The Test
    Open Browser  http://127.0.0.1:10005  ff

End The Test
    Close Browser