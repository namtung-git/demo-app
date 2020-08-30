*** Settings ***
Library  SeleniumLibrary

*** Keywords ***
Begin The Test
    Open Browser  http://localhost:3000/add-villager  ff

End The Test
    Close Browser