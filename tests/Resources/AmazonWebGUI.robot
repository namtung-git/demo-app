*** Settings ***
Library  SeleniumLibrary

*** Keywords ***

Provide Text Input
    Input Text   name=firstName   Tung
    Input Text   name=lastName   Nasd
    Select From List By Value  name=job  A Witcher

Add Villager
    Click Button  Add to your island
    Page Should Contain Element  xpath=//*[@id="root"]/div[1]/a[2]/button/span

Remove Villager
    Click Button  Edit villager profile
    Click Button  css=.card__btn
