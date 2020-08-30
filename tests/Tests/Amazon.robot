*** Settings ***
Documentation  This is some basic test
Resource  ../Resources/AmazonWebGUI.robot
Resource  ../Resources/Common.robot
*** Variables ***

*** Test Cases ***
Case number 1
    [Tags]  Smoke
    Common.Begin The Test
    AmazonWebGUI.Provide Text Input
    AmazonWebGUI.Add Villager
    AmazonWebGUI.Remove Villager
    Common.End The Test

*** Keywords ***
