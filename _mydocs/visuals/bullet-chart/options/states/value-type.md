---
layout:         page
title:          Value Type
published:      true
date:           2022-07-07
modified:   	2022-08-17
order:          /bullet-chart/options/states/value-type
internal:       calculate
---

**Default value:** Percentage

This option is only visible when no measures are connected to the ***States*** field. This allows to choose the type of value to manually assign to each state, which can be:

- **Absolute Value:** It allows to assign an absolute value for each state.  

     <img src="images/value-type-absolute-value.png" width="700">

- **Percentage:** By selecting this option, the value typed is the percentage of the maximum value between measures connected to the ***Value*** field. Let's take a look few example: 
    
    1. One measure in the ***Value*** field with ***Category***. 

        <img src="images/one-category-one-value.png" width="250">

        In this case, the percentage is calculated on the highest category value (in the example below: "Home Appliance"). 50% of "Home Appliance" value =  713.14K

        <img src="images/percentage-with-category-and-tooltips.png" width="700">
    
    2. One measure in the ***Value*** field without ***Category***. 

        <img src="images/one-value-no-category.png" width="250">
        
        In this case, the percentage is calculated on the measure value connected to the ***Value*** field (in the example below: "Sales Amount"). 50% of "Sales Amount" value =  2,109.96K

        <img src="images/percentage-one-measure-in-value.png" width="700">

    3. More measures in the ***Value*** field without ***Category***. 

        <img src="images/more-measures-in-value.png" width="250">

        In this case, the percentage is calculated on the highest measures value in ***Value*** field (in the example below: "Sales Cost"). 50% of "Sales Cost" value = 902.83K

        <img src="images/percentage-more-measures-in-value.png" width="700">

    4. More measures in the ***Value*** field and more measures in the ***Comparison Value*** field. 
        
        <img src="images/more-measures-in-value-and-comparison.png" width="250">

        In this case, the percentage is calculated on the highest measures value in both, ***Value*** and ***Comparison Value*** field (in the example below: "Sales Amount", that is connected to the ***Comparison Value*** field). 50% of "Sales Amount" value =  2,109.96K

        <img src="images/percentage-more-measures-in-comparison.png" width="700">

In both **Percentage** or **Absolute Value** selection, is possible to assign an **Auto** value to states, which is also the default value. **Auto** means that state value is calculated as a percentage on the maximum connected measure value, based on how many states are active. So if all 5 states have "Auto" as selected value, each state will be 20% of the maximum connected measure value plus the value of the previous state. 

<img src="images/all-auto.png" width="700">

To turn off one state, just assign "0" as state value. In the example below, since two states are inactive (State2 and State3), the value of the active states (State1, State4 and State5)  is recomputed.

<img src="images/2-states-off.png" width="700">



