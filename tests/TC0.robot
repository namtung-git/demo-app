*** Settings ***
Library  SeleniumLibrary

*** Test Cases ***
Demo app test example 1 
    Begin The Test
    Provide Text Input
    Add Villager
    Remove Villager
    End The Test

*** Keywords ***
Begin The Test
    Open Browser  http://127.0.0.1:3000  ff

Provide Text Input
    Input Text   name=firstName   Tung
    Input Text   name=lastName   Nguyen
    Select From List By Value  name=job  A Witcher

Add Villager
    Click Button  Add to your island
    Page Should Contain Element  xpath=//*[@id="root"]/div[1]/a[2]/button/span

Remove Villager
    Click Button  Edit villager profile
    Click Button  css=.card__btn

End The Test
    Close Browser
