# Set Up Models in this Folder
this is where we are going to set up the schemas or models.
each schema will have it's own respective file in the /models
directory.

link to start reading about setting up a schema in mongoose:
["Mongoose Docs"](https://mongoosejs.com/docs/5.x/docs/guide.html)

 * Model Structure
   - Size
     - size of letter
   - Type
     - type ie lights... etc
   - Font
     - font type
   - Letters
     - should be an object of letters
     - should have a letter property
         - do we have uppercase and lowercase letters?
     - should have a nested object
         - should have a quantity 
         - should have amount available
          
 * Methods
   - GET
      - filters -- what do we want to filter for?
      - what information do we need?
      - are we restricting access?
   - POST
      - create inventory
         - what is the minimum required to create?
         - what information should not be accepted?
         - should type and size combination be unique?
             - don't want to create multiple documents with the same stuff.
             - could make query to find if the type and size already exist.
   - UPDATE
      - information to update
         - make sure null fields don't update in db
         - who performed the update? Possible feature to add
         - update quantities and availabilities in Letters for a given size
    

## Let me know if any issues