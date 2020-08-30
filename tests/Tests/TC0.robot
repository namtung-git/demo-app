*** Settings ***
Documentation  This is basic test for GUI
Resource  ../Resources/WebGUI.robot
Resource  ../Resources/Common.robot
*** Variables ***

*** Test Cases ***
Test Case 0
    [Tags]  Smoke
    Common.Begin The Test
    WebGUI.Provide Text Input
    WebGUI.Add Villager
    WebGUI.Remove Villager
    Common.End The Test

*** Keywords ***
