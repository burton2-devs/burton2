# burton2

TO-DO LIST
********************************
-write stuff for about section, 
-calendar, 
-make people bios, 
-update kosher info if needed, 

MAINTAINING THE BURTON 2 WEBSITE
********************************
when adding new pages update nav-script.js function that sets active page in the navigation

Updating pages
===============
All of the pages are written in HTML + CSS + JavaScript.

If you add a new page, make sure to list it in both include/navigation.html AND include/footer.html


Updating Athena Locker
===============
To update files in athena, run scripts inside `update_websites`

Run:
`./update_websites {kerberos} {filepath from repo root}`
For example:
`./update_websites timbeaver index.html`
