Parse, combine & calculate bill of materials from Fusion 360 CSV exports

## Instructions
In Fusion 360 design your project by reusing identical Components. 

Right-click on top-level Component, select Create Drawing. 

Place your drawing schematics. Place a *Table* from the top menu. This will contain your Bill-of-materials (a.k.a. Parts List).

Export the BOM. Top menu *OUTPUT* -> *Output CSV*.

If your project contains sub-components, export *.csv* files for each component (see this [article](https://knowledge.autodesk.com/support/fusion-360/learn-explore/caas/sfdcarticles/sfdcarticles/How-to-add-subcomponents-to-Parts-List-in-Fusion-360-Drawing.html)).

Put the `.csv` files into */input*.

Run `node index.js`

## Functions
- Report different cuts
- Calculate theoretical volume of required material
- ~~Optimize cuts to save material~~ *To-do*