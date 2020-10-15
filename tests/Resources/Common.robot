*** Settings ***
Library  SeleniumLibrary

*** Keywords ***
Begin The Test
    Open Browser  http://127.0.0.1:3000  gc

End The Test
    Close Browser